import { cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-[0_8px_24px_rgb(0_133_230/0.25)] hover:bg-primary-dark hover:shadow-[0_10px_32px_rgb(0_133_230/0.35)]",
  outline:
    "border border-line-strong text-ink hover:border-primary hover:text-primary",
  ghost: "text-ink hover:bg-primary-soft hover:text-primary-deep",
  white:
    "bg-white text-primary-deep shadow-[0_8px_24px_rgb(8_79_128/0.2)] hover:bg-primary-faint",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-9 text-lg",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  /** Render the styles onto the child element (e.g. a Link) instead of a <button>. */
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  asChild = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (asChild && isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return cloneElement(child, {
      className: cn(classes, child.props.className),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
