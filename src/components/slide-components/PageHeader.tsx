"use client";

import Box from "./Box";
import Label from "./Label";
import Heading from "./Heading";

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  delay?: number;
}

export default function PageHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
  delay = 0.2,
}: PageHeaderProps) {
  const isCenter = align === "center";

  return (
    <Box
      animation={isCenter ? "slideDown" : "slideRight"}
      delay={delay}
      hoverEffect="highlight"
      className={`mb-10 ${isCenter ? "text-center" : ""} ${className}`}
    >
      <Label className="mb-3 text-slate-500">{label}</Label>
      <Heading level="h1" className={subtitle ? "mb-6 text-primary" : "text-primary"}>
        {title}
      </Heading>
      {subtitle && (
        <Heading level="h3" className="text-slate-300">
          {subtitle}
        </Heading>
      )}
    </Box>
  );
}
