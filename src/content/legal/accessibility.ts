import type { Locale, ServicePageContent } from "@/content/types";

/**
 * /accessibility — accessibility statement. Generic contact phrasing only:
 * no named accessibility officer, no email, no invented details
 * (see prompts/07 + reference/docinfo.md). Issues are reported by phone
 * to the main clinic number.
 */
export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "הצהרת נגישות",
    subtitle: "המחויבות שלנו לאתר נגיש לכל מטופלת ומטופל",
    intro:
      "אנו רואים חשיבות רבה בכך שכל מטופלת ומטופל — לרבות אנשים עם מוגבלות — יוכלו לקבל באתר זה מידע על המרפאות ועל אפשרויות הטיפול, ולפנות אלינו בקלות ובכבוד. עמוד זה מסביר מה נעשה באתר למען הנגישות וכיצד ניתן לפנות אלינו אם נתקלתם בקושי.",
    sections: [
      {
        heading: "המחויבות שלנו",
        paragraphs: [
          "האתר נבנה מתוך שאיפה לעמוד בהנחיות הנגישות לתכני אינטרנט WCAG 2.1 ברמה AA, ברוח התקן הישראלי ת\"י 5568 ותקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות). הנגישות נלקחה בחשבון כבר בשלב התכנון והעיצוב, והיא נבחנת באופן שוטף ככל שהאתר מתעדכן.",
        ],
      },
      {
        heading: "מה האתר תומך בו",
        paragraphs: [
          "בין היתר, באתר הוטמעו האמצעים הבאים:",
        ],
        bullets: [
          "ניווט מלא באמצעות מקלדת בכל עמודי האתר ובטפסים.",
          "קישור \"דילוג לתוכן המרכזי\" בראש כל עמוד.",
          "כיבוד העדפת המשתמש להפחתת אנימציות (prefers-reduced-motion) — מי שבחר בכך במערכת ההפעלה יראה את האתר ללא אנימציות.",
          "מבנה סמנטי תקין: כותרות מדורגות, אזורי ניווט מסומנים ותיוג שדות בטפסים.",
          "טקסט חלופי לתמונות וניגודיות צבעים בהתאם להנחיות.",
          "תמיכה מלאה בכיווניות מימין לשמאל בעברית, לצד גרסאות מלאות באנגלית וברוסית.",
        ],
      },
      {
        heading: "מגבלות ידועות",
        paragraphs: [
          "אנו פועלים להנגשת כלל תכני האתר, אך ייתכן שעדיין קיימים בו רכיבים או עמודים שאינם נגישים במלואם. אם נתקלתם ברכיב כזה — נשמח מאוד שתדווחו לנו עליו, ונפעל לתקנו בהקדם האפשרי.",
        ],
      },
      {
        heading: "נתקלתם בבעיה? ספרו לנו",
        paragraphs: [
          "אם נתקלתם בקושי בשימוש באתר, או שיש לכם הצעה לשיפור הנגישות, ניתן לפנות אלינו בטלפון 08-9560938 ונשתדל לסייע ולטפל בפנייה בהקדם. כדי שנוכל לטפל ביעילות, מומלץ לציין באיזה עמוד מדובר ומה טיב הקושי.",
        ],
        note: "הצהרה זו מתעדכנת מעת לעת בהתאם לשינויים באתר.",
      },
    ],
  },

  en: {
    title: "Accessibility Statement",
    subtitle: "Our commitment to a website accessible to every patient",
    intro:
      "We believe every patient — including people with disabilities — should be able to use this website to find information about the clinics and treatment options, and to contact us easily and with dignity. This page explains what the site does for accessibility and how to reach us if you run into difficulty.",
    sections: [
      {
        heading: "Our commitment",
        paragraphs: [
          "The site was built to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA, in the spirit of Israeli Standard 5568 and the regulations under the Equal Rights for Persons with Disabilities Law (service accessibility adjustments). Accessibility was considered from the design stage onward and is reviewed continuously as the site evolves.",
        ],
      },
      {
        heading: "What the site supports",
        paragraphs: [
          "Among other measures, the site includes the following:",
        ],
        bullets: [
          "Full keyboard navigation across all pages and forms.",
          "A \"skip to main content\" link at the top of every page.",
          "Respect for the user's reduced-motion preference (prefers-reduced-motion) — if you enable it in your operating system, the site renders without animations.",
          "Sound semantic structure: ordered headings, labelled navigation landmarks and labelled form fields.",
          "Alternative text for images and color contrast in line with the guidelines.",
          "Full right-to-left support in Hebrew, alongside complete English and Russian versions.",
        ],
      },
      {
        heading: "Known limitations",
        paragraphs: [
          "We work to make all of the site's content accessible, but some components or pages may not yet be fully accessible. If you encounter such an element, we would very much appreciate a report — we will work to fix it as soon as possible.",
        ],
      },
      {
        heading: "Found an issue? Tell us",
        paragraphs: [
          "If you have difficulty using the site, or a suggestion for improving its accessibility, you can contact us by phone at 08-9560938 and we will do our best to help and to handle the matter promptly. To help us act efficiently, please mention which page is involved and what kind of difficulty you experienced.",
        ],
        note: "This statement is updated from time to time as the site changes.",
      },
    ],
  },

  ru: {
    title: "Заявление о доступности",
    subtitle: "Наша приверженность сайту, доступному каждому пациенту",
    intro:
      "Мы считаем важным, чтобы каждый пациент — в том числе люди с ограниченными возможностями — мог найти на этом сайте информацию о клиниках и вариантах лечения и легко, с уважением к себе, связаться с нами. На этой странице описано, что сделано на сайте для доступности и как сообщить нам о трудностях.",
    sections: [
      {
        heading: "Наши обязательства",
        paragraphs: [
          "Сайт создавался с целью соответствовать «Руководству по обеспечению доступности веб-контента» (WCAG) 2.1 на уровне AA, в духе израильского стандарта 5568 и постановлений к Закону о равноправии людей с ограниченными возможностями (адаптация доступности услуг). Доступность учитывалась уже на этапе проектирования и дизайна и постоянно проверяется по мере обновления сайта.",
        ],
      },
      {
        heading: "Что поддерживает сайт",
        paragraphs: [
          "В числе прочего на сайте реализовано следующее:",
        ],
        bullets: [
          "Полная навигация с клавиатуры на всех страницах и в формах.",
          "Ссылка «перейти к основному содержанию» в начале каждой страницы.",
          "Учёт пользовательской настройки уменьшения анимации (prefers-reduced-motion) — если она включена в операционной системе, сайт отображается без анимаций.",
          "Корректная семантическая структура: иерархия заголовков, размеченные области навигации и подписанные поля форм.",
          "Альтернативный текст для изображений и цветовой контраст в соответствии с рекомендациями.",
          "Полная поддержка направления письма справа налево на иврите, а также полноценные версии на английском и русском языках.",
        ],
      },
      {
        heading: "Известные ограничения",
        paragraphs: [
          "Мы стремимся сделать доступным всё содержимое сайта, однако отдельные компоненты или страницы пока могут быть доступны не полностью. Если вы столкнулись с таким элементом — будем очень благодарны за сообщение и постараемся исправить его как можно скорее.",
        ],
      },
      {
        heading: "Столкнулись с проблемой? Сообщите нам",
        paragraphs: [
          "Если вам трудно пользоваться сайтом или у вас есть предложение по улучшению доступности, позвоните нам по телефону 08-9560938 — мы постараемся помочь и оперативно разобраться с обращением. Чтобы мы могли действовать эффективно, пожалуйста, укажите, о какой странице идёт речь и в чём заключается трудность.",
        ],
        note: "Это заявление время от времени обновляется по мере изменения сайта.",
      },
    ],
  },
};
