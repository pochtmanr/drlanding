import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds a hover lift + stronger shadow (for clickable cards). */
  interactive?: boolean;
  /** Soft sky-tinted background instead of white. */
  tinted?: boolean;
}

/** Signature 40px-radius card from the design reference. */
export function Card({
  interactive = false,
  tinted = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-4xl border border-line bg-white p-8 shadow-card transition-all duration-300",
        tinted && "border-transparent bg-primary-faint",
        interactive &&
          "hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
