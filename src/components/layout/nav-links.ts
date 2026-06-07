/**
 * Single source of truth for site navigation. Labels are translation keys
 * inside the `common` namespace. All final routes are wired here up front —
 * feature prompts add pages but never edit navigation.
 */

export interface NavLink {
  /** Key inside common.json, e.g. "nav.about" */
  labelKey: string;
  href: string;
  /** Short blurb shown under the title inside mega menu panels. */
  descriptionKey?: string;
}

export type MenuId = "services" | "patientInfo" | "contact";

export interface NavMenu {
  id: MenuId;
  /** Trigger label, e.g. "nav.services" */
  labelKey: string;
  /** Small uppercase label at the top of the mega panel. */
  eyebrowKey: string;
  links: NavLink[];
  /** Optional hub link rendered below the list ("All services"). */
  viewAll?: NavLink;
}

export type NavItem =
  | { type: "link"; link: NavLink }
  | { type: "menu"; menu: NavMenu };

/** Desktop + mobile navigation, in display order. */
export const NAV_ITEMS: NavItem[] = [
  {
    type: "menu",
    menu: {
      id: "services",
      labelKey: "nav.services",
      eyebrowKey: "megaMenu.eyebrow.services",
      links: [
        {
          labelKey: "servicesMenu.shoulderElbow",
          href: "/services/shoulder-elbow",
          descriptionKey: "servicesMenu.descriptions.shoulderElbow",
        },
        {
          labelKey: "servicesMenu.knee",
          href: "/services/knee",
          descriptionKey: "servicesMenu.descriptions.knee",
        },
        {
          labelKey: "servicesMenu.ankleFoot",
          href: "/services/ankle-foot",
          descriptionKey: "servicesMenu.descriptions.ankleFoot",
        },
        {
          labelKey: "servicesMenu.jointInjections",
          href: "/services/joint-injections",
          descriptionKey: "servicesMenu.descriptions.jointInjections",
        },
        {
          labelKey: "servicesMenu.arthroscopy",
          href: "/services/arthroscopic-surgery",
          descriptionKey: "servicesMenu.descriptions.arthroscopy",
        },
      ],
      viewAll: { labelKey: "servicesMenu.allServices", href: "/services" },
    },
  },
  { type: "link", link: { labelKey: "nav.sports", href: "/sports-orthopedics" } },
  {
    type: "menu",
    menu: {
      id: "patientInfo",
      labelKey: "nav.patientInfo",
      eyebrowKey: "megaMenu.eyebrow.patientInfo",
      links: [
        {
          labelKey: "patientInfoMenu.testimonials",
          href: "/patient-info/testimonials",
          descriptionKey: "patientInfoMenu.descriptions.testimonials",
        },
        {
          labelKey: "patientInfoMenu.faq",
          href: "/patient-info/faq",
          descriptionKey: "patientInfoMenu.descriptions.faq",
        },
        {
          labelKey: "patientInfoMenu.articles",
          href: "/patient-info/articles",
          descriptionKey: "patientInfoMenu.descriptions.articles",
        },
      ],
      viewAll: { labelKey: "patientInfoMenu.hub", href: "/patient-info" },
    },
  },
  {
    type: "menu",
    menu: {
      id: "contact",
      labelKey: "nav.contact",
      eyebrowKey: "megaMenu.eyebrow.contact",
      links: [
        {
          labelKey: "contactMenu.appointment",
          href: "/appointment",
          descriptionKey: "contactMenu.descriptions.appointment",
        },
        {
          labelKey: "contactMenu.contactUs",
          href: "/contact",
          descriptionKey: "contactMenu.descriptions.contactUs",
        },
      ],
    },
  },
];

/** Lookup used by the mega panel. */
export const NAV_MENUS: Record<MenuId, NavMenu> = Object.fromEntries(
  NAV_ITEMS.filter(
    (item): item is Extract<NavItem, { type: "menu" }> => item.type === "menu",
  ).map((item) => [item.menu.id, item.menu]),
) as Record<MenuId, NavMenu>;

/* Legacy flat lists — still consumed by the footer. */

export const SERVICE_LINKS: NavLink[] = NAV_MENUS.services.links;

export const MAIN_LINKS: NavLink[] = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.about", href: "/about" },
  { labelKey: "nav.sports", href: "/sports-orthopedics" },
  { labelKey: "nav.patientInfo", href: "/patient-info" },
  { labelKey: "nav.contact", href: "/contact" },
];

export const LEGAL_LINKS: NavLink[] = [
  { labelKey: "footer.accessibility", href: "/accessibility" },
  { labelKey: "footer.privacy", href: "/privacy" },
  { labelKey: "footer.cookies", href: "/cookies" },
];
