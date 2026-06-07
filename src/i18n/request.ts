import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

/**
 * Message namespaces. One JSON file per namespace per locale lives in
 * /messages/{locale}/{namespace}.json.
 *
 * FROZEN CONTRACT: this list is final. Feature prompts fill in their own
 * namespace files and must never edit this file or other namespaces —
 * this is what makes parallel prompt execution conflict-free.
 */
const NAMESPACES = [
  "common",
  "home",
  "about",
  "sports",
  "services",
  "shoulder",
  "knee",
  "ankle",
  "injections",
  "arthroscopy",
  "patientInfo",
  "appointment",
  "contact",
  "legal",
  "admin",
] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const entries = await Promise.all(
    NAMESPACES.map(async (ns) => {
      const messages = (await import(`../../messages/${locale}/${ns}.json`))
        .default;
      return [ns, messages] as const;
    }),
  );

  return { locale, messages: Object.fromEntries(entries) };
});
