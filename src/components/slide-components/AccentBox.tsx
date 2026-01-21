"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { containerHover, baseFilter } from "~/lib/animations";

interface AccentBoxProps {
  title?: string;
  children: ReactNode;
  accentColor?: string;
  className?: string;
  animation?: "fade" | "slideUp" | "slideLeft" | "none";
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
  slideLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
  },
  none: {
    initial: {},
    animate: {},
  },
};

export default function AccentBox({
  title,
  children,
  accentColor = "border-purple-500",
  className = "",
  animation = "slideUp",
  delay = 0,
}: AccentBoxProps) {
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
      className={`cursor-pointer select-none border-l-4 ${accentColor} rounded-r-lg bg-slate-800/30 p-6 ${className}`}
    >
      {title && (
        <h3 className="mb-2 text-sm font-semibold tracking-wider text-purple-400 uppercase">
          {title}
        </h3>
      )}
      <div className="text-white">{children}</div>
    </motion.div>
  );
}
