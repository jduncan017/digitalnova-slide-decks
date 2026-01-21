"use client";

import { motion } from "framer-motion";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  animation?: "fade" | "scale" | "bounce" | "rotate" | "none";
  delay?: number;
}

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  scale: {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  },
  bounce: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  rotate: {
    initial: { opacity: 0, rotate: -180 },
    animate: { opacity: 1, rotate: 0 },
  },
  none: {
    initial: {},
    animate: {},
  },
};

// Simple icon component - you can extend this with a proper icon library
export default function Icon({
  name,
  size = 24,
  className = "",
  animation = "fade",
  delay = 0,
}: IconProps) {
  const animationVariant = animations[animation];

  return (
    <motion.div
      initial={animationVariant.initial}
      animate={animationVariant.animate}
      transition={{ duration: 0.6, delay }}
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Placeholder - replace with actual icon library */}
      <span className="text-xl">{name}</span>
    </motion.div>
  );
}
