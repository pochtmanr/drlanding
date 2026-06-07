import type { Locale, ServicePageContent } from "@/content/types";

export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "פיזיותרפיה לברך",
    subtitle:
      "השרירים הם 'בולמי הזעזועים' הטובים ביותר של הברך — ופיזיותרפיה נכונה היא הדרך לבנות אותם.",
    intro:
      "הברך כמעט אף פעם לא עובדת לבד: היא תלויה בשרירי הירך, הישבן והליבה שמייצבים אותה בכל צעד. כשהשרירים האלה חזקים ומתואמים — העומס על המפרק קטן, והכאב לעיתים קרובות נעלם בלי שום התערבות נוספת. לכן, ברוב בעיות הברך, פיזיותרפיה ממוקדת היא קו הטיפול הראשון שד\"ר דובנקו ממליץ עליו — לפני הזרקות, ובוודאי לפני ניתוח.",
    sections: [
      {
        heading: "מה פיזיותרפיה עושה לברך?",
        paragraphs: [
          "תוכנית טובה עובדת על כמה חזיתות במקביל: חיזוק הארבע־ראשי ושרירי הירך האחורית, שמורידים עומס מהמפרק; חיזוק שרירי הישבן, ששולטים בציר הרגל ומונעים קריסה פנימה של הברך; שיפור שיווי משקל ושליטה עצבית־שרירית; ועבודה על גמישות ודפוסי תנועה — נחיתה, ירידת מדרגות, קימה מכיסא.",
          "התוצאה אינה רק פחות כאב — אלא ברך עמידה יותר, שמתמודדת טוב יותר עם הדרישות של היומיום והספורט.",
        ],
      },
      {
        heading: "מתי פיזיותרפיה היא הבחירה הראשונה?",
        paragraphs: ["במגוון רחב של מצבים, תרגול נכון הוא הטיפול המרכזי — לא תוספת:"],
        bullets: [
          "כאב פטלו־פמורלי (כאב סביב הפיקה) — מהשכיחים שבכאבי הברך",
          "שחיקת סחוס בדרגה קלה־בינונית — חיזוק שרירים מפחית כאב ומשפר תפקוד",
          "קרעי מיניסקוס שחיקתיים ויציבים, ללא נעילות",
          "פגיעות רצועה חלקיות ושיקום לאחר פציעות ספורט",
          "מניעה: ספורטאים עם עומסים גבוהים או היסטוריה של פציעות ברך",
        ],
      },
      {
        heading: "איך נראית תוכנית בפועל?",
        paragraphs: [
          "מתחילים בהערכה: בדיקת כוח, טווחים, יציבות ודפוסי תנועה, וזיהוי החוליה החלשה. משם נבנית תוכנית מדורגת — בדרך כלל שניים־שלושה אימונים בשבוע, רובם עצמאיים בבית, עם מפגשי הנחיה תקופתיים לעדכון העומסים והטכניקה.",
          "ההתקדמות הדרגתית: מתרגילים מבוקרים בעומס נמוך, דרך חיזוק בהתנגדות גוברת, ועד תרגול תפקודי שמדמה את מה שהברך שלכם באמת צריכה לעשות — לרדת מדרגות בלי כאב, לרוץ, לחזור למגרש.",
        ],
      },
      {
        heading: "פיזיותרפיה, הזרקות וניתוח — איך זה משתלב?",
        paragraphs: [
          "אלה לא מסלולים מתחרים אלא שלבים באותה תוכנית. כשכאב חזק מונע תרגול אפקטיבי, הזרקה יכולה 'לפתוח את הדלת' לפיזיותרפיה. וכשבסוף נדרש ניתוח — ברך שחוזקה לפניו מחלימה מהר יותר אחריו, והפיזיותרפיה הופכת לשיקום שאחרי הניתוח.",
          "העיקרון של ד\"ר דובנקו פשוט: התרגול הוא הבסיס. כל שאר הכלים — הזרקות וניתוחים — נבנים עליו, לא במקומו.",
        ],
        note: "כאב ברך שמלווה אתכם כבר שבועות? אל תתרגלו אליו. בדיקה אחת יכולה לזהות את המקור ולבנות תוכנית שתחזיר אתכם לתנועה בלי כאב.",
      },
    ],
    faq: [
      {
        question: "כמה זמן עד שמרגישים שיפור?",
        answer:
          "ברוב המצבים, הקלה ראשונית מורגשת תוך שלושה עד שישה שבועות של תרגול עקבי, והשיפור המלא נבנה לאורך חודשיים־שלושה. הקצב תלוי באבחנה, בנקודת הפתיחה ובעקביות — תרגול ביתי יומיומי מקצר את הדרך משמעותית.",
      },
      {
        question: "התרגילים גורמים לכאב בברך — להמשיך?",
        answer:
          "אי־נוחות מתונה בזמן תרגול, שחולפת מהר אחריו, היא בדרך כלל חלק תקין מהתהליך. כאב חד, כאב שמתגבר מאימון לאימון או נפיחות אחרי תרגול — מסמנים שצריך לכוונן את העומס או הטכניקה. דווחו לפיזיותרפיסט; אל תפסיקו לבד ואל 'תתאמנו דרך' כאב חריג.",
      },
      {
        question: "יש לי שחיקת סחוס — האם תרגול לא ישחק את הברך עוד יותר?",
        answer:
          "להפך — זו אחת מאי־ההבנות הנפוצות. תרגול נכון ומדורג אינו 'משחק' את המפרק: הוא מחזק את השרירים שסופגים עומס במקומו, משפר את תזונת הסחוס דרך תנועה, ומפחית כאב לאורך זמן. המפתח הוא התאמת סוג התרגול והעומס למצב הברך — ולשם כך קיימת ההנחיה המקצועית.",
      },
    ],
  },
  en: {
    title: "Knee Physiotherapy",
    subtitle:
      "The muscles are the knee's best \"shock absorbers\" — and proper physiotherapy is the way to build them.",
    intro:
      "The knee almost never works alone: it depends on the thigh, glute and core muscles that stabilize it at every step. When these muscles are strong and coordinated — the load on the joint drops, and the pain often disappears without any further intervention. That is why, in most knee problems, focused physiotherapy is the first line of treatment Dr. Dubenko recommends — before injections, and certainly before surgery.",
    sections: [
      {
        heading: "What Does Physiotherapy Do for the Knee?",
        paragraphs: [
          "A good program works on several fronts in parallel: strengthening the quadriceps and hamstrings, which take load off the joint; strengthening the glutes, which control the leg's axis and prevent the knee collapsing inward; improving balance and neuromuscular control; and working on flexibility and movement patterns — landing, descending stairs, rising from a chair.",
          "The result is not just less pain — but a more resilient knee that copes better with the demands of daily life and sport.",
        ],
      },
      {
        heading: "When Is Physiotherapy the First Choice?",
        paragraphs: ["In a wide range of conditions, the right exercise is the central treatment — not an add-on:"],
        bullets: [
          "Patellofemoral pain (pain around the kneecap) — among the most common knee complaints",
          "Mild to moderate cartilage wear — muscle strengthening reduces pain and improves function",
          "Stable, degenerative meniscus tears without locking",
          "Partial ligament injuries and rehabilitation after sports injuries",
          "Prevention: athletes under high loads or with a history of knee injuries",
        ],
      },
      {
        heading: "What Does a Program Actually Look Like?",
        paragraphs: [
          "It starts with an assessment: testing strength, ranges, stability and movement patterns, and identifying the weak link. From there a graded program is built — usually two to three sessions a week, most of them independent at home, with periodic guidance sessions to update loads and technique.",
          "Progress is gradual: from controlled low-load exercises, through strengthening with increasing resistance, to functional training that mimics what your knee really needs to do — descend stairs without pain, run, return to the field.",
        ],
      },
      {
        heading: "Physiotherapy, Injections & Surgery — How Do They Fit Together?",
        paragraphs: [
          "These are not competing paths but stages of the same plan. When severe pain prevents effective exercise, an injection can \"open the door\" for physiotherapy. And when surgery is eventually needed — a knee strengthened beforehand recovers faster afterwards, and physiotherapy becomes the post-operative rehabilitation.",
          "Dr. Dubenko's principle is simple: exercise is the foundation. All the other tools — injections and operations — are built on top of it, not instead of it.",
        ],
        note: "Knee pain that has been with you for weeks? Don't get used to it. One examination can identify the source and build a plan to get you moving again without pain.",
      },
    ],
    faq: [
      {
        question: "How long until I feel improvement?",
        answer:
          "In most conditions, initial relief is felt within three to six weeks of consistent exercise, and the full improvement builds over two to three months. The pace depends on the diagnosis, the starting point and consistency — daily home exercise shortens the road significantly.",
      },
      {
        question: "The exercises cause knee pain — should I continue?",
        answer:
          "Moderate discomfort during exercise that passes quickly afterwards is usually a normal part of the process. Sharp pain, pain that grows from session to session, or swelling after exercise — signal that the load or technique needs tuning. Report to the physiotherapist; don't stop on your own and don't \"train through\" unusual pain.",
      },
      {
        question: "I have cartilage wear — won't exercise wear the knee down even more?",
        answer:
          "On the contrary — that is one of the most common misconceptions. Correct, graded exercise does not \"wear down\" the joint: it strengthens the muscles that absorb load in its place, improves cartilage nutrition through movement, and reduces pain over time. The key is matching the exercise type and load to the knee's condition — which is exactly what professional guidance is for.",
      },
    ],
  },
  ru: {
    title: "Физиотерапия колена",
    subtitle:
      "Мышцы — лучшие «амортизаторы» колена, и правильная физиотерапия — путь их построить.",
    intro:
      "Колено почти никогда не работает в одиночку: оно зависит от мышц бедра, ягодиц и корпуса, стабилизирующих его на каждом шагу. Когда эти мышцы сильны и согласованы — нагрузка на сустав снижается, и боль нередко исчезает без всякого дополнительного вмешательства. Поэтому при большинстве проблем колена прицельная физиотерапия — первая линия лечения, которую рекомендует д-р Дубенко: до инъекций и тем более до операции.",
    sections: [
      {
        heading: "Что физиотерапия делает для колена?",
        paragraphs: [
          "Хорошая программа работает на нескольких фронтах одновременно: укрепление четырёхглавой мышцы и задней поверхности бедра, снимающих нагрузку с сустава; укрепление ягодичных мышц, которые контролируют ось ноги и не дают колену «заваливаться» внутрь; улучшение равновесия и нервно-мышечного контроля; работа над гибкостью и двигательными паттернами — приземление, спуск по лестнице, подъём со стула.",
          "Результат — не только меньше боли, но и более выносливое колено, которое лучше справляется с требованиями повседневной жизни и спорта.",
        ],
      },
      {
        heading: "Когда физиотерапия — первый выбор?",
        paragraphs: ["При широком круге состояний правильные упражнения — основное лечение, а не дополнение:"],
        bullets: [
          "Пателлофеморальная боль (боль вокруг надколенника) — одна из самых частых жалоб",
          "Износ хряща лёгкой и средней степени — укрепление мышц уменьшает боль и улучшает функцию",
          "Стабильные дегенеративные разрывы мениска без блокад",
          "Частичные повреждения связок и реабилитация после спортивных травм",
          "Профилактика: спортсмены с высокими нагрузками или историей травм колена",
        ],
      },
      {
        heading: "Как выглядит программа на практике?",
        paragraphs: [
          "Всё начинается с оценки: проверка силы, объёма движений, стабильности и двигательных паттернов, поиск слабого звена. Дальше строится ступенчатая программа — обычно два-три занятия в неделю, большинство из них самостоятельные дома, с периодическими встречами для корректировки нагрузок и техники.",
          "Прогресс постепенный: от контролируемых упражнений с низкой нагрузкой через укрепление с растущим сопротивлением к функциональным тренировкам, имитирующим то, что вашему колену действительно нужно делать, — спускаться по лестнице без боли, бегать, вернуться на поле.",
        ],
      },
      {
        heading: "Физиотерапия, инъекции и операция — как это сочетается?",
        paragraphs: [
          "Это не конкурирующие пути, а этапы одного плана. Когда сильная боль мешает эффективным занятиям, инъекция может «открыть дверь» физиотерапии. А когда в итоге нужна операция — колено, укреплённое заранее, быстрее восстанавливается после неё, и физиотерапия превращается в послеоперационную реабилитацию.",
          "Принцип д-ра Дубенко прост: упражнения — фундамент. Все остальные инструменты — инъекции и операции — строятся на нём, а не вместо него.",
        ],
        note: "Боль в колене сопровождает вас уже не первую неделю? Не привыкайте к ней. Один осмотр может определить источник и выстроить план, который вернёт вам движение без боли.",
      },
    ],
    faq: [
      {
        question: "Сколько времени до первого улучшения?",
        answer:
          "При большинстве состояний первое облегчение ощущается через три–шесть недель последовательных занятий, а полный результат выстраивается за два-три месяца. Темп зависит от диагноза, исходной точки и регулярности — ежедневные домашние упражнения заметно сокращают путь.",
      },
      {
        question: "Упражнения вызывают боль в колене — продолжать?",
        answer:
          "Умеренный дискомфорт во время занятия, быстро проходящий после него, — обычно нормальная часть процесса. Резкая боль, боль, нарастающая от занятия к занятию, или отёк после тренировки — сигналы, что нагрузку или технику нужно скорректировать. Сообщите физиотерапевту; не прекращайте самостоятельно и не «тренируйтесь через» необычную боль.",
      },
      {
        question: "У меня износ хряща — не износят ли упражнения колено ещё больше?",
        answer:
          "Наоборот — это одно из самых распространённых заблуждений. Правильные, дозированные упражнения не «изнашивают» сустав: они укрепляют мышцы, принимающие нагрузку на себя, улучшают питание хряща через движение и со временем уменьшают боль. Ключ — соответствие вида упражнений и нагрузки состоянию колена, для чего и существует профессиональное сопровождение.",
      },
    ],
  },
};
