# WhatsApp Cloud API — Complete Setup Guide

Step-by-step, click-level guide for wiring the clinic's WhatsApp number to the
official **Meta WhatsApp Cloud API**, ready for the n8n workflows
(`prompts/bots/05-whatsapp-inbound.md` / `06-whatsapp-outbound.md`).

As you complete each step, fill the matching variable in `.env.bots.local`
(gitignored — these values are secrets and stay out of git).

## How the pieces fit

```
Meta Business Portfolio (your existing business.facebook.com account)
 └─ Developer App  ("Business" type, on developers.facebook.com)
     └─ WhatsApp product
         ├─ WABA (WhatsApp Business Account — created automatically)
         │   ├─ Phone number  → PHONE_NUMBER_ID   (the bot's identity)
         │   └─ Message templates (approved Hebrew template for the 24h window)
         ├─ Webhook → https://n8n.dopplervpn.org  (inbound messages → WF5)
         └─ System-user permanent token → n8n credential (outbound sends)
```

Values you will collect along the way:

| Value | Found in | Goes to |
|---|---|---|
| App ID + App Secret | App dashboard → Settings → Basic | n8n `WhatsApp Trigger` credential (webhook signature check) |
| Phone number ID | WhatsApp → API Setup | n8n send nodes + `.env.bots.local` |
| WABA ID | WhatsApp → API Setup | n8n `WhatsApp Cloud API` credential |
| Permanent token | System user (step 5) | n8n `WhatsApp Cloud API` credential |
| Template name | step 7 | WF6 |

---

## Step 1 — Create the developer app

1. Go to [developers.facebook.com](https://developers.facebook.com) and log in
   with the Facebook account that has **admin access to your Meta Business
   account**. First time: click **Get Started** and accept the developer terms.
2. **My Apps → Create App.**
3. Use case: choose **Other** → Next. App type: **Business** → Next.
4. App name: `Dubenko Clinic Bot` (internal, patients never see it).
   Contact email: yours.
5. **Business portfolio: select your existing Meta Business account** — this
   matters; it ties the app to the business you'll verify.
6. Create app (re-enter your password if asked).

📋 Then: App dashboard → **Settings → Basic** → copy **App ID** and
**App Secret** (click Show) into `.env.bots.local`.

## Step 2 — Add the WhatsApp product

1. In the app dashboard, scroll the product list → **WhatsApp → Set up**.
2. When asked for a Business portfolio, pick your business again.
   This auto-creates a **WhatsApp Business Account (WABA)** plus a free
   **test phone number**.
3. You land on **WhatsApp → API Setup**. Note the three values shown:
   **Phone number ID** (of the test number for now), **WABA ID**, and a
   **temporary access token** (expires in 24h — fine for testing, replaced in
   step 5).

## Step 3 — Sanity-test with the test number (5 minutes, do it)

1. On the API Setup page, under **To**, click **Manage phone number list** and
   add your own personal WhatsApp number (OTP verification). Up to 5 test
   recipients allowed before going live.
2. Click **Send message** (the page has a ready `hello_world` template call),
   or run the curl it shows. You should get the message on your phone.
3. **Reply to it** from your phone — this is what inbound traffic looks like;
   once the webhook (step 6) is set, such replies will reach n8n.

If this works, the account plumbing is correct — everything after is
credentials and the real number.

## Step 4 — Register the clinic's real number

Requirements for the number:

- **Not registered in any WhatsApp app** (consumer or Business). If it ever
  was: open that app → Settings → Account → **Delete account** (this deletes
  only the WhatsApp registration, not the SIM), then wait ~3 minutes.
- Able to receive **one SMS or voice call** for the OTP. A landline works
  (choose voice call). After registration the SIM is irrelevant — messages
  flow through the API, not the phone.

Steps:

1. WhatsApp → **API Setup → Add phone number** (or WhatsApp Manager →
   Phone numbers → Add).
2. **Display name**: what patients see, e.g. `מרפאת ד"ר דובנקו` or
   `Dr. Dubenko Clinic`. Meta reviews it — it must plausibly match the
   business; avoid generic names. If rejected, you can edit and resubmit.
3. Category: **Medical & health** (or Professional services). Description
   optional.
4. Enter the number → choose SMS or voice call → enter the OTP.
5. 📋 Copy the **new Phone number ID** (API Setup → "From" dropdown → select
   the real number) into `.env.bots.local`. ⚠️ The Phone number ID changes
   when you switch from the test number — n8n nodes must use the real one.

## Step 5 — Permanent token (system user)

The API-Setup token dies in 24h. Production needs a **system user** token:

1. [business.facebook.com/settings](https://business.facebook.com/settings)
   (Business Settings, gear icon) → **Users → System users → Add**.
2. Name: `n8n-bot`, role: **Admin** → Create.
3. Select the system user → **Add assets** → **Apps** → select
   `Dubenko Clinic Bot` → toggle **Manage app (full control)** → Save.
4. Click **Generate new token** →
   - App: `Dubenko Clinic Bot`
   - Token expiration: **Never**
   - Permissions: check **`whatsapp_business_messaging`** and
     **`whatsapp_business_management`** (nothing else needed)
   → Generate.
5. 📋 **Copy the token immediately** — it is shown only once — into
   `.env.bots.local`.

Verify it works (replace the two placeholders):

```bash
curl -s "https://graph.facebook.com/v21.0/<PHONE_NUMBER_ID>?fields=display_phone_number,verified_name" \
  -H "Authorization: Bearer <PERMANENT_TOKEN>"
```

Expect JSON with your number and display name, not an error.

## Step 6 — Webhook to n8n

Do this **while building WF5** (`prompts/bots/05-whatsapp-inbound.md`) — the
n8n WhatsApp Trigger node generates the values you paste here:

1. App dashboard → **WhatsApp → Configuration → Webhook → Edit**.
2. **Callback URL**: from the n8n trigger node (looks like
   `https://n8n.dopplervpn.org/webhook/<id>/whatsapp`).
3. **Verify token**: also shown by the n8n node. Click **Verify and save** —
   n8n must be reachable at that moment (workflow active or in test mode);
   Meta sends a GET handshake that the trigger node answers.
4. Under **Webhook fields**, click **Manage** → subscribe to **`messages`**
   (only that field).

⚠️ One webhook per app. WF5 is the only n8n workflow with a WhatsApp Trigger;
never activate a second one — it would steal/break this subscription.

## Step 7 — Message template (do this early — approval takes hours to days)

Why: outside the **24-hour customer-service window** (counted from the
patient's last inbound message) the API rejects free-form messages (error
`131047`). The only thing you may send then is a pre-approved **template**.
WF6 falls back to this template automatically.

1. [business.facebook.com/wa/manage/message-templates](https://business.facebook.com/wa/manage/message-templates)
   (WhatsApp Manager → Account tools → Message templates) → **Create template**.
2. Category: **Utility** (not Marketing — utility is cheaper and approves more
   easily). Name: `clinic_reply` (lowercase + underscores only).
   Language: **Hebrew**.
3. Body (one `{{1}}` variable = patient name; sample value required for
   review, e.g. "דוד"):

   ```
   שלום {{1}}, יש עדכון עבורך ממרפאת ד"ר דובנקו. אנא השיבו להודעה זו ונשמח לעזור.
   ```

   (The "please reply" phrasing is deliberate: the patient's reply reopens the
   24h window so the doctor's actual message can then be delivered.)
4. Submit → status `In review` → usually approved within minutes-to-hours,
   occasionally days. 📋 Put the final template name in `.env.bots.local`.
5. Optional second template later for appointment reminders
   (`appointment_reminder`, variables: name + date) — not needed for launch.

## Step 8 — Going live

While the app is in **Development mode** you can only message the ≤5 test
recipients. To message real patients:

1. App dashboard → top toggle **App Mode: Development → Live**.
   For WhatsApp-only apps no App Review is required for the two WhatsApp
   permissions when using your own number via a system-user token.
2. **Business verification** — required for full messaging limits, prompted
   in Business Settings → Security center → Start verification. You'll need
   official business documents (company registration / license; the name must
   match the Business account). Takes ~1–5 business days.
   - Before verification: you can still message, but capped (250 business-
     initiated conversations/day; *replies* within the 24h window are not
     business-initiated and are effectively unlimited — which is 95% of the
     clinic's traffic).
   - After verification: limit rises to 1,000/day and scales automatically
     with usage quality.
3. Display-name review happens automatically around this time; if patients
   see the raw number instead of the clinic name, the review hasn't passed yet.

## Pricing reality-check (2026)

- **Inbound messages: free.** Replies within the 24h customer-service
  window: **free** (service messages). This covers the questionnaire and
  almost all doctor replies.
- **Template messages** (outside the window) are billed per message, a few
  cents each, category-dependent (utility < marketing); Meta bills the
  payment method on the Business account — add a card in WhatsApp Manager →
  Billing when you start using templates. At clinic volume this is negligible,
  but check the current rate card: Meta → WhatsApp pricing, country = Israel.

## Troubleshooting

| Symptom / error | Cause → fix |
|---|---|
| `131047` Re-engagement message | Outside 24h window → WF6 sends the template instead (by design) |
| `131026` Message undeliverable | In dev mode: recipient not in the test list. Or recipient has no WhatsApp |
| `190` access token expired | You're still on the 24h API-Setup token → use the system-user token (step 5) |
| `100` invalid parameter | Usually wrong Phone number ID (test vs real number) — recheck step 4.5 |
| `131030` recipient not in allowed list | Dev mode + unlisted number → add to test list or go Live |
| Webhook verify fails | n8n workflow not active/listening at that moment; URL typo; server down |
| Inbound stopped after working | Someone activated a second WhatsApp Trigger workflow → deactivate it, re-verify webhook |
| "Number already in use" at registration | Number still registered in a WhatsApp app → delete account in-app, wait, retry |
| OTP never arrives | Landline → choose voice call; VOIP numbers are often rejected — use a real SIM/landline |
| Display name rejected | Make it match the business name in the Business account; resubmit via WhatsApp Manager → Phone numbers |

## Final checklist

- [ ] App created, App ID + App Secret saved (step 1)
- [ ] WhatsApp product added, test message round-trip works (steps 2–3)
- [ ] Real number registered, Phone number ID saved (step 4)
- [ ] System-user permanent token saved + curl-verified (step 5)
- [ ] `clinic_reply` Hebrew template **submitted** (step 7 — do early!)
- [ ] Webhook verified + `messages` subscribed (step 6, during WF5 build)
- [ ] App switched to Live, business verification started (step 8)
- [ ] n8n credentials created: `WhatsApp Cloud API` (permanent token + WABA id),
      `WhatsApp Trigger` (App ID + App Secret)
- [ ] All values mirrored in `.env.bots.local`
