"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { CredentialDoc } from "@/content/about/credentials";

/**
 * Grid of scanned credential documents. Clicking a card opens the scan
 * full-size in a dialog overlay (Escape / backdrop / button to close).
 */
export function DocumentLightbox({
  documents,
  closeLabel,
}: {
  documents: CredentialDoc[];
  /** Localized accessible label for the overlay close button. */
  closeLabel: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  const close = useCallback(() => setOpenIndex(null), []);
  const open = openIndex === null ? null : documents[openIndex];

  // Escape to close + scroll lock + focus while the overlay is open.
  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close]);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {documents.map((doc, i) => (
          <button
            key={doc.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-haspopup="dialog"
            aria-label={doc.title}
            className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-4xl border border-primary-soft bg-white text-start shadow-card transition-shadow duration-300 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="relative block overflow-hidden bg-primary-faint p-4">
              <img
                src={doc.src}
                alt={doc.alt}
                width={doc.width}
                height={doc.height}
                loading="lazy"
                className="aspect-[3/4] w-full rounded-2xl border border-line bg-white object-cover object-top shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span
                aria-hidden
                className="absolute bottom-7 end-7 grid size-9 place-items-center rounded-full bg-white/90 text-primary opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100"
              >
                <svg viewBox="0 0 24 24" className="size-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3M8 11h6M11 8v6" />
                </svg>
              </span>
            </span>
            <span className="flex flex-1 flex-col p-6 pt-5">
              <span className="text-lg font-semibold leading-snug">{doc.title}</span>
              <span className="mt-2 text-sm leading-relaxed text-muted">
                {doc.description}
              </span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm md:p-8"
            onClick={close}
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-h-full overflow-auto rounded-3xl bg-white p-3 shadow-xl md:p-4"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={open.src}
                alt={open.alt}
                width={open.width}
                height={open.height}
                className="mx-auto h-auto max-h-[82svh] w-auto max-w-full rounded-2xl"
              />
              <p className="px-2 pb-1 pt-3 text-center text-sm font-medium text-muted-2">
                {open.title}
              </p>
            </motion.div>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label={closeLabel}
              className="absolute end-4 top-4 grid size-11 cursor-pointer place-items-center rounded-full bg-white/90 text-ink shadow-sm transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
                <path d="m3 3 10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
