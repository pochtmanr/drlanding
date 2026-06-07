import type { Locale } from "@/content/types";

/** Hero + intro copy for the ankle & foot category page. */
export interface CategoryContent {
  title: string;
  subtitle: string;
  intro: string[];
}

export const content: Record<Locale, CategoryContent> = {
  he: {
    title: "קרסול וכף רגל",
    subtitle:
      "מנקע 'פשוט' שלא נרפא ועד חוסר יציבות כרוני ובעיות בגיד אכילס — אבחון וטיפול בקרסול ובכף הרגל.",
    intro: [
      "הקרסול הוא המפרק שסופג את הצעד הראשון של הבוקר ואת הנחיתה האחרונה באימון — ובכל זאת, הפציעות בו הן מהמוזנחות ביותר. נקע בקרסול הוא הפציעה השנייה בשכיחותה באורתופדיה, ורבים ממהרים לחזור לפעילות לפני שהרצועות באמת החלימו. כך נולד חוסר יציבות כרוני: קרסול ש'בורח' שוב ושוב, ונקע רודף נקע.",
      "ד\"ר ויאצ'סלב דובנקו, מומחה לאורתופדיה עם 37 שנות ניסיון, מטפל בכל קשת הבעיות של הקרסול וכף הרגל: נקעים טריים וחוזרים, חוסר יציבות, דלקות ופגיעות בגיד אכילס. הגישה תמיד מדורגת — קודם אבחון מדויק וטיפול שמרני, הזרקות כשצריך, וניתוח ארתרוסקופי או ייצוב רק כשמוצו האפשרויות האחרות.",
      "בעמודים שלפניכם תמצאו הסבר על הפציעות הנפוצות, על אפשרויות ההזרקה והניתוח, ועל השיקום והפיזיותרפיה שמחזירים את הקרסול ליציבות מלאה. המידע אינו תחליף לבדיקה אישית — אך הוא יעזור לכם להגיע לפגישה עם השאלות הנכונות.",
    ],
  },
  en: {
    title: "Ankle & Foot",
    subtitle:
      "From a \"simple\" sprain that never healed to chronic instability and Achilles tendon problems — diagnosis and treatment of the ankle and foot.",
    intro: [
      "The ankle is the joint that absorbs the first step of the morning and the last landing of the workout — and yet its injuries are among the most neglected. An ankle sprain is the second most common injury in orthopedics, and many people rush back to activity before the ligaments have truly healed. That is how chronic instability is born: an ankle that \"gives way\" again and again, one sprain chasing the next.",
      "Dr. Vyacheslav Dubenko, an orthopedic specialist with 37 years of experience, treats the full spectrum of ankle and foot problems: fresh and recurring sprains, instability, inflammation and Achilles tendon injuries. The approach is always stepwise — precise diagnosis and conservative treatment first, injections when needed, and arthroscopic or stabilization surgery only once the other options have been exhausted.",
      "In the pages ahead you will find explanations of the common injuries, of the injection and surgical options, and of the rehabilitation and physiotherapy that restore the ankle to full stability. The information is no substitute for a personal examination — but it will help you arrive at the appointment with the right questions.",
    ],
  },
  ru: {
    title: "Голеностоп и стопа",
    subtitle:
      "От «простого» растяжения, которое так и не зажило, до хронической нестабильности и проблем с ахилловым сухожилием — диагностика и лечение голеностопа и стопы.",
    intro: [
      "Голеностоп — сустав, который принимает на себя первый шаг утром и последнее приземление на тренировке, и при этом его травмы — одни из самых запущенных. Растяжение связок голеностопа — вторая по частоте травма в ортопедии, и многие спешат вернуться к активности раньше, чем связки действительно зажили. Так рождается хроническая нестабильность: голеностоп, который «подворачивается» снова и снова, и одно растяжение тянет за собой следующее.",
      "Д-р Вячеслав Дубенко, специалист-ортопед с 37-летним опытом, лечит весь спектр проблем голеностопа и стопы: свежие и повторные растяжения, нестабильность, воспаления и повреждения ахиллова сухожилия. Подход всегда поэтапный — сначала точная диагностика и консервативное лечение, при необходимости инъекции, и лишь когда остальные возможности исчерпаны — артроскопическая или стабилизирующая операция.",
      "На следующих страницах вы найдёте объяснение распространённых травм, вариантов инъекций и операций, а также реабилитации и физиотерапии, которые возвращают голеностопу полную устойчивость. Эта информация не заменяет личный осмотр — но поможет прийти на приём с правильными вопросами.",
    ],
  },
};
