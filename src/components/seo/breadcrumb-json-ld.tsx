import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/types";
import type { Crumb } from "@/components/layout/breadcrumbs";
import { buildBreadcrumbList } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";

/** BreadcrumbList JSON-LD mirroring the visible <Breadcrumbs> trail. */
export async function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("common.breadcrumbs");
  return <JsonLd data={buildBreadcrumbList(locale, items, t("home"))} />;
}
