import type { Locale, ServicePageContent } from "@/content/types";

export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "כאבי כתף וסוגי פציעות",
    subtitle:
      "קרע בגיד הסובב, פריקות, כתף קפואה ותסמונת צביטה — איך מזהים כל פציעה, ומתי הזמן לפנות למומחה כתף.",
    intro:
      "כאב בכתף הוא אחת התלונות האורתופדיות הנפוצות ביותר. לפעמים הוא מופיע אחרי נפילה או אימון אינטנסיבי, ולפעמים מתגנב בהדרגה — כאב לילי, קושי להרים את היד, תחושת חולשה בהרמת חפצים. הצעד הראשון לטיפול נכון הוא הבנת מקור הכאב. בעמוד הזה נסקור את פציעות הכתף הנפוצות, את הסימנים האופייניים לכל אחת מהן, ומתי כדאי לא לחכות ולפנות לבדיקה.",
    sections: [
      {
        heading: "קרע בגיד הסובב (Rotator Cuff)",
        paragraphs: [
          "השרירים המסובבים של הכתף — ארבעה שרירים וגידים שעוטפים את מפרק הכתף — אחראים על הרמת היד וסיבובה, ועל ייצוב ראש עצם הזרוע במקומו. קרע בגידים האלה יכול להיגרם מחבלה פתאומית, אך לעיתים קרובות הוא תוצאה של שחיקה הדרגתית עם השנים — במיוחד אצל מי שעובד עם ידיים מורמות או עוסק בענפי ספורט הכוללים זריקה והנפה.",
          "קרע חלקי מתבטא בדרך כלל בכאב בזמן פעילות ובלילה, ואילו קרע מלא עלול לגרום גם לחולשה ניכרת ולקושי אמיתי להרים את היד. לא כל קרע מחייב ניתוח — ההחלטה תלויה בגודל הקרע, בגיל, ברמת הפעילות ובדרישות היומיום של המטופל.",
        ],
        bullets: [
          "כאב בצד הכתף שמקרין לזרוע, מתגבר בלילה ובשכיבה על הצד",
          "חולשה בהרמת היד מעל גובה הכתף או בסיבוב כלפי חוץ",
          "תחושת חיכוך או קרקוש בתנועת הכתף",
        ],
      },
      {
        heading: "פריקת כתף וחוסר יציבות",
        paragraphs: [
          "בזכות טווח התנועה הגדול שלה, הכתף היא גם המפרק שנפרק בתדירות הגבוהה ביותר. פריקה ראשונה מתרחשת בדרך כלל בעקבות חבלה — נפילה על יד מושטת או מכה ישירה בספורט. לאחר פריקה ראשונה, ובמיוחד בגיל צעיר, עולה הסיכון לפריקות חוזרות: הרקמות שמייצבות את המפרק נמתחות או נקרעות, והכתף 'לומדת' לצאת ממקומה.",
          "חוסר יציבות כרוני מתבטא בתחושה שהכתף 'בורחת' בתנועות מסוימות, בחשש מתנועות מעל הראש ולעיתים בכאב מתמשך. במקרים של פריקות חוזרות, ייתכן שיהיה מקום לשקול ניתוח ייצוב — בדרך כלל בגישה ארתרוסקופית.",
        ],
      },
      {
        heading: "כתף קפואה (Frozen Shoulder)",
        paragraphs: [
          "כתף קפואה — בשמה הרפואי Adhesive Capsulitis — היא מצב שבו קופסית המפרק מתעבה ומתכווצת, וטווח התנועה הולך ומצטמצם. המצב מתפתח בדרך כלל בשלושה שלבים: שלב כואב שבו הכאב מתגבר בהדרגה, שלב 'הקפאה' שבו הנוקשות בולטת, ושלב 'הפשרה' איטי שבו התנועה חוזרת. התהליך כולו עשוי להימשך חודשים ארוכים.",
          "החדשות הטובות: ברוב המכריע של המקרים כתף קפואה חולפת עם טיפול שמרני — פיזיותרפיה עקבית, ובמידת הצורך הזרקה להקלת הכאב ולשיפור יכולת התרגול. אבחון נכון חשוב כאן במיוחד, כי התסמינים דומים לפציעות אחרות.",
        ],
      },
      {
        heading: "תסמונת צביטה (Impingement)",
        paragraphs: [
          "בתסמונת צביטה, הגידים והרקמה הרכה שמתחת לחוד עצם השכם נלחצים בעת הרמת היד. התוצאה: כאב חד בקשת תנועה מסוימת — בדרך כלל בין 60 ל־120 מעלות של הרמה — קושי בפעולות יומיומיות כמו לבישת חולצה או הושטת יד למדף גבוה, וכאב לילי מציק.",
          "ללא טיפול, צביטה ממושכת עלולה לתרום לדלקת כרונית בגיד ואף לקרע. הטיפול מתחיל כמעט תמיד שמרני: התאמת פעילות, פיזיותרפיה לחיזוק מייצבי השכמה, ולעיתים הזרקה מקומית.",
        ],
      },
      {
        heading: "מתי כדאי לפנות למומחה?",
        paragraphs: [
          "כאב כתף קל אחרי מאמץ חריג הוא לרוב עניין חולף. אבל יש סימנים שמצדיקים בדיקה אצל אורתופד מומחה כתף, בלי לדחות.",
        ],
        bullets: [
          "כאב שנמשך מעבר לשבועיים־שלושה ואינו משתפר",
          "כאב לילי שמעיר משינה או מונע שכיבה על הצד",
          "חולשה ניכרת או חוסר יכולת להרים את היד",
          "תחושת חוסר יציבות, או פריקה — גם אם הכתף 'חזרה למקום' לבד",
          "הגבלה מתמשכת בתנועה שמפריעה לעבודה או לשגרה",
        ],
        note: "המידע בעמוד זה הוא הסבר כללי ואינו תחליף לאבחון רפואי אישי. ד\"ר דובנקו, מנתח כתף וברך עם 37 שנות ניסיון, יבחן את הכתף, יפנה לבירור הדמייתי במידת הצורך ויתאים תוכנית טיפול אישית.",
      },
    ],
    faq: [
      {
        question: "האם כל קרע בגיד הסובב מחייב ניתוח?",
        answer:
          "לא. קרעים חלקיים רבים, ובמיוחד קרעים שחיקתיים בגיל מבוגר, מגיבים היטב לטיפול שמרני — פיזיותרפיה, התאמת פעילות ולעיתים הזרקות. ההחלטה על ניתוח נשקלת לפי גודל הקרע, רמת התפקוד, הגיל והדרישות של המטופל — ותמיד לאחר בדיקה והדמיה.",
      },
      {
        question: "איך מאבחנים את מקור הכאב בכתף?",
        answer:
          "האבחון מתחיל בשיחה ובבדיקה גופנית מכוונת — מבחני תנועה וכוח ספציפיים שמכוונים לכל מבנה בכתף. בהמשך, לפי הצורך, מבוצעות בדיקות הדמיה: צילום רנטגן, אולטרסאונד או MRI. השילוב של בדיקה קלינית מנוסה והדמיה מאפשר אבחנה מדויקת ותוכנית טיפול מתאימה.",
      },
      {
        question: "נפרקה לי הכתף וחזרה למקום לבד — צריך בכלל להיבדק?",
        answer:
          "כן, מומלץ. גם כשהכתף חוזרת למקומה, ייתכן נזק לרקמות המייצבות — ובגיל צעיר הסיכון לפריקות חוזרות גבוה במיוחד. בדיקה והדמיה מתאימה מאפשרות להעריך את הנזק ולהחליט יחד אם די בשיקום מובנה או שכדאי לשקול ייצוב ניתוחי.",
      },
    ],
  },
  en: {
    title: "Shoulder Pain & Injury Types",
    subtitle:
      "Rotator cuff tears, dislocations, frozen shoulder and impingement — how to recognize each injury, and when it's time to see a shoulder specialist.",
    intro:
      "Shoulder pain is one of the most common orthopedic complaints. Sometimes it appears after a fall or an intense workout; sometimes it creeps in gradually — night pain, difficulty raising the arm, a feeling of weakness when lifting objects. The first step toward the right treatment is understanding where the pain comes from. On this page we review the most common shoulder injuries, the typical signs of each, and when it's better not to wait before getting examined.",
    sections: [
      {
        heading: "Rotator Cuff Tears",
        paragraphs: [
          "The rotator cuff — four muscles and tendons wrapping the shoulder joint — is responsible for raising and rotating the arm and for keeping the head of the humerus centered in place. A tear in these tendons can be caused by sudden trauma, but it is often the result of gradual wear over the years — especially in people who work with their arms raised or play throwing and overhead sports.",
          "A partial tear usually shows itself as pain during activity and at night, while a complete tear can also cause marked weakness and real difficulty lifting the arm. Not every tear requires surgery — the decision depends on the size of the tear, age, activity level and the patient's daily demands.",
        ],
        bullets: [
          "Pain on the side of the shoulder radiating down the arm, worse at night and when lying on that side",
          "Weakness when lifting the arm above shoulder height or rotating it outward",
          "A sensation of catching or grinding as the shoulder moves",
        ],
      },
      {
        heading: "Shoulder Dislocation & Instability",
        paragraphs: [
          "Thanks to its large range of motion, the shoulder is also the most frequently dislocated joint in the body. A first dislocation usually follows trauma — a fall onto an outstretched arm or a direct blow in sport. After a first dislocation, and especially at a young age, the risk of recurrence rises: the tissues stabilizing the joint stretch or tear, and the shoulder \"learns\" to slip out of place.",
          "Chronic instability feels like the shoulder \"giving way\" in certain movements, apprehension about overhead motions and sometimes persistent pain. In cases of repeated dislocations, stabilization surgery — usually arthroscopic — may be worth considering.",
        ],
      },
      {
        heading: "Frozen Shoulder",
        paragraphs: [
          "Frozen shoulder — medically known as adhesive capsulitis — is a condition in which the joint capsule thickens and contracts, and the range of motion progressively shrinks. It typically develops in three stages: a painful stage in which pain gradually builds, a \"freezing\" stage in which stiffness dominates, and a slow \"thawing\" stage in which movement returns. The whole process can last many months.",
          "The good news: in the vast majority of cases, frozen shoulder resolves with conservative treatment — consistent physiotherapy and, when needed, an injection to relieve pain and make exercise possible. Accurate diagnosis matters here in particular, because the symptoms mimic other injuries.",
        ],
      },
      {
        heading: "Impingement Syndrome",
        paragraphs: [
          "In impingement syndrome, the tendons and soft tissue beneath the bony arch of the shoulder blade get compressed when the arm is raised. The result: sharp pain in a specific arc of motion — usually between 60 and 120 degrees of elevation — difficulty with everyday actions like putting on a shirt or reaching a high shelf, and nagging night pain.",
          "Left untreated, prolonged impingement can contribute to chronic tendon inflammation and even a tear. Treatment almost always starts conservatively: activity modification, physiotherapy to strengthen the shoulder-blade stabilizers, and sometimes a local injection.",
        ],
      },
      {
        heading: "When Should You See a Specialist?",
        paragraphs: [
          "Mild shoulder pain after unusual exertion usually passes on its own. But some signs justify an examination by an orthopedic shoulder specialist — without putting it off.",
        ],
        bullets: [
          "Pain lasting beyond two to three weeks without improvement",
          "Night pain that wakes you from sleep or prevents lying on that side",
          "Marked weakness or inability to lift the arm",
          "A feeling of instability, or a dislocation — even if the shoulder \"popped back\" on its own",
          "Persistent restriction of movement that interferes with work or daily routine",
        ],
        note: "The information on this page is a general explanation and not a substitute for a personal medical diagnosis. Dr. Dubenko, a shoulder and knee surgeon with 37 years of experience, will examine the shoulder, refer for imaging if needed and tailor a personal treatment plan.",
      },
    ],
    faq: [
      {
        question: "Does every rotator cuff tear require surgery?",
        answer:
          "No. Many partial tears, and especially degenerative tears at an older age, respond well to conservative treatment — physiotherapy, activity modification and sometimes injections. Surgery is considered based on the tear's size, the level of function, age and the patient's demands — and always after an examination and imaging.",
      },
      {
        question: "How is the source of shoulder pain diagnosed?",
        answer:
          "Diagnosis starts with a conversation and a focused physical examination — specific movement and strength tests aimed at each structure of the shoulder. Then, as needed, imaging follows: X-ray, ultrasound or MRI. Combining an experienced clinical exam with imaging allows a precise diagnosis and a fitting treatment plan.",
      },
      {
        question: "My shoulder dislocated and went back in on its own — do I still need to be checked?",
        answer:
          "Yes, it's recommended. Even when the shoulder returns to place, the stabilizing tissues may be damaged — and at a young age the risk of repeat dislocations is especially high. An examination and appropriate imaging make it possible to assess the damage and decide together whether structured rehabilitation is enough or surgical stabilization is worth considering.",
      },
    ],
  },
  ru: {
    title: "Боль в плече и виды травм",
    subtitle:
      "Разрывы вращательной манжеты, вывихи, «замороженное плечо» и импинджмент — как распознать каждую травму и когда пора обратиться к специалисту по плечу.",
    intro:
      "Боль в плече — одна из самых частых ортопедических жалоб. Иногда она появляется после падения или интенсивной тренировки, а иногда подкрадывается постепенно: ночная боль, трудно поднять руку, ощущение слабости при подъёме предметов. Первый шаг к правильному лечению — понять источник боли. На этой странице мы разберём самые частые травмы плеча, характерные признаки каждой из них и ситуации, когда лучше не ждать и пройти обследование.",
    sections: [
      {
        heading: "Разрыв вращательной манжеты",
        paragraphs: [
          "Вращательная манжета — четыре мышцы и сухожилия, окружающие плечевой сустав, — отвечает за подъём и вращение руки и за удержание головки плечевой кости в правильном положении. Разрыв этих сухожилий может произойти при внезапной травме, но нередко он становится результатом постепенного износа с годами — особенно у тех, кто работает с поднятыми руками или занимается бросковыми видами спорта.",
          "Частичный разрыв обычно проявляется болью при нагрузке и по ночам, а полный разрыв может вызывать заметную слабость и реальную трудность поднять руку. Не каждый разрыв требует операции — решение зависит от размера разрыва, возраста, уровня активности и повседневных потребностей пациента.",
        ],
        bullets: [
          "Боль по наружной поверхности плеча, отдающая в руку, усиливающаяся ночью и в положении на боку",
          "Слабость при подъёме руки выше уровня плеча или при вращении наружу",
          "Ощущение щелчков или трения при движении плеча",
        ],
      },
      {
        heading: "Вывих плеча и нестабильность",
        paragraphs: [
          "Благодаря большому объёму движений плечо — это ещё и сустав, который вывихивается чаще всех остальных. Первый вывих обычно происходит при травме: падение на вытянутую руку или прямой удар в спорте. После первого вывиха, особенно в молодом возрасте, риск повторов возрастает: стабилизирующие ткани растягиваются или рвутся, и плечо «привыкает» выскальзывать.",
          "Хроническая нестабильность ощущается так, будто плечо «уходит» при определённых движениях; появляется страх перед движениями над головой, а иногда и постоянная боль. При повторяющихся вывихах стоит обсудить стабилизирующую операцию — как правило, артроскопическую.",
        ],
      },
      {
        heading: "«Замороженное плечо» (адгезивный капсулит)",
        paragraphs: [
          "«Замороженное плечо» — медицинское название «адгезивный капсулит» — это состояние, при котором капсула сустава утолщается и сжимается, а объём движений постепенно сокращается. Обычно оно развивается в три этапа: болевой этап с нарастающей болью, этап «заморозки», когда преобладает скованность, и медленный этап «оттаивания», когда движение возвращается. Весь процесс может длиться долгие месяцы.",
          "Хорошая новость: в подавляющем большинстве случаев «замороженное плечо» проходит при консервативном лечении — последовательной физиотерапии и, при необходимости, инъекции для снятия боли и облегчения упражнений. Точная диагностика здесь особенно важна, потому что симптомы похожи на другие травмы.",
        ],
      },
      {
        heading: "Импинджмент-синдром",
        paragraphs: [
          "При импинджмент-синдроме сухожилия и мягкие ткани под костной дугой лопатки сдавливаются при подъёме руки. Результат: резкая боль в определённой дуге движения — обычно между 60 и 120 градусами подъёма, — трудности с повседневными действиями вроде надевания рубашки или попытки дотянуться до высокой полки, и изматывающая ночная боль.",
          "Без лечения длительный импинджмент может способствовать хроническому воспалению сухожилия и даже разрыву. Лечение почти всегда начинается консервативно: коррекция нагрузки, физиотерапия для укрепления стабилизаторов лопатки, иногда местная инъекция.",
        ],
      },
      {
        heading: "Когда стоит обратиться к специалисту?",
        paragraphs: [
          "Лёгкая боль в плече после непривычной нагрузки обычно проходит сама. Но есть признаки, при которых стоит, не откладывая, показаться ортопеду — специалисту по плечевому суставу.",
        ],
        bullets: [
          "Боль, которая длится больше двух-трёх недель и не уменьшается",
          "Ночная боль, которая будит или не даёт лежать на боку",
          "Заметная слабость или невозможность поднять руку",
          "Ощущение нестабильности или вывих — даже если плечо «встало на место» само",
          "Стойкое ограничение движений, мешающее работе или повседневной жизни",
        ],
        note: "Информация на этой странице — общее объяснение, а не замена личной медицинской диагностике. Д-р Дубенко, хирург плеча и колена с 37-летним опытом, осмотрит плечо, при необходимости направит на визуализацию и составит индивидуальный план лечения.",
      },
    ],
    faq: [
      {
        question: "Каждый ли разрыв вращательной манжеты требует операции?",
        answer:
          "Нет. Многие частичные разрывы, особенно дегенеративные разрывы в старшем возрасте, хорошо отвечают на консервативное лечение — физиотерапию, коррекцию нагрузки, иногда инъекции. Операция рассматривается с учётом размера разрыва, уровня функции, возраста и потребностей пациента — и всегда после осмотра и визуализации.",
      },
      {
        question: "Как определяют источник боли в плече?",
        answer:
          "Диагностика начинается с беседы и прицельного осмотра — специальных тестов движения и силы, направленных на каждую структуру плеча. Далее, по необходимости, выполняется визуализация: рентген, УЗИ или МРТ. Сочетание опытного клинического осмотра и визуализации даёт точный диагноз и подходящий план лечения.",
      },
      {
        question: "Плечо вывихнулось и вправилось само — нужно ли вообще обследоваться?",
        answer:
          "Да, рекомендуется. Даже когда плечо возвращается на место, стабилизирующие ткани могут быть повреждены, а в молодом возрасте риск повторных вывихов особенно высок. Осмотр и подходящая визуализация позволяют оценить повреждение и вместе решить, достаточно ли структурированной реабилитации или стоит обсудить хирургическую стабилизацию.",
      },
    ],
  },
};
