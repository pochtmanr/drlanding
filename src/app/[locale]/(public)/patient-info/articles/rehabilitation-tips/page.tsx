import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FadeIn } from "@/components/motion/fade-in";
import { article } from "@/content/patient-info/articles/rehabilitation-tips";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "patientInfo" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("meta.rehabilitationTips.title"),
    description: t("meta.rehabilitationTips.description"),
    path: "/patient-info/articles/rehabilitation-tips",
  });
}

export default async function RehabilitationTipsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("patientInfo");
  const tCommon = await getTranslations("common");
  const c = article[locale as Locale];

  return (
    <>
      <PageHero
        title={c.title}
        subtitle={c.description}
        breadcrumbs={[
          { label: tCommon("nav.patientInfo"), href: "/patient-info" },
          { label: t("articles.title"), href: "/patient-info/articles" },
          { label: c.title },
        ]}
      >
        <p className="mt-5 text-sm font-medium text-muted">
          {t("articles.readingTime", { minutes: c.readingMinutes })}
        </p>
      </PageHero>

      <Container className="py-14 md:py-20">
        <FadeIn>
          <article className="max-w-3xl space-y-12">
            {c.sections.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    {section.heading}
                  </h2>
                )}
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="leading-relaxed text-muted-2">
                      {p}
                    </p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-4 space-y-2.5">
                    {section.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                        />
                        <span className="leading-relaxed text-muted-2">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.note && (
                  <p className="mt-5 rounded-3xl bg-primary-soft px-6 py-5 leading-relaxed text-primary-deep">
                    {section.note}
                  </p>
                )}
              </section>
            ))}
          </article>
        </FadeIn>
      </Container>

      <CtaBanner />
    </>
  );
}
