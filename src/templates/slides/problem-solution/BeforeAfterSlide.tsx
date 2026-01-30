"use client";

import Slide from "~/components/Slide";
import {
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import type { BeforeAfterSlideContent } from "../../types";

interface BeforeAfterSlideProps {
  content: BeforeAfterSlideContent;
  slideNumber: number;
}

export default function BeforeAfterSlide({ content, slideNumber }: BeforeAfterSlideProps) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="h-full flex flex-col justify-center">
        <PageHeader
          label={content.label}
          title={content.title}
          subtitle={content.subtitle}
          align="center"
          className="mb-8"
        />

        <div className="flex items-stretch gap-6">
          {/* Before - Left side */}
          <Box
            animation="slideRight"
            delay={0.3}
            hoverEffect="none"
            className="flex-1 flex flex-col justify-center p-10 rounded-2xl bg-neutral-900/50 border border-red-900/30 relative overflow-hidden"
          >
            {/* Subtle red glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="text-red-400/80 text-sm font-medium tracking-wider uppercase mb-4">
                {content.before.label}
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-8">
                {content.before.title.split(content.before.highlight ?? "").map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="text-red-400">{content.before.highlight}</span>
                    )}
                  </span>
                ))}
              </h3>
              <ul className="space-y-4">
                {content.before.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                      <X className="h-3.5 w-3.5 text-red-400" />
                    </div>
                    <Body size="base" className="text-gray-400">{item}</Body>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Box>

          {/* Arrow divider */}
          <Box animation="scale" delay={0.6} hoverEffect="none" className="shrink-0 flex items-center">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <ArrowRight className="h-7 w-7 text-neutral-950" />
            </div>
          </Box>

          {/* After - Right side */}
          <Box
            animation="slideLeft"
            delay={0.4}
            hoverEffect="none"
            className="flex-1 flex flex-col justify-center p-10 rounded-2xl bg-neutral-900/50 border border-primary/30 relative overflow-hidden"
          >
            {/* Subtle primary glow */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="text-primary/80 text-sm font-medium tracking-wider uppercase mb-4">
                {content.after.label}
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-8">
                {content.after.title.split(content.after.highlight ?? "").map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="text-primary">{content.after.highlight}</span>
                    )}
                  </span>
                ))}
              </h3>
              <ul className="space-y-4">
                {content.after.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <Body size="base" className="text-gray-300">{item}</Body>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Box>
        </div>
      </div>
    </Slide>
  );
}
