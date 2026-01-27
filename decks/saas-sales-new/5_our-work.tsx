"use client";

import Slide from "~/components/Slide";
import {
  Body,
  Box,
  PageHeader,
  OverlappingShowcase,
} from "~/components/slide-components";
import { motion } from "framer-motion";

export default function OurWorkSlide({ slideNumber }: { slideNumber: number }) {
  // Portfolio items - brand proofs (left) paired with design proofs (right)
  const portfolioItems = [
    {
      id: "set-1",
      leftImage: "/brand-proofs/newflower.png",
      rightImage: "/design-proofs/newflower.png",
      leftLabel: "Brand Identity",
      rightLabel: "Web Design",
    },
    {
      id: "set-2",
      leftImage: "/brand-proofs/funnel.png",
      rightImage: "/design-proofs/scriber.png",
      leftLabel: "Funnel Strategy",
      rightLabel: "Landing Page",
    },
    {
      id: "set-3",
      leftImage: "/brand-proofs/values.png",
      rightImage: "/design-proofs/newflower-value-section.png",
      leftLabel: "Brand Values",
      rightLabel: "Value Proposition",
    },
    {
      id: "set-4",
      leftImage: "/brand-proofs/who-what-why.png",
      rightImage: "/design-proofs/scriber2.jpeg",
      leftLabel: "Messaging Framework",
      rightLabel: "Conversion Page",
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label="PORTFOLIO"
          title="WORK WE'VE SHIPPED"
          subtitle="From strategy to launch — here's what the full stack looks like."
        />

        {/* Overlapping showcase */}
        <OverlappingShowcase
          items={portfolioItems}
          autoPlay={true}
          autoPlayInterval={6000}
          className="w-full max-w-[1200px]"
          leftTitle="Strategy"
          rightTitle="Execution"
          showArrows={true}
          showDots={false}
        />

        {/* Subtle proof point */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6"
        >
          <Box
            animation="none"
            hoverEffect="none"
            className="inline-flex items-center gap-6 px-6 py-3 bg-neutral-900/50 rounded-full border border-neutral-800"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <Body size="sm" className="text-gray-400">
                <span className="text-white font-medium">30+</span> projects delivered
              </Body>
            </div>
            <div className="w-px h-4 bg-neutral-700" />
            <Body size="sm" className="text-gray-400">
              Avg. <span className="text-white font-medium">3x</span> conversion lift
            </Body>
          </Box>
        </motion.div>
      </div>
    </Slide>
  );
}
