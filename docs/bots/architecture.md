# Bot Infrastructure — Architecture

Telegram + WhatsApp bots for the clinic, built on the existing n8n instance at
`https://n8n.dopplervpn.org` (Ubuntu server `185.203.240.174`), Supabase project
`pwvtjuklkfelpxzxjmsi`, and the OpenAI API.

## Big picture

```
Website form ──┐
               ├─> Supabase INSERT ──> pg_net AFTER INSERT trigger ──> n8n WF1 ──> Telegram group
WhatsApp WF5 ──┘    (appointments /        (URL + secret read              (Hebrew message +
                     contact_messages)      from Vault)                     ✅/❌ status buttons)

Telegram group ──> WF2 Router  ← the ONLY workflow with a Telegram Trigger
  ├─ callback st:*          → apply status change via Supabase → edit message
  ├─ callback ad:*          → WF3 (draft mode): AI drafts a WhatsApp reply
  ├─ callback ds:* / dx:*   → WF6 send draft / cancel
  ├─ reply to a bot message → WF6 relay the doctor's text to WhatsApp
  └─ @bot mention           → WF3 (assistant mode): OpenAI agent, read tools,
                              status changes only ever PROPOSED via buttons

WhatsApp number ──> WF5 Inbound  ← the ONLY workflow with a WhatsApp Trigger
  questionnaire state machine in wa_sessions (lang → menu → name → service → date → note)
  → INSERT into appointments (service_role, source='whatsapp') → WF1 fires automatically
  free text → forwarded to the Telegram group + logged in wa_relay_messages

WF4 Daily Digest: cron 08:00 Asia/Jerusalem → counts + attention list → Telegram group
```

Key property: **one notification pipeline**. Website and WhatsApp bookings both
land in `appointments`; the DB trigger notifies n8n regardless of who inserted.
WF5 never sends Telegram notifications for bookings directly.

## Components

### Supabase (migration `20260607140000_bot_infrastructure.sql`)

- `appointments.source` (`website` | `whatsapp`), `appointments.wa_phone`,
  `contact_messages.source`. Public-form INSERT policies require
  `source = 'website'`; WhatsApp rows are inserted by n8n with the
  **service_role** key, which bypasses RLS.
- `wa_sessions` — WhatsApp questionnaire state machine
  (`phone` pk, `state`, `locale`, `answers` jsonb, `appointment_id`,
  `last_inbound_at` for the 24h-window check).
- `wa_relay_messages` — maps Telegram group message ids ↔ WhatsApp numbers for
  the reply relay; doubles as a conversation audit log.
- `notify_inquiry_webhook()` — `AFTER INSERT` on both inquiry tables; reads
  `n8n_inquiry_webhook_url` + `n8n_webhook_secret` from **Vault**, posts via
  `net.http_post` with an `X-Webhook-Secret` header. Exception-safe: a broken
  webhook can never fail a patient's form submission. No-ops until the Vault
  secrets are created (see setup checklist).

### n8n workflows

| WF | Name | Trigger | Purpose |
|----|------|---------|---------|
| 1 | Inquiry Notify | Webhook `POST /webhook/inquiry-new` (Header Auth) | Format Hebrew notification → Telegram group, with ✅ אשר / ❌ דחה buttons for appointments |
| 2 | Telegram Router | **Telegram Trigger** (the only one) | Dispatch callbacks + group messages to the right handler |
| 3 | AI Assistant | Execute Workflow | OpenAI agent (assistant mode: answer @-mentions; draft mode: compose WhatsApp replies) |
| 4 | Daily Digest | Schedule, 08:00 Asia/Jerusalem | Counts of new/received/confirmed + items needing attention |
| 5 | WhatsApp Inbound | **WhatsApp Trigger** (the only one) | Questionnaire state machine + free-text relay to Telegram |
| 6 | WhatsApp Outbound | Execute Workflow | Single send path to WhatsApp; enforces the 24h window |

Build prompts for each workflow: `prompts/bots/`.

## Data contracts

### WF1 webhook payload (from the DB trigger)

```json
{
  "table": "appointments" | "contact_messages",
  "event": "INSERT",
  "record": { "...": "full row, incl. source / wa_phone" }
}
```

Authentication: header `X-Webhook-Secret: <value of the n8n_webhook_secret Vault secret>`.

### Telegram `callback_data` protocol (64-byte limit!)

```
st:a:<uuid>:<status>   set status on appointments        (st:c:… = contact_messages)
ad:<wa_phone>          "🤖 AI draft" on a relayed WhatsApp message
ds:<wa_phone>          "✅ send" an AI draft — draft text is read from the
                       Telegram message body, NOT callback_data (size limit)
dx:<wa_phone>          cancel a draft
```

`uuid` (36) + `st:a:` (5) + `:confirmed` (10) = 51 bytes — fits. Never add
longer prefixes/payloads without rechecking the 64-byte budget.

### WF6 input contract

```json
{ "phone": "9725XXXXXXXX", "text": "...", "tg_chat_id": 0, "tg_reply_to": 0 }
```

### wa_sessions.state machine (WF5)

```
(no session | stale done) → lang → menu ─┬─ book:    q_name → q_service → q_date → q_message → done
                                         └─ message: relay
free text while done/relay → forward to Telegram group
```

## Security & access

- n8n talks to Supabase via **PostgREST** (`https://pwvtjuklkfelpxzxjmsi.supabase.co/rest/v1/...`)
  with the **service_role** key stored only in n8n's credential store —
  never in this repo, never in Vercel env.
- The AI agent gets **whitelisted, parameterized HTTP tools** (list / search /
  counts), never raw SQL and never a write tool. Status changes are proposed as
  inline buttons; the only code path that writes a status from Telegram is the
  `st:` branch of WF2, i.e. always behind a human tap.
- Webhook secret + URL live in Supabase Vault; the trigger function is
  `security definer` so it can read `vault.decrypted_secrets`.

## PII note

Patient names and phone numbers transit (a) the private Telegram group
(doctor + helper only, invite-only) and (b) the OpenAI API when the assistant
or draft mode runs. No medical-history fields exist in the schema. OpenAI does
not train on API data by default. This is acceptable at clinic scale; revisit
if the data sensitivity grows (e.g. diagnoses in free-text messages).

## Known caveats

- **pg_net is fire-and-forget** — no retries; if n8n is down the instant
  notification is lost. The daily digest (WF4) reports everything still in
  `new`, so nothing stays silently dropped for more than a day.
  Debugging: `select * from net._http_response order by id desc limit 5;`
- **One Telegram webhook per bot token** — only WF2 may have a Telegram
  Trigger. Activating a second trigger workflow steals the webhook and
  silently breaks WF2. Same rule for the WhatsApp Trigger (WF5).
- **Telegram privacy mode** must be disabled via @BotFather, or the bot will
  never see group @-mentions/replies (the #1 silent failure).
- **WhatsApp 24h customer-service window** — free-form sends outside it fail
  with error `131047`; WF6 checks `wa_sessions.last_inbound_at` and falls back
  to a pre-approved template (or a warning if none is approved yet).
