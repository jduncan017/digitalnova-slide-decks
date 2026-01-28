"use client";

import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { DeliverablesSlideContent, IconName } from "../../types";

interface DeliverablesSlideProps {
  content: DeliverablesSlideContent;
  slideNumber: number;
}

function getIcon(name: IconName, className: string) {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className={className} /> : null;
}

export default function DeliverablesSlide({ content, slideNumber }: DeliverablesSlideProps) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label={content.label}
          title={content.title}
          subtitle={content.subtitle}
        />

        {/* Deliverables grid with visual flow */}
        <div className="flex items-stretch justify-center gap-2 max-w-[1200px] mb-8">
          {content.deliverables.map((item, index) => (
            <div key={index} className="flex items-stretch">
              <Box
                animation="slideUp"
                delay={0.3 + index * 0.12}
                className="p-6 w-[320px] relative bg-neutral-600/20 border border-neutral-700 rounded-2xl"
                hoverEffect="none"
              >
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-neutral-600/50 border border-neutral-700 text-gray-300 text-xs font-bold rounded-full">
                  {item.number}
                </div>

                {/* Icon + Title row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-neutral-600/30 text-gray-300">
                    {getIcon(item.icon, "h-6 w-6")}
                  </div>
                  <Heading level="h4" className="text-gray-300">
                    {item.title}
                  </Heading>
                </div>

                {/* Items list */}
                <ul className="space-y-2">
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                      <Body size="sm" className="text-gray-400">{listItem}</Body>
                    </li>
                  ))}
                </ul>
              </Box>

              {/* Arrow between deliverables */}
              {index < content.deliverables.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center px-2"
                >
                  <ArrowRight className="h-6 w-6 text-gray-500/50" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Implementation options */}
        {content.options && content.options.length > 0 && (
          <div className="flex gap-6 max-w-[1100px] w-full">
            {content.options.map((option, index) => (
              <Box
                key={index}
                animation="fade"
                delay={0.8 + index * 0.05}
                className="flex-1 flex items-center gap-4 px-6 py-4 bg-neutral-600/20 border border-neutral-700 rounded-2xl"
                hoverEffect="none"
              >
                <div className="p-2 rounded-lg bg-neutral-600/30 text-gray-300">
                  {getIcon(option.icon, "h-6 w-6")}
                </div>
                <div>
                  <Heading level="h5" className="text-gray-300 mb-1">
                    {option.title}
                  </Heading>
                  <Body size="sm" className="text-gray-400">
                    {option.description}
                  </Body>
                </div>
              </Box>
            ))}
          </div>
        )}
      </div>
    </Slide>
  );
}
