# WF3 — AI Assistant (n8n)

Build an n8n workflow named **`WF3 AI Assistant`** on
`https://n8n.dopplervpn.org` (REST API at `/api/v1`, header `X-N8N-API-KEY` —
ask me for the key). No webhook of its own — it is invoked by
`WF2 Telegram Router` via **Execute Workflow** in two modes. After building,
open WF2 and wire its branch 2 (`ad:` → draft mode) and branch 6
(@-mention → assistant mode) stubs to this workflow.

Ask me for: the Telegram group **chat_id**.

## Credentials

`OpenAI`, `Telegram Bot`, `Supabase service_role`
(PostgREST base `https://pwvtjuklkfelpxzxjmsi.supabase.co/rest/v1`).

## Input contract (Execute Workflow Trigger)

```json
{ "mode": "assistant", "question": "...", "tg_chat_id": 0, "tg_message_id": 0 }
{ "mode": "draft",     "phone": "9725XXXXXXXX", "tg_chat_id": 0, "tg_message_id": 0 }
```

## Mode `assistant` — @-mention Q&A

**AI Agent node** (OpenAI chat model, e.g. gpt-4o). System prompt in Hebrew,
written by you (the executing agent) directly — include: clinic context
(orthopedic clinic of Dr. Dubenko), today's date expression, the status
vocabulary `new/received/confirmed/rejected/responded/completed` with Hebrew
labels (חדשה/התקבלה/אושרה/נדחתה/נענתה/הושלמה), answer in Hebrew, be concise,
and **never claim to have changed anything — only propose changes via the
propose tool**.

**Tools — whitelisted HTTP Request tool nodes ONLY (no raw SQL, no write
endpoints).** Each is a fixed PostgREST template with the service_role
headers (`apikey`, `Authorization: Bearer <key>`) where the model fills only
the documented parameters:

- `list_appointments(status?, limit=10)` →
  `GET /appointments?select=id,full_name,phone,preferred_date,service,status,source,created_at&order=created_at.desc&limit=<limit>` (+`&status=eq.<status>`)
- `list_messages(status?, limit=10)` → same shape on `/contact_messages`
  with `subject` instead of the appointment fields.
- `search_inquiries(q)` → both tables with `full_name=ilike.*<q>*` or, when q
  is digits, `phone=like.*<q>*`.
- `counts()` → `GET /appointments?select=status` and
  `GET /contact_messages?select=status` (header `Range: 0-999`), aggregate
  counts per status in the tool output.
- `propose_status_change(table, id, status, patient_label)` → **a no-op echo
  tool** (Code tool): returns the proposal as structured JSON. It performs no
  HTTP call. This keeps writes impossible inside the agent.

**Output handling:** Structured Output Parser →
`{ "answer": string, "proposal": { "table": "a"|"c", "id": "...", "status": "...", "label": "..." } | null }`.

- No proposal → Telegram sendMessage (reply to `tg_message_id`): the answer.
- Proposal → sendMessage: answer + `\n\n❓ לאשר שינוי סטטוס של <label> ל<hebrew status>?`
  with inline keyboard `✅ אישור` → `st:<a|c>:<id>:<status>` / `❌ ביטול` →
  `dx:0`. The actual write happens only in WF2 branch 1 when a human taps ✅.
  (callback_data 64-byte limit: `st:a:<36-char uuid>:<status>` fits; never
  put names in callback_data.)

## Mode `draft` — compose a WhatsApp reply for approval

1. GET `/wa_relay_messages?wa_phone=eq.<phone>&order=created_at.desc&limit=10&select=direction,body,created_at`
   and `/wa_sessions?phone=eq.<phone>&select=locale,answers`.
2. OpenAI: system prompt (you write it, in English is fine) — "draft a short,
   warm, professional reply from the clinic of Dr. Dubenko in the patient's
   language (locale: he/ru/en), based on the recent conversation; no medical
   advice; no commitments to specific times unless present in the
   conversation."
3. Telegram sendMessage to the group:
   `📝 טיוטה ל־<phone>:\n\n<draft text>`
   with inline keyboard `✅ שלח` → `ds:<phone>` / `❌ בטל` → `dx:<phone>`.
   ⚠️ The header line + blank line format is a contract: WF2 branch 3
   extracts the draft by stripping everything up to the first `\n\n`.

## Acceptance criteria

- In the group: `@<bot> כמה בקשות תור חדשות יש?` → Hebrew answer with the
  correct count (cross-check in `/admin`).
- `@<bot> מה הסטטוס של <real patient name>?` → finds the row, answers.
- `@<bot> אשרי את התור של <name>` → proposal message with ✅/❌; tapping ✅
  changes the status (via WF2); the AI never changed it directly.
- With a `wa_relay_messages` test row: draft mode produces a draft in the
  patient's locale with the ✅/❌ keyboard and the exact header format.
- Agent has no tool that can write to Supabase (verify the workflow JSON).
