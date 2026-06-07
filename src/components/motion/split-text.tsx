"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Children, Fragment, isValidElement, type ReactNode } from "react";

/**
 * Word-by-word "blur-up" reveal for hero headlines (ported from the
 * VisaApplication landing). Each word starts blurred, nudged down and
 * transparent, then settles into place with a staggered cascade. Plain
 * string children are split on whitespace; element children (e.g. a
 * coloured <span>) keep their className but have their text split too.
 */

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div";

type SplitTextProps = {
  children: ReactNode;
  /** Rendered wrapper element. */
  as?: Tag;
  className?: string;
  /** Seconds before the first word starts. */
  delay?: number;
  /** Seconds between consecutive words. */
  stagger?: number;
  /** Per-word animation duration in seconds. */
  duration?: number;
  /** Starting blur in pixels. */
  blur?: number;
  /** Starting vertical offset in pixels. */
  y?: number;
  /** Animate when scrolled into view instead of on mount. */
  inView?: boolean;
  /** Only run once (only relevant when inView). */
  once?: boolean;
};

type WordPiece = {
  word: string;
  className?: string;
};

/** Flatten children into an ordered list of words, preserving span styling. */
function collectWords(children: ReactNode): WordPiece[] {
  const pieces: WordPiece[] = [];

  Children.toArray(children).forEach((child) => {
    if (typeof child === "string" || typeof child === "number") {
      String(child)
        .split(/\s+/)
        .filter(Boolean)
        .forEach((word) => pieces.push({ word }));
      return;
    }

    if (isValidElement<{ children?: ReactNode; className?: string }>(child)) {
      const { children: inner, className } = child.props;
      collectWords(inner).forEach((piece) =>
        pieces.push({ word: piece.word, className: piece.className ?? className }),
      );
    }
  });

  return pieces;
}

export function SplitText({
  children,
  as = "span",
  className = "",
  delay = 0,
  stagger = 0.06,
  duration = 0.8,
  blur = 10,
  y = 22,
  inView = false,
  once = true,
}: SplitTextProps) {
  const reduce = useReducedMotion();
  const words = collectWords(children);
  const label = words.map((p) => p.word).join(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: reduce
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 0, y, filter: `blur(${blur}px)` },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: reduce ? 0 : duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const Component = motion[as] as typeof motion.span;

  const activation = inView
    ? ({ whileInView: "visible", viewport: { once, amount: 0.4 } } as const)
    : ({ animate: "visible" } as const);

  return (
    <Component
      aria-label={label}
      className={className}
      variants={container}
      initial="hidden"
      {...activation}
    >
      {words.map((piece, i) => (
        <Fragment key={`${piece.word}-${i}`}>
          <motion.span
            aria-hidden="true"
            variants={wordVariants}
            className={piece.className}
            style={{
              display: "inline-block",
              willChange: "filter, transform, opacity",
            }}
          >
            {piece.word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Component>
  );
}
