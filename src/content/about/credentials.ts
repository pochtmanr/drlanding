import type { Locale, ServicePageContent } from "@/content/types";

/**
 * /about/credentials — official documents authorizing Dr. Dubenko to
 * practice medicine in Israel. Facts taken directly from the scanned
 * documents in public/credentials/ (national ID redacted before
 * publishing): medical license No. 35902 (MoH, 24.3.2004), specialist
 * certificate in orthopedic surgery No. 1-27726 (MoH, 2009), recognition
 * of the foreign medical degree (MoE, certificate No. 627927, 18.12.2000)
 * and recognition of professional seniority since 21.6.1990 (MoH).
 */

export interface CredentialDoc {
  /** Shared image path under public/ (same scan for all locales). */
  src: string;
  alt: string;
  title: string;
  description: string;
  /** Intrinsic image size for layout stability. */
  width: number;
  height: number;
}

export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "רישיונות ותעודות",
    subtitle: "המסמכים הרשמיים המסמיכים את ד\"ר דובנקו לעסוק ברפואה בישראל",
    intro:
      "אמון מתחיל בשקיפות. בעמוד זה מרוכזים המסמכים הרשמיים — רישיון משרד הבריאות, תעודת מומחה ואישורי הכרה — המסמיכים את ד\"ר ויאצ'סלב דובנקו לעסוק ברפואה ובכירורגיה אורתופדית בישראל.",
    sections: [
      {
        heading: "מה כוללים המסמכים",
        paragraphs: [
          "הרישיון לעסוק ברפואה ותעודת המומחה הם המסמכים המעניקים לרופא בישראל את הסמכות החוקית לאבחן, לטפל ולנתח. שניהם מונפקים על ידי משרד הבריאות לאחר עמידה בכל דרישות ההכשרה וההתמחות.",
          "לצדם מוצגים אישור ההכרה בתואר הרפואה מטעם משרד החינוך והודעת משרד הבריאות בדבר חישוב הוותק במקצוע — המתעדת עיסוק רציף ברפואה מאז יוני 1990.",
        ],
        note: "להגנת הפרטיות, מספר תעודת הזהות הוסתר בעותקים המוצגים באתר. המסמכים המקוריים זמינים לעיון במרפאה לפי בקשה.",
      },
    ],
  },

  en: {
    title: "Licenses & Certificates",
    subtitle: "The official documents authorizing Dr. Dubenko to practice medicine in Israel",
    intro:
      "Trust begins with transparency. This page brings together the official documents — the Ministry of Health license, the specialist certificate and the recognition approvals — that authorize Dr. Vyacheslav Dubenko to practice medicine and orthopedic surgery in Israel.",
    sections: [
      {
        heading: "What the documents include",
        paragraphs: [
          "The license to practice medicine and the specialist certificate are the documents that give a physician in Israel the legal authority to diagnose, treat and operate. Both are issued by the Ministry of Health once all training and residency requirements have been met.",
          "Alongside them are the Ministry of Education's recognition of the medical degree and the Ministry of Health's notice on professional seniority — documenting continuous medical practice since June 1990.",
        ],
        note: "To protect privacy, the national ID number has been redacted in the copies displayed on this site. The original documents are available for inspection at the clinic upon request.",
      },
    ],
  },

  ru: {
    title: "Лицензии и сертификаты",
    subtitle: "Официальные документы, дающие д-ру Дубенко право заниматься медициной в Израиле",
    intro:
      "Доверие начинается с прозрачности. На этой странице собраны официальные документы — лицензия Министерства здравоохранения, сертификат специалиста и подтверждения признания, — дающие д-ру Вячеславу Дубенко право заниматься медициной и ортопедической хирургией в Израиле.",
    sections: [
      {
        heading: "Что включают документы",
        paragraphs: [
          "Лицензия на занятие медициной и сертификат специалиста — документы, дающие врачу в Израиле законное право диагностировать, лечить и оперировать. Оба выдаются Министерством здравоохранения после выполнения всех требований к подготовке и специализации.",
          "Рядом с ними представлены признание медицинского диплома Министерством просвещения и уведомление Министерства здравоохранения о расчёте профессионального стажа — подтверждающее непрерывную врачебную практику с июня 1990 года.",
        ],
        note: "В целях защиты персональных данных номер удостоверения личности скрыт в копиях, размещённых на сайте. Оригиналы документов можно увидеть в клинике по запросу.",
      },
    ],
  },
};

/** The four scans, shown in the order patients care about most. */
export const documents: Record<Locale, CredentialDoc[]> = {
  he: [
    {
      src: "/credentials/medical-license.avif",
      width: 1275,
      height: 1615,
      title: "רישיון לעסוק ברפואה",
      description:
        "רישיון מס' 35902 מטעם משרד הבריאות, מכוח סעיף 18 לפקודת הרופאים [נוסח חדש], התשל\"ז–1976.",
      alt: "סריקה של רישיון לעסוק ברפואה מס' 35902 מטעם משרד הבריאות",
    },
    {
      src: "/credentials/specialist-certificate.avif",
      width: 1275,
      height: 1044,
      title: "אישור תואר מומחה בכירורגיה אורתופדית",
      description:
        "אישור משרד הבריאות לפי תעודת מומחה מס' 1-27726, המכיר בד\"ר דובנקו כרופא מומחה בכירורגיה אורתופדית.",
      alt: "סריקה של אישור תואר מומחה בכירורגיה אורתופדית מס' 1-27726",
    },
    {
      src: "/credentials/degree-recognition.avif",
      width: 1153,
      height: 1650,
      title: "הכרה בתואר אקדמי ברפואה",
      description:
        "אישור מס' 627927 מטעם משרד החינוך, התרבות והספורט — הוועדה להערכת תארים ודיפלומות אקדמיים מחו\"ל — המכיר בתואר הרפואה (1989).",
      alt: "סריקה של אישור משרד החינוך על הכרה בתואר אקדמי ברפואה",
    },
    {
      src: "/credentials/seniority-recognition.avif",
      width: 1275,
      height: 1583,
      title: "הכרה בוותק במקצוע הרפואה",
      description:
        "הודעה רשמית של משרד הבריאות לצורך חישוב ותק במקצוע הרפואה, המכירה בעיסוק רציף ברפואה החל מ־21.6.1990.",
      alt: "סריקה של הודעת משרד הבריאות על חישוב ותק במקצוע הרפואה",
    },
  ],

  en: [
    {
      src: "/credentials/medical-license.avif",
      width: 1275,
      height: 1615,
      title: "License to Practice Medicine",
      description:
        "License No. 35902 issued by the Ministry of Health under section 18 of the Physicians Ordinance [New Version], 1976.",
      alt: "Scan of the Ministry of Health license to practice medicine No. 35902",
    },
    {
      src: "/credentials/specialist-certificate.avif",
      width: 1275,
      height: 1044,
      title: "Specialist Certificate in Orthopedic Surgery",
      description:
        "Ministry of Health approval per specialist certificate No. 1-27726, recognizing Dr. Dubenko as a specialist in orthopedic surgery.",
      alt: "Scan of the specialist certificate in orthopedic surgery No. 1-27726",
    },
    {
      src: "/credentials/degree-recognition.avif",
      width: 1153,
      height: 1650,
      title: "Recognition of the Academic Degree in Medicine",
      description:
        "Certificate No. 627927 from the Ministry of Education, Culture and Sport — the committee for evaluating foreign academic degrees — recognizing the medical degree (1989).",
      alt: "Scan of the Ministry of Education recognition of the academic degree in medicine",
    },
    {
      src: "/credentials/seniority-recognition.avif",
      width: 1275,
      height: 1583,
      title: "Recognition of Professional Seniority",
      description:
        "Official Ministry of Health notice for calculating professional seniority, recognizing continuous medical practice since 21.6.1990.",
      alt: "Scan of the Ministry of Health notice on professional seniority in medicine",
    },
  ],

  ru: [
    {
      src: "/credentials/medical-license.avif",
      width: 1275,
      height: 1615,
      title: "Лицензия на занятие медициной",
      description:
        "Лицензия № 35902, выданная Министерством здравоохранения на основании статьи 18 Указа о врачах [новая редакция], 1976 г.",
      alt: "Скан лицензии Министерства здравоохранения на занятие медициной № 35902",
    },
    {
      src: "/credentials/specialist-certificate.avif",
      width: 1275,
      height: 1044,
      title: "Сертификат специалиста по ортопедической хирургии",
      description:
        "Подтверждение Министерства здравоохранения по сертификату специалиста № 1-27726, признающее д-ра Дубенко врачом-специалистом по ортопедической хирургии.",
      alt: "Скан сертификата специалиста по ортопедической хирургии № 1-27726",
    },
    {
      src: "/credentials/degree-recognition.avif",
      width: 1153,
      height: 1650,
      title: "Признание академической степени по медицине",
      description:
        "Подтверждение № 627927 Министерства просвещения, культуры и спорта — комиссии по оценке зарубежных академических степеней — о признании медицинского диплома (1989 г.).",
      alt: "Скан подтверждения Министерства просвещения о признании медицинского диплома",
    },
    {
      src: "/credentials/seniority-recognition.avif",
      width: 1275,
      height: 1583,
      title: "Признание профессионального стажа",
      description:
        "Официальное уведомление Министерства здравоохранения о расчёте стажа, признающее непрерывную врачебную практику с 21.6.1990.",
      alt: "Скан уведомления Министерства здравоохранения о профессиональном стаже",
    },
  ],
};
