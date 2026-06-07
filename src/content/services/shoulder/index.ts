import type { Locale } from "@/content/types";

/** Hero + intro copy for the shoulder & elbow category page. */
export interface CategoryContent {
  title: string;
  subtitle: string;
  intro: string[];
}

export const content: Record<Locale, CategoryContent> = {
  he: {
    title: "כתף ומרפק",
    subtitle:
      "אבחון וטיפול בכאבים, פציעות וחוסר יציבות בכתף ובמרפק — מטיפול שמרני ועד ניתוח ארתרוסקופי זעיר־פולשני.",
    intro: [
      "הכתף היא המפרק הנייד ביותר בגוף האדם — וטווח התנועה המרשים הזה הוא בדיוק מה שהופך אותה לאחד המפרקים הפגיעים ביותר. כאבי כתף יכולים להופיע אחרי פציעת ספורט או נפילה, בעקבות תנועות חוזרות בעבודה, ולעיתים גם בלי אירוע ברור. גם המרפק, שמלווה אותנו בכל הרמה של כוס קפה ובכל אימון, חשוף לעומסים ולפציעות שחיקה.",
      "ד\"ר ויאצ'סלב דובנקו, מנתח כתף וברך עם 37 שנות ניסיון, מלווה את המטופלים לאורך כל הדרך: אבחון מדויק של מקור הכאב, טיפול שמרני בעדיפות ראשונה — פיזיותרפיה, הזרקות והתאמת העומס — ובמקרים המתאימים ניתוח ארתרוסקופי בחתכים קטנים.",
      "בעמודים שלפניכם תמצאו הסבר על הפציעות הנפוצות, על אפשרויות הטיפול ועל תהליך השיקום. המידע נועד להסביר ולעשות סדר — אך אינו תחליף לבדיקה אישית. בכל שאלה, אתם מוזמנים לקבוע תור.",
    ],
  },
  en: {
    title: "Shoulder & Elbow",
    subtitle:
      "Diagnosis and treatment of pain, injuries and instability of the shoulder and elbow — from conservative care to minimally invasive arthroscopic surgery.",
    intro: [
      "The shoulder is the most mobile joint in the human body — and that impressive range of motion is exactly what makes it one of the most vulnerable. Shoulder pain can appear after a sports injury or a fall, from repetitive movements at work, and sometimes without any clear trigger at all. The elbow, which works with us in every lift of a coffee cup and every workout, is equally exposed to overload and overuse injuries.",
      "Dr. Vyacheslav Dubenko, a shoulder and knee surgeon with 37 years of experience, accompanies patients along the entire journey: a precise diagnosis of the source of pain, conservative treatment as the first priority — physiotherapy, injections and load adjustment — and, in suitable cases, arthroscopic surgery through small incisions.",
      "On the pages below you will find explanations of the common injuries, the treatment options and the rehabilitation process. The information is meant to clarify and reassure — but it is not a substitute for a personal examination. For any question, you are welcome to book an appointment.",
    ],
  },
  ru: {
    title: "Плечо и локоть",
    subtitle:
      "Диагностика и лечение боли, травм и нестабильности плеча и локтя — от консервативного лечения до малоинвазивной артроскопической операции.",
    intro: [
      "Плечо — самый подвижный сустав человеческого тела, и именно этот впечатляющий объём движений делает его одним из самых уязвимых. Боль в плече может появиться после спортивной травмы или падения, из-за повторяющихся движений на работе, а иногда и вовсе без очевидной причины. Локоть, который работает с нами при каждом поднятии чашки кофе и на каждой тренировке, так же подвержен перегрузкам и травмам от износа.",
      "Д-р Вячеслав Дубенко, хирург плеча и колена с 37-летним опытом, сопровождает пациентов на всём пути: точная диагностика источника боли, консервативное лечение в первую очередь — физиотерапия, инъекции и коррекция нагрузки — а в подходящих случаях артроскопическая операция через небольшие разрезы.",
      "На страницах ниже вы найдёте объяснение частых травм, вариантов лечения и процесса реабилитации. Эта информация призвана прояснить и успокоить, но она не заменяет личный осмотр. По любому вопросу вы можете записаться на приём.",
    ],
  },
};
