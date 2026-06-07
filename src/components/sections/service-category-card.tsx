import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * Card for a service category or sub-service. Whole card is clickable.
 * `large` renders the roomier 2-per-row variant used on the services pages.
 */
export function ServiceCategoryCard({
  title,
  description,
  href,
  cta,
  large = false,
}: {
  title: string;
  description: string;
  href: string;
  cta?: string;
  large?: boolean;
}) {
  return (
    <Link href={href} className="group block h-full">
      <Card
        className={cn(
          "flex h-full flex-col hover:border-primary/30 hover:shadow-card-hover",
          large && "min-h-56 p-10 md:p-12",
        )}
      >
        <h3
          className={cn(
            "font-semibold transition-colors duration-300 group-hover:text-primary",
            large ? "text-2xl" : "text-xl",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-2.5 flex-1 leading-relaxed text-muted",
            large && "text-lg",
          )}
        >
          {description}
        </p>
        {cta && (
          <span className="mt-auto flex items-center justify-between gap-2.5 pt-6 font-medium text-primary">
            {cta}
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-white">
              <svg
                viewBox="0 0 16 16"
                aria-hidden
                className="size-4 transition-transform duration-300 ltr:group-hover:-rotate-45 rtl:rotate-180 rtl:group-hover:rotate-[225deg]"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        )}
      </Card>
    </Link>
  );
}
