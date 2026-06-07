import { useLocale, useTranslations } from "next-intl";
import type { ClinicLocation, Locale } from "@/content/types";
import { Card } from "@/components/ui/card";

/** Renders one clinic with address, phones and navigation deep links. */
export function ClinicCard({ clinic }: { clinic: ClinicLocation }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("common.misc");
  const query = encodeURIComponent(clinic.mapsQuery);

  return (
    <Card className="flex h-full flex-col">
      <h3 className="text-lg font-semibold">{clinic.name[locale]}</h3>
      <p className="mt-2 text-muted">
        {clinic.address[locale]}, {clinic.city[locale]}
      </p>

      <dl className="mt-4 flex-1 space-y-1.5 text-[15px]">
        {clinic.bookingPhones.length > 0 && (
          <div className="flex flex-wrap items-baseline gap-x-2">
            <dt className="text-muted">{t("phone")}:</dt>
            {clinic.bookingPhones.map((phone) => (
              <dd key={phone}>
                <a
                  dir="ltr"
                  href={`tel:${phone}`}
                  className="font-medium text-primary hover:text-primary-dark"
                >
                  {phone}
                </a>
              </dd>
            ))}
          </div>
        )}
        {clinic.clinicPhone && (
          <div className="flex items-baseline gap-x-2">
            <dt className="text-muted">{t("phone")}:</dt>
            <dd>
              <a
                dir="ltr"
                href={`tel:${clinic.clinicPhone}`}
                className="font-medium text-primary hover:text-primary-dark"
              >
                {clinic.clinicPhone}
              </a>
            </dd>
          </div>
        )}
        {clinic.fax && (
          <div className="flex items-baseline gap-x-2">
            <dt className="text-muted">{t("fax")}:</dt>
            <dd dir="ltr" className="text-muted-2">
              {clinic.fax}
            </dd>
          </div>
        )}
      </dl>

      <div className="mt-5 flex flex-wrap gap-2.5">
        <a
          href={`https://waze.com/ul?q=${query}&navigate=yes`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary-soft px-4 py-2 text-sm font-medium text-primary-deep transition-colors hover:bg-primary hover:text-white"
        >
          {t("openInWaze")}
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${query}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary-soft px-4 py-2 text-sm font-medium text-primary-deep transition-colors hover:bg-primary hover:text-white"
        >
          {t("openInMaps")}
        </a>
      </div>
    </Card>
  );
}
