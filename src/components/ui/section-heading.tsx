import { cn } from "@/lib/utils";
import { SplitText } from "@/components/motion/split-text";

/**
 * Standard section heading: small primary eyebrow, large title, muted
 * subtitle. Start-aligned by default (RTL-safe), optionally centered.
 * The title reveals word-by-word (SplitText) when scrolled into view —
 * the only entrance animation titles get; eyebrow/subtitle stay static.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
          {eyebrow}
        </p>
      )}
      <SplitText
        as="h2"
        inView
        stagger={0.07}
        duration={0.85}
        className="text-3xl font-semibold text-balance md:text-4xl xl:text-5xl"
      >
        {title}
      </SplitText>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  );
}
