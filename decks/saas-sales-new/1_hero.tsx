"use client";

import {
  Logo,
  Heading,
  Body,
  Box,
} from "~/components/slide-components";
import { useTheme } from "~/components/ThemeProvider";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSlide() {
  const theme = useTheme();

  const services = ["Brand Strategy", "Conversion Websites", "Paid Acquisition"];

  return (
    <div className="h-full flex gap-10 items-center relative overflow-hidden">
      {/* Animated gradient orb - centered around logo */}
      <motion.div
        className="absolute left-32 top-16 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${theme.primary ?? '#6366f1'} 0%, transparent 70%)` }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left side - Content */}
      <div className="flex flex-col w-full mx-auto pl-32 pb-28 relative z-10">
        <div className="w-full max-w-2xl">
          <Logo
            src={theme.clientLogo ?? "/logo.png"}
            alt={theme.clientName ?? "Digital Nova Studio"}
            animation="slideDown"
            delay={0}
            height={100}
            className="pb-16"
          />

          <Box animation="slideUp" delay={0.2} hoverEffect="highlight" className="mt-8">
            <Heading level="h1" className="mb-4 text-white">
              Turn Clicks Into Customers
            </Heading>

            <Heading level="h3" className="mb-6 text-gray-300 font-normal">
              The complete growth system for SaaS companies ready to scale.
            </Heading>

            {/* Animated service list */}
            <div className="flex gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                >
                  <Body size="lg" className="text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {service}
                  </Body>
                </motion.div>
              ))}
            </div>
          </Box>
        </div>
      </div>

      {/* Right side - Image */}
      <Box
        animation="none"
        hoverEffect="none"
        className="relative h-full max-w-2xl ml-auto z-10"
      >
        <Image
          src="/hero4.jpg"
          alt="Hero Image"
          width={1000}
          height={1000}
          className="h-full object-cover border border-neutral-700"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/50 to-transparent" />
      </Box>

      {/* Bottom bar */}
      <div className="absolute z-20 bottom-0 left-0 right-0 h-28 pl-32 gap-8 flex items-center justify-between">
        <div className="logo">
          <Image src="/icon-metal-light.png" alt="DigitalNova Logo" width={40} height={40} />
        </div>
        <div className="h-px w-full bg-gray-500/50" />
      </div>
    </div>
  );
}
