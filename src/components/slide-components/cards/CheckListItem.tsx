"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Body from "../typography/Body";

interface CheckListItemProps {
  /** The text content */
  text: string;
  /** Whether this is a positive (check) or negative (X) item */
  variant?: "positive" | "negative";
  /** Animation delay in seconds */
  delay?: number;
  /** Animation direction */
  animateFrom?: "left" | "right";
  /** Additional className */
  className?: string;
}

export default function CheckListItem({
  text,
  variant = "positive",
  delay = 0,
  animateFrom = "left",
  className = "",
}: CheckListItemProps) {
  const isPositive = variant === "positive";
  const xOffset = animateFrom === "left" ? -20 : 20;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className={`flex items-center gap-3 ${className}`}
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
          isPositive ? "bg-primary/20" : "bg-red-500/20"
        }`}
      >
        {isPositive ? (
          <Check className="h-3.5 w-3.5 text-primary" />
        ) : (
          <X className="h-3.5 w-3.5 text-red-400" />
        )}
      </div>
      <Body size="base" className={isPositive ? "text-gray-300" : "text-gray-400"}>
        {text}
      </Body>
    </motion.div>
  );
}
