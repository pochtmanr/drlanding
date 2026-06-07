import type { ArticleContent, Locale } from "@/content/types";

export const article: Record<Locale, ArticleContent> = {
  he: {
    title: "שיקום שעובד: איך מפיקים את המרב מהתהליך",
    description:
      "איכות השיקום קובעת את איכות התוצאה. התמדה לפני עצימות, שלבים מציאותיים, שינה ותזונה, עבודה נכונה עם הפיזיותרפיסט — וסימני האזהרה שחשוב לדווח עליהם.",
    readingMinutes: 6,
    sections: [
      {
        paragraphs: [
          "מנתחים אוהבים לומר שהניתוח הוא חצי מהעבודה — והחצי השני נמצא בידיים שלכם. זה נכון גם לשיקום אחרי פציעה ללא ניתוח: התוכנית הטובה ביותר שווה בדיוק כמו ההתמדה שבה מבצעים אותה. אחרי ליווי של אלפי מטופלים בתהליכי שיקום, אלה העקרונות שמבדילים בין שיקום טוב למצוין.",
        ],
      },
      {
        heading: "התמדה מנצחת עצימות",
        paragraphs: [
          "הטעות הנפוצה ביותר בשיקום היא דפוס של \"הכול או כלום\": שבוע של תרגול אינטנסיבי, ואחריו שבועיים של הזנחה — ואז ניסיון לפצות בעומס כפול. רקמה מחלימה מגיבה לגירוי עקבי ומדורג; היא אינה יודעת לעבוד עם קפיצות.",
          "עשרים דקות של תרגול יומי שקט מקדמות את ההחלמה יותר משעתיים הרואיות פעם בשבוע. קבעו לתרגילים מקום קבוע ביום — אחרי צחצוח שיניים, לפני ארוחת הערב — והפכו אותם להרגל שאינו תלוי במצב הרוח.",
        ],
      },
      {
        heading: "שלבים מציאותיים — וסבלנות לכל אחד מהם",
        paragraphs: [
          "כל שיקום בנוי משלבים: הרגעה והגנה, החזרת טווח תנועה, בניית כוח, ולבסוף חזרה לתפקוד מלא. לכל שלב יש מטרה משלו, וקיצור דרך באחד מהם גובה מחיר בשלב הבא — כוח שנבנה על מפרק נוקשה הוא כוח מוגבל, וחזרה לספורט בלי בסיס של כוח היא הזמנה לפציעה חוזרת.",
          "שאלו את הצוות המטפל מה מטרת השלב הנוכחי ומה הקריטריונים למעבר לשלב הבא. כשמבינים את ההיגיון, קל יותר לגייס סבלנות — וקל יותר לזהות התקדמות אמיתית גם כשהיא איטית.",
        ],
        bullets: [
          "הגדירו יחד עם המטפל יעד ברור לכל שלב",
          "מדדו התקדמות מול השבוע שעבר — לא מול היום שלפני הפציעה",
          "צפו לימים פחות טובים: הם חלק נורמלי מהעקומה, לא נסיגה",
        ],
      },
      {
        heading: "שינה ותזונה: חדר הניתוח השקט של הגוף",
        paragraphs: [
          "תיקון רקמות מתרחש בעיקר בשינה — בזמן שינה עמוקה הגוף מפריש הורמוני גדילה ומבצע את עבודת השיקום האמיתית. שבע עד תשע שעות שינה הן חלק מהטיפול, לא מותרות.",
          "גם לתזונה תפקיד: הקפידו על חלבון מספק לאורך היום — אבן הבניין של שריר וגיד — ועל תפריט מגוון. זה אינו דורש תוכניות מסובכות; ארוחות מסודרות שכוללות מקור חלבון, ירקות ופחמימה מלאה עושות את העבודה.",
        ],
      },
      {
        heading: "העבודה עם הפיזיותרפיסט: שותפות, לא שירות",
        paragraphs: [
          "הפיזיותרפיסט רואה אתכם שעה בשבוע; את שאר 167 השעות אתם מנהלים לבד. לכן המפתח הוא לצאת מכל מפגש עם הבנה מלאה: אילו תרגילים לבצע בבית, באיזה מינון, ומה ההרגשה התקינה במהלכם.",
          "דווחו בכנות — גם על תרגילים שלא ביצעתם וגם על כאב שהופיע. פיזיותרפיסט שמקבל תמונה אמיתית יכול לכוונן את התוכנית; פיזיותרפיסט שמקבל \"הכול בסדר\" מטפל בתמונה שאינה קיימת. ד\"ר דובנקו עובד בתיאום עם הפיזיותרפיסטים המטפלים, כך שהתוכנית הרפואית והשיקומית מתעדכנות יחד.",
        ],
      },
      {
        heading: "סימני אזהרה: מתי מרימים טלפון",
        paragraphs: [
          "כאב מתון ותחושת מאמץ הם חלק טבעי מהשיקום. אבל יש סימנים שאינם חלק מהתהליך, ועליהם חשוב לדווח לצוות המטפל בלי לחכות לביקורת הבאה.",
        ],
        bullets: [
          "כאב חד וחדש, שונה באופיו מהכאב המוכר",
          "נפיחות שמופיעה פתאום או מתגברת בעקביות",
          "אודם, חום מקומי או חום גוף — סימנים אפשריים לזיהום",
          "אובדן פתאומי של טווח תנועה או תחושת \"נעילה\" במפרק",
          "חוסר תחושה, נימול או חולשה שלא היו קודם",
        ],
        note: "ספק? עדיף שיחת טלפון אחת מיותרת מסיבוך שהתגלה מאוחר. הצוות המטפל מעדיף לשמוע מכם פעם אחת יותר מדי מאשר פעם אחת פחות מדי.",
      },
    ],
  },
  en: {
    title: "Rehabilitation That Works: Getting the Most Out of the Process",
    description:
      "The quality of rehabilitation determines the quality of the result. Consistency over intensity, realistic phases, sleep and nutrition, working well with your physiotherapist — and the warning signs worth reporting.",
    readingMinutes: 6,
    sections: [
      {
        paragraphs: [
          "Surgeons like to say that the operation is half the work — and the other half is in your hands. The same is true of rehabilitation after an injury without surgery: the best plan in the world is worth exactly as much as the consistency with which it is carried out. After accompanying thousands of patients through rehabilitation, these are the principles that separate a good recovery from an excellent one.",
        ],
      },
      {
        heading: "Consistency Beats Intensity",
        paragraphs: [
          "The most common mistake in rehabilitation is the \"all or nothing\" pattern: a week of intensive exercising, followed by two weeks of neglect — then an attempt to compensate with double the load. Healing tissue responds to consistent, graded stimulus; it does not know how to work with spikes.",
          "Twenty minutes of quiet daily practice advance recovery more than two heroic hours once a week. Give the exercises a fixed place in your day — after brushing your teeth, before dinner — and turn them into a habit that does not depend on your mood.",
        ],
      },
      {
        heading: "Realistic Phases — and Patience for Each One",
        paragraphs: [
          "Every rehabilitation is built of phases: calming and protection, restoring range of motion, building strength, and finally returning to full function. Each phase has its own goal, and a shortcut in one collects its price in the next — strength built on a stiff joint is limited strength, and returning to sport without a foundation of strength is an invitation to re-injury.",
          "Ask your care team what the goal of the current phase is and what the criteria are for moving to the next. When you understand the logic, patience is easier to find — and real progress is easier to recognize even when it is slow.",
        ],
        bullets: [
          "Define a clear goal for each phase together with your therapist",
          "Measure progress against last week — not against the day before the injury",
          "Expect off days: they are a normal part of the curve, not a setback",
        ],
      },
      {
        heading: "Sleep and Nutrition: The Body's Quiet Operating Room",
        paragraphs: [
          "Tissue repair happens mostly in sleep — during deep sleep the body releases growth hormone and does the real work of recovery. Seven to nine hours of sleep are part of the treatment, not a luxury.",
          "Nutrition plays its part too: make sure you get enough protein through the day — the building block of muscle and tendon — and keep your diet varied. This requires no complicated programs; orderly meals that include a protein source, vegetables and whole carbohydrates do the job.",
        ],
      },
      {
        heading: "Working with Your Physiotherapist: A Partnership, Not a Service",
        paragraphs: [
          "Your physiotherapist sees you one hour a week; the other 167 hours you manage on your own. The key, therefore, is to leave every session with full understanding: which exercises to do at home, at what dose, and what they should feel like.",
          "Report honestly — both the exercises you skipped and any pain that appeared. A physiotherapist who gets the real picture can fine-tune the plan; one who hears \"everything's fine\" is treating a picture that doesn't exist. Dr. Dubenko works in coordination with the treating physiotherapists, so the medical and rehabilitation plans are updated together.",
        ],
      },
      {
        heading: "Warning Signs: When to Pick Up the Phone",
        paragraphs: [
          "Moderate pain and a feeling of effort are a natural part of rehabilitation. But some signs are not part of the process, and they should be reported to your care team without waiting for the next scheduled visit.",
        ],
        bullets: [
          "Sharp new pain, different in character from the familiar one",
          "Swelling that appears suddenly or keeps increasing",
          "Redness, local warmth or fever — possible signs of infection",
          "Sudden loss of range of motion or a feeling of the joint \"locking\"",
          "Numbness, tingling or weakness that wasn't there before",
        ],
        note: "In doubt? One unnecessary phone call is better than a complication discovered late. Your care team would always rather hear from you one time too many than one time too few.",
      },
    ],
  },
  ru: {
    title: "Реабилитация, которая работает: как взять от процесса максимум",
    description:
      "Качество реабилитации определяет качество результата. Регулярность вместо интенсивности, реалистичные этапы, сон и питание, правильная работа с физиотерапевтом — и тревожные признаки, о которых важно сообщать.",
    readingMinutes: 6,
    sections: [
      {
        paragraphs: [
          "Хирурги любят повторять, что операция — это половина дела, а вторая половина — в ваших руках. То же относится и к реабилитации после травмы без операции: лучший в мире план стоит ровно столько, сколько постоянства в его выполнении. После сопровождения тысяч пациентов в процессе восстановления именно эти принципы отличают хорошую реабилитацию от отличной.",
        ],
      },
      {
        heading: "Регулярность побеждает интенсивность",
        paragraphs: [
          "Самая частая ошибка в реабилитации — схема «всё или ничего»: неделя интенсивных занятий, затем две недели бездействия — и попытка наверстать двойной нагрузкой. Заживающая ткань отвечает на постоянный, дозированный стимул; со скачками она работать не умеет.",
          "Двадцать минут спокойных ежедневных упражнений продвигают восстановление больше, чем два героических часа раз в неделю. Закрепите за упражнениями постоянное место в распорядке дня — после чистки зубов, перед ужином — и превратите их в привычку, не зависящую от настроения.",
        ],
      },
      {
        heading: "Реалистичные этапы — и терпение на каждом из них",
        paragraphs: [
          "Любая реабилитация состоит из этапов: успокоение и защита, восстановление объёма движений, наращивание силы и, наконец, возвращение к полноценной функции. У каждого этапа своя задача, и срезанный угол на одном этапе взимает плату на следующем: сила, построенная на тугоподвижном суставе, — ограниченная сила, а возвращение в спорт без силовой базы — приглашение к повторной травме.",
          "Спросите лечащую команду, какова цель текущего этапа и каковы критерии перехода к следующему. Когда логика понятна, терпение даётся легче — и настоящий прогресс виден даже тогда, когда он медленный.",
        ],
        bullets: [
          "Определите вместе с терапевтом ясную цель каждого этапа",
          "Сравнивайте прогресс с прошлой неделей, а не с днём до травмы",
          "Ожидайте неудачных дней: они нормальная часть кривой, а не откат",
        ],
      },
      {
        heading: "Сон и питание: тихая операционная организма",
        paragraphs: [
          "Восстановление тканей происходит главным образом во сне — в фазе глубокого сна организм выделяет гормон роста и выполняет основную работу по заживлению. Семь–девять часов сна — это часть лечения, а не роскошь.",
          "Питание тоже играет роль: следите за достаточным количеством белка в течение дня — это строительный материал мышц и сухожилий — и за разнообразием рациона. Сложные схемы не нужны: упорядоченные приёмы пищи с источником белка, овощами и цельными углеводами делают своё дело.",
        ],
      },
      {
        heading: "Работа с физиотерапевтом: партнёрство, а не услуга",
        paragraphs: [
          "Физиотерапевт видит вас один час в неделю; остальные 167 часов вы управляете процессом сами. Поэтому главное — уходить с каждой встречи с полным пониманием: какие упражнения делать дома, в какой дозировке и какие ощущения при этом нормальны.",
          "Рассказывайте честно — и о пропущенных упражнениях, и о появившейся боли. Физиотерапевт, который видит реальную картину, может скорректировать план; тот, кто слышит «всё в порядке», лечит картину, которой не существует. Д-р Дубенко работает в координации с лечащими физиотерапевтами, поэтому медицинский и реабилитационный планы обновляются вместе.",
        ],
      },
      {
        heading: "Тревожные признаки: когда звонить врачу",
        paragraphs: [
          "Умеренная боль и чувство усилия — естественная часть реабилитации. Но есть признаки, которые частью процесса не являются, и о них важно сообщить лечащей команде, не дожидаясь следующего планового визита.",
        ],
        bullets: [
          "Острая новая боль, по характеру не похожая на привычную",
          "Отёк, появившийся внезапно или стабильно нарастающий",
          "Покраснение, местный жар или температура — возможные признаки инфекции",
          "Внезапная потеря объёма движений или ощущение «заклинивания» сустава",
          "Онемение, покалывание или слабость, которых раньше не было",
        ],
        note: "Сомневаетесь? Один лишний звонок лучше, чем поздно обнаруженное осложнение. Лечащая команда всегда предпочтёт услышать вас на один раз больше, чем на один раз меньше.",
      },
    ],
  },
};
