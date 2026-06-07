import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

/**
 * Vertical rhythm wrapper for page sections. `tone` controls the calm
 * background alternation used across the site.
 */
export function Section({
  tone = "white",
  className,
  containerClassName,
  id,
  children,
}: {
  tone?: "white" | "soft" | "faint";
  className?: string;
  containerClassName?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        tone === "soft" && "bg-primary-soft",
        tone === "faint" && "bg-primary-faint",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
