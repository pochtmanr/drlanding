import type { ClinicLocation } from "./types";

/**
 * The four clinic locations, verbatim from reference/docinfo.md.
 * Do not invent opening hours or extra locations.
 */
export const clinics: ClinicLocation[] = [
  {
    id: "ganei-tal",
    name: {
      he: "מרפאת סניף גני טל",
      en: "Ganei Tal Branch Clinic",
      ru: "Клиника филиала Ганей-Таль",
    },
    address: {
      he: "השעורה 303 דירה 5",
      en: "HaSe'ora 303, Apt 5",
      ru: "ул. ха-Сеора 303, кв. 5",
    },
    city: {
      he: "בני עי\"ש",
      en: "Bnei Ayish",
      ru: "Бней-Аиш",
    },
    mapsQuery: "השעורה 303, בני עיש",
    bookingPhones: ["08-9560938", "08-8696098", "08-8696096"],
    fax: "08-8696097",
  },
  {
    id: "rehovot-east",
    name: {
      he: "מרפאת סניף רחובות מזרח",
      en: "Rehovot East Branch Clinic",
      ru: "Клиника филиала Реховот-Восток",
    },
    address: {
      he: "דרך ירושלים 15",
      en: "Derech Yerushalayim 15",
      ru: "Дерех Иерушалаим 15",
    },
    city: {
      he: "רחובות",
      en: "Rehovot",
      ru: "Реховот",
    },
    mapsQuery: "דרך ירושלים 15, רחובות",
    bookingPhones: ["3555", "08-9356260"],
    fax: "08-9356265",
  },
  {
    id: "clinica-rehovot",
    name: {
      he: "מרפאת clinica רחובות",
      en: "Clinica Rehovot",
      ru: "Клиника Clinica Реховот",
    },
    address: {
      he: "אלי הורוביץ 27",
      en: "Eli Horowitz 27",
      ru: "ул. Эли Горовиц 27",
    },
    city: {
      he: "רחובות",
      en: "Rehovot",
      ru: "Реховот",
    },
    mapsQuery: "אלי הורוביץ 27, רחובות",
    bookingPhones: [],
    clinicPhone: "08-9702314",
    fax: "08-9705857",
  },
  {
    id: "roy-clinics",
    name: {
      he: "מרפאת רוי מרפאות",
      en: "Roy Clinics",
      ru: "Клиника «Рой»",
    },
    address: {
      he: "עין הקורא 10",
      en: "Ein HaKore 10",
      ru: "ул. Эйн ха-Коре 10",
    },
    city: {
      he: "ראשון לציון",
      en: "Rishon LeZion",
      ru: "Ришон ле-Цион",
    },
    mapsQuery: "עין הקורא 10, ראשון לציון",
    bookingPhones: ["03-9567818"],
  },
];

export function getClinic(id: string): ClinicLocation | undefined {
  return clinics.find((c) => c.id === id);
}
