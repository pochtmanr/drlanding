import type { Locale, ServicePageContent } from "@/content/types";

/**
 * /cookies — cookies notice. Describes only what the site actually uses:
 * localStorage for the cookie-consent choice and Supabase auth cookies on
 * the admin area. No advertising or analytics trackers exist on the site.
 */
export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "מדיניות עוגיות",
    subtitle: "באילו עוגיות ואחסון מקומי האתר משתמש — ובאילו לא",
    intro:
      "עמוד זה מסביר באילו עוגיות (Cookies) ובאיזה אחסון מקומי (Local Storage) משתמש אתר זה, לאיזו מטרה, וכיצד תוכלו למחוק אותם בדפדפן שלכם. בשורה התחתונה: האתר משתמש במינימום ההכרחי בלבד, ואין בו עוקבי פרסום כלל.",
    sections: [
      {
        heading: "מה האתר שומר בדפדפן שלכם",
        paragraphs: [
          "האתר שומר בדפדפן שני סוגי מידע בלבד:",
        ],
        bullets: [
          "בחירת ההסכמה שלכם לעוגיות — נשמרת באחסון המקומי של הדפדפן (localStorage), כדי שלא נציג לכם את הודעת העוגיות מחדש בכל ביקור. מידע זה נשאר במכשיר שלכם ואינו נשלח לשרת.",
          "עוגיות הזדהות של Supabase — נוצרות רק באזור הניהול של האתר, המיועד לצוות בלבד, כדי לשמור על התחברות מאובטחת. מבקרים רגילים באתר אינם מקבלים עוגיות אלה.",
        ],
      },
      {
        heading: "במה האתר לא משתמש",
        paragraphs: [
          "באתר אין עוגיות פרסום, אין פיקסלים של רשתות חברתיות ואין כלי מעקב של צדדים שלישיים. איננו בונים פרופיל גלישה ואיננו משתפים מידע על ביקורכם עם מפרסמים.",
        ],
      },
      {
        heading: "איך מוחקים את המידע",
        paragraphs: [
          "תוכלו למחוק בכל עת את העוגיות ואת האחסון המקומי דרך הגדרות הדפדפן — בדרך כלל תחת \"פרטיות ואבטחה\" ולאחר מכן \"מחיקת נתוני גלישה\" או \"עוגיות ונתוני אתרים\". אפשר למחוק נתונים של אתר זה בלבד או של כל האתרים.",
          "לאחר המחיקה ייתכן שתתבקשו לבחור שוב בהודעת העוגיות, ובאזור הניהול תידרש התחברות מחדש. שאר חלקי האתר ימשיכו לפעול כרגיל.",
        ],
        note: "יש לכם שאלה על מדיניות זו? ניתן לפנות אלינו בטלפון 08-9560938.",
      },
    ],
  },

  en: {
    title: "Cookies Notice",
    subtitle: "Which cookies and local storage this site uses — and which it does not",
    intro:
      "This page explains which cookies and local storage this website uses, for what purpose, and how you can clear them in your browser. The bottom line: the site uses only the bare minimum, and it contains no advertising trackers at all.",
    sections: [
      {
        heading: "What the site stores in your browser",
        paragraphs: [
          "The site stores only two kinds of information in your browser:",
        ],
        bullets: [
          "Your cookie-consent choice — kept in the browser's local storage (localStorage), so we do not show you the cookie banner again on every visit. This information stays on your device and is not sent to the server.",
          "Supabase authentication cookies — created only in the site's admin area, which is intended for staff, to keep their sign-in secure. Regular visitors to the site do not receive these cookies.",
        ],
      },
      {
        heading: "What the site does not use",
        paragraphs: [
          "There are no advertising cookies, no social-network pixels and no third-party tracking tools on this site. We do not build a browsing profile and we do not share information about your visit with advertisers.",
        ],
      },
      {
        heading: "How to clear the data",
        paragraphs: [
          "You can clear the cookies and local storage at any time through your browser settings — usually under \"Privacy and security\" and then \"Clear browsing data\" or \"Cookies and site data\". You can clear data for this site only, or for all sites.",
          "After clearing, you may be asked to make your cookie choice again, and the admin area will require signing in again. The rest of the site will keep working as usual.",
        ],
        note: "Have a question about this notice? You can contact us by phone at 08-9560938.",
      },
    ],
  },

  ru: {
    title: "Политика использования файлов cookie",
    subtitle: "Какие cookie и локальное хранилище использует сайт — а какие нет",
    intro:
      "На этой странице объясняется, какие файлы cookie и какое локальное хранилище использует этот сайт, с какой целью и как очистить их в вашем браузере. Главное: сайт использует только необходимый минимум, и рекламных трекеров на нём нет вовсе.",
    sections: [
      {
        heading: "Что сайт сохраняет в вашем браузере",
        paragraphs: [
          "Сайт сохраняет в браузере только два вида информации:",
        ],
        bullets: [
          "Ваш выбор согласия на использование cookie — сохраняется в локальном хранилище браузера (localStorage), чтобы не показывать вам уведомление о cookie при каждом посещении. Эта информация остаётся на вашем устройстве и не отправляется на сервер.",
          "Cookie аутентификации Supabase — создаются только в административном разделе сайта, предназначенном для персонала, чтобы обеспечить безопасный вход. Обычные посетители сайта эти cookie не получают.",
        ],
      },
      {
        heading: "Что сайт не использует",
        paragraphs: [
          "На сайте нет рекламных cookie, пикселей социальных сетей и сторонних инструментов отслеживания. Мы не составляем профиль вашего поведения в интернете и не передаём информацию о вашем посещении рекламодателям.",
        ],
      },
      {
        heading: "Как удалить эти данные",
        paragraphs: [
          "Вы можете в любой момент удалить cookie и данные локального хранилища в настройках браузера — обычно в разделе «Конфиденциальность и безопасность», далее «Очистить данные браузера» или «Файлы cookie и данные сайтов». Можно удалить данные только этого сайта или всех сайтов сразу.",
          "После удаления вам, возможно, снова будет показано уведомление о cookie, а для входа в административный раздел потребуется повторная авторизация. Остальные разделы сайта продолжат работать как обычно.",
        ],
        note: "Есть вопрос об этой политике? Позвоните нам по телефону 08-9560938.",
      },
    ],
  },
};
