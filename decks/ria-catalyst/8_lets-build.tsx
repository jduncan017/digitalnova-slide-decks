"use client";

import Slide from "~/components/Slide";
import Image from "next/image";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import { Mail, Globe, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function NextStepsSlide({ slideNumber }: { slideNumber: number }) {
  const contactItems = [
    {
      icon: <Mail className="h-5 w-5 text-white" />,
      text: "josh@digitalnovastudio.com",
      href: "mailto:josh@digitalnovastudio.com",
    },
    {
      icon: <Globe className="h-5 w-5 text-white" />,
      text: "digitalnovastudio.com",
      href: "https://digitalnovastudio.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-white" />,
      text: "(315) 276-5928",
      href: "tel:+13152765928",
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="h-full flex gap-16 w-full">
        {/* Left side - CTA content */}
        <div className="flex flex-col justify-center max-w-[720px] w-full pl-20">
          <PageHeader
            label="LET'S GO"
            title="NEXT STEPS"
            align="left"
          />

          {/* Profile card */}
          <Box
            animation="fade"
            delay={0.5}
            className="flex items-center gap-5 p-5 mb-8 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm"
            hoverEffect="none"
          >
            <div className="shrink-0">
              <Image
                src="/joshua-duncan.png"
                alt="Joshua Duncan"
                className="rounded-full ring-2 ring-white/30"
                width={72}
                height={72}
              />
            </div>
            <div>
              <Heading level="h4" className="text-white mb-1">
                Josh Duncan
              </Heading>
              <Body size="sm" className="text-white/60 mb-2">
                Founder, DigitalNova Studio
              </Body>
              <Body size="xs" className="text-white/80">
                Your single point of contact
              </Body>
            </div>
          </Box>

          {/* Contact links */}
          <Box animation="slideUp" delay={0.6} hoverEffect="none">
            <div className="flex flex-wrap gap-6">
              {contactItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  whileHover={{ x: 2 }}
                >
                  {item.icon}
                  <Body size="sm" as="span">
                    {item.text}
                  </Body>
                </motion.a>
              ))}
            </div>
          </Box>
        </div>

        {/* Right side - Image with overlay */}
        <Box
          animation="fade"
          delay={0.3}
          hoverEffect="none"
          className="relative flex items-center w-full"
        >
          <div className="relative w-full h-full flex justify-end">
            <Image
              src="/images/blue/blue-2.jpg"
              alt="Growth"
              width={420}
              height={520}
              className="object-cover border h-full border-white/20 rounded-2xl shadow-2xl"
            />
            {/* Success overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-xl"
            >
              <Body size="xs" className="text-white/60 uppercase tracking-wider mb-1">
                Your path forward
              </Body>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">Confirm scope</span>
              </div>
              <span className="text-white/60 text-sm">+ 30-min onboarding this week</span>
            </motion.div>
          </div>
        </Box>
      </div>
    </Slide>
  );
}
