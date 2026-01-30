"use client";

import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  Label,
  PageHeader,
} from "~/components/slide-components";
import { Check } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import type { PricingWithAddonsSlideContent, IconName } from "../../types";

interface PricingWithAddonsSlideProps {
  content: PricingWithAddonsSlideContent;
  slideNumber: number;
}

function getIcon(name: IconName) {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className="h-5 w-5 text-primary" /> : null;
}

export default function PricingWithAddonsSlide({ content, slideNumber }: PricingWithAddonsSlideProps) {
  const { basePackage, addOns } = content;

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="h-full flex items-center justify-center">
        <div className="max-w-4xl w-full">
          <PageHeader
            label={content.label}
            title={content.title}
            className="mb-8"
          />

          {/* Base Package */}
          <Box
            animation="slideUp"
            delay={0.2}
            hoverEffect="none"
            className="p-6 rounded-2xl bg-primary/5 border-2 border-primary mb-4"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <Label className="text-primary mb-2">{basePackage.label}</Label>
                <Heading level="h3" className="text-gray-300">{basePackage.title}</Heading>
                <Body size="base" className="text-gray-400 mt-1">
                  {basePackage.description}
                </Body>
              </div>
              <div className="text-right">
                <Heading level="h2" className="text-primary">{basePackage.price}</Heading>
                <Body size="sm" className="text-gray-500">{basePackage.priceLabel}</Body>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {basePackage.features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <Body size="sm" className="text-gray-400">{item}</Body>
                </motion.div>
              ))}
            </div>
          </Box>

          {/* Add-ons Section */}
          {addOns && (addOns.featured !== undefined || addOns.items !== undefined) && (
            <Box animation="slideUp" delay={0.4} hoverEffect="none" className="mb-4">
              <Label className="text-gray-500 mb-3">OPTIONAL ADD-ONS</Label>
              <div className="grid grid-cols-2 gap-4">
                {/* Featured Add-on */}
                {addOns.featured && (
                  <Box
                    animation="slideRight"
                    delay={0.5}
                    hoverEffect="lift"
                    className="p-5 rounded-xl bg-neutral-800/30 border border-neutral-700"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {getIcon(addOns.featured.icon)}
                      </div>
                      <div>
                        <Heading level="h5" className="text-gray-300">{addOns.featured.title}</Heading>
                        <Body size="sm" className="text-gray-500">{addOns.featured.subtitle}</Body>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <Heading level="h4" className="text-primary">{addOns.featured.price}</Heading>
                      <Body size="sm" className="text-gray-500">{addOns.featured.priceLabel}</Body>
                      {addOns.featured.monthly && (
                        <Body size="sm" className="text-gray-400">+ {addOns.featured.monthly}</Body>
                      )}
                    </div>
                    <ul className="space-y-1.5">
                      {addOns.featured.features.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                          <Body size="xs" className="text-gray-400">{item}</Body>
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}

                {/* Other Add-ons */}
                {addOns.items && addOns.items.length > 0 && (
                  <div className="space-y-3">
                    {addOns.items.map((addon, i) => (
                      <Box
                        key={i}
                        animation="slideLeft"
                        delay={0.6 + i * 0.1}
                        hoverEffect="highlight"
                        className="flex items-center justify-between p-4 rounded-xl bg-neutral-800/20 border border-neutral-700/50"
                      >
                        <div>
                          <Body size="base" className="text-gray-300 font-medium">{addon.name}</Body>
                          <Body size="xs" className="text-gray-500">{addon.description}</Body>
                        </div>
                        <Body size="base" className="text-primary font-semibold">{addon.price}</Body>
                      </Box>
                    ))}
                  </div>
                )}
              </div>
            </Box>
          )}

          {/* Footer note */}
          {content.note && (
            <Box animation="fade" delay={0.9} hoverEffect="none" className="text-center">
              <Body size="sm" className="text-gray-500">
                {content.note}
              </Body>
            </Box>
          )}
        </div>
      </div>
    </Slide>
  );
}
