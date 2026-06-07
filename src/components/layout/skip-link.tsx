import { useTranslations } from "next-intl";

export function SkipLink() {
  const t = useTranslations("common");

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-100 focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-white"
    >
      {t("skipLink")}
    </a>
  );
}
