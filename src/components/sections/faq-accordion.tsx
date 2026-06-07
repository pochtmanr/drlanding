"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { FaqItem } from "@/content/types";
import { cn } from "@/lib/utils";

/** Calm accordion for FAQ lists. One item open at a time. */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <div className="space-y-3.5">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={i}
            className={cn(
              "rounded-3xl border bg-white transition-colors duration-300",
              open ? "border-primary/40 shadow-card" : "border-line",
            )}
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start cursor-pointer"
            >
              <span className="text-lg font-medium">{item.question}</span>
              <span
                aria-hidden
                className={cn(
                  "grid size-8 shrink-0 place-items-center rounded-full bg-primary-soft text-primary transition-transform duration-300",
                  open && "rotate-45",
                )}
              >
                <svg viewBox="0 0 16 16" className="size-4">
                  <path
                    d="M8 3v10M3 8h10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 leading-relaxed text-muted-2">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
