import type { Locale } from "@/content/types";

/** Hero + intro copy for the joint injections category page. */
export interface CategoryContent {
  title: string;
  subtitle: string;
  intro: string[];
}

export const content: Record<Locale, CategoryContent> = {
  he: {
    title: "הזרקות למפרקים",
    subtitle:
      "‏PRP, חומצה היאלורונית, אורתוקין וסטרואידים — טיפול שמרני מתקדם שמרגיע כאב, משפר תפקוד ובמקרים רבים דוחה או חוסך ניתוח.",
    intro: [
      "בין 'לחיות עם הכאב' לבין חדר הניתוח קיים תחום שלם של רפואה — וההזרקות למפרקים נמצאות בליבו. עבור מטופלים רבים עם שחיקת סחוס, דלקת כרונית או כאב מפרקי מתמשך, הזרקה מדויקת היא ההבדל בין הימנעות מפעילות לבין חזרה לחיים פעילים — בלי ניתוח, או לפחות בלי ניתוח עכשיו.",
      "ד\"ר ויאצ'סלב דובנקו, מומחה לאורתופדיה עם 37 שנות ניסיון, רואה בהזרקות חלק ממדרג טיפולי שלם: הן באות אחרי שטיפול בסיסי מוצה, ולפני שפונים לפתרון ניתוחי. קשת האפשרויות רחבה — מסטרואידים שמרגיעים דלקת במהירות, דרך חומצה היאלורונית שמשפרת סיכוך, ועד טיפולים ביולוגיים כמו PRP ואורתוקין שמגויסים מהדם שלכם עצמכם.",
      "בעמודים הבאים מוסבר כל סוג הזרקה: איך הוא פועל, למי הוא מתאים ולמה לצפות. הבחירה הנכונה ביניהם תלויה באבחנה שלכם — והיא נעשית תמיד יחד, אחרי בדיקה.",
    ],
  },
  en: {
    title: "Joint Injections",
    subtitle:
      "PRP, hyaluronic acid, Orthokine and steroids — advanced conservative treatment that calms pain, improves function and in many cases postpones or spares surgery.",
    intro: [
      "Between \"living with the pain\" and the operating room lies a whole field of medicine — and joint injections are at its heart. For many patients with cartilage wear, chronic inflammation or persistent joint pain, a precise injection is the difference between avoiding activity and returning to an active life — without surgery, or at least without surgery now.",
      "Dr. Vyacheslav Dubenko, an orthopedic specialist with 37 years of experience, sees injections as part of a complete treatment ladder: they come after basic treatment has been exhausted, and before turning to a surgical solution. The arsenal is broad — from steroids that calm inflammation quickly, through hyaluronic acid that improves lubrication, to biological treatments such as PRP and Orthokine that are recruited from your own blood.",
      "The following pages explain each type of injection: how it works, who it suits and what to expect. The right choice between them depends on your diagnosis — and it is always made together, after an examination.",
    ],
  },
  ru: {
    title: "Инъекции в суставы",
    subtitle:
      "PRP, гиалуроновая кислота, Orthokine и стероиды — современное консервативное лечение, которое снимает боль, улучшает функцию и во многих случаях откладывает или заменяет операцию.",
    intro: [
      "Между «жить с болью» и операционной лежит целая область медицины — и инъекции в суставы находятся в её центре. Для многих пациентов с износом хряща, хроническим воспалением или постоянной суставной болью точная инъекция — это разница между отказом от активности и возвращением к полноценной жизни — без операции или, по крайней мере, без операции сейчас.",
      "Д-р Вячеслав Дубенко, специалист-ортопед с 37-летним опытом, рассматривает инъекции как часть целостной лечебной лестницы: они приходят после того, как базовое лечение исчерпано, и до того, как обращаются к хирургическому решению. Арсенал широк — от стероидов, быстро снимающих воспаление, через гиалуроновую кислоту, улучшающую смазку сустава, до биологических методов, таких как PRP и Orthokine, получаемых из вашей собственной крови.",
      "На следующих страницах объясняется каждый вид инъекций: как он работает, кому подходит и чего ожидать. Правильный выбор между ними зависит от вашего диагноза — и делается всегда вместе, после осмотра.",
    ],
  },
};
