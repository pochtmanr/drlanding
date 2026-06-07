import type { ArticleContent, Locale } from "@/content/types";

export const article: Record<Locale, ArticleContent> = {
  he: {
    title: "מניעת פציעות ספורט: המדריך המעשי",
    description:
      "רוב פציעות הספורט אינן גזירת גורל. חימום נכון, ניהול עומסים, טכניקה, איזון שרירי והקשבה לאותות מוקדמים — כך מפחיתים משמעותית את הסיכון.",
    readingMinutes: 6,
    sections: [
      {
        paragraphs: [
          "רוב פציעות הספורט שמגיעות למרפאה אינן תוצאה של חוסר מזל — הן תוצאה של דפוסים שחוזרים על עצמם: עלייה חדה מדי בעומס האימונים, חימום חפוז, טכניקה שלא תוקנה מעולם, או כאב קטן שקיבל הוראה \"להתעלם\". החדשות הטובות: על כל אחד מהגורמים האלה אפשר להשפיע. אחרי 37 שנים של טיפול בספורטאים — חובבים ומקצוענים — אלה העקרונות שחוזרים שוב ושוב.",
        ],
      },
      {
        heading: "חימום: להכין את הגוף, לא לסמן וי",
        paragraphs: [
          "חימום אפקטיבי אינו שתי דקות של מתיחות סטטיות. המטרה היא להעלות בהדרגה את טמפרטורת השרירים, להעיר את מערכת העצבים ולהכין את המפרקים לטווחי התנועה שהאימון ידרוש מהם.",
          "התבנית הפשוטה: חמש עד עשר דקות של פעילות אירובית קלה, ואחריה תרגילים דינמיים שמחקים את תנועות הענף — סקוואטים במשקל גוף לפני ריצה, סיבובי כתפיים והנפות הדרגתיות לפני ענפי זריקה או שחייה. מתיחות סטטיות ארוכות שמרו לסיום האימון.",
        ],
      },
      {
        heading: "ניהול עומסים: הכלל שמונע את רוב הפציעות",
        paragraphs: [
          "הגורם השכיח ביותר לפציעות עומס הוא פשוט: יותר מדי, מהר מדי. הרקמות — שרירים, גידים ועצם — מסתגלות לעומס, אבל בקצב שלהן. כשהעומס עולה מהר מקצב ההסתגלות, מופיעות פציעות השחיקה: דלקות גידים, שברי מאמץ וכאבי מפרקים.",
          "כלל אצבע מקובל הוא להימנע מקפיצות חדות בנפח השבועי — עלייה הדרגתית של כ־10% בשבוע היא נקודת ייחוס שמרנית וטובה. לא פחות חשוב: לשלב שבועות קלים יזומים, לישון מספיק, ולזכור שגם לחץ נפשי ועייפות כללית הם חלק מהעומס הכולל על הגוף.",
        ],
        bullets: [
          "העלו נפח אימונים בהדרגה — לא בקפיצות",
          "שלבו שבוע קל אחרי כל שלושה-ארבעה שבועות עולים",
          "אחרי מחלה או הפסקה — חזרו מדרגה אחת למטה, לא מאיפה שעצרתם",
        ],
      },
      {
        heading: "טכניקה: השקעה שמחזירה את עצמה",
        paragraphs: [
          "טכניקה לקויה מרכזת עומס במקום הלא נכון: נחיתה עם ברך קורסת פנימה, הרמת משקולת עם גב מעוגל, תנועת חתירה שמגלגלת את הכתף קדימה. בטווח הקצר זה עובד — בטווח הארוך זו מתכונת לפציעה.",
          "כמה שיעורים עם מאמן או מדריך מוסמך, או אפילו צילום וידאו של עצמכם בתרגיל, מגלים בעיות שקל לתקן כשהן קטנות. זה נכון במיוחד כשמתחילים ענף חדש או חוזרים אליו אחרי שנים.",
        ],
      },
      {
        heading: "איזון שרירי: השלם חזק מסך חלקיו",
        paragraphs: [
          "פציעות רבות נולדות מחוסר איזון: ארבע ראשי חזק מול ירך אחורית חלשה, חזה מפותח מול מייצבי שכמה רדומים, שוקיים חזקות מול ישבן שלא לומד לעבוד. השרשרת נקרעת בחוליה החלשה — וכאב מופיע לפעמים רחוק מהמקור האמיתי.",
          "ההמלצה המעשית: שלבו אימון כוח מאוזן גם אם הענף שלכם אירובי, הקדישו תשומת לב לשרירים המייצבים — ליבה, ישבן, מייצבי שכמה — ואל תאמנו רק את מה שנראה במראה.",
        ],
      },
      {
        heading: "נעליים וציוד: בסיס שקל לזלזל בו",
        paragraphs: [
          "נעל ריצה שחוקה מאבדת את יכולת הבלימה שלה הרבה לפני שהיא נראית בלויה, ונעל שאינה מתאימה למבנה כף הרגל משנה את ציר התנועה של כל הרגל. החליפו נעלי ריצה בהתאם לשימוש, התאימו את הנעל לענף — נעל ריצה אינה נעל לחדר כושר — וודאו שציוד מגן, מחבט או אופניים מותאמים לגוף שלכם.",
        ],
      },
      {
        heading: "להקשיב לאותות המוקדמים",
        paragraphs: [
          "ההבדל בין אי־נוחות של אימון לכאב של פציעה מתחילה הוא אולי המיומנות החשובה ביותר של ספורטאי. כאב שמופיע באותו מקום שוב ושוב, כאב שמתגבר במהלך הפעילות, כאב שמשנה את הטכניקה שלכם או כאב שנמשך גם למחרת — אלה אינם \"חלק מהאימון\". זה הגוף שמבקש הפחתת עומס.",
          "פנייה מוקדמת לאבחון היא כמעט תמיד ההבדל בין שבוע-שבועיים של התאמת עומסים לבין חודשים של טיפול בפציעה שהתבססה.",
        ],
        note: "כאב שאינו חולף תוך ימים ספורים של מנוחה יחסית, נפיחות במפרק, תחושת חוסר יציבות או נעילה — אלה סימנים שמצדיקים בדיקת אורתופד. עדיף ביקור אחד מוקדם מדי מאשר אחד מאוחר מדי.",
      },
    ],
  },
  en: {
    title: "Preventing Sports Injuries: A Practical Guide",
    description:
      "Most sports injuries are not bad luck. Proper warm-up, load management, technique, muscular balance and listening to early pain signals — how to meaningfully reduce your risk.",
    readingMinutes: 6,
    sections: [
      {
        paragraphs: [
          "Most of the sports injuries that arrive at the clinic are not the result of bad luck — they are the result of recurring patterns: training load that climbed too steeply, a rushed warm-up, technique that was never corrected, or a small pain that was ordered to be ignored. The good news: every one of these factors can be influenced. After 37 years of treating athletes — amateurs and professionals alike — these are the principles that come up again and again.",
        ],
      },
      {
        heading: "Warm-up: Prepare the Body, Don't Tick a Box",
        paragraphs: [
          "An effective warm-up is not two minutes of static stretching. The goal is to gradually raise muscle temperature, wake up the nervous system and prepare the joints for the ranges of motion the session will demand of them.",
          "The simple template: five to ten minutes of light aerobic activity, followed by dynamic exercises that mimic the movements of your sport — bodyweight squats before a run, shoulder circles and progressive arm swings before throwing sports or swimming. Save long static stretches for the end of the session.",
        ],
      },
      {
        heading: "Load Management: The Rule That Prevents Most Injuries",
        paragraphs: [
          "The most common cause of overuse injuries is simple: too much, too soon. Tissues — muscles, tendons and bone — adapt to load, but at their own pace. When the load rises faster than the rate of adaptation, the overuse injuries appear: tendon inflammation, stress fractures and joint pain.",
          "A common rule of thumb is to avoid sharp jumps in weekly volume — a gradual increase of roughly 10% per week is a good, conservative reference point. Just as important: schedule deliberate easy weeks, sleep enough, and remember that mental stress and general fatigue are part of the total load on the body too.",
        ],
        bullets: [
          "Increase training volume gradually — not in jumps",
          "Schedule an easy week after every three to four building weeks",
          "After illness or a break — come back one step lower, not where you left off",
        ],
      },
      {
        heading: "Technique: An Investment That Pays for Itself",
        paragraphs: [
          "Poor technique concentrates load in the wrong place: landing with a knee collapsing inward, lifting a weight with a rounded back, a swim stroke that rolls the shoulder forward. In the short term it works — in the long term it is a recipe for injury.",
          "A few sessions with a qualified coach or instructor, or even a video recording of yourself performing an exercise, will reveal problems that are easy to fix while they are still small. This is especially true when taking up a new sport or returning to one after years away.",
        ],
      },
      {
        heading: "Muscular Balance: The Whole Is Stronger Than Its Parts",
        paragraphs: [
          "Many injuries are born of imbalance: strong quadriceps against weak hamstrings, a developed chest against dormant shoulder-blade stabilizers, strong calves against glutes that never learned to work. The chain tears at its weakest link — and pain sometimes appears far from the true source.",
          "The practical advice: include balanced strength training even if your sport is aerobic, give deliberate attention to the stabilizing muscles — core, glutes, scapular stabilizers — and don't train only what shows in the mirror.",
        ],
      },
      {
        heading: "Footwear and Equipment: A Foundation Easy to Underestimate",
        paragraphs: [
          "A worn-out running shoe loses its shock absorption long before it looks worn, and a shoe that doesn't match your foot structure changes the movement axis of the entire leg. Replace running shoes according to use, match the shoe to the sport — a running shoe is not a gym shoe — and make sure protective gear, racquets or bicycles are properly fitted to your body.",
        ],
      },
      {
        heading: "Listening to the Early Signals",
        paragraphs: [
          "Telling the discomfort of training apart from the pain of a beginning injury may be the most important skill an athlete can have. Pain that appears in the same spot again and again, pain that intensifies during activity, pain that changes your technique, or pain that is still there the next day — these are not \"part of training\". They are the body asking for less load.",
          "Seeking an early diagnosis is almost always the difference between a week or two of load adjustment and months of treating an injury that has taken hold.",
        ],
        note: "Pain that doesn't settle within a few days of relative rest, joint swelling, a feeling of instability or locking — these are signs that justify an orthopedic examination. Better one visit too early than one too late.",
      },
    ],
  },
  ru: {
    title: "Профилактика спортивных травм: практическое руководство",
    description:
      "Большинство спортивных травм — не невезение. Правильная разминка, управление нагрузкой, техника, мышечный баланс и внимание к ранним сигналам боли — как заметно снизить риск.",
    readingMinutes: 6,
    sections: [
      {
        paragraphs: [
          "Большинство спортивных травм, с которыми приходят в клинику, — не результат невезения, а результат повторяющихся сценариев: слишком резкий рост тренировочной нагрузки, скомканная разминка, так и не исправленная техника или небольшая боль, которой приказали «не мешать». Хорошая новость: на каждый из этих факторов можно повлиять. За 37 лет работы со спортсменами — любителями и профессионалами — именно эти принципы подтверждаются снова и снова.",
        ],
      },
      {
        heading: "Разминка: подготовить тело, а не поставить галочку",
        paragraphs: [
          "Эффективная разминка — это не две минуты статической растяжки. Задача — постепенно поднять температуру мышц, «разбудить» нервную систему и подготовить суставы к тем амплитудам движений, которых потребует тренировка.",
          "Простая схема: пять–десять минут лёгкой аэробной активности, затем динамические упражнения, повторяющие движения вашего вида спорта, — приседания с собственным весом перед бегом, круговые движения плечами и постепенные махи руками перед метательными видами или плаванием. Долгую статическую растяжку оставьте на конец занятия.",
        ],
      },
      {
        heading: "Управление нагрузкой: правило, предотвращающее большинство травм",
        paragraphs: [
          "Самая частая причина травм перегрузки проста: слишком много и слишком быстро. Ткани — мышцы, сухожилия и кость — адаптируются к нагрузке, но в собственном темпе. Когда нагрузка растёт быстрее, чем идёт адаптация, появляются травмы перенапряжения: воспаления сухожилий, стрессовые переломы и боли в суставах.",
          "Распространённое практическое правило — избегать резких скачков недельного объёма: постепенный прирост порядка 10% в неделю — хороший консервативный ориентир. Не менее важно: планируйте лёгкие недели, высыпайтесь и помните, что психологический стресс и общая усталость — тоже часть суммарной нагрузки на организм.",
        ],
        bullets: [
          "Наращивайте объём тренировок постепенно, без скачков",
          "После трёх-четырёх нагрузочных недель планируйте лёгкую неделю",
          "После болезни или перерыва возвращайтесь на ступень ниже, а не туда, где остановились",
        ],
      },
      {
        heading: "Техника: вложение, которое окупается",
        paragraphs: [
          "Неправильная техника концентрирует нагрузку не там, где нужно: приземление с «заваливающимся» внутрь коленом, подъём веса с округлённой спиной, гребок, уводящий плечо вперёд. На короткой дистанции это работает, на длинной — это рецепт травмы.",
          "Несколько занятий с квалифицированным тренером или даже видеозапись самого себя в упражнении выявляют проблемы, которые легко исправить, пока они малы. Это особенно актуально, когда вы начинаете новый вид спорта или возвращаетесь к нему спустя годы.",
        ],
      },
      {
        heading: "Мышечный баланс: целое сильнее суммы частей",
        paragraphs: [
          "Многие травмы рождаются из дисбаланса: сильная четырёхглавая мышца против слабой задней поверхности бедра, развитая грудь против «спящих» стабилизаторов лопатки, сильные икры против ягодичных мышц, которые так и не научились работать. Цепь рвётся в слабом звене — и боль порой появляется далеко от истинного источника.",
          "Практический совет: включайте сбалансированные силовые тренировки, даже если ваш вид спорта аэробный, уделяйте отдельное внимание мышцам-стабилизаторам — корпусу, ягодичным, стабилизаторам лопатки — и не тренируйте только то, что видно в зеркале.",
        ],
      },
      {
        heading: "Обувь и снаряжение: основа, которую легко недооценить",
        paragraphs: [
          "Изношенные беговые кроссовки теряют амортизацию задолго до того, как начинают выглядеть старыми, а обувь, не подходящая строению стопы, меняет ось движения всей ноги. Меняйте беговую обувь по мере износа, подбирайте обувь под вид спорта — беговые кроссовки не предназначены для тренажёрного зала — и убедитесь, что защитная экипировка, ракетка или велосипед подогнаны под ваше тело.",
        ],
      },
      {
        heading: "Слушайте ранние сигналы",
        paragraphs: [
          "Умение отличать обычный тренировочный дискомфорт от боли начинающейся травмы — возможно, самый важный навык спортсмена. Боль, которая снова и снова появляется в одном и том же месте, боль, усиливающаяся во время занятия, боль, из-за которой меняется техника, или боль, не прошедшая к следующему дню, — это не «часть тренировки». Это тело просит снизить нагрузку.",
          "Ранняя диагностика почти всегда означает разницу между неделей-двумя коррекции нагрузок и месяцами лечения закрепившейся травмы.",
        ],
        note: "Боль, не стихающая за несколько дней относительного покоя, отёк сустава, ощущение нестабильности или «заклинивания» — признаки, при которых стоит показаться ортопеду. Лучше один визит слишком рано, чем один слишком поздно.",
      },
    ],
  },
};
