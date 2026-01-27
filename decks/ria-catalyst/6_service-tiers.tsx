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

export default function InvestmentSlide({ slideNumber }: { slideNumber: number }) {
  const tiers = [
    {
      title: "PAID ACQUISITION",
      subtitle: "You've got a solid brand and website. You just need leads.",
      price: "$2,500",
      priceLabel: "Setup",
      monthly: "$1,500/mo",
      features: [
        "LinkedIn ad campaigns",
        "Landing page/funnel",
        "CRM integration",
        "Weekly reports",
        "A/B testing",
      ],
      recommended: false,
    },
    {
      title: "GROWTH SYSTEM",
      subtitle: "You need a conversion-focused website AND a lead engine.",
      price: "$5,000",
      priceLabel: "Setup",
      monthly: "$1,500/mo",
      features: [
        "Everything in Paid Acquisition",
        "Website (5 pages)",
        "SEO foundation",
        "Full funnel build",
      ],
      recommended: true,
    },
    {
      title: "COMPLETE REBRAND",
      subtitle: "Starting fresh or your brand isn't working? We rebuild everything.",
      price: "$6,500",
      priceLabel: "Setup",
      monthly: "$1,500/mo",
      features: [
        "Everything in Growth System",
        "Brand strategy",
        "Logo design",
        "Brand guidelines",
        "Messaging framework",
      ],
      recommended: false,
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader label="INVESTMENT" title="CHOOSE YOUR PATH" />

        {/* Pricing cards */}
        <Grid cols={3} gap={4} className="max-w-[1280px]" animation="none">
          {tiers.map((tier, index) => (
            <Box
              key={index}
              animation="slideUp"
              delay={0.4 + index * 0.15}
              className={`flex h-full flex-col rounded-2xl p-8 relative backdrop-blur-sm ${
                tier.recommended
                  ? "bg-blue-200/10 border-2 border-blue-200"
                  : "bg-white/10 border border-white/20"
              }`}
              hoverEffect="none"
            >
              {/* Recommended badge */}
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-white text-black text-xs font-bold rounded-full">
                  <Star className="h-3 w-3 fill-black" />
                  RECOMMENDED
                </div>
              )}

              <Heading level="h4" className="mb-2 text-white">
                {tier.title}
              </Heading>
              <Body size="sm" className="mb-6 min-h-12 text-white/60">
                {tier.subtitle}
              </Body>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-white/20">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-blue-200">
                    {tier.price}
                  </span>
                  <span className="text-white/60">{tier.priceLabel}</span>
                </div>
                <div className="mt-2 text-lg text-white/80">
                  + {tier.monthly} <span className="text-white/50">retainer</span>
                </div>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-white/70"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                    <Body size="sm" as="span">{feature}</Body>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Grid>

        {/* Subtle reassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-center"
        >
          <Body size="sm" className="text-white/60">
            All plans include a 30-minute onboarding call • Retainer starts when we go live
          </Body>
        </motion.div>
      </div>
    </Slide>
  );
}
