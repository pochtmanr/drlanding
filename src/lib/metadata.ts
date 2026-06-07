import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { site } from "@/content/site";

/** Path for a locale under localePrefix: 'as-needed' (he is unprefixed). */
function localePath(locale: Locale, path: string): string {
  const suffix = path === "/" ? "" : path;
  return locale === "he" ? path : `/${locale}${suffix || "/"}`;
}

/**
 * Builds page metadata with canonical + hreflang alternates.
 * Every page's generateMetadata should delegate here.
 */
export function buildMetadata({
  locale,
  title,
  description,
  path,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = (l: Locale) => `${site.baseUrl}${localePath(l, path)}`;

  return {
    title,
    description,
    alternates: {
      canonical: url(locale),
      languages: {
        he: url("he"),
        en: url("en"),
        ru: url("ru"),
        "x-default": url("he"),
      },
    },
    openGraph: {
      title,
      description,
      url: url(locale),
      siteName: site.doctorName[locale],
      locale,
      type: "website",
    },
  };
}
