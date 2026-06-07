# WF5 — WhatsApp Inbound (n8n)

Build and activate an n8n workflow named **`WF5 WhatsApp Inbound`** on
`https://n8n.dopplervpn.org` (REST API at `/api/v1`, header `X-N8N-API-KEY` —
ask me for the key). This is **the only workflow allowed to contain a
WhatsApp Trigger** (one webhook per Meta app). It runs the patient-facing
questionnaire and relays free-form messages to the Telegram group.

Ask me for: the Telegram group **chat_id**, the WhatsApp **Phone number ID**.
Manual step during the build: paste the trigger's callback URL + verify token
into the Meta app (dashboard → WhatsApp → Configuration → Webhook → subscribe
to `messages`) — walk me through it when you get there.

## Credentials

`WhatsApp Cloud API`, `Telegram Bot`, `Supabase service_role`
(PostgREST base `https://pwvtjuklkfelpxzxjmsi.supabase.co/rest/v1`).

## State machine (table `public.wa_sessions`, pk `phone`)

```
(no session, or state='done' with updated_at older than 7 days → reset)
  → lang → menu ─┬─ "book":    q_name → q_service → q_date → q_message → done
                 └─ "message": relay
free text while done/relay → relay to Telegram
```

Columns: `phone` (E.164 digits, no `+`), `state`, `locale` (he/ru/en),
`answers` (jsonb accumulator), `appointment_id`, `last_inbound_at`.

## Nodes

1. **WhatsApp Trigger** (`messages`). Extract: `from` (phone), message type,
   `text.body` or `interactive.button_reply.id` / `interactive.list_reply.id`.
   Ignore non-message events (statuses/read receipts) with an early IF.
2. **Every inbound**: upsert `wa_sessions.last_inbound_at = now()`
   (`POST /wa_sessions` with `Prefer: resolution=merge-duplicates` or PATCH).
3. **GET session** → **Switch on `state`**:

   - **no session / reset** → set `state='lang'` → send **interactive
     buttons** (3 max — fits): `עברית` (id `lang_he`), `Русский` (id
     `lang_ru`), `English` (id `lang_en`). Greeting text trilingual, written
     by you directly, e.g. one line per language welcoming to the clinic of
     Dr. Dubenko ("מרפאת ד\"ר דובנקו").
   - **lang** → save `locale` → `state='menu'` → buttons in the chosen
     locale: 📅 book an appointment (id `menu_book`) / 💬 message the clinic
     (id `menu_msg`).
   - **menu** → `book` → `state='q_name'`, ask for full name;
     `msg` → `state='relay'`, "כתבו את ההודעה ונחזור אליכם" (localized).
   - **q_name** → save `answers.full_name` (validate 2–120 chars; re-ask
     otherwise) → `state='q_service'` → **interactive list** (in locale) with
     the 5 service slugs as row ids + "other":
     `shoulder-elbow` כתף ומרפק · `knee` ברך · `ankle-foot` קרסול וכף רגל ·
     `joint-injections` הזרקות למפרקים · `arthroscopic-surgery` ניתוח
     ארתרוסקופי · `other` אחר. (Row ids are the DB `service` slugs —
     must match exactly; `other` → store null.)
   - **q_service** → save → `state='q_date'` → ask preferred date, free text,
     with a "אין תאריך מועדף" skip button (id `skip`).
   - **q_date** → try parsing to `YYYY-MM-DD` in a Code node (accept
     `DD.MM`, `DD/MM`, `DD.MM.YYYY`, ISO; reject past dates → treat as
     unparsed). Unparsed text is kept to prepend into `message` instead —
     never block the patient on date format. → `state='q_message'` → ask for
     an optional note, with skip button.
   - **q_message** → **`POST /rest/v1/appointments`** (service_role,
     `Prefer: return=representation`):

     ```json
     {
       "full_name": "<answers.full_name>",
       "phone": "<wa phone>", "wa_phone": "<wa phone>",
       "source": "whatsapp", "locale": "<locale>",
       "service": "<slug or null>", "preferred_date": "<date or null>",
       "message": "<note, plus unparsed date text if any>",
       "status": "new"
     }
     ```

     ⚠️ Do NOT send a Telegram notification from here — the DB trigger fires
     WF1 automatically (single pipeline). → save `appointment_id`,
     `state='done'` → localized confirmation to the patient ("קיבלנו את
     הבקשה, ניצור קשר לאישור התור").
   - **relay**, or free text while **done** → **Telegram sendMessage** to the
     group: `💬 וואטסאפ מ־<answers.full_name ?? phone>:\n<text>` with inline
     button `🤖 טיוטת AI` → callback_data `ad:<phone>` (handled by WF2→WF3).
     Take `message_id` from the send response →
     `POST /rest/v1/wa_relay_messages`
     `{ wa_phone, direction: "inbound", body: <text>, tg_message_id }`.

Localized strings: you write all he/ru/en copy yourself, inline in the
workflow (a Code node returning a strings object keyed by locale is the
cleanest pattern).

## Acceptance criteria

- Full questionnaire run from a test phone in each of the 3 languages →
  row in `/admin` with the **WhatsApp badge**, correct service slug, parsed
  date — **and** a WF1 Telegram notification (proves the single pipeline).
- `menu_msg` path: free text reaches the Telegram group with the 🤖 button,
  and a `wa_relay_messages` row exists with the right `tg_message_id`.
- Date "ביום שלישי" (unparseable) → booking still completes, text lands in
  `message`.
- A patient who finished (`done`) and writes again later → relayed, not
  re-questionnaired; after 7+ days of silence → fresh questionnaire.
- Status/read-receipt webhook events don't produce errors or messages.
