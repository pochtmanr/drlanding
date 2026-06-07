"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getClinic } from "@/content/clinics";
import type { Locale } from "@/content/types";
import { updateInquiry } from "@/lib/actions/admin";
import {
  INQUIRY_STATUSES,
  type AppointmentRow,
  type ContactMessageRow,
  type InquiryStatus,
} from "@/lib/supabase/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const STATUS_TONES: Record<
  InquiryStatus,
  "primary" | "soft" | "success" | "danger" | "warning" | "neutral"
> = {
  new: "primary",
  received: "soft",
  confirmed: "success",
  rejected: "danger",
  responded: "warning",
  completed: "neutral",
};

// DB service slugs → common.servicesMenu label keys (see AppointmentForm).
const SERVICE_LABEL_KEYS: Record<string, string> = {
  "shoulder-elbow": "servicesMenu.shoulderElbow",
  knee: "servicesMenu.knee",
  "ankle-foot": "servicesMenu.ankleFoot",
  "joint-injections": "servicesMenu.jointInjections",
  "arthroscopic-surgery": "servicesMenu.arthroscopy",
};

type InquiryCardProps =
  | { table: "appointments"; row: AppointmentRow }
  | { table: "contact_messages"; row: ContactMessageRow };

function Detail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="text-ink">{children}</dd>
    </div>
  );
}

/** One inquiry (appointment request or contact message) with admin controls. */
export function InquiryCard({ table, row }: InquiryCardProps) {
  const t = useTranslations("admin");
  const tc = useTranslations("common");
  const locale = useLocale() as Locale;

  const [status, setStatus] = useState<InquiryStatus>(row.status);
  const [notesOpen, setNotesOpen] = useState(Boolean(row.admin_notes));
  const [feedback, setFeedback] = useState<"idle" | "saved" | "error">("idle");
  const [pending, startTransition] = useTransition();
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    };
  }, []);

  function flash(result: "saved" | "error") {
    setFeedback(result);
    if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    feedbackTimer.current = setTimeout(() => setFeedback("idle"), 2500);
  }

  function onStatusChange(next: InquiryStatus) {
    const previous = status;
    setStatus(next); // optimistic
    startTransition(async () => {
      const res = await updateInquiry(table, row.id, { status: next });
      if (!res.ok) setStatus(previous);
      flash(res.ok ? "saved" : "error");
    });
  }

  function onNotesSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const notes = (new FormData(event.currentTarget).get("notes") as string) ?? "";
    startTransition(async () => {
      const res = await updateInquiry(table, row.id, { admin_notes: notes });
      flash(res.ok ? "saved" : "error");
    });
  }

  const createdAt = new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(row.created_at));

  const clinic =
    table === "appointments" && row.preferred_clinic
      ? (getClinic(row.preferred_clinic)?.name[locale] ?? row.preferred_clinic)
      : null;
  const preferredDate =
    table === "appointments" && row.preferred_date
      ? new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(
          new Date(`${row.preferred_date}T00:00:00`),
        )
      : null;
  const serviceKey =
    table === "appointments" && row.service
      ? SERVICE_LABEL_KEYS[row.service]
      : undefined;
  const service =
    table === "appointments" && row.service
      ? serviceKey
        ? tc(serviceKey)
        : row.service
      : null;

  return (
    <Card className="p-6 md:p-8">
      {/* Header: name + badges + created date */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-lg font-semibold text-ink">{row.full_name}</h2>
          <Badge tone={STATUS_TONES[status]}>{t(`status.${status}`)}</Badge>
          <Badge tone="neutral" aria-label={t("card.language")}>
            {row.locale.toUpperCase()}
          </Badge>
        </div>
        <p className="text-sm text-muted">
          {t("card.created")}: {createdAt}
        </p>
      </div>

      {/* Details */}
      <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {row.phone && (
          <Detail label={t("card.phone")}>
            <a
              href={`tel:${row.phone}`}
              dir="ltr"
              className="text-primary hover:underline"
            >
              {row.phone}
            </a>
          </Detail>
        )}
        {row.email && (
          <Detail label={t("card.email")}>
            <a
              href={`mailto:${row.email}`}
              dir="ltr"
              className="text-primary hover:underline"
            >
              {row.email}
            </a>
          </Detail>
        )}
        {clinic && <Detail label={t("card.clinic")}>{clinic}</Detail>}
        {preferredDate && (
          <Detail label={t("card.date")}>{preferredDate}</Detail>
        )}
        {service && <Detail label={t("card.service")}>{service}</Detail>}
        {table === "contact_messages" && row.subject && (
          <Detail label={t("card.subject")}>{row.subject}</Detail>
        )}
      </dl>

      {row.message && (
        <div className="mt-5">
          <p className="text-sm text-muted">{t("card.message")}</p>
          <p className="mt-1 whitespace-pre-wrap text-ink">{row.message}</p>
        </div>
      )}

      {/* Controls: status select + notes toggle + feedback */}
      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-5">
        <label className="flex items-center gap-2 text-sm text-muted">
          {t("card.statusLabel")}
          <Select
            value={status}
            disabled={pending}
            onChange={(e) => onStatusChange(e.target.value as InquiryStatus)}
            className="w-auto py-2 ps-4 pe-9 text-sm"
          >
            {INQUIRY_STATUSES.map((s) => (
              <option key={s} value={s}>
                {t(`status.${s}`)}
              </option>
            ))}
          </Select>
        </label>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setNotesOpen((open) => !open)}
        >
          {t("card.showNotes")}
        </Button>
        <span aria-live="polite" className="text-sm">
          {pending && <span className="text-muted">{t("card.saving")}</span>}
          {!pending && feedback === "saved" && (
            <span className="text-success">{t("card.saved")}</span>
          )}
          {!pending && feedback === "error" && (
            <span className="text-danger">{t("card.error")}</span>
          )}
        </span>
      </div>

      {/* Expandable admin notes */}
      {notesOpen && (
        <form onSubmit={onNotesSubmit} className="mt-4 space-y-3">
          <label
            htmlFor={`notes-${row.id}`}
            className="text-sm font-medium text-ink"
          >
            {t("card.notes")}
          </label>
          <Textarea
            id={`notes-${row.id}`}
            name="notes"
            defaultValue={row.admin_notes ?? ""}
            placeholder={t("card.notesPlaceholder")}
            maxLength={2000}
            disabled={pending}
          />
          <Button type="submit" variant="outline" size="sm" disabled={pending}>
            {pending ? t("card.saving") : t("card.save")}
          </Button>
        </form>
      )}
    </Card>
  );
}
