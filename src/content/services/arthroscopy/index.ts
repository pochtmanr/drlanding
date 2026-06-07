import type { Locale } from "@/content/types";

/** Hero + intro copy for the arthroscopic-surgery category page. */
export interface CategoryContent {
  title: string;
  subtitle: string;
  intro: string[];
}

export const content: Record<Locale, CategoryContent> = {
  he: {
    title: "ניתוחים ארתרוסקופיים",
    subtitle:
      "ניתוח זעיר־פולשני בהנחיית מצלמה, דרך חתכים קטנים — בכתף, במרפק, בברך ובקרסול.",
    intro: [
      "ארתרוסקופיה היא שיטת ניתוח זעיר־פולשנית: במקום לפתוח את המפרק בחתך גדול, המנתח מחדיר דרך חתכים קטנים מצלמה זעירה (ארתרוסקופ) ומכשירים עדינים, ורואה את פנים המפרק על מסך בהגדלה ובבהירות גבוהה. כך ניתן לאבחן ולתקן את הבעיה באותו הליך — בפגיעה מזערית ברקמות הבריאות שמסביב.",
      "היתרונות עבור המטופל מוחשיים: חתכים קטנים וצלקות מינימליות, פחות נזק לרקמות, פחות כאב לאחר הניתוח, סיכון מופחת לזיהום והחלמה מהירה יותר. ברוב המקרים מדובר בניתוח אמבולטורי — משתחררים הביתה עוד באותו היום. זו הסיבה שעבור ד\"ר ויאצ'סלב דובנקו, מנתח כתף וברך עם 37 שנות ניסיון, הגישה הארתרוסקופית היא דרך הטיפול הניתוחית המועדפת בכל מקרה שבו היא מתאימה.",
      "השיטה משרתת את רוב מפרקי הגוף הגדולים: הכתף (תיקון גיד סובב, ייצוב לאחר פריקות), הברך (מניסקוס, רצועות, סחוס), המרפק והקרסול. בעמודים שלפניכם תמצאו הסבר על הניתוחים בכל מפרק, וכן מדריכים מעשיים — הכנה לניתוח, שיקום לאחריו וטפסים לחברת הביטוח. המידע נועד לעשות סדר ולהרגיע, ואינו תחליף לייעוץ אישי — מוזמנים לקבוע תור.",
    ],
  },
  en: {
    title: "Arthroscopic Surgery",
    subtitle:
      "Minimally invasive, camera-guided surgery through small incisions — for the shoulder, elbow, knee and ankle.",
    intro: [
      "Arthroscopy is a minimally invasive surgical technique: instead of opening the joint with a large incision, the surgeon inserts a tiny camera (an arthroscope) and fine instruments through small incisions, and views the inside of the joint on a screen, magnified and in high clarity. This makes it possible to diagnose and repair the problem in the same procedure — with minimal disturbance to the healthy tissues around it.",
      "The benefits for the patient are tangible: small incisions and minimal scarring, less tissue damage, less pain after surgery, a reduced risk of infection and a faster recovery. In most cases the procedure is ambulatory — you go home the same day. That is why, for Dr. Vyacheslav Dubenko, a shoulder and knee surgeon with 37 years of experience, the arthroscopic approach is the preferred surgical option whenever it is suitable.",
      "The technique serves most of the body's large joints: the shoulder (rotator cuff repair, stabilization after dislocations), the knee (meniscus, ligaments, cartilage), the elbow and the ankle. On the pages below you will find an explanation of the procedures for each joint, along with practical guides — preparing for surgery, postoperative rehabilitation and insurance claim forms. The information is meant to clarify and reassure, and is not a substitute for a personal consultation — you are welcome to book an appointment.",
    ],
  },
  ru: {
    title: "Артроскопические операции",
    subtitle:
      "Малоинвазивная хирургия под контролем камеры, через небольшие разрезы — на плече, локте, колене и голеностопе.",
    intro: [
      "Артроскопия — это малоинвазивная хирургическая методика: вместо того чтобы открывать сустав большим разрезом, хирург вводит через небольшие проколы миниатюрную камеру (артроскоп) и тонкие инструменты и видит сустав изнутри на экране — с увеличением и в высокой чёткости. Это позволяет поставить диагноз и устранить проблему в рамках одной процедуры, минимально затрагивая окружающие здоровые ткани.",
      "Преимущества для пациента ощутимы: небольшие разрезы и минимальные рубцы, меньшая травма тканей, меньше боли после операции, сниженный риск инфекции и более быстрое восстановление. В большинстве случаев операция амбулаторная — домой вы возвращаетесь в тот же день. Именно поэтому для д-ра Вячеслава Дубенко, хирурга плеча и колена с 37-летним опытом, артроскопический подход — предпочтительный хирургический метод во всех случаях, где он применим.",
      "Методика подходит для большинства крупных суставов: плеча (восстановление вращательной манжеты, стабилизация после вывихов), колена (мениск, связки, хрящ), локтя и голеностопа. На страницах ниже вы найдёте описание операций на каждом суставе, а также практические памятки — подготовка к операции, послеоперационная реабилитация и документы для страховой компании. Эта информация призвана прояснить и успокоить, но не заменяет личную консультацию — приглашаем записаться на приём.",
    ],
  },
};
