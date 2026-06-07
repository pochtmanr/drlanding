# Prompt 03 — Services Hub + Shoulder & Elbow + Knee

## Context

You are building the services hub and two service categories of a trilingual clinic website
for **Dr. Vyacheslav Dubenko** (HE: ד"ר ויאצ'סלב דובנקו · RU: Д-р Вячеслав Дубенко) —
orthopedic specialist and **shoulder & knee surgeon** (his core specialty — these are the
flagship pages of the site), 37 years of experience, Maccabi, 4 clinics (Rehovot ×2,
Bnei Ayish, Rishon LeZion).

Stack: Next.js 16 App Router + Tailwind v4 + next-intl + Supabase. Locales: **Hebrew (default,
RTL, served at `/`)**, English (`/en`), Russian (`/ru`). The foundation is **already built —
you only consume it**.

Other Claude sessions are building other pages **in parallel in this same checkout**. Strict
file ownership (below) prevents conflicts. Do not touch anything outside your files.

## Read these files FIRST

- `src/content/types.ts` (`ServicePageContent`), `src/components/templates/service-page.tsx`
- `src/components/ui/*`, `src/components/sections/*` (esp. `service-category-card.tsx`),
  `src/components/motion/*`
- `src/lib/metadata.ts`, `src/lib/routes.ts` (exact slugs — non-negotiable)
- `messages/he/common.json` (`servicesMenu` labels — reuse)
- `reference/example.md` lines 22–35 (sitemap) and 122–153 (sample injury copy)
- `src/app/[locale]/(public)/page.tsx` (page pattern reference)

## File ownership — HARD BOUNDARY

You may CREATE/EDIT ONLY:
- `src/app/[locale]/(public)/services/page.tsx` (hub)
- `src/app/[locale]/(public)/services/shoulder-elbow/**` (7 pages)
- `src/app/[locale]/(public)/services/knee/**` (6 pages)
- `src/content/services/hub/**`, `src/content/services/shoulder/**`,
  `src/content/services/knee/**`
- `messages/{he,en,ru}/services.json`, `messages/{he,en,ru}/shoulder.json`,
  `messages/{he,en,ru}/knee.json`

NEVER touch: `src/components/**`, `src/lib/**`, `src/i18n/**`, `src/proxy.ts`, any
`layout.tsx`, `messages/*/common.json` or any other namespace, `supabase/**`,
`services/ankle-foot/**`, `services/joint-injections/**`, `services/arthroscopic-surgery/**`
(other sessions own those), `package.json`.

## Translation policy — ABSOLUTE

You personally write ALL Hebrew, English and Russian text directly into the files. NEVER call
any external API, LLM, script, or translation service — no exceptions. Hebrew is the primary
language (professional, warm, medically accurate); English and Russian are full-quality native
versions. Use ONLY verifiable facts (37 years, Maccabi, the real clinics). Do NOT invent
statistics, success rates, or patient outcomes. General medical-education content (what a
meniscus tear is, how rehabilitation progresses) is fine and encouraged — keep it accurate,
calm, and non-alarmist, and always advise consulting the doctor for a personal diagnosis.

## Design conventions

- Tokens: `primary` (#0085e6), `primary-soft/faint/dark/deep`, `ink`, `muted`, `muted-2`;
  cards `rounded-4xl`; width via `<Container>` (`max-w-9xl`).
- Animations ONLY via `<FadeIn>` / `<Stagger>` — never import `motion/react`.
- RTL-safe: logical utilities only; directional arrows `rtl:rotate-180`.
- Links via `@/i18n/navigation`. Hrefs exactly per `src/lib/routes.ts`.
- Pages: `params: Promise<{locale}>`, `setRequestLocale` first, `generateMetadata` via
  `buildMetadata`.

## Patterns (follow exactly)

Content module per page:
```ts
// src/content/services/shoulder/shoulder-pain-injuries.ts
import type { Locale, ServicePageContent } from "@/content/types";
export const content: Record<Locale, ServicePageContent> = { he: {...}, en: {...}, ru: {...} };
```

Thin page:
```tsx
const { locale } = await params;
setRequestLocale(locale);
const t = await getTranslations("common");
const c = content[locale as Locale];
return (
  <ServicePageTemplate
    content={c}
    breadcrumbs={[
      { label: t("nav.services"), href: "/services" },
      { label: t("servicesMenu.shoulderElbow"), href: "/services/shoulder-elbow" },
      { label: c.title },
    ]}
  />
);
```

## Tasks

### 1. `/services` — hub page

`PageHero` (title/subtitle from `services.json`) + `Stagger` grid of the 5 category cards
(`ServiceCategoryCard`, labels from `common.servicesMenu`, descriptions from `services.json`,
inline SVG line icons) + `CtaBanner`. Category hrefs: `/services/shoulder-elbow`,
`/services/knee`, `/services/ankle-foot`, `/services/joint-injections`,
`/services/arthroscopic-surgery`.

### 2. `/services/shoulder-elbow` — category page + 6 subpages

Category page: `PageHero` + intro paragraphs (content module `shoulder/index.ts`) + `Stagger`
grid of 6 `ServiceCategoryCard`s linking to the subpages + `CtaBanner`. Subpages (each:
content module + thin `ServicePageTemplate` page, 4–6 sections, 2–3 FAQ items, ~400–600 words
per locale):

| Route | Topic |
|---|---|
| `shoulder-pain-injuries` | Shoulder pain & injury types: rotator cuff tears, dislocation/instability, frozen shoulder, impingement; when to see a specialist |
| `injections` | Shoulder & elbow injections: what they treat, types, procedure, aftercare |
| `shoulder-surgery` | Shoulder surgeries: arthroscopic rotator cuff repair, stabilization; preparation & recovery |
| `elbow-surgery` | Elbow surgery: tennis/golfer's elbow, loose bodies, arthroscopy |
| `rehabilitation` | Rehabilitation after shoulder surgery: phases, timeline ranges, working with physiotherapists |
| `physiotherapy` | Shoulder physiotherapy: conservative care, exercise principles, when it's the first choice |

### 3. `/services/knee` — category page + 5 subpages

Same structure (content modules in `src/content/services/knee/`):

| Route | Topic |
|---|---|
| `injuries` | Knee injuries: meniscus tears, ACL/ligament injuries, cartilage damage (adapt example.md lines 122–137 — rewrite, don't copy) |
| `injections-vs-surgery` | Joint injections as an alternative to surgery: when each is appropriate |
| `surgery` | Knee surgery: arthroscopic meniscus treatment, ligament reconstruction |
| `rehabilitation` | Rehabilitation after knee surgery: phases, return to activity |
| `physiotherapy` | Knee physiotherapy: strengthening, conservative management |

Cross-link naturally between your own pages (e.g. injuries → surgery → rehabilitation) and to
`/services/joint-injections` and `/services/arthroscopic-surgery` (those exist as routes —
other sessions are building them; linking is safe).

`services.json` / `shoulder.json` / `knee.json`: meta titles/descriptions per page + card
descriptions + any short UI strings. Long prose lives in content modules only.

## Acceptance criteria

- `npx tsc --noEmit` passes for your files (full build may fail on other sessions' missing
  routes — fine).
- All 14 routes render fully translated at `/`, `/en/…`, `/ru/…`; RTL correct; breadcrumbs
  correct; every page ends in the CTA banner.
- All 3 locales structurally identical; no placeholder text, no invented facts.
- Final message: list files created + word-count sanity (each subpage ≥ 350 words/locale).
