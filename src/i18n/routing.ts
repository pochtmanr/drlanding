import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["he", "en", "ru"],
  defaultLocale: "he",
  // '/' serves Hebrew; English and Russian live under /en and /ru.
  localePrefix: "as-needed",
});

export type AppLocale = (typeof routing.locales)[number];
