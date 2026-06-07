import { Container } from "@/components/ui/container";
import { Breadcrumbs, type Crumb } from "@/components/layout/breadcrumbs";
import { SplitText } from "@/components/motion/split-text";

/**
 * Standard inner-page hero: plain white backdrop, breadcrumbs, title, subtitle.
 * Pulls itself under the 72px header footprint (-mt-18 + pt-18) so the
 * background runs behind the floating pill, same as the home hero.
 * Only the title animates (word-by-word SplitText, same as the home hero);
 * everything else renders static.
 */
export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <div className="relative -mt-18 overflow-hidden bg-white pt-18">
      <Container className="relative pt-16 pb-8 md:pt-24 md:pb-10">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <SplitText
          as="h1"
          delay={0.15}
          stagger={0.07}
          duration={0.85}
          className="mt-6 max-w-4xl text-4xl font-semibold text-balance md:text-5xl xl:text-6xl"
        >
          {title}
        </SplitText>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-2 md:text-xl">
            {subtitle}
          </p>
        )}
        {children}
      </Container>
    </div>
  );
}
