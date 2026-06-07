import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { FadeIn } from "@/components/motion/fade-in";
import { JsonLd } from "@/components/seo/json-ld";
import { faq } from "@/content/patient-info/faq";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "patientInfo" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("meta.faq.title"),
    description: t("meta.faq.description"),
    path: "/patient-info/faq",
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("patientInfo");
  const tCommon = await getTranslations("common");
  const items = faq[locale as Locale];

  // FAQPage structured data, rendered from the same content as the accordion.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        title={t("faq.title")}
        subtitle={t("faq.subtitle")}
        breadcrumbs={[
          { label: tCommon("nav.patientInfo"), href: "/patient-info" },
          { label: t("faq.title") },
        ]}
      />

      <Container className="py-14 md:py-20">
        <div className="max-w-3xl">
          <FadeIn>
            <FaqAccordion items={items} />
          </FadeIn>
        </div>
      </Container>

      <CtaBanner />
    </>
  );
}
