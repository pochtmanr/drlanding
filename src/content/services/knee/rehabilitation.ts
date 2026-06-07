import type { Locale, ServicePageContent } from "@/content/types";

export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "שיקום אחרי ניתוח ברך",
    subtitle:
      "מהצעדים הראשונים אחרי הניתוח ועד החזרה למגרש — שלבי השיקום, טווחי הזמנים ומה תלוי בכם.",
    intro:
      "התוצאה של ניתוח ברך נקבעת פעמיים: פעם אחת בחדר הניתוח, ופעם שנייה — בחודשי השיקום שאחריו. שיקום מובנה ועקבי הוא מה שהופך ניתוח מוצלח לברך שעובדת באמת: יציבה, חזקה, וכזו שאפשר לסמוך עליה בכל צעד. כך נראית הדרך, שלב אחרי שלב — והיא משתנה כמובן לפי סוג הניתוח: אחרי כריתה חלקית של מיניסקוס היא קצרה יחסית, אחרי שחזור רצועה היא תהליך של חודשים ארוכים.",
    sections: [
      {
        heading: "שלב 1 — הימים הראשונים: שקט פעיל",
        paragraphs: [
          "המטרות הראשונות צנועות אך קריטיות: לשלוט בכאב ובנפיחות, להפעיל מחדש את שריר הארבע־ראשי ולהתחיל לכופף וליישר בעדינות. קירור, הגבהה ותרגילים פשוטים — כמו כיווץ הירך והרמת רגל ישרה — הם הלחם והחמאה של השלב הזה.",
          "הליכה מתחילה מוקדם, לרוב כבר ביום הניתוח, עם או בלי קביים לפי ההנחיות. תנועה מוקדמת ומבוקרת אינה מסכנת את הניתוח — להפך, היא מונעת נוקשות וקרישי דם ומאיצה את ההחלמה.",
        ],
      },
      {
        heading: "שלב 2 — שבועות 2–6: טווח תנועה ודפוס הליכה",
        paragraphs: [
          "עכשיו העבודה מתמקדת בשני יעדים: יישור מלא של הברך — תנאי להליכה תקינה — וכיפוף הולך וגדל. במקביל נגמלים מהקביים ומחזירים דפוס הליכה סימטרי, בלי צליעה 'שנדבקת' להרגל.",
          "בשלב הזה מצטרפים תרגילי חיזוק מתונים בשרשרת סגורה — כפיפות חלקיות, עבודה על משקל גוף — והפיזיותרפיסט מתאים את הקצב להתקדמות בפועל ולסוג הניתוח.",
        ],
      },
      {
        heading: "שלב 3 — חודשים 2–4: כוח ויציבות",
        paragraphs: [
          "הברך כבר נעה חופשי; עכשיו בונים את מה שיגן עליה לשנים — כוח. חיזוק הדרגתי של הארבע־ראשי, שרירי הירך האחורית והישבן, לצד תרגילי שיווי משקל ופרופריוספציה שמלמדים את הברך 'לדעת איפה היא' בכל רגע.",
          "לקראת סוף השלב מצטרפות פעילויות מחזוריות בעומס נמוך: אופניים, שחייה, הליכה מהירה. ריצה קלה בקו ישר — לרוב סביב החודש השלישי־רביעי אחרי שחזור רצועה, ומוקדם יותר אחרי ניתוחי מיניסקוס פשוטים.",
        ],
      },
      {
        heading: "שלב 4 — הדרך חזרה לספורט",
        paragraphs: [
          "החזרה לספורט אינה תאריך — היא מבחן יכולת. לפני חזרה לענפים עם קפיצות ושינויי כיוון, הברך צריכה להפגין כוח קרוב לרגל הבריאה, יציבות בנחיתות ושליטה בתרגול ספציפי לענף. אחרי שחזור רצועה צולבת, רף הזמן המקובל הוא שישה עד תשעה חודשים — וסבלנות כאן היא לא מותרות אלא ביטוח.",
        ],
        bullets: [
          "התקדמות לפי יכולת מוכחת, לא לפי לוח שנה",
          "נפיחות חוזרת או כאב מתמשך — איתות להאט ולעדכן את המטפלים",
          "תרגול ביתי יומיומי — המנוע האמיתי של השיקום",
        ],
        note: "ד\"ר דובנקו מלווה את השיקום בביקורות מתוזמנות ובקשר ישיר עם הפיזיותרפיסט המטפל, כך שהתוכנית מתעדכנת לפי הברך שלכם — לא לפי תבנית גנרית.",
      },
    ],
    faq: [
      {
        question: "כמה זמן נמשך השיקום אחרי ניתוח מיניסקוס?",
        answer:
          "אחרי כריתה חלקית, רוב המטופלים חוזרים לשגרה תוך שבועות בודדים ולספורט תוך כחודש־חודשיים. אחרי תפירת מיניסקוס התהליך ארוך יותר — הגבלות כיפוף ועומס בשבועות הראשונים, וחזרה לספורט בדרך כלל אחרי שלושה עד שישה חודשים. ההבדל נובע מהצורך להגן על התפר עד שהריפוי מתבסס.",
      },
      {
        question: "למה צריך שישה חודשים ויותר אחרי שחזור רצועה?",
        answer:
          "כי השתל עובר תהליך ביולוגי של הבשלה והשתלבות בעצם, והשרירים צריכים זמן כדי לחזור לכוח מלא. חזרה מוקדמת מדי לספורט תחרותי היא גורם סיכון מוכר לפציעה חוזרת — ולכן ההחלטה מתבססת על מבחני כוח ותפקוד, לא רק על לוח השנה.",
      },
      {
        question: "הברך עדיין מתנפחת אחרי מאמץ — זה תקין?",
        answer:
          "נפיחות קלה אחרי עלייה בעומס היא שכיחה בחודשי השיקום הראשונים, ובדרך כלל מגיבה לקירור ולהורדת עומס זמנית. נפיחות משמעותית, חוזרת או מלווה בכאב והגבלה — מצדיקה עדכון של הפיזיותרפיסט והרופא, כדי לכוונן את התוכנית.",
      },
    ],
  },
  en: {
    title: "Rehabilitation After Knee Surgery",
    subtitle:
      "From the first steps after surgery to the return to the field — the rehabilitation phases, typical timelines and what depends on you.",
    intro:
      "The result of knee surgery is determined twice: once in the operating room, and a second time — in the months of rehabilitation that follow. Structured, consistent rehabilitation is what turns a successful operation into a knee that truly works: stable, strong, and one you can trust with every step. Here is the road, stage by stage — and it naturally varies with the type of surgery: after a partial meniscectomy it is relatively short, after ligament reconstruction it is a process of many months.",
    sections: [
      {
        heading: "Phase 1 — the First Days: Active Quiet",
        paragraphs: [
          "The first goals are modest but critical: controlling pain and swelling, reactivating the quadriceps muscle and starting to bend and straighten gently. Cooling, elevation and simple exercises — like thigh contractions and straight-leg raises — are the bread and butter of this phase.",
          "Walking starts early, usually on the day of surgery itself, with or without crutches according to the instructions. Early, controlled movement does not endanger the operation — on the contrary, it prevents stiffness and blood clots and speeds up recovery.",
        ],
      },
      {
        heading: "Phase 2 — Weeks 2–6: Range of Motion & Gait",
        paragraphs: [
          "Now the work focuses on two goals: full extension of the knee — a precondition for normal walking — and steadily increasing flexion. In parallel, you wean off the crutches and restore a symmetrical gait, without a limp that \"sticks\" as a habit.",
          "At this stage, moderate closed-chain strengthening joins in — partial squats, body-weight work — and the physiotherapist adjusts the pace to actual progress and the type of surgery.",
        ],
      },
      {
        heading: "Phase 3 — Months 2–4: Strength & Stability",
        paragraphs: [
          "The knee now moves freely; it's time to build what will protect it for years — strength. Gradual strengthening of the quadriceps, hamstrings and glutes, alongside balance and proprioception exercises that teach the knee to \"know where it is\" at every moment.",
          "Toward the end of this phase, low-impact cyclic activities join in: cycling, swimming, brisk walking. Light running in a straight line — usually around the third or fourth month after ligament reconstruction, and earlier after simple meniscus procedures.",
        ],
      },
      {
        heading: "Phase 4 — the Road Back to Sport",
        paragraphs: [
          "Returning to sport is not a date — it is a test of ability. Before returning to sports with jumps and changes of direction, the knee must demonstrate strength close to the healthy leg, stability in landings and control in sport-specific drills. After cruciate ligament reconstruction, the accepted time bar is six to nine months — and patience here is not a luxury but insurance.",
        ],
        bullets: [
          "Progression by proven ability, not by the calendar",
          "Recurring swelling or persistent pain — a signal to slow down and update your caregivers",
          "Daily home exercise — the real engine of rehabilitation",
        ],
        note: "Dr. Dubenko accompanies the rehabilitation with scheduled check-ups and direct contact with the treating physiotherapist, so the plan is updated according to your knee — not a generic template.",
      },
    ],
    faq: [
      {
        question: "How long does rehabilitation take after meniscus surgery?",
        answer:
          "After a partial meniscectomy, most patients return to routine within a few weeks and to sport within a month or two. After a meniscus repair the process is longer — flexion and load restrictions in the first weeks, and a return to sport usually after three to six months. The difference stems from the need to protect the sutured tissue until healing consolidates.",
      },
      {
        question: "Why does it take six months or more after ligament reconstruction?",
        answer:
          "Because the graft goes through a biological process of maturing and integrating into the bone, and the muscles need time to regain full strength. Returning to competitive sport too early is a known risk factor for re-injury — so the decision is based on strength and function tests, not just the calendar.",
      },
      {
        question: "My knee still swells after exertion — is that normal?",
        answer:
          "Mild swelling after an increase in load is common in the first months of rehabilitation, and usually responds to cooling and a temporary load reduction. Significant swelling, recurring or accompanied by pain and restriction — justifies updating the physiotherapist and the doctor, to fine-tune the plan.",
      },
    ],
  },
  ru: {
    title: "Реабилитация после операции на колене",
    subtitle:
      "От первых шагов после операции до возвращения на поле — этапы реабилитации, типичные сроки и что зависит от вас.",
    intro:
      "Результат операции на колене определяется дважды: один раз в операционной и второй раз — в месяцы реабилитации после неё. Структурированная, последовательная реабилитация — то, что превращает успешную операцию в колено, которое действительно работает: стабильное, сильное, такое, на которое можно положиться на каждом шагу. Вот путь, этап за этапом — и он, конечно, зависит от вида операции: после частичной резекции мениска он сравнительно короткий, после пластики связки — процесс длиной в долгие месяцы.",
    sections: [
      {
        heading: "Этап 1 — первые дни: активный покой",
        paragraphs: [
          "Первые цели скромны, но критически важны: контролировать боль и отёк, заново включить четырёхглавую мышцу и начать осторожно сгибать и разгибать. Охлаждение, приподнятое положение и простые упражнения — напряжение бедра, подъём прямой ноги — хлеб насущный этого этапа.",
          "Ходьба начинается рано, обычно в день операции, с костылями или без — по инструкции. Раннее контролируемое движение не угрожает операции — напротив, оно предотвращает тугоподвижность и тромбы и ускоряет восстановление.",
        ],
      },
      {
        heading: "Этап 2 — недели 2–6: объём движений и походка",
        paragraphs: [
          "Теперь работа сосредоточена на двух целях: полное разгибание колена — условие нормальной ходьбы — и постепенно растущее сгибание. Параллельно вы отвыкаете от костылей и восстанавливаете симметричную походку, чтобы хромота не «прилипла» как привычка.",
          "На этом этапе подключаются умеренные укрепляющие упражнения в закрытой цепи — частичные приседания, работа с весом тела, — и физиотерапевт подстраивает темп под фактический прогресс и вид операции.",
        ],
      },
      {
        heading: "Этап 3 — месяцы 2–4: сила и стабильность",
        paragraphs: [
          "Колено уже движется свободно; пора строить то, что будет защищать его годами, — силу. Постепенное укрепление четырёхглавой мышцы, задней поверхности бедра и ягодиц, наряду с упражнениями на равновесие и проприоцепцию, которые учат колено «знать, где оно находится» в каждый момент.",
          "К концу этапа подключаются циклические нагрузки с низкой ударностью: велосипед, плавание, быстрая ходьба. Лёгкий бег по прямой — обычно к третьему-четвёртому месяцу после пластики связки, и раньше после простых операций на мениске.",
        ],
      },
      {
        heading: "Этап 4 — дорога обратно в спорт",
        paragraphs: [
          "Возвращение в спорт — не дата, а экзамен на состоятельность. Перед возвращением к видам спорта с прыжками и сменой направления колено должно показать силу, близкую к здоровой ноге, стабильность при приземлениях и контроль в упражнениях, специфичных для вашего вида спорта. После пластики крестообразной связки общепринятая планка — шесть–девять месяцев, и терпение здесь не роскошь, а страховка.",
        ],
        bullets: [
          "Прогресс по доказанной способности, а не по календарю",
          "Повторяющийся отёк или стойкая боль — сигнал замедлиться и сообщить лечащей команде",
          "Ежедневные домашние упражнения — настоящий двигатель реабилитации",
        ],
        note: "Д-р Дубенко сопровождает реабилитацию плановыми осмотрами и прямым контактом с лечащим физиотерапевтом, так что план обновляется по вашему колену, а не по шаблону.",
      },
    ],
    faq: [
      {
        question: "Сколько длится реабилитация после операции на мениске?",
        answer:
          "После частичной резекции большинство пациентов возвращаются к обычной жизни за несколько недель, а к спорту — за месяц-два. После шва мениска процесс дольше: ограничения сгибания и нагрузки в первые недели и возвращение в спорт обычно через три–шесть месяцев. Разница объясняется необходимостью защищать шов, пока заживление не закрепится.",
      },
      {
        question: "Почему после пластики связки нужно шесть месяцев и больше?",
        answer:
          "Потому что трансплантат проходит биологический процесс созревания и врастания в кость, а мышцам нужно время, чтобы вернуть полную силу. Слишком раннее возвращение в соревновательный спорт — известный фактор риска повторной травмы, поэтому решение основывается на тестах силы и функции, а не только на календаре.",
      },
      {
        question: "Колено всё ещё отекает после нагрузки — это нормально?",
        answer:
          "Лёгкий отёк после увеличения нагрузки — частое явление в первые месяцы реабилитации; обычно он отвечает на охлаждение и временное снижение нагрузки. Значительный отёк, повторяющийся или сопровождающийся болью и ограничением, — повод сообщить физиотерапевту и врачу, чтобы скорректировать план.",
      },
    ],
  },
};
