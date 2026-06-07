export type InquiryStatus =
  | "new"
  | "received"
  | "confirmed"
  | "rejected"
  | "responded"
  | "completed";

export const INQUIRY_STATUSES: InquiryStatus[] = [
  "new",
  "received",
  "confirmed",
  "rejected",
  "responded",
  "completed",
];

export type InquirySource = "website" | "whatsapp";

/* NOTE: these must be `type` aliases (not interfaces) — supabase-js needs
   implicit index signatures to resolve table types. */

export type AppointmentRow = {
  id: string;
  created_at: string;
  updated_at: string;
  full_name: string;
  phone: string;
  email: string | null;
  preferred_clinic: string | null;
  preferred_date: string | null;
  service: string | null;
  message: string | null;
  locale: string;
  status: InquiryStatus;
  admin_notes: string | null;
  source: InquirySource;
  wa_phone: string | null;
};

export type ContactMessageRow = {
  id: string;
  created_at: string;
  updated_at: string;
  full_name: string;
  phone: string | null;
  email: string | null;
  subject: string | null;
  message: string;
  locale: string;
  status: InquiryStatus;
  admin_notes: string | null;
  source: InquirySource;
};

export type AppointmentInsert = {
  full_name: string;
  phone: string;
  locale: string;
  email?: string | null;
  preferred_clinic?: string | null;
  preferred_date?: string | null;
  service?: string | null;
  message?: string | null;
  source?: InquirySource;
  wa_phone?: string | null;
};

export type ContactMessageInsert = {
  full_name: string;
  message: string;
  locale: string;
  email?: string | null;
  phone?: string | null;
  subject?: string | null;
  source?: InquirySource;
};

export type InquiryUpdate = {
  status?: InquiryStatus;
  admin_notes?: string | null;
};

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: AppointmentRow;
        Insert: AppointmentInsert;
        Update: InquiryUpdate;
        Relationships: [];
      };
      contact_messages: {
        Row: ContactMessageRow;
        Insert: ContactMessageInsert;
        Update: InquiryUpdate;
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: {
      inquiry_status: InquiryStatus;
      inquiry_source: InquirySource;
    };
    CompositeTypes: { [_ in never]: never };
  };
};
