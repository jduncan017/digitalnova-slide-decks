"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { textHover, baseFilter } from "~/lib/animations";

interface LabelProps {
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
  uppercase?: boolean;
}

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
  },
  none: {
    initial: {},
    animate: {},
  },
};

export default function Label({
  children,
  className = "",
  animation = "none",
  delay = 0,
  uppercase = true,
}: LabelProps) {
  const animationVariant = animations[animation];

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
      <p
        className={`text-xs leading-normal font-semibold tracking-widest ${
          uppercase ? "uppercase" : ""
        } ${className}`}
      >
        {children}
      </p>
    </motion.div>
  );
}
