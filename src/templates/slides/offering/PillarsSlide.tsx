"use client";

import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  Grid,
  PageHeader,
  Testimonial,
} from "~/components/slide-components";
import * as LucideIcons from "lucide-react";
import Image from "next/image";
import type { PillarsSlideContent, IconName } from "../../types";

interface PillarsSlideProps {
  content: PillarsSlideContent;
  slideNumber: number;
}

function getIcon(name: IconName) {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className="h-10 w-10" /> : null;
}

export default function PillarsSlide({ content, slideNumber }: PillarsSlideProps) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label={content.label}
          title={content.title}
          subtitle={content.subtitle}
        />

        {/* Pillars grid */}
        <Grid cols={3} gap={6} animation="stagger" className="max-w-[1100px] mb-8">
          {content.pillars.map((pillar, index) => (
            <Box
              key={index}
              animation="slideUp"
              delay={0.3 + index * 0.12}
              variant="gradient"
              className="p-6 text-center"
            >
              <div className="mb-4 flex justify-center text-primary">
                {getIcon(pillar.icon)}
              </div>
              <Heading level="h3" className="mb-3 text-lg font-bold text-gray-300">
                {pillar.title}
              </Heading>
              <Body size="sm" className="text-gray-400">
                {pillar.description}
              </Body>
            </Box>
          ))}
        </Grid>

        {/* Profile section */}
        {content.profile && (
          <div className="flex gap-6 max-w-[1100px] w-full mb-6">
            {/* Headshot box */}
            <Box
              animation="fade"
              delay={0.7}
              variant="gradient"
              className="p-0! overflow-hidden shrink-0"
            >
              <Image
                src={content.profile.image}
                alt={content.profile.name}
                width={100}
                height={100}
                className="object-cover h-full w-auto"
              />
            </Box>

            {/* Profile info box */}
            <Box
              animation="fade"
              delay={0.75}
              variant="highlight"
              className="flex-1 flex items-center px-8 py-5"
            >
              <div>
                <Heading level="h4" className="text-gray-300 mb-1">
                  {content.profile.title}
                </Heading>
                <Body size="sm" className="text-gray-400">
                  {content.profile.description}
                </Body>
              </div>
            </Box>
          </div>
        )}

        {/* Testimonial */}
        {content.testimonial && (
          <Testimonial
            quote={content.testimonial.quote}
            name={content.testimonial.name}
            role={content.testimonial.role}
            delay={0.9}
            className="max-w-[700px]"
          />
        )}
      </div>
    </Slide>
  );
}
