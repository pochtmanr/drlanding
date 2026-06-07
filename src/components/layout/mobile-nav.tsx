"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "./locale-switcher";
import { NAV_ITEMS } from "./nav-links";

export function MobileNav({ phone }: { phone: string }) {
  const t = useTranslations("common");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  const close = () => setOpen(false);

  // Portal target only exists on the client.
  useEffect(() => setMounted(true), []);

  // Lock body scroll while the sheet is open. The data attribute lets the
  // header pill drop its ring/shadow so it blends into the white sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.body.toggleAttribute("data-mobile-nav-open", open);
    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-mobile-nav-open");
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? t("header.closeMenu") : t("header.openMenu")}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "grid size-11 place-items-center rounded-full border text-ink transition-colors hover:text-primary",
          open ? "border-transparent" : "border-line hover:border-primary",
        )}
      >
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          {open ? (
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {/* Portaled to <body>: the pill's backdrop-blur creates a containing
          block that would otherwise trap this fixed overlay inside it. */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-40 overflow-y-auto bg-white"
              >
            {/* pt clears the floating pill header (72px footprint). */}
            <nav className="flex min-h-full flex-col gap-1 px-5 pt-24 pb-8">
              {NAV_ITEMS.map((item) =>
                item.type === "link" ? (
                  <Link
                    key={item.link.href}
                    href={item.link.href}
                    onClick={close}
                    className="rounded-2xl px-4 py-3 text-lg font-medium text-ink transition-colors hover:bg-primary-soft"
                  >
                    {t(item.link.labelKey)}
                  </Link>
                ) : (
                  <div key={item.menu.id} className="contents">
                    <p className="mt-4 px-4 text-sm font-semibold tracking-widest text-muted uppercase">
                      {t(item.menu.labelKey)}
                    </p>
                    {item.menu.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={close}
                        className="rounded-2xl px-4 py-3 text-lg text-ink/80 transition-colors hover:bg-primary-soft"
                      >
                        {t(link.labelKey)}
                      </Link>
                    ))}
                    {item.menu.viewAll && (
                      <Link
                        href={item.menu.viewAll.href}
                        onClick={close}
                        className="rounded-2xl px-4 py-3 text-lg font-medium text-primary transition-colors hover:bg-primary-soft"
                      >
                        {t(item.menu.viewAll.labelKey)}
                      </Link>
                    )}
                  </div>
                ),
              )}

              <div className="mt-auto flex flex-col gap-4 border-t border-line px-4 pt-6 pb-[env(safe-area-inset-bottom)]">
                <LocaleSwitcher className="self-start" />
                <Button asChild size="lg">
                  <Link href="/appointment" onClick={close}>
                    {t("header.bookAppointment")}
                  </Link>
                </Button>
                <a
                  dir="ltr"
                  href={`tel:${phone}`}
                  className="text-center text-lg font-semibold text-primary"
                  aria-label={t("header.phoneLabel")}
                >
                  {phone}
                </a>
              </div>
            </nav>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
