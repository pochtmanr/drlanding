# Prompt 02 — About + Sports Orthopedics Pages

## Context

You are building two pages of a trilingual clinic website for **Dr. Vyacheslav Dubenko**
(HE: ד"ר ויאצ'סלב דובנקו · RU: Д-р Вячеслав Дубенко) — orthopedic specialist and shoulder & knee
surgeon, **37 years of experience**, works with **Maccabi** health fund, consults at 4 clinics
(2× Rehovot, Bnei Ayish, Rishon LeZion — data in `src/content/clinics.ts`).

Stack: Next.js 16 App Router + Tailwind v4 + next-intl + Supabase. Locales: **Hebrew (default,
RTL, served at `/`)**, English (`/en`), Russian (`/ru`). The foundation (design system, layout,
header/footer, templates) is **already built — you only consume it**.

Other Claude sessions are building other pages **in parallel in this same checkout**. Strict
file ownership (below) prevents conflicts. Do not touch anything outside your files, even if
you notice issues — note them in your final message instead.

## Read these files FIRST

- `src/content/types.ts` (`ServicePageContent`, `ContentSection`, `Localized`)
- `src/components/templates/service-page.tsx` (your main rendering tool)
- `src/components/ui/*`, `src/components/sections/*`, `src/components/motion/*`
- `src/lib/metadata.ts`, `src/lib/routes.ts`, `src/content/site.ts`
- `messages/he/common.json` (existing strings — reuse via `useTranslations("common")`)
- `reference/example.md` — **lines 16–20 (About) and 62–64 + 93–121 (Sports Orthopedics
  explainer — your single most important source text)**, `reference/docinfo.md`
- `src/app/[locale]/(public)/page.tsx` (page pattern reference)

## File ownership — HARD BOUNDARY

You may CREATE/EDIT ONLY:
- `src/app/[locale]/(public)/about/page.tsx`
- `src/app/[locale]/(public)/sports-orthopedics/page.tsx`
- `src/content/about/**`, `src/content/sports/**`
- `messages/{he,en,ru}/about.json`, `messages/{he,en,ru}/sports.json`

NEVER touch: `src/components/**`, `src/lib/**`, `src/i18n/**`, `src/proxy.ts`,
`src/app/globals.css`, any `layout.tsx`, `messages/*/common.json` or any other namespace,
`supabase/**`, other routes, `package.json`.

## Translation policy — ABSOLUTE

You personally write ALL Hebrew, English and Russian text directly into the files. NEVER call
any external API, LLM, script, or translation service (OpenAI, Google Translate, DeepL, etc.) —
no exceptions, even if it seems faster. Write Hebrew natively as the primary language
(professional, warm, medically accurate, patient-facing); English and Russian must be
full-quality native versions, not literal echoes. Use ONLY verifiable facts: 37 years of
experience, Maccabi, shoulder & knee surgical specialty, the 4 real clinics. Do NOT invent
specific universities, residency programs, team names, association memberships, statistics or
patient outcomes. Where the example sitemap lists "Teams and organizations supported" and
"Memberships", write honest *generic* sections (e.g. collaboration with physiotherapists and
rehabilitation teams) without naming invented organizations.

## Design conventions

- Tokens: `primary` (#0085e6), `primary-soft/faint/dark/deep`, `ink`, `muted`, `muted-2`,
  `line`; cards `rounded-4xl`; width via `<Container>` (`max-w-9xl`).
- Animations ONLY via `<FadeIn>` / `<Stagger>` — never import `motion/react` directly.
- RTL-safe: logical utilities only (`ps-/pe-/ms-/me-/text-start`); arrows `rtl:rotate-180`.
- Links via `@/i18n/navigation`. Hrefs must match `src/lib/routes.ts`.
- Pages: `params: Promise<{locale}>`, `setRequestLocale(locale)` first, `generateMetadata`
  via `buildMetadata({ locale, title, description, path })`.

## Content module pattern (follow exactly)

```ts
// src/content/about/about.ts
import type { Locale, ServicePageContent } from "@/content/types";

export const content: Record<Locale, ServicePageContent> = {
  he: { title: "...", subtitle: "...", intro: "...", sections: [...] },
  en: { ... },
  ru: { ... },
};
```

```tsx
// page.tsx — thin consumer
const { locale } = await params;
setRequestLocale(locale);
const t = await getTranslations("common");
const c = content[locale as Locale];
return (
  <ServicePageTemplate
    content={c}
    breadcrumbs={[{ label: t("nav.about") }]}
  />
);
```

## Tasks

### 1. `/about` — Doctor profile

Content module `src/content/about/about.ts` (type `ServicePageContent`), rendered with
`ServicePageTemplate`. Sections (~120–180 words each per locale):
1. **Profile** — 37 years in orthopedics, specialty in orthopedic surgery, focus on shoulder
   and knee; serves patients via Maccabi at clinics in Rehovot, Bnei Ayish and Rishon LeZion;
   consultations in Hebrew and Russian (English also welcome).
2. **Treatment philosophy** — thorough diagnosis first; conservative options (physiotherapy,
   injections) before surgery; minimally invasive arthroscopic techniques when surgery is
   needed; clear patient communication at every step.
3. **Working with the care team** — collaboration with physiotherapists and rehabilitation
   professionals; personalized recovery plans; follow-up until return to full function.
4. **What to expect at the first visit** — bring referrals/imaging; physical examination;
   honest discussion of options.
Add a short `faq` (3 items: do I need a referral? · which health funds? — Maccabi · which
joints does the doctor treat?).

### 2. `/sports-orthopedics` — Specialty explainer

Content module `src/content/sports/sports-orthopedics.ts`. Adapt the long explainer in
`reference/example.md` lines 93–121 to Dr. Dubenko (REWRITE — do not copy sentences verbatim;
remove all Dr.-Reshef-specific biography). Sections:
1. What is an orthopedic sports surgeon (sports injuries happen to non-athletes too).
2. Diagnosis → treatment → rehabilitation → prevention pipeline.
3. Arthroscopy-first surgical philosophy (small incisions, faster recovery).
4. Sports doctor vs. sports orthopedic surgeon (different professions).
5. How to choose the right orthopedist for your injury.
6. **Areas of expertise** — use `bullets`: shoulder dislocations & rotator cuff tears, knee
   meniscus & ligament injuries, elbow injuries, ankle sprains & instability, joint
   injections, arthroscopic surgery.

After the template (pass as `children` to `ServicePageTemplate`), add a `<Section tone="faint">`
with a `Stagger` grid of 4 common-injury cards (meniscus tear, ACL injury, shoulder
dislocation, ankle sprain — adapted from example.md lines 122–164) each linking to the
matching service page: `/services/knee/injuries`, `/services/knee/surgery`,
`/services/shoulder-elbow/shoulder-pain-injuries`, `/services/ankle-foot/injuries`
(use `ServiceCategoryCard`). Card titles/descriptions go in `sports.json`.

Use `about.json` / `sports.json` for meta + any short UI strings; long prose lives in the
content modules.

## Acceptance criteria

- `npx tsc --noEmit` passes for your files (full build may fail on other sessions' missing
  routes — fine).
- `/about`, `/en/about`, `/ru/about`, `/sports-orthopedics` (+ en/ru) render fully translated,
  RTL correct, breadcrumbs show, CTA banner at bottom links to `/appointment`.
- No invented facts; all 3 locales structurally identical.
- Final message: list files created + anything noticed but not touched.
