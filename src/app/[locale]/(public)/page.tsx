import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { Link } from "@/i18n/navigation";
import { site } from "@/content/site";
import { clinics } from "@/content/clinics";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { CalendarIcon, PhoneIcon } from "@/components/ui/icons";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SplitText } from "@/components/motion/split-text";
import { ServiceCategoryCard } from "@/components/sections/service-category-card";
import { ClinicCard } from "@/components/sections/clinic-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { AppointmentForm } from "@/components/forms/appointment-form";

// Placeholder stock photos (Unsplash CDN) — to be replaced with real clinic
// photography. Plain <img> on purpose: next.config.ts has no remotePatterns
// and is outside this page's file-ownership boundary.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80";
const INTRO_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80";

/** Small accent icons for the "why choose us" cards. */
const whyIcons = {
  experience: (
    <svg viewBox="0 0 24 24" aria-hidden className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="5" />
      <path d="m8.5 13 -1.5 7 5-2.5L17 20l-1.5-7" />
    </svg>
  ),
  surgical: (
    <svg viewBox="0 0 24 24" aria-hidden className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c3 2.5 6 3.5 8 4 0 7-3.5 11.5-8 14-4.5-2.5-8-7-8-14 2-.5 5-1.5 8-4Z" />
      <path d="m9 12 2 2 4-4.5" />
    </svg>
  ),
  arthroscopy: (
    <svg viewBox="0 0 24 24" aria-hidden className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h4l2-5 4 10 2-5h4" />
    </svg>
  ),
  languages: (
    <svg viewBox="0 0 24 24" aria-hidden className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 12a8 8 0 1 0-3.5 6.6L21 20l-1.2-3.6A8 8 0 0 0 20 12Z" />
      <path d="M8 11h8" />
      <path d="M8 14.5h5.5" />
    </svg>
  ),
} as const;

const serviceCategories = [
  { key: "shoulderElbow", labelKey: "servicesMenu.shoulderElbow", href: "/services/shoulder-elbow" },
  { key: "knee", labelKey: "servicesMenu.knee", href: "/services/knee" },
  { key: "ankleFoot", labelKey: "servicesMenu.ankleFoot", href: "/services/ankle-foot" },
  { key: "jointInjections", labelKey: "servicesMenu.jointInjections", href: "/services/joint-injections" },
  { key: "arthroscopy", labelKey: "servicesMenu.arthroscopy", href: "/services/arthroscopic-surgery" },
] as const;

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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tCommon = await getTranslations("common");

  const whyCards = [
    { key: "experience", title: tCommon("experienceYears"), description: t("why.items.experience.description") },
    { key: "surgical", title: t("why.items.surgical.title"), description: t("why.items.surgical.description") },
    { key: "arthroscopy", title: t("why.items.arthroscopy.title"), description: t("why.items.arthroscopy.description") },
    { key: "languages", title: t("why.items.languages.title"), description: t("why.items.languages.description") },
  ] as const;

  return (
    <>
      {/* 1. Hero */}
      <div className="relative -mt-18 flex min-h-svh items-center overflow-hidden bg-white pt-18">
        <Container className="relative w-full py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge tone="soft">{tCommon("experienceYears")}</Badge>
              <p className="mt-6 text-sm font-semibold tracking-wide text-primary uppercase">
                {t("hero.eyebrow")}
              </p>
              <SplitText
                as="h1"
                delay={0.15}
                stagger={0.07}
                duration={0.85}
                className="mt-3 text-4xl font-bold text-balance md:text-5xl xl:text-6xl"
              >
                {tCommon("doctorName")}
              </SplitText>
              <p className="mt-4 text-xl font-medium text-primary-dark md:text-2xl">
                {tCommon("doctorTitle")}
              </p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                {t("hero.subtitle")}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/appointment">
                    <CalendarIcon className="size-5 shrink-0" />
                    {tCommon("header.bookAppointment")}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${site.mainPhone}`}>
                    <PhoneIcon className="size-5 shrink-0" />
                    {tCommon("misc.callNow")}
                    <span dir="ltr">{site.mainPhone}</span>
                  </a>
                </Button>
              </div>
            </div>
            <FadeIn delay={0.2}>
              <div className="relative overflow-hidden rounded-4xl shadow-xl shadow-primary/10">
                <img
                  src={HERO_IMAGE}
                  alt={t("hero.imageAlt")}
                  width={900}
                  height={675}
                  fetchPriority="high"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>

      {/* 2. Service categories */}
      <Section tone="white">
        <SectionHeading
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
          centered
        />
        <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {serviceCategories.map((category) => (
            <StaggerItem key={category.key} className="h-full">
              <ServiceCategoryCard
                title={tCommon(category.labelKey)}
                description={t(`services.items.${category.key}.description`)}
                href={category.href}
                cta={tCommon("misc.learnMore")}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* 3. Intro strip */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="order-2 lg:order-1">
            <img
              src={INTRO_IMAGE}
              alt={t("intro.imageAlt")}
              width={900}
              height={675}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-4xl object-cover shadow-lg shadow-primary/5"
            />
          </FadeIn>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow={t("intro.eyebrow")} title={t("intro.title")} />
            <p className="mt-6 text-lg leading-relaxed text-muted">{t("intro.p1")}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted">{t("intro.p2")}</p>
          </div>
        </div>
      </Section>

      {/* 4. Why choose us */}
      <Section tone="soft">
        <SectionHeading eyebrow={t("why.eyebrow")} title={t("why.title")} centered />
        <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {whyCards.map((card) => (
            <StaggerItem key={card.key} className="h-full">
              <Card className="h-full">
                <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                  {whyIcons[card.key]}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{card.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* 5. Quick appointment */}
      <Section tone="white">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow={t("appointment.eyebrow")} title={t("appointment.title")} />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {t("appointment.text")}
            </p>
            <a
              href={`tel:${site.mainPhone}`}
              className="mt-4 inline-flex items-center gap-2 text-xl font-semibold text-primary underline-offset-4 hover:underline"
            >
              {tCommon("misc.callNow")}
              <span dir="ltr">{site.mainPhone}</span>
            </a>
          </div>
          <FadeIn delay={0.15}>
            <Card>
              <h3 className="text-2xl font-semibold">{tCommon("forms.appointment.title")}</h3>
              <p className="mt-2 text-muted">{tCommon("forms.appointment.subtitle")}</p>
              <div className="mt-7">
                <AppointmentForm compact />
              </div>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* 6. Clinics snippet */}
      <Section tone="white">
        <SectionHeading
          eyebrow={t("clinics.eyebrow")}
          title={t("clinics.title")}
          subtitle={t("clinics.subtitle")}
          centered
        />
        <Stagger className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {clinics.map((clinic) => (
            <StaggerItem key={clinic.id} className="h-full">
              <ClinicCard clinic={clinic} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* 7. Closing CTA */}
      <CtaBanner subtitle={t("cta.subtitle")} />
    </>
  );
}
