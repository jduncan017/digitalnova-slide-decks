"use client";

import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import { Lightbulb, Monitor, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurSystemSlide({ slideNumber }: { slideNumber: number }) {
  const pillars = [
    {
      title: "Brand Strategy",
      icon: <Lightbulb className="h-6 w-6" />,
      number: "01",
      items: [
        "Position your SaaS to stand out",
        "Attract your ideal customers",
        "Messaging that resonates",
      ],
    },
    {
      title: "Conversion Website",
      icon: <Monitor className="h-6 w-6" />,
      number: "02",
      items: [
        "Pages built to convert",
        "Clear value proposition",
        "Frictionless demo booking",
      ],
    },
    {
      title: "Paid Acquisition",
      icon: <TrendingUp className="h-6 w-6" />,
      number: "03",
      items: [
        "Targeted ad campaigns",
        "Predictable demo cost",
        "Continuous optimization",
      ],
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label="THE FULL STACK"
          title="ONE SYSTEM. ONE PARTNER."
          subtitle="Everything you need for ads to succeed — handled end-to-end."
        />

        {/* 3-pillar grid with visual flow */}
        <div className="flex items-stretch justify-center gap-2 max-w-[1200px] mb-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex items-stretch">
              <Box
                animation="slideUp"
                delay={0.3 + index * 0.12}
                variant="gradient"
                className="p-6 w-[320px] relative"
              >
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-neutral-950 text-xs font-bold rounded-full">
                  {pillar.number}
                </div>

                {/* Icon + Title row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {pillar.icon}
                  </div>
                  <Heading level="h4" className="text-white">
                    {pillar.title}
                  </Heading>
                </div>

                {/* Items list */}
                <ul className="space-y-2">
                  {pillar.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      <Body size="sm" className="text-gray-400">{item}</Body>
                    </li>
                  ))}
                </ul>
              </Box>

              {/* Arrow between pillars */}
              {index < pillars.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center px-2"
                >
                  <ArrowRight className="h-6 w-6 text-primary/40" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Personal touch section */}
        <div className="flex gap-6 max-w-[1100px] w-full">
          {/* Headshot */}
          <Box
            animation="fade"
            delay={0.8}
            variant="gradient"
            className="p-0! overflow-hidden shrink-0"
          >
            <Image
              src="/joshua-duncan.png"
              alt="Josh Duncan"
              width={100}
              height={100}
              className="object-cover h-full w-auto"
            />
          </Box>

          {/* Direct access message */}
          <Box
            animation="fade"
            delay={0.85}
            variant="highlight"
            className="flex-1 flex items-center px-8 py-5"
          >
            <div>
              <Heading level="h4" className="text-white mb-1">
                You work directly with me — not a junior account manager.
              </Heading>
              <Body size="sm" className="text-gray-400">
                One point of contact who understands your business, your goals, and your customers.
              </Body>
            </div>
          </Box>
        </div>
      </div>
    </Slide>
  );
}
