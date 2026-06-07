import type { Locale, ServicePageContent } from "@/content/types";

export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "טפסים והתחשבנות מול ביטוחים",
    subtitle:
      "אילו מסמכים תקבלו מהמרפאה, איך מגישים תביעה לחברת הביטוח או למכבי — ומה כדאי לשמור.",
    intro:
      "טיפול רפואי טוב לא צריך להסתבך בבירוקרטיה. מטופלים רבים זכאים להחזרים או למימון של טיפולים, הזרקות וניתוחים — דרך ביטוח בריאות פרטי, ביטוח משלים או קופת החולים — אבל הדרך לזכאות עוברת דרך מסמכים נכונים. בעמוד הזה ריכזנו, בפשטות, מה המרפאה מספקת לכם ואיך מגישים את הבקשה נכון בפעם הראשונה.",
    sections: [
      {
        heading: "אילו מסמכים המרפאה מספקת?",
        paragraphs: [
          "לכל טיפול אצל ד\"ר דובנקו תוכלו לקבל את התיעוד הרפואי הנדרש להגשת תביעה:",
        ],
        bullets: [
          "סיכום ביקור ואבחנה רפואית מפורטת",
          "מכתב רפואי המפרט את הטיפול שבוצע או המומלץ ואת הנימוק הרפואי",
          "הפניות לבדיקות הדמיה ולטיפולי המשך (פיזיותרפיה, הזרקות)",
          "קבלות וחשבוניות עבור טיפולים בתשלום פרטי",
          "במקרה של ניתוח — סיכום ניתוח ומסמכים רפואיים נלווים לפי הצורך",
        ],
        note: "צריכים מסמך ספציפי שחברת הביטוח דורשת? אמרו לנו מה בדיוק התבקשתם להמציא — וננפיק לכם אותו.",
      },
      {
        heading: "הגשה לביטוח פרטי — צעד אחר צעד",
        paragraphs: [
          "התהליך דומה ברוב חברות הביטוח: פותחים תביעה (כיום לרוב באתר או באפליקציה של החברה), מצרפים את המסמכים הרפואיים והקבלות, וממתינים להחלטה. כמה כללי זהב שיחסכו לכם זמן:",
        ],
        bullets: [
          "בדקו בפוליסה מראש מה מכוסה: ייעוץ מומחה, הזרקות, ניתוח, פיזיותרפיה",
          "אם נדרש אישור מראש לטיפול — בקשו אותו לפני הטיפול, לא אחריו",
          "צרפו את כל המסמכים בהגשה הראשונה — הגשה חלקית היא הסיבה הנפוצה לעיכובים",
          "שמרו עותק של כל מה שהגשתם, כולל אישורי שליחה",
        ],
      },
      {
        heading: "מטופלי מכבי והביטוחים המשלימים",
        paragraphs: [
          "ד\"ר דובנקו מקבל מטופלים במסגרת הסדר עם קופת חולים מכבי — כך שחלק ניכר מהשירותים ניתן דרך הקופה בהליך הרגיל: הפניה, קביעת תור וביקור.",
          "לחברי הביטוחים המשלימים של הקופה ייתכנו זכאויות נוספות — החזרים על ייעוצים, על טיפולים משלימים או על בחירת מנתח. הזכאות המדויקת תלויה במסלול שלכם; שווה בדיקה קצרה מול הקופה לפני טיפול משמעותי, ואנחנו נספק כל מסמך שיידרש.",
        ],
      },
      {
        heading: "טיפים שחוסכים כאב ראש",
        paragraphs: [
          "מניסיון של שנים רבות מול ביטוחים, כמה הרגלים פשוטים עושים את ההבדל:",
        ],
        bullets: [
          "שמרו תיקייה (פיזית או דיגיטלית) עם כל המסמכים הרפואיים שלכם",
          "בקשו את המסמכים בסיום הביקור — זה הרגע הקל ביותר להנפיק אותם",
          "אל תזרקו קבלות, גם על סכומים קטנים — הן מצטברות לתביעה",
          "נדחתה התביעה? בקשו נימוק בכתב — במקרים רבים אפשר לערער בהצלחה עם מסמך משלים",
        ],
        note: "חשוב לדעת: המרפאה מספקת את כל התיעוד הרפואי, אך ההגשה לביטוח ותנאי הפוליסה הם בינכם לבין המבטח. בכל שאלה על מסמך נדרש — אנחנו כאן.",
      },
    ],
    faq: [
      {
        question: "האם המרפאה מגישה את התביעה לביטוח בשבילי?",
        answer:
          "את התביעה מגיש המבוטח — כך עובד התהליך מול כל חברות הביטוח. תפקידנו הוא לצייד אתכם בכל מסמך רפואי נדרש: סיכומים, מכתבים, הפניות וקבלות. עם תיק מסמכים מלא, ההגשה עצמה פשוטה ולרוב מהירה.",
      },
      {
        question: "אילו מסמכים כדאי לבקש כבר בביקור הראשון?",
        answer:
          "סיכום ביקור עם אבחנה — תמיד. אם הומלץ על טיפול או ניתוח, בקשו גם מכתב רפואי מנומק; הוא הבסיס גם לאישורים מראש וגם לתביעות החזר. ואם שילמתם — קבלה. את השאר נשלים לפי דרישות הביטוח שלכם.",
      },
      {
        question: "הביטוח דורש טופס ספציפי שלו — מה עושים?",
        answer:
          "הביאו את הטופס (או שלחו אותו אלינו), וד\"ר דובנקו ימלא את החלק הרפואי. חברות רבות עובדות עם טפסים ייעודיים משלהן — זה חלק שגרתי מהעבודה ואין צורך לחשוש ממנו.",
      },
    ],
  },
  en: {
    title: "Insurance Claim Forms & Paperwork",
    subtitle:
      "Which documents you will receive from the clinic, how to submit a claim to your insurer or Maccabi — and what to keep.",
    intro:
      "Good medical care should not get tangled in bureaucracy. Many patients are entitled to reimbursements or funding for treatments, injections and surgery — through private health insurance, supplementary insurance or their health fund — but the road to that entitlement runs through the right documents. On this page we lay out, simply, what the clinic provides you and how to submit the claim correctly the first time.",
    sections: [
      {
        heading: "Which Documents Does the Clinic Provide?",
        paragraphs: [
          "For every treatment with Dr. Dubenko you can receive the medical documentation required for submitting a claim:",
        ],
        bullets: [
          "A visit summary and a detailed medical diagnosis",
          "A medical letter detailing the treatment performed or recommended and the medical reasoning",
          "Referrals for imaging and follow-up treatments (physiotherapy, injections)",
          "Receipts and invoices for privately paid treatments",
          "In the case of surgery — a surgical report and accompanying medical documents as needed",
        ],
        note: "Need a specific document your insurer demands? Tell us exactly what you were asked to provide — and we will issue it for you.",
      },
      {
        heading: "Submitting to Private Insurance — Step by Step",
        paragraphs: [
          "The process is similar at most insurance companies: you open a claim (nowadays usually on the company's website or app), attach the medical documents and receipts, and wait for a decision. A few golden rules that will save you time:",
        ],
        bullets: [
          "Check the policy in advance for what is covered: specialist consultation, injections, surgery, physiotherapy",
          "If pre-approval is required for a treatment — request it before the treatment, not after",
          "Attach all the documents in the first submission — a partial submission is the most common cause of delays",
          "Keep a copy of everything you submitted, including delivery confirmations",
        ],
      },
      {
        heading: "Maccabi Patients and Supplementary Plans",
        paragraphs: [
          "Dr. Dubenko sees patients under an arrangement with the Maccabi health fund — so a significant share of services is provided through the fund in the usual process: referral, appointment and visit.",
          "Members of the fund's supplementary insurance plans may have additional entitlements — reimbursements for consultations, for complementary treatments or for choosing a surgeon. The exact entitlement depends on your plan; a short check with the fund before a significant treatment is worthwhile, and we will provide any document required.",
        ],
      },
      {
        heading: "Tips That Save Headaches",
        paragraphs: [
          "From many years of experience with insurers, a few simple habits make the difference:",
        ],
        bullets: [
          "Keep a folder (physical or digital) with all your medical documents",
          "Ask for the documents at the end of the visit — that is the easiest moment to issue them",
          "Don't throw away receipts, even for small amounts — they add up in a claim",
          "Claim denied? Request the reasoning in writing — in many cases an appeal succeeds with one supplementary document",
        ],
        note: "Important to know: the clinic provides all the medical documentation, but the submission to the insurer and the policy terms are between you and the insurer. For any question about a required document — we are here.",
      },
    ],
    faq: [
      {
        question: "Does the clinic submit the insurance claim for me?",
        answer:
          "The claim is submitted by the insured — that is how the process works with all insurance companies. Our role is to equip you with every required medical document: summaries, letters, referrals and receipts. With a complete document file, the submission itself is simple and usually quick.",
      },
      {
        question: "Which documents should I ask for at the very first visit?",
        answer:
          "A visit summary with a diagnosis — always. If a treatment or surgery was recommended, also ask for a reasoned medical letter; it is the basis both for pre-approvals and for reimbursement claims. And if you paid — a receipt. The rest we will complete according to your insurer's requirements.",
      },
      {
        question: "The insurer requires its own specific form — what do I do?",
        answer:
          "Bring the form (or send it to us), and Dr. Dubenko will fill in the medical part. Many companies work with their own dedicated forms — it is a routine part of the work and nothing to worry about.",
      },
    ],
  },
  ru: {
    title: "Документы и формы для страховых компаний",
    subtitle:
      "Какие документы вы получите в клинике, как подать заявление страховой компании или в «Маккаби» — и что стоит сохранять.",
    intro:
      "Хорошее лечение не должно вязнуть в бюрократии. Многие пациенты имеют право на компенсации или финансирование лечения, инъекций и операций — через частную медицинскую страховку, дополнительную страховку или больничную кассу, — но путь к этому праву лежит через правильные документы. На этой странице мы просто и по делу собрали, что клиника вам предоставляет и как подать заявление правильно с первого раза.",
    sections: [
      {
        heading: "Какие документы предоставляет клиника?",
        paragraphs: [
          "По каждому лечению у д-ра Дубенко вы можете получить медицинскую документацию, необходимую для подачи заявления:",
        ],
        bullets: [
          "Заключение по итогам визита и подробный медицинский диагноз",
          "Медицинское письмо с описанием проведённого или рекомендованного лечения и врачебным обоснованием",
          "Направления на визуализацию и последующее лечение (физиотерапия, инъекции)",
          "Квитанции и счета за лечение, оплаченное в частном порядке",
          "В случае операции — выписку об операции и сопутствующие медицинские документы по необходимости",
        ],
        note: "Нужен особый документ, который требует ваша страховая? Скажите нам, что именно вас попросили предоставить, — и мы его оформим.",
      },
      {
        heading: "Подача в частную страховую — шаг за шагом",
        paragraphs: [
          "Процесс похож в большинстве страховых компаний: вы открываете заявление (сегодня обычно на сайте или в приложении компании), прикладываете медицинские документы и квитанции и ждёте решения. Несколько золотых правил, которые сэкономят вам время:",
        ],
        bullets: [
          "Заранее проверьте в полисе, что покрывается: консультация специалиста, инъекции, операция, физиотерапия",
          "Если для лечения требуется предварительное одобрение — запросите его до лечения, а не после",
          "Приложите все документы при первой подаче — неполная подача — самая частая причина задержек",
          "Сохраняйте копию всего, что подали, включая подтверждения отправки",
        ],
      },
      {
        heading: "Пациенты «Маккаби» и дополнительные программы",
        paragraphs: [
          "Д-р Дубенко принимает пациентов в рамках договора с больничной кассой «Маккаби» — поэтому значительная часть услуг предоставляется через кассу в обычном порядке: направление, запись и визит.",
          "У участников дополнительных страховых программ кассы могут быть дополнительные права — компенсации за консультации, за дополнительное лечение или за выбор хирурга. Точный объём прав зависит от вашей программы; перед серьёзным лечением стоит коротко уточнить в кассе, а мы предоставим любой требуемый документ.",
        ],
      },
      {
        heading: "Советы, которые экономят нервы",
        paragraphs: [
          "Из многолетнего опыта работы со страховыми — несколько простых привычек, которые решают дело:",
        ],
        bullets: [
          "Заведите папку (бумажную или цифровую) со всеми вашими медицинскими документами",
          "Просите документы в конце визита — это самый удобный момент их оформить",
          "Не выбрасывайте квитанции, даже на небольшие суммы — в заявлении они складываются",
          "Заявление отклонили? Запросите письменное обоснование — во многих случаях апелляция с одним дополнительным документом успешна",
        ],
        note: "Важно знать: клиника предоставляет всю медицинскую документацию, но подача заявления и условия полиса — отношения между вами и страховщиком. По любому вопросу о требуемом документе — мы на связи.",
      },
    ],
    faq: [
      {
        question: "Подаёт ли клиника заявление в страховую за меня?",
        answer:
          "Заявление подаёт застрахованный — так устроен процесс во всех страховых компаниях. Наша роль — снабдить вас всеми необходимыми медицинскими документами: заключениями, письмами, направлениями и квитанциями. С полным комплектом документов сама подача проста и обычно быстра.",
      },
      {
        question: "Какие документы стоит попросить уже на первом визите?",
        answer:
          "Заключение по визиту с диагнозом — всегда. Если рекомендовано лечение или операция, попросите также обоснованное медицинское письмо: оно служит базой и для предварительных одобрений, и для заявлений на компенсацию. И если вы платили — квитанцию. Остальное дополним по требованиям вашей страховой.",
      },
      {
        question: "Страховая требует свою особую форму — что делать?",
        answer:
          "Принесите форму (или пришлите её нам), и д-р Дубенко заполнит медицинскую часть. Многие компании работают со своими собственными бланками — это рутинная часть работы, и беспокоиться не о чем.",
      },
    ],
  },
};
