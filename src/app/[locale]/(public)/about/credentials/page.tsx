import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { DocumentLightbox } from "@/components/sections/document-lightbox";
import { content, documents } from "@/content/about/credentials";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("credentials.meta.title"),
    description: t("credentials.meta.description"),
    path: "/about/credentials",
  });
}

export default async function CredentialsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("common");
  const tAbout = await getTranslations("about");
  const c = content[locale as Locale];

  return (
    <ServicePageTemplate
      content={c}
      breadcrumbs={[
        { label: t("nav.about"), href: "/about" },
        { label: c.title },
      ]}
    >
      {/* CtaBanner below has no top padding of its own (it normally follows
          white containers), so keep an explicit gap after this tinted block. */}
      <Section tone="faint" className="mb-10 md:mb-14">
        <SectionHeading
          eyebrow={tAbout("credentials.documents.eyebrow")}
          title={tAbout("credentials.documents.title")}
          subtitle={tAbout("credentials.documents.subtitle")}
          centered
        />
        <div className="mt-12">
          <DocumentLightbox
            documents={documents[locale as Locale]}
            closeLabel={t("misc.close")}
          />
        </div>
      </Section>
    </ServicePageTemplate>
  );
}
