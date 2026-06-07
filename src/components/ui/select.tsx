import { cn } from "@/lib/utils";
import { fieldClasses } from "./input";

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(fieldClasses, "appearance-none cursor-pointer", className)}
      {...props}
    >
      {children}
    </select>
  );
}
