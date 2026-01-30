"use client";

import Slide from "~/components/Slide";
import {
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import type { ComparisonSlideContent } from "../../types";

interface ComparisonSlideProps {
  content: ComparisonSlideContent;
  slideNumber: number;
}

export default function ComparisonSlide({ content, slideNumber }: ComparisonSlideProps) {
  const columns = content.columns;

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="h-full flex flex-col justify-center items-center">
        <PageHeader
          label={content.label}
          title={content.title}
          subtitle={content.subtitle}
          className="mb-12"
        />

        <Box animation="slideUp" delay={0.3} hoverEffect="none" className="w-full max-w-4xl">
          <div className="rounded-2xl border border-neutral-700 overflow-hidden">
            {/* Header row */}
            <div
              className="grid bg-neutral-800/50"
              style={{ gridTemplateColumns: `1fr repeat(${columns.length}, 1fr)` }}
            >
              <div className="p-4 text-gray-500 text-sm font-medium">Feature</div>
              {columns.map((col, i) => (
                <div
                  key={i}
                  className={`p-4 text-center border-l border-neutral-700 ${
                    col.highlighted ? "bg-primary/10" : ""
                  }`}
                >
                  <Body
                    size="sm"
                    className={col.highlighted ? "text-primary font-semibold" : "text-gray-400"}
                  >
                    {col.name}
                  </Body>
                </div>
              ))}
            </div>

            {/* Comparison rows */}
            {content.features.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="grid border-t border-neutral-700"
                style={{ gridTemplateColumns: `1fr repeat(${columns.length}, 1fr)` }}
              >
                <div className="p-4">
                  <Body size="sm" className="text-gray-300">{row.feature}</Body>
                </div>
                {row.values.map((hasFeature, j) => (
                  <div
                    key={j}
                    className={`p-4 flex justify-center border-l border-neutral-700 ${
                      columns[j]?.highlighted ? "bg-primary/5" : ""
                    }`}
                  >
                    {hasFeature ? (
                      <Check className={`h-5 w-5 ${columns[j]?.highlighted ? "text-primary" : "text-green-400"}`} />
                    ) : (
                      <X className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {content.footnote && (
            <Box animation="fade" delay={0.9} hoverEffect="none" className="text-center mt-6">
              <Body size="base" className="text-gray-500">
                {content.footnote}
              </Body>
            </Box>
          )}
        </Box>
      </div>
    </Slide>
  );
}
