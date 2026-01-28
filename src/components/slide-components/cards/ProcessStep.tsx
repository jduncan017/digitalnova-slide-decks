"use client";

import Box from "../layout/Box";
import Heading from "../typography/Heading";
import Body from "../typography/Body";
import type { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  /** The lucide icon component */
  icon: LucideIcon;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Whether to show the connector line below (for all but last item) */
  showConnector?: boolean;
  /** Additional className */
  className?: string;
}

export default function ProcessStep({
  icon: Icon,
  title,
  description,
  delay = 0,
  showConnector = true,
  className = "",
}: ProcessStepProps) {
  return (
    <Box
      animation="slideRight"
      delay={delay}
      hoverEffect="highlight"
      className={`relative flex gap-6 ${className}`}
    >
      {/* Icon container */}
      <div className="relative">
        <div className="relative z-10 w-12 h-12 rounded-xl bg-slide-bg-to border border-neutral-700 flex items-center justify-center shrink-0">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        {/* Connector line */}
        {showConnector && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="pt-1 pb-8">
        <Heading level="h5" className="text-gray-300 mb-1">{title}</Heading>
        <Body size="base" className="text-gray-500">{description}</Body>
      </div>
    </Box>
  );
}
