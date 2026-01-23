import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  Grid,
  PageHeader,
  Testimonial,
} from "~/components/slide-components";
import { Palette, Code, TrendingUp, Users } from "lucide-react";

export default function OnePartnerSlide({ slideNumber }: { slideNumber: number }) {
  const capabilities = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative",
      items: ["Brand strategy", "Visual design", "Ad creative"],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Technical",
      items: ["React/Next.js development", "CRM integrations", "Custom workflows"],
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Marketing",
      items: ["Meta & Google Ads", "Landing pages", "Attribution tracking"],
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label="WHY US"
          title="ONE PARTNER. FULL STACK."
        />

        {/* Capabilities grid */}
        <Grid cols={3} gap={6} animation="none" className="max-w-[1100px] mb-10">
          {capabilities.map((cap, index) => (
            <Box
              key={index}
              animation="slideUp"
              delay={0.3 + index * 0.15}
              variant="gradient"
              className="p-8 text-center"
            >
              <div className="mb-4 flex justify-center text-primary">
                {cap.icon}
              </div>
              <Heading level="h3" className="mb-4 text-lg font-bold text-white">
                {cap.title}
              </Heading>
              <ul className="space-y-2">
                {cap.items.map((item, i) => (
                  <li key={i}>
                    <Body size="sm" className="text-gray-400">{item}</Body>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Grid>

        {/* Key differentiator */}
        <Box
          animation="fade"
          delay={0.8}
          variant="gradient"
          className="flex items-center gap-6 px-10 py-6 max-w-[900px]"
        >
          <Users className="h-10 w-10 shrink-0 text-primary" />
          <div>
            <Heading level="h4" className="text-white mb-1">
              You work directly with me.
            </Heading>
            <Body size="base" className="text-gray-400">
              No junior account managers. No handoffs. One point of contact who understands your business end-to-end.
            </Body>
          </div>
        </Box>

        {/* Testimonial */}
        <Testimonial
          quote="Josh didn't just design a website — he built a complete brand experience... Within weeks of launch, we were already seeing an increase in inquiries and our Google ranking improved dramatically."
          name="Danielle L."
          role="Founder"
          delay={1.0}
          className="mt-8 max-w-[800px]"
        />
      </div>
    </Slide>
  );
}
