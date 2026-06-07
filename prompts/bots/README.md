# Bot Workflow Prompts — n8n Build Sessions

The **repo-side foundation is already built** (migration, types, admin badge,
docs — see `docs/bots/architecture.md`). These 6 prompts build the n8n
workflows. Unlike the page prompts in `prompts/`, these are **mostly
sequential** — they share one bot, one webhook each, and a routing contract:

```
order:  01 ──> 02 ──> { 03, 04 in parallel } ──> 05 ──> 06
```

```
claude "$(cat prompts/bots/01-inquiry-notify.md)"
claude "$(cat prompts/bots/02-telegram-router.md)"
claude "$(cat prompts/bots/03-ai-assistant.md)"      # parallel with 04
claude "$(cat prompts/bots/04-daily-digest.md)"      # parallel with 03
claude "$(cat prompts/bots/05-whatsapp-inbound.md)"
claude "$(cat prompts/bots/06-whatsapp-outbound.md)" # then revisit 02/03 stubs
```

## Before the first session (one-time, human)

Complete `docs/bots/setup-checklist.md`: Telegram bot (+ **privacy mode
disabled**), group + chat_id, Meta app + WhatsApp number + permanent token,
migration applied, the two Vault secrets, the 5 n8n credentials (exact names:
`Telegram Bot`, `WhatsApp Cloud API`, `Supabase service_role`, `OpenAI`,
`Inquiry Webhook Auth`), and an n8n API key.

## How sessions reach n8n

- n8n UI/API: `https://n8n.dopplervpn.org` — REST API at
  `https://n8n.dopplervpn.org/api/v1` with header `X-N8N-API-KEY: <key>`
  (create/update workflows as JSON; credentials are referenced by name/id but
  their secrets are never readable via the API).
- SSH to the host if needed: `root@185.203.240.174` (e.g. to inspect docker
  logs: `docker logs n8n --tail 100`).
- Workflows must be **activated** after creation (`POST /workflows/{id}/activate`
  or the UI toggle).

## Shared rules (every prompt restates the parts it needs)

- **Hebrew copy is written by the executing agent itself**, directly into the
  workflow JSON — never via any external API, script, or translation service.
- **One Telegram Trigger total** (lives in WF2) and **one WhatsApp Trigger
  total** (lives in WF5). Never add another — activating it steals the webhook.
- **callback_data protocol** (64-byte Telegram limit):
  `st:a|c:<uuid>:<status>` status change · `ad:<phone>` AI draft ·
  `ds:<phone>` send draft (text read from message body) · `dx:<phone>` cancel.
- **WF1 webhook payload**: `{ table, event: "INSERT", record: <full row> }`,
  authenticated by header `X-Webhook-Secret`.
- Supabase access is always PostgREST via the `Supabase service_role`
  credential; the AI agent only ever gets whitelisted read tools.
- Status vocabulary: `new · received · confirmed · rejected · responded · completed`
  (Hebrew labels: חדשה · התקבלה · אושרה · נדחתה · נענתה · הושלמה).

## Values to paste into each session when asked

chat_id of the Telegram group, bot username, WhatsApp Phone-number ID,
n8n API key, (later) approved template name.

## After all sessions

Run the end-to-end check in `docs/bots/architecture.md` § verification order:
website form → Telegram message → ✅ → status changes → WhatsApp questionnaire
→ admin badge + Telegram notification → relay/draft round-trip → next-morning
digest.
