import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { content } from "@/content/legal/cookies";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("cookies.meta.title"),
    description: t("cookies.meta.description"),
    path: "/cookies",
  });
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = content[locale as Locale];

  return <ServicePageTemplate content={c} breadcrumbs={[{ label: c.title }]} />;
}
