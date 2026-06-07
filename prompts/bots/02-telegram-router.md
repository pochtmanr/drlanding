# WF2 — Telegram Router (n8n)

Build and activate an n8n workflow named **`WF2 Telegram Router`** on
`https://n8n.dopplervpn.org` (REST API at `/api/v1`, header `X-N8N-API-KEY` —
ask me for the key). This is **the only workflow allowed to contain a
Telegram Trigger** — one webhook per bot token; a second trigger workflow
would steal it. Every Telegram interaction for the whole bot system is routed
from here.

Ask me for: the Telegram group **chat_id** and the **bot username**
(for mention detection). Prerequisite already done: BotFather privacy mode
is **disabled** (otherwise group messages never arrive — if branches 5/6
get no input, that's the first thing to recheck).

## Credentials

`Telegram Bot` (trigger + sends), `Supabase service_role` (PostgREST,
host `https://pwvtjuklkfelpxzxjmsi.supabase.co`).

## callback_data protocol (shared contract — do not deviate)

```
st:a:<uuid>:<status>   set appointments.status
st:c:<uuid>:<status>   set contact_messages.status
ad:<wa_phone>          AI-draft a reply to this WhatsApp number   → WF3
ds:<wa_phone>          send the draft (text taken from message body) → WF6
dx:<wa_phone>          cancel the draft
```

## Nodes

1. **Telegram Trigger** — updates: `message`, `callback_query`.
2. **Switch** (Code node or Switch with expressions) over the update:

   **Branch 1 — `callback_query` starting `st:`**
   Parse `st:<a|c>:<uuid>:<status>`. PATCH via Supabase node / HTTP Request:
   `PATCH /rest/v1/appointments?id=eq.<uuid>` (or `contact_messages`) body
   `{"status": "<status>"}`. Then:
   - `answerCallbackQuery` with Hebrew text `עודכן ✅` (or `שגיאה ❌` on
     failure — check the PostgREST response).
   - `editMessageText`: original text + `\n\n✔️ הסטטוס עודכן ל<hebrew label>`
     and **remove the inline keyboard**.
   Hebrew status labels: new=חדשה, received=התקבלה, confirmed=אושרה,
   rejected=נדחתה, responded=נענתה, completed=הושלמה.
   ⚠️ This branch is the ONLY place in the whole system that writes a status
   from Telegram — it always sits behind a human button tap.

   **Branch 2 — `callback_query` starting `ad:`**
   Execute Workflow → `WF3 AI Assistant` with
   `{ mode: "draft", phone: <parsed>, tg_chat_id, tg_message_id }`.
   Then `answerCallbackQuery` ("מכין טיוטה...").
   (If WF3 doesn't exist yet, leave this branch as a NoOp with a note —
   revisit after building 03.)

   **Branch 3 — `callback_query` starting `ds:`**
   Extract the draft text from `callback_query.message.text` — strip the
   header line (everything up to and including the first `\n\n`). Execute
   Workflow → `WF6 WhatsApp Outbound` with
   `{ phone, text, tg_chat_id, tg_reply_to: callback_query.message.message_id }`.
   Then `editMessageText` appending `\n\n📤 נשלח` + remove keyboard.
   (NoOp stub until 06 exists.)

   **Branch 4 — `callback_query` starting `dx:`**
   `editMessageText` → append `\n\n🚫 בוטל`, remove keyboard,
   `answerCallbackQuery`.

   **Branch 5 — `message` that is a reply to one of the bot's messages**
   (`message.reply_to_message.from.is_bot === true`).
   GET `/rest/v1/wa_relay_messages?tg_message_id=eq.<reply_to.message_id>&select=wa_phone&limit=1`.
   If a row exists → Execute Workflow → `WF6` with
   `{ phone, text: message.text, tg_chat_id, tg_reply_to: message.message_id }`.
   If not → NoOp (a reply to a notification message, not a relay — ignore).
   (NoOp stub until 06 exists.)

   **Branch 6 — `message` whose text contains `@<bot username>`**
   Execute Workflow → `WF3` with
   `{ mode: "assistant", question: <text without the mention>, tg_chat_id,
      tg_message_id: message.message_id }`.
   (NoOp stub until 03 exists.)

   **Branch 7 — everything else** → NoOp.

3. Restrict processing to our group: if `chat.id` ≠ the clinic group chat_id,
   NoOp (prevents random users DM-ing the bot into our flows).

## Acceptance criteria

- Tap `✅ אשר` on a WF1 notification → row status becomes `confirmed`
  (verify in the site's `/admin`), message edited with ✔️ line, keyboard gone,
  toast "עודכן ✅".
- Tap `❌ דחה` → same with `rejected`.
- A second tap on an already-edited message does nothing harmful
  (keyboard already removed).
- Messages from other chats are ignored.
- Branches 2/3/5/6 exist as documented stubs (or wired, if 03/06 already
  built — ask me which state we're in).
