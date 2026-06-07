"use client";

import { useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAV_MENUS, type MenuId } from "./nav-links";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={cn("rtl:rotate-180", className)}>
      <path
        d="M2.5 8h11M9 3.5L13.5 8 9 12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MegaPanel({
  openId,
  phone,
  onNavigate,
}: {
  openId: MenuId;
  phone: string;
  onNavigate: () => void;
}) {
  const t = useTranslations("common");
  const reduce = useReducedMotion();
  const menu = NAV_MENUS[openId];

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={openId}
        initial={reduce ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="grid min-h-[300px] grid-cols-[1fr_minmax(300px,360px)] gap-10 border-t border-line/60 p-8"
      >
        {/* Links column */}
        <div className="flex flex-col items-start">
          <p className="px-4 text-xs font-semibold tracking-widest text-muted uppercase">
            {t(menu.eyebrowKey)}
          </p>
          <ul
            className={cn(
              "mt-4 grid w-full gap-x-8 gap-y-1",
              menu.links.length > 3 ? "grid-cols-2" : "grid-cols-1",
            )}
          >
            {menu.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="group block rounded-2xl px-4 py-3.5 transition-colors hover:bg-primary-faint"
                >
                  <span className="flex items-center gap-2 text-xl font-semibold text-ink transition-colors group-hover:text-primary-deep">
                    {t(link.labelKey)}
                    <ArrowIcon className="ms-auto size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                  {link.descriptionKey && (
                    <span className="mt-1 block max-w-md text-sm leading-relaxed text-muted">
                      {t(link.descriptionKey)}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          {menu.viewAll && (
            <Link
              href={menu.viewAll.href}
              onClick={onNavigate}
              className="mt-auto inline-flex items-center gap-1.5 rounded-full px-4 py-2 pt-3 text-[15px] font-medium text-primary transition-colors hover:bg-primary-soft"
            >
              {t(menu.viewAll.labelKey)}
              <ArrowIcon className="size-3.5 shrink-0" />
            </Link>
          )}
        </div>

        {/* Featured CTA card */}
        <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-primary to-primary-deep p-7 text-white">
          <div>
            <p className="text-xl leading-snug font-semibold">
              {t("megaMenu.cta.title")}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              {t("megaMenu.cta.text")}
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Button asChild variant="white" size="md">
              <Link href="/appointment" onClick={onNavigate}>
                {t("megaMenu.cta.button")}
              </Link>
            </Button>
            <a
              dir="ltr"
              href={`tel:${phone}`}
              aria-label={t("header.phoneLabel")}
              className="text-center text-lg font-semibold tracking-wide text-white transition-colors hover:text-primary-soft"
            >
              {phone}
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
