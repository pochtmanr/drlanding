import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors duration-200 focus:border-primary focus:outline-2 focus:outline-primary/20 disabled:opacity-50";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClasses, className)} {...props} />;
}

export { fieldClasses };
