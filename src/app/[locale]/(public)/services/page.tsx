import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ServiceCategoryCard } from "@/components/sections/service-category-card";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

const serviceCategories = [
  { key: "shoulderElbow", labelKey: "servicesMenu.shoulderElbow", href: "/services/shoulder-elbow" },
  { key: "knee", labelKey: "servicesMenu.knee", href: "/services/knee" },
  { key: "ankleFoot", labelKey: "servicesMenu.ankleFoot", href: "/services/ankle-foot" },
  { key: "jointInjections", labelKey: "servicesMenu.jointInjections", href: "/services/joint-injections" },
  { key: "arthroscopy", labelKey: "servicesMenu.arthroscopy", href: "/services/arthroscopic-surgery" },
] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("meta.title"),
    description: t("meta.description"),
    path: "/services",
  });
}

export default async function ServicesHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const tCommon = await getTranslations("common");

  return (
    <>
      <PageHero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        breadcrumbs={[{ label: tCommon("nav.services") }]}
      />

      <Container className="pt-6 pb-14 md:pt-8 md:pb-20">
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {serviceCategories.map((category) => (
            <StaggerItem key={category.key} className="h-full">
              <ServiceCategoryCard
                title={tCommon(category.labelKey)}
                description={t(`cards.${category.key}`)}
                href={category.href}
                cta={tCommon("misc.learnMore")}
                large
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>

      <CtaBanner />
    </>
  );
}
