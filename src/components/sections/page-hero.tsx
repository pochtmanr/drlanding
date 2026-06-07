import { Container } from "@/components/ui/container";
import { Breadcrumbs, type Crumb } from "@/components/layout/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SplitText } from "@/components/motion/split-text";
import { FadeIn } from "@/components/motion/fade-in";

/**
 * Standard inner-page hero: plain white backdrop, breadcrumbs, title, subtitle.
 * Pulls itself under the 72px header footprint (-mt-18 + pt-18) so the
 * background runs behind the floating pill, same as the home hero.
 * Only the title animates (word-by-word SplitText, same as the home hero);
 * everything else renders static.
 * `image` switches to a two-column layout with a photo on the side,
 * mirroring the home hero.
 */
export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  image,
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  image?: string;
  children?: React.ReactNode;
}) {
  const body = (
    <>
      {breadcrumbs && <BreadcrumbJsonLd items={breadcrumbs} />}
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
    </>
  );

  return (
    <div className="relative -mt-18 overflow-hidden bg-white pt-18">
      <Container className="relative pt-16 pb-8 md:pt-24 md:pb-10">
        {image ? (
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>{body}</div>
            <FadeIn delay={0.2}>
              <div className="overflow-hidden rounded-4xl shadow-xl shadow-primary/10">
                <img
                  src={image}
                  alt={title}
                  width={900}
                  height={600}
                  fetchPriority="high"
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        ) : (
          body
        )}
      </Container>
    </div>
  );
}
