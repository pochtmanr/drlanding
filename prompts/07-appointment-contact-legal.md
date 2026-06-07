# Prompt 07 — Appointment, Contact & Legal Pages

## Context

You are building the conversion + legal pages of a trilingual clinic website for
**Dr. Vyacheslav Dubenko** (HE: ד"ר ויאצ'סלב דובנקו · RU: Д-р Вячеслав Дубенко) — orthopedic
specialist and shoulder & knee surgeon, 37 years of experience, Maccabi, 4 clinics
(Rehovot ×2, Bnei Ayish, Rishon LeZion — full data incl. phones/fax in
`src/content/clinics.ts`).

Stack: Next.js 16 App Router + Tailwind v4 + next-intl + Supabase. Locales: **Hebrew (default,
RTL, served at `/`)**, English (`/en`), Russian (`/ru`). The foundation is **already built —
you only consume it**. The appointment + contact forms and their Supabase server actions
ALREADY EXIST (`src/components/forms/*`, `src/lib/actions/inquiries.ts`) — you compose them,
you do not modify them.

Other Claude sessions are building other pages **in parallel in this same checkout**. Strict
file ownership (below) prevents conflicts. Do not touch anything outside your files.

## Read these files FIRST

- `src/components/forms/appointment-form.tsx`, `src/components/forms/contact-form.tsx`
- `src/components/sections/clinic-card.tsx`, `src/content/clinics.ts`, `src/content/site.ts`
- `src/content/types.ts`, `src/components/templates/service-page.tsx`
- `src/components/ui/*`, `src/components/sections/page-hero.tsx`, `src/components/motion/*`
- `src/lib/metadata.ts`, `src/lib/routes.ts`
- `messages/he/common.json` (forms strings live in `common.forms.*` — reuse, don't duplicate)
- `reference/example.md` lines 74–90, `reference/docinfo.md`
- `src/app/[locale]/(public)/page.tsx` (page pattern reference)

## File ownership — HARD BOUNDARY

You may CREATE/EDIT ONLY:
- `src/app/[locale]/(public)/appointment/page.tsx`
- `src/app/[locale]/(public)/contact/page.tsx`
- `src/app/[locale]/(public)/accessibility/page.tsx`
- `src/app/[locale]/(public)/privacy/page.tsx`
- `src/app/[locale]/(public)/cookies/page.tsx`
- `src/content/legal/**`
- `messages/{he,en,ru}/appointment.json`, `messages/{he,en,ru}/contact.json`,
  `messages/{he,en,ru}/legal.json`

NEVER touch: `src/components/**`, `src/lib/**`, `src/i18n/**`, `src/proxy.ts`, any
`layout.tsx`, `messages/*/common.json` or any other namespace, `supabase/**`, other routes,
`package.json`.

## Translation policy — ABSOLUTE

You personally write ALL Hebrew, English and Russian text directly into the files. NEVER call
any external API, LLM, script, or translation service — no exceptions. Hebrew is the primary
language; English and Russian are full-quality native versions. Use ONLY verifiable facts —
the clinics/phones from `clinics.ts`, Maccabi, 37 years. Do NOT invent opening hours, email
addresses, company registration numbers, or named accessibility officers — where a legal page
conventionally needs such a detail, phrase it generically ("ניתן לפנות אלינו בטלפון…" /
"contact us by phone").

## Design conventions

- Tokens: `primary` (#0085e6), `primary-soft/faint/dark/deep`, `ink`, `muted`, `muted-2`;
  cards `rounded-4xl`; width via `<Container>` (`max-w-9xl`).
- Animations ONLY via `<FadeIn>` / `<Stagger>` — never import `motion/react`.
- RTL-safe: logical utilities only; phone numbers always `dir="ltr"`.
- Links via `@/i18n/navigation`. Hrefs exactly per `src/lib/routes.ts`.
- Pages: `params: Promise<{locale}>`, `setRequestLocale` first, `generateMetadata` via
  `buildMetadata`.

## Tasks

### 1. `/appointment`

`PageHero` (title/subtitle from `appointment.json`) then a two-column layout (stacks on
mobile):
- Start column: "how it works" — 3 numbered steps (send the form → we call you back to
  schedule → arrive with referral & imaging); phone-first alternative block listing booking
  phones of all 4 clinics (from `clinics.ts`, `tel:` links, `dir="ltr"`); Maccabi note;
  honest note that the form is a request, not a confirmed slot ("אין תורים פנויים" situations
  are resolved by phone).
- End column: `<Card>` with `<AppointmentForm />`.
No `CtaBanner` here (the page IS the CTA). Physician-availability honesty: do not promise
same-day responses.

### 2. `/contact`

`PageHero` + `Stagger` grid of 4 `<ClinicCard>`s (full clinic info with Waze/Maps links —
the component handles it) + two-column block: contact form (`<ContactForm />` in a `<Card>`)
beside a short "urgent questions" note (for medical emergencies call 101 / go to the ER —
the clinic form is not for emergencies) + main phone. Meta from `contact.json`.

### 3. Legal pages — `/accessibility`, `/privacy`, `/cookies`

Content modules in `src/content/legal/` typed `ServicePageContent`, rendered with
`ServicePageTemplate` (breadcrumb: just the page title). Calm, plain-language, ~300–450 words
per locale each:
- **Accessibility statement**: commitment to WCAG 2.1 AA / Israeli Standard 5568; what the
  site supports (keyboard navigation, skip link, reduced-motion, semantic structure, alt
  texts); known limitations may exist; how to report an issue (by phone — main clinic number).
- **Privacy policy**: what the forms collect (name, phone, email, message), purpose (handling
  appointment/contact requests only), storage in Supabase, no sale of data, no marketing
  use, contact for deletion requests; mention Israeli Privacy Protection Law in general terms.
- **Cookies notice**: the site itself uses localStorage for cookie-consent choice and
  Supabase auth cookies on the admin area only; no advertising trackers; how to clear
  browser storage.

`appointment.json` / `contact.json` / `legal.json`: meta + page-specific strings. Reuse
`common.forms.*` for everything the forms already cover.

## Acceptance criteria

- `npx tsc --noEmit` passes for your files (full build may fail on other sessions' missing
  routes — fine).
- All 5 routes render fully translated at `/`, `/en/…`, `/ru/…`; RTL correct; forms submit
  (with `.env.local` + migration applied, a row appears in Supabase; without env, the error
  state renders gracefully).
- All 3 locales structurally identical; no invented hours/emails/officers.
- Final message: list files created + anything noticed but not touched.
