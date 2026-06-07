"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

function useLocaleNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  return (loc: string) =>
    router.replace(
      // @ts-expect-error -- params are compatible with the current pathname
      { pathname, params },
      { locale: loc },
    );
}

/** Pill-style language switcher that preserves the current path. */
export function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations("common.localeSwitcher");
  const locale = useLocale();
  const switchTo = useLocaleNavigation();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-line p-0.5",
        className,
      )}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          aria-pressed={loc === locale}
          aria-label={t(loc)}
          onClick={() => switchTo(loc)}
          className={cn(
            "rounded-full px-3 py-1 text-sm font-medium transition-colors duration-200 cursor-pointer",
            loc === locale
              ? "bg-primary text-white"
              : "text-muted hover:text-ink",
          )}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  );
}

/** Compact dropdown language switcher for the desktop header bar. */
export function LocaleDropdown({ className }: { className?: string }) {
  const t = useTranslations("common.localeSwitcher");
  const locale = useLocale();
  const switchTo = useLocaleNavigation();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Close on click/tap outside.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={cn("relative", className)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.stopPropagation();
          setOpen(false);
          rootRef.current?.querySelector("button")?.focus();
        }
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={t("label")}
        onClick={() => setOpen((v) => !v)}
        className="flex cursor-pointer items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-sm font-medium text-ink/80 transition-colors hover:border-primary hover:text-primary"
      >
        {locale.toUpperCase()}
        <svg
          viewBox="0 0 16 16"
          aria-hidden
          className={cn(
            "size-3 transition-transform duration-300",
            open && "rotate-180",
          )}
        >
          <path
            d="M4 6l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute end-0 top-full z-10 mt-4 w-44 rounded-3xl border border-line bg-white p-1.5 shadow-card-hover"
          >
            {routing.locales.map((loc) => (
              <button
                key={loc}
                type="button"
                aria-pressed={loc === locale}
                onClick={() => {
                  setOpen(false);
                  if (loc !== locale) switchTo(loc);
                }}
                className={cn(
                  "flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-2.5 text-sm transition-colors hover:bg-primary-soft",
                  loc === locale
                    ? "font-medium text-primary"
                    : "text-ink/80 hover:text-primary-deep",
                )}
              >
                {t(loc)}
                {loc === locale && (
                  <svg viewBox="0 0 16 16" aria-hidden className="size-3.5">
                    <path
                      d="M3 8.5L6.5 12L13 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
