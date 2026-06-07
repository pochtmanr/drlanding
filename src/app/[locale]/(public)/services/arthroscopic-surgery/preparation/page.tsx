import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { content } from "@/content/services/arthroscopy/preparation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "arthroscopy" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("pages.preparation.metaTitle"),
    description: t("pages.preparation.metaDescription"),
    path: "/services/arthroscopic-surgery/preparation",
  });
}

export default async function ArthroscopyPreparationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("arthroscopy");
  const tCommon = await getTranslations("common");
  const c = content[locale as Locale];

  const related = [
    { label: t("cards.rehabilitation.title"), href: "/services/arthroscopic-surgery/rehabilitation" },
    { label: t("cards.insuranceForms.title"), href: "/services/arthroscopic-surgery/insurance-forms" },
  ];

  return (
    <ServicePageTemplate
      content={c}
      breadcrumbs={[
        { label: tCommon("nav.services"), href: "/services" },
        { label: tCommon("servicesMenu.arthroscopy"), href: "/services/arthroscopic-surgery" },
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
