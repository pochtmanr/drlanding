"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { createAppointment } from "@/lib/actions/inquiries";
import { clinics } from "@/content/clinics";
import type { Locale } from "@/content/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/ui/form-field";

const SERVICE_OPTIONS = [
  { value: "shoulder-elbow", labelKey: "servicesMenu.shoulderElbow" },
  { value: "knee", labelKey: "servicesMenu.knee" },
  { value: "ankle-foot", labelKey: "servicesMenu.ankleFoot" },
  { value: "joint-injections", labelKey: "servicesMenu.jointInjections" },
  { value: "arthroscopic-surgery", labelKey: "servicesMenu.arthroscopy" },
];

/**
 * Public appointment-request form. Submits via the createAppointment
 * server action (anon insert under RLS). Reused on the home page and the
 * /appointment page.
 */
export function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const tc = useTranslations("common");
  const t = useTranslations("common.forms.appointment");
  const tv = useTranslations("common.forms.validation");
  const locale = useLocale() as Locale;

  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<"idle" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<{
    fullName?: string;
    phone?: string;
  }>({});

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("locale", locale);

    // Light client-side validation for friendly inline errors.
    const errors: typeof fieldErrors = {};
    if ((formData.get("fullName") as string).trim().length < 2) {
      errors.fullName = tv("nameRequired");
    }
    if ((formData.get("phone") as string).trim().length < 7) {
      errors.phone = tv("phoneRequired");
    }
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    startTransition(async () => {
      const res = await createAppointment(formData);
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
      {/* Honeypot — invisible to humans */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className={compact ? "space-y-5" : "grid gap-5 md:grid-cols-2"}>
        <FormField
          label={t("fullName")}
          htmlFor="ap-fullName"
          required
          error={fieldErrors.fullName}
        >
          <Input
            id="ap-fullName"
            name="fullName"
            autoComplete="name"
            required
          />
        </FormField>
        <FormField
          label={t("phone")}
          htmlFor="ap-phone"
          required
          error={fieldErrors.phone}
        >
          <Input
            id="ap-phone"
            name="phone"
            type="tel"
            dir="ltr"
            autoComplete="tel"
            required
          />
        </FormField>
        <FormField label={t("email")} htmlFor="ap-email">
          <Input id="ap-email" name="email" type="email" dir="ltr" autoComplete="email" />
        </FormField>
        <FormField label={t("date")} htmlFor="ap-date">
          <Input id="ap-date" name="date" type="date" />
        </FormField>
        <FormField label={t("clinic")} htmlFor="ap-clinic">
          <Select id="ap-clinic" name="clinic" defaultValue="">
            <option value="">{t("clinicPlaceholder")}</option>
            {clinics.map((clinic) => (
              <option key={clinic.id} value={clinic.id}>
                {clinic.name[locale]} — {clinic.city[locale]}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label={t("service")} htmlFor="ap-service">
          <Select id="ap-service" name="service" defaultValue="">
            <option value="">{t("servicePlaceholder")}</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {tc(option.labelKey)}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <FormField label={t("message")} htmlFor="ap-message">
        <Textarea
          id="ap-message"
          name="message"
          placeholder={t("messagePlaceholder")}
          maxLength={2000}
        />
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
