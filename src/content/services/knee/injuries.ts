import type { Locale, ServicePageContent } from "@/content/types";

export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "פציעות ברך",
    subtitle:
      "קרע במיניסקוס, פגיעה ברצועה הצולבת ונזק לסחוס — שלוש הפציעות שמביאות הכי הרבה מטופלים למרפאה, ומה עושים עם כל אחת מהן.",
    intro:
      "רוב פציעות הברך מתחילות ברגע אחד מוכר: סיבוב פתאומי במשחק, נחיתה לא טובה, או כאב שהתגנב בריצה ולא הסכים לעבור. הברך היא מפרק מתוחכם — מיניסקוסים, ארבע רצועות, סחוס ושרירים שעובדים יחד — וכל רכיב יכול להיפגע בדרכו שלו. הכרת הסימנים האופייניים עוזרת להבין מה קרה, ומה חשוב לעשות הלאה.",
    sections: [
      {
        heading: "קרע במיניסקוס",
        paragraphs: [
          "יצאתם סוף סוף לריצה — ופתאום כאב בצד הפנימי של הברך. או שבמשחק כדורגל הברך הסתובבה, נשמע 'קליק', ומאז היא מסרבת להתיישר עד הסוף. התסריטים האלה מוכרים לכל אורתופד, ולעיתים קרובות מאחוריהם עומדת אותה אבחנה: קרע במיניסקוס.",
          "המיניסקוסים הם שני 'בולמי זעזועים' סהרוניים שיושבים בין עצם הירך לשוק. קרע בהם הוא מפציעות הברך הנפוצות ביותר — אצל ספורטאים, אבל ממש לא רק. בגיל צעיר הקרע בדרך כלל חבלתי וחד; בגיל מבוגר יותר המיניסקוס נשחק בהדרגה, וקרע יכול להופיע גם בתנועה יומיומית תמימה.",
          "והשאלה הגדולה — צריך ניתוח? ממש לא בהכרח. ההחלטה תלויה בסוג הקרע ומיקומו, בגיל, בתסמינים וברמת הפעילות. קרעים רבים מגיבים היטב לטיפול שמרני, ואחרים — בעיקר קרעים שגורמים לנעילות — מטופלים ביעילות בארתרוסקופיה. ההמלצה: ייעוץ עם מומחה ברך, כדי לקבל החלטה מושכלת.",
        ],
      },
      {
        heading: "פגיעה ברצועה הצולבת",
        paragraphs: [
          "נחיתה ממשחק כדורסל, הגוף ממשיך לכיוון אחד והברך נשארת מאחור. כאב חד, תחושת 'פקיעה' עמוקה — ותוך שעות הברך נפוחה. התיאור הזה מחשיד מאוד לקרע ברצועה הצולבת הקדמית (ACL), אחת הפציעות המשמעותיות בספורט.",
          "לברך שתי רצועות צולבות — קדמית ואחורית — והקדמית נפגעת בתדירות גבוהה בהרבה. בלעדיה הברך מאבדת יציבות סיבובית: תחושת 'בריחה' בפניות ובבלימות, וקושי אמיתי לחזור לענפי ספורט עם שינויי כיוון.",
          "אצל מטופלים צעירים ופעילים הטיפול הוא במקרים רבים ניתוחי — שחזור הרצועה בארתרוסקופיה. אצל מטופלים פעילים פחות, או כשחוסר היציבות אינו מורגש ביומיום, ייתכן בהחלט מסלול שמרני עם שיקום ייעודי. גם כאן — הערכה אצל מומחה לפציעות ספורט וברך היא הצעד הראשון הנכון.",
        ],
      },
      {
        heading: "נזק לסחוס",
        paragraphs: [
          "הסחוס המפרקי הוא הציפוי החלק שמאפשר לברך להחליק בלי חיכוך. הוא יכול להיפגע בחבלה ישירה, כתוצאה נלווית לקרע מיניסקוס או רצועה שלא טופלו, או בתהליך שחיקה הדרגתי (ארתרוזיס). הסימנים האופייניים: כאב שמתגבר עם עומס, נפיחות חוזרת אחרי פעילות, ולעיתים תחושת חריקה.",
          "לסחוס יכולת ריפוי עצמית מוגבלת, ולכן חשוב לאבחן נזק מוקדם — כשעוד אפשר להאט את התהליך. הטיפול נע מהתאמת פעילות, חיזוק שרירים והזרקות למפרק, ועד פתרונות ארתרוסקופיים במקרים ממוקדים.",
        ],
      },
      {
        heading: "מתי לפנות למומחה?",
        paragraphs: [
          "לא כל כאב ברך דורש מומחה — אבל יש סימנים שלא כדאי להתעלם מהם:",
        ],
        bullets: [
          "נפיחות משמעותית, במיוחד אם הופיעה תוך שעות מהפציעה",
          "תחושת 'נעילה' — הברך נתקעת ולא מתיישרת או מתכופפת עד הסוף",
          "חוסר יציבות — הברך 'בורחת' בהליכה, בפניות או בירידת מדרגות",
          "כאב שנמשך מעבר לשבועיים־שלושה למרות מנוחה",
          "קושי לדרוך על הרגל או הגבלה ניכרת בתנועה",
        ],
        note: "המידע כאן הוא הסבר כללי ואינו תחליף לאבחון אישי. ד\"ר דובנקו — מנתח ברך עם 37 שנות ניסיון — יבדוק, יאבחן ויתאים לכם תוכנית טיפול, שמרנית או ניתוחית, לפי המצב האמיתי של הברך.",
      },
    ],
    faq: [
      {
        question: "איך יודעים אם הקרע במיניסקוס דורש ניתוח?",
        answer:
          "השיקולים המרכזיים: סוג הקרע ומיקומו (יש אזורים עם אספקת דם שמאפשרת ריפוי), הגיל, התסמינים ורמת הפעילות. קרע שגורם לנעילות חוזרות נוטה לדרוש ארתרוסקופיה; קרע שחיקתי יציב מגיב לרוב יפה לטיפול שמרני. ההחלטה מתקבלת אחרי בדיקה קלינית ו־MRI.",
      },
      {
        question: "הברך התנפחה מיד אחרי הפציעה — מה זה אומר?",
        answer:
          "נפיחות שמופיעה תוך שעות מרמזת בדרך כלל על דימום בתוך המפרק — ממצא שמחשיד לפגיעה ברצועה הצולבת, לקרע מיניסקוס באזור עשיר בכלי דם או לפגיעה בסחוס. זה סימן שמצדיק בדיקת מומחה בהקדם, גם אם הכאב נרגע אחרי כמה ימים.",
      },
      {
        question: "אפשר להמשיך להתאמן עם כאב ברך?",
        answer:
          "תלוי בכאב: כאב קל שחולף עם חימום ולא מחמיר — לרוב אפשר להמשיך בעומס מותאם. כאב שמתגבר תוך כדי פעילות, נפיחות אחרי אימון, נעילה או חוסר יציבות — אלה סימני עצירה ובירור. להתאמן 'דרך' פציעה מבנית עלול להפוך בעיה קטנה לגדולה.",
      },
    ],
  },
  en: {
    title: "Knee Injuries",
    subtitle:
      "Meniscus tears, cruciate ligament injuries and cartilage damage — the three injuries that bring the most patients to the clinic, and what to do about each.",
    intro:
      "Most knee injuries begin with one familiar moment: a sudden twist in a game, an awkward landing, or a pain that crept in during a run and refused to pass. The knee is a sophisticated joint — menisci, four ligaments, cartilage and muscles working together — and each component can be injured in its own way. Knowing the typical signs helps you understand what happened, and what matters next.",
    sections: [
      {
        heading: "Meniscus Tear",
        paragraphs: [
          "You finally went out for a run — and suddenly there's pain on the inner side of the knee. Or during a football game the knee twisted, there was a \"click\", and since then it refuses to straighten fully. Every orthopedic surgeon knows these scenarios, and behind them often stands the same diagnosis: a torn meniscus.",
          "The menisci are two crescent-shaped \"shock absorbers\" sitting between the thigh bone and the shin. A tear is one of the most common knee injuries — in athletes, but far from only them. At a young age the tear is usually traumatic and sharp; at an older age the meniscus wears gradually, and a tear can appear even during an innocent everyday movement.",
          "And the big question — is surgery needed? Not necessarily at all. The decision depends on the type and location of the tear, age, symptoms and activity level. Many tears respond well to conservative treatment, while others — mainly tears causing locking — are treated effectively with arthroscopy. The recommendation: consult a knee specialist to make an informed decision.",
        ],
      },
      {
        heading: "Cruciate Ligament Injury",
        paragraphs: [
          "A landing from a basketball jump, the body keeps going one way and the knee stays behind. Sharp pain, a deep \"popping\" sensation — and within hours the knee is swollen. This description is highly suspicious of a tear of the anterior cruciate ligament (ACL), one of the significant injuries in sport.",
          "The knee has two cruciate ligaments — anterior and posterior — and the anterior is injured far more frequently. Without it, the knee loses rotational stability: a \"giving way\" feeling in turns and sudden stops, and real difficulty returning to sports with changes of direction.",
          "In young, active patients the treatment is in many cases surgical — arthroscopic reconstruction of the ligament. In less active patients, or when the instability isn't felt in daily life, a conservative path with dedicated rehabilitation is entirely possible. Here too — an assessment by a specialist in sports and knee injuries is the right first step.",
        ],
      },
      {
        heading: "Cartilage Damage",
        paragraphs: [
          "Articular cartilage is the smooth coating that lets the knee glide without friction. It can be damaged by direct trauma, as a secondary consequence of an untreated meniscus or ligament tear, or through a gradual wear process (arthrosis). The typical signs: pain that grows with load, recurring swelling after activity, and sometimes a grinding sensation.",
          "Cartilage has limited capacity to heal itself, so diagnosing damage early matters — while the process can still be slowed. Treatment ranges from activity adjustment, muscle strengthening and joint injections, to arthroscopic solutions in selected cases.",
        ],
      },
      {
        heading: "When to See a Specialist?",
        paragraphs: [
          "Not every knee pain needs a specialist — but some signs should not be ignored:",
        ],
        bullets: [
          "Significant swelling, especially if it appeared within hours of the injury",
          "A \"locking\" sensation — the knee gets stuck and won't fully straighten or bend",
          "Instability — the knee \"gives way\" when walking, turning or descending stairs",
          "Pain lasting beyond two to three weeks despite rest",
          "Difficulty bearing weight on the leg or marked restriction of movement",
        ],
        note: "The information here is a general explanation and not a substitute for a personal diagnosis. Dr. Dubenko — a knee surgeon with 37 years of experience — will examine, diagnose and tailor a treatment plan for you, conservative or surgical, according to the real condition of your knee.",
      },
    ],
    faq: [
      {
        question: "How do I know whether my meniscus tear needs surgery?",
        answer:
          "The main considerations: the tear's type and location (some zones have a blood supply that allows healing), age, symptoms and activity level. A tear causing repeated locking tends to require arthroscopy; a stable degenerative tear usually responds well to conservative treatment. The decision is made after a clinical examination and MRI.",
      },
      {
        question: "My knee swelled up immediately after the injury — what does that mean?",
        answer:
          "Swelling appearing within hours usually suggests bleeding inside the joint — a finding suspicious of a cruciate ligament injury, a meniscus tear in a blood-rich zone, or cartilage damage. It's a sign that justifies a specialist examination soon, even if the pain settles after a few days.",
      },
      {
        question: "Can I keep training with knee pain?",
        answer:
          "It depends on the pain: mild pain that fades with warm-up and doesn't worsen — training can usually continue at an adjusted load. Pain that intensifies during activity, swelling after training, locking or instability — these are stop-and-investigate signs. Training \"through\" a structural injury can turn a small problem into a big one.",
      },
    ],
  },
  ru: {
    title: "Травмы колена",
    subtitle:
      "Разрыв мениска, повреждение крестообразной связки и повреждение хряща — три травмы, которые чаще всего приводят пациентов в клинику, и что делать с каждой из них.",
    intro:
      "Большинство травм колена начинается с одного знакомого момента: резкий разворот в игре, неудачное приземление или боль, которая подкралась на пробежке и отказалась проходить. Колено — сложный сустав: мениски, четыре связки, хрящ и мышцы работают вместе, и каждый элемент может пострадать по-своему. Знание типичных признаков помогает понять, что произошло, и что важно делать дальше.",
    sections: [
      {
        heading: "Разрыв мениска",
        paragraphs: [
          "Вы наконец вышли на пробежку — и вдруг боль по внутренней стороне колена. Или в футбольном матче колено повернулось, послышался «щелчок», и с тех пор оно не разгибается до конца. Эти сценарии знакомы каждому ортопеду, и за ними часто стоит один диагноз: разрыв мениска.",
          "Мениски — два полулунных «амортизатора» между бедренной костью и голенью. Их разрыв — одна из самых частых травм колена: у спортсменов, но далеко не только у них. В молодом возрасте разрыв обычно травматический и резкий; с возрастом мениск постепенно изнашивается, и разрыв может случиться даже при безобидном повседневном движении.",
          "И главный вопрос — нужна ли операция? Совсем не обязательно. Решение зависит от типа и расположения разрыва, возраста, симптомов и уровня активности. Многие разрывы хорошо отвечают на консервативное лечение, а другие — прежде всего вызывающие блокады — эффективно лечатся артроскопией. Рекомендация: консультация специалиста по колену, чтобы принять взвешенное решение.",
        ],
      },
      {
        heading: "Повреждение крестообразной связки",
        paragraphs: [
          "Приземление после прыжка в баскетболе: тело продолжает движение в одну сторону, а колено остаётся позади. Резкая боль, глубокое ощущение «хлопка» — и за считаные часы колено отекает. Такое описание очень подозрительно на разрыв передней крестообразной связки (ПКС) — одну из серьёзных травм в спорте.",
          "В колене две крестообразные связки — передняя и задняя, и передняя травмируется значительно чаще. Без неё колено теряет ротационную стабильность: ощущение «ухода» колена при поворотах и резких остановках и реальная трудность вернуться к видам спорта со сменой направления.",
          "У молодых активных пациентов лечение во многих случаях хирургическое — артроскопическая пластика связки. У менее активных пациентов, или когда нестабильность не ощущается в быту, вполне возможен консервативный путь со специальной реабилитацией. И здесь первый правильный шаг — оценка у специалиста по спортивным травмам и колену.",
        ],
      },
      {
        heading: "Повреждение хряща",
        paragraphs: [
          "Суставной хрящ — гладкое покрытие, позволяющее колену скользить без трения. Он может пострадать при прямой травме, как следствие нелеченного разрыва мениска или связки, либо в процессе постепенного износа (артроза). Типичные признаки: боль, нарастающая под нагрузкой, повторяющийся отёк после активности, иногда ощущение хруста.",
          "Способность хряща к самовосстановлению ограничена, поэтому важно диагностировать повреждение рано — пока процесс ещё можно замедлить. Лечение варьируется от коррекции активности, укрепления мышц и инъекций в сустав до артроскопических решений в отдельных случаях.",
        ],
      },
      {
        heading: "Когда обращаться к специалисту?",
        paragraphs: [
          "Не всякая боль в колене требует специалиста — но есть признаки, которые нельзя игнорировать:",
        ],
        bullets: [
          "Значительный отёк, особенно если он появился в первые часы после травмы",
          "Ощущение «блокады» — колено застревает и не разгибается или не сгибается до конца",
          "Нестабильность — колено «уходит» при ходьбе, поворотах или спуске по лестнице",
          "Боль, длящаяся больше двух-трёх недель несмотря на покой",
          "Трудность наступать на ногу или заметное ограничение движений",
        ],
        note: "Информация здесь — общее объяснение, а не замена личной диагностике. Д-р Дубенко — хирург колена с 37-летним опытом — осмотрит, поставит диагноз и подберёт вам план лечения, консервативный или хирургический, по реальному состоянию колена.",
      },
    ],
    faq: [
      {
        question: "Как понять, требует ли разрыв мениска операции?",
        answer:
          "Главные критерии: тип и расположение разрыва (в некоторых зонах есть кровоснабжение, позволяющее заживление), возраст, симптомы и уровень активности. Разрыв с повторяющимися блокадами обычно требует артроскопии; стабильный дегенеративный разрыв чаще всего хорошо отвечает на консервативное лечение. Решение принимается после клинического осмотра и МРТ.",
      },
      {
        question: "Колено отекло сразу после травмы — что это значит?",
        answer:
          "Отёк, появившийся в первые часы, обычно говорит о кровоизлиянии внутрь сустава — это подозрительно на повреждение крестообразной связки, разрыв мениска в зоне с хорошим кровоснабжением или повреждение хряща. Такой признак оправдывает скорый осмотр специалиста, даже если боль через несколько дней утихла.",
      },
      {
        question: "Можно ли продолжать тренироваться с болью в колене?",
        answer:
          "Зависит от боли: лёгкая боль, уходящая после разминки и не нарастающая, — обычно можно продолжать со сниженной нагрузкой. Боль, усиливающаяся во время активности, отёк после тренировки, блокады или нестабильность — сигналы остановиться и обследоваться. Тренировки «через» структурную травму могут превратить маленькую проблему в большую.",
      },
    ],
  },
};
