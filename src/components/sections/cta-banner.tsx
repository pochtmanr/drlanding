import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CalendarIcon, PhoneIcon } from "@/components/ui/icons";
import { SplitText } from "@/components/motion/split-text";

/**
 * Site-wide closing CTA: book an appointment or call. Used at the bottom
 * of most pages.
 */
export function CtaBanner({ title, subtitle }: { title?: string; subtitle?: string }) {
  const t = useTranslations("common");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-deep py-16 text-center text-white md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 start-[-8%] size-80 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 end-[-6%] size-96 rounded-full bg-white/10 blur-3xl"
      />
      <Container className="relative">
        <SplitText
          as="h2"
          inView
          stagger={0.07}
          duration={0.85}
          className="mx-auto max-w-3xl text-3xl font-semibold text-balance md:text-4xl"
        >
          {title ?? t("forms.appointment.title")}
        </SplitText>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            {subtitle}
          </p>
        )}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="white" size="lg">
            <Link href="/appointment">
              <CalendarIcon className="size-5 shrink-0" />
              {t("header.bookAppointment")}
            </Link>
          </Button>
          <a
            href={`tel:${site.mainPhone}`}
            className="inline-flex items-center gap-2 text-lg font-semibold text-white underline-offset-4 hover:underline"
            aria-label={t("header.phoneLabel")}
          >
            <PhoneIcon className="size-5 shrink-0" />
            <span dir="ltr">{site.mainPhone}</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
