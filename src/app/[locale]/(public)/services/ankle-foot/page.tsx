import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ServiceCategoryCard } from "@/components/sections/service-category-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { content } from "@/content/services/ankle";

const subpages = [
  { key: "injuries", href: "/services/ankle-foot/injuries" },
  { key: "injections", href: "/services/ankle-foot/injections" },
  { key: "surgery", href: "/services/ankle-foot/surgery" },
  { key: "rehabilitation", href: "/services/ankle-foot/rehabilitation" },
  { key: "physiotherapy", href: "/services/ankle-foot/physiotherapy" },
] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ankle" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("meta.title"),
    description: t("meta.description"),
    path: "/services/ankle-foot",
  });
}

export default async function AnkleFootPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ankle");
  const tCommon = await getTranslations("common");
  const c = content[locale as Locale];

  return (
    <>
      <PageHero
        title={c.title}
        subtitle={c.subtitle}
        breadcrumbs={[
          { label: tCommon("nav.services"), href: "/services" },
          { label: tCommon("servicesMenu.ankleFoot") },
        ]}
      />

      <Container className="pt-6 pb-14 md:pt-8 md:pb-20">
        <div className="max-w-3xl space-y-4">
          {c.intro.map((paragraph, i) => (
            <FadeIn key={i}>
              <p className="text-lg leading-relaxed text-ink/85">{paragraph}</p>
            </FadeIn>
          ))}
        </div>

        <Stagger className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {subpages.map((page) => (
            <StaggerItem key={page.key} className="h-full">
              <ServiceCategoryCard
                title={t(`cards.${page.key}.title`)}
                description={t(`cards.${page.key}.description`)}
                href={page.href}
                cta={tCommon("misc.readMore")}
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
