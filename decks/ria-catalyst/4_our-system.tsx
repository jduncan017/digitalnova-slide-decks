"use client";

import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import { Globe, Calendar, FileText, ArrowRight, Code, Palette, Crosshair } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatIdBuildSlide({ slideNumber }: { slideNumber: number }) {
  const deliverables = [
    {
      title: "Website & Funnel",
      icon: <Globe className="h-6 w-6" />,
      number: "01",
      items: [
        "Fix sitemap & SEO foundation",
        "Conversion-focused pages",
        "Clear value proposition",
      ],
    },
    {
      title: "Demo Booking System",
      icon: <Calendar className="h-6 w-6" />,
      number: "02",
      items: [
        "Calendly integration",
        "Lead qualification",
        "CRM setup",
      ],
    },
    {
      title: "Content Engine",
      icon: <FileText className="h-6 w-6" />,
      number: "03",
      items: [
        "SEO-optimized pages",
        "Target corp dev search intent",
        "Organic traffic growth",
      ],
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label="THE PLAN"
          title="WHAT I'D BUILD FOR YOU"
          subtitle="Everything you need to turn visitors into qualified demos."
        />

        {/* 3-pillar grid with visual flow */}
        <div className="flex items-stretch justify-center gap-2 max-w-[1200px] mb-8">
          {deliverables.map((item, index) => (
            <div key={index} className="flex items-stretch">
              <Box
                animation="slideUp"
                delay={0.3 + index * 0.12}
                className="p-6 w-[320px] relative bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm"
                hoverEffect="none"
              >
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/20 border border-white/30 text-white text-xs font-bold rounded-full">
                  {item.number}
                </div>

                {/* Icon + Title row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/10 text-white">
                    {item.icon}
                  </div>
                  <Heading level="h4" className="text-white">
                    {item.title}
                  </Heading>
                </div>

                {/* Items list */}
                <ul className="space-y-2">
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                      <Body size="sm" className="text-white/70">{listItem}</Body>
                    </li>
                  ))}
                </ul>
              </Box>

              {/* Arrow between pillars */}
              {index < deliverables.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center px-2"
                >
                  <ArrowRight className="h-6 w-6 text-white/30" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Implementation options */}
        <div className="flex gap-6 max-w-[1100px] w-full">
          <Box
            animation="fade"
            delay={0.8}
            className="flex-1 flex items-center gap-4 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm"
            hoverEffect="none"
          >
            <div className="p-2 rounded-lg bg-white/10 text-white">
              <Code className="h-6 w-6" />
            </div>
            <div>
              <Heading level="h5" className="text-white mb-1">
                Option A: I implement directly
              </Heading>
              <Body size="sm" className="text-white/60">
                Full development in Next.js — I handle everything.
              </Body>
            </div>
          </Box>

          <Box
            animation="fade"
            delay={0.85}
            className="flex-1 flex items-center gap-4 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm"
            hoverEffect="none"
          >
            <div className="p-2 rounded-lg bg-white/10 text-white">
              <Palette className="h-6 w-6" />
            </div>
            <div>
              <Heading level="h5" className="text-white mb-1">
                Option B: Design + specs handoff
              </Heading>
              <Body size="sm" className="text-white/60">
                I design and document, your dev team builds.
              </Body>
            </div>
          </Box>
        </div>
      </div>
    </Slide>
  );
}
