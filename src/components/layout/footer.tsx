import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/content/site";
import { clinics } from "@/content/clinics";
import type { Locale } from "@/content/types";
import { Container } from "@/components/ui/container";
import { LEGAL_LINKS, MAIN_LINKS, SERVICE_LINKS } from "./nav-links";

export function Footer() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-primary-faint">
      <Container className="grid gap-12 py-16 md:grid-cols-2 xl:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">

            <span className="font-semibold">{t("doctorName")}</span>
          </div>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted">
            {t("doctorTitle")} · {t("experienceYears")}
          </p>
          <p className="mt-2 text-[15px] text-muted">{t("footer.maccabi")}</p>
          <a
            dir="ltr"
            href={`tel:${site.mainPhone}`}
            className="mt-4 inline-block text-lg font-semibold text-primary hover:text-primary-dark"
          >
            {site.mainPhone}
          </a>
        </div>

        {/* Quick links */}
        <nav aria-label={t("footer.quickLinks")}>
          <p className="mb-4 font-semibold">{t("footer.quickLinks")}</p>
          <ul className="space-y-2.5">
            {[...MAIN_LINKS, { labelKey: "nav.appointment", href: "/appointment" }].map(
              (link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-muted transition-colors hover:text-primary"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label={t("nav.services")}>
          <p className="mb-4 font-semibold">{t("nav.services")}</p>
          <ul className="space-y-2.5">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-muted transition-colors hover:text-primary"
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Clinics */}
        <div>
          <p className="mb-4 font-semibold">{t("footer.clinics")}</p>
          <ul className="space-y-4">
            {clinics.map((clinic) => (
              <li key={clinic.id} className="text-[15px] leading-relaxed">
                <span className="block text-ink">{clinic.name[locale]}</span>
                <span className="block text-muted">
                  {clinic.address[locale]}, {clinic.city[locale]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-line/70">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted md:flex-row">
          <p>{t("footer.rights", { year })}</p>
          <nav aria-label={t("footer.legal")} className="flex gap-5">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  );
}
