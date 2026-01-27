"use client";

import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import { Check, FileText, Wrench, Settings, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function TimelineSlide({ slideNumber }: { slideNumber: number }) {
  const phases = [
    {
      week: "WEEK 1",
      title: "Discovery & Planning",
      icon: <FileText className="h-6 w-6" />,
      items: [
        "Deposit to kick off",
        "Final proposal & contract",
        "Discovery call + offer building",
        "Sitemap & SEO audit",
        "Funnel strategy",
      ],
      highlight: true,
    },
    {
      week: "WEEKS 2-3",
      title: "Site & Funnel Build",
      icon: <Wrench className="h-6 w-6" />,
      items: [
        "Design + copywriting",
        "Page development",
        "Conversion optimization",
        "Testing & QA",
      ],
      highlight: false,
    },
    {
      week: "WEEK 4",
      title: "Systems Setup",
      icon: <Settings className="h-6 w-6" />,
      items: [
        "CRM integration",
        "Automation flows",
        "Ad creative development",
        "Campaign structure",
      ],
      highlight: false,
    },
    {
      week: "WEEK 5+",
      title: "Launch & Optimize",
      icon: <Rocket className="h-6 w-6" />,
      items: [
        "LinkedIn ad launch",
        "Weekly performance reports",
        "A/B testing",
        "Ongoing optimization",
      ],
      highlight: false,
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center">
        <PageHeader
          label="THE ROADMAP"
          title="HOW WE GET THERE"
          subtitle="A clear path from kickoff to qualified demos in your pipeline."
          align="left"
        />

        {/* Timeline grid - 2x2 for better space usage */}
        <div className="grid grid-cols-4 gap-4">
          {phases.map((phase, index) => (
            <Box
              key={index}
              animation="slideUp"
              delay={0.2 + index * 0.1}
              className={`rounded-2xl p-5 flex flex-col ${
                phase.highlight
                  ? "bg-white/15 border-2 border-white/30"
                  : "bg-white/5 border border-white/10"
              }`}
              hoverEffect="none"
            >
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-xl ${phase.highlight ? "bg-white/20" : "bg-white/10"}`}>
                  <div className="text-white">{phase.icon}</div>
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-xs font-bold text-white/50 tracking-wider"
                  >
                    {phase.week}
                  </motion.div>
                  <Heading level="h5" className="text-white">
                    {phase.title}
                  </Heading>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 mb-4" />

              {/* Items */}
              <ul className="space-y-2.5 flex-1">
                {phase.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 + itemIndex * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-white/60" />
                    <Body size="sm" className="text-white/70">{item}</Body>
                  </motion.li>
                ))}
              </ul>
            </Box>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-6 flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl max-w-fit"
        >
          <div className="w-2 h-2 rounded-full bg-white/60" />
          <Body size="base" className="text-white/70">
            <span className="text-white font-medium">Step 1:</span> {`Setup fee deposit → full proposal → contract signed → we start building.`}
          </Body>
        </motion.div>
      </div>
    </Slide>
  );
}
