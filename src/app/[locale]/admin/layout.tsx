import { getTranslations, setRequestLocale } from "next-intl/server";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { signOut } from "@/lib/actions/admin";
import { createClient } from "@/lib/supabase/server";

/**
 * Minimal admin chrome: top bar with site name, locale switcher and
 * sign-out. Lives outside (public), so no site Header/Footer/CookieBanner.
 */
export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("admin.shell");

  // Only show sign-out when there is a session (hidden on the login page).
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-line bg-white">
        <Container className="flex min-h-16 flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-ink">{t("siteName")}</span>
            <Badge tone="soft">{t("adminBadge")}</Badge>
          </div>
          <div className="flex items-center gap-3">
            <LocaleSwitcher />
            {user && (
              <form action={signOut}>
                <Button type="submit" variant="ghost" size="sm">
                  {t("signOut")}
                </Button>
              </form>
            )}
          </div>
        </Container>
      </header>
      <main className="flex-1 py-10">
        <Container>{children}</Container>
      </main>
    </div>
  );
}
