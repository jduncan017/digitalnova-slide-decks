"use client";

import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import { Check, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function NextStepsSlide({ slideNumber }: { slideNumber: number }) {
  const steps = [
    {
      period: "TODAY",
      title: "Get Started",
      items: [
        "Confirm your plan",
        "Sign the contract",
        "Pay setup fee",
      ],
      highlight: true,
    },
    {
      period: "WEEK 1-2",
      title: "Build",
      items: [
        "30-min onboarding call",
        "Offer workshop + script",
        "CRM setup",
        "Funnel + landing page",
        "Quick video clips (phone works)",
      ],
      highlight: false,
    },
    {
      period: "WEEK 3-4",
      title: "Launch",
      items: [
        "Video asset production",
        "You approve everything",
        "Ads go live",
        "First leads come in",
      ],
      highlight: false,
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader label="WHAT HAPPENS NEXT" title="YOUR GROWTH TIMELINE" />

        {/* Timeline cards */}
        <div className="flex items-stretch justify-center gap-0 mb-10">
          {steps.map((step, index) => (
            <div key={index} className="flex items-stretch">
              {/* Step card */}
              <Box
                animation="slideUp"
                delay={0.3 + index * 0.15}
                variant={step.highlight ? "highlight" : "gradient"}
                className="w-[280px] rounded-2xl p-6 flex flex-col"
              >
                {/* Period badge */}
                <div className="mb-4 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      step.highlight
                        ? "bg-primary text-neutral-950"
                        : "bg-neutral-800 text-primary"
                    }`}
                  >
                    {step.highlight && <Zap className="h-3 w-3" />}
                    {step.period}
                  </motion.div>
                </div>

                <Heading level="h4" className="text-white text-center mb-4">
                  {step.title}
                </Heading>

                {/* Items */}
                <ul className="space-y-3 flex-1">
                  {step.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      <Body size="sm" as="span">{item}</Body>
                    </li>
                  ))}
                </ul>
              </Box>

              {/* Arrow between cards */}
              {index < steps.length - 1 && (
                <div className="flex items-center px-4">
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.15 }}
                  >
                    <ArrowRight className="h-6 w-6 text-primary/50" />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key message - no background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center max-w-[800px]"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <Body size="lg" className="text-white">
              <span className="text-primary font-semibold">Retainer starts when ads go live</span>
              {" "}— you only pay setup during the build phase.
            </Body>
          </div>
          <Body size="sm" className="text-gray-500">
            Most clients see their first qualified demos within 30 days of launch.
          </Body>
        </motion.div>
      </div>
    </Slide>
  );
}
