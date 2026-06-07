import type { Locale, ServicePageContent } from "@/content/types";

export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "שיקום אחרי ניתוח קרסול",
    subtitle:
      "מהימים הראשונים אחרי הניתוח ועד החזרה לספורט — שלבי השיקום, התקדמות הדריכה ומה שתלוי בכם.",
    intro:
      "ניתוח קרסול מוצלח הוא רק חצי מהדרך. החצי השני — השיקום — הוא שקובע אם הקרסול יחזור להיות מפרק יציב, חזק ובטוח. החדשות הטובות: שיקום הקרסול הוא תהליך מסודר עם שלבים ברורים, וכשעוקבים אחריו בסבלנות, רוב המטופלים חוזרים לפעילות מלאה. כך הוא נראה, שלב אחרי שלב.",
    sections: [
      {
        heading: "שלב 1 — הגנה והרגעה (השבועות הראשונים)",
        paragraphs: [
          "מטרת השלב הראשון צנועה אבל קריטית: לתת לרקמות שנותחו לְהחלים בשקט. הקרסול מוגן בקיבוע או במגף הליכה, הרגל מורמת כדי לצמצם נפיחות, והכאב מנוהל בהתאם להנחיות.",
          "כבר בשלב הזה השיקום מתחיל — בקטן: הנעת אצבעות, כיווץ שרירים סטטי ותרגילים עדינים לפי ההנחיה האישית. גם הברך והירך מקבלות תשומת לב, כדי שכל הרגל לא 'תירדם' בזמן שהקרסול מחלים.",
        ],
      },
      {
        heading: "שלב 2 — התקדמות הדריכה",
        paragraphs: [
          "התקדמות הדריכה — כמה משקל מותר להעמיס על הרגל ומתי — היא לב השיקום אחרי ניתוח קרסול, והיא תלויה בסוג הניתוח שבוצע. המסלול האופייני: מדריכה חלקית בעזרת קביים, דרך הגדלה הדרגתית של המשקל, ועד הליכה מלאה ללא עזרים.",
          "אין כאן מקום ליוזמות פרטיות, לשני הכיוונים: העמסה מוקדמת מדי מסכנת את התיקון הניתוחי, ועיכוב מיותר מקשה על השיקום ומחליש את הרגל. לוח הזמנים שתקבלו מד\"ר דובנקו מותאם לניתוח שלכם — והוא המחייב.",
        ],
        note: "כלל אצבע פשוט: כל שינוי במשטר הדריכה — רק לפי הנחיה. אם משהו כואב באופן חריג או שהנפיחות גוברת, עוצרים ומתייעצים.",
      },
      {
        heading: "שלב 3 — החזרת תנועה, כוח ושיווי משקל",
        paragraphs: [
          "כשהמפרק יציב דיו, מתחילה העבודה האמיתית: החזרת טווחי התנועה המלאים, חיזוק שרירי השוק וכף הרגל, ובנייה מחדש של שיווי המשקל. דווקא הרכיב האחרון — אימון שיווי משקל וחוש עומק — הוא הקריטי ביותר בקרסול, והוא שמגן עליכם מנקע חוזר.",
          "השלב הזה מתבצע בליווי פיזיותרפיסט, עם תוכנית שמתקדמת משבוע לשבוע: ממשטחים יציבים לבלתי יציבים, מתרגילים איטיים לתגובות מהירות.",
        ],
      },
      {
        heading: "שלב 4 — חזרה לפעילות ולספורט",
        paragraphs: [
          "החזרה לספורט אינה תאריך בלוח השנה — היא מדרגת יכולת. לפני חזרה לריצה, ולענפים עם קפיצות ושינויי כיוון בפרט, הקרסול צריך להפגין טווח תנועה מלא, כוח סימטרי לרגל השנייה ושיווי משקל בטוח.",
          "החזרה עצמה מדורגת: הליכה מהירה, ריצה קלה בקו ישר, תרגילי זריזות — ורק בסוף חזרה מלאה לענף. אצל ספורטאים, ד\"ר דובנקו מלווה את ההחלטה הזו יחד עם הצוות המטפל.",
        ],
      },
      {
        heading: "מה שתלוי בכם",
        paragraphs: [
          "שיקום מוצלח הוא שותפות. מהצד הרפואי — ניתוח מדויק, מעקב והנחיות ברורות. מהצד שלכם:",
        ],
        bullets: [
          "התמדה בתרגילים — גם בימים שבהם נדמה שאין התקדמות",
          "כיבוד מגבלות הדריכה והעומס בכל שלב",
          "הגעה למעקבים ולטיפולי הפיזיותרפיה",
          "סבלנות — קרסול נבנה מחדש בחודשים, לא בימים",
        ],
        note: "המידע כאן מתאר עקרונות כלליים. תוכנית השיקום שלכם נקבעת אישית לפי הניתוח שבוצע, גילכם ומטרותיכם — בליווי ד\"ר דובנקו והצוות המטפל.",
      },
    ],
    faq: [
      {
        question: "כמה זמן אהיה עם קביים אחרי ניתוח קרסול?",
        answer:
          "תלוי בסוג הניתוח: אחרי ארתרוסקופיה 'נקייה' הדריכה מתקדמת לרוב מהר יחסית, ואחרי ניתוח ייצוב או טיפול בסחוס — בהדרגה איטית יותר, לאורך שבועות. את לוח הזמנים המדויק תקבלו אחרי הניתוח, והוא מותאם למה שנעשה בפועל במפרק.",
      },
      {
        question: "מתי אוכל לחזור לנהוג?",
        answer:
          "כשאתם יכולים לדרוך במלוא המשקל בלי כאב משמעותי, לשלוט ברגל בביטחון וללחוץ על דוושה בתגובה מהירה — ובכפוף לכך שירדתם ממשככי כאבים שמשפיעים על הערנות. ברגל ימין מנותחת זה לוקח לרוב יותר זמן מאשר בשמאל. שאלו במעקב — התשובה אישית.",
      },
      {
        question: "הקרסול עדיין נפוח חודשים אחרי הניתוח — זה תקין?",
        answer:
          "נפיחות מסוימת, במיוחד בסוף היום או אחרי מאמץ, שכיחה גם חודשים אחרי ניתוח קרסול והולכת ופוחתת בהדרגה. לעומת זאת, נפיחות שמחמירה, מלווה בכאב גובר, אדמומיות או חום — מצדיקה פנייה מיידית לבדיקה.",
      },
    ],
  },
  en: {
    title: "Rehabilitation After Ankle Surgery",
    subtitle:
      "From the first days after surgery to the return to sport — the rehabilitation phases, weight-bearing progression and the part that depends on you.",
    intro:
      "A successful ankle operation is only half the journey. The other half — rehabilitation — is what determines whether the ankle becomes a stable, strong and confident joint again. The good news: ankle rehabilitation is an orderly process with clear phases, and when it is followed patiently, most patients return to full activity. Here is what it looks like, phase by phase.",
    sections: [
      {
        heading: "Phase 1 — Protection and Settling (the First Weeks)",
        paragraphs: [
          "The goal of the first phase is modest but critical: letting the operated tissues heal quietly. The ankle is protected in a splint or walking boot, the leg is elevated to reduce swelling, and pain is managed according to instructions.",
          "Rehabilitation already begins at this stage — in small ways: toe movements, static muscle contractions and gentle exercises according to your personal instructions. The knee and hip get attention too, so the whole leg doesn't \"fall asleep\" while the ankle heals.",
        ],
      },
      {
        heading: "Phase 2 — Weight-Bearing Progression",
        paragraphs: [
          "Weight-bearing progression — how much weight may be placed on the leg and when — is the heart of rehabilitation after ankle surgery, and it depends on the type of operation performed. The typical path: from partial weight-bearing with crutches, through a gradual increase of load, to full walking without aids.",
          "There is no room for private initiative here, in either direction: loading too early endangers the surgical repair, while unnecessary delay slows rehabilitation and weakens the leg. The timeline you receive from Dr. Dubenko is tailored to your operation — and it is the one that counts.",
        ],
        note: "A simple rule of thumb: any change in the weight-bearing regimen — only as instructed. If something hurts unusually or the swelling increases, stop and consult.",
      },
      {
        heading: "Phase 3 — Restoring Motion, Strength and Balance",
        paragraphs: [
          "Once the joint is stable enough, the real work begins: restoring full range of motion, strengthening the calf and foot muscles, and rebuilding balance. The last component — balance and proprioception training — is the most critical one in the ankle, and it is what protects you from a repeat sprain.",
          "This phase is carried out with a physiotherapist, following a program that progresses week by week: from stable surfaces to unstable ones, from slow exercises to quick reactions.",
        ],
      },
      {
        heading: "Phase 4 — Return to Activity and Sport",
        paragraphs: [
          "Returning to sport is not a date on the calendar — it is a level of ability. Before returning to running, and especially to sports with jumping and changes of direction, the ankle needs to demonstrate full range of motion, strength symmetrical to the other leg and confident balance.",
          "The return itself is graduated: brisk walking, light running in a straight line, agility drills — and only at the end a full return to the sport. For athletes, Dr. Dubenko accompanies this decision together with the treating team.",
        ],
      },
      {
        heading: "The Part That Depends on You",
        paragraphs: [
          "Successful rehabilitation is a partnership. From the medical side — precise surgery, follow-up and clear instructions. From your side:",
        ],
        bullets: [
          "Consistency with the exercises — even on days when progress seems invisible",
          "Respecting the weight-bearing and load limits at every phase",
          "Attending the follow-ups and physiotherapy sessions",
          "Patience — an ankle is rebuilt over months, not days",
        ],
        note: "The information here describes general principles. Your rehabilitation program is set personally according to the operation performed, your age and your goals — accompanied by Dr. Dubenko and the treating team.",
      },
    ],
    faq: [
      {
        question: "How long will I be on crutches after ankle surgery?",
        answer:
          "It depends on the type of operation: after a \"clean\" arthroscopy, weight-bearing usually progresses relatively quickly, while after stabilization surgery or cartilage treatment it advances more slowly, over weeks. You will receive the exact timeline after the operation, tailored to what was actually done in the joint.",
      },
      {
        question: "When can I drive again?",
        answer:
          "When you can bear full weight without significant pain, control the foot confidently and press a pedal with a quick reaction — and provided you are off painkillers that affect alertness. With an operated right leg this usually takes longer than with the left. Ask at the follow-up — the answer is personal.",
      },
      {
        question: "My ankle is still swollen months after surgery — is that normal?",
        answer:
          "Some swelling, especially at the end of the day or after exertion, is common even months after ankle surgery and gradually diminishes. By contrast, swelling that worsens, accompanied by increasing pain, redness or fever, justifies an immediate examination.",
      },
    ],
  },
  ru: {
    title: "Реабилитация после операции на голеностопе",
    subtitle:
      "От первых дней после операции до возвращения в спорт — этапы реабилитации, наращивание опоры на ногу и то, что зависит от вас.",
    intro:
      "Успешная операция на голеностопе — лишь половина пути. Вторая половина — реабилитация — определяет, станет ли голеностоп снова стабильным, сильным и уверенным суставом. Хорошая новость: реабилитация голеностопа — упорядоченный процесс с чёткими этапами, и при терпеливом следовании ему большинство пациентов возвращается к полной активности. Вот как он выглядит, этап за этапом.",
    sections: [
      {
        heading: "Этап 1 — защита и покой (первые недели)",
        paragraphs: [
          "Цель первого этапа скромная, но критически важная: дать прооперированным тканям спокойно зажить. Голеностоп защищён лонгетой или ортопедическим ботинком, ногу держат приподнятой для уменьшения отёка, боль контролируется по назначениям.",
          "Реабилитация начинается уже на этом этапе — с малого: движения пальцами, статические сокращения мышц и щадящие упражнения по индивидуальной инструкции. Колено и бедро тоже получают внимание, чтобы вся нога не «заснула», пока заживает голеностоп.",
        ],
      },
      {
        heading: "Этап 2 — наращивание опоры на ногу",
        paragraphs: [
          "Прогрессия опоры — сколько веса можно переносить на ногу и когда — сердце реабилитации после операции на голеностопе, и она зависит от вида выполненного вмешательства. Типичный путь: от частичной опоры с костылями, через постепенное увеличение нагрузки, до полной ходьбы без вспомогательных средств.",
          "Здесь нет места самодеятельности — в обе стороны: слишком ранняя нагрузка ставит под угрозу хирургическое восстановление, а лишнее промедление тормозит реабилитацию и ослабляет ногу. График, который вы получите от д-ра Дубенко, подобран под вашу операцию — и именно он обязателен.",
        ],
        note: "Простое правило: любое изменение режима опоры — только по указанию врача. Если что-то необычно болит или отёк нарастает — остановитесь и проконсультируйтесь.",
      },
      {
        heading: "Этап 3 — восстановление движения, силы и равновесия",
        paragraphs: [
          "Когда сустав достаточно стабилен, начинается настоящая работа: восстановление полного объёма движений, укрепление мышц голени и стопы и заново выстроенное равновесие. Именно последний компонент — тренировка равновесия и проприоцепции — самый важный для голеностопа: он защищает вас от повторного подворачивания.",
          "Этот этап проходит под руководством физиотерапевта по программе, которая усложняется от недели к неделе: от устойчивых поверхностей к неустойчивым, от медленных упражнений к быстрым реакциям.",
        ],
      },
      {
        heading: "Этап 4 — возвращение к активности и спорту",
        paragraphs: [
          "Возвращение в спорт — не дата в календаре, а уровень готовности. Перед возвращением к бегу, и особенно к видам спорта с прыжками и сменами направления, голеностоп должен показать полный объём движений, силу, симметричную второй ноге, и уверенное равновесие.",
          "Само возвращение поэтапное: быстрая ходьба, лёгкий бег по прямой, упражнения на ловкость — и лишь в конце полное возвращение в свой вид спорта. У спортсменов д-р Дубенко сопровождает это решение вместе с лечащей командой.",
        ],
      },
      {
        heading: "То, что зависит от вас",
        paragraphs: [
          "Успешная реабилитация — это партнёрство. С медицинской стороны — точная операция, наблюдение и ясные инструкции. С вашей стороны:",
        ],
        bullets: [
          "Регулярность упражнений — даже в дни, когда прогресс кажется невидимым",
          "Соблюдение ограничений опоры и нагрузки на каждом этапе",
          "Посещение контрольных осмотров и занятий физиотерапией",
          "Терпение — голеностоп восстанавливается месяцами, а не днями",
        ],
        note: "Информация здесь описывает общие принципы. Ваша программа реабилитации составляется индивидуально — по выполненной операции, возрасту и целям, в сопровождении д-ра Дубенко и лечащей команды.",
      },
    ],
    faq: [
      {
        question: "Сколько я буду ходить на костылях после операции на голеностопе?",
        answer:
          "Зависит от вида операции: после «чистой» артроскопии опора обычно наращивается сравнительно быстро, после стабилизирующей операции или лечения хряща — медленнее, в течение недель. Точный график вы получите после операции — он соответствует тому, что реально было сделано в суставе.",
      },
      {
        question: "Когда можно снова садиться за руль?",
        answer:
          "Когда вы можете полностью опираться на ногу без значимой боли, уверенно управлять стопой и быстро нажимать на педаль — и при условии, что вы не принимаете обезболивающие, влияющие на внимание. С прооперированной правой ногой это обычно занимает больше времени, чем с левой. Спросите на контрольном осмотре — ответ индивидуален.",
      },
      {
        question: "Голеностоп всё ещё отекает через несколько месяцев после операции — это нормально?",
        answer:
          "Умеренный отёк, особенно к концу дня или после нагрузки, нередок даже спустя месяцы после операции на голеностопе и постепенно уменьшается. А вот отёк, который нарастает, сопровождается усиливающейся болью, покраснением или температурой, требует немедленного осмотра.",
      },
    ],
  },
};
