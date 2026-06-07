"use server";

import { revalidatePath } from "next/cache";
import { getLocale } from "next-intl/server";
import { z } from "zod";
import { redirect } from "@/i18n/navigation";
import { createClient } from "@/lib/supabase/server";
import { INQUIRY_STATUSES, type InquiryStatus } from "@/lib/supabase/types";

export type AdminActionResult =
  | { ok: true }
  | { ok: false; error: "invalid" | "auth" | "server" };

const updateSchema = z.object({
  table: z.enum(["appointments", "contact_messages"]),
  id: z.uuid(),
  patch: z
    .object({
      status: z
        .enum(INQUIRY_STATUSES as [InquiryStatus, ...InquiryStatus[]])
        .optional(),
      admin_notes: z.string().max(2000).optional(),
    })
    .refine(
      (p) => p.status !== undefined || p.admin_notes !== undefined,
      "empty patch",
    ),
});

/** Update status and/or admin notes on an inquiry row (admin only). */
export async function updateInquiry(
  table: "appointments" | "contact_messages",
  id: string,
  patch: { status?: InquiryStatus; admin_notes?: string },
): Promise<AdminActionResult> {
  const parsed = updateSchema.safeParse({ table, id, patch });
  if (!parsed.success) return { ok: false, error: "invalid" };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: "auth" };

  const { error } = await supabase
    .from(parsed.data.table)
    .update(parsed.data.patch)
    .eq("id", parsed.data.id);

  if (error) {
    console.error("updateInquiry failed:", error.message);
    return { ok: false, error: "server" };
  }

  revalidatePath("/[locale]/admin", "page");
  return { ok: true };
}

/** Sign the admin out and send them back to the login page. */
export async function signOut(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect({ href: "/admin/login", locale: await getLocale() });
}
