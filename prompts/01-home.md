# Prompt 01 — Home / Landing Page

## Context

You are building the home page of a trilingual clinic website for **Dr. Vyacheslav Dubenko**
(HE: ד"ר ויאצ'סלב דובנקו · RU: Д-р Вячеслав Дубенко) — orthopedic specialist and shoulder & knee
surgeon, **37 years of experience**, works with **Maccabi** health fund, consults at 4 clinics
(2× Rehovot, Bnei Ayish, Rishon LeZion — data in `src/content/clinics.ts`).

Stack: Next.js 16 App Router + Tailwind v4 + next-intl + Supabase. Locales: **Hebrew (default,
RTL, served at `/`)**, English (`/en`), Russian (`/ru`). The foundation (design system, layout,
header/footer, forms, Supabase) is **already built — you only consume it**.

Other Claude sessions are building other pages **in parallel in this same checkout**. Strict
file ownership (below) prevents conflicts. Do not "fix" or touch anything outside your files,
even if you notice issues — note them in your final message instead.

## Read these files FIRST

- `src/content/types.ts`, `src/content/site.ts`, `src/content/clinics.ts`
- `src/components/ui/*`, `src/components/sections/*`, `src/components/motion/*`,
  `src/components/layout/section.tsx`, `src/components/forms/appointment-form.tsx`
- `src/lib/metadata.ts`, `src/lib/routes.ts`, `src/i18n/navigation.ts`
- `messages/he/common.json` (tone + existing strings — reuse, don't duplicate)
- `reference/example.md` (sitemap + sample copy), `reference/docinfo.md` (real doctor facts)
- `src/app/[locale]/(public)/page.tsx` (the placeholder you will replace)

## File ownership — HARD BOUNDARY

You may CREATE/EDIT ONLY:
- `src/app/[locale]/(public)/page.tsx` (replace the placeholder)
- `src/content/home/**` (optional content modules if you prefer typed content over messages)
- `messages/he/home.json`, `messages/en/home.json`, `messages/ru/home.json`

NEVER touch: `src/components/**`, `src/lib/**`, `src/i18n/**`, `src/proxy.ts`,
`src/app/globals.css`, any `layout.tsx`, `messages/*/common.json` or any other namespace,
`supabase/**`, other routes, `package.json`.

## Translation policy — ABSOLUTE

You personally write ALL Hebrew, English and Russian text directly into the files. NEVER call
any external API, LLM, script, or translation service (OpenAI, Google Translate, DeepL, etc.) —
no exceptions, even if it seems faster. Write Hebrew natively as the primary language
(professional, warm, medically accurate, patient-facing); English and Russian must be
full-quality native versions, not literal echoes. Use ONLY verifiable facts: 37 years of
experience, Maccabi, shoulder & knee surgical specialty, the 4 real clinics/phones from
`src/content/clinics.ts`. Do NOT invent credentials, universities, statistics, success rates,
or patient outcomes.

## Design conventions

- Calm, airy, premium-medical. Primary `#0085e6` → tokens `primary`, `primary-dark`,
  `primary-soft`, `primary-faint`, `primary-deep`; text `ink`, secondary `muted`/`muted-2`.
- Cards: `rounded-4xl` (40 px) via `<Card>`. Page width: `<Container>` (`max-w-9xl` ≈ 1700 px).
- Animations ONLY via `<FadeIn>` / `<Stagger>`+`<StaggerItem>` — never import `motion/react`.
- RTL-safe: logical utilities only (`ps-/pe-/ms-/me-/text-start/start-/end-`), never
  `pl-/ml-/left-/right-`; directional arrow icons get `rtl:rotate-180`.
- Links: `import { Link } from "@/i18n/navigation"` — never `next/link`.
- Hrefs must match `src/lib/routes.ts` exactly.

## Page pattern (follow exactly)

```tsx
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("meta.title"),
    description: t("meta.description"),
    path: "/",
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  // ...sections
}
```

## Tasks

Build `src/app/[locale]/(public)/page.tsx` with these sections, top to bottom. All copy goes
into `messages/{he,en,ru}/home.json` (namespace `home`); keys are yours to design. Use
`<Section>` for vertical rhythm and tone alternation (`white` / `faint` / `soft`).

1. **Hero** — full-bleed calm gradient (see `PageHero` for the gradient idiom, but build a
   custom, larger hero here, not `PageHero`): doctor name as `h1`, specialty subtitle,
   experience badge (`<Badge>`: "37 שנות ניסיון" etc. — reuse `common.experienceYears`),
   two CTAs: primary `<Button asChild>` → `<Link href="/appointment">` and outline button
   with `tel:` link to `site.mainPhone` (mark phone numbers `dir="ltr"`). Stagger the
   entrance. Optional: subtle decorative blurred circles (see `cta-banner.tsx` idiom).
2. **Intro strip** — 2–3 sentence introduction of the doctor and his approach (conservative
   treatment first, surgery when needed, minimally invasive arthroscopy preference).
3. **Service categories** — `SectionHeading` + responsive grid (1/2/3/5 cols at
   sm/md/xl) of 5 `<ServiceCategoryCard>`s wrapped in `<Stagger>`/`<StaggerItem>`:
   Shoulder & Elbow `/services/shoulder-elbow`, Knee `/services/knee`, Ankle & Foot
   `/services/ankle-foot`, Joint Injections `/services/joint-injections`, Arthroscopic
   Surgery `/services/arthroscopic-surgery`. Reuse labels from `common.servicesMenu`; write
   1-sentence descriptions in `home.json`. Give each an inline SVG icon (simple line icons,
   `stroke="currentColor"`).
4. **Why choose us** — 4 cards: 37 years' experience · shoulder & knee surgical expertise ·
   minimally invasive arthroscopic approach · care in Hebrew, Russian and English. Short,
   factual.
5. **Quick appointment** — two-column section (stacks on mobile): start side
   `SectionHeading` + reassuring paragraph + phone link; end side `<Card>` containing
   `<AppointmentForm compact />`.
6. **Clinics snippet** — `SectionHeading` + grid of 4 `<ClinicCard clinic={...}>` from
   `clinics` array, wrapped in `Stagger`.
7. Finish with `<CtaBanner subtitle={t("cta.subtitle")} />`.

Also fill `home.json` `meta.title` / `meta.description` (SEO: "אורתופד מומחה" / "orthopedic
surgeon" / "врач-ортопед" + city names Rehovot/Rishon LeZion naturally).

## Acceptance criteria

- `npx tsc --noEmit` passes for your files (full `npm run build` may fail on OTHER sessions'
  missing routes — that's fine; your page must compile).
- `/`, `/en`, `/ru` render the full home page, no untranslated keys or English leaking into
  he/ru, RTL looks correct (run `npm run dev`, check visually).
- All 3 locales of `home.json` have identical key structure.
- Final message: list files created + anything you noticed but did not touch.
