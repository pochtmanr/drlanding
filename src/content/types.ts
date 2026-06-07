/**
 * Typed content contracts. Long page copy lives in content modules
 * (src/content/<area>/<page>.ts) typed with these interfaces, exported as
 * Record<Locale, ...> — one entry per language, written by hand.
 */

export type Locale = "he" | "en" | "ru";

export const LOCALES: Locale[] = ["he", "en", "ru"];

/** A value translated into all three site languages. */
export type Localized<T = string> = Record<Locale, T>;

export interface ContentSection {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
  /** Optional emphasized note rendered in a primary-soft callout. */
  note?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServicePageContent {
  /** Hero */
  title: string;
  subtitle: string;
  intro: string;
  sections: ContentSection[];
  faq?: FaqItem[];
  /** Override for the CTA banner heading; falls back to a shared default. */
  ctaTitle?: string;
}

export interface ArticleContent {
  title: string;
  description: string;
  readingMinutes: number;
  sections: ContentSection[];
}

export interface Testimonial {
  name: string;
  context: string;
  quote: string;
}

export interface ClinicLocation {
  id: string;
  name: Localized;
  address: Localized;
  city: Localized;
  /** Address used for maps/Waze deep links (Hebrew works best in Israel). */
  mapsQuery: string;
  bookingPhones: string[];
  clinicPhone?: string;
  fax?: string;
}
