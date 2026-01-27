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

  return (
    <div className="h-full flex gap-10 items-center relative overflow-hidden">

      {/* Left side - Content */}
      <div className="flex flex-col w-full mx-auto pl-32 pb-28 relative z-10">
        <div className="w-full max-w-2xl">
          <Logo
            src={theme.clientLogo ?? "/logos/ria-catalyst.png"}
            alt={theme.clientName ?? "Ria Catalyst"}
            animation="slideDown"
            delay={0}
            height={80}
            className="pb-12"
          />

          <Box animation="slideUp" delay={0.2} hoverEffect="highlight" className="mt-8">
            <Heading level="h1" className="mb-4 text-white">
              Growth Proposal for Ria Catalyst
            </Heading>

            <Heading level="h3" className="mb-6 text-white/70 font-normal">
              Prepared for Julien Baneux
            </Heading>

            {/* DigitalNova branding */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex items-center gap-3 pt-6 border-t border-white/20"
            >
              <Body size="lg" className="text-white/80">
                DigitalNova Studio
              </Body>
            </motion.div>
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
          src="/images/blue/blue-7.jpg"
          alt="Hero Image"
          width={1000}
          height={1000}
          className="h-full object-cover border border-white/20"
        />
      </Box>

      {/* Bottom bar */}
      <div className="absolute z-0 bottom-0 left-0 right-0 h-28 pl-32 gap-8 flex items-center justify-between">
        <div className="logo">
          <Image src="/logo.png" alt="DigitalNova Logo" width={200} height={40} />
        </div>
        <div className="h-px w-full bg-white/20" />
      </div>
    </div>
  );
}
