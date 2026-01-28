"use client";

import { motion } from "framer-motion";
import { type ReactNode, type CSSProperties } from "react";
import { textHover, baseFilter } from "~/lib/animations";

type BodySize = "xl" | "lg" | "base" | "sm" | "xs";

export interface BodyProps {
  size?: BodySize;
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

// Body sizes - use Tailwind utility classes for consistency
const bodySizeStyles: Record<BodySize, string> = {
  xl: "text-xl leading-relaxed",       // 1.25rem / 20px
  lg: "text-lg leading-relaxed",       // 1.125rem / 18px
  base: "text-base leading-relaxed",   // 1rem / 16px
  sm: "text-sm leading-normal",        // 0.875rem / 14px
  xs: "text-xs leading-normal",        // 0.75rem / 12px
};

export default function Body({
  size = "base",
  children,
  className = "",
  style,
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
      <Component className={`${baseStyles} ${className}`} style={style}>{children}</Component>
    </motion.div>
  );
}
