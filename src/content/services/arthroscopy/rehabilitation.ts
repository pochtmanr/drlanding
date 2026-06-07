import type { Locale, ServicePageContent } from "@/content/types";

export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "שיקום לאחר הניתוח",
    subtitle:
      "היום הראשון אחרי הניתוח והנחיות השיקום — שלבי ההחלמה, פיזיותרפיה וחזרה הדרגתית לפעילות.",
    intro:
      "הניתוח הוא רק חצי מהדרך — החצי השני הוא השיקום. ההנחיות בעמוד זה מתארות את העקרונות הכלליים לאחר ניתוח ארתרוסקופי: מה צפוי ביום הראשון, איך מתקדמת ההחלמה משבוע לשבוע, ומתי חוזרים לפעילות. ההנחיות האישיות שתקבלו לאחר הניתוח שלכם — בהתאם למפרק ולסוג התיקון — הן תמיד הקובעות.",
    sections: [
      {
        heading: "היום הראשון: חבישות, קירור ומנוחה",
        paragraphs: [
          "הביתה תשתחררו עם חבישה סטרילית על החתכים הקטנים, ולעיתים עם מתלה, מגף או חבישה אלסטית — בהתאם למפרק שנותח. את החבישה משאירים נקייה ויבשה לפי ההנחיות שקיבלתם; אל תסירו אותה על דעת עצמכם.",
          "קירור הוא הכלי הטוב ביותר שלכם ביממה הראשונה: שקית קרח עטופה במגבת (לעולם לא ישירות על העור), למשך כ-15–20 דקות, מספר פעמים ביום. הרימו את הגפה המנותחת מעל גובה הלב ככל האפשר — זה מפחית נפיחות וכאב.",
        ],
      },
      {
        heading: "שיכוך כאב — נכון וחכם",
        paragraphs: [
          "כאב מתון לאחר הניתוח הוא צפוי וטבעי, והוא נשלט היטב באמצעות משככי הכאבים שהומלצו לכם בשחרור. הכלל החשוב: ליטול את התרופות באופן סדור לפי ההנחיות, ולא 'לרדוף אחרי הכאב' — קל יותר למנוע כאב מאשר להשתלט עליו לאחר שהתגבר. אם בוצע חסם עצבי, זכרו שתחושת ההקלה הראשונית תחלוף עם התפוגגותו — היערכו עם משכך כאב לפני השינה.",
        ],
      },
      {
        heading: "מתי להתקשר למרפאה — סימנים שדורשים פנייה",
        paragraphs: [
          "החלמה תקינה מתקדמת בהדרגה. עם זאת, ישנם סימנים שמחייבים פנייה למרפאה או למוקד הרפואי ללא דיחוי:",
        ],
        bullets: [
          "חום גבוה (מעל 38°C) או צמרמורות",
          "כאב חזק שאינו מגיב למשככי הכאבים",
          "אודם מתפשט, הפרשה או ריח רע מאזור החתכים",
          "נפיחות חריגה וגוברת, או כאב חד בשוק",
          "חוסר תחושה או נימול שאינם חולפים",
        ],
        note: "בכל ספק — עדיף להתקשר ולשאול. לשם כך אנחנו כאן.",
      },
      {
        heading: "הנחיות שיקום: שלב אחר שלב",
        paragraphs: [
          "השיקום לאחר ניתוח ארתרוסקופי מתקדם בשלבים, כשכל שלב בונה את הבא אחריו. הטווחים משתנים לפי המפרק וסוג התיקון — אך העיקרון קבוע:",
          "בשבועות הראשונים (בדרך כלל 1–2): הגנה על התיקון, הפחתת נפיחות ותנועות עדינות מבוקרות לפי ההנחיות. בהמשך (לרוב שבועות 2–6): החזרה הדרגתית של טווחי התנועה בליווי פיזיותרפיסט, ותחילת הפעלה עדינה של השרירים. בשלב המתקדם (לרוב מהשבוע ה-6 ואילך): חיזוק הדרגתי, שיפור שליטה ויציבות, וחזרה מדורגת לפעילות מלאה. בתיקונים גדולים — כמו תפירת גיד או שחזור רצועה — התהליך המלא נמשך מספר חודשים.",
        ],
      },
      {
        heading: "פיזיותרפיה — שותפה מלאה להצלחה",
        paragraphs: [
          "תוצאת הניתוח הטובה ביותר מושגת כשהתיקון הניתוחי נפגש עם שיקום מסודר. הפיזיותרפיסט מתאים את התרגילים לשלב שבו אתם נמצאים, מוודא שהעומס עולה בקצב נכון, ומלווה אתכם עד החזרה המלאה לתפקוד. ההתמדה בתרגול הביתי — גם כשמשתפר ונהיה 'משעמם' — היא שמבדילה בין החלמה טובה להחלמה מצוינת.",
        ],
      },
      {
        heading: "חזרה לשגרה: עבודה, נהיגה וספורט",
        paragraphs: [
          "חזרה לעבודה משרדית אפשרית לרוב בתוך ימים עד שבועות בודדים; עבודה פיזית דורשת זמן ארוך יותר. נהיגה — רק כשאינכם נוטלים משככי כאבים חזקים ויש לכם שליטה מלאה ובטוחה בגפה. חזרה לספורט נעשית בהדרגה, לפי סוג הניתוח וההתקדמות בפועל, ובתיאום עם המנתח והפיזיותרפיסט. ההחלטות האלה מתקבלות יחד אתכם בביקורת — לא לפי תאריך בלוח השנה.",
        ],
      },
    ],
    faq: [
      {
        question: "מתי מותר להתקלח אחרי הניתוח?",
        answer:
          "בדרך כלל מותר להתקלח לאחר מספר ימים, תוך שמירה על חבישה יבשה — למשל בעזרת כיסוי אטום. הנחיה מדויקת תקבלו בשחרור, בהתאם לסוג החבישה והתיקון.",
      },
      {
        question: "כמה זמן נמשכת הנפיחות אחרי ארתרוסקופיה?",
        answer:
          "נפיחות מתונה היא חלק טבעי מההחלמה ויכולה להימשך שבועות אחדים, ולעיתים יותר — במיוחד לאחר מאמץ. קירור, הרמת הגפה ופעילות מדורגת מסייעים. נפיחות חריגה וגוברת — מצדיקה פנייה למרפאה.",
      },
      {
        question: "האם אפשר לוותר על הפיזיותרפיה אם אני כבר מרגיש טוב?",
        answer:
          "לא מומלץ. הרגשה טובה היא שלב בדרך — אך טווח תנועה, כוח ויציבות מלאים נבנים בהמשך התהליך. הפסקה מוקדמת של השיקום היא מהסיבות השכיחות לתוצאה חלקית או לפציעה חוזרת.",
      },
    ],
  },
  en: {
    title: "Postoperative Rehabilitation",
    subtitle:
      "The first day after surgery and rehabilitation guidelines — recovery phases, physiotherapy and a gradual return to activity.",
    intro:
      "Surgery is only half the journey — the other half is rehabilitation. The guidance on this page describes the general principles after arthroscopic surgery: what to expect on the first day, how recovery progresses week by week, and when to return to activity. The personal instructions you receive after your own surgery — according to the joint and the type of repair — always take precedence.",
    sections: [
      {
        heading: "The first day: dressings, icing and rest",
        paragraphs: [
          "You will go home with a sterile dressing over the small incisions, and sometimes with a sling, a boot or an elastic bandage — depending on the joint operated on. Keep the dressing clean and dry according to the instructions you received; do not remove it on your own.",
          "Icing is your best tool in the first twenty-four hours: an ice pack wrapped in a towel (never directly on the skin), for about 15–20 minutes, several times a day. Keep the operated limb elevated above heart level as much as possible — it reduces swelling and pain.",
        ],
      },
      {
        heading: "Pain management — done right",
        paragraphs: [
          "Moderate pain after surgery is expected and natural, and it is well controlled with the pain medication recommended at discharge. The important rule: take the medication on schedule as instructed, rather than 'chasing the pain' — it is easier to prevent pain than to control it once it has built up. If a nerve block was used, remember that the initial relief will fade as it wears off — have pain medication ready before bedtime.",
        ],
      },
      {
        heading: "When to call the clinic — signs that need attention",
        paragraphs: [
          "A normal recovery progresses gradually. Nevertheless, there are signs that require contacting the clinic or a medical hotline without delay:",
        ],
        bullets: [
          "High fever (above 38°C / 100.4°F) or chills",
          "Severe pain that does not respond to the pain medication",
          "Spreading redness, discharge or a bad odor around the incisions",
          "Unusual, increasing swelling, or sharp pain in the calf",
          "Numbness or tingling that does not pass",
        ],
        note: "When in doubt — it is always better to call and ask. That is what we are here for.",
      },
      {
        heading: "Rehabilitation guidelines: phase by phase",
        paragraphs: [
          "Rehabilitation after arthroscopic surgery progresses in phases, each one building on the last. The time ranges vary by joint and type of repair — but the principle is constant:",
          "In the first weeks (usually 1–2): protecting the repair, reducing swelling and gentle, controlled movements as instructed. Next (usually weeks 2–6): gradually restoring range of motion with a physiotherapist, and beginning gentle muscle activation. In the advanced phase (usually from week 6 onward): progressive strengthening, improving control and stability, and a step-by-step return to full activity. With larger repairs — such as a tendon repair or ligament reconstruction — the full process takes several months.",
        ],
      },
      {
        heading: "Physiotherapy — a full partner in the result",
        paragraphs: [
          "The best surgical outcome is achieved when the repair meets structured rehabilitation. The physiotherapist adapts the exercises to the phase you are in, makes sure the load increases at the right pace, and accompanies you until full function returns. Consistency with the home exercises — even when you improve and they become 'boring' — is what separates a good recovery from an excellent one.",
        ],
      },
      {
        heading: "Returning to routine: work, driving and sport",
        paragraphs: [
          "A return to desk work is usually possible within days to a couple of weeks; physical work takes longer. Driving — only once you are no longer taking strong pain medication and have full, safe control of the limb. The return to sport is gradual, according to the type of surgery and your actual progress, and is coordinated with the surgeon and the physiotherapist. These decisions are made together with you at follow-up — not by a date on the calendar.",
        ],
      },
    ],
    faq: [
      {
        question: "When may I shower after the surgery?",
        answer:
          "Showering is usually allowed after a few days, while keeping the dressing dry — for example with a waterproof cover. You will receive exact instructions at discharge, according to the type of dressing and repair.",
      },
      {
        question: "How long does swelling last after arthroscopy?",
        answer:
          "Moderate swelling is a natural part of recovery and can last several weeks, sometimes longer — especially after exertion. Icing, elevating the limb and graded activity all help. Unusual, increasing swelling justifies contacting the clinic.",
      },
      {
        question: "Can I skip physiotherapy if I already feel fine?",
        answer:
          "Not recommended. Feeling good is a stage along the way — but full range of motion, strength and stability are built later in the process. Stopping rehabilitation early is one of the common reasons for a partial result or re-injury.",
      },
    ],
  },
  ru: {
    title: "Послеоперационная реабилитация",
    subtitle:
      "Первый день после операции и рекомендации по реабилитации — этапы восстановления, физиотерапия и постепенное возвращение к активности.",
    intro:
      "Операция — лишь половина пути; вторая половина — реабилитация. Рекомендации на этой странице описывают общие принципы после артроскопической операции: чего ждать в первый день, как идёт восстановление от недели к неделе и когда возвращаться к активности. Персональные указания, которые вы получите после своей операции — с учётом сустава и типа вмешательства, — всегда имеют приоритет.",
    sections: [
      {
        heading: "Первый день: повязки, холод и покой",
        paragraphs: [
          "Домой вы вернётесь со стерильной повязкой на небольших разрезах, а иногда с косыночной поддержкой, ортопедическим ботинком или эластичным бинтом — в зависимости от оперированного сустава. Повязку держите чистой и сухой согласно полученным указаниям; не снимайте её самостоятельно.",
          "Холод — ваш лучший помощник в первые сутки: пакет со льдом, обёрнутый полотенцем (никогда не прикладывайте лёд прямо к коже), примерно на 15–20 минут, несколько раз в день. Держите оперированную конечность выше уровня сердца, насколько возможно, — это уменьшает отёк и боль.",
        ],
      },
      {
        heading: "Обезболивание — грамотно и вовремя",
        paragraphs: [
          "Умеренная боль после операции ожидаема и естественна; она хорошо контролируется обезболивающими, рекомендованными при выписке. Важное правило: принимайте препараты по расписанию, согласно указаниям, а не «догоняйте боль» — предотвратить боль легче, чем справиться с ней, когда она уже усилилась. Если выполнялась блокада нерва, помните: первоначальное облегчение пройдёт, когда её действие закончится, — подготовьте обезболивающее перед сном.",
        ],
      },
      {
        heading: "Когда звонить в клинику — признаки, требующие обращения",
        paragraphs: [
          "Нормальное восстановление идёт постепенно. Тем не менее есть признаки, при которых нужно связаться с клиникой или медицинской службой без промедления:",
        ],
        bullets: [
          "Высокая температура (выше 38°C) или озноб",
          "Сильная боль, не отвечающая на обезболивающие",
          "Распространяющееся покраснение, выделения или неприятный запах в области разрезов",
          "Необычный нарастающий отёк или резкая боль в голени",
          "Онемение или покалывание, которые не проходят",
        ],
        note: "При любом сомнении лучше позвонить и спросить. Для этого мы и существуем.",
      },
      {
        heading: "Рекомендации по реабилитации: этап за этапом",
        paragraphs: [
          "Реабилитация после артроскопии идёт поэтапно, и каждый этап строится на предыдущем. Сроки различаются в зависимости от сустава и типа вмешательства, но принцип неизменен:",
          "В первые недели (обычно 1–2): защита зоны операции, уменьшение отёка и мягкие контролируемые движения по указаниям. Далее (обычно недели 2–6): постепенное восстановление объёма движений с физиотерапевтом и начало мягкой активации мышц. На продвинутом этапе (обычно с 6-й недели): прогрессирующее укрепление, улучшение контроля и стабильности, поэтапное возвращение к полной активности. При больших вмешательствах — таких как шов сухожилия или реконструкция связки — полный процесс занимает несколько месяцев.",
        ],
      },
      {
        heading: "Физиотерапия — полноправный партнёр результата",
        paragraphs: [
          "Лучший результат операции достигается, когда хирургическое восстановление встречается со структурированной реабилитацией. Физиотерапевт подбирает упражнения под ваш текущий этап, следит, чтобы нагрузка росла в правильном темпе, и сопровождает вас до полного возвращения функции. Постоянство домашних упражнений — даже когда становится лучше и они кажутся «скучными» — и есть то, что отличает хорошее восстановление от отличного.",
        ],
      },
      {
        heading: "Возвращение к привычной жизни: работа, вождение и спорт",
        paragraphs: [
          "К офисной работе обычно возвращаются через несколько дней — пару недель; физическая работа требует больше времени. Вождение — только когда вы уже не принимаете сильные обезболивающие и полностью и уверенно контролируете конечность. Возвращение к спорту происходит постепенно, в зависимости от типа операции и фактического прогресса, по согласованию с хирургом и физиотерапевтом. Эти решения принимаются вместе с вами на контрольном осмотре — а не по дате в календаре.",
        ],
      },
    ],
    faq: [
      {
        question: "Когда можно принимать душ после операции?",
        answer:
          "Обычно душ разрешается через несколько дней — при условии, что повязка остаётся сухой, например под водонепроницаемой защитой. Точные указания вы получите при выписке, в зависимости от типа повязки и вмешательства.",
      },
      {
        question: "Сколько держится отёк после артроскопии?",
        answer:
          "Умеренный отёк — естественная часть восстановления; он может сохраняться несколько недель, иногда дольше, особенно после нагрузки. Помогают холод, возвышенное положение конечности и дозированная активность. Необычный нарастающий отёк — повод обратиться в клинику.",
      },
      {
        question: "Можно ли бросить физиотерапию, если я уже хорошо себя чувствую?",
        answer:
          "Не рекомендуется. Хорошее самочувствие — лишь этап пути: полный объём движений, сила и стабильность нарабатываются позже. Раннее прекращение реабилитации — одна из частых причин неполного результата или повторной травмы.",
      },
    ],
  },
};
