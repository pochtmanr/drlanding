import type { Locale, ServicePageContent } from "@/content/types";

export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "הזרקת סטרואידים (קורטיזון)",
    subtitle:
      "ההקלה המהירה ביותר שיש לדלקת מפרק כואבת — כשמשתמשים בה נכון, במינון נכון ובתדירות שפויה.",
    intro:
      "הזרקת סטרואידים — 'זריקת קורטיזון' בלשון היומיום — היא הוותיקה והמוכרת שבהזרקות למפרקים, ולא בכדי: כשמפרק דלקתי וכואב משבית אתכם, מעט מאוד טיפולים משתווים אליה במהירות ההקלה. אבל בדיוק בגלל העוצמה שלה, היא דורשת שימוש מושכל: בהתוויה נכונה, בתדירות מוגבלת וכחלק מתוכנית — לא כפתרון קבע.",
    sections: [
      {
        heading: "איך עובדת הזרקת סטרואידים?",
        paragraphs: [
          "קורטיקוסטרואידים הם נוגדי הדלקת החזקים ברפואה. בהזרקה למפרק, החומר מגיע ישירות למקור הדלקת — בלי לעבור דרך כל הגוף כמו בכדורים — ומדכא במהירות את התהליך הדלקתי: הנפיחות יורדת, הכאב נרגע, והתנועה משתחררת.",
          "לרוב משולב בהזרקה גם חומר אלחוש מקומי, כך שהקלה מסוימת מורגשת כבר בדקות הראשונות. השפעת הסטרואיד עצמו מתפתחת בימים שאחרי ההזרקה.",
        ],
      },
      {
        heading: "מתי הזרקת סטרואידים היא הבחירה הנכונה?",
        paragraphs: [
          "הכוח של ההזרקה הוא במצבים דלקתיים פעילים, כשהמטרה היא לשבור מעגל כאב חריף:",
        ],
        bullets: [
          "התלקחות כואבת של שחיקת מפרק (ארתרוזיס) בברך, בכתף או בקרסול",
          "דלקות סביב מפרקיות: דלקת כיסי הריר (בורסיטיס), 'כתף קפואה' ועוד",
          "דלקת גידים עיקשת שאינה נרגעת בטיפול בסיסי",
          "כשצריך חלון של הקלה כדי לאפשר פיזיותרפיה אפקטיבית",
        ],
        note: "זה הרעיון המרכזי: ההזרקה אינה מטרה בפני עצמה אלא פותחת דלת — היא מרגיעה את הדלקת כדי שהשיקום האמיתי, חיזוק ותנועה, יוכל לקרות.",
      },
      {
        heading: "כמה פעמים אפשר? — גבולות התדירות",
        paragraphs: [
          "כאן נדרשת שקיפות מלאה: לסטרואידים בהזרקות חוזרות ותכופות יש מחיר. הזרקות מרובות לאותו מפרק עלולות, לאורך זמן, להחליש רקמות ואף לפגוע בסחוס — בדיוק במה שבאנו להגן עליו.",
          "לכן הכלל המקובל הוא ריווח של חודשים בין הזרקות לאותו מפרק, והימנעות מהפיכתן לפתרון שגרתי. אם אתם מוצאים את עצמכם 'חיים מזריקה לזריקה' — זה איתות שהגיע הזמן לחשוב על האסטרטגיה: טיפול ביולוגי, פיזיותרפיה אינטנסיבית יותר, או במקרים מתאימים פתרון ניתוחי.",
          "ד\"ר דובנקו מקפיד על הגישה הזו: סטרואיד הוא כלי מצוין — בתנאי שהוא נשאר כלי, ולא הופך לתוכנית.",
        ],
      },
      {
        heading: "ההליך, ההחלמה ותופעות הלוואי",
        paragraphs: [
          "ההזרקה מתבצעת במרפאה ואורכת דקות: חיטוי, הזרקה מדויקת למפרק או לרקמה הדלקתית, ומנוחה קצרה. הביתה הולכים באופן עצמאי, ומומלץ יום־יומיים של פעילות מתונה.",
          "תופעות הלוואי השכיחות מקומיות וחולפות: רגישות באזור ההזרקה, ולעיתים 'התלקחות' קצרה של כאב ביום־יומיים הראשונים לפני שההקלה מתייצבת. אצל חולי סוכרת ייתכן טלטול זמני באיזון הסוכר — חשוב לעדכן את הרופא מראש.",
        ],
        note: "המידע כאן כללי. ההחלטה אם הזרקת סטרואידים מתאימה לכם, ובאיזו תדירות אם בכלל, מתקבלת בבדיקה אישית אצל ד\"ר דובנקו.",
      },
    ],
    faq: [
      {
        question: "כמה מהר מרגישים הקלה אחרי זריקת קורטיזון?",
        answer:
          "אם שולב חומר אלחוש, הקלה ראשונית מורגשת מיד והיא זמנית. השפעת הסטרואיד עצמה מתפתחת בדרך כלל בתוך ימים ספורים ומגיעה לשיאה תוך שבוע־שבועיים. משך ההקלה משתנה — משבועות עד חודשים, לפי המצב.",
      },
      {
        question: "למה מגבילים את מספר הזריקות?",
        answer:
          "כי לצד היעילות, לסטרואידים בחשיפה חוזרת יש השפעות מצטברות על הרקמות — היחלשות גידים ופגיעה אפשרית בסחוס. ריווח של חודשים בין הזרקות ושימוש בהן רק כשיש הצדקה ברורה שומרים על היחס הנכון בין תועלת לסיכון.",
      },
      {
        question: "זריקת קורטיזון או חומצה היאלורונית — מה עדיף?",
        answer:
          "אלה כלים שונים: קורטיזון מצטיין בכיבוי מהיר של דלקת פעילה; חומצה היאלורונית משפרת סיכוך לאורך זמן ומתאימה לניהול שחיקה כרונית. לעיתים נכון להתחיל בסטרואיד כדי להרגיע התלקחות, ולהמשיך בטיפול ארוך טווח אחר. הבחירה נגזרת מהאבחנה.",
      },
    ],
  },
  en: {
    title: "Steroid (Cortisone) Injection",
    subtitle:
      "The fastest relief there is for a painful, inflamed joint — when used correctly, at the right dose and at a sensible frequency.",
    intro:
      "The steroid injection — the everyday \"cortisone shot\" — is the oldest and best known of the joint injections, and not without reason: when an inflamed, painful joint puts you out of action, very few treatments match it for speed of relief. But precisely because of its power, it demands judicious use: for the right indication, at a limited frequency and as part of a plan — not as a permanent solution.",
    sections: [
      {
        heading: "How Does a Steroid Injection Work?",
        paragraphs: [
          "Corticosteroids are the strongest anti-inflammatories in medicine. Injected into the joint, the substance reaches the source of the inflammation directly — without passing through the whole body as pills do — and rapidly suppresses the inflammatory process: the swelling subsides, the pain settles and movement frees up.",
          "A local anesthetic is usually combined in the injection, so some relief is felt within the first minutes. The effect of the steroid itself develops over the days following the injection.",
        ],
      },
      {
        heading: "When Is a Steroid Injection the Right Choice?",
        paragraphs: [
          "The injection's strength is in active inflammatory conditions, when the goal is to break a cycle of acute pain:",
        ],
        bullets: [
          "A painful flare-up of joint wear (arthrosis) in the knee, shoulder or ankle",
          "Peri-articular inflammations: bursitis, \"frozen shoulder\" and others",
          "Stubborn tendon inflammation that does not settle with basic treatment",
          "When a window of relief is needed to enable effective physiotherapy",
        ],
        note: "This is the central idea: the injection is not a goal in itself but a door-opener — it calms the inflammation so that the real rehabilitation, strengthening and movement, can happen.",
      },
      {
        heading: "How Many Times Is Allowed? — the Frequency Limits",
        paragraphs: [
          "Full transparency is required here: repeated, frequent steroid injections come at a price. Multiple injections into the same joint can, over time, weaken tissues and even damage the cartilage — exactly what we came to protect.",
          "The accepted rule is therefore an interval of months between injections into the same joint, and avoiding turning them into a routine solution. If you find yourself \"living from shot to shot\" — that is a signal that it is time to rethink the strategy: biological treatment, more intensive physiotherapy, or in suitable cases a surgical solution.",
          "Dr. Dubenko is strict about this approach: a steroid is an excellent tool — provided it remains a tool, and does not become the plan.",
        ],
      },
      {
        heading: "The Procedure, Recovery and Side Effects",
        paragraphs: [
          "The injection is performed in the clinic and takes minutes: disinfection, a precise injection into the joint or the inflamed tissue, and a short rest. You go home independently, and a day or two of moderate activity is recommended.",
          "The common side effects are local and passing: tenderness at the injection site, and sometimes a brief \"flare\" of pain in the first day or two before the relief settles in. In diabetic patients a temporary disturbance of sugar balance is possible — it is important to inform the doctor in advance.",
        ],
        note: "The information here is general. The decision whether a steroid injection suits you, and at what frequency if at all, is made at a personal examination with Dr. Dubenko.",
      },
    ],
    faq: [
      {
        question: "How quickly is relief felt after a cortisone injection?",
        answer:
          "If an anesthetic was combined, initial relief is felt immediately and is temporary. The steroid's own effect usually develops within a few days and peaks within a week or two. The duration of relief varies — from weeks to months, depending on the condition.",
      },
      {
        question: "Why is the number of injections limited?",
        answer:
          "Because alongside their effectiveness, steroids with repeated exposure have cumulative effects on the tissues — weakening of tendons and possible damage to cartilage. Spacing injections months apart and using them only with clear justification keeps the benefit-risk balance right.",
      },
      {
        question: "Cortisone or hyaluronic acid — which is better?",
        answer:
          "They are different tools: cortisone excels at rapidly extinguishing active inflammation; hyaluronic acid improves lubrication over time and suits the management of chronic wear. Sometimes it is right to start with a steroid to calm a flare-up, and continue with a different long-term treatment. The choice follows from the diagnosis.",
      },
    ],
  },
  ru: {
    title: "Инъекция стероидов (кортизона)",
    subtitle:
      "Самое быстрое облегчение при воспалённом болезненном суставе — если применять его правильно, в нужной дозе и с разумной частотой.",
    intro:
      "Инъекция стероидов — «укол кортизона» в обиходе — самая давняя и известная из внутрисуставных инъекций, и не зря: когда воспалённый, болезненный сустав выводит вас из строя, очень немногие методы сравнятся с ней по скорости облегчения. Но именно из-за её силы она требует взвешенного применения: по правильным показаниям, с ограниченной частотой и как часть программы — а не как постоянное решение.",
    sections: [
      {
        heading: "Как работает инъекция стероидов?",
        paragraphs: [
          "Кортикостероиды — самые мощные противовоспалительные средства в медицине. При инъекции в сустав препарат попадает прямо к источнику воспаления — не проходя через весь организм, как таблетки, — и быстро подавляет воспалительный процесс: отёк спадает, боль стихает, движение освобождается.",
          "Обычно в инъекцию добавляют местный анестетик, поэтому некоторое облегчение чувствуется уже в первые минуты. Эффект самого стероида развивается в течение нескольких дней после укола.",
        ],
      },
      {
        heading: "Когда инъекция стероидов — правильный выбор?",
        paragraphs: [
          "Сила инъекции — в активных воспалительных состояниях, когда цель — разорвать круг острой боли:",
        ],
        bullets: [
          "Болезненное обострение износа сустава (артроза) в колене, плече или голеностопе",
          "Околосуставные воспаления: бурсит, «замороженное плечо» и другие",
          "Упорное воспаление сухожилий, не стихающее при базовом лечении",
          "Когда нужно окно облегчения, чтобы сделать возможной эффективную физиотерапию",
        ],
        note: "В этом главная идея: инъекция — не цель сама по себе, а открытая дверь. Она успокаивает воспаление, чтобы настоящая реабилитация — укрепление и движение — могла состояться.",
      },
      {
        heading: "Сколько раз можно? — пределы частоты",
        paragraphs: [
          "Здесь нужна полная прозрачность: у повторных и частых инъекций стероидов есть цена. Многократные уколы в один и тот же сустав со временем могут ослаблять ткани и даже повреждать хрящ — именно то, что мы пришли защищать.",
          "Поэтому принятое правило — интервал в несколько месяцев между инъекциями в один сустав и отказ от превращения их в рутинное решение. Если вы замечаете, что «живёте от укола до укола», — это сигнал, что пора пересмотреть стратегию: биологическое лечение, более интенсивная физиотерапия или, в подходящих случаях, хирургическое решение.",
          "Д-р Дубенко строго придерживается этого подхода: стероид — отличный инструмент, при условии, что он остаётся инструментом, а не становится планом.",
        ],
      },
      {
        heading: "Процедура, восстановление и побочные эффекты",
        paragraphs: [
          "Инъекция выполняется в клинике и занимает минуты: дезинфекция, точное введение в сустав или воспалённую ткань, короткий отдых. Домой вы идёте самостоятельно; рекомендуется день–два умеренной активности.",
          "Частые побочные эффекты местные и проходящие: чувствительность в месте укола, иногда короткая «вспышка» боли в первые день–два, прежде чем облегчение установится. У пациентов с диабетом возможно временное колебание уровня сахара — важно заранее сообщить врачу.",
        ],
        note: "Информация здесь общая. Решение, подходит ли вам инъекция стероидов и с какой частотой, если вообще, принимается на личном осмотре у д-ра Дубенко.",
      },
    ],
    faq: [
      {
        question: "Как быстро чувствуется облегчение после укола кортизона?",
        answer:
          "Если добавлен анестетик, первоначальное облегчение чувствуется сразу, но оно временное. Эффект самого стероида обычно развивается за несколько дней и достигает пика в течение одной–двух недель. Длительность облегчения различна — от недель до месяцев, в зависимости от состояния.",
      },
      {
        question: "Почему количество уколов ограничивают?",
        answer:
          "Потому что наряду с эффективностью стероиды при повторном воздействии оказывают накопительное влияние на ткани — ослабление сухожилий и возможное повреждение хряща. Интервалы в несколько месяцев между инъекциями и применение их только при ясном обосновании сохраняют правильный баланс пользы и риска.",
      },
      {
        question: "Кортизон или гиалуроновая кислота — что лучше?",
        answer:
          "Это разные инструменты: кортизон превосходно и быстро гасит активное воспаление; гиалуроновая кислота улучшает смазку надолго и подходит для ведения хронического износа. Иногда правильно начать со стероида, чтобы успокоить обострение, и продолжить другим долгосрочным лечением. Выбор вытекает из диагноза.",
      },
    ],
  },
};
