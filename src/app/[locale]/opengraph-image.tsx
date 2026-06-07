import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";

/**
 * Localized Open Graph card (1200x630) shared by every page in the locale.
 * Rubik covers Hebrew, Cyrillic and Latin, so one font serves all locales.
 */

export const alt = "Dr. Vyacheslav Dubenko";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = hasLocale(routing.locales, raw) ? raw : "he";
  const rubik = await readFile(
    join(process.cwd(), "assets/fonts/Rubik-SemiBold.ttf"),
  );

  // satori (next/og) lays glyphs out in logical order without bidi
  // reordering, so pure-Hebrew single-line strings must be reversed to
  // read correctly. Safe here: both strings are short, single-line and
  // contain no mixed-direction segments or combining marks.
  const text = (s: string) =>
    locale === "he" ? [...s].reverse().join("") : s;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "linear-gradient(135deg, #0085e6 0%, #084f80 100%)",
          color: "#ffffff",
          fontFamily: "Rubik",
          alignItems: locale === "he" ? "flex-end" : "flex-start",
          textAlign: locale === "he" ? "right" : "left",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            lineHeight: 1.15,
          }}
        >
          {text(site.doctorName[locale])}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 36,
            lineHeight: 1.3,
            color: "#e6f5ff",
            maxWidth: 900,
          }}
        >
          {text(site.doctorTitle[locale])}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 64,
            fontSize: 28,
            color: "#cfeaff",
          }}
        >
          dr-dubenko.co.il
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Rubik", data: rubik, weight: 600, style: "normal" }],
    },
  );
}
