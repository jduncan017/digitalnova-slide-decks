"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface HeroTitleProps {
  children: ReactNode;
  subtitle?: string;
  description?: string;
  accentColor?: string;
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

export default function HeroTitle({
  children,
  subtitle,
  description,
  accentColor = "border-purple-500",
  className = "",
  animation = "slideUp",
  delay = 0,
}: HeroTitleProps) {
  const animationVariant = animations[animation];

  return (
    <motion.div
      initial={animationVariant.initial}
      animate={animationVariant.animate}
      transition={{ duration: 0.8, delay }}
      className={`border-l-4 ${accentColor} pl-8 ${className}`}
    >
      <h1 className="mb-4 text-white">{children}</h1>
      {subtitle && <h3 className="mb-4 text-purple-400">{subtitle}</h3>}
      {description && <p className="text-body-lg text-slate-400">{description}</p>}
    </motion.div>
  );
}
