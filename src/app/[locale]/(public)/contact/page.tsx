import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/content/site";
import { clinics } from "@/content/clinics";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { PhoneIcon } from "@/components/ui/icons";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { PageHero } from "@/components/sections/page-hero";
import { ClinicCard } from "@/components/sections/clinic-card";
import { ContactForm } from "@/components/forms/contact-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("meta.title"),
    description: t("meta.description"),
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const tCommon = await getTranslations("common");

  return (
    <>
      <PageHero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        breadcrumbs={[{ label: tCommon("nav.contact") }]}
      />

      {/* The four clinics */}
      <Section tone="white" className="pt-0 md:pt-4">
        <h2 className="text-2xl font-semibold md:text-3xl">
          {t("clinics.heading")}
        </h2>
        <Stagger className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {clinics.map((clinic) => (
            <StaggerItem key={clinic.id} className="h-full">
              <ClinicCard clinic={clinic} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Contact form + urgent-questions note */}
      <Section tone="faint">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <Card>
              <h2 className="text-2xl font-semibold">
                {tCommon("forms.contact.title")}
              </h2>
              <div className="mt-7">
                <ContactForm />
              </div>
            </Card>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="text-2xl font-semibold md:text-3xl">
              {t("urgent.heading")}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-2">
              {t("urgent.text")}
            </p>
            <p className="mt-8 font-medium">{t("urgent.mainPhoneLabel")}</p>
            <a
              href={`tel:${site.mainPhone}`}
              className="mt-2 inline-flex items-center gap-2 text-xl font-semibold text-primary underline-offset-4 hover:underline"
            >
              <PhoneIcon className="size-5 shrink-0" />
              <span dir="ltr">{site.mainPhone}</span>
            </a>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
