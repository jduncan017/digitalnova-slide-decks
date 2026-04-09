"use client";

import Slide from "~/components/Slide";
import { Heading, Body, Box, PageHeader } from "~/components/slide-components";
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

export default function ValueStackSlide({
  content,
  slideNumber,
}: ValueStackSlideProps) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-3xl">
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
                className="flex items-center gap-4 rounded-xl border border-neutral-700/50 bg-neutral-800/30 p-4"
              >
                <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  {getIcon(row.icon)}
                </div>
                <Body size="base" className="text-gray-300">
                  {row.text}
                </Body>
                <Check className="text-primary ml-auto h-5 w-5 shrink-0" />
              </Box>
            ))}
          </div>

          {/* Totals section */}
          {content.totals && (
            <Box
              animation="slideUp"
              delay={0.8}
              hoverEffect="none"
              className="border-primary/30 mt-8 rounded-2xl border bg-neutral-800/50 p-6"
            >
              <div className="flex items-center justify-between px-8">
                {content.totals.map((total, i) => (
                  <div key={i} className="flex items-center">
                    {i > 0 && <div className="mr-8 h-12 w-px bg-neutral-700" />}
                    <div className={i > 0 ? "ml-8" : ""}>
                      <Body
                        size="sm"
                        className="mb-1 text-center text-gray-400"
                      >
                        {total.label}
                      </Body>
                      <Heading level="h3" className="text-primary text-center">
                        {total.value}
                      </Heading>
                    </div>
                  </div>
                ))}
              </div>
            </Box>
          )}

          {content.note && (
            <Box
              animation="fade"
              delay={1}
              hoverEffect="none"
              className="mt-6 text-center"
            >
              <Body size="sm" className="text-gray-500">
                {content.note}
              </Body>
            </Box>
          )}
        </div>
      </div>
    </Slide>
  );
}
