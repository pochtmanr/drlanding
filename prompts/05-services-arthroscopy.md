# Prompt 05 — Arthroscopic Surgery Category

## Context

You are building the arthroscopic-surgery section of a trilingual clinic website for
**Dr. Vyacheslav Dubenko** (HE: ד"ר ויאצ'סלב דובנקו · RU: Д-р Вячеслав Дубенко) — orthopedic
specialist and shoulder & knee surgeon, 37 years of experience, Maccabi, 4 clinics
(Rehovot ×2, Bnei Ayish, Rishon LeZion). Arthroscopy — minimally invasive, camera-guided
surgery through small incisions — is the doctor's preferred surgical approach, so this is a
cornerstone section: patient-facing, reassuring, practically useful.

Stack: Next.js 16 App Router + Tailwind v4 + next-intl + Supabase. Locales: **Hebrew (default,
RTL, served at `/`)**, English (`/en`), Russian (`/ru`). The foundation is **already built —
you only consume it**.

Other Claude sessions are building other pages **in parallel in this same checkout**. Strict
file ownership (below) prevents conflicts. Do not touch anything outside your files.

## Read these files FIRST

- `src/content/types.ts` (`ServicePageContent`), `src/components/templates/service-page.tsx`
- `src/components/ui/*`, `src/components/sections/*`, `src/components/motion/*`
- `src/lib/metadata.ts`, `src/lib/routes.ts` (exact slugs — non-negotiable)
- `messages/he/common.json` (`servicesMenu` labels — reuse)
- `reference/example.md` lines 51–59 (your sitemap part: note the two themes for
  insurance-forms: "first day after surgery" and "rehabilitation guidelines")
- `src/app/[locale]/(public)/page.tsx` (page pattern reference)

## File ownership — HARD BOUNDARY

You may CREATE/EDIT ONLY:
- `src/app/[locale]/(public)/services/arthroscopic-surgery/**` (8 pages)
- `src/content/services/arthroscopy/**`
- `messages/{he,en,ru}/arthroscopy.json`

NEVER touch: `src/components/**`, `src/lib/**`, `src/i18n/**`, `src/proxy.ts`, any
`layout.tsx`, `messages/*/common.json` or any other namespace, `supabase/**`, any other
`services/**` folder (other sessions own those), `package.json`.

## Translation policy — ABSOLUTE

You personally write ALL Hebrew, English and Russian text directly into the files. NEVER call
any external API, LLM, script, or translation service — no exceptions. Hebrew is the primary
language (professional, warm, medically accurate); English and Russian are full-quality native
versions. Use ONLY verifiable facts (37 years, Maccabi, the real clinics). Do NOT invent
statistics, success rates, complication rates, or patient outcomes. General surgical-education
content (what arthroscopy is, typical recovery phases described in ranges) is fine — accurate,
calm, non-alarmist, always advising a personal consultation.

## Design conventions

- Tokens: `primary` (#0085e6), `primary-soft/faint/dark/deep`, `ink`, `muted`, `muted-2`;
  cards `rounded-4xl`; width via `<Container>` (`max-w-9xl`).
- Animations ONLY via `<FadeIn>` / `<Stagger>` — never import `motion/react`.
- RTL-safe: logical utilities only; directional arrows `rtl:rotate-180`.
- Links via `@/i18n/navigation`. Hrefs exactly per `src/lib/routes.ts`.
- Pages: `params: Promise<{locale}>`, `setRequestLocale` first, `generateMetadata` via
  `buildMetadata`.

## Patterns (follow exactly)

```ts
// src/content/services/arthroscopy/preparation.ts
import type { Locale, ServicePageContent } from "@/content/types";
export const content: Record<Locale, ServicePageContent> = { he: {...}, en: {...}, ru: {...} };
```

```tsx
// thin page
const c = content[locale as Locale];
return (
  <ServicePageTemplate
    content={c}
    breadcrumbs={[
      { label: t("nav.services"), href: "/services" },
      { label: t("servicesMenu.arthroscopy"), href: "/services/arthroscopic-surgery" },
      { label: c.title },
    ]}
  />
);
```

## Tasks

### `/services/arthroscopic-surgery` — category page + 7 subpages

Category page: `PageHero` + intro (content module `arthroscopy/index.ts`) explaining what
arthroscopy is, its advantages (small incisions, less tissue damage, shorter recovery,
usually ambulatory) and which joints it serves + `Stagger` grid of 7 `ServiceCategoryCard`s +
`CtaBanner`.

Subpages (content module + thin `ServicePageTemplate` page each; 4–6 sections, 2–3 FAQ items,
~450–650 words per locale — this category carries heavier practical copy):

| Route | Topic |
|---|---|
| `shoulder` | Shoulder arthroscopy: rotator cuff repair, stabilization after dislocations, impingement |
| `elbow` | Elbow arthroscopy: loose bodies, stiffness, tennis elbow when conservative care fails |
| `knee` | Knee arthroscopy: meniscus treatment, ligament reconstruction, cartilage procedures |
| `ankle-foot` | Ankle & foot arthroscopy: impingement, cartilage lesions, chronic instability |
| `preparation` | **Preparation for surgery — patient guide**: pre-op tests, medications to discuss, fasting, what to bring, arranging help at home; checklist as `bullets` |
| `rehabilitation` | **Postoperative rehabilitation** — two themes per the sitemap: (a) the first day after surgery (dressings, ice, pain management, when to call the clinic) and (b) rehabilitation guidelines (phases in week-ranges, physiotherapy, gradual return to activity) |
| `insurance-forms` | Insurance claim forms for surgery: which documents the clinic provides, typical insurer flow, Maccabi coverage note (generic — invent no form numbers or prices) |

Cross-link: each joint page → matching category elsewhere (`/services/shoulder-elbow`,
`/services/knee`, `/services/ankle-foot` — safe to link, other sessions own them) and →
`preparation` / `rehabilitation`.

`arthroscopy.json`: meta titles/descriptions per page + card descriptions + short UI strings.
Long prose lives in content modules only.

## Acceptance criteria

- `npx tsc --noEmit` passes for your files (full build may fail on other sessions' missing
  routes — fine).
- All 8 routes render fully translated at `/`, `/en/…`, `/ru/…`; RTL correct; breadcrumbs
  correct; every page ends in the CTA banner.
- All 3 locales structurally identical; no placeholder text, no invented facts.
- Final message: list files created + word-count sanity (each subpage ≥ 400 words/locale).
