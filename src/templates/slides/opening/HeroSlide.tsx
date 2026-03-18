"use client";

import { Logo, Heading, Body, Box } from "~/components/slide-components";
import { useTheme } from "~/components/ThemeProvider";
import Image from "next/image";
import { motion } from "framer-motion";
import type { HeroSlideContent } from "../../types";

interface HeroSlideProps {
  content: HeroSlideContent;
}

export default function HeroSlide({ content }: HeroSlideProps) {
  const theme = useTheme();
  const mode = theme.mode;
  const logoSrc = mode === "light" ? "/dn-logo-dark.png" : "/logo.png";
  const lineColor = mode === "light" ? "bg-slate-300" : "bg-gray-500";

  return (
    <div className="relative flex h-full items-center gap-10 overflow-hidden">
      {/* Left side - Content */}
      <div className="relative z-10 mx-auto flex w-full flex-col pb-28 pl-32">
        <div className="w-full max-w-2xl">
          <Logo
            src={theme.clientLogo ?? "/logo.png"}
            alt={theme.clientName ?? "Digital Nova Studio"}
            animation="slideDown"
            delay={0}
            height={80}
            className="pb-4"
          />

          <Box
            animation="slideUp"
            delay={0.2}
            hoverEffect="highlight"
            className="mt-8"
          >
            <Heading level="h1" className="mb-4 text-gray-300">
              {content.title}
            </Heading>

            <Heading level="h3" className="mb-6 font-normal text-gray-400">
              {content.subtitle}
            </Heading>

            {content.tagline && (
              <Body size="lg" className="text-gray-400">
                {content.tagline}
              </Body>
            )}

            {/* Prepared for / branding */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex items-center gap-3 border-t border-gray-500/30 pt-6"
            >
              <Body size="lg" className="text-gray-400">
                {content.preparedFor ?? "DigitalNova Studio"}
              </Body>
            </motion.div>
          </Box>
        </div>
      </div>

      {/* Right side - Image */}
      {content.heroImage && (
        <Box
          animation="none"
          hoverEffect="none"
          className="relative z-10 ml-auto h-full max-w-2xl"
        >
          <Image
            src={content.heroImage}
            alt="Hero Image"
            width={1000}
            height={1000}
            className="h-full border border-neutral-700/25 object-cover"
          />
        </Box>
      )}

      {/* Bottom bar - theme-aware */}
      {!content.hideFooter && (
        <div className="absolute right-0 bottom-0 left-0 z-0 flex h-28 items-center justify-between gap-8 pl-32">
          <div className="logo">
            <Image
              src={logoSrc}
              alt="DigitalNova Logo"
              width={200}
              height={40}
            />
          </div>
          <div className={`h-px w-full ${lineColor} opacity-30`} />
        </div>
      )}
    </div>
  );
}
