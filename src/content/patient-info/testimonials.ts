// SAMPLE CONTENT — replace with real patient testimonials (with consent) before launch.

import type { Locale, Testimonial } from "@/content/types";

/**
 * Five sample testimonials (shoulder surgery, knee injection, ankle rehab,
 * sports injury, second opinion). Deliberately modest: no clinical claims
 * or outcomes beyond generic satisfaction.
 */
export const testimonials: Record<Locale, Testimonial[]> = {
  he: [
    {
      name: "יוסי כ.",
      context: "ניתוח כתף ארתרוסקופי",
      quote:
        "הגעתי לד\"ר דובנקו עם כאב כתף שליווה אותי חודשים ארוכים. הוא הסביר לי בסבלנות מה הבעיה, מה האפשרויות ומה צפוי בכל שלב — מהניתוח ועד השיקום. כל התהליך התנהל בדיוק כפי שתואר לי מראש, והרגשתי שיש מי שמלווה אותי לאורך כל הדרך.",
    },
    {
      name: "מרינה ל.",
      context: "הזרקות לברך",
      quote:
        "חששתי מאוד מהטיפול, אבל הד\"ר הרגיע אותי והסביר כל דבר ברוסית, בשפה שלי. ההזרקה עצמה הייתה מהירה ופחות מפחידה ממה שדמיינתי. קיבלתי הנחיות ברורות להמשך, וידעתי בדיוק למה לצפות.",
    },
    {
      name: "דנה ב.",
      context: "שיקום אחרי פציעת קרסול",
      quote:
        "אחרי הפציעה לא ידעתי אם לפנות לניתוח או לטיפול שמרני. ד\"ר דובנקו בדק לעומק, עבר איתי על ההדמיות והמליץ להתחיל בשיקום מסודר. ההסברים היו ברורים, התוכנית הייתה מציאותית, וחזרתי בהדרגה לשגרה שלי.",
    },
    {
      name: "איגור ש.",
      context: "פציעת ספורט",
      quote:
        "כחובב ריצה, הכי חשוב היה לי רופא שמבין ספורטאים. הד\"ר לא מיהר לפתרונות דרסטיים — הוא בנה איתי תוכנית מדורגת והסביר איך לחזור לאימונים בצורה נכונה. הליווי היה מקצועי ואנושי כאחד.",
    },
    {
      name: "אבי מ.",
      context: "חוות דעת שנייה",
      quote:
        "הגעתי לחוות דעת שנייה לפני החלטה על ניתוח. ד\"ר דובנקו הקדיש זמן אמיתי לבדיקה ולשאלות שלי, הסביר את היתרונות והחסרונות של כל אפשרות ולא לחץ לכיוון מסוים. יצאתי עם תמונה ברורה ויכולתי לקבל החלטה רגועה.",
    },
  ],
  en: [
    {
      name: "Yossi K.",
      context: "Arthroscopic shoulder surgery",
      quote:
        "I came to Dr. Dubenko with shoulder pain that had been with me for long months. He patiently explained the problem, the options, and what to expect at every stage — from the surgery through rehabilitation. The whole process went exactly as described in advance, and I felt accompanied the entire way.",
    },
    {
      name: "Marina L.",
      context: "Knee injections",
      quote:
        "I was very anxious about the treatment, but the doctor reassured me and explained everything in Russian, my own language. The injection itself was quick and far less frightening than I had imagined. I received clear instructions for what comes next and knew exactly what to expect.",
    },
    {
      name: "Dana B.",
      context: "Rehabilitation after an ankle injury",
      quote:
        "After the injury I didn't know whether to go for surgery or conservative treatment. Dr. Dubenko examined me thoroughly, went over the imaging with me and recommended starting with structured rehabilitation. The explanations were clear, the plan was realistic, and I gradually returned to my routine.",
    },
    {
      name: "Igor S.",
      context: "Sports injury",
      quote:
        "As an amateur runner, what mattered most to me was a doctor who understands athletes. The doctor didn't rush to drastic solutions — he built a gradual plan with me and explained how to return to training the right way. The care was professional and human at the same time.",
    },
    {
      name: "Avi M.",
      context: "Second opinion",
      quote:
        "I came for a second opinion before deciding on surgery. Dr. Dubenko dedicated real time to the examination and to my questions, explained the pros and cons of each option and never pushed in any particular direction. I left with a clear picture and could make a calm decision.",
    },
  ],
  ru: [
    {
      name: "Йоси К.",
      context: "Артроскопическая операция на плече",
      quote:
        "Я пришёл к д-ру Дубенко с болью в плече, которая сопровождала меня долгие месяцы. Он терпеливо объяснил, в чём проблема, какие есть варианты и чего ожидать на каждом этапе — от операции до реабилитации. Весь процесс прошёл именно так, как было описано заранее, и я чувствовал, что меня сопровождают на всём пути.",
    },
    {
      name: "Марина Л.",
      context: "Инъекции в коленный сустав",
      quote:
        "Я очень волновалась перед процедурой, но доктор успокоил меня и всё объяснил по-русски, на моём родном языке. Сама инъекция была быстрой и куда менее страшной, чем я себе представляла. Я получила чёткие инструкции на дальнейшее и точно знала, чего ожидать.",
    },
    {
      name: "Дана Б.",
      context: "Реабилитация после травмы голеностопа",
      quote:
        "После травмы я не знала, идти на операцию или выбрать консервативное лечение. Д-р Дубенко тщательно осмотрел меня, разобрал со мной снимки и порекомендовал начать с планомерной реабилитации. Объяснения были понятными, план — реалистичным, и я постепенно вернулась к своему привычному ритму.",
    },
    {
      name: "Игорь Ш.",
      context: "Спортивная травма",
      quote:
        "Как любителю бега, мне было важнее всего найти врача, который понимает спортсменов. Доктор не спешил с радикальными решениями — он составил со мной поэтапный план и объяснил, как правильно возвращаться к тренировкам. Сопровождение было одновременно профессиональным и человечным.",
    },
    {
      name: "Ави М.",
      context: "Второе мнение",
      quote:
        "Я обратился за вторым мнением перед решением об операции. Д-р Дубенко уделил настоящее время осмотру и моим вопросам, объяснил плюсы и минусы каждого варианта и ни к чему не подталкивал. Я ушёл с ясной картиной и смог принять решение спокойно.",
    },
  ],
};
