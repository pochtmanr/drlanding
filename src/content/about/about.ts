import type { Locale, ServicePageContent } from "@/content/types";

/**
 * /about — doctor profile. Facts only: 37 years of experience, Maccabi,
 * shoulder & knee surgical specialty, 4 clinics (2× Rehovot, Bnei Ayish,
 * Rishon LeZion). No invented credentials — see reference/docinfo.md.
 */
export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "אודות ד\"ר ויאצ'סלב דובנקו",
    subtitle: "מומחה לאורתופדיה ומנתח כתף וברך · 37 שנות ניסיון",
    intro:
      "ד\"ר ויאצ'סלב דובנקו הוא רופא מומחה לאורתופדיה ולכירורגיה אורתופדית, המלווה מטופלים כבר 37 שנים — מהאבחון הראשון, דרך הטיפול השמרני או הניתוחי, ועד לחזרה מלאה לתפקוד. תחום העיסוק הניתוחי המרכזי שלו הוא הכתף והברך.",
    sections: [
      {
        heading: "פרופיל מקצועי",
        paragraphs: [
          "ד\"ר דובנקו הוא מומחה באורתופדיה ובכירורגיה אורתופדית עם ותק של 37 שנים באבחון ובטיפול בבעיות של מערכת השלד והתנועה. ההתמחות הניתוחית שלו ממוקדת בכתף ובברך — שני המפרקים שבהם מתרכזות רבות מהפציעות הנפוצות, הן אצל ספורטאים והן בחיי היומיום.",
          "הוא מקבל מטופלים במסגרת הסדר עם קופת חולים מכבי בארבע מרפאות: שתי מרפאות ברחובות, מרפאה בבני עי\"ש ומרפאה בראשון לציון. הביקורים מתקיימים בתיאום מראש, ופרטי הקשר של כל המרפאות מופיעים בעמוד יצירת הקשר.",
          "הייעוץ מתקיים בעברית וברוסית, ומטופלים דוברי אנגלית מוזמנים גם הם — חשוב לד\"ר דובנקו שכל מטופל יבין את מצבו ואת אפשרויות הטיפול בשפה הנוחה לו.",
        ],
      },
      {
        heading: "הגישה הטיפולית",
        paragraphs: [
          "כל מסלול טיפול מתחיל באבחון יסודי: שיחה מעמיקה על אופי התלונה ונסיבות הפציעה, בדיקה גופנית מקיפה ועיון בהדמיות ובמסמכים הרפואיים. אבחנה מדויקת היא הבסיס לכל החלטה טיפולית נכונה.",
          "ככלל, ד\"ר דובנקו מעדיף למצות תחילה את האפשרויות השמרניות — פיזיותרפיה, הזרקות למפרק והתאמת הפעילות — לפני שפונים לפתרון ניתוחי. ניתוח מוצע רק כאשר הוא באמת הצעד הנכון עבור המטופל.",
          "כאשר ניתוח נדרש, ההעדפה היא לטכניקות ארתרוסקופיות זעיר־פולשניות: חתכים קטנים, פגיעה מינימלית ברקמות והחלמה מהירה יותר. בכל שלב בדרך המטופל מקבל הסבר ברור וכן על האבחנה, על החלופות ועל הצפי — כדי שיוכל לקבל החלטה מושכלת.",
        ],
      },
      {
        heading: "עבודה משותפת עם הצוות המטפל",
        paragraphs: [
          "טיפול אורתופדי מוצלח אינו מסתיים בחדר הטיפולים או בחדר הניתוח. ד\"ר דובנקו עובד בשיתוף פעולה הדוק עם פיזיותרפיסטים ועם אנשי מקצוע בתחום השיקום, כדי שכל שלב — מהאבחון ועד החזרה לפעילות — יהיה חלק ממהלך טיפולי אחד ורציף.",
          "לכל מטופל נבנית תוכנית החלמה אישית, המותאמת לאופי הפציעה, לגיל, לרמת הפעילות ולמטרות האישיות. ההתקדמות מלווה במעקב רפואי שוטף, וההנחיות מתעדכנות בהתאם לקצב ההחלמה בפועל.",
          "המעקב נמשך עד לחזרה לתפקוד מלא — בין שמדובר בחזרה לספורט, לעבודה פיזית או פשוט לשגרת חיים ללא כאב.",
        ],
      },
      {
        heading: "מה מצפה לכם בביקור הראשון",
        paragraphs: [
          "לקראת הביקור כדאי להביא הפניה (אם נדרשת), הדמיות קודמות — צילומי רנטגן, אולטרסאונד, CT או MRI — וכן סיכומים רפואיים רלוונטיים. כל מסמך כזה עוזר לקבל תמונה מלאה ומדויקת יותר.",
          "הביקור עצמו כולל שיחה על ההיסטוריה הרפואית ועל נסיבות הבעיה, ולאחריה בדיקה גופנית ממוקדת של המפרק והאזור הכואב.",
          "בסיום תקבלו הסבר כן וברור על האבחנה ועל אפשרויות הטיפול — כולל האפשרויות שאינן ניתוחיות — ותחליטו יחד עם ד\"ר דובנקו על הצעד הבא.",
        ],
      },
    ],
    faq: [
      {
        question: "האם צריך הפניה כדי לקבוע תור?",
        answer:
          "במסגרת קופת חולים מכבי ייתכן שתידרש הפניה, בהתאם לנהלי הקופה ולסוג הביקור. מומלץ לבדוק מול מכבי לפני קביעת התור. בכל שאלה אפשר לפנות טלפונית למרפאה.",
      },
      {
        question: "עם אילו קופות חולים יש הסדר?",
        answer:
          "ד\"ר דובנקו מקבל מטופלים במסגרת הסדר עם קופת חולים מכבי, בארבע מרפאות ברחובות, בבני עי\"ש ובראשון לציון.",
      },
      {
        question: "באילו מפרקים מטפל ד\"ר דובנקו?",
        answer:
          "תחום ההתמחות הניתוחי המרכזי הוא הכתף והברך. בנוסף, ד\"ר דובנקו מטפל בפציעות מרפק, קרסול וכף רגל, ומבצע הזרקות למפרקים כחלופה או כהשלמה לניתוח.",
      },
    ],
  },

  en: {
    title: "About Dr. Vyacheslav Dubenko",
    subtitle: "Orthopedic Specialist, Shoulder & Knee Surgeon · 37 Years of Experience",
    intro:
      "Dr. Vyacheslav Dubenko is a specialist in orthopedics and orthopedic surgery who has been caring for patients for 37 years — from the first diagnosis, through conservative or surgical treatment, to a full return to function. His surgical practice focuses on the shoulder and the knee.",
    sections: [
      {
        heading: "Professional profile",
        paragraphs: [
          "Dr. Dubenko is a specialist in orthopedics and orthopedic surgery with 37 years of experience diagnosing and treating disorders of the musculoskeletal system. His surgical specialty centers on the shoulder and the knee — the two joints where many of the most common injuries occur, in athletes and in everyday life alike.",
          "He sees patients under an arrangement with the Maccabi health fund at four clinics: two in Rehovot, one in Bnei Ayish and one in Rishon LeZion. Visits are by appointment, and full contact details for every clinic are listed on the contact page.",
          "Consultations are held in Hebrew and Russian, and English-speaking patients are welcome as well — Dr. Dubenko believes every patient should understand their condition and treatment options in the language they are most comfortable with.",
        ],
      },
      {
        heading: "Treatment philosophy",
        paragraphs: [
          "Every course of treatment begins with a thorough diagnosis: an in-depth conversation about the complaint and how the injury occurred, a comprehensive physical examination, and a careful review of imaging and medical records. An accurate diagnosis is the foundation of every sound treatment decision.",
          "As a rule, Dr. Dubenko prefers to exhaust conservative options first — physiotherapy, joint injections and activity modification — before turning to surgery. An operation is recommended only when it is genuinely the right step for the patient.",
          "When surgery is needed, the preference is for minimally invasive arthroscopic techniques: small incisions, minimal damage to surrounding tissue and a faster recovery. At every stage, the patient receives a clear and honest explanation of the diagnosis, the alternatives and what to expect — so the decision is always an informed one.",
        ],
      },
      {
        heading: "Working with the care team",
        paragraphs: [
          "Successful orthopedic care does not end in the consultation room or the operating theater. Dr. Dubenko works closely with physiotherapists and rehabilitation professionals so that every stage — from diagnosis to the return to activity — is part of one continuous course of treatment.",
          "Each patient receives a personalized recovery plan tailored to the nature of the injury, their age, activity level and personal goals. Progress is monitored through ongoing medical follow-up, and the plan is adjusted to match the actual pace of recovery.",
          "Follow-up continues until full function is restored — whether that means returning to sport, to physically demanding work, or simply to daily life without pain.",
        ],
      },
      {
        heading: "What to expect at your first visit",
        paragraphs: [
          "Before your visit, it is worth bringing a referral (if required), any previous imaging — X-rays, ultrasound, CT or MRI — and relevant medical summaries. Each of these helps build a fuller, more accurate picture.",
          "The visit itself begins with a conversation about your medical history and how the problem developed, followed by a focused physical examination of the affected joint and area.",
          "At the end, you will receive a clear, honest explanation of the diagnosis and your treatment options — including the non-surgical ones — and you and Dr. Dubenko will decide on the next step together.",
        ],
      },
    ],
    faq: [
      {
        question: "Do I need a referral to book an appointment?",
        answer:
          "Under the Maccabi health fund, a referral may be required depending on the fund's procedures and the type of visit. We recommend checking with Maccabi before booking. For any question, you are welcome to call the clinic.",
      },
      {
        question: "Which health funds does Dr. Dubenko work with?",
        answer:
          "Dr. Dubenko sees patients under an arrangement with the Maccabi health fund, at four clinics in Rehovot, Bnei Ayish and Rishon LeZion.",
      },
      {
        question: "Which joints does Dr. Dubenko treat?",
        answer:
          "His main surgical specialty is the shoulder and the knee. In addition, Dr. Dubenko treats elbow, ankle and foot injuries, and performs joint injections as an alternative or complement to surgery.",
      },
    ],
  },

  ru: {
    title: "О докторе Вячеславе Дубенко",
    subtitle: "Врач-ортопед, хирург плечевого и коленного суставов · 37 лет опыта",
    intro:
      "Доктор Вячеслав Дубенко — специалист по ортопедии и ортопедической хирургии, который уже 37 лет сопровождает пациентов на всём пути: от первичной диагностики, через консервативное или хирургическое лечение, до полного восстановления функции. Основное направление его хирургической практики — плечевой и коленный суставы.",
    sections: [
      {
        heading: "Профессиональный профиль",
        paragraphs: [
          "Доктор Дубенко — специалист по ортопедии и ортопедической хирургии с 37-летним стажем диагностики и лечения заболеваний опорно-двигательного аппарата. Его хирургическая специализация сосредоточена на плечевом и коленном суставах — именно на них приходится значительная часть самых распространённых травм, как у спортсменов, так и в повседневной жизни.",
          "Приём ведётся по договорённости с больничной кассой «Маккаби» в четырёх клиниках: две находятся в Реховоте, одна — в Бней-Аиш и одна — в Ришон ле-Ционе. Визиты проходят по предварительной записи; контактные данные всех клиник указаны на странице контактов.",
          "Консультации проводятся на иврите и на русском языке; англоговорящих пациентов также ждут на приёме — доктору Дубенко важно, чтобы каждый пациент понимал свой диагноз и варианты лечения на удобном для него языке.",
        ],
      },
      {
        heading: "Подход к лечению",
        paragraphs: [
          "Любое лечение начинается с тщательной диагностики: подробной беседы о жалобах и обстоятельствах травмы, всестороннего физического осмотра и внимательного изучения снимков и медицинских документов. Точный диагноз — основа каждого правильного решения о лечении.",
          "Как правило, доктор Дубенко предпочитает сначала исчерпать консервативные возможности — физиотерапию, внутрисуставные инъекции и коррекцию нагрузок — и лишь затем обсуждать операцию. Хирургическое вмешательство предлагается только тогда, когда оно действительно является правильным шагом для пациента.",
          "Если операция необходима, предпочтение отдаётся малоинвазивным артроскопическим методикам: небольшие разрезы, минимальное повреждение тканей и более быстрое восстановление. На каждом этапе пациент получает ясное и честное объяснение диагноза, альтернатив и прогноза — чтобы решение всегда было осознанным.",
        ],
      },
      {
        heading: "Совместная работа с лечащей командой",
        paragraphs: [
          "Успешное ортопедическое лечение не заканчивается в кабинете врача или в операционной. Доктор Дубенко тесно сотрудничает с физиотерапевтами и специалистами по реабилитации, чтобы каждый этап — от диагностики до возвращения к активности — был частью единого, непрерывного процесса лечения.",
          "Для каждого пациента составляется индивидуальный план восстановления с учётом характера травмы, возраста, уровня активности и личных целей. Прогресс отслеживается в рамках регулярного медицинского наблюдения, а рекомендации корректируются в соответствии с реальным темпом восстановления.",
          "Наблюдение продолжается до полного восстановления функции — будь то возвращение в спорт, к физической работе или просто к повседневной жизни без боли.",
        ],
      },
      {
        heading: "Как проходит первый визит",
        paragraphs: [
          "К визиту стоит подготовить направление (если оно требуется), результаты предыдущих исследований — рентгеновские снимки, УЗИ, КТ или МРТ — а также выписки и медицинские заключения. Каждый такой документ помогает составить более полную и точную картину.",
          "Сам приём начинается с беседы об истории болезни и о том, как возникла проблема, после чего проводится прицельный физический осмотр сустава и беспокоящей области.",
          "В завершение вы получите ясное и честное объяснение диагноза и вариантов лечения — включая нехирургические — и вместе с доктором Дубенко решите, каким будет следующий шаг.",
        ],
      },
    ],
    faq: [
      {
        question: "Нужно ли направление, чтобы записаться на приём?",
        answer:
          "В рамках больничной кассы «Маккаби» направление может потребоваться — это зависит от правил кассы и типа визита. Рекомендуем уточнить в «Маккаби» перед записью. С любым вопросом можно позвонить в клинику.",
      },
      {
        question: "С какими больничными кассами работает доктор Дубенко?",
        answer:
          "Доктор Дубенко принимает пациентов по договорённости с больничной кассой «Маккаби» в четырёх клиниках — в Реховоте, Бней-Аиш и Ришон ле-Ционе.",
      },
      {
        question: "Какие суставы лечит доктор Дубенко?",
        answer:
          "Основная хирургическая специализация — плечевой и коленный суставы. Кроме того, доктор Дубенко лечит травмы локтя, голеностопа и стопы, а также выполняет внутрисуставные инъекции — как альтернативу операции или дополнение к ней.",
      },
    ],
  },
};
