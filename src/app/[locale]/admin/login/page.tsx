"use client";

import { useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";

/** Admin login — signs in via the browser Supabase client. */
export default function AdminLoginPage() {
  const t = useTranslations("admin.login");
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [failed, setFailed] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = ((formData.get("email") as string) ?? "").trim();
    const password = (formData.get("password") as string) ?? "";

    setFailed(false);
    startTransition(async () => {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        // Generic message — never reveal whether the email exists.
        setFailed(true);
        return;
      }
      router.push("/admin");
      router.refresh();
    });
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-ink">{t("title")}</h1>
        <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
          <FormField label={t("email")} htmlFor="admin-email" required>
            <Input
              id="admin-email"
              name="email"
              type="email"
              dir="ltr"
              autoComplete="email"
              required
            />
          </FormField>
          <FormField label={t("password")} htmlFor="admin-password" required>
            <Input
              id="admin-password"
              name="password"
              type="password"
              dir="ltr"
              autoComplete="current-password"
              required
            />
          </FormField>
          {failed && (
            <p
              role="alert"
              className="rounded-2xl bg-danger/10 px-4 py-3 text-sm text-danger"
            >
              {t("error")}
            </p>
          )}
          <Button type="submit" disabled={pending} className="w-full">
            {pending ? t("submitting") : t("submit")}
          </Button>
        </form>
      </Card>
    </div>
  );
}
