"use client";

import { usePathname } from "next/navigation";
import Slide from "~/components/Slide";
import { Button } from "~/components/Button";
import Image from "next/image";
import { Heading, Body, Box, PageHeader } from "~/components/slide-components";
import * as LucideIcons from "lucide-react";
import { FileSignature } from "lucide-react";
import type { CTAReviewSOWSlideContent, IconName } from "../../types";

interface CTAReviewSOWSlideProps {
  content: CTAReviewSOWSlideContent;
  slideNumber: number;
}

function getIcon(name: IconName) {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className="text-primary h-6 w-6" /> : null;
}

function getLucideIcon(name: IconName): LucideIcons.LucideIcon | undefined {
  return LucideIcons[name] as LucideIcons.LucideIcon | undefined;
}

export default function CTAReviewSOWSlide({
  content,
  slideNumber,
}: CTAReviewSOWSlideProps) {
  const pathname = usePathname();
  const deckId = pathname?.replace("/", "") ?? "";

  const buttonText = content.reviewButton?.text ?? "Review Scope of Work";
  const buttonHref = content.reviewButton?.href ?? `/${deckId}/sow`;
  const buttonIcon = content.reviewButton?.icon
    ? getLucideIcon(content.reviewButton.icon)
    : FileSignature;

  return (
    <Slide showLogo={!content.hideFooter} slideNumber={slideNumber}>
      <div className="mx-auto flex h-full max-w-6xl items-center gap-20">
        {/* Left side - CTA text */}
        <div className="flex max-w-[640px] flex-col justify-center">
          <PageHeader
            label={content.label}
            title={content.title}
            subtitle={content.subtitle}
            align="left"
          />

          {/* Instructions + Button (one unit) */}
          <Box
            animation="slideUp"
            delay={0.4}
            hoverEffect="none"
            className="mb-4 rounded-2xl border border-neutral-700 bg-neutral-800/50 p-7"
          >
            {content.instructions && content.instructions.length > 0 && (
              <div className="mb-7 space-y-7">
                {content.instructions.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-primary/15 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <Heading
                        level="h3"
                        className="text-base font-semibold text-gray-300"
                      >
                        {step.title}
                      </Heading>
                      {step.description && (
                        <Body size="sm" className="text-gray-400">
                          {step.description}
                        </Body>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div data-pdf-link="review-sow">
              <Button
                as="a"
                href={buttonHref}
                size="lg"
                icon={buttonIcon}
                textColor={content.reviewButton?.textColor}
              >
                {buttonText}
              </Button>
            </div>
          </Box>

          {/* Profile + Contact (one unit) */}
          {(content.profile ??
            (content.contactItems && content.contactItems.length > 0 ? content.contactItems : null)) && (
            <Box
              animation="fade"
              delay={0.6}
              hoverEffect="none"
              className="flex items-center justify-between gap-6 rounded-2xl border border-neutral-700 bg-neutral-800/50 p-7"
            >
              {content.profile && (
                <div className="flex items-center gap-4">
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
                    <Heading
                      level="h3"
                      className="text-xl font-bold text-gray-300"
                    >
                      {content.profile.name}
                    </Heading>
                    <Body size="sm" className="text-gray-400">
                      {content.profile.title}
                    </Body>
                  </div>
                </div>
              )}

              {content.contactItems && content.contactItems.length > 0 && (
                <div className="flex flex-col gap-3">
                  {content.contactItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="hover:text-primary flex items-center gap-3 text-gray-300 transition-colors"
                    >
                      {getIcon(item.icon)}
                      <Body size="sm" as="span" className="hover:underline">
                        {item.text}
                      </Body>
                    </a>
                  ))}
                </div>
              )}
            </Box>
          )}
        </div>

        {/* Right side - Image */}
        {content.sideImage && (
          <Box
            animation="fade"
            delay={0.4}
            hoverEffect="highlight"
            className="relative z-10 ml-auto h-full max-w-2xl"
          >
            <Image
              src={content.sideImage}
              alt="Illustration"
              width={500}
              height={500}
              className="h-full rounded-2xl border border-neutral-700/25 object-cover shadow-xl"
            />
          </Box>
        )}
      </div>
    </Slide>
  );
}
