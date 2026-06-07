"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, type MenuId } from "./nav-links";
import { MegaPanel } from "./mega-panel";

/** Grace period before the menu closes after the pointer leaves the bar. */
const CLOSE_DELAY = 150;

const navItemCls =
  "rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap text-ink/80 transition-colors hover:bg-primary-soft hover:text-primary-deep 2xl:px-4 2xl:text-[15px]";

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")}
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
  );
}

/**
 * The floating white pill. Holds the bar row plus the mega menu panel in one
 * container, so the open menu reads as a single continuous shape (the
 * container grows downward, overflowing the fixed-height sticky header).
 */
export function HeaderBar({
  brand,
  actions,
  mobileSlot,
  phone,
}: {
  brand: React.ReactNode;
  actions: React.ReactNode;
  mobileSlot: React.ReactNode;
  phone: string;
}) {
  const t = useTranslations("common");
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState<MenuId | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenId(null), CLOSE_DELAY);
  };
  // Instant swap between triggers — no close/reopen flicker.
  const open = (id: MenuId) => {
    cancelClose();
    setOpenId(id);
  };

  useEffect(() => cancelClose, []);

  return (
    <div
      ref={rootRef}
      onPointerEnter={(e) => e.pointerType === "mouse" && cancelClose()}
      onPointerLeave={(e) => e.pointerType === "mouse" && scheduleClose()}
      onBlur={(e) => {
        // Close when keyboard focus leaves the bar + panel region.
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenId(null);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && openId) {
          e.stopPropagation();
          rootRef.current
            ?.querySelector<HTMLElement>(`[data-trigger="${openId}"]`)
            ?.focus();
          setOpenId(null);
        }
      }}
      className="relative rounded-[30px] bg-white/95 shadow-card ring-1 ring-line/60 backdrop-blur-md in-data-mobile-nav-open:bg-white in-data-mobile-nav-open:shadow-none in-data-mobile-nav-open:ring-0 in-data-mobile-nav-open:backdrop-blur-none"
    >
      {/* Bar row — fixed 60px so total in-flow header height stays 72px. */}
      <div className="flex h-[60px] items-center justify-between gap-3 ps-4 pe-2.5 2xl:gap-4">
        {brand}

        <nav
          aria-label={t("header.mainNav")}
          className="hidden items-center gap-0.5 xl:flex"
        >
          {NAV_ITEMS.map((item) =>
            item.type === "link" ? (
              <Link key={item.link.href} href={item.link.href} className={navItemCls}>
                {t(item.link.labelKey)}
              </Link>
            ) : (
              <button
                key={item.menu.id}
                type="button"
                data-trigger={item.menu.id}
                aria-expanded={openId === item.menu.id}
                aria-haspopup="true"
                onPointerEnter={(e) =>
                  e.pointerType === "mouse" && open(item.menu.id)
                }
                onClick={() =>
                  setOpenId((v) => (v === item.menu.id ? null : item.menu.id))
                }
                className={cn(
                  navItemCls,
                  "flex cursor-pointer items-center gap-1.5",
                  openId === item.menu.id && "bg-primary-soft text-primary-deep",
                )}
              >
                {t(item.menu.labelKey)}
                <Chevron open={openId === item.menu.id} />
              </button>
            ),
          )}
        </nav>

        {actions}
        {mobileSlot}
      </div>

      {/* Mega menu panel — grows out of the same white container. */}
      <div className="hidden xl:block">
        <AnimatePresence initial={false}>
          {openId && (
            <motion.div
              key="mega"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="overflow-hidden"
            >
              <MegaPanel
                openId={openId}
                phone={phone}
                onNavigate={() => setOpenId(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
