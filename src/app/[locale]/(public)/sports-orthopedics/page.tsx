import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { ServiceCategoryCard } from "@/components/sections/service-category-card";
import { content } from "@/content/sports/sports-orthopedics";

/** Common sports injuries, each linking to its matching service page. */
const injuryCards = [
  { key: "meniscus", href: "/services/knee/injuries" },
  { key: "acl", href: "/services/knee/surgery" },
  {
    key: "shoulderDislocation",
    href: "/services/shoulder-elbow/shoulder-pain-injuries",
  },
  { key: "ankleSprain", href: "/services/ankle-foot/injuries" },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sports" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("meta.title"),
    description: t("meta.description"),
    path: "/sports-orthopedics",
  });
}

export default async function SportsOrthopedicsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("sports");
  const tCommon = await getTranslations("common");
  const c = content[locale as Locale];

  return (
    <ServicePageTemplate
      content={c}
      breadcrumbs={[{ label: tCommon("nav.sports") }]}
    >
      <Section tone="faint">
        <SectionHeading
          eyebrow={t("injuries.eyebrow")}
          title={t("injuries.title")}
          subtitle={t("injuries.subtitle")}
          centered
        />
        <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {injuryCards.map((card) => (
            <StaggerItem key={card.key} className="h-full">
              <ServiceCategoryCard
                title={t(`injuries.cards.${card.key}.title`)}
                description={t(`injuries.cards.${card.key}.description`)}
                href={card.href}
                cta={tCommon("misc.learnMore")}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </ServicePageTemplate>
  );
}
