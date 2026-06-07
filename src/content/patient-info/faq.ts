import type { FaqItem, Locale } from "@/content/types";

/**
 * Patient FAQ, ordered the way patients actually ask: appointments &
 * referrals → before the visit → treatments → recovery. Also drives the
 * FAQPage JSON-LD on /patient-info/faq.
 */
export const faq: Record<Locale, FaqItem[]> = {
  he: [
    {
      question: "האם צריך הפניה כדי לקבוע תור?",
      answer:
        "במסגרת מכבי נדרשת בדרך כלל הפניה מרופא המשפחה או התחייבות בהתאם למסלול הביטוח שלכם — מומלץ לוודא מול מכבי לפני הביקור מה נדרש במסלול הספציפי שלכם. אם אינכם בטוחים, אפשר פשוט להתקשר למרפאה ונכוון אתכם: 08-9560938.",
    },
    {
      question: "האם ד\"ר דובנקו מקבל מטופלים במסגרת מכבי?",
      answer:
        "כן. ד\"ר דובנקו עובד בהסדר עם קופת חולים מכבי, ומבוטחי מכבי מתקבלים בהתאם לתנאי המסלול הביטוחי שלהם. לפרטים מדויקים על כיסוי והשתתפות עצמית, מומלץ לבדוק מול מכבי.",
    },
    {
      question: "באיזו מרפאה כדאי לי לקבוע תור?",
      answer:
        "ד\"ר דובנקו מקבל מטופלים בארבע מרפאות: שתיים ברחובות (סניף רחובות מזרח ומרפאת clinica), מרפאת גני טל בבני עי\"ש ומרפאת רוי בראשון לציון. בחרו את המרפאה הקרובה אליכם — פרטי הכתובות והטלפונים מופיעים בעמוד יצירת הקשר.",
    },
    {
      question: "מה כדאי להביא לביקור הראשון?",
      answer:
        "הביאו את ההפניה (אם יש), את כל בדיקות ההדמיה הרלוונטיות — צילומי רנטגן, MRI או אולטרסאונד — יחד עם הפענוחים, סיכומי טיפולים קודמים אם היו, ורשימת תרופות קבועות. ככל שהתמונה מלאה יותר, האבחון מדויק ומהיר יותר.",
    },
    {
      question: "מתי מעדיפים הזרקה ומתי ניתוח?",
      answer:
        "ברוב המקרים מתחילים בטיפול שמרני: פיזיותרפיה, התאמת עומסים והזרקות במידת הצורך. ניתוח נשקל כאשר הטיפול השמרני מיצה את עצמו, או כאשר אופי הפציעה מחייב תיקון — למשל קרע משמעותי. ההחלטה תמיד מותאמת אישית למצב, לגיל ולרמת הפעילות של המטופל.",
    },
    {
      question: "מהי ארתרוסקופיה?",
      answer:
        "ארתרוסקופיה היא ניתוח זעיר־פולשני: דרך חתכים קטנים מוחדרת למפרק מצלמה זעירה, והמנתח מתקן את הנזק בעזרת מכשירים ייעודיים — בלי לפתוח את המפרק. היתרונות המרכזיים הם פגיעה מועטה ברקמות, פחות כאב אחרי הניתוח והחלמה מהירה יותר בהשוואה לניתוח פתוח.",
    },
    {
      question: "האם ההזרקות כואבות?",
      answer:
        "רוב המטופלים מתארים אי־נוחות קצרה בלבד, דומה לבדיקת דם. ההזרקה מתבצעת בדיוק רב, ולעיתים בעזרת הרדמה מקומית. ייתכנו רגישות מקומית קלה או לחץ ביום-יומיים שאחרי הטיפול — תופעה צפויה שחולפת מעצמה.",
    },
    {
      question: "כמה זמן נמשכת ההחלמה אחרי ניתוח ארתרוסקופי?",
      answer:
        "תלוי במפרק ובסוג התיקון: אחרי ניתוחים קטנים חוזרים לפעילות יומיומית בתוך ימים עד שבועות, ואילו תיקון של גיד או רצועה — למשל בכתף או בברך — דורש תהליך שיקום מדורג של מספר חודשים. בסיום הביקור תקבלו הערכת זמנים אישית המבוססת על הניתוח הספציפי שלכם.",
    },
    {
      question: "האם חייבים פיזיותרפיה אחרי ניתוח?",
      answer:
        "כמעט תמיד — כן. הניתוח מתקן את הנזק המבני, אבל הפיזיותרפיה היא שמחזירה תנועה, כוח ותפקוד. דלגו עליה, והתוצאה הסופית תהיה פחות טובה גם אחרי ניתוח מוצלח. ד\"ר דובנקו עובד בתיאום עם הפיזיותרפיסטים המטפלים ומלווה את ההתקדמות בביקורות מתוזמנות.",
    },
    {
      question: "מתי אפשר לחזור לעבודה ולספורט?",
      answer:
        "חזרה לעבודה משרדית אפשרית לרוב בתוך ימים עד שבועות, בהתאם לסוג הטיפול או הניתוח; עבודה פיזית דורשת זמן רב יותר. חזרה לספורט נקבעת לפי עמידה באבני דרך תפקודיות — טווח תנועה, כוח ויציבות — ולא לפי תאריך בלוח השנה. את ההנחיות המדויקות תקבלו באופן אישי.",
    },
    {
      question: "באילו שפות מתקיימים הביקורים?",
      answer:
        "ד\"ר דובנקו מקבל מטופלים בעברית וברוסית. אפשר לנהל את כל הביקור — מהאבחון ועד ההסברים על הטיפול — בשפה הנוחה לכם.",
    },
  ],
  en: [
    {
      question: "Do I need a referral to make an appointment?",
      answer:
        "Within Maccabi, a referral from your family physician or a commitment form is usually required, depending on your insurance track — it is best to confirm with Maccabi before the visit what your specific track requires. If you are unsure, simply call the clinic and we will guide you: 08-9560938.",
    },
    {
      question: "Does Dr. Dubenko see patients through Maccabi?",
      answer:
        "Yes. Dr. Dubenko works under an arrangement with the Maccabi health fund, and Maccabi members are seen according to the terms of their insurance track. For exact details on coverage and co-payments, please check with Maccabi.",
    },
    {
      question: "Which clinic should I book at?",
      answer:
        "Dr. Dubenko sees patients at four clinics: two in Rehovot (the Rehovot East branch and Clinica Rehovot), the Ganei Tal clinic in Bnei Ayish, and Roy Clinics in Rishon LeZion. Choose whichever is closest to you — full addresses and phone numbers are listed on the contact page.",
    },
    {
      question: "What should I bring to the first visit?",
      answer:
        "Bring your referral (if you have one), all relevant imaging — X-rays, MRI or ultrasound — together with the written reports, summaries of any previous treatments, and a list of your regular medications. The fuller the picture, the more precise and efficient the diagnosis.",
    },
    {
      question: "When is an injection preferred, and when surgery?",
      answer:
        "In most cases treatment starts conservatively: physiotherapy, load adjustment and injections where needed. Surgery is considered when conservative treatment has run its course, or when the nature of the injury requires repair — a significant tear, for example. The decision is always tailored to the patient's condition, age and activity level.",
    },
    {
      question: "What is arthroscopy?",
      answer:
        "Arthroscopy is minimally invasive surgery: through small incisions, a tiny camera is inserted into the joint, and the surgeon repairs the damage using dedicated instruments — without opening the joint. The key advantages are minimal tissue disruption, less post-operative pain and a faster recovery compared with open surgery.",
    },
    {
      question: "Do the injections hurt?",
      answer:
        "Most patients describe only brief discomfort, similar to a blood test. The injection is performed with great precision, sometimes with local anesthesia. Mild local tenderness or a feeling of pressure may appear for a day or two after the treatment — an expected reaction that passes on its own.",
    },
    {
      question: "How long is the recovery after arthroscopic surgery?",
      answer:
        "It depends on the joint and the type of repair: after minor procedures, patients return to daily activity within days to weeks, whereas repairing a tendon or ligament — in the shoulder or knee, for example — requires a staged rehabilitation process of several months. At the end of your visit you will receive a personal timeline based on your specific procedure.",
    },
    {
      question: "Is physiotherapy mandatory after surgery?",
      answer:
        "Almost always — yes. The operation repairs the structural damage, but it is physiotherapy that restores motion, strength and function. Skip it, and the final result will be poorer even after a successful operation. Dr. Dubenko works in coordination with the treating physiotherapists and follows progress through scheduled check-ups.",
    },
    {
      question: "When can I return to work and sport?",
      answer:
        "A return to office work is usually possible within days to weeks, depending on the treatment or surgery; physical work takes longer. Return to sport is determined by meeting functional milestones — range of motion, strength and stability — not by a date on the calendar. You will receive precise, personal guidance.",
    },
    {
      question: "In which languages are the consultations held?",
      answer:
        "Dr. Dubenko sees patients in Hebrew and in Russian. The entire visit — from the diagnosis to the explanations about treatment — can be held in whichever language is comfortable for you.",
    },
  ],
  ru: [
    {
      question: "Нужно ли направление, чтобы записаться на приём?",
      answer:
        "В рамках «Маккаби» обычно требуется направление от семейного врача или обязательство (хитхайвут) — в зависимости от вашей страховой программы. Лучше заранее уточнить в «Маккаби», что требуется именно по вашей программе. Если вы не уверены, просто позвоните в клинику, и мы подскажем: 08-9560938.",
    },
    {
      question: "Принимает ли д-р Дубенко пациентов через «Маккаби»?",
      answer:
        "Да. Д-р Дубенко работает по договору с больничной кассой «Маккаби», и её застрахованные принимаются в соответствии с условиями своей страховой программы. Точные детали о покрытии и доплатах лучше уточнить в «Маккаби».",
    },
    {
      question: "В какую клинику мне записаться?",
      answer:
        "Д-р Дубенко принимает в четырёх клиниках: две в Реховоте (филиал Реховот-Восток и Clinica Реховот), клиника Ганей-Таль в Бней-Аише и клиника «Рой» в Ришон ле-Ционе. Выбирайте ту, что ближе к вам, — адреса и телефоны указаны на странице контактов.",
    },
    {
      question: "Что взять с собой на первый приём?",
      answer:
        "Возьмите направление (если есть), все актуальные снимки — рентген, МРТ или УЗИ — вместе с их описаниями, выписки о предыдущем лечении, если оно было, и список постоянно принимаемых лекарств. Чем полнее картина, тем точнее и быстрее диагноз.",
    },
    {
      question: "Когда предпочтительна инъекция, а когда операция?",
      answer:
        "В большинстве случаев лечение начинается консервативно: физиотерапия, коррекция нагрузок и при необходимости инъекции. Операция рассматривается, когда консервативное лечение исчерпало себя или когда характер травмы требует восстановления — например, при значительном разрыве. Решение всегда принимается индивидуально, с учётом состояния, возраста и уровня активности пациента.",
    },
    {
      question: "Что такое артроскопия?",
      answer:
        "Артроскопия — это малоинвазивная операция: через небольшие разрезы в сустав вводится миниатюрная камера, и хирург устраняет повреждение специальными инструментами, не вскрывая сустав. Главные преимущества — минимальная травматизация тканей, меньше боли после операции и более быстрое восстановление по сравнению с открытой операцией.",
    },
    {
      question: "Больно ли делать инъекции?",
      answer:
        "Большинство пациентов описывают лишь кратковременный дискомфорт, похожий на взятие крови из вены. Инъекция выполняется с высокой точностью, иногда с местной анестезией. В течение одного-двух дней после процедуры возможны лёгкая болезненность или чувство давления в месте укола — это ожидаемая реакция, которая проходит сама.",
    },
    {
      question: "Сколько длится восстановление после артроскопической операции?",
      answer:
        "Это зависит от сустава и типа вмешательства: после небольших операций пациенты возвращаются к повседневной активности за дни или недели, а восстановление сухожилия или связки — например, в плече или колене — требует поэтапной реабилитации в течение нескольких месяцев. В конце приёма вы получите индивидуальный прогноз сроков для вашей конкретной операции.",
    },
    {
      question: "Обязательна ли физиотерапия после операции?",
      answer:
        "Почти всегда — да. Операция устраняет структурное повреждение, но именно физиотерапия возвращает подвижность, силу и функцию. Если её пропустить, итоговый результат будет хуже даже после успешной операции. Д-р Дубенко работает в координации с лечащими физиотерапевтами и отслеживает прогресс на плановых осмотрах.",
    },
    {
      question: "Когда можно вернуться к работе и спорту?",
      answer:
        "К офисной работе обычно можно вернуться за дни или недели — в зависимости от вида лечения или операции; физический труд требует больше времени. Возвращение в спорт определяется достижением функциональных ориентиров — объёма движений, силы и стабильности, — а не датой в календаре. Точные рекомендации вы получите индивидуально.",
    },
    {
      question: "На каких языках проходит приём?",
      answer:
        "Д-р Дубенко принимает пациентов на иврите и на русском языке. Весь приём — от диагностики до объяснений о лечении — может проходить на удобном для вас языке.",
    },
  ],
};
