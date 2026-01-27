"use client";

import Slide from "~/components/Slide";
import Image from "next/image";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import { Mail, Globe, Phone, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LetsBuildSlide({ slideNumber }: { slideNumber: number }) {
  const contactItems = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      text: "josh@digitalnovastudio.com",
      href: "mailto:josh@digitalnovastudio.com",
    },
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      text: "digitalnovastudio.com",
      href: "https://digitalnovastudio.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
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
            label="READY TO GROW?"
            title="LET'S BUILD YOUR GROWTH SYSTEM"
            align="left"
          />

          {/* CTA Button - prominent with animation */}
          <Box animation="slideUp" delay={0.4} hoverEffect="none" className="mb-16">
            <motion.a
              href="https://cal.com/digitalnovastudio/follow-up"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary/20 border border-primary-light hover:bg-black/10 cursor-pointer! text-primary-light font-semibold px-8 py-4 rounded-xl transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="h-5 w-5" />
              Schedule Your Follow-Up Call
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </Box>

          {/* Profile card */}
          <Box
            animation="fade"
            delay={0.5}
            variant="gradient"
            className="flex items-center gap-5 p-5 mb-8"
          >
            <div className="shrink-0">
              <Image
                src="/joshua-duncan.png"
                alt="Joshua Duncan"
                className="rounded-full ring-2 ring-primary/30"
                width={72}
                height={72}
              />
            </div>
            <div>
              <Heading level="h4" className="text-white mb-1">
                Josh Duncan
              </Heading>
              <Body size="sm" className="text-gray-400 mb-2">
                Founder, DigitalNova Studio
              </Body>
              <Body size="xs" className="text-primary">
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
                  className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
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
              src="/hero.jpg"
              alt="Growth"
              width={420}
              height={520}
              className="object-cover border h-full border-neutral-800 rounded-2xl shadow-2xl"
            />
            {/* Success overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -right-4 bg-neutral-900 border border-neutral-700 rounded-xl p-4 shadow-xl"
            >
              <Body size="xs" className="text-gray-500 uppercase tracking-wider mb-1">
                Average client result
              </Body>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-green-400">30 days</span>
                <span className="text-gray-400 text-sm">to first demo</span>
              </div>
            </motion.div>
          </div>
        </Box>
      </div>
    </Slide>
  );
}
