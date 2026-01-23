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
  titleClassName?: string;
  delay?: number;
}

export default function PageHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
  titleClassName = "",
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
      <Label className="mb-2 text-gray-400">{label}</Label>
      <Heading
        level="h1"
        className={`${subtitle ? "mb-6" : ""} ${titleClassName}`}
        style={{
          background: "linear-gradient(to bottom right, var(--color-primary), var(--color-primary-light))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </Heading>
      {subtitle && (
        <Heading level="h3" className="text-gray-300">
          {subtitle}
        </Heading>
      )}
    </Box>
  );
}
