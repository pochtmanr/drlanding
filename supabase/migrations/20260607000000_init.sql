-- ============================================================
-- Dr. Dubenko clinic site — initial schema
-- Supabase project: pwvtjuklkfelpxzxjmsi
--
-- ⚠️  This migration DROPS ALL EXISTING TABLES in the public
--     schema first (requested: the project is being reused).
--
-- Admin access model: the single admin account is created
-- manually in the Supabase dashboard (Auth → Users → Add user)
-- and EMAIL SIGNUPS MUST BE DISABLED in Auth settings. Any
-- authenticated user is treated as the admin.
-- ============================================================

-- 1) Drop everything in public ------------------------------------------------
do $$
declare
  r record;
begin
  for r in (select tablename from pg_tables where schemaname = 'public') loop
    execute format('drop table if exists public.%I cascade', r.tablename);
  end loop;
  for r in (
    select t.typname
    from pg_type t
    join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'public' and t.typtype = 'e'
  ) loop
    execute format('drop type if exists public.%I cascade', r.typname);
  end loop;
end $$;

-- 2) Types --------------------------------------------------------------------
create type public.inquiry_status as enum
  ('new', 'received', 'confirmed', 'rejected', 'responded', 'completed');

-- 3) Tables -------------------------------------------------------------------
create table public.appointments (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  full_name        text not null check (char_length(full_name) between 2 and 120),
  phone            text not null check (char_length(phone) between 7 and 25),
  email            text check (email is null or char_length(email) <= 254),
  preferred_clinic text,                 -- clinic id from src/content/clinics.ts
  preferred_date   date,
  service          text,                 -- service category slug
  message          text check (message is null or char_length(message) <= 2000),
  locale           text not null default 'he' check (locale in ('he', 'en', 'ru')),
  status           public.inquiry_status not null default 'new',
  admin_notes      text
);

create table public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  full_name   text not null check (char_length(full_name) between 2 and 120),
  phone       text check (phone is null or char_length(phone) <= 25),
  email       text check (email is null or char_length(email) <= 254),
  subject     text check (subject is null or char_length(subject) <= 200),
  message     text not null check (char_length(message) between 2 and 4000),
  locale      text not null default 'he' check (locale in ('he', 'en', 'ru')),
  status      public.inquiry_status not null default 'new',
  admin_notes text
);

create index appointments_status_created_idx
  on public.appointments (status, created_at desc);
create index contact_messages_status_created_idx
  on public.contact_messages (status, created_at desc);

-- 4) updated_at trigger ---------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger appointments_set_updated_at
  before update on public.appointments
  for each row execute function public.set_updated_at();

create trigger contact_messages_set_updated_at
  before update on public.contact_messages
  for each row execute function public.set_updated_at();

-- 5) Row Level Security ---------------------------------------------------------
alter table public.appointments enable row level security;
alter table public.contact_messages enable row level security;

-- Anonymous visitors may only INSERT fresh inquiries.
create policy "anon can create appointment"
  on public.appointments
  for insert
  to anon
  with check (status = 'new' and admin_notes is null);

create policy "anon can create contact message"
  on public.contact_messages
  for insert
  to anon
  with check (status = 'new' and admin_notes is null);

-- The signed-in admin can read and update.
create policy "admin reads appointments"
  on public.appointments for select to authenticated using (true);

create policy "admin updates appointments"
  on public.appointments for update to authenticated using (true) with check (true);

create policy "admin reads contact messages"
  on public.contact_messages for select to authenticated using (true);

create policy "admin updates contact messages"
  on public.contact_messages for update to authenticated using (true) with check (true);
