# WF4 — Daily Digest (n8n)

Build and activate an n8n workflow named **`WF4 Daily Digest`** on
`https://n8n.dopplervpn.org` (REST API at `/api/v1`, header `X-N8N-API-KEY` —
ask me for the key). Independent of all other workflows (no Telegram Trigger,
only a send). It is also the **safety net** for the notification pipeline:
Supabase's pg_net webhook has no retries, so anything missed while n8n was
down must show up here.

Ask me for: the Telegram group **chat_id**.

## Credentials

`Telegram Bot`, `Supabase service_role`
(PostgREST base `https://pwvtjuklkfelpxzxjmsi.supabase.co/rest/v1`).

## Nodes

1. **Schedule Trigger** — cron `0 8 * * *`; set the **workflow timezone to
   `Asia/Jerusalem`** in workflow settings (n8n defaults to the instance TZ —
   verify, don't assume).
2. **Supabase/HTTP GET** —
   `/appointments?select=id,full_name,status,preferred_date,source,created_at`
   and `/contact_messages?select=id,full_name,status,created_at`
   (header `Range: 0-999`).
3. **Code node** — compute:
   - counts per status (per table) for `new`, `received`, `confirmed`;
   - **needs attention**: appointments/messages in `new` older than 24h
     (name + how long waiting), and `confirmed` appointments with
     `preferred_date` within the next 2 days (name + date);
   - nothing to report → still send a short "all clear".
4. **Telegram sendMessage** (HTML). Hebrew copy written by you directly;
   structure:

   ```
   ☀️ סיכום יומי — מרפאת ד"ר דובנקו

   📋 בקשות תור: חדשות X · התקבלו Y · אושרו Z
   📩 הודעות: חדשות X · התקבלו Y

   ⚠️ ממתינות לטיפול:
   • <שם> — ממתין/ה 26 שעות (וואטסאפ)
   • ...

   📅 תורים מאושרים קרובים:
   • <שם> — 10.06
   ```

   Omit empty sections; "אין פניות ממתינות 🎉" when attention list is empty.

## No deletion logic

By explicit decision this workflow only reports — it must never delete or
modify rows.

## Acceptance criteria

- Manual "Execute workflow" → digest arrives in the group, numbers match
  `/admin`.
- An appointment created >24h ago with status `new` appears under ⚠️;
  setting it to `received` removes it from the next run.
- Workflow timezone is `Asia/Jerusalem` (check the saved workflow settings
  JSON, not just the UI).
- Next morning at 08:00 local the digest arrives unprompted (confirm with me
  the next day before calling this done — or leave a note that this remains
  to be observed).
