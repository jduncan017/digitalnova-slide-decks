"use client";

import Slide from "~/components/Slide";
import {
  Body,
  Box,
  Heading,
  PageHeader,
  Testimonial,
} from "~/components/slide-components";
import { Target, BarChart3, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

export default function WhyAdsSucceedSlide({ slideNumber }: { slideNumber: number }) {
  const successFactors: { icon: ReactNode; factor: string; result: string }[] = [
    {
      icon: <Target className="h-8 w-8" />,
      factor: "Demo-Optimized Funnel",
      result: "Every page, form, and CTA is built to book qualified demos",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      factor: "Attribution That Works",
      result: "Know exactly which ads drive demos — not just clicks",
    },
    {
      icon: <Users className="h-8 w-8" />,
      factor: "End-to-End Ownership",
      result: "No finger-pointing — one team accountable for results",
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label="OUR APPROACH"
          title="WHY ADS SUCCEED WITH US"
          subtitle="We don't just run ads — we build the system that makes them work."
        />

        {/* Success factors as a flow - equal height boxes */}
        <div className="flex items-stretch justify-center gap-4 max-w-[1100px] mb-16  mt-6">
          {successFactors.map((item, index) => (
            <div key={index} className="flex items-stretch">
              <Box
                animation="slideUp"
                delay={0.3 + index * 0.12}
                variant="gradient"
                className="flex flex-col items-center text-center p-6 w-[300px]"
              >
                <div className="mb-4 p-3 rounded-xl bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <Heading level="h5" className="text-white mb-3">
                  {item.factor}
                </Heading>
                <Body size="sm" className="text-gray-400">
                  {item.result}
                </Body>
              </Box>

              {/* Arrow connector */}
              {index < successFactors.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 8 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center px-4"
                >
                  <ArrowRight className="h-8 w-8 text-primary/40" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Testimonial moved from slide 4 */}
        <Testimonial
          quote="Josh didn't just design a website — he built a complete brand experience. Within weeks of launch, we were seeing an increase in inquiries."
          name="Danielle L."
          role="Founder"
          delay={0.8}
          className="max-w-[700px]"
        />
      </div>
    </Slide>
  );
}
