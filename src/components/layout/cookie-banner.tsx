"use client";

import { useCallback, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookie-consent";
const CONSENT_EVENT = "cookie-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}

function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY);
}

// During SSR pretend consent exists so the banner never flashes on the server.
function getServerSnapshot() {
  return "pending";
}

export function CookieBanner() {
  const t = useTranslations("common.cookieBanner");
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const choose = useCallback((value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }, []);

  return (
    <AnimatePresence>
      {consent === null && (
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="dialog"
          aria-live="polite"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-3xl border border-line bg-white p-5 shadow-card-hover md:flex md:items-center md:gap-5"
        >
          <p className="text-sm leading-relaxed text-muted-2">
            {t("text")}{" "}
            <Link href="/cookies" className="text-primary underline">
              {t("learnMore")}
            </Link>
          </p>
          <div className="mt-4 flex shrink-0 gap-2.5 md:mt-0">
            <Button size="sm" onClick={() => choose("accepted")}>
              {t("accept")}
            </Button>
            <Button size="sm" variant="ghost" onClick={() => choose("declined")}>
              {t("decline")}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
