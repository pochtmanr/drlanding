import type { Locale } from "@/content/types";

/** Hero + intro copy for the knee category page. */
export interface CategoryContent {
  title: string;
  subtitle: string;
  intro: string[];
}

export const content: Record<Locale, CategoryContent> = {
  he: {
    title: "ברך",
    subtitle:
      "מקרעי מיניסקוס ופגיעות רצועות ועד ניתוחים ארתרוסקופיים מתקדמים — תחום ההתמחות המרכזי של ד\"ר דובנקו.",
    intro: [
      "הברך נושאת אותנו בכל צעד — ובדיוק בגלל זה כל כאב בה מורגש מיד בחיי היומיום. פציעות ברך נפוצות בכל גיל: קרע במיניסקוס אצל הרץ החובב, פגיעה ברצועה הצולבת במגרש הכדורגל, ושחיקת סחוס שמתפתחת בשקט לאורך שנים. הבשורה הטובה היא שכיום יש לכל אחת מהבעיות האלה מענה — וברוב המקרים הוא כלל לא מתחיל בחדר ניתוח.",
      "הברך היא תחום ההתמחות המרכזי של ד\"ר ויאצ'סלב דובנקו — מנתח כתף וברך עם 37 שנות ניסיון. הגישה שלו עקבית: אבחון מדויק תחילה, מיצוי הטיפול השמרני — פיזיותרפיה והזרקות — ורק כשבאמת צריך, ניתוח ארתרוסקופי זעיר־פולשני עם תוכנית שיקום סדורה.",
      "כאן תמצאו את כל המידע על פציעות הברך הנפוצות, על ההתלבטות בין הזרקות לניתוח, ועל הדרך חזרה לפעילות מלאה. המידע אינו תחליף לבדיקה אישית — אבל הוא נקודת פתיחה מצוינת לשיחה.",
    ],
  },
  en: {
    title: "Knee",
    subtitle:
      "From meniscus tears and ligament injuries to advanced arthroscopic surgery — Dr. Dubenko's core specialty.",
    intro: [
      "The knee carries us through every step — which is exactly why any pain in it is felt immediately in daily life. Knee injuries are common at every age: a meniscus tear in the recreational runner, a cruciate ligament injury on the football pitch, and cartilage wear that develops quietly over years. The good news is that each of these problems has an answer today — and in most cases it doesn't start in the operating room at all.",
      "The knee is the core specialty of Dr. Vyacheslav Dubenko — a shoulder and knee surgeon with 37 years of experience. His approach is consistent: precise diagnosis first, exhausting conservative treatment — physiotherapy and injections — and only when truly needed, minimally invasive arthroscopic surgery with a structured rehabilitation plan.",
      "Here you will find everything about the common knee injuries, the choice between injections and surgery, and the road back to full activity. The information is no substitute for a personal examination — but it's an excellent starting point for the conversation.",
    ],
  },
  ru: {
    title: "Колено",
    subtitle:
      "От разрывов мениска и повреждений связок до современных артроскопических операций — основная специализация д-ра Дубенко.",
    intro: [
      "Колено несёт нас на каждом шагу — именно поэтому любая боль в нём сразу ощущается в повседневной жизни. Травмы колена случаются в любом возрасте: разрыв мениска у бегуна-любителя, повреждение крестообразной связки на футбольном поле, износ хряща, который годами развивается незаметно. Хорошая новость в том, что у каждой из этих проблем сегодня есть решение — и в большинстве случаев оно начинается вовсе не в операционной.",
      "Колено — основная специализация д-ра Вячеслава Дубенко, хирурга плеча и колена с 37-летним опытом. Его подход последователен: сначала точная диагностика, затем все возможности консервативного лечения — физиотерапия и инъекции — и лишь когда это действительно нужно, малоинвазивная артроскопическая операция с выстроенной программой реабилитации.",
      "Здесь вы найдёте всю информацию о распространённых травмах колена, о выборе между инъекциями и операцией и о пути обратно к полной активности. Эта информация не заменяет личный осмотр — но она отличная отправная точка для разговора.",
    ],
  },
};
