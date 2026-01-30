"use client";

import Slide from "~/components/Slide";
import Image from "next/image";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { ProcessFlowSlideContent, IconName } from "../../types";

interface ProcessFlowSlideProps {
  content: ProcessFlowSlideContent;
  slideNumber: number;
}

function getIcon(name: IconName, className = "h-6 w-6 text-primary") {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className={className} /> : null;
}

export default function ProcessFlowSlide({ content, slideNumber }: ProcessFlowSlideProps) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="h-full flex items-center gap-16">
        {/* Left side - Process steps */}
        <div className="flex-1 max-w-xl">
          <PageHeader
            label={content.label}
            title={content.title}
            subtitle={content.subtitle}
            align="left"
            className="mb-10"
          />

          <div className="relative">
            {/* Vertical connector line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute left-6 top-0 w-px z-0 bg-gradient-to-b from-primary via-primary/50 to-transparent"
            />

            {/* Steps */}
            {content.steps.map((step, i) => (
              <Box
                key={i}
                animation="slideRight"
                delay={0.3 + i * 0.15}
                hoverEffect="highlight"
                className="relative flex gap-6 mb-8 last:mb-0"
              >
                <div className="relative z-10 w-12 h-12 rounded-xl bg-slide-bg-to border border-neutral-700 flex items-center justify-center shrink-0">
                  {getIcon(step.icon)}
                </div>
                <div className="pt-1">
                  <Heading level="h5" className="text-gray-300 mb-1">{step.title}</Heading>
                  <Body size="base" className="text-gray-500">{step.description}</Body>
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
            hoverEffect="highlight"
            className="relative h-full max-w-2xl ml-auto z-10"
          >
            <Image
              src={content.sideImage}
              alt="Process illustration"
              width={500}
              height={500}
              className="h-full object-cover border border-neutral-800 rounded-2xl shadow-xl"
            />
          </Box>
        )}
      </div>
    </Slide>
  );
}
