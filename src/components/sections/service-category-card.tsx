import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * Card for a service category or sub-service. Whole card is clickable.
 * Layered structure: soft shell, white inner panel, CTA strip on the shell.
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
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-4xl border border-primary-soft bg-primary-soft shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {/* Inner panel */}
      <div
        className={cn(
          "m-2 flex flex-1 flex-col rounded-[2rem] bg-white p-6 shadow-sm",
          large && "min-h-48 p-8 md:p-10",
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
            "mt-2.5 leading-relaxed text-muted",
            large && "text-lg",
          )}
        >
          {description}
        </p>
      </div>
      {/* CTA strip on the shell */}
      {cta && (
        <span
          className={cn(
            "flex items-center justify-between gap-2.5 px-6 pt-1 pb-4 font-medium text-primary-deep",
            large && "px-8 pb-5 text-lg",
          )}
        >
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
    </Link>
  );
}
