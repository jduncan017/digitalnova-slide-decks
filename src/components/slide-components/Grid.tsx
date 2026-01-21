"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: number;
  className?: string;
  animation?: "fade" | "stagger" | "none";
  delay?: number;
}

export default function Grid({
  children,
  cols = 2,
  gap = 4,
  className = "",
  animation = "fade",
  delay = 0,
}: GridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const gapClass = `gap-${gap}`;

  if (animation === "stagger") {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: delay,
              staggerChildren: 0.2,
            },
          },
        }}
        className={`grid ${gridCols[cols]} ${gapClass} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: animation === "fade" ? 0 : 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`grid ${gridCols[cols]} ${gapClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}
