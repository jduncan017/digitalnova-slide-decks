"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { containerHover, baseFilter } from "~/lib/animations";

interface TextBoxProps {
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
  none: {
    initial: {},
    animate: {},
  },
};

export default function TextBox({
  children,
  className = "",
  animation = "fade",
  delay = 0,
}: TextBoxProps) {
  const animationVariant = animations[animation];

  return (
    <motion.div
      initial={{ ...animationVariant.initial, ...baseFilter }}
      animate={{ ...animationVariant.animate, ...baseFilter, y: 0 }}
      whileHover={containerHover.whileHover}
      transition={{
        duration: 0.6,
        delay,
        y: containerHover.transition,
        filter: containerHover.transition,
      }}
      className={`cursor-pointer select-none ${className}`}
    >
      {children}
    </motion.div>
  );
}
