import { setRequestLocale, getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SkipLink } from "@/components/layout/skip-link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { buildSiteGraph } from "@/lib/schema";

export default async function PublicLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  // Physician + clinics + website graph, localized, on every public page.
  const t = await getTranslations("common.servicesMenu");
  const siteGraph = buildSiteGraph(locale, [
    t("shoulderElbow"),
    t("knee"),
    t("ankleFoot"),
    t("jointInjections"),
    t("arthroscopy"),
  ]);

  return (
    <>
      <JsonLd data={siteGraph} />
      <SkipLink />
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
