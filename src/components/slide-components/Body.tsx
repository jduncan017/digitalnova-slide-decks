"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { textHover, baseFilter } from "~/lib/animations";

type BodySize = "xl" | "lg" | "base" | "sm" | "xs";

interface BodyProps {
  size?: BodySize;
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
  as?: "p" | "span" | "div";
}

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
  none: {
    initial: {},
    animate: {},
  },
};

const bodySizeStyles: Record<BodySize, string> = {
  xl: "text-[var(--font-size-body-xl)] leading-[var(--line-height-body-xl)]",
  lg: "text-[var(--font-size-body-lg)] leading-[var(--line-height-body-lg)]",
  base: "text-[var(--font-size-body)] leading-[var(--line-height-body)]",
  sm: "text-[var(--font-size-body-sm)] leading-[var(--line-height-body-sm)]",
  xs: "text-[var(--font-size-body-xs)] leading-[var(--line-height-body-xs)]",
};

export default function Body({
  size = "base",
  children,
  className = "",
  animation = "none",
  delay = 0,
  as: Component = "p",
}: BodyProps) {
  const animationVariant = animations[animation];
  const baseStyles = bodySizeStyles[size];

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
