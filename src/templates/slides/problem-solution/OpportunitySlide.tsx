"use client";

import Slide from "~/components/Slide";
import { Body, Box, Heading, PageHeader } from "~/components/slide-components";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import type { OpportunitySlideContent, IconName } from "../../types";

interface OpportunitySlideProps {
  content: OpportunitySlideContent;
  slideNumber: number;
}

function getIcon(name: IconName, className: string) {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className={className} /> : null;
}

const DEFAULT_CONNECTOR: IconName = "ArrowRight";

export default function OpportunitySlide({
  content,
  slideNumber,
}: OpportunitySlideProps) {
  const connectorIcon: IconName = content.connectorIcon ?? DEFAULT_CONNECTOR;

  return (
    <Slide showLogo slideNumber={slideNumber} chromeVariant="minimal">
      <div className="flex h-full flex-col items-center justify-center">
        <PageHeader
          label={content.label}
          title={content.title}
          subtitle={content.subtitle}
        />

        {/* Opportunity factors as a flow */}
        <div className="mt-6 mb-10 flex max-w-[1100px] items-stretch justify-center gap-4">
          {content.opportunities.map((item, index) => (
            <div key={index} className="flex items-stretch">
              <Box
                animation="slideUp"
                delay={0.3 + index * 0.12}
                className="flex w-[300px] flex-col items-center rounded-2xl border border-neutral-700 bg-neutral-600/20 p-6 text-center"
                hoverEffect="lift"
              >
                <div className="bg-primary/20 mb-4 rounded-xl p-3">
                  {getIcon(item.icon, "h-8 w-8 text-primary")}
                </div>
                <Heading level="h5" className="mb-3 text-gray-300">
                  {item.factor}
                </Heading>
                <Body size="sm" className="text-gray-400">
                  {item.result}
                </Body>
              </Box>

              {/* Connector icon (defaults to ArrowRight) */}
              {index < content.opportunities.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 8 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center px-4"
                >
                  {getIcon(connectorIcon, "h-8 w-8 text-gray-500/50")}
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
            className="from-primary/5 to-primary/10 border-primary-light/25 flex max-w-2xl items-center gap-4 rounded-2xl border bg-linear-to-br p-6"
          >
            <div className="bg-primary/20 rounded-xl p-3">
              {getIcon(content.callout.icon, "h-8 w-8 text-primary")}
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
