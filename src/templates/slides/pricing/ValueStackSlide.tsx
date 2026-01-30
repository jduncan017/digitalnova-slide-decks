"use client";

import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import { Check } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { ValueStackSlideContent, IconName } from "../../types";

interface ValueStackSlideProps {
  content: ValueStackSlideContent;
  slideNumber: number;
}

function getIcon(name: IconName, className = "h-5 w-5 text-primary") {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className={className} /> : null;
}

export default function ValueStackSlide({ content, slideNumber }: ValueStackSlideProps) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="h-full flex items-center justify-center">
        <div className="max-w-3xl w-full">
          <PageHeader
            label={content.label}
            title={content.title}
            subtitle={content.subtitle}
            className="mb-10"
          />

          <div className="space-y-3">
            {content.items.map((row, i) => (
              <Box
                key={i}
                animation="slideRight"
                delay={0.3 + i * 0.1}
                hoverEffect="highlight"
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-800/30 border border-neutral-700/50"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  {getIcon(row.icon)}
                </div>
                <Body size="base" className="text-gray-300">{row.text}</Body>
                <Check className="h-5 w-5 text-primary ml-auto shrink-0" />
              </Box>
            ))}
          </div>

          {/* Totals section */}
          {content.totals && (
            <Box
              animation="slideUp"
              delay={0.8}
              hoverEffect="none"
              className="mt-8 p-6 rounded-2xl bg-neutral-800/50 border border-primary/30"
            >
              <div className="flex items-center justify-between">
                {content.totals.map((total, i) => (
                  <div key={i} className="flex items-center">
                    {i > 0 && <div className="h-12 w-px bg-neutral-700 mr-8" />}
                    <div className={i > 0 ? "ml-8" : ""}>
                      <Body size="sm" className="text-gray-400 mb-1">{total.label}</Body>
                      <Heading level="h3" className="text-primary">{total.value}</Heading>
                    </div>
                  </div>
                ))}
              </div>
            </Box>
          )}

          {content.note && (
            <Box animation="fade" delay={1} hoverEffect="none" className="mt-6 text-center">
              <Body size="sm" className="text-gray-500">{content.note}</Body>
            </Box>
          )}
        </div>
      </div>
    </Slide>
  );
}
