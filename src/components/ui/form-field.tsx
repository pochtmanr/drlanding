import { cn } from "@/lib/utils";

/** Label + control + error wiring for form inputs. */
export function FormField({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="ms-1 text-primary">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
