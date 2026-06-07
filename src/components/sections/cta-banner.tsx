import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CalendarIcon, PhoneIcon } from "@/components/ui/icons";
import { SplitText } from "@/components/motion/split-text";
import { FadeIn } from "@/components/motion/fade-in";

/**
 * Site-wide closing CTA: book an appointment or call. Used at the bottom
 * of most pages. Layered card: gray shell, gradient inner panel with the
 * booking CTAs, bottom strip with the Maccabi arrangement on the shell.
 */
export function CtaBanner({ title, subtitle }: { title?: string; subtitle?: string }) {
  const t = useTranslations("common");

  return (
    <section className="pb-10 md:pb-14">
      <Container>
        <FadeIn>
          <div className="overflow-hidden rounded-5xl border border-line bg-gray-100 shadow-card">
            {/* Inner panel */}
            <div className="relative m-2 overflow-hidden rounded-4xl bg-gradient-to-br from-primary to-primary-dark px-6 py-14 text-center text-white shadow-sm md:px-12 md:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 start-[-8%] size-80 rounded-full bg-white/10 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-32 end-[-6%] size-96 rounded-full bg-white/10 blur-3xl"
              />
              <div className="relative">
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
              </div>
            </div>

            {/* Bottom strip on the gray shell */}
            <div className="flex items-center justify-center gap-3 px-6 py-4 md:px-12">
              <Image
                src="/maccabi-logo.png"
                alt=""
                aria-hidden
                width={960}
                height={395}
                className="h-6 w-auto md:h-7"
              />
              <p className="text-[15px] font-medium text-muted">
                {t("footer.maccabi")}
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
