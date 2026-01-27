"use client";

import Slide from "~/components/Slide";
import {
  Body,
  Box,
  Heading,
  PageHeader,
} from "~/components/slide-components";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { OpportunitySlideContent, IconName } from "../types";

interface OpportunitySlideProps {
  content: OpportunitySlideContent;
  slideNumber: number;
}

function getIcon(name: IconName, className: string) {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className={className} /> : null;
}

export default function OpportunitySlide({ content, slideNumber }: OpportunitySlideProps) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label={content.label}
          title={content.title}
          subtitle={content.subtitle}
        />

        {/* Opportunity factors as a flow */}
        <div className="flex items-stretch justify-center gap-4 max-w-[1100px] mb-16 mt-6">
          {content.opportunities.map((item, index) => (
            <div key={index} className="flex items-stretch">
              <Box
                animation="slideUp"
                delay={0.3 + index * 0.12}
                className="flex flex-col items-center text-center p-6 w-[300px] bg-neutral-600/20 border border-neutral-700 rounded-2xl"
                hoverEffect="none"
              >
                <div className="mb-4 p-3 rounded-xl bg-neutral-600/30 text-gray-300">
                  {getIcon(item.icon, "h-8 w-8")}
                </div>
                <Heading level="h5" className="text-gray-300 mb-3">
                  {item.factor}
                </Heading>
                <Body size="sm" className="text-gray-400">
                  {item.result}
                </Body>
              </Box>

              {/* Arrow connector */}
              {index < content.opportunities.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 8 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center px-4"
                >
                  <ArrowRight className="h-8 w-8 text-gray-500/50" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Key insight callout */}
        {content.callout && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 bg-neutral-600/20 border border-neutral-700 rounded-2xl p-6 max-w-2xl"
          >
            <div className="p-3 rounded-xl bg-neutral-600/30">
              {getIcon(content.callout.icon, "h-8 w-8 text-gray-300")}
            </div>
            <div>
              <Body size="lg" className="font-semibold text-gray-300">
                {content.callout.title}
              </Body>
              <Body size="base" className="text-gray-400">
                {content.callout.subtitle}
              </Body>
            </div>
          </motion.div>
        )}
      </div>
    </Slide>
  );
}
