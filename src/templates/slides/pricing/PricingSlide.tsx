"use client";

import Slide from "~/components/Slide";
import { Heading, Body, Box, PageHeader } from "~/components/slide-components";
import { Check, Star } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import type { PricingSlideContent, IconName } from "../../types";

interface PricingSlideProps {
  content: PricingSlideContent;
  slideNumber: number;
}

function getConnectorIcon(name: IconName) {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className="text-primary/60 h-8 w-8" /> : null;
}

export default function PricingSlide({
  content,
  slideNumber,
}: PricingSlideProps) {
  const hasConnectors =
    content.connectorIcons && content.connectorIcons.length > 0;

  return (
    <Slide showLogo slideNumber={slideNumber} chromeVariant="minimal">
      <div className="flex h-full flex-col items-center justify-center">
        <PageHeader label={content.label} title={content.title} subtitle={content.subtitle} />

        {/* Pricing cards with optional connectors and add-ons */}
        <div className="flex max-w-[1400px] items-stretch justify-center gap-6">
          {content.tiers.map((tier, index) => (
            <div key={index} className="flex items-stretch">
              <Box
                animation="slideUp"
                delay={0.4 + index * 0.15}
                variant={tier.recommended ? "highlight" : "gradient"}
                className={`relative flex h-full w-[320px] flex-col rounded-2xl p-8 ${
                  tier.recommended ? "border-primary-light border-2" : ""
                }`}
                hoverEffect="lift"
              >
                {/* Recommended badge */}
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/20 bg-black/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                    <Star className="h-3 w-3 fill-white" />
                    RECOMMENDED
                  </div>
                )}

                <Heading level="h4" className="mb-1 text-gray-300">
                  {tier.title}
                </Heading>
                <Body size="sm" className="mb-4 min-h-10 text-gray-400">
                  {tier.subtitle}
                </Body>

                {/* Price */}
                <div className="mb-4 border-b border-neutral-700 pb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-primary text-4xl font-bold">
                      {tier.price}
                    </span>
                    {tier.priceLabel && (
                      <span className="text-gray-400">{tier.priceLabel}</span>
                    )}
                  </div>
                  {tier.monthly && (
                    <div className="mt-2 text-lg text-gray-400">
                      + {tier.monthly}{" "}
                      <span className="text-gray-500">retainer</span>
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
                      <Body size="sm" as="span">
                        {feature}
                      </Body>
                    </li>
                  ))}
                </ul>
              </Box>

              {/* Connector icon between tiers */}
              {hasConnectors &&
                index < content.tiers.length - 1 &&
                content.connectorIcons?.[index] && (
                  <div className="flex items-center px-3 pr-0 pl-6">
                    <Box
                      animation="fade"
                      delay={0.5 + index * 0.15}
                      hoverEffect="none"
                    >
                      {getConnectorIcon(content.connectorIcons[index])}
                    </Box>
                  </div>
                )}
            </div>
          ))}

          {/* Add-ons section */}
          {content.addOns && (
            <Box
              animation="slideUp"
              delay={0.7}
              className="flex w-[320px] flex-col rounded-2xl border border-neutral-700 bg-neutral-600/20 p-8"
              hoverEffect="lift"
            >
              <Heading level="h4" className="mb-4 text-gray-300">
                ADD-ONS
              </Heading>

              {/* Required add-ons */}
              {content.addOns.required &&
                content.addOns.required.length > 0 && (
                  <div className="mb-4">
                    <Body
                      size="xs"
                      className="mb-2 tracking-wider text-gray-500 uppercase"
                    >
                      Required
                    </Body>
                    <ul className="space-y-2">
                      {content.addOns.required.map((addon, i) => (
                        <li
                          key={i}
                          className="flex items-start justify-between gap-2"
                        >
                          <Body size="sm" className="text-gray-400">
                            {addon.name}
                          </Body>
                          <Body
                            size="sm"
                            className="text-primary shrink-0 font-medium"
                          >
                            {addon.price}
                          </Body>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Optional add-ons */}
              {content.addOns.optional &&
                content.addOns.optional.length > 0 && (
                  <div>
                    <Body
                      size="xs"
                      className="mb-2 tracking-wider text-gray-500 uppercase"
                    >
                      Optional
                    </Body>
                    <ul className="space-y-2">
                      {content.addOns.optional.map((addon, i) => (
                        <li
                          key={i}
                          className="flex items-start justify-between gap-2"
                        >
                          <Body size="sm" className="text-gray-400">
                            {addon.name}
                          </Body>
                          <Body
                            size="sm"
                            className="text-primary shrink-0 font-medium"
                          >
                            {addon.price}
                          </Body>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </Box>
          )}
        </div>

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
