import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { PUBLIC_ROUTES } from "@/lib/routes";
import type { Locale } from "@/content/types";

function localePath(locale: Locale, path: string): string {
  const suffix = path === "/" ? "" : path;
  return locale === "he" ? path || "/" : `/${locale}${suffix}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.map((path) => ({
    url: `${site.baseUrl}${localePath("he", path)}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services") ? 0.8 : 0.6,
    alternates: {
      languages: {
        he: `${site.baseUrl}${localePath("he", path)}`,
        en: `${site.baseUrl}${localePath("en", path)}`,
        ru: `${site.baseUrl}${localePath("ru", path)}`,
      },
    },
  }));
}
