import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { content } from "@/content/services/injections/orthokine";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "injections" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("pages.orthokine.metaTitle"),
    description: t("pages.orthokine.metaDescription"),
    path: "/services/joint-injections/orthokine",
  });
}

export default async function OrthokinePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("injections");
  const tCommon = await getTranslations("common");
  const c = content[locale as Locale];

  const related = [
    { label: t("cards.prpHyaluronicCombined.title"), href: "/services/joint-injections/prp-hyaluronic-combined" },
    { label: t("cards.prp.title"), href: "/services/joint-injections/prp" },
    { label: t("links.kneeInjectionsVsSurgery"), href: "/services/knee/injections-vs-surgery" },
  ];

  return (
    <ServicePageTemplate
      content={c}
      breadcrumbs={[
        { label: tCommon("nav.services"), href: "/services" },
        { label: tCommon("servicesMenu.jointInjections"), href: "/services/joint-injections" },
        { label: c.title },
      ]}
    >
      <Container className="pb-4">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="text-lg font-semibold">{t("related")}</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {related.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </ServicePageTemplate>
  );
}
