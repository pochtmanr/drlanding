import type { Locale, ServicePageContent } from "@/content/types";

export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "הכנה לניתוח — מידע למטופל",
    subtitle:
      "בדיקות, תרופות, צום ומה להביא ביום הניתוח — מדריך מעשי שיעזור לכם להגיע מוכנים ורגועים.",
    intro:
      "הכנה טובה לניתוח עושה את כל ההבדל: היא מפחיתה דחיות של הרגע האחרון, מקצרת את ההמתנה ביום עצמו — ובעיקר, מאפשרת לכם להגיע רגועים. בעמוד זה ריכזנו את הצעדים העיקריים לקראת ניתוח ארתרוסקופי. ההנחיות כאן כלליות; ההנחיות האישיות שתקבלו מהמרפאה ומהמרכז הרפואי הן תמיד הקובעות.",
    sections: [
      {
        heading: "בדיקות לפני הניתוח",
        paragraphs: [
          "לקראת הניתוח תתבקשו להשלים סדרת בדיקות עדכניות — בדיקות דם, בדיקת לב (א.ק.ג) ולעיתים בדיקות נוספות בהתאם לגיל ולמצב הרפואי. מטופלים עם מחלות רקע מופנים בהתאם לצורך גם להערכת רופא מרדים או רופא פנימי לפני הניתוח.",
          "מומלץ לא לדחות את הבדיקות לרגע האחרון: השלמתן מוקדם משאירה זמן לטפל בכל ממצא שדורש בירור, בלי לדחות את מועד הניתוח.",
        ],
      },
      {
        heading: "תרופות — מה חשוב לספר מראש",
        paragraphs: [
          "בפגישת ההכנה חשוב למסור רשימה מלאה של כל מה שאתם נוטלים — תרופות מרשם, תרופות ללא מרשם, ויטמינים ותוספי תזונה. חלק מהתכשירים, ובראשם מדללי דם, מחייבים היערכות מראש: הפסקה או התאמה שלהם נעשית אך ורק לפי הנחיה רפואית מסודרת — לעולם לא על דעת עצמכם.",
          "ספרו גם על רגישויות ואלרגיות — לתרופות, לחומרי הרדמה או ללטקס — ועל כל ניתוח או אשפוז קודם.",
        ],
      },
      {
        heading: "צום לפני הניתוח",
        paragraphs: [
          "ניתוח בהרדמה מחייב הגעה בצום — ללא אוכל וללא שתייה — למשך הזמן שיוגדר בהנחיות שתקבלו. הקפדה על הצום היא תנאי בטיחות של ההרדמה: אי־עמידה בו תוביל לדחיית הניתוח. אם אתם נוטלים תרופות קבועות בבוקר, שאלו מראש אילו מהן ליטול ביום הניתוח ועם כמה מים.",
        ],
      },
      {
        heading: "מה להביא ביום הניתוח — רשימה מסודרת",
        paragraphs: [
          "כדאי להכין את הדברים ערב קודם, כדי שבוקר הניתוח יהיה רגוע:",
        ],
        bullets: [
          "תעודת זהות וכרטיס קופת חולים",
          "טופס ההתחייבות (טופס 17) ומסמכי האישור מהקופה או מהביטוח",
          "תוצאות כל בדיקות ההכנה והדמיות רלוונטיות",
          "רשימת התרופות הקבועות שלכם, כולל מינונים",
          "בגדים נוחים ורחבים — שקל ללבוש מעל חבישה או מתלה",
          "מלווה מבוגר — חובה: אסור לנהוג לאחר הרדמה",
          "השאירו בבית תכשיטים ודברי ערך; הסירו לק ג'ל מהציפורניים בהתאם להנחיות",
        ],
      },
      {
        heading: "להיערך בבית מראש",
        paragraphs: [
          "ההחלמה מתחילה ברגע שחוזרים הביתה — וכמה סידורים פשוטים מראש הופכים את הימים הראשונים לקלים בהרבה. ודאו שיש בבית מלאי של מצרכים בסיסיים, הכינו מקום מנוחה נוח עם כריות תמיכה, וקרבו אליו את מה שתצטרכו בהישג יד. אם הניתוח ברגל — חשבו מראש על מדרגות, על מקלחת בטוחה ועל מי שיוכל לעזור בימים הראשונים. תאמו מראש עזרה עם ילדים, חיות מחמד או הסעות.",
        ],
        note: "ככל שתסדירו יותר מראש — כך תוכלו להתמקד אחרי הניתוח בדבר החשוב באמת: החלמה שקטה.",
      },
      {
        heading: "שאלות פתוחות? זה הזמן לשאול",
        paragraphs: [
          "אל תישארו עם סימני שאלה ליום הניתוח. כל שאלה — על ההרדמה, על משך ההחלמה הצפוי, על חזרה לעבודה או על התרופות — מוזמנת ומקבלת מענה בפגישת ההכנה או בשיחה עם המרפאה. מטופל שמבין את התהליך מגיע רגוע יותר — וזה ניכר גם בהחלמה.",
        ],
      },
    ],
    faq: [
      {
        question: "האם מותר ליטול את התרופות הקבועות שלי בבוקר הניתוח?",
        answer:
          "תלוי בתרופה. חלק מהתרופות נוטלים כרגיל עם מעט מים גם בצום, אחרות — ובמיוחד מדללי דם וטיפולי סוכרת — מחייבות הנחיה אישית מראש. אל תחליטו לבד: שאלו במרפאה או בפגישת ההכנה.",
      },
      {
        question: "האם חייבים מלווה ביום הניתוח?",
        answer:
          "כן. לאחר הרדמה אסור לנהוג ואסור להשתחרר ללא ליווי. דאגו מראש למלווה מבוגר שיחזיר אתכם הביתה, ועדיף שיהיה איתכם גם בלילה הראשון.",
      },
      {
        question: "מה קורה אם אני מרגיש לא טוב ימים ספורים לפני הניתוח?",
        answer:
          "עדכנו את המרפאה מיד — חום, שיעול או זיהום פעיל עלולים לחייב דחייה קצרה של הניתוח למען בטיחותכם. עדיף עדכון מוקדם מהפתעה בבוקר הניתוח.",
      },
    ],
  },
  en: {
    title: "Preparing for Surgery — Patient Information",
    subtitle:
      "Tests, medications, fasting and what to bring on the day of surgery — a practical guide to help you arrive prepared and calm.",
    intro:
      "Good preparation for surgery makes all the difference: it prevents last-minute postponements, shortens the waiting on the day itself — and above all, lets you arrive calm. This page gathers the main steps ahead of arthroscopic surgery. The guidance here is general; the personal instructions you receive from the clinic and the medical center always take precedence.",
    sections: [
      {
        heading: "Pre-operative tests",
        paragraphs: [
          "Ahead of surgery you will be asked to complete a set of up-to-date tests — blood tests, an ECG and sometimes additional tests depending on your age and medical condition. Patients with underlying conditions are referred, as needed, for an assessment by an anesthesiologist or internal medicine physician before surgery.",
          "It is best not to leave the tests to the last minute: completing them early leaves time to address any finding that needs clarification, without postponing the surgery date.",
        ],
      },
      {
        heading: "Medications — what to report in advance",
        paragraphs: [
          "At the preparation appointment, it is important to provide a complete list of everything you take — prescription medications, over-the-counter medicines, vitamins and supplements. Some preparations, blood thinners above all, require planning ahead: stopping or adjusting them is done only according to explicit medical instructions — never on your own initiative.",
          "Also report sensitivities and allergies — to medications, anesthetics or latex — and any previous surgery or hospitalization.",
        ],
      },
      {
        heading: "Fasting before surgery",
        paragraphs: [
          "Surgery under anesthesia requires arriving fasted — no food and no drink — for the period defined in the instructions you receive. Strict fasting is a safety condition of the anesthesia: failing to keep it will lead to the surgery being postponed. If you take regular morning medications, ask in advance which of them to take on the day of surgery and with how much water.",
        ],
      },
      {
        heading: "What to bring on the day of surgery — a checklist",
        paragraphs: [
          "It helps to prepare everything the evening before, so the morning of surgery stays calm:",
        ],
        bullets: [
          "ID card and your health fund card",
          "The payment commitment form (Form 17) and approval documents from your health fund or insurer",
          "Results of all pre-operative tests and relevant imaging",
          "A list of your regular medications, including doses",
          "Loose, comfortable clothing — easy to put on over a dressing or sling",
          "An adult escort — mandatory: driving after anesthesia is not allowed",
          "Leave jewelry and valuables at home; remove gel nail polish according to the instructions",
        ],
      },
      {
        heading: "Getting your home ready in advance",
        paragraphs: [
          "Recovery begins the moment you come home — and a few simple arrangements in advance make the first days much easier. Make sure the house is stocked with basics, prepare a comfortable resting spot with supporting pillows, and keep what you will need within easy reach. If the surgery is on a leg — think ahead about stairs, a safe shower and someone who can help in the first days. Arrange help with children, pets or rides in advance.",
        ],
        note: "The more you arrange ahead of time, the more you can focus after surgery on what really matters: a quiet recovery.",
      },
      {
        heading: "Open questions? Now is the time to ask",
        paragraphs: [
          "Don't carry question marks into the day of surgery. Every question — about the anesthesia, the expected recovery time, returning to work or your medications — is welcome and will be answered at the preparation appointment or in a call with the clinic. A patient who understands the process arrives calmer — and it shows in the recovery as well.",
        ],
      },
    ],
    faq: [
      {
        question: "May I take my regular medications on the morning of surgery?",
        answer:
          "It depends on the medication. Some are taken as usual with a little water even while fasting; others — especially blood thinners and diabetes treatments — require individual instructions in advance. Don't decide alone: ask the clinic or at the preparation appointment.",
      },
      {
        question: "Do I need an escort on the day of surgery?",
        answer:
          "Yes. After anesthesia you may not drive and may not be discharged unaccompanied. Arrange in advance for an adult escort to take you home, and preferably to stay with you through the first night.",
      },
      {
        question: "What if I feel unwell a few days before the surgery?",
        answer:
          "Inform the clinic immediately — fever, cough or an active infection may require a short postponement of the surgery for your safety. An early update is far better than a surprise on the morning of surgery.",
      },
    ],
  },
  ru: {
    title: "Подготовка к операции — информация для пациента",
    subtitle:
      "Обследования, лекарства, голод перед операцией и что взять с собой — практичная памятка, которая поможет прийти подготовленным и спокойным.",
    intro:
      "Хорошая подготовка к операции решает многое: она предотвращает переносы в последний момент, сокращает ожидание в день операции — а главное, позволяет прийти спокойным. На этой странице собраны основные шаги перед артроскопической операцией. Рекомендации здесь общие; персональные указания, которые вы получите в клинике и медицинском центре, всегда имеют приоритет.",
    sections: [
      {
        heading: "Предоперационные обследования",
        paragraphs: [
          "Перед операцией вас попросят пройти ряд актуальных обследований — анализы крови, ЭКГ, а иногда и дополнительные исследования в зависимости от возраста и состояния здоровья. Пациентов с сопутствующими заболеваниями при необходимости направляют на консультацию анестезиолога или терапевта до операции.",
          "Не откладывайте обследования на последний момент: если пройти их заранее, останется время разобраться с любой находкой, требующей уточнения, не перенося дату операции.",
        ],
      },
      {
        heading: "Лекарства — о чём важно сообщить заранее",
        paragraphs: [
          "На подготовительном приёме важно передать полный список всего, что вы принимаете, — рецептурные и безрецептурные препараты, витамины и пищевые добавки. Некоторые средства, в первую очередь разжижающие кровь, требуют подготовки заранее: их отмена или коррекция выполняется только по чёткому медицинскому указанию — никогда самостоятельно.",
          "Сообщите также о чувствительности и аллергиях — на лекарства, препараты для анестезии или латекс — и о любых прежних операциях и госпитализациях.",
        ],
      },
      {
        heading: "Голод перед операцией",
        paragraphs: [
          "Операция под анестезией требует прийти натощак — без еды и питья — в течение времени, указанного в полученных вами инструкциях. Строгое соблюдение голода — условие безопасности анестезии: его нарушение приведёт к переносу операции. Если вы принимаете постоянные утренние лекарства, заранее уточните, какие из них принять в день операции и с каким количеством воды.",
        ],
      },
      {
        heading: "Что взять с собой в день операции — список",
        paragraphs: [
          "Лучше собрать всё с вечера, чтобы утро операции прошло спокойно:",
        ],
        bullets: [
          "Удостоверение личности (теудат зеут) и карточку больничной кассы",
          "Гарантийное обязательство (форма 17) и документы об одобрении от кассы или страховой компании",
          "Результаты всех предоперационных обследований и снимки",
          "Список ваших постоянных лекарств с дозировками",
          "Свободную удобную одежду — чтобы легко надеть поверх повязки или косынки",
          "Взрослого сопровождающего — обязательно: после анестезии садиться за руль нельзя",
          "Украшения и ценности оставьте дома; гель-лак с ногтей снимите согласно инструкциям",
        ],
      },
      {
        heading: "Подготовьте дом заранее",
        paragraphs: [
          "Восстановление начинается в тот момент, когда вы возвращаетесь домой, — и несколько простых приготовлений заранее делают первые дни значительно легче. Убедитесь, что дома есть запас необходимого, подготовьте удобное место для отдыха с поддерживающими подушками и держите нужные вещи под рукой. Если операция на ноге — заранее подумайте о лестницах, безопасном душе и о том, кто сможет помочь в первые дни. Договоритесь заранее о помощи с детьми, домашними животными и поездками.",
        ],
        note: "Чем больше вы устроите заранее, тем больше после операции сможете сосредоточиться на действительно важном — спокойном восстановлении.",
      },
      {
        heading: "Остались вопросы? Самое время задать",
        paragraphs: [
          "Не оставляйте вопросы открытыми до дня операции. Любой вопрос — об анестезии, ожидаемых сроках восстановления, возвращении на работу или лекарствах — приветствуется, и на него ответят на подготовительном приёме или по телефону клиники. Пациент, понимающий процесс, приходит спокойнее — и это заметно и в восстановлении.",
        ],
      },
    ],
    faq: [
      {
        question: "Можно ли принять мои постоянные лекарства утром в день операции?",
        answer:
          "Зависит от препарата. Некоторые принимают как обычно, с небольшим количеством воды, даже натощак; другие — особенно разжижающие кровь и препараты от диабета — требуют индивидуальных указаний заранее. Не решайте сами: спросите в клинике или на подготовительном приёме.",
      },
      {
        question: "Обязателен ли сопровождающий в день операции?",
        answer:
          "Да. После анестезии нельзя садиться за руль и нельзя выписываться без сопровождения. Заранее договоритесь со взрослым сопровождающим, который отвезёт вас домой, — желательно, чтобы он остался с вами и в первую ночь.",
      },
      {
        question: "Что делать, если я почувствовал себя плохо за несколько дней до операции?",
        answer:
          "Сразу сообщите в клинику — температура, кашель или активная инфекция могут потребовать краткого переноса операции ради вашей безопасности. Раннее предупреждение куда лучше сюрприза утром в день операции.",
      },
    ],
  },
};
