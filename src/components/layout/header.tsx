import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LocaleDropdown } from "./locale-switcher";
import { MobileNav } from "./mobile-nav";
import { HeaderBar } from "./header-bar";

/**
 * Floating pill header. The <header> itself is transparent and keeps a fixed
 * 72px footprint in the document flow (pt-3 + 60px bar) — the same height the
 * old solid header had — so hero/section offsets stay valid. The white pill
 * floats inside it and the mega menu overflows it over the page content.
 */
export function Header() {
  const t = useTranslations("common");

  return (
    <header className="sticky top-0 z-50 h-18">
      <Container className="pt-3">
        <HeaderBar
          phone={site.mainPhone}
          brand={
            <Link href="/" className="flex min-w-0 items-center">
              <span className="min-w-0 leading-tight">
                <span className="block truncate font-semibold xl:max-2xl:text-sm">
                  {t("doctorName")}
                </span>
                {/* The bar is tight between xl and 2xl (full nav + actions):
                    drop the subtitle there. */}
                <span className="hidden truncate text-xs text-muted sm:block xl:hidden 2xl:block">
                  {t("doctorTitle")}
                </span>
              </span>
            </Link>
          }
          actions={
            <div className="hidden items-center gap-3 xl:flex">
              <LocaleDropdown />
              <Button asChild size="sm" className="h-10 px-4 whitespace-nowrap 2xl:px-5">
                <Link href="/appointment">{t("header.bookAppointment")}</Link>
              </Button>
            </div>
          }
          mobileSlot={<MobileNav phone={site.mainPhone} />}
        />
      </Container>
    </header>
  );
}
