# Prompt 08 — Admin Dashboard (Inquiry Management)

## Context

You are building the doctor's admin dashboard for a trilingual clinic website for
**Dr. Vyacheslav Dubenko**. Public visitors submit appointment requests and contact messages
(already working — rows land in Supabase tables `appointments` and `contact_messages`). The
doctor signs in and manages them through a status workflow:
`new → received / confirmed / rejected / responded / completed`, plus free-text admin notes.

Stack: Next.js 16 App Router + Tailwind v4 + next-intl + Supabase (`@supabase/ssr`). Locales:
**Hebrew (default, RTL, served at `/`)**, English (`/en`), Russian (`/ru`) — the admin UI is
trilingual like the site (the locale switcher component already exists). The foundation is
**already built — you only consume it**.

Auth model (already wired): `src/proxy.ts` gates `/{,en/,ru/}admin/**` — unauthenticated
users are redirected to `/admin/login` (which is exempt). Any authenticated Supabase user is
the admin; the account is created manually in the Supabase dashboard and signups are disabled.
RLS: `authenticated` can SELECT/UPDATE both tables.

Other Claude sessions are building the public pages **in parallel in this same checkout**.
Strict file ownership (below) prevents conflicts. Do not touch anything outside your files.

## Read these files FIRST

- `src/lib/supabase/types.ts` (`Database`, `AppointmentRow`, `ContactMessageRow`,
  `InquiryStatus`, `INQUIRY_STATUSES`), `src/lib/supabase/server.ts`,
  `src/lib/supabase/client.ts`, `src/lib/supabase/middleware.ts`, `src/proxy.ts`
- `src/lib/actions/inquiries.ts` (style reference for server actions)
- `src/components/ui/*` (Button, Card, Badge, Input, Select, Textarea, Container),
  `src/components/layout/locale-switcher.tsx`
- `src/content/clinics.ts` (to resolve `preferred_clinic` ids to names),
  `messages/he/common.json` (`servicesMenu` for service slugs)
- `src/app/[locale]/layout.tsx` and `src/app/[locale]/(public)/layout.tsx` (note: your admin
  routes live OUTSIDE `(public)`, so they get html/fonts/provider but no site header/footer —
  build your own minimal admin chrome)
- `supabase/migrations/20260607000000_init.sql` (schema ground truth)

## File ownership — HARD BOUNDARY

You may CREATE/EDIT ONLY:
- `src/app/[locale]/admin/**` (e.g. `layout.tsx`, `page.tsx`, `login/page.tsx`)
- `src/components/admin/**` (new folder — your client components)
- `src/lib/actions/admin.ts` (new file)
- `messages/{he,en,ru}/admin.json`

NEVER touch: `src/proxy.ts`, `src/lib/supabase/**`, `src/lib/actions/inquiries.ts`,
`src/components/{ui,layout,sections,forms,motion,templates}/**`, `src/i18n/**`, any
`(public)` route, `messages/*/common.json` or any other namespace, `supabase/**`,
`package.json`.

## Translation policy — ABSOLUTE

You personally write ALL Hebrew, English and Russian text directly into `admin.json`. NEVER
call any external API, LLM, script, or translation service — no exceptions. All three locales
must be complete and natural (the doctor is likely to use the Russian or Hebrew UI).

## Design conventions

- Same calm design system: tokens `primary` (#0085e6), `primary-soft/faint`, `ink`, `muted`,
  `line`; cards `rounded-4xl`; `<Container>`; admin pages should feel like a quiet tool —
  white background, generous spacing, no marketing flourishes, NO FadeIn/Stagger animations.
- RTL-safe: logical utilities only; phone numbers `dir="ltr"`.
- Status → `<Badge>` tone mapping: new=`primary`, received=`soft`, confirmed=`success`,
  rejected=`danger`, responded=`warning`, completed=`neutral`.
- In admin, use plain `next/navigation` is WRONG — still use `@/i18n/navigation` Link/router
  so locale prefixes are preserved.

## Tasks

### 1. `src/app/[locale]/admin/layout.tsx`

Minimal admin shell (server component): top bar with site name + "Admin" badge, the existing
`<LocaleSwitcher />`, and a sign-out form (server action: create server client,
`auth.signOut()`, `redirect` to `/admin/login` via `@/i18n/navigation`). `main` wrapped in
`<Container>`. No site Header/Footer/CookieBanner.

### 2. `src/app/[locale]/admin/login/page.tsx`

Client component: centered `<Card>` (max-w-sm) with email + password inputs, submit via the
BROWSER client (`createClient()` from `src/lib/supabase/client.ts`) `signInWithPassword`;
on success `router.push("/admin")` + `router.refresh()`; on failure show a friendly localized
error (don't leak whether the email exists). Strings from `admin.json`.

### 3. `src/app/[locale]/admin/page.tsx` — dashboard (server component)

- `searchParams` (Promise — await it): `tab` = `appointments` (default) | `messages`,
  `status` = optional filter.
- Defensive `getUser()` check at the top → `redirect("/admin/login")` if null (complements
  the proxy gate).
- Fetch the active table via the server client, `order("created_at", { ascending: false })`,
  apply status filter if set. Show count summaries per status (one query per table is fine;
  compute counts in JS).
- Tabs (Links with `?tab=`) + status filter pills (Links with `?status=`).
- Render rows with a client component `src/components/admin/inquiry-card.tsx`:
  - Appointments: name, `tel:` phone, email, preferred clinic (resolve id → localized name
    via `clinics`), preferred date, service (resolve slug → `common.servicesMenu` label),
    message, locale badge, created_at (format with `Intl.DateTimeFormat(locale)`).
  - Messages: name, phone, email, subject, message, locale badge, created_at.
  - Status `<Select>` (all 6 statuses, localized labels from `admin.json`) + colored Badge.
  - Expandable notes `<Textarea>` + save button.
  - On change → call the `updateInquiry` server action, optimistic disabled state while
    pending (`useTransition`), success/error feedback.

### 4. `src/lib/actions/admin.ts`

`"use server"`. `updateInquiry(table: "appointments" | "contact_messages", id: string,
patch: { status?: InquiryStatus; admin_notes?: string })`:
- zod-validate inputs (uuid id, enum table, enum status, notes ≤ 2000 chars).
- Server client → `getUser()`; return `{ ok: false, error: "auth" }` if null.
- `.update(patch).eq("id", id)`; `revalidatePath` for the admin page; return `{ ok: true }`
  or `{ ok: false, error: "server" }` (log the Supabase error message to console).

### 5. `messages/{he,en,ru}/admin.json`

All admin strings: login (title, email, password, submit, error), dashboard (title, tabs,
status labels ×6, filter "all", empty states per tab, notes label, save, saved, error,
sign out, count summaries). Use ICU plurals where counts are interpolated.

## Acceptance criteria

- `npx tsc --noEmit` passes for your files (full build may fail on other sessions' missing
  routes — fine).
- With env + migration + admin user set up: `/admin` signed-out → redirected to login;
  login works; dashboard lists rows; status change + notes persist (verify `updated_at`
  advanced in Supabase); tab + filter navigation works; all 3 locales complete; `/he` admin
  renders RTL.
- No service-role key anywhere; no edits outside your file list.
- Final message: list files created + manual test results.
