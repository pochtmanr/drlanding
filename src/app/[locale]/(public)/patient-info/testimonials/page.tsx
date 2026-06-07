import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { testimonials } from "@/content/patient-info/testimonials";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "patientInfo" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("meta.testimonials.title"),
    description: t("meta.testimonials.description"),
    path: "/patient-info/testimonials",
  });
}

export default async function TestimonialsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("patientInfo");
  const tCommon = await getTranslations("common");
  const items = testimonials[locale as Locale];

  return (
    <>
      <PageHero
        title={t("testimonials.title")}
        subtitle={t("testimonials.subtitle")}
        breadcrumbs={[
          { label: tCommon("nav.patientInfo"), href: "/patient-info" },
          { label: t("testimonials.title") },
        ]}
      />

      <Container className="py-14 md:py-20">
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((testimonial) => (
            <StaggerItem key={testimonial.name} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>

      <CtaBanner />
    </>
  );
}
