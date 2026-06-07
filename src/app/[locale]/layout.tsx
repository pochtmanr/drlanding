import type { Metadata } from "next";
import { Manrope, Rubik } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin", "cyrillic"],
  display: "swap",
});

// Used for en/ru; Manrope has no Hebrew subset, so `he` stays on Rubik
// (selection happens per-locale via --font-app in globals.css).
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Vyacheslav Dubenko",
    template: "%s | Dr. Vyacheslav Dubenko",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
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

  return (
    <html
      lang={locale}
      dir={locale === "he" ? "rtl" : "ltr"}
      className={`${rubik.variable} ${manrope.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white text-ink">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
