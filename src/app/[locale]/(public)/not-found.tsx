import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const t = useTranslations("common.notFound");

  return (
    <Container className="flex flex-col items-center py-32 text-center">
      <p className="text-7xl font-semibold text-primary">404</p>
      <h1 className="mt-6 text-3xl font-semibold">{t("title")}</h1>
      <p className="mt-3 max-w-md text-muted">{t("description")}</p>
      <Button asChild className="mt-8">
        <Link href="/">{t("backHome")}</Link>
      </Button>
    </Container>
  );
}
