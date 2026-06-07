import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ServiceCategoryCard } from "@/components/sections/service-category-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

/** Small accent icons for the "good to know" strip. */
const goodToKnowIcons = {
  maccabi: (
    <svg viewBox="0 0 24 24" aria-hidden className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c3 2.5 6 3.5 8 4 0 7-3.5 11.5-8 14-4.5-2.5-8-7-8-14 2-.5 5-1.5 8-4Z" />
      <path d="m9 12 2 2 4-4.5" />
    </svg>
  ),
  imaging: (
    <svg viewBox="0 0 24 24" aria-hidden className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M12 7v10" />
      <path d="M8.5 9.5h7" />
      <path d="M9 12.5h6" />
      <path d="M9.5 15.5h5" />
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

const cards = [
  { key: "testimonials", href: "/patient-info/testimonials" },
  { key: "faq", href: "/patient-info/faq" },
  { key: "articles", href: "/patient-info/articles" },
] as const;

const goodToKnowItems = ["maccabi", "imaging", "languages"] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "patientInfo" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("meta.hub.title"),
    description: t("meta.hub.description"),
    path: "/patient-info",
  });
}

export default async function PatientInfoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("patientInfo");
  const tCommon = await getTranslations("common");

  return (
    <>
      <PageHero
        title={t("hub.title")}
        subtitle={t("hub.subtitle")}
        breadcrumbs={[{ label: tCommon("nav.patientInfo") }]}
      />

      <Container className="pt-6 pb-14 md:pt-8 md:pb-20">
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <StaggerItem key={card.key} className="h-full">
              <ServiceCategoryCard
                title={t(`hub.cards.${card.key}.title`)}
                description={t(`hub.cards.${card.key}.description`)}
                href={card.href}
                cta={tCommon("misc.readMore")}
              />
            </StaggerItem>
          ))}
        </Stagger>

        {/* "Good to know" strip */}
        <FadeIn className="mt-14 md:mt-20">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {t("hub.goodToKnow.title")}
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
            {goodToKnowItems.map((item) => (
              <Card key={item} tinted className="h-full">
                <span className="grid size-12 place-items-center rounded-2xl bg-white text-primary">
                  {goodToKnowIcons[item]}
                </span>
                <h3 className="mt-5 text-lg font-semibold">
                  {t(`hub.goodToKnow.items.${item}.title`)}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-2">
                  {t(`hub.goodToKnow.items.${item}.text`)}
                </p>
              </Card>
            ))}
          </div>
        </FadeIn>
      </Container>

      <CtaBanner />
    </>
  );
}
