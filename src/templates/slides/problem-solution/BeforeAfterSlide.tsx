"use client";

import Slide from "~/components/Slide";
import { Body, Box, PageHeader } from "~/components/slide-components";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import type { BeforeAfterSlideContent } from "../../types";

interface BeforeAfterSlideProps {
  content: BeforeAfterSlideContent;
  slideNumber: number;
}

export default function BeforeAfterSlide({
  content,
  slideNumber,
}: BeforeAfterSlideProps) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center">
        <PageHeader
          label={content.label}
          title={content.title}
          subtitle={content.subtitle}
          align="center"
          className="mb-8"
        />

        <div className="flex items-stretch gap-6">
          {/* Before - Left side (neutral with soft red accents, dark TL to light BR) */}
          <Box
            animation="slideRight"
            delay={0.3}
            hoverEffect="none"
            className="flex flex-1 flex-col justify-center rounded-2xl border border-neutral-700 bg-linear-to-br from-neutral-600/40 to-neutral-600/10 p-10"
          >
            <div
              className="mb-4 text-sm font-medium tracking-wider uppercase"
              style={{ color: "#e57373" }}
            >
              {content.before.label}
            </div>
            <h3 className="mb-8 text-2xl font-bold text-gray-300">
              {content.before.title
                .split(content.before.highlight ?? "")
                .map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span style={{ color: "#e57373" }}>
                        {content.before.highlight}
                      </span>
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
                  <div
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(229, 115, 115, 0.2)" }}
                  >
                    <X className="h-3.5 w-3.5" style={{ color: "#e57373" }} />
                  </div>
                  <Body size="base" className="text-gray-400">
                    {item}
                  </Body>
                </motion.li>
              ))}
            </ul>
          </Box>

          {/* Arrow divider */}
          <Box
            animation="scale"
            delay={0.6}
            hoverEffect="none"
            className="flex shrink-0 items-center"
          >
            <div className="bg-primary shadow-primary/20 flex h-14 w-14 items-center justify-center rounded-full shadow-lg">
              <ArrowRight className="h-7 w-7 text-neutral-950" />
            </div>
          </Box>

          {/* After - Right side (primary gradient, dark TL to light BR) */}
          <Box
            animation="slideLeft"
            delay={0.4}
            hoverEffect="none"
            className="from-primary/20 to-primary/5 border-primary/30 flex flex-1 flex-col justify-center rounded-2xl border bg-linear-to-br p-10"
          >
            <div className="text-primary mb-4 text-sm font-medium tracking-wider uppercase">
              {content.after.label}
            </div>
            <h3 className="mb-8 text-2xl font-bold text-gray-300">
              {content.after.title
                .split(content.after.highlight ?? "")
                .map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="text-primary">
                        {content.after.highlight}
                      </span>
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
                  <div className="bg-primary/20 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <Check className="text-primary h-3.5 w-3.5" />
                  </div>
                  <Body size="base" className="text-gray-300">
                    {item}
                  </Body>
                </motion.li>
              ))}
            </ul>
          </Box>
        </div>
      </div>
    </Slide>
  );
}
