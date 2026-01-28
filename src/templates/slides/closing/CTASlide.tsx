"use client";

import Slide from "~/components/Slide";
import Image from "next/image";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import * as LucideIcons from "lucide-react";
import type { CTASlideContent, IconName } from "../../types";

interface CTASlideProps {
  content: CTASlideContent;
  slideNumber: number;
}

function getIcon(name: IconName) {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className="h-6 w-6 text-primary" /> : null;
}

function getButtonIcon(name: IconName) {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className="h-5 w-5" /> : null;
}

export default function CTASlide({ content, slideNumber }: CTASlideProps) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="h-full flex gap-20 items-center">
        {/* Left side - CTA text */}
        <div className="flex flex-col justify-center max-w-[640px]">
          <PageHeader
            label={content.label}
            title={content.title}
            subtitle={content.subtitle}
            align="left"
          />

          {/* CTA Button */}
          {content.ctaButton && (
            <Box animation="slideUp" delay={0.5} hoverEffect="none" className="mb-20">
              <a
                href={content.ctaButton.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-neutral-950 font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                {content.ctaButton.icon && getButtonIcon(content.ctaButton.icon)}
                {content.ctaButton.text}
              </a>
            </Box>
          )}

          {/* Profile */}
          {content.profile && (
            <Box animation="fade" delay={0.6} className="flex items-center gap-4 mb-8" hoverEffect="highlight">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-700">
                <Image
                  src={content.profile.image}
                  alt={content.profile.name}
                  className="rounded-full"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Heading level="h3" className="text-xl font-bold text-gray-300">
                  {content.profile.name}
                </Heading>
                <Body size="sm" className="text-gray-400">
                  {content.profile.title}
                </Body>
              </div>
            </Box>
          )}

          {/* Contact links */}
          {content.contactItems && content.contactItems.length > 0 && (
            <Box animation="slideUp" delay={0.4} className="space-y-5" hoverEffect="none">
              {content.contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors"
                >
                  {getIcon(item.icon)}
                  <Body size="lg" as="span" className="hover:underline">
                    {item.text}
                  </Body>
                </a>
              ))}
            </Box>
          )}
        </div>

        {/* Right side - Image */}
        {content.sideImage && (
          <Box
            animation="fade"
            delay={0.4}
            hoverEffect="highlight"
            className="relative h-full max-w-2xl ml-auto z-10"
          >
            <Image
              src={content.sideImage}
              alt="Illustration"
              width={500}
              height={500}
              className="h-full object-cover border border-neutral-800 rounded-2xl shadow-xl"
            />
          </Box>
        )}
      </div>
    </Slide>
  );
}
