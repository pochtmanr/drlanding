/**
 * Canonical list of all public routes — the slug contract for the whole
 * site. Feature prompts implement pages at EXACTLY these paths (one
 * English slug set shared by all locales). Also drives sitemap.xml.
 */
export const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/sports-orthopedics",

  "/services",
  "/services/shoulder-elbow",
  "/services/shoulder-elbow/shoulder-pain-injuries",
  "/services/shoulder-elbow/injections",
  "/services/shoulder-elbow/shoulder-surgery",
  "/services/shoulder-elbow/elbow-surgery",
  "/services/shoulder-elbow/rehabilitation",
  "/services/shoulder-elbow/physiotherapy",

  "/services/knee",
  "/services/knee/injuries",
  "/services/knee/injections-vs-surgery",
  "/services/knee/surgery",
  "/services/knee/rehabilitation",
  "/services/knee/physiotherapy",

  "/services/ankle-foot",
  "/services/ankle-foot/injuries",
  "/services/ankle-foot/injections",
  "/services/ankle-foot/surgery",
  "/services/ankle-foot/rehabilitation",
  "/services/ankle-foot/physiotherapy",

  "/services/joint-injections",
  "/services/joint-injections/prp-hyaluronic-combined",
  "/services/joint-injections/prp",
  "/services/joint-injections/orthokine",
  "/services/joint-injections/hyaluronic-acid",
  "/services/joint-injections/steroid",
  "/services/joint-injections/insurance-forms",
  "/services/joint-injections/self-physiotherapy",

  "/services/arthroscopic-surgery",
  "/services/arthroscopic-surgery/shoulder",
  "/services/arthroscopic-surgery/elbow",
  "/services/arthroscopic-surgery/knee",
  "/services/arthroscopic-surgery/ankle-foot",
  "/services/arthroscopic-surgery/preparation",
  "/services/arthroscopic-surgery/rehabilitation",
  "/services/arthroscopic-surgery/insurance-forms",

  "/patient-info",
  "/patient-info/testimonials",
  "/patient-info/faq",
  "/patient-info/articles",
  "/patient-info/articles/sports-injury-prevention",
  "/patient-info/articles/rehabilitation-tips",
  "/patient-info/articles/return-to-sport",

  "/appointment",
  "/contact",

  "/accessibility",
  "/privacy",
  "/cookies",
] as const;

export type PublicRoute = (typeof PUBLIC_ROUTES)[number];
