"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

/**
 * Public inquiry server actions. Anonymous visitors hit the anon-key RLS
 * policies, which allow INSERT only. Forms include a honeypot field
 * ("website") that must stay empty — bots that fill it get a silent fake
 * success.
 */

export type ActionResult = { ok: true } | { ok: false; error: "invalid" | "server" };

const localeSchema = z.enum(["he", "en", "ru"]).catch("he");

const appointmentSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(25)
    .regex(/^[\d+\-() *#]+$/),
  email: z.union([z.literal(""), z.string().trim().email().max(254)]),
  clinic: z.string().trim().max(60).optional().default(""),
  date: z.union([z.literal(""), z.string().regex(/^\d{4}-\d{2}-\d{2}$/)]),
  service: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
  locale: localeSchema,
  website: z.string().optional().default(""), // honeypot
});

export async function createAppointment(
  formData: FormData,
): Promise<ActionResult> {
  const parsed = appointmentSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );
  if (!parsed.success) return { ok: false, error: "invalid" };

  // Honeypot tripped — pretend success, store nothing.
  if (parsed.data.website !== "") return { ok: true };

  const d = parsed.data;
  const supabase = await createClient();
  const { error } = await supabase.from("appointments").insert({
    full_name: d.fullName,
    phone: d.phone,
    email: d.email || null,
    preferred_clinic: d.clinic || null,
    preferred_date: d.date || null,
    service: d.service || null,
    message: d.message || null,
    locale: d.locale,
  });

  if (error) {
    console.error("createAppointment failed:", error.message);
    return { ok: false, error: "server" };
  }
  return { ok: true };
}

const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  phone: z.union([
    z.literal(""),
    z
      .string()
      .trim()
      .min(7)
      .max(25)
      .regex(/^[\d+\-() *#]+$/),
  ]),
  email: z.union([z.literal(""), z.string().trim().email().max(254)]),
  subject: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(2).max(4000),
  locale: localeSchema,
  website: z.string().optional().default(""), // honeypot
});

export async function createContactMessage(
  formData: FormData,
): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );
  if (!parsed.success) return { ok: false, error: "invalid" };

  if (parsed.data.website !== "") return { ok: true };

  const d = parsed.data;
  const supabase = await createClient();
  const { error } = await supabase.from("contact_messages").insert({
    full_name: d.fullName,
    phone: d.phone || null,
    email: d.email || null,
    subject: d.subject || null,
    message: d.message,
    locale: d.locale,
  });

  if (error) {
    console.error("createContactMessage failed:", error.message);
    return { ok: false, error: "server" };
  }
  return { ok: true };
}
