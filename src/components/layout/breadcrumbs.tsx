import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export interface Crumb {
  label: string;
  href?: string;
}

/** RTL-safe breadcrumbs; the last crumb is the current page. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const t = useTranslations("common.breadcrumbs");

  return (
    <nav aria-label="breadcrumbs" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="transition-colors hover:text-primary">
            {t("home")}
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span aria-hidden className="text-line-strong">
              /
            </span>
            {item.href && i < items.length - 1 ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
