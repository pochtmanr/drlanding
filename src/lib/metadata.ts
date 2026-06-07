import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { site } from "@/content/site";

/** Open Graph locale tags (og:locale / og:locale:alternate). */
const OG_LOCALE: Record<Locale, string> = {
  he: "he_IL",
  en: "en_US",
  ru: "ru_RU",
};

/** Path for a locale under localePrefix: 'as-needed' (he is unprefixed). */
export function localePath(locale: Locale, path: string): string {
  const suffix = path === "/" ? "" : path;
  return locale === "he" ? path : `/${locale}${suffix || "/"}`;
}

/** Absolute URL for a path in a given locale. */
export function localeUrl(locale: Locale, path: string): string {
  return `${site.baseUrl}${localePath(locale, path)}`;
}

/**
 * Builds page metadata with canonical + hreflang alternates.
 * Every page's generateMetadata should delegate here.
 * og:image comes from the [locale]/opengraph-image.tsx file convention.
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
  const url = (l: Locale) => localeUrl(l, path);
  // Explicit because each page's openGraph replaces the layout-level one
  // (Next.js doesn't deep-merge), which would drop the file-convention image.
  const ogImage = {
    url: localePath(locale, "/opengraph-image"),
    width: 1200,
    height: 630,
    alt: title,
  };

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
      locale: OG_LOCALE[locale],
      alternateLocale: (Object.keys(OG_LOCALE) as Locale[])
        .filter((l) => l !== locale)
        .map((l) => OG_LOCALE[l]),
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
