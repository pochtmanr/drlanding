import type { Locale, ServicePageContent } from "@/content/types";

/**
 * /privacy — privacy policy. Covers exactly what the site actually does:
 * the appointment/contact forms (name, phone, email, message) stored in
 * Supabase for handling the request only. No invented emails, registration
 * numbers or retention periods — deletion requests are handled by phone.
 */
export const content: Record<Locale, ServicePageContent> = {
  he: {
    title: "מדיניות פרטיות",
    subtitle: "איזה מידע נאסף באתר, למה הוא משמש וכיצד הוא נשמר",
    intro:
      "הפרטיות שלכם חשובה לנו. עמוד זה מסביר, בשפה פשוטה, איזה מידע נאסף באתר זה, לאיזו מטרה הוא משמש, היכן הוא נשמר ואילו זכויות עומדות לכם — ברוח חוק הגנת הפרטיות, התשמ\"א-1981, והתקנות מכוחו.",
    sections: [
      {
        heading: "איזה מידע אנחנו אוספים",
        paragraphs: [
          "האתר אוסף רק את המידע שאתם בוחרים למסור לנו בטפסים — טופס קביעת התור וטופס יצירת הקשר:",
        ],
        bullets: [
          "שם מלא ומספר טלפון.",
          "כתובת דוא\"ל — אם בחרתם לציין אותה.",
          "פרטי הפנייה שמילאתם: מרפאה ותאריך מועדפים, תחום הפנייה, נושא ותוכן ההודעה.",
          "שפת הממשק שבה מילאתם את הטופס — כדי שנוכל לחזור אליכם בשפה הנוחה לכם.",
        ],
      },
      {
        heading: "למה המידע משמש",
        paragraphs: [
          "המידע משמש למטרה אחת בלבד: טיפול בפנייתכם — חזרה אליכם לתיאום תור או מענה לשאלתכם. איננו משתמשים בפרטים לדיוור שיווקי, איננו מוכרים או משכירים אותם לגורם שלישי, ואיננו מעבירים אותם לאיש מלבד הצוות המטפל בפניות, אלא אם נדרש על פי דין.",
        ],
      },
      {
        heading: "היכן וכיצד המידע נשמר",
        paragraphs: [
          "הפניות נשמרות במאגר מאובטח בשירות Supabase — ספק תשתית ענן שבו מתנהל מסד הנתונים של האתר. הגישה לפניות מוגבלת לצוות המורשה בלבד, באמצעות הזדהות מאובטחת. התקשורת בין הדפדפן לשרת מוצפנת (HTTPS).",
          "מסירת המידע בטפסים נעשית מרצונכם החופשי ואינה חובה על פי חוק — אך בלעדיה לא נוכל לחזור אליכם דרך האתר. תמיד אפשר לפנות אלינו בטלפון במקום.",
        ],
      },
      {
        heading: "הזכויות שלכם",
        paragraphs: [
          "על פי חוק הגנת הפרטיות, אתם רשאים לבקש לעיין במידע שמסרתם לנו, לתקנו או לבקש את מחיקתו. לכל בקשה כזו — וכן לכל שאלה על מדיניות זו — ניתן לפנות אלינו בטלפון 08-9560938, ונטפל בבקשה בהקדם.",
        ],
        note: "מדיניות זו עשויה להתעדכן מעת לעת; הנוסח המחייב הוא זה המפורסם בעמוד זה.",
      },
    ],
  },

  en: {
    title: "Privacy Policy",
    subtitle: "What information this site collects, what it is used for and how it is stored",
    intro:
      "Your privacy matters to us. This page explains, in plain language, what information is collected on this website, the purpose it serves, where it is stored and what rights you have — in the spirit of Israel's Protection of Privacy Law, 5741-1981, and the regulations under it.",
    sections: [
      {
        heading: "What information we collect",
        paragraphs: [
          "The site collects only the information you choose to share with us through the forms — the appointment form and the contact form:",
        ],
        bullets: [
          "Full name and phone number.",
          "Email address — if you chose to provide one.",
          "The details of your request: preferred clinic and date, the area of your concern, the subject and the body of your message.",
          "The interface language in which you filled in the form — so we can get back to you in the language you are comfortable with.",
        ],
      },
      {
        heading: "What the information is used for",
        paragraphs: [
          "The information serves a single purpose: handling your request — calling you back to schedule an appointment or answering your question. We do not use the details for marketing, we do not sell or rent them to any third party, and we do not share them with anyone beyond the team handling the requests, unless required by law.",
        ],
      },
      {
        heading: "Where and how the information is stored",
        paragraphs: [
          "Submissions are stored in a secured database hosted on Supabase — the cloud infrastructure provider on which the site's database runs. Access to the submissions is restricted to authorized staff only, behind secure authentication. Communication between your browser and the server is encrypted (HTTPS).",
          "Providing your details in the forms is voluntary and is not required by law — but without them we cannot get back to you through the website. You can always call us by phone instead.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under the Protection of Privacy Law, you may ask to review the information you provided to us, to correct it, or to request its deletion. For any such request — and for any question about this policy — you can contact us by phone at 08-9560938, and we will handle it promptly.",
        ],
        note: "This policy may be updated from time to time; the binding version is the one published on this page.",
      },
    ],
  },

  ru: {
    title: "Политика конфиденциальности",
    subtitle: "Какие данные собирает сайт, для чего они используются и как хранятся",
    intro:
      "Ваша конфиденциальность важна для нас. На этой странице простым языком объясняется, какие данные собираются на этом сайте, с какой целью, где они хранятся и какие права у вас есть — в духе израильского Закона о защите частной жизни (5741-1981) и принятых на его основании постановлений.",
    sections: [
      {
        heading: "Какие данные мы собираем",
        paragraphs: [
          "Сайт собирает только те данные, которые вы сами указываете в формах — форме записи на приём и форме обратной связи:",
        ],
        bullets: [
          "Полное имя и номер телефона.",
          "Адрес электронной почты — если вы решили его указать.",
          "Содержание вашего обращения: предпочтительные клиника и дата, область обращения, тема и текст сообщения.",
          "Язык интерфейса, на котором вы заполнили форму, — чтобы мы могли связаться с вами на удобном для вас языке.",
        ],
      },
      {
        heading: "Для чего используются данные",
        paragraphs: [
          "Данные используются с одной-единственной целью: для обработки вашего обращения — обратного звонка для согласования приёма или ответа на ваш вопрос. Мы не используем их для маркетинговых рассылок, не продаём и не передаём третьим лицам и не предоставляем доступ к ним никому, кроме сотрудников, обрабатывающих обращения, — за исключением случаев, предусмотренных законом.",
        ],
      },
      {
        heading: "Где и как хранятся данные",
        paragraphs: [
          "Обращения хранятся в защищённой базе данных на платформе Supabase — облачном провайдере, на инфраструктуре которого работает база данных сайта. Доступ к обращениям ограничен только уполномоченными сотрудниками и защищён аутентификацией. Связь между браузером и сервером шифруется (HTTPS).",
          "Передача данных через формы происходит добровольно и не является обязанностью по закону — но без неё мы не сможем связаться с вами через сайт. Вы всегда можете вместо этого позвонить нам по телефону.",
        ],
      },
      {
        heading: "Ваши права",
        paragraphs: [
          "Согласно Закону о защите частной жизни, вы вправе запросить ознакомление с переданными нам данными, их исправление или удаление. С любым таким запросом — а также с любым вопросом об этой политике — можно обратиться к нам по телефону 08-9560938, и мы оперативно его рассмотрим.",
        ],
        note: "Политика может время от времени обновляться; действующей является редакция, опубликованная на этой странице.",
      },
    ],
  },
};
