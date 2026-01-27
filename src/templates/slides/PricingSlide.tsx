"use client";

import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  Grid,
  PageHeader,
} from "~/components/slide-components";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { PricingSlideContent } from "../types";

interface PricingSlideProps {
  content: PricingSlideContent;
  slideNumber: number;
}

export default function PricingSlide({ content, slideNumber }: PricingSlideProps) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader label={content.label} title={content.title} />

        {/* Pricing cards */}
        <Grid cols={3} gap={4} className="max-w-[1280px]" animation="none">
          {content.tiers.map((tier, index) => (
            <Box
              key={index}
              animation="slideUp"
              delay={0.4 + index * 0.15}
              variant={tier.recommended ? "highlight" : "gradient"}
              className={`flex h-full flex-col rounded-2xl p-8 relative ${
                tier.recommended ? "border-2 border-primary-light" : ""
              }`}
              hoverEffect="none"
            >
              {/* Recommended badge */}
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-gray-300 text-neutral-950 text-xs font-bold rounded-full">
                  <Star className="h-3 w-3 fill-neutral-950" />
                  RECOMMENDED
                </div>
              )}

              <Heading level="h4" className="mb-2 text-gray-300">
                {tier.title}
              </Heading>
              <Body size="sm" className="mb-6 min-h-12 text-gray-400">
                {tier.subtitle}
              </Body>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-neutral-700">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">
                    {tier.price}
                  </span>
                  {tier.priceLabel && (
                    <span className="text-gray-400">{tier.priceLabel}</span>
                  )}
                </div>
                {tier.monthly && (
                  <div className="mt-2 text-lg text-gray-400">
                    + {tier.monthly} <span className="text-gray-500">retainer</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gray-300" />
                    <Body size="sm" as="span">{feature}</Body>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Grid>

        {/* Optional note */}
        {content.note && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-center"
          >
            <Body size="sm" className="text-gray-400">
              {content.note}
            </Body>
          </motion.div>
        )}
      </div>
    </Slide>
  );
}
