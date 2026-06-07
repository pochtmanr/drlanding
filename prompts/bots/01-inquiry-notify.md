# WF1 — Inquiry Notify (n8n)

Build and activate an n8n workflow named **`WF1 Inquiry Notify`** on
`https://n8n.dopplervpn.org` (REST API at `/api/v1`, header
`X-N8N-API-KEY` — ask me for the key; SSH `root@185.203.240.174` available
for debugging). This is the single notification pipeline: a Supabase DB
trigger POSTs here for **every** new inquiry (website form or WhatsApp bot),
and the workflow posts a Hebrew message to our Telegram group.

Ask me for: the Telegram group **chat_id**.

## Incoming payload (from Supabase `notify_inquiry_webhook()`)

`POST /webhook/inquiry-new`, header `X-Webhook-Secret: <secret>` —
authenticated with the existing n8n credential **`Inquiry Webhook Auth`**
(Header Auth). Body:

```json
{
  "table": "appointments" | "contact_messages",
  "event": "INSERT",
  "record": {
    "id": "uuid", "created_at": "...", "full_name": "...", "phone": "...",
    "email": null, "preferred_clinic": null, "preferred_date": "2026-06-10",
    "service": "knee", "message": "...", "locale": "he",
    "status": "new", "source": "website" | "whatsapp", "wa_phone": null,
    "subject": "..."  // contact_messages only
  }
}
```

## Nodes

1. **Webhook** — path `inquiry-new`, method POST, authentication: Header Auth
   → credential `Inquiry Webhook Auth`, respond immediately with 200.
2. **Switch** on `{{$json.body.table}}` → `appointments` / `contact_messages`.
3. **Code/Set per branch** — format the Hebrew message (HTML parse mode).
   Write the Hebrew yourself; structure:
   - Appointments:
     `🆕 בקשת תור חדשה {sourceBadge}` then lines for שם, טלפון (as
     `<a href="tel:+...">`), מרפאה, תאריך מועדף, שירות, הודעה — omit empty
     fields. sourceBadge: `🌐 אתר` / `💬 וואטסאפ`.
     Service slugs → Hebrew labels: shoulder-elbow=כתף ומרפק, knee=ברך,
     ankle-foot=קרסול וכף רגל, joint-injections=הזרקות למפרקים,
     arthroscopic-surgery=ניתוח ארתרוסקופי.
   - Contact messages: `📩 הודעה חדשה {sourceBadge}` + שם, טלפון, אימייל,
     נושא, הודעה.
   - Footer line: link to `https://<site-domain>/he/admin` (ask me for the
     production domain; omit the link if not deployed yet).
4. **Telegram** (credential **`Telegram Bot`**) — sendMessage to the group
   chat_id, parse_mode HTML. For **appointments only**, attach an inline
   keyboard (callback protocol, 64-byte limit):
   - `✅ אשר` → callback_data `st:a:{{record.id}}:confirmed`
   - `❌ דחה` → callback_data `st:a:{{record.id}}:rejected`
   (Buttons are handled by WF2, built next — until then taps show a spinner;
   that's expected.)

## Acceptance criteria

- Workflow is **activated**; `GET https://n8n.dopplervpn.org/webhook/inquiry-new`
  without the secret header → 403; POST with the header + a sample
  appointments payload → Hebrew message with two buttons appears in the group.
- Same for a contact_messages payload (no buttons).
- Submit the real website appointment form → message arrives within seconds.
  If not: check `select * from net._http_response order by id desc limit 5;`
  in Supabase SQL editor (it records the trigger's POST attempts).
- The workflow never replies an error to the webhook (respond-immediately),
  so a formatting bug can't make Supabase log failures.
