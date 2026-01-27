"use client";

import Slide from "~/components/Slide";
import {
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import type { ProblemSlideContent, IconName } from "../types";

interface ProblemSlideProps {
  content: ProblemSlideContent;
  slideNumber: number;
}

function getIcon(name: IconName, className = "h-7 w-7 shrink-0 text-primary") {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className={className} /> : null;
}

export default function ProblemSlide({ content, slideNumber }: ProblemSlideProps) {
  const hasSubtext = content.challenges.some(c => c.subtext);

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="h-full flex gap-20 items-center">
        {/* Left side - Content */}
        <div className="flex flex-col justify-center w-full max-w-[640px] mx-auto">
          <PageHeader
            label={content.label}
            title={content.title}
            subtitle={content.subtitle}
            align="left"
            titleClassName="text-5xl"
          />

          <div className={hasSubtext ? "space-y-4" : "space-y-5"}>
            {content.challenges.map((challenge, index) => (
              <Box
                key={index}
                animation="slideLeft"
                delay={0.3 + index * 0.08}
                className={hasSubtext
                  ? "flex items-start gap-4 py-3 px-4 rounded-xl bg-neutral-600/20 border border-neutral-700"
                  : "flex items-center gap-4"
                }
                hoverEffect={hasSubtext ? "none" : "highlight"}
              >
                {hasSubtext ? (
                  <div className="mt-1 p-2 rounded-lg bg-neutral-600/30">
                    {getIcon(challenge.icon, "h-6 w-6 shrink-0 text-gray-300")}
                  </div>
                ) : (
                  getIcon(challenge.icon)
                )}
                <div>
                  <Body size={hasSubtext ? "xl" : "xl"} className={hasSubtext ? "text-gray-300 font-medium" : "text-gray-300"}>
                    {challenge.text}
                  </Body>
                  {challenge.subtext && (
                    <Body size="base" className="text-gray-400">
                      {challenge.subtext}
                    </Body>
                  )}
                </div>
              </Box>
            ))}
          </div>
        </div>

        {/* Right side - Image */}
        {content.sideImage && (
          <Box
            animation="fade"
            delay={0.4}
            hoverEffect={content.statsOverlay ? "none" : "highlight"}
            className="relative h-full max-w-xl ml-auto z-10 flex items-center"
          >
            <div className="relative h-full">
              <Image
                src={content.sideImage}
                alt="Illustration"
                width={500}
                height={600}
                className="h-full object-cover border border-neutral-700 rounded-2xl shadow-xl"
              />
              {/* Stats overlay */}
              {content.statsOverlay && (
                <div className="absolute -bottom-4 -left-4 bg-neutral-950/90 backdrop-blur-sm border border-neutral-700 rounded-xl p-4 shadow-xl">
                  <Body size="xs" className="text-gray-400 uppercase tracking-wider mb-1">
                    {content.statsOverlay.label}
                  </Body>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-300">{content.statsOverlay.value}</span>
                  </div>
                  {content.statsOverlay.subtext && (
                    <span className="text-gray-400 text-sm">{content.statsOverlay.subtext}</span>
                  )}
                </div>
              )}
            </div>
          </Box>
        )}
      </div>
    </Slide>
  );
}
