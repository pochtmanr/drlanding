import type { Localized } from "./types";

/**
 * Global site facts — single source of truth for verifiable details.
 * Source: reference/docinfo.md. Do NOT invent additional credentials.
 */
export const site = {
  doctorName: {
    he: "ד\"ר ויאצ'סלב דובנקו",
    en: "Dr. Vyacheslav Dubenko",
    ru: "Д-р Вячеслав Дубенко",
  } satisfies Localized,
  doctorTitle: {
    he: "מומחה לאורתופדיה ומנתח כתף וברך",
    en: "Orthopedic Specialist, Shoulder & Knee Surgeon",
    ru: "Врач-ортопед, хирург плечевого и коленного суставов",
  } satisfies Localized,
  specialty: {
    he: "מומחה באורתופדיה, כירורגיה אורתופדית",
    en: "Specialist in orthopedics and orthopedic surgery",
    ru: "Специалист по ортопедии и ортопедической хирургии",
  } satisfies Localized,
  yearsOfExperience: 37,
  healthFunds: ["Maccabi"],
  /** Primary booking phone (Ganei Tal / Bnei Ayish clinic). */
  mainPhone: "08-9560938",
  baseUrl: "https://dr-dubenko.co.il",
} as const;
