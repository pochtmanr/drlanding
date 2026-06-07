# Bot Infrastructure — Manual Setup Checklist

Everything that must be done **by a human** (accounts, tokens, dashboard
clicks). Each item notes which n8n workflow it blocks — see
`docs/bots/architecture.md` for the workflow map and `prompts/bots/` for the
build prompts.

## 1. Telegram (blocks WF1 and everything after)

✅ **Fully done 2026-06-07.** Bot @DrDubenkoHelperbot (token in
`.env.bots.local`), privacy mode disabled (verified
`can_read_all_group_messages: true`), bot re-added to group "DrDubenko",
chat_id `-5240023070` verified via `getChat`. WF2 now owns the Telegram
webhook, so `getUpdates` returns nothing — that's expected; to debug raw
updates, temporarily deactivate WF2 (which calls `deleteWebhook`).
Note: if the group ever upgrades to a supergroup the chat_id changes to
`-100…` and must be updated in `.env.bots.local` **and in the WF1 + WF2
nodes in n8n** (hardcoded there).

## 2. Meta / WhatsApp Cloud API (blocks WF5 + WF6 only)

➡️ **Full click-level guide: `docs/bots/whatsapp-setup.md`** — follow it
top-to-bottom; it collects every value into `.env.bots.local`. Summary:

1. Create the developer app (Business type) → App ID + App Secret.
2. Add the WhatsApp product → WABA + test number; round-trip a test message.
3. Register the spare number (**must not be registered in the WhatsApp app**)
   → Phone number ID.
4. System-user **permanent token** (`whatsapp_business_messaging` +
   `whatsapp_business_management`, never expires).
5. Webhook wiring happens during the WF5 build session.
6. **Start early:** submit the Hebrew `clinic_reply` Utility template —
   approval can take days; WF6 needs it for replies outside the 24h window.
7. Switch the app to Live + start business verification to message real
   patients (beyond 5 test numbers).

## 3. Supabase (blocks notifications)

✅ **Fully done 2026-06-07.** Migration applied; both Vault secrets created
(`n8n_inquiry_webhook_url`, `n8n_webhook_secret` — the secret value is also
in `.env.bots.local` as `N8N_WEBHOOK_SECRET`); service_role key stored in the
n8n credential `Supabase service_role`. End-to-end verified: INSERT into
`appointments` → trigger → WF1 → Telegram message → ✅ tap → status
`confirmed`.

## 4. n8n credentials (blocks all workflow-build sessions)

Create these in n8n (Credentials → Add), with **exactly these names** — the
build prompts in `prompts/bots/` reference them:

| Credential name | Type | Value | Status |
|---|---|---|---|
| `Telegram Bot` | Telegram API | bot token (in `.env.bots.local`) | ✅ created 2026-06-07 (id `g37apzIgPT83A8J6`) |
| `WhatsApp Cloud API` | WhatsApp API | permanent token + WABA id (whatsapp-setup.md step 5) | ⬜ |
| `WhatsApp Trigger` | WhatsApp OAuth | App ID + App Secret (whatsapp-setup.md step 1) — used by the WF5 trigger to verify webhook signatures | ⬜ |
| `Supabase service_role` | Supabase API | host `https://pwvtjuklkfelpxzxjmsi.supabase.co`, service_role key (step 3.4) | ✅ created 2026-06-07 (id `23plOugq5zgqb8oT`) |
| `OpenAI (Clinic Bots)` | OpenAI API | OpenAI API key (in `.env.bots.local` as `OPENAI_API_KEY`) | ✅ created 2026-06-07 (id `mf0e4WadjQN5mpK4`) |
| `Inquiry Webhook Auth` | Header Auth | name `X-Webhook-Secret`, value = secret from step 3.2 | ✅ created 2026-06-07 (id `UVUzOciGjOjIya0X`) |

Also: ~~n8n → Settings → **API** → create an API key~~ ✅ done — key in
`.env.bots.local` as `N8N_API_KEY`.

## 5. Values the build sessions will ask for

All collected in **`.env.bots.local`** (gitignored) — keep it current:

- Telegram bot token + username + group `chat_id` ✅ filled & verified
- WhatsApp App ID/Secret, Phone number ID, WABA id, permanent token,
  template name (fill while following `whatsapp-setup.md`)
- n8n API key ✅ filled; webhook secret ✅ filled (`N8N_WEBHOOK_SECRET`)

## 6. After everything works

- 🔐 **Rotate the server root password** (it was shared in a chat session) and
  switch SSH to key-based auth: `passwd` on the server, then add your key to
  `~/.ssh/authorized_keys` and set `PasswordAuthentication no` in
  `/etc/ssh/sshd_config`.
- Remove any test phone numbers from the Meta app.
- Verify the daily digest arrived at 08:00 the next morning.
