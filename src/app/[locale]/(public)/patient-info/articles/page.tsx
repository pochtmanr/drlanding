import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { article as sportsInjuryPrevention } from "@/content/patient-info/articles/sports-injury-prevention";
import { article as rehabilitationTips } from "@/content/patient-info/articles/rehabilitation-tips";
import { article as returnToSport } from "@/content/patient-info/articles/return-to-sport";

const articles = [
  { key: "sportsInjuryPrevention", href: "/patient-info/articles/sports-injury-prevention", content: sportsInjuryPrevention },
  { key: "rehabilitationTips", href: "/patient-info/articles/rehabilitation-tips", content: rehabilitationTips },
  { key: "returnToSport", href: "/patient-info/articles/return-to-sport", content: returnToSport },
] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "patientInfo" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("meta.articles.title"),
    description: t("meta.articles.description"),
    path: "/patient-info/articles",
  });
}

export default async function ArticlesPage({
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
        title={t("articles.title")}
        subtitle={t("articles.subtitle")}
        breadcrumbs={[
          { label: tCommon("nav.patientInfo"), href: "/patient-info" },
          { label: t("articles.title") },
        ]}
      />

      <Container className="py-14 md:py-20">
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map(({ key, href, content }) => {
            const c = content[locale as Locale];
            return (
              <StaggerItem key={key} className="h-full">
                <Link href={href} className="group block h-full">
                  <Card className="flex h-full flex-col hover:border-primary/30 hover:shadow-card-hover">
                    <p className="text-sm font-medium text-muted">
                      {t("articles.readingTime", { minutes: c.readingMinutes })}
                    </p>
                    <h2 className="mt-3 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                      {c.title}
                    </h2>
                    <p className="mt-2.5 flex-1 leading-relaxed text-muted">
                      {c.description}
                    </p>
                    <span className="mt-auto flex items-center justify-between gap-2.5 pt-6 font-medium text-primary">
                      {t("articles.readArticle")}
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-white">
                        <svg
                          viewBox="0 0 16 16"
                          aria-hidden
                          className="size-4 transition-transform duration-300 ltr:group-hover:-rotate-45 rtl:rotate-180 rtl:group-hover:rotate-[225deg]"
                        >
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>

      <CtaBanner />
    </>
  );
}
