"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Staggered reveal for grids/lists. Wrap the group in <Stagger> and each
 * child in <StaggerItem>.
 */
export function Stagger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
