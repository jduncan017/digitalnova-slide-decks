"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { containerHover, baseFilter } from "~/lib/animations";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "transparent" | "light" | "dark" | "gradient";
  animation?: "fade" | "slideUp" | "slideDown" | "none";
  delay?: number;
}

const backgrounds = {
  transparent: "",
  light: "bg-white/10 backdrop-blur-sm",
  dark: "bg-black/30 backdrop-blur-sm",
  gradient:
    "bg-linear-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm",
};

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
  none: {
    initial: {},
    animate: {},
  },
};

export default function Section({
  children,
  className = "",
  background = "transparent",
  animation = "fade",
  delay = 0,
}: SectionProps) {
  const animationVariant = animations[animation];
  const bgClass = backgrounds[background];

  return (
    <motion.div
      initial={{ ...animationVariant.initial, ...baseFilter }}
      animate={{ ...animationVariant.animate, ...baseFilter, y: 0 }}
      whileHover={containerHover.whileHover}
      transition={{
        duration: 0.7,
        delay,
        y: containerHover.transition,
        filter: containerHover.transition,
      }}
      className={`cursor-pointer select-none rounded-lg p-6 ${bgClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}
