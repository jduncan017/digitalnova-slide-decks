"use client";

import Slide from "~/components/Slide";
import {
  Body,
  Box,
  Heading,
  PageHeader,
} from "~/components/slide-components";
import { Users, Target, TrendingUp, DollarSign, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

export default function TheOpportunitySlide({ slideNumber }: { slideNumber: number }) {
  const opportunities: { icon: ReactNode; factor: string; result: string }[] = [
    {
      icon: <Users className="h-8 w-8" />,
      factor: "You've Proven Demand",
      result: "$500k ARR from word of mouth alone means the product works.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      factor: "You Just Need Infrastructure",
      result: "Sitemap, SEO, conversion-focused pages — the basics aren't there yet.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      factor: "Then Growth Becomes Predictable",
      result: "Stop relying on referrals. Start generating leads on autopilot.",
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label="THE UPSIDE"
          title="THE OPPORTUNITY"
          subtitle="Your situation is ideal for growth — you just need the system built."
        />

        {/* Opportunity factors as a flow */}
        <div className="flex items-stretch justify-center gap-4 max-w-[1100px] mb-16 mt-6">
          {opportunities.map((item, index) => (
            <div key={index} className="flex items-stretch">
              <Box
                animation="slideUp"
                delay={0.3 + index * 0.12}
                className="flex flex-col items-center text-center p-6 w-[300px] bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm"
                hoverEffect="none"
              >
                <div className="mb-4 p-3 rounded-xl bg-white/10 text-white">
                  {item.icon}
                </div>
                <Heading level="h5" className="text-white mb-3">
                  {item.factor}
                </Heading>
                <Body size="sm" className="text-white/60">
                  {item.result}
                </Body>
              </Box>

              {/* Arrow connector */}
              {index < opportunities.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 8 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center px-4"
                >
                  <ArrowRight className="h-8 w-8 text-white/30" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Key insight callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-2xl"
        >
          <div className="p-3 rounded-xl bg-white/10">
            <DollarSign className="h-8 w-8 text-white" />
          </div>
          <div>
            <Body size="lg" className="font-semibold text-white">
              At your price point, one new premium customer pays our fees entirely, and two pays for marketing entirely.
            </Body>
            <Body size="base" className="text-white/60">
              The math works in your favor — you just need the system built.
            </Body>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
