import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  Grid,
  PageHeader,
  Testimonial,
} from "~/components/slide-components";
import { Lightbulb, Monitor, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function OurSystemSlide({ slideNumber }: { slideNumber: number }) {
  const pillars = [
    {
      title: "Brand Strategy",
      description: "Position your SaaS to stand out and attract your ICP.",
      icon: <Lightbulb className="h-10 w-10" />,
    },
    {
      title: "Conversion Website",
      description: "Pages built to turn visitors into qualified demos.",
      icon: <Monitor className="h-10 w-10" />,
    },
    {
      title: "Paid Acquisition",
      description: "Campaigns that deliver demos at predictable cost.",
      icon: <TrendingUp className="h-10 w-10" />,
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label="THE FULL STACK"
          title="ONE SYSTEM. ONE PARTNER."
          subtitle="Everything required for ads to succeed — handled end-to-end."
        />

        {/* 3-pillar grid */}
        <Grid cols={3} gap={6} animation="stagger" className="max-w-[1100px] mb-8">
          {pillars.map((pillar, index) => (
            <Box
              key={index}
              animation="slideUp"
              delay={0.3 + index * 0.12}
              variant="gradient"
              className="p-6 text-center"
            >
              <div className="mb-4 flex justify-center text-primary">
                {pillar.icon}
              </div>
              <Heading level="h3" className="mb-3 text-lg font-bold text-white">
                {pillar.title}
              </Heading>
              <Body size="sm" className="text-gray-400">
                {pillar.description}
              </Body>
            </Box>
          ))}
        </Grid>

        {/* Work with me differentiator - row matches width of 3-pillar grid */}
        <div className="flex gap-6 max-w-[1100px] w-full mb-6">
          {/* Headshot box */}
          <Box
            animation="fade"
            delay={0.7}
            variant="gradient"
            className="p-0! overflow-hidden shrink-0"
          >
            <Image
              src="/joshua-duncan.png"
              alt="Josh Duncan"
              width={100}
              height={100}
              className="object-cover h-full w-auto"
            />
          </Box>

          {/* You work directly with me box */}
          <Box
            animation="fade"
            delay={0.75}
            variant="highlight"
            className="flex-1 flex items-center px-8 py-5"
          >
            <div>
              <Heading level="h4" className="text-white mb-1">
                You work directly with me.
              </Heading>
              <Body size="sm" className="text-gray-400">
                No junior account managers. No handoffs. One point of contact who understands your business.
              </Body>
            </div>
          </Box>
        </div>

        {/* Testimonial */}
        <Testimonial
          quote="Josh didn't just design a website — he built a complete brand experience. Within weeks of launch, we were seeing an increase in inquiries."
          name="Danielle L."
          role="Founder"
          delay={0.9}
          className="max-w-[700px]"
        />
      </div>
    </Slide>
  );
}
