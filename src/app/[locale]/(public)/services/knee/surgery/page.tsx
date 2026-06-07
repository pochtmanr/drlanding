import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { content } from "@/content/services/knee/surgery";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "knee" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("pages.surgery.metaTitle"),
    description: t("pages.surgery.metaDescription"),
    path: "/services/knee/surgery",
  });
}

export default async function KneeSurgeryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("knee");
  const tCommon = await getTranslations("common");
  const c = content[locale as Locale];

  const related = [
    { label: t("cards.rehabilitation.title"), href: "/services/knee/rehabilitation" },
    { label: t("cards.injuries.title"), href: "/services/knee/injuries" },
    { label: tCommon("servicesMenu.arthroscopy"), href: "/services/arthroscopic-surgery" },
  ];

  return (
    <ServicePageTemplate
      content={c}
      breadcrumbs={[
        { label: tCommon("nav.services"), href: "/services" },
        { label: tCommon("servicesMenu.knee"), href: "/services/knee" },
        { label: c.title },
      ]}
    >
      <Container className="pb-4">
        <div className="max-w-3xl">
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
        </div>
      </Container>
    </ServicePageTemplate>
  );
}
