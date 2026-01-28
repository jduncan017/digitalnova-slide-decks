"use client";

import Box from "../layout/Box";
import Label from "../typography/Label";
import Heading from "../typography/Heading";
import { type CSSProperties } from "react";

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
  labelClassName?: string;
  titleStyle?: CSSProperties;
  delay?: number;
}

export default function PageHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
  titleClassName = "",
  labelClassName = "",
  titleStyle,
  delay = 0.2,
}: PageHeaderProps) {
  const isCenter = align === "center";

  // Default gradient style for title
  const defaultTitleStyle: CSSProperties = {
    background: "linear-gradient(to bottom right, var(--color-primary), var(--color-primary-light))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  // Use custom style if provided, otherwise use default gradient
  const finalTitleStyle = titleStyle ?? defaultTitleStyle;

  return (
    <Box
      animation={isCenter ? "slideDown" : "slideRight"}
      delay={delay}
      hoverEffect="highlight"
      className={`mb-10 ${isCenter ? "text-center" : ""} ${className}`}
    >
      <Label className={`mb-2 text-gray-400 ${labelClassName}`}>{label}</Label>
      <Heading
        level="h1"
        className={`${subtitle ? "mb-2" : ""} ${titleClassName}`}
        style={finalTitleStyle}
      >
        {title}
      </Heading>
      {subtitle && (
        <Heading level="h5" className="text-gray-300">
          {subtitle}
        </Heading>
      )}
    </Box>
  );
}
