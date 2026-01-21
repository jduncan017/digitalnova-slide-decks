import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  Grid,
  PageHeader,
} from "~/components/slide-components";
import { Lightbulb, Monitor, TrendingUp } from "lucide-react";

export default function IntegratedGrowthSystemSlide({ slideNumber }: { slideNumber: number }) {
  const steps = [
    {
      number: "1",
      title: "Brand Strategy",
      description:
        "Position your SaaS to stand out and attract your Ideal Customer Profile (ICP).",
      icon: <Lightbulb className="h-12 w-12" />,
    },
    {
      number: "2",
      title: "Conversion Website",
      description:
        "Pages built specifically to turn visitors into qualified demos.",
      icon: <Monitor className="h-12 w-12" />,
    },
    {
      number: "3",
      title: "Paid Acquisition",
      description:
        "Google Ads campaigns that consistently deliver demos at predictable cost.",
      icon: <TrendingUp className="h-12 w-12" />,
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center">
        <PageHeader label="OUR APPROACH" title="THE INTEGRATED GROWTH SYSTEM" />

        {/* 3-column grid */}
        <Grid cols={3} gap={8} className="px-16" animation="stagger">
          {steps.map((step, index) => (
            <Box
              key={index}
              animation="slideUp"
              delay={0.4 + index * 0.15}
              variant="gradient"
              className="p-8 text-center"
            >
              {/* Icon at top */}
              <div className="mb-6 flex justify-center text-primary">
                {step.icon}
              </div>

              {/* Number badge */}
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-slate-900">
                  {step.number}
                </div>
              </div>

              {/* Title */}
              <Heading level="h3" className="mb-4 text-xl font-bold text-white">
                {step.title}
              </Heading>

              {/* Description */}
              <Body size="sm" className="text-slate-400">
                {step.description}
              </Body>
            </Box>
          ))}
        </Grid>

        {/* Bottom tagline */}
        <Box animation="fade" delay={1} hoverEffect="highlight" className="mt-12 text-center">
          <Body size="lg" className="font-semibold text-primary">
            One partner. One system. Predictable results.
          </Body>
        </Box>
      </div>
    </Slide>
  );
}
