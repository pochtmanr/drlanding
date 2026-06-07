# Prompt 06 — Patient Information Section

## Context

You are building the patient-information section of a trilingual clinic website for
**Dr. Vyacheslav Dubenko** (HE: ד"ר ויאצ'סלב דובנקו · RU: Д-р Вячеслав Дубенко) — orthopedic
specialist and shoulder & knee surgeon, 37 years of experience, Maccabi, 4 clinics
(Rehovot ×2, Bnei Ayish, Rishon LeZion).

Stack: Next.js 16 App Router + Tailwind v4 + next-intl + Supabase. Locales: **Hebrew (default,
RTL, served at `/`)**, English (`/en`), Russian (`/ru`). The foundation is **already built —
you only consume it**.

Other Claude sessions are building other pages **in parallel in this same checkout**. Strict
file ownership (below) prevents conflicts. Do not touch anything outside your files.

## Read these files FIRST

- `src/content/types.ts` (`ArticleContent`, `FaqItem`, `Testimonial`, `ServicePageContent`)
- `src/components/templates/service-page.tsx`, `src/components/sections/faq-accordion.tsx`,
  `src/components/sections/testimonial-card.tsx`, `src/components/sections/page-hero.tsx`
- `src/components/ui/*`, `src/components/motion/*`
- `src/lib/metadata.ts`, `src/lib/routes.ts` (exact slugs)
- `messages/he/common.json`, `reference/example.md` lines 66–72
- `src/app/[locale]/(public)/page.tsx` (page pattern reference)

## File ownership — HARD BOUNDARY

You may CREATE/EDIT ONLY:
- `src/app/[locale]/(public)/patient-info/**` (7 pages: hub, testimonials, faq, articles hub,
  3 article pages)
- `src/content/patient-info/**`
- `messages/{he,en,ru}/patientInfo.json`

NEVER touch: `src/components/**`, `src/lib/**`, `src/i18n/**`, `src/proxy.ts`, any
`layout.tsx`, `messages/*/common.json` or any other namespace, `supabase/**`, other routes,
`package.json`.

## Translation policy — ABSOLUTE

You personally write ALL Hebrew, English and Russian text directly into the files. NEVER call
any external API, LLM, script, or translation service — no exceptions. Hebrew is the primary
language; English and Russian are full-quality native versions. Use ONLY verifiable facts.

**Testimonials caveat**: there are no real patient testimonials yet. Write 5 modest,
realistic-sounding SAMPLE testimonials (first name + initial only, e.g. "יוסי כ.", varied:
shoulder surgery, knee injection, ankle rehab, sports injury, second opinion) and put a
prominent code comment at the top of the testimonials content module:
`// SAMPLE CONTENT — replace with real patient testimonials (with consent) before launch.`
Do not present invented clinical claims or outcomes beyond generic satisfaction ("the process
was clearly explained, I returned to my routine").

## Design conventions

- Tokens: `primary` (#0085e6), `primary-soft/faint/dark/deep`, `ink`, `muted`, `muted-2`;
  cards `rounded-4xl`; width via `<Container>` (`max-w-9xl`).
- Animations ONLY via `<FadeIn>` / `<Stagger>` — never import `motion/react`.
- RTL-safe: logical utilities only; directional arrows `rtl:rotate-180`.
- Links via `@/i18n/navigation`. Hrefs exactly per `src/lib/routes.ts`.
- Pages: `params: Promise<{locale}>`, `setRequestLocale` first, `generateMetadata` via
  `buildMetadata`.

## Tasks

### 1. `/patient-info` — hub

`PageHero` + `Stagger` grid of 3 `ServiceCategoryCard`s (testimonials / FAQ / articles) +
a small "good to know" strip (Maccabi arrangement, bring imaging to first visit, consultations
in Hebrew & Russian) + `CtaBanner`.

### 2. `/patient-info/testimonials`

Content module `src/content/patient-info/testimonials.ts` exporting
`Record<Locale, Testimonial[]>` (5 samples, see caveat). Page: `PageHero` + `Stagger` grid of
`TestimonialCard`s + `CtaBanner`.

### 3. `/patient-info/faq`

Content module `faq.ts` exporting `Record<Locale, FaqItem[]>` — 10–12 questions grouped in
the order patients actually ask: appointments & referrals (do I need a referral? Maccabi?
which clinic is closest?), before the visit (what to bring), treatments (injections vs.
surgery, what is arthroscopy, pain expectations), recovery (how long, physiotherapy, return
to sport/work). Page: `PageHero` + `FaqAccordion` + `CtaBanner`. Add FAQPage JSON-LD via a
`<script type="application/ld+json">` rendered from the same data.

### 4. `/patient-info/articles` — hub + 3 articles

Articles hub: `PageHero` + 3 article cards (title, description, reading time from
`ArticleContent.readingMinutes`). Articles (content modules typed `ArticleContent`,
~600–800 words per locale, render with a simple article layout you build inside each page
file using `Container`, `FadeIn`, prose-style headings/paragraphs — match
`service-page.tsx` typography, then `CtaBanner`):

| Route | Article |
|---|---|
| `articles/sports-injury-prevention` | Preventing sports injuries: warm-up, load management, technique, strength balance, footwear, listening to early pain signals |
| `articles/rehabilitation-tips` | Making rehabilitation work: consistency over intensity, realistic phases, sleep & nutrition basics, working with your physiotherapist, red flags to report |
| `articles/return-to-sport` | Returning to sport after injury or surgery: criteria-based (not calendar-based) return, gradual load build-up, psychological readiness, re-injury prevention |

### 5. `patientInfo.json`

Meta titles/descriptions for all 7 pages + hub card texts + any short UI strings (e.g.
"X min read" with ICU plural where needed).

## Acceptance criteria

- `npx tsc --noEmit` passes for your files (full build may fail on other sessions' missing
  routes — fine).
- All 7 routes render fully translated at `/`, `/en/…`, `/ru/…`; RTL correct; FAQ accordion
  opens/closes; JSON-LD present on the FAQ page.
- Testimonials module carries the SAMPLE CONTENT comment.
- All 3 locales structurally identical; no placeholder text.
- Final message: list files created + anything noticed but not touched.
