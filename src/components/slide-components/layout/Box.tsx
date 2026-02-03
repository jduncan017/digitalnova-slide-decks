"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { containerHover, textHover, baseFilter } from "~/lib/animations";

interface BoxProps {
  children: ReactNode;
  className?: string;
  animation?:
    | "fade"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "scale"
    | "none";
  delay?: number;
  /** "lift" for containers with bg/border, "highlight" for text-only containers */
  hoverEffect?: "lift" | "highlight" | "none";
  /** Visual variant: none (unstyled), gradient (zinc gradient bg), highlight (gradient bg + primary border) */
  variant?: "none" | "gradient" | "highlight";
}

const variants = {
  none: "",
  gradient: "rounded-lg bg-neutral-600/20 p-6 border border-neutral-700",
  highlight: "rounded-lg border border-primary-light/15 bg-linear-to-br from-primary-light/8 to-neutral-600/30 p-6",
};

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  none: {
    initial: {},
    animate: {},
  },
};

const hoverEffects = {
  lift: containerHover,
  highlight: textHover,
  none: { whileHover: {}, transition: {} },
};

export default function Box({
  children,
  className = "",
  animation = "fade",
  delay = 0,
  hoverEffect = "lift",
  variant = "none",
}: BoxProps) {
  const animationVariant = animations[animation];
  const hover = hoverEffects[hoverEffect];
  const variantStyles = variants[variant];

  return (
    <motion.div
      initial={{ ...animationVariant.initial, ...baseFilter }}
      animate={{ ...animationVariant.animate, ...baseFilter, y: 0 }}
      whileHover={hover.whileHover}
      transition={{
        duration: 0.6,
        delay,
        y: hover.transition,
        filter: hover.transition,
      }}
      className={`cursor-pointer select-none ${variantStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}
