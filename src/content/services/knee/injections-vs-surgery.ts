import type { Locale, ServicePageContent } from "@/content/types";

export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "הזרקות כחלופה לניתוח",
    subtitle:
      "לא כל ברך כואבת צריכה חדר ניתוח. מתי הזרקה היא הפתרון הנכון, מתי ניתוח — ואיך מחליטים.",
    intro:
      "אחת השאלות הנפוצות במרפאה: 'דוקטור, אפשר להסתדר בלי ניתוח?' והתשובה הכנה היא — לעיתים קרובות, כן. הזרקות למפרק הברך התפתחו מאוד בשנים האחרונות, ובמקרים המתאימים הן מציעות הקלה משמעותית בכאב ושיפור בתפקוד, בלי הסיכונים ותקופת ההחלמה של ניתוח. אבל יש גם מצבים שבהם הזרקה רק דוחה את הבלתי נמנע. היכולת להבחין בין המקרים — היא בדיוק התפקיד של מומחה.",
    sections: [
      {
        heading: "מתי הזרקה היא בחירה טובה?",
        paragraphs: [
          "ההזרקות מצליחות במיוחד במצבים שבהם הבעיה היא דלקת, שחיקה מוקדמת או כאב מכני — ולא נזק מבני שדורש תיקון:",
        ],
        bullets: [
          "שחיקת סחוס (ארתרוזיס) בדרגה קלה עד בינונית",
          "קרע מיניסקוס שחיקתי ויציב, ללא נעילות",
          "דלקות חוזרות ונפיחות על רקע עומס",
          "מטופלים שמעדיפים לדחות ניתוח, או שניתוח מסוכן עבורם",
          "כגשר: הקלה בכאב שמאפשרת שיקום ופיזיותרפיה אפקטיביים",
        ],
      },
      {
        heading: "אילו הזרקות קיימות?",
        paragraphs: [
          "מאחורי המילה 'הזרקה' מסתתר מגוון שלם: חומצה היאלורונית שמשפרת את סיכוך המפרק; PRP — פלזמה מועשרת בטסיות מהדם של המטופל עצמו, שמרכזת גורמי ריפוי טבעיים; אורתוקין; והזרקות סטרואידים להרגעת דלקת פעילה. לכל אחת פרופיל משלה — מהירות השפעה, משך, והתאמה למצבים שונים.",
          "פירוט מלא של כל סוגי ההזרקות תמצאו בעמוד הייעודי 'הזרקות למפרקים'. בקצרה: הבחירה תלויה באבחנה, בגיל, בדרגת השחיקה ובמטרות שלכם — והיא נעשית יחד, אחרי בדיקה.",
        ],
      },
      {
        heading: "ומתי ניתוח הוא הבחירה הנכונה?",
        paragraphs: [
          "יש מצבים שבהם הזרקות אינן פותרות את הבעיה, כי הבעיה מכנית: קרע מיניסקוס שגורם לנעילות חוזרות, רצועה צולבת קרועה אצל ספורטאי שרוצה לחזור למגרש, גוף חופשי שמסתובב במפרק. במצבים האלה, דחיית הניתוח בעזרת הזרקות עלולה לגבות מחיר — נזק מצטבר לסחוס ולמיניסקוס.",
          "הכלל המנחה של ד\"ר דובנקו פשוט: הזרקות כשהן יכולות באמת לפתור או לייצב, ניתוח כשהוא באמת נחוץ — ואף פעם לא ניתוח כברירת מחדל.",
        ],
      },
      {
        heading: "איך מתקבלת ההחלטה בפועל?",
        paragraphs: [
          "ההחלטה מתחילה באבחון: בדיקה קלינית, הדמיה מתאימה (רנטגן, MRI) ושיחה על אורח החיים והמטרות שלכם — ספורטאי תחרותי ומטופל שמחפש הליכה נוחה הם שני סיפורים שונים לגמרי.",
          "לאחר מכן נבנית תוכנית מדורגת. ברוב המקרים מתחילים בצעד השמרני ביותר שיש לו סיכוי טוב: פיזיותרפיה, הזרקה או שילוב שלהן — עם נקודות ביקורת מוגדרות. אם ההתקדמות טובה, ממשיכים; אם לא, עוברים לשלב הבא בידיעה שמיצינו את הדרך הפשוטה.",
        ],
        note: "מתלבטים בין הזרקה לניתוח? קבעו תור לייעוץ. ד\"ר דובנקו יסביר בדיוק מה מצב הברך שלכם, מה כל אפשרות נותנת — ומה הוא היה ממליץ לבן משפחה במצבכם.",
      },
    ],
    faq: [
      {
        question: "כמה זמן מחזיקה השפעת הזרקה לברך?",
        answer:
          "תלוי בסוג ההזרקה ובמצב הברך: סטרואידים נותנים הקלה מהירה שנמשכת שבועות עד חודשים; חומצה היאלורונית ו־PRP פועלות הדרגתי יותר, וההשפעה נמשכת לרוב חודשים ארוכים. בשחיקה מתקדמת ההשפעה קצרה יותר — וזה כשלעצמו נתון חשוב בהחלטה אם להמשיך בהזרקות או לשקול צעד אחר.",
      },
      {
        question: "האם הזרקות יכולות 'לרפא' שחיקת סחוס?",
        answer:
          "לא — וחשוב לומר זאת ביושר. הזרקות מקלות על כאב, משפרות תפקוד ולעיתים מאטות את התהליך, אבל הן אינן מצמיחות סחוס חדש. המטרה הריאלית: שנים של תפקוד טוב עם פחות כאב — וזו מטרה שמושגת במקרים רבים.",
      },
      {
        question: "אם ההזרקה לא תעזור — לא בזבזנו זמן יקר?",
        answer:
          "ברוב המצבים, ניסיון שמרני סביר אינו פוגע בסיכויי ניתוח עתידי — ולכן הוא נחשב צעד ראשון בטוח. היוצאים מן הכלל הם מצבים מכניים ברורים, שבהם דחייה כן גובה מחיר; בדיוק בגלל זה ההחלטה מתקבלת אחרי אבחון מלא, ולא כניסוי אקראי.",
      },
    ],
  },
  en: {
    title: "Injections as an Alternative to Surgery",
    subtitle:
      "Not every painful knee needs an operating room. When an injection is the right solution, when surgery is — and how to decide.",
    intro:
      "One of the most common questions in the clinic: \"Doctor, can we manage without surgery?\" And the honest answer is — quite often, yes. Knee injections have advanced greatly in recent years, and in suitable cases they offer meaningful pain relief and improved function, without the risks and recovery period of surgery. But there are also situations where an injection only postpones the inevitable. Telling these cases apart — that is exactly a specialist's job.",
    sections: [
      {
        heading: "When Is an Injection a Good Choice?",
        paragraphs: [
          "Injections succeed especially in conditions where the problem is inflammation, early wear or mechanical pain — rather than structural damage requiring repair:",
        ],
        bullets: [
          "Mild to moderate cartilage wear (arthrosis)",
          "A stable, degenerative meniscus tear without locking",
          "Recurrent inflammation and swelling driven by load",
          "Patients who prefer to postpone surgery, or for whom surgery is risky",
          "As a bridge: pain relief that makes effective rehabilitation and physiotherapy possible",
        ],
      },
      {
        heading: "Which Injections Exist?",
        paragraphs: [
          "Behind the word \"injection\" hides a whole range: hyaluronic acid, which improves the joint's lubrication; PRP — platelet-rich plasma from the patient's own blood, concentrating natural healing factors; Orthokine; and steroid injections to calm active inflammation. Each has its own profile — speed of effect, duration, and suitability for different conditions.",
          "A full breakdown of all injection types awaits on the dedicated \"Joint Injections\" page. In short: the choice depends on the diagnosis, age, degree of wear and your goals — and it is made together, after an examination.",
        ],
      },
      {
        heading: "And When Is Surgery the Right Choice?",
        paragraphs: [
          "There are situations where injections don't solve the problem, because the problem is mechanical: a meniscus tear causing repeated locking, a torn cruciate ligament in an athlete who wants to return to the field, a loose body wandering in the joint. In these situations, postponing surgery with injections can carry a cost — cumulative damage to cartilage and meniscus.",
          "Dr. Dubenko's guiding rule is simple: injections when they can truly solve or stabilize, surgery when it is truly needed — and never surgery as a default.",
        ],
      },
      {
        heading: "How Is the Decision Actually Made?",
        paragraphs: [
          "The decision starts with diagnosis: a clinical examination, appropriate imaging (X-ray, MRI) and a conversation about your lifestyle and goals — a competitive athlete and a patient seeking comfortable walking are two entirely different stories.",
          "Then a staged plan is built. In most cases we start with the most conservative step that has a good chance: physiotherapy, an injection or a combination — with defined checkpoints. If progress is good, we continue; if not, we move to the next stage knowing the simple path was given its fair chance.",
        ],
        note: "Weighing an injection against surgery? Book a consultation. Dr. Dubenko will explain exactly what state your knee is in, what each option offers — and what he would recommend to a family member in your situation.",
      },
    ],
    faq: [
      {
        question: "How long does the effect of a knee injection last?",
        answer:
          "It depends on the injection type and the knee's condition: steroids give fast relief lasting weeks to months; hyaluronic acid and PRP work more gradually, with effects usually lasting many months. In advanced wear the effect is shorter — which is itself an important data point in deciding whether to continue with injections or consider another step.",
      },
      {
        question: "Can injections \"cure\" cartilage wear?",
        answer:
          "No — and it's important to say so honestly. Injections relieve pain, improve function and sometimes slow the process, but they do not grow new cartilage. The realistic goal: years of good function with less pain — and that goal is achieved in many cases.",
      },
      {
        question: "If the injection doesn't help — haven't we wasted precious time?",
        answer:
          "In most conditions, a reasonable conservative attempt does not harm the prospects of future surgery — which is why it is considered a safe first step. The exceptions are clearly mechanical situations, where delay does carry a cost; that is exactly why the decision is made after a full diagnosis, not as a random experiment.",
      },
    ],
  },
  ru: {
    title: "Инъекции как альтернатива операции",
    subtitle:
      "Не каждое больное колено нуждается в операционной. Когда инъекция — правильное решение, когда операция — и как принять решение.",
    intro:
      "Один из самых частых вопросов в клинике: «Доктор, можно обойтись без операции?» И честный ответ — довольно часто да. Инъекции в коленный сустав сильно продвинулись за последние годы, и в подходящих случаях они дают ощутимое облегчение боли и улучшение функции — без рисков и восстановительного периода операции. Но бывают и ситуации, когда инъекция лишь откладывает неизбежное. Умение различать эти случаи — и есть работа специалиста.",
    sections: [
      {
        heading: "Когда инъекция — хороший выбор?",
        paragraphs: [
          "Инъекции особенно успешны там, где проблема — воспаление, ранний износ или механическая боль, а не структурное повреждение, требующее восстановления:",
        ],
        bullets: [
          "Износ хряща (артроз) лёгкой и средней степени",
          "Стабильный дегенеративный разрыв мениска без блокад",
          "Повторяющееся воспаление и отёк на фоне нагрузки",
          "Пациенты, предпочитающие отложить операцию, или те, для кого операция рискованна",
          "Как мост: снятие боли, делающее возможной эффективную реабилитацию и физиотерапию",
        ],
      },
      {
        heading: "Какие бывают инъекции?",
        paragraphs: [
          "За словом «инъекция» скрывается целый спектр: гиалуроновая кислота, улучшающая «смазку» сустава; PRP — обогащённая тромбоцитами плазма из собственной крови пациента, концентрирующая естественные факторы заживления; Orthokine; и инъекции стероидов для снятия активного воспаления. У каждой свой профиль — скорость эффекта, длительность и пригодность для разных состояний.",
          "Полное описание всех видов инъекций — на отдельной странице «Инъекции в суставы». Коротко: выбор зависит от диагноза, возраста, степени износа и ваших целей — и делается вместе, после осмотра.",
        ],
      },
      {
        heading: "А когда правильный выбор — операция?",
        paragraphs: [
          "Есть ситуации, в которых инъекции не решают проблему, потому что проблема механическая: разрыв мениска с повторяющимися блокадами, разорванная крестообразная связка у спортсмена, который хочет вернуться на поле, свободное тело, перемещающееся в суставе. В таких ситуациях откладывание операции с помощью инъекций может обойтись дорого — накапливающимся повреждением хряща и мениска.",
          "Принцип д-ра Дубенко прост: инъекции — когда они действительно могут решить или стабилизировать, операция — когда она действительно необходима, и никогда операция «по умолчанию».",
        ],
      },
      {
        heading: "Как на практике принимается решение?",
        paragraphs: [
          "Решение начинается с диагностики: клинический осмотр, подходящая визуализация (рентген, МРТ) и разговор о вашем образе жизни и целях — спортсмен-соревнователь и пациент, которому нужна комфортная ходьба, это две совершенно разные истории.",
          "Затем строится поэтапный план. В большинстве случаев начинают с самого консервативного шага с хорошими шансами: физиотерапия, инъекция или их сочетание — с заранее определёнными контрольными точками. Если прогресс хороший — продолжаем; если нет — переходим к следующему этапу, зная, что простой путь получил честный шанс.",
        ],
        note: "Выбираете между инъекцией и операцией? Запишитесь на консультацию. Д-р Дубенко объяснит, в каком именно состоянии ваше колено, что даёт каждый вариант — и что он порекомендовал бы члену своей семьи в вашей ситуации.",
      },
    ],
    faq: [
      {
        question: "Сколько длится эффект инъекции в колено?",
        answer:
          "Зависит от вида инъекции и состояния колена: стероиды дают быстрое облегчение на недели или месяцы; гиалуроновая кислота и PRP действуют более постепенно, и эффект обычно сохраняется долгие месяцы. При выраженном износе эффект короче — и это само по себе важный аргумент при решении, продолжать ли инъекции или рассмотреть другой шаг.",
      },
      {
        question: "Могут ли инъекции «вылечить» износ хряща?",
        answer:
          "Нет — и важно сказать это честно. Инъекции облегчают боль, улучшают функцию и иногда замедляют процесс, но новый хрящ они не выращивают. Реалистичная цель — годы хорошей функции с меньшей болью, и во многих случаях эта цель достигается.",
      },
      {
        question: "Если инъекция не поможет — не потеряем ли мы драгоценное время?",
        answer:
          "В большинстве состояний разумная консервативная попытка не ухудшает перспективы будущей операции — поэтому она считается безопасным первым шагом. Исключение — явно механические ситуации, где промедление действительно имеет цену; именно поэтому решение принимается после полной диагностики, а не как случайный эксперимент.",
      },
    ],
  },
};
