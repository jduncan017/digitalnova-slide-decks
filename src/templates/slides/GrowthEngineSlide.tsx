"use client";

import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import * as LucideIcons from "lucide-react";
import type { GrowthEngineSlideContent, IconName } from "../types";

interface GrowthEngineSlideProps {
  content: GrowthEngineSlideContent;
  slideNumber: number;
}

function getIcon(name: IconName, className: string) {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className={className} /> : null;
}

export default function GrowthEngineSlide({ content, slideNumber }: GrowthEngineSlideProps) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center">
        <PageHeader
          label={content.label}
          title={content.title}
          subtitle={content.subtitle}
          align="left"
        />

        <div className="flex gap-8 mt-2">
          {/* Left panel */}
          <Box
            animation="slideLeft"
            delay={0.2}
            className="flex-1 h-fit p-6 bg-neutral-600/20 border border-neutral-700 rounded-2xl"
            hoverEffect="none"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-neutral-600/30">
                {getIcon(content.leftPanel.icon, "h-5 w-5 text-gray-300")}
              </div>
              <Heading level="h4" className="text-gray-300">
                {content.leftPanel.title}
              </Heading>
            </div>

            <Body size="sm" className="text-gray-500 uppercase tracking-wider mb-4">
              {content.leftPanel.sectionLabel}
            </Body>

            <div className="space-y-4 h-fit">
              {content.leftPanel.items.map((item, index) => (
                <Box
                  key={index}
                  animation="fade"
                  delay={0.3 + index * 0.05}
                  className="flex items-center gap-3"
                  hoverEffect="none"
                >
                  <div className="p-1.5 rounded bg-neutral-600/30 text-gray-400">
                    {getIcon(item.icon, "h-4 w-4")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <Body size="sm" className="text-gray-300 font-medium">
                      {item.title}
                    </Body>
                    <Body size="xs" className="text-gray-500">
                      {item.description}
                    </Body>
                  </div>
                </Box>
              ))}
            </div>
          </Box>

          {/* Right panel */}
          <Box
            animation="slideRight"
            delay={0.3}
            className="flex-1 p-6 bg-neutral-600/20 border border-neutral-700 rounded-2xl"
            hoverEffect="none"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-neutral-600/30">
                {getIcon(content.rightPanel.icon, "h-5 w-5 text-gray-300")}
              </div>
              <Heading level="h4" className="text-gray-300">
                {content.rightPanel.title}
              </Heading>
            </div>

            <Body size="sm" className="text-gray-500 uppercase tracking-wider mb-4">
              {content.rightPanel.sectionLabel}
            </Body>

            <div className="space-y-4">
              {content.rightPanel.items.map((item, index) => (
                <Box
                  key={index}
                  animation="fade"
                  delay={0.4 + index * 0.08}
                  hoverEffect="none"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-neutral-600/30 text-gray-300">
                      {getIcon(item.icon, "h-4 w-4")}
                    </div>
                    <div>
                      <Body size="sm" className="text-gray-300">
                        {item.title}
                      </Body>
                      <Body size="xs" className="text-gray-500">
                        {item.description}
                      </Body>
                    </div>
                  </div>
                </Box>
              ))}
            </div>
          </Box>
        </div>
      </div>
    </Slide>
  );
}
