# Prompt 04 — Ankle & Foot + Joint Injections Services

## Context

You are building two service categories of a trilingual clinic website for
**Dr. Vyacheslav Dubenko** (HE: ד"ר ויאצ'סלב דובנקו · RU: Д-р Вячеслав Дубенко) — orthopedic
specialist and shoulder & knee surgeon, 37 years of experience, Maccabi, 4 clinics
(Rehovot ×2, Bnei Ayish, Rishon LeZion).

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
- `reference/example.md` lines 36–50 (your part of the sitemap) and 154–164 (ankle sprain copy)
- `src/app/[locale]/(public)/page.tsx` (page pattern reference)

## File ownership — HARD BOUNDARY

You may CREATE/EDIT ONLY:
- `src/app/[locale]/(public)/services/ankle-foot/**` (6 pages)
- `src/app/[locale]/(public)/services/joint-injections/**` (8 pages)
- `src/content/services/ankle/**`, `src/content/services/injections/**`
- `messages/{he,en,ru}/ankle.json`, `messages/{he,en,ru}/injections.json`

NEVER touch: `src/components/**`, `src/lib/**`, `src/i18n/**`, `src/proxy.ts`, any
`layout.tsx`, `messages/*/common.json` or any other namespace, `supabase/**`,
`services/page.tsx`, `services/shoulder-elbow/**`, `services/knee/**`,
`services/arthroscopic-surgery/**` (other sessions own those), `package.json`.

## Translation policy — ABSOLUTE

You personally write ALL Hebrew, English and Russian text directly into the files. NEVER call
any external API, LLM, script, or translation service — no exceptions. Hebrew is the primary
language (professional, warm, medically accurate); English and Russian are full-quality native
versions. Use ONLY verifiable facts (37 years, Maccabi, the real clinics). Do NOT invent
statistics, success rates, or patient outcomes. General medical-education content (what PRP
is, how an ankle sprain heals) is fine — accurate, calm, non-alarmist, always advising a
personal consultation.

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
// src/content/services/ankle/injuries.ts
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
      { label: t("servicesMenu.ankleFoot"), href: "/services/ankle-foot" },
      { label: c.title },
    ]}
  />
);
```

## Tasks

### 1. `/services/ankle-foot` — category page + 5 subpages

Category page: `PageHero` + intro (content module `ankle/index.ts`) + `Stagger` grid of 5
`ServiceCategoryCard`s + `CtaBanner`. Subpages (content module + thin `ServicePageTemplate`
page each; 4–6 sections, 2–3 FAQ items, ~400–600 words per locale):

| Route | Topic |
|---|---|
| `injuries` | Ankle & foot injuries: sprains (2nd most common orthopedic injury — adapt example.md 154–164, rewrite don't copy), instability, Achilles problems |
| `injections` | Ankle & foot injections: indications, types, procedure |
| `surgery` | Ankle surgeries: arthroscopy, stabilization for chronic instability |
| `rehabilitation` | Rehabilitation after ankle surgery: phases, weight-bearing progression |
| `physiotherapy` | Ankle & foot physiotherapy: balance/proprioception, prevention of re-sprain |

### 2. `/services/joint-injections` — category page + 7 subpages

Category page: `PageHero` + intro framing injections as the conservative alternative to
surgery + `Stagger` grid of 7 cards + `CtaBanner`. Subpages:

| Route | Topic |
|---|---|
| `prp-hyaluronic-combined` | Combined growth-factor injection — PRP + hyaluronic acid together: rationale, candidates |
| `prp` | PRP (platelet-rich plasma): how it works, procedure, what to expect |
| `orthokine` | Orthokine therapy: autologous serum, course of treatment |
| `hyaluronic-acid` | Hyaluronic acid injection: joint lubrication, osteoarthritis |
| `steroid` | Steroid/cortisone injection: fast relief, sensible frequency limits |
| `insurance-forms` | Insurance claim forms: which documents the clinic provides, how to submit to insurers/Maccabi (practical, generic — invent no specific form numbers) |
| `self-physiotherapy` | Self-practice physiotherapy: safe home-exercise principles before/after injections |

Cross-link between injection types (e.g. each type page links to the combined overview) and to
`/services/knee/injections-vs-surgery` and `/contact` where natural (routes owned by other
sessions exist — linking is safe).

`ankle.json` / `injections.json`: meta titles/descriptions per page + card descriptions +
short UI strings. Long prose lives in content modules only.

## Acceptance criteria

- `npx tsc --noEmit` passes for your files (full build may fail on other sessions' missing
  routes — fine).
- All 14 routes render fully translated at `/`, `/en/…`, `/ru/…`; RTL correct; breadcrumbs
  correct; every page ends in the CTA banner.
- All 3 locales structurally identical; no placeholder text, no invented facts.
- Final message: list files created + word-count sanity (each subpage ≥ 350 words/locale).
