"use client";

import {
  Logo,
  Heading,
  Body,
  Box,
} from "~/components/slide-components";
import { useTheme } from "~/components/ThemeProvider";
import Image from "next/image";

export default function HeroSlide() {
  const theme = useTheme();

  return (
    <div className="h-full flex gap-10 items-center">
      {/* Left side - Content */}
      <div className="flex flex-col w-full mx-auto pl-32 pb-28">
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
          <Heading level="h1" className="mb-6 text-white">
            SaaS Growth System
          </Heading>

          <Heading level="h3" className="mb-2 text-gray-300">
            Predictable Growth for SaaS Companies
          </Heading>

          <Body size="lg" className="text-gray-400">
            Brand Strategy • Website Development • Paid Acquisition
          </Body>
        </Box>
        </div>
      </div>

      {/* Right side - Image placeholder */}
      <Box
        animation="none"
        hoverEffect="none"
        className="relative h-full max-w-2xl ml-auto z-10"
      >
          <Image src="/hero4.jpg" alt="Hero Image" width={1000} height={1000} className="h-full object-cover border border-neutral-700" />
      </Box>

      <div className="absolute z-0 bottom-0 left-0 right-0 h-28 pl-32 gap-8 flex items-center justify-between">
        <div className="logo">
          <Image src="/logo.png" alt="DigitalNova Logo" width={280} height={40} />
        </div>
      <div className="h-0.25 w-full bg-gray-500" />
      </div>
    </div>
  );
}
