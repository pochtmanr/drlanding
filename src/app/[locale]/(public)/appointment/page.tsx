import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { clinics } from "@/content/clinics";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { AppointmentForm } from "@/components/forms/appointment-form";

const STEPS = ["1", "2", "3"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "appointment" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("meta.title"),
    description: t("meta.description"),
    path: "/appointment",
  });
}

export default async function AppointmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("appointment");
  const tCommon = await getTranslations("common");

  return (
    <>
      <PageHero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        breadcrumbs={[{ label: tCommon("nav.appointment") }]}
      />

      {/* The page IS the CTA — no closing CtaBanner here. */}
      <Section tone="white" className="pt-0 md:pt-4">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* How it works + phone-first alternative */}
          <FadeIn>
            <h2 className="text-2xl font-semibold md:text-3xl">
              {t("howItWorks.heading")}
            </h2>
            <ol className="mt-7 space-y-6">
              {STEPS.map((step) => (
                <li key={step} className="flex gap-4">
                  <span
                    aria-hidden
                    className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary-soft text-lg font-semibold text-primary"
                  >
                    {step}
                  </span>
                  <div>
                    <h3 className="font-semibold">
                      {t(`howItWorks.steps.${step}.title`)}
                    </h3>
                    <p className="mt-1 leading-relaxed text-muted-2">
                      {t(`howItWorks.steps.${step}.text`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <Card tinted className="mt-10">
              <h3 className="text-lg font-semibold">{t("byPhone.heading")}</h3>
              <p className="mt-2 text-muted-2">{t("byPhone.text")}</p>
              <ul className="mt-5 space-y-3">
                {clinics.map((clinic) => {
                  const phones =
                    clinic.bookingPhones.length > 0
                      ? clinic.bookingPhones
                      : clinic.clinicPhone
                        ? [clinic.clinicPhone]
                        : [];
                  return (
                    <li
                      key={clinic.id}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                    >
                      <span className="font-medium">
                        {clinic.name[locale as Locale]},{" "}
                        {clinic.city[locale as Locale]}
                      </span>
                      <span className="flex flex-wrap gap-x-3">
                        {phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone}`}
                            dir="ltr"
                            className="font-semibold text-primary underline-offset-4 hover:underline"
                          >
                            {phone}
                          </a>
                        ))}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </Card>

            <p className="mt-6 leading-relaxed text-muted-2">
              {t("maccabiNote")}
            </p>
            <p className="mt-5 rounded-3xl bg-primary-soft px-6 py-5 leading-relaxed text-primary-deep">
              {t("honestyNote")}
            </p>
          </FadeIn>

          {/* The form */}
          <FadeIn delay={0.15}>
            <Card>
              <h2 className="text-2xl font-semibold">
                {tCommon("forms.appointment.title")}
              </h2>
              <p className="mt-2 text-muted">
                {tCommon("forms.appointment.subtitle")}
              </p>
              <div className="mt-7">
                <AppointmentForm />
              </div>
            </Card>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
