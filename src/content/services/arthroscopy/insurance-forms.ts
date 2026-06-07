import type { Locale, ServicePageContent } from "@/content/types";

export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "טפסים לחברת הביטוח",
    subtitle:
      "אילו מסמכים תקבלו מהמרפאה, איך מתנהל התהליך מול חברת הביטוח — ומה חשוב לדעת למבוטחי מכבי.",
    intro:
      "לקראת ניתוח, חברות הביטוח ולעיתים גם קופת החולים מבקשות מסמכים רפואיים מסודרים — לאישור מימון, להפעלת פוליסת ניתוחים פרטית או לתביעה לאחר המעשה. הניירת הזו מלחיצה מטופלים רבים לא פחות מהניתוח עצמו, ובחינם: ברגע שמבינים את התהליך, הוא פשוט בהרבה. החדשות הטובות: את החלק הרפואי של הניירת המרפאה מכינה עבורכם. בעמוד זה נסביר מה תקבלו מאיתנו, איך נראה תהליך טיפוסי מול המבטח, ואיך לחסוך לעצמכם הליכים מיותרים.",
    sections: [
      {
        heading: "אילו מסמכים המרפאה מספקת?",
        paragraphs: [
          "לאחר הבדיקה וההחלטה על ניתוח, תקבלו מהמרפאה את המסמכים הרפואיים הנדרשים לפנייה למבטח:",
        ],
        bullets: [
          "סיכום ביקור ובו האבחנה והממצאים הקליניים",
          "המלצה רפואית מנומקת לניתוח, כולל סוג ההליך המתוכנן",
          "הפניות לבדיקות הדמיה וסיכומי ממצאים רלוונטיים",
          "מילוי החלק הרפואי בטופסי התביעה של חברת הביטוח — לפי הטופס של המבטח שלכם",
          "לאחר הניתוח: דוח ניתוח וסיכומי ביקורת לפי הצורך",
        ],
        note: "הביאו לפגישה את טופסי התביעה של חברת הביטוח שלכם — כל חברה והטפסים שלה — ואנו נמלא את החלק הרפואי.",
      },
      {
        heading: "איך נראה התהליך מול חברת הביטוח?",
        paragraphs: [
          "אף שכל מבטח עובד מעט אחרת, התהליך הטיפוסי דומה: פונים למבטח עוד לפני הניתוח ומקבלים את טופסי התביעה; מצרפים את המסמכים הרפואיים מהמרפאה; חברת הביטוח בוחנת את הבקשה — לעיתים באמצעות רופא מטעמה — ומנפיקה אישור או התחייבות; ולאחר הניתוח מוגשים המסמכים המסכמים והקבלות.",
          "מומלץ מאוד להתחיל את התהליך מוקדם ככל האפשר ולא להמתין לערב הניתוח: בירור תנאי הפוליסה, תקופות אכשרה והשתתפות עצמית אורך זמן, והגשה מוקדמת חוסכת עיכובים. אם המבטח מבקש מסמך נוסף או הבהרה רפואית — פנו אלינו, ונשלים את החסר במהירות.",
        ],
      },
      {
        heading: "מבוטחי מכבי — מה חשוב לדעת?",
        paragraphs: [
          "ד\"ר דובנקו מקבל מטופלים במסגרת מכבי, כך שמסלול הטיפול והאבחון נגיש לחברי הקופה. מימון ניתוחים נעשה בהתאם להסדרי הקופה ולביטוחים המשלימים — והזכאות המדויקת תלויה בסוג הניתוח, במסלול הנבחר ובתנאי התוכנית שלכם.",
          "לבירור הזכאות האישית פנו ישירות למכבי או בדקו באזור האישי שלכם; המרפאה תספק כל מסמך רפואי שיידרש לתהליך — הפניות, המלצות וסיכומים.",
        ],
      },
      {
        heading: "טיפים שיעשו לכם סדר",
        paragraphs: [
          "כמה הרגלים פשוטים הופכים את ההתנהלות מול המבטח לקלה בהרבה:",
        ],
        bullets: [
          "שמרו עותק של כל מסמך שאתם מגישים — ניירת רפואית, טפסים וקבלות",
          "בררו מראש מהי ההשתתפות העצמית והאם נדרש אישור מוקדם לניתוח",
          "ודאו שכל הטפסים חתומים ומלאים לפני ההגשה — טופס חסר הוא הגורם השכיח לעיכוב",
          "תעדו את מועדי הפנייה ושמות הנציגים שאיתם דיברתם",
          "בכל שאלה על מסמך רפואי — פנו למרפאה, נשמח לעזור",
        ],
      },
    ],
    faq: [
      {
        question: "האם המרפאה מגישה את התביעה לחברת הביטוח עבורי?",
        answer:
          "את התביעה מגיש המבוטח לחברת הביטוח שלו, אך המרפאה מספקת את כל המסמכים הרפואיים הנדרשים וממלאת את החלק הרפואי בטפסים. בשאלות על מילוי המסמכים — אנחנו כאן.",
      },
      {
        question: "מתי כדאי להתחיל בתהליך מול המבטח?",
        answer:
          "מיד כשמתקבלת ההחלטה על ניתוח. בירור תנאי הפוליסה וקבלת אישורים אורכים זמן, והתחלה מוקדמת מונעת עיכוב במועד הניתוח.",
      },
      {
        question: "אילו פרטים חשוב לבדוק בפוליסה לפני ניתוח?",
        answer:
          "בין היתר: האם הניתוח כלול בכיסוי, האם נדרש אישור מוקדם, מהי ההשתתפות העצמית, והאם יש תקופת אכשרה. את התשובות המדויקות ייתן המבטח שלכם — והמרפאה תספק כל מסמך רפואי שיידרש לבירור.",
      },
    ],
  },
  en: {
    title: "Insurance Claim Forms",
    subtitle:
      "Which documents you will receive from the clinic, how the process with your insurer works — and what Maccabi members should know.",
    intro:
      "Ahead of surgery, insurance companies — and sometimes the health fund as well — request organized medical documents: to approve funding, to activate a private surgery policy or to file a claim afterwards. The good news: the clinic prepares the medical part of the paperwork for you. This page explains what you will receive from us, what a typical process with the insurer looks like, and how to spare yourself unnecessary back-and-forth.",
    sections: [
      {
        heading: "Which documents does the clinic provide?",
        paragraphs: [
          "After the examination and the decision to operate, you will receive from the clinic the medical documents needed for approaching your insurer:",
        ],
        bullets: [
          "A visit summary with the diagnosis and clinical findings",
          "A reasoned medical recommendation for surgery, including the type of procedure planned",
          "Referrals for imaging and summaries of relevant findings",
          "Completion of the medical section of your insurer's claim forms — using your insurer's own form",
          "After the surgery: a surgical report and follow-up summaries as needed",
        ],
        note: "Bring your insurance company's claim forms to the appointment — every insurer has its own — and we will complete the medical section.",
      },
      {
        heading: "What does the process with the insurer look like?",
        paragraphs: [
          "Although every insurer works a little differently, the typical process is similar: you contact the insurer before the surgery and receive the claim forms; you attach the medical documents from the clinic; the insurance company reviews the request — sometimes through a physician on its behalf — and issues an approval or a commitment; and after the surgery, the concluding documents and receipts are submitted.",
          "It is strongly recommended to start the process as early as possible rather than waiting until the eve of surgery: clarifying policy terms, waiting periods and deductibles takes time, and an early submission prevents delays.",
        ],
      },
      {
        heading: "Maccabi members — what should you know?",
        paragraphs: [
          "Dr. Dubenko sees patients through Maccabi, so the diagnostic and treatment pathway is accessible to members of the fund. Funding for surgery follows the fund's arrangements and supplementary insurance plans — and your exact entitlement depends on the type of surgery, the chosen pathway and the terms of your plan.",
          "To clarify your personal entitlement, contact Maccabi directly or check your personal online account; the clinic will provide any medical document the process requires — referrals, recommendations and summaries.",
        ],
      },
      {
        heading: "Tips that keep things orderly",
        paragraphs: [
          "A few simple habits make dealing with the insurer considerably easier:",
        ],
        bullets: [
          "Keep a copy of every document you submit — medical paperwork, forms and receipts",
          "Clarify in advance what the deductible is and whether prior approval is required for the surgery",
          "Make sure all forms are signed and complete before submission — a missing form is the most common cause of delay",
          "Record the dates of your inquiries and the names of the representatives you spoke with",
          "For any question about a medical document — contact the clinic, we will be glad to help",
        ],
      },
    ],
    faq: [
      {
        question: "Does the clinic file the claim with the insurance company for me?",
        answer:
          "The claim is filed by the insured person with their own insurance company, but the clinic provides all the required medical documents and completes the medical section of the forms. For questions about the paperwork — we are here.",
      },
      {
        question: "When should I start the process with the insurer?",
        answer:
          "As soon as the decision to operate is made. Clarifying policy terms and obtaining approvals takes time, and an early start prevents a delay in the surgery date.",
      },
      {
        question: "Which details should I check in my policy before surgery?",
        answer:
          "Among others: whether the surgery is covered, whether prior approval is required, what the deductible is, and whether there is a waiting period. The precise answers come from your insurer — and the clinic will provide any medical document needed for the clarification.",
      },
    ],
  },
  ru: {
    title: "Документы для страховой компании",
    subtitle:
      "Какие документы вы получите в клинике, как проходит процесс со страховой компанией — и что важно знать пациентам «Маккаби».",
    intro:
      "Перед операцией страховые компании — а иногда и больничная касса — запрашивают оформленные медицинские документы: для одобрения финансирования, активации частного хирургического полиса или подачи заявления постфактум. Хорошая новость: медицинскую часть бумаг клиника готовит за вас. На этой странице мы объясним, что вы получите от нас, как выглядит типичный процесс со страховщиком и как избавить себя от лишней волокиты.",
    sections: [
      {
        heading: "Какие документы предоставляет клиника?",
        paragraphs: [
          "После осмотра и принятия решения об операции вы получите в клинике медицинские документы, необходимые для обращения к страховщику:",
        ],
        bullets: [
          "Заключение приёма с диагнозом и клиническими находками",
          "Обоснованную медицинскую рекомендацию к операции с указанием планируемого вмешательства",
          "Направления на визуализацию и заключения по соответствующим исследованиям",
          "Заполнение медицинской части бланков страхового заявления — по форме вашей страховой компании",
          "После операции: протокол операции и заключения контрольных осмотров по необходимости",
        ],
        note: "Принесите на приём бланки заявления вашей страховой компании — у каждой компании свои формы — и мы заполним медицинскую часть.",
      },
      {
        heading: "Как выглядит процесс со страховой компанией?",
        paragraphs: [
          "Хотя каждый страховщик работает немного по-своему, типичный процесс похож: вы обращаетесь в страховую компанию ещё до операции и получаете бланки заявления; прикладываете медицинские документы из клиники; страховая компания рассматривает запрос — иногда с привлечением своего врача — и выдаёт одобрение или гарантийное обязательство; после операции подаются итоговые документы и квитанции.",
          "Настоятельно рекомендуем начинать процесс как можно раньше, а не накануне операции: выяснение условий полиса, периодов ожидания и франшизы занимает время, а ранняя подача предотвращает задержки.",
        ],
      },
      {
        heading: "Пациенты «Маккаби» — что важно знать?",
        paragraphs: [
          "Д-р Дубенко принимает пациентов в рамках «Маккаби», поэтому путь диагностики и лечения доступен членам кассы. Финансирование операций происходит согласно порядкам кассы и программам дополнительного страхования — а точные права зависят от типа операции, выбранного пути и условий вашей программы.",
          "Для уточнения личных прав обратитесь напрямую в «Маккаби» или проверьте в личном кабинете; клиника предоставит любой медицинский документ, который потребуется для процесса, — направления, рекомендации и заключения.",
        ],
      },
      {
        heading: "Советы, которые наведут порядок",
        paragraphs: [
          "Несколько простых привычек заметно упрощают взаимодействие со страховщиком:",
        ],
        bullets: [
          "Храните копию каждого подаваемого документа — медицинских бумаг, бланков и квитанций",
          "Заранее уточните размер франшизы и требуется ли предварительное одобрение операции",
          "Перед подачей убедитесь, что все бланки подписаны и заполнены, — недостающий документ — самая частая причина задержки",
          "Записывайте даты обращений и имена представителей, с которыми говорили",
          "По любому вопросу о медицинском документе обращайтесь в клинику — будем рады помочь",
        ],
      },
    ],
    faq: [
      {
        question: "Подаёт ли клиника заявление в страховую компанию за меня?",
        answer:
          "Заявление в свою страховую компанию подаёт сам застрахованный, но клиника предоставляет все необходимые медицинские документы и заполняет медицинскую часть бланков. По вопросам оформления — мы на связи.",
      },
      {
        question: "Когда начинать процесс со страховой компанией?",
        answer:
          "Сразу после принятия решения об операции. Выяснение условий полиса и получение одобрений занимают время, и ранний старт предотвращает перенос даты операции.",
      },
      {
        question: "Какие пункты полиса стоит проверить перед операцией?",
        answer:
          "В том числе: покрывается ли операция, требуется ли предварительное одобрение, каков размер франшизы и есть ли период ожидания. Точные ответы даст ваш страховщик — а клиника предоставит любой медицинский документ, нужный для выяснения.",
      },
    ],
  },
};
