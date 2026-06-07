import { cn } from "@/lib/utils";
import { fieldClasses } from "./input";

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(fieldClasses, "min-h-28 resize-y", className)}
      {...props}
    />
  );
}
