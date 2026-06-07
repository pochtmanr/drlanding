# WF6 — WhatsApp Outbound Sender (n8n)

Build an n8n workflow named **`WF6 WhatsApp Outbound`** on
`https://n8n.dopplervpn.org` (REST API at `/api/v1`, header `X-N8N-API-KEY` —
ask me for the key). No trigger of its own — invoked by `WF2 Telegram Router`
via **Execute Workflow**. This is the **single send path** to WhatsApp:
doctor's direct replies (WF2 branch 5) and approved AI drafts (branch 3) both
land here. After building, open **WF2** and wire its branch 3 (`ds:`) and
branch 5 (reply-relay) stubs to this workflow.

Ask me for: the WhatsApp **Phone number ID**, the Telegram group **chat_id**,
and whether the Hebrew template (`clinic_reply` or similar) has been approved
yet in Meta — see `docs/bots/setup-checklist.md` § 2.6.

## Credentials

`WhatsApp Cloud API`, `Telegram Bot`, `Supabase service_role`
(PostgREST base `https://pwvtjuklkfelpxzxjmsi.supabase.co/rest/v1`).

## Input contract (Execute Workflow Trigger)

```json
{ "phone": "9725XXXXXXXX", "text": "...", "tg_chat_id": 0, "tg_reply_to": 0 }
```

## Nodes

1. **Execute Workflow Trigger.**
2. **GET** `/wa_sessions?phone=eq.<phone>&select=last_inbound_at,locale`.
3. **IF `last_inbound_at` within the last 24h** (WhatsApp customer-service
   window — outside it, free-form sends fail with Meta error `131047`):
   - **WhatsApp send** (text message, to `<phone>`, via Phone number ID).
   - **POST** `/wa_relay_messages`
     `{ wa_phone: <phone>, direction: "outbound", body: <text>, wa_message_id: <from response> }`.
   - **Telegram sendMessage** to `tg_chat_id`, reply to `tg_reply_to`:
     `נשלח ✅`.
4. **ELSE (window closed):**
   - If an approved template exists: send the template message (body
     parameter = patient name from `wa_sessions`/`answers` if available,
     else generic), log it to `wa_relay_messages`, and tell the group:
     `⚠️ חלון 24 השעות נסגר — נשלחה תבנית במקום ההודעה. הטקסט יישלח כשהמטופל/ת יגיב/תגיב.`
     Optionally stash the undelivered text in `wa_sessions.answers.pending_reply`
     so WF5 can flush it on the patient's next inbound message (if you add
     this, also add the flush step to WF5 and note it in its workflow notes).
   - If no template approved yet: **send nothing to the patient**; tell the
     group `⚠️ חלון 24 השעות נסגר ואין תבנית מאושרת — לא ניתן לשלוח.`.
5. **Error handling:** any WhatsApp API error → Telegram message to the group
   with the error code (esp. `131047`) instead of failing silently. Never
   retry-loop a send (duplicate messages to patients are worse than a miss).

## Acceptance criteria

- With a fresh inbound from a test phone (<24h): WF2 reply-relay → text
  arrives on WhatsApp, `wa_relay_messages` gains an `outbound` row with
  `wa_message_id`, group sees `נשלח ✅` as a reply to the doctor's message.
- AI-draft path: 🤖 → draft → ✅ שלח → arrives on WhatsApp.
- Simulate a closed window (set `last_inbound_at` to 2 days ago via SQL) →
  template branch (or the "no template" warning) fires; no `131047` error
  reaches the patient flow.
- Both WF2 stubs (branches 3 and 5) are wired to this workflow and the
  whole round-trip works: patient WA message → group → doctor reply → patient.
