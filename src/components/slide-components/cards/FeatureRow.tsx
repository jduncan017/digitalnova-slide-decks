"use client";

import { Check } from "lucide-react";
import Box from "../layout/Box";
import Body from "../typography/Body";
import type { LucideIcon } from "lucide-react";

interface FeatureRowProps {
  /** The lucide icon component */
  icon: LucideIcon;
  /** Feature text */
  text: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Show checkmark on the right */
  showCheck?: boolean;
  /** Additional className */
  className?: string;
}

export default function FeatureRow({
  icon: Icon,
  text,
  delay = 0,
  showCheck = true,
  className = "",
}: FeatureRowProps) {
  return (
    <Box
      animation="slideRight"
      delay={delay}
      hoverEffect="highlight"
      className={`flex items-center gap-4 p-4 rounded-xl bg-neutral-800/30 border border-neutral-700/50 ${className}`}
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <Body size="base" className="text-gray-300">{text}</Body>
      {showCheck && <Check className="h-5 w-5 text-primary ml-auto shrink-0" />}
    </Box>
  );
}
