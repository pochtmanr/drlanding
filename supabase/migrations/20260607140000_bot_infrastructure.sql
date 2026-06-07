-- ============================================================
-- Bot infrastructure: WhatsApp source tracking, conversation
-- state, and pg_net webhook notifications to n8n.
--
-- Manual step AFTER applying (SQL editor, once — secrets must
-- never land in git). Replace <random-32-chars> with a generated
-- secret and reuse the same value in the n8n Header Auth
-- credential:
--
--   select vault.create_secret(
--     'https://n8n.dopplervpn.org/webhook/inquiry-new',
--     'n8n_inquiry_webhook_url');
--   select vault.create_secret(
--     '<random-32-chars>',
--     'n8n_webhook_secret');
--
-- Until those secrets exist the notify trigger is a silent no-op,
-- so this migration is safe to apply at any time.
-- ============================================================

-- 1) Extensions -----------------------------------------------------------------
create extension if not exists pg_net with schema extensions;

-- 2) Source tracking ------------------------------------------------------------
create type public.inquiry_source as enum ('website', 'whatsapp');

alter table public.appointments
  add column source   public.inquiry_source not null default 'website',
  add column wa_phone text check (wa_phone is null or char_length(wa_phone) <= 25);

alter table public.contact_messages
  add column source public.inquiry_source not null default 'website';

-- 3) Tighten public INSERT policies ----------------------------------------------
-- The website forms may only create 'website' rows. WhatsApp rows are
-- inserted by n8n via service_role, which bypasses RLS entirely (grants
-- already exist from 20260607120000_grants.sql).

drop policy "anon can create appointment" on public.appointments;
create policy "anon can create appointment"
  on public.appointments
  for insert
  to anon
  with check (status = 'new' and admin_notes is null
              and source = 'website' and wa_phone is null);

drop policy "authenticated can create appointment" on public.appointments;
create policy "authenticated can create appointment"
  on public.appointments
  for insert
  to authenticated
  with check (status = 'new' and admin_notes is null
              and source = 'website' and wa_phone is null);

drop policy "anon can create contact message" on public.contact_messages;
create policy "anon can create contact message"
  on public.contact_messages
  for insert
  to anon
  with check (status = 'new' and admin_notes is null and source = 'website');

drop policy "authenticated can create contact message" on public.contact_messages;
create policy "authenticated can create contact message"
  on public.contact_messages
  for insert
  to authenticated
  with check (status = 'new' and admin_notes is null and source = 'website');

-- 4) WhatsApp conversation state --------------------------------------------------
-- Questionnaire state machine, driven by the n8n "WhatsApp Inbound" workflow.
-- state: new | lang | menu | q_name | q_service | q_date | q_message | done | relay
create table public.wa_sessions (
  phone           text primary key,            -- E.164 without '+', e.g. 9725XXXXXXXX
  state           text not null default 'new',
  locale          text not null default 'he' check (locale in ('he', 'en', 'ru')),
  answers         jsonb not null default '{}'::jsonb,
  appointment_id  uuid references public.appointments (id) on delete set null,
  last_inbound_at timestamptz,                 -- drives the WhatsApp 24h-window check
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create trigger wa_sessions_set_updated_at
  before update on public.wa_sessions
  for each row execute function public.set_updated_at();

-- Maps Telegram group messages <-> WhatsApp numbers for the reply relay,
-- and doubles as the conversation audit log.
create table public.wa_relay_messages (
  id            bigint generated always as identity primary key,
  created_at    timestamptz not null default now(),
  wa_phone      text not null,
  direction     text not null check (direction in ('inbound', 'outbound')),
  body          text,
  tg_message_id bigint,                        -- message id in the Telegram group
  wa_message_id text                           -- Meta message id (wamid.*)
);

create index wa_relay_messages_tg_msg_idx
  on public.wa_relay_messages (tg_message_id);
create index wa_relay_messages_phone_idx
  on public.wa_relay_messages (wa_phone, created_at desc);

-- Service-role only: RLS on, zero policies for anon/authenticated.
alter table public.wa_sessions enable row level security;
alter table public.wa_relay_messages enable row level security;

grant all on public.wa_sessions, public.wa_relay_messages to service_role;
grant usage, select on all sequences in schema public to service_role;

-- 5) Webhook notification trigger --------------------------------------------------
-- Fires on EVERY insert (website forms via anon, WhatsApp via service_role)
-- so all channels share one notification pipeline in n8n. Async via pg_net:
-- the inserting transaction never waits on n8n and never fails if it's down.
-- Note: pg_net is fire-and-forget (no retries) — the daily digest workflow
-- is the safety net for missed notifications.
create or replace function public.notify_inquiry_webhook()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_url    text;
  v_secret text;
begin
  select decrypted_secret into v_url
    from vault.decrypted_secrets where name = 'n8n_inquiry_webhook_url';
  select decrypted_secret into v_secret
    from vault.decrypted_secrets where name = 'n8n_webhook_secret';

  if v_url is null or v_secret is null then
    return new;  -- secrets not configured yet: no-op
  end if;

  perform net.http_post(
    url     => v_url,
    body    => jsonb_build_object(
                 'table',  tg_table_name,
                 'event',  tg_op,
                 'record', to_jsonb(new)),
    headers => jsonb_build_object(
                 'Content-Type', 'application/json',
                 'X-Webhook-Secret', v_secret),
    timeout_milliseconds => 5000
  );
  return new;
exception when others then
  raise warning 'notify_inquiry_webhook: %', sqlerrm;
  return new;  -- never block the insert
end;
$$;

create trigger appointments_notify_webhook
  after insert on public.appointments
  for each row execute function public.notify_inquiry_webhook();

create trigger contact_messages_notify_webhook
  after insert on public.contact_messages
  for each row execute function public.notify_inquiry_webhook();
