"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Calm scroll-reveal: fade + gentle rise, once, respecting reduced motion.
 * The ONLY sanctioned entrance animation — feature code must use this
 * (or <Stagger> / <SplitText>) instead of importing motion directly.
 */
export function FadeIn({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
