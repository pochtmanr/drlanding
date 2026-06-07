import type { ServicePageContent } from "@/content/types";
import type { Crumb } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";

/**
 * Shared template for all ~35 service/article-style pages. Feature pages
 * stay thin: they load a typed content module and render this template,
 * which guarantees visual consistency across the whole services tree.
 */
export function ServicePageTemplate({
  content,
  breadcrumbs,
  children,
}: {
  content: ServicePageContent;
  breadcrumbs: Crumb[];
  /** Optional extra blocks rendered between sections and the FAQ. */
  children?: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        title={content.title}
        subtitle={content.subtitle}
        breadcrumbs={breadcrumbs}
      />

      <Container className="pt-6 pb-14 md:pt-8 md:pb-20">
        <p className="max-w-3xl text-lg leading-relaxed text-ink/85 md:text-xl">
          {content.intro}
        </p>

        <div className="mt-12 max-w-3xl space-y-12">
          {content.sections.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="text-2xl font-semibold md:text-3xl">
                  {section.heading}
                </h2>
              )}
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="leading-relaxed text-muted-2">
                    {p}
                  </p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                      />
                      <span className="leading-relaxed text-muted-2">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {section.note && (
                <p className="mt-5 rounded-3xl bg-primary-soft px-6 py-5 leading-relaxed text-primary-deep">
                  {section.note}
                </p>
              )}
            </section>
          ))}
        </div>
      </Container>

      {children}

      {content.faq && content.faq.length > 0 && (
        <Container className="pb-6">
          <div className="max-w-3xl">
            <FadeIn>
              <FaqAccordion items={content.faq} />
            </FadeIn>
          </div>
        </Container>
      )}

      <CtaBanner title={content.ctaTitle} />
    </>
  );
}
