"use client";

import { motion } from "framer-motion";
import { type ReactNode, type CSSProperties } from "react";
import { textHover, baseFilter } from "~/lib/animations";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  level?: HeadingLevel;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
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

// Heading sizes - override locally with className if needed
const headingStyles: Record<HeadingLevel, string> = {
  h1: "text-6xl leading-tight font-light",      // 3.75rem / 60px
  h2: "text-5xl leading-tight font-bold",       // 3rem / 48px
  h3: "text-3xl leading-snug font-bold",        // 1.875rem / 30px
  h4: "text-2xl leading-snug font-semibold",    // 1.5rem / 24px
  h5: "text-xl leading-snug font-semibold",     // 1.25rem / 20px
  h6: "text-lg leading-normal font-semibold",   // 1.125rem / 18px
};

export default function Heading({
  level = "h2",
  children,
  className = "",
  style,
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
      <Component className={`${baseStyles} ${className}`} style={style}>{children}</Component>
    </motion.div>
  );
}
