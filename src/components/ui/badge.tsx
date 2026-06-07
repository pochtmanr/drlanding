import { cn } from "@/lib/utils";

type Tone = "primary" | "neutral" | "success" | "danger" | "warning" | "soft";

const tones: Record<Tone, string> = {
  primary: "bg-primary text-white",
  soft: "bg-primary-soft text-primary-deep",
  neutral: "bg-ink/5 text-muted-2",
  success: "bg-success/10 text-success",
  danger: "bg-danger/10 text-danger",
  warning: "bg-warning/10 text-warning",
};

export function Badge({
  tone = "soft",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-sm font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
