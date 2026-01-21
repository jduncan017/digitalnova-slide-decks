"use client";

import { motion } from "framer-motion";
import { containerHover, baseFilter } from "~/lib/animations";

interface ProblemItem {
  text: string;
}

interface ProblemListProps {
  title?: string;
  subtitle?: string;
  items: ProblemItem[];
  className?: string;
  animation?: "stagger" | "fade" | "none";
  delay?: number;
}

export default function ProblemList({
  title,
  subtitle,
  items,
  className = "",
  animation = "stagger",
  delay = 0,
}: ProblemListProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20, ...baseFilter },
    visible: {
      opacity: 1,
      x: 0,
      ...baseFilter,
      transition: { duration: 0.5 },
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay } },
  };

  const variants = animation === "stagger" ? containerVariants : fadeVariants;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={`${className}`}
    >
      {title && (
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-2xl text-purple-400 md:text-3xl">{subtitle}</p>
          )}
        </div>
      )}
      <div className="mx-auto max-w-3xl space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={animation === "stagger" ? itemVariants : undefined}
            style={baseFilter}
            whileHover={containerHover.whileHover}
            transition={{
              y: containerHover.transition,
              filter: containerHover.transition,
            }}
            className="flex cursor-pointer select-none items-center gap-4 rounded-lg border border-slate-700/50 bg-slate-800/50 p-5"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
              <svg
                className="h-4 w-4 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <span className="text-lg text-white md:text-xl">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
