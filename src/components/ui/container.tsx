import { cn } from "@/lib/utils";

/** Wide page container — max-w-9xl ≈ 1700px per the design reference. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-9xl px-5 md:px-10", className)}>
      {children}
    </div>
  );
}
