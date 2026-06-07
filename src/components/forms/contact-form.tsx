"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { createContactMessage } from "@/lib/actions/inquiries";
import type { Locale } from "@/content/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/ui/form-field";

/** Public contact form. Submits via the createContactMessage server action. */
export function ContactForm() {
  const t = useTranslations("common.forms.contact");
  const tv = useTranslations("common.forms.validation");
  const locale = useLocale() as Locale;

  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<"idle" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<{
    fullName?: string;
    message?: string;
  }>({});

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("locale", locale);

    const errors: typeof fieldErrors = {};
    if ((formData.get("fullName") as string).trim().length < 2) {
      errors.fullName = tv("nameRequired");
    }
    if ((formData.get("message") as string).trim().length < 2) {
      errors.message = tv("messageRequired");
    }
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    startTransition(async () => {
      const res = await createContactMessage(formData);
      setResult(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    });
  }

  if (result === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Card tinted className="text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-full bg-success/10 text-success">
            <svg viewBox="0 0 24 24" className="size-7" aria-hidden>
              <path
                d="M5 13l4 4L19 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="mt-4 text-xl font-semibold">{t("success")}</h3>
          <p className="mt-2 text-muted-2">{t("successDetails")}</p>
        </Card>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label={t("fullName")}
          htmlFor="ct-fullName"
          required
          error={fieldErrors.fullName}
        >
          <Input id="ct-fullName" name="fullName" autoComplete="name" required />
        </FormField>
        <FormField label={t("phone")} htmlFor="ct-phone">
          <Input id="ct-phone" name="phone" type="tel" dir="ltr" autoComplete="tel" />
        </FormField>
        <FormField label={t("email")} htmlFor="ct-email">
          <Input id="ct-email" name="email" type="email" dir="ltr" autoComplete="email" />
        </FormField>
        <FormField label={t("subject")} htmlFor="ct-subject">
          <Input id="ct-subject" name="subject" maxLength={200} />
        </FormField>
      </div>

      <FormField
        label={t("message")}
        htmlFor="ct-message"
        required
        error={fieldErrors.message}
      >
        <Textarea id="ct-message" name="message" maxLength={4000} required />
      </FormField>

      {result === "error" && (
        <p role="alert" className="rounded-2xl bg-danger/10 px-4 py-3 text-danger">
          {t("error")}
        </p>
      )}

      <Button type="submit" size="lg" disabled={pending} className="w-full md:w-auto">
        {pending ? t("submitting") : t("submit")}
      </Button>
    </form>
  );
}
