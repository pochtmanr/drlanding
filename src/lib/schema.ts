import type { Locale, Localized } from "@/content/types";
import type { Crumb } from "@/components/layout/breadcrumbs";
import { site } from "@/content/site";
import { clinics } from "@/content/clinics";
import { documents } from "@/content/about/credentials";
import { localeUrl } from "@/lib/metadata";

/**
 * schema.org JSON-LD builders. Every fact comes from src/content/ —
 * no invented hours, geo coordinates or credentials (see site.ts/clinics.ts).
 */

const PHYSICIAN_ID = `${site.baseUrl}/#physician`;
const WEBSITE_ID = `${site.baseUrl}/#website`;
const clinicId = (id: string) => `${site.baseUrl}/#clinic-${id}`;

/** schema.org MedicalSpecialty enumeration member. */
const SPECIALTY = "https://schema.org/Orthopedic";

const MINISTRY_OF_HEALTH: Localized = {
  he: "משרד הבריאות",
  en: "Israel Ministry of Health",
  ru: "Министерство здравоохранения Израиля",
};

/** "08-9560938" -> "+972-8-9560938"; short codes (e.g. "3555") pass through. */
function intlPhone(phone: string): string {
  return phone.startsWith("0") ? `+972-${phone.slice(1)}` : phone;
}

/** Prefer a full local number over short hotline codes like "3555". */
function clinicPhone(phones: string[], fallback?: string): string | undefined {
  return phones.find((p) => p.startsWith("0")) ?? phones[0] ?? fallback;
}

/**
 * Site-wide graph: the physician as hub entity, the four clinic locations
 * he works at, and the website itself. Rendered once in the public layout.
 */
export function buildSiteGraph(locale: Locale, services: string[]) {
  const docs = documents[locale];
  // The two MoH-issued authorizations (license + specialist certificate);
  // docs[0]/docs[1] order is fixed in credentials.ts.
  const credentials = [
    { doc: docs[0], category: "license" },
    { doc: docs[1], category: "certification" },
  ].map(({ doc, category }) => ({
    "@type": "EducationalOccupationalCredential",
    name: doc.title,
    description: doc.description,
    credentialCategory: category,
    recognizedBy: {
      "@type": "GovernmentOrganization",
      name: MINISTRY_OF_HEALTH[locale],
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: localeUrl(locale, "/"),
        name: site.doctorName[locale],
        inLanguage: locale,
        publisher: { "@id": PHYSICIAN_ID },
      },
      {
        "@type": "Physician",
        "@id": PHYSICIAN_ID,
        name: site.doctorName[locale],
        description: site.doctorTitle[locale],
        medicalSpecialty: SPECIALTY,
        url: localeUrl(locale, "/about"),
        image: localeUrl(locale, "/opengraph-image"),
        telephone: intlPhone(site.mainPhone),
        knowsLanguage: ["he", "en", "ru"],
        hasCredential: credentials,
        availableService: services.map((name) => ({
          "@type": "MedicalProcedure",
          name,
        })),
        worksFor: clinics.map((c) => ({ "@id": clinicId(c.id) })),
        memberOf: clinics.map((c) => ({ "@id": clinicId(c.id) })),
      },
      ...clinics.map((clinic) => {
        const phone = clinicPhone(clinic.bookingPhones, clinic.clinicPhone);
        return {
          "@type": "MedicalClinic",
          "@id": clinicId(clinic.id),
          name: clinic.name[locale],
          medicalSpecialty: SPECIALTY,
          address: {
            "@type": "PostalAddress",
            streetAddress: clinic.address[locale],
            addressLocality: clinic.city[locale],
            addressCountry: "IL",
          },
          ...(phone && { telephone: intlPhone(phone) }),
          ...(clinic.fax && { faxNumber: intlPhone(clinic.fax) }),
          physician: { "@id": PHYSICIAN_ID },
        };
      }),
    ],
  };
}

/**
 * BreadcrumbList mirroring the visible <Breadcrumbs> trail (which always
 * starts at Home). The last crumb has no href; Google accepts the final
 * item without a URL.
 */
export function buildBreadcrumbList(
  locale: Locale,
  items: Crumb[],
  homeLabel: string,
) {
  const crumbs: Crumb[] = [{ label: homeLabel, href: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      ...(crumb.href && { item: localeUrl(locale, crumb.href) }),
    })),
  };
}

/** MedicalWebPage for editorial/article pages, tied to the physician. */
export function buildMedicalWebPage(
  locale: Locale,
  { title, description, path }: { title: string; description: string; path: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: localeUrl(locale, path),
    inLanguage: locale,
    about: { "@id": PHYSICIAN_ID },
    isPartOf: { "@id": WEBSITE_ID },
    author: { "@id": PHYSICIAN_ID },
  };
}
