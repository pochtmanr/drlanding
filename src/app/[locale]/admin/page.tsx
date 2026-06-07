import { getTranslations, setRequestLocale } from "next-intl/server";
import { InquiryCard } from "@/components/admin/inquiry-card";
import { Card } from "@/components/ui/card";
import { Link, redirect } from "@/i18n/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  INQUIRY_STATUSES,
  type AppointmentRow,
  type ContactMessageRow,
  type InquiryStatus,
} from "@/lib/supabase/types";
import { cn } from "@/lib/utils";

type Tab = "appointments" | "messages";

type StatusCounts = Record<InquiryStatus, number>;

function countByStatus(rows: { status: InquiryStatus }[] | null): StatusCounts {
  const counts = Object.fromEntries(
    INQUIRY_STATUSES.map((s) => [s, 0]),
  ) as StatusCounts;
  for (const row of rows ?? []) counts[row.status] += 1;
  return counts;
}

function pillClasses(active: boolean) {
  return cn(
    "inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200",
    active
      ? "border-primary bg-primary text-white"
      : "border-line text-muted hover:border-primary hover:text-primary",
  );
}

function CountChip({ active, count }: { active: boolean; count: number }) {
  return (
    <span className={cn("text-xs", active ? "text-white/80" : "text-muted")}>
      {count}
    </span>
  );
}

/** Admin dashboard — inquiry lists with tab + status-filter navigation. */
export default async function AdminDashboardPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tab?: string; status?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const sp = await searchParams;

  const tab: Tab = sp.tab === "messages" ? "messages" : "appointments";
  const status = INQUIRY_STATUSES.includes(sp.status as InquiryStatus)
    ? (sp.status as InquiryStatus)
    : undefined;

  const supabase = await createClient();

  // Defensive check — the proxy already gates /admin, this is a backstop.
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect({ href: "/admin/login", locale });
  }

  // Active tab rows + unfiltered status columns for count summaries.
  const rowsQuery =
    tab === "appointments"
      ? supabase
          .from("appointments")
          .select("*")
          .order("created_at", { ascending: false })
      : supabase
          .from("contact_messages")
          .select("*")
          .order("created_at", { ascending: false });

  const [
    { data: activeRows, error: rowsError },
    { data: appointmentStatuses },
    { data: messageStatuses },
  ] = await Promise.all([
    status ? rowsQuery.eq("status", status) : rowsQuery,
    supabase.from("appointments").select("status"),
    supabase.from("contact_messages").select("status"),
  ]);
  if (rowsError) {
    console.error("admin inquiries fetch failed:", rowsError.message);
  }

  const rows: AppointmentRow[] | ContactMessageRow[] = activeRows ?? [];
  const counts = countByStatus(
    tab === "appointments" ? appointmentStatuses : messageStatuses,
  );
  const totals: Record<Tab, number> = {
    appointments: appointmentStatuses?.length ?? 0,
    messages: messageStatuses?.length ?? 0,
  };

  const t = await getTranslations("admin.dashboard");
  const tStatus = await getTranslations("admin.status");

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h1 className="text-3xl font-semibold text-ink">{t("title")}</h1>
        <p className="text-muted">{t("count", { count: rows.length })}</p>
      </div>

      {/* Tabs */}
      <nav className="flex flex-wrap gap-2">
        {(["appointments", "messages"] as const).map((tabKey) => (
          <Link
            key={tabKey}
            href={{ pathname: "/admin", query: { tab: tabKey } }}
            className={pillClasses(tab === tabKey)}
          >
            {t(`tabs.${tabKey}`)}
            <CountChip active={tab === tabKey} count={totals[tabKey]} />
          </Link>
        ))}
      </nav>

      {/* Status filter pills */}
      <div className="flex flex-wrap gap-2">
        <Link
          href={{ pathname: "/admin", query: { tab } }}
          className={pillClasses(!status)}
        >
          {t("filterAll")}
          <CountChip active={!status} count={totals[tab]} />
        </Link>
        {INQUIRY_STATUSES.map((s) => (
          <Link
            key={s}
            href={{ pathname: "/admin", query: { tab, status: s } }}
            className={pillClasses(status === s)}
          >
            {tStatus(s)}
            <CountChip active={status === s} count={counts[s]} />
          </Link>
        ))}
      </div>

      {/* Inquiry list */}
      {rows.length === 0 ? (
        <Card tinted className="text-center text-muted-2">
          {tab === "appointments"
            ? t("emptyAppointments")
            : t("emptyMessages")}
        </Card>
      ) : (
        <div className="space-y-5">
          {tab === "appointments"
            ? (rows as AppointmentRow[]).map((row) => (
                <InquiryCard key={row.id} table="appointments" row={row} />
              ))
            : (rows as ContactMessageRow[]).map((row) => (
                <InquiryCard key={row.id} table="contact_messages" row={row} />
              ))}
        </div>
      )}
    </div>
  );
}
