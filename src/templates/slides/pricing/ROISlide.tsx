"use client";

import Slide from "~/components/Slide";
import { Heading, Body, Box, PageHeader } from "~/components/slide-components";
import * as LucideIcons from "lucide-react";
import type { ROISlideContent, IconName } from "../../types";

interface ROISlideProps {
  content: ROISlideContent;
  slideNumber: number;
}

function getIcon(name: IconName, className = "h-8 w-8 text-primary") {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className={className} /> : null;
}

export default function ROISlide({ content, slideNumber }: ROISlideProps) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full items-center">
        <div className="flex-1 pr-12">
          <PageHeader
            label={content.label}
            title={content.title}
            align="left"
            className="mb-6"
          />
          <Body size="xl" className="mb-10 text-gray-400">
            {content.description
              .split(content.highlight ?? "")
              .map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-primary font-semibold">
                      {content.highlight}
                    </span>
                  )}
                </span>
              ))}
          </Body>

          <div className="grid grid-cols-2 gap-4">
            {content.benefits.map((item, i) => (
              <Box
                key={i}
                animation="slideUp"
                delay={0.3 + i * 0.1}
                hoverEffect="lift"
                className="rounded-xl border border-neutral-700 bg-neutral-600/20 p-5"
              >
                {getIcon(item.icon, "h-8 w-8 text-primary mb-3")}
                <Heading level="h5" className="mb-1 text-gray-300">
                  {item.title}
                </Heading>
                <Body size="sm" className="text-gray-500">
                  {item.description}
                </Body>
              </Box>
            ))}
          </div>
        </div>

        {/* Right side - Big number with circular frame */}
        <Box
          animation="scale"
          delay={0.4}
          hoverEffect="none"
          className="flex flex-1 items-center justify-center"
        >
          <div className="text-center">
            <div className="border-primary/30 bg-primary/5 relative inline-flex h-56 w-56 items-center justify-center rounded-full border-4">
              <div className="text-primary text-[120px] leading-none font-black">
                {content.metric.value}
              </div>
            </div>
            <Heading level="h3" className="mt-6 font-normal text-gray-400">
              {content.metric.label}
            </Heading>
            {content.metric.subtext && (
              <Body
                size="lg"
                className="text-primary mt-2 max-w-sm font-medium capitalize"
              >
                {content.metric.subtext}
              </Body>
            )}
          </div>
        </Box>
      </div>
    </Slide>
  );
}
