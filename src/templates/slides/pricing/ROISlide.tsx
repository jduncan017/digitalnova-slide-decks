"use client";

import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
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
      <div className="h-full flex items-center">
        <div className="flex-1 pr-12">
          <PageHeader
            label={content.label}
            title={content.title}
            align="left"
            className="mb-6"
          />
          <Body size="xl" className="text-gray-400 mb-10">
            {content.description.split(content.highlight ?? "").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="text-primary font-semibold">{content.highlight}</span>
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
                className="p-5 rounded-xl bg-neutral-600/20 border border-neutral-700"
              >
                {getIcon(item.icon, "h-8 w-8 text-primary mb-3")}
                <Heading level="h5" className="text-gray-300 mb-1">{item.title}</Heading>
                <Body size="sm" className="text-gray-500">{item.description}</Body>
              </Box>
            ))}
          </div>
        </div>

        {/* Right side - Big number with circular frame */}
        <Box animation="scale" delay={0.4} hoverEffect="none" className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="relative inline-flex items-center justify-center w-56 h-56 rounded-full border-4 border-primary/30 bg-primary/5">
              <div className="text-[120px] font-black text-primary leading-none">{content.metric.value}</div>
            </div>
            <Heading level="h3" className="text-gray-400 mt-6 font-normal">{content.metric.label}</Heading>
            {content.metric.subtext && (
              <Body size="base" className="text-gray-500 mt-3">{content.metric.subtext}</Body>
            )}
          </div>
        </Box>
      </div>
    </Slide>
  );
}
