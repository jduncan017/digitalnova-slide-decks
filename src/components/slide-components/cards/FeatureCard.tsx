"use client";

import Box from "../layout/Box";
import Heading from "../typography/Heading";
import Body from "../typography/Body";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  /** The lucide icon component */
  icon: LucideIcon;
  /** Card title */
  title: string;
  /** Card description */
  description: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Icon size */
  iconSize?: "sm" | "md" | "lg";
  /** Additional className */
  className?: string;
}

const iconSizes = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10",
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  iconSize = "md",
  className = "",
}: FeatureCardProps) {
  return (
    <Box
      animation="slideUp"
      delay={delay}
      hoverEffect="lift"
      className={`p-5 rounded-xl bg-neutral-800/30 border border-neutral-700 ${className}`}
    >
      <Icon className={`${iconSizes[iconSize]} text-primary mb-3`} />
      <Heading level="h5" className="text-gray-300 mb-1">{title}</Heading>
      <Body size="sm" className="text-gray-500">{description}</Body>
    </Box>
  );
}
