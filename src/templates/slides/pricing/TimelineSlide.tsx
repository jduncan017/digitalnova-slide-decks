"use client";

import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Label,
  Box,
  PageHeader,
} from "~/components/slide-components";
import { Check, ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import type { TimelineSlideContent, IconName } from "../../types";

interface TimelineSlideProps {
  content: TimelineSlideContent;
  slideNumber: number;
}

function getIcon(name: IconName, className: string) {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className={className} /> : null;
}

const gridColsMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

export default function TimelineSlide({ content, slideNumber }: TimelineSlideProps) {
  const isGridLayout = content.layout === "grid" || content.steps.length > 3;

  if (isGridLayout) {
    const colCount = Math.min(content.steps.length, 4);
    const gridColsClass = gridColsMap[colCount] ?? "grid-cols-4";

    return (
      <Slide showLogo slideNumber={slideNumber}>
        <div className="flex h-full flex-col justify-center">
          <PageHeader
            label={content.label}
            title={content.title}
            subtitle={content.subtitle}
            align={content.headerAlign ?? "left"}
          />

          {/* Grid layout for 4+ steps */}
          <div className={`grid ${gridColsClass} gap-4`}>
            {content.steps.map((step, index) => (
              <Box
                key={index}
                animation="slideUp"
                delay={0.2 + index * 0.1}
                className={`rounded-2xl p-5 flex flex-col ${
                  step.highlight
                    ? "bg-neutral-600/30 border-2 border-neutral-600"
                    : "bg-neutral-600/20 border border-neutral-700"
                }`}
                hoverEffect="lift"
              >
                {/* Header with icon */}
                <div className="flex items-center gap-3 mb-4">
                  {step.icon && (
                    <div className={`p-2 rounded-xl ${step.highlight ? "bg-primary/30" : "bg-primary/20"}`}>
                      {getIcon(step.icon, "h-6 w-6 text-primary")}
                    </div>
                  )}
                  <div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-xs font-bold text-gray-500 tracking-wider"
                    >
                      {step.period}
                    </motion.div>
                    <Heading level="h5" className="text-gray-300">
                      {step.title}
                    </Heading>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-neutral-700 mb-4" />

                {/* Items */}
                <ul className="space-y-2.5 flex-1">
                  {step.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 + itemIndex * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <Body size="sm" className="text-gray-400">{item}</Body>
                    </motion.li>
                  ))}
                </ul>
              </Box>
            ))}
          </div>

          {/* Bottom note */}
          {content.note && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-6 flex items-center gap-4 p-4 bg-neutral-600/20 border border-neutral-700 rounded-xl max-w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <Body size="base" className="text-gray-400">
                <span className="text-gray-300 font-medium">{content.note.highlight}</span>
                {" "}{content.note.text}
              </Body>
            </motion.div>
          )}
        </div>
      </Slide>
    );
  }

  // Arrow layout for 3 or fewer steps
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center px-8m items-center">
        <PageHeader label={content.label} title={content.title} />

        {/* Steps with arrows */}
        <div className="flex items-stretch justify-center gap-0 mb-8">
          {content.steps.map((step, index) => (
            <div key={index} className="flex items-stretch">
              {/* Step card */}
              <Box
                animation="slideUp"
                delay={0.3 + index * 0.15}
                variant={step.highlight || index === 0 ? "highlight" : "gradient"}
                className="w-[300px] rounded-2xl p-6 flex flex-col"
              >
                {/* Title and badge */}
                <div className="mb-5 text-center">
                  <Label className="mb-2 text-primary">{step.period}</Label>
                  <Heading level="h4" className="text-gray-300">
                    {step.title}
                  </Heading>
                </div>

                {/* Items */}
                <ul className="space-y-2 flex-1">
                  {step.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <Body size="sm" as="span">{item}</Body>
                    </li>
                  ))}
                </ul>
              </Box>

              {/* Arrow between cards (not after last) */}
              {index < content.steps.length - 1 && (
                <div className="flex items-center px-3">
                  <Box
                    animation="fade"
                    delay={0.5 + index * 0.15}
                    hoverEffect="none"
                  >
                    <ArrowRight className="h-8 w-8 text-primary/60" />
                  </Box>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note at bottom */}
        {content.note && (
          <Box
            animation="fade"
            delay={0.9}
            variant="gradient"
            className="w-full text-center py-5 px-8 max-w-[1000px]"
          >
            <Body size="base" className="text-gray-300 mb-2">
              <span className="text-primary font-semibold">{content.note.highlight}</span>
              {" "}{content.note.text}
            </Body>
            {content.note.subtext && (
              <Body size="sm" className="text-gray-500 italic">
                {content.note.subtext}
              </Body>
            )}
          </Box>
        )}
      </div>
    </Slide>
  );
}
