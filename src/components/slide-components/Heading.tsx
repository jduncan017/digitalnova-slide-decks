"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { textHover, baseFilter } from "~/lib/animations";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  level?: HeadingLevel;
  children: ReactNode;
  className?: string;
  animation?:
    | "fade"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "none";
  delay?: number;
}

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  },
  none: {
    initial: {},
    animate: {},
  },
};

const headingStyles: Record<HeadingLevel, string> = {
  h1: "text-[var(--font-size-h1)] leading-[var(--line-height-h1)] font-bold",
  h2: "text-[var(--font-size-h2)] leading-[var(--line-height-h2)] font-bold",
  h3: "text-[var(--font-size-h3)] leading-[var(--line-height-h3)] font-bold",
  h4: "text-[var(--font-size-h4)] leading-[var(--line-height-h4)] font-bold",
  h5: "text-[var(--font-size-h5)] leading-[var(--line-height-h5)] font-bold",
  h6: "text-[var(--font-size-h6)] leading-[var(--line-height-h6)] font-bold",
};

export default function Heading({
  level = "h2",
  children,
  className = "",
  animation = "none",
  delay = 0,
}: HeadingProps) {
  const Component = level;
  const animationVariant = animations[animation];
  const baseStyles = headingStyles[level];

  return (
    <motion.div
      initial={{ ...animationVariant.initial, ...baseFilter }}
      animate={{ ...animationVariant.animate, ...baseFilter }}
      whileHover={textHover.whileHover}
      transition={{
        duration: 0.6,
        delay,
        filter: textHover.transition,
      }}
    >
      <Component className={`${baseStyles} ${className}`}>{children}</Component>
    </motion.div>
  );
}
