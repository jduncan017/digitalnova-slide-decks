import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Label,
  Box,
  Grid,
  PageHeader,
} from "~/components/slide-components";
import { Check } from "lucide-react";

export default function RoadmapSlide({ slideNumber }: { slideNumber: number }) {
  const phases = [
    {
      period: "WEEK 1-2",
      title: "Foundation",
      items: [
        "Onboarding + discovery call",
        "Offer workshop",
        "Script + creative direction",
        "Funnel build + CRM setup",
      ],
    },
    {
      period: "WEEK 3-4",
      title: "Launch",
      items: [
        "Video asset production",
        "Ad campaign setup",
        "Landing page live",
        "Tracking configured",
      ],
    },
    {
      period: "MONTH 2+",
      title: "Optimize",
      items: [
        "Weekly performance reviews",
        "A/B testing",
        "Scale what works",
        "Ongoing refinements",
      ],
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center">
        <PageHeader label="HOW IT WORKS" title="YOUR GROWTH TIMELINE" />

        {/* Timeline with 3 boxes */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-10 h-0.5 bg-neutral-800">
            <div className="h-full w-1/3 bg-primary/50"></div>
          </div>

          {/* Timeline boxes */}
          <Grid cols={3} gap={8} className="relative" animation="none">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Dot on timeline */}
                <Box animation="scale" delay={0.3 + index * 0.15} hoverEffect="none" className="mb-8 flex justify-center">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-6 border-neutral-950 bg-primary">
                    <span className="text-2xl font-bold text-neutral-950">
                      {index + 1}
                    </span>
                  </div>
                </Box>

                {/* Card */}
                <Box
                  animation="slideUp"
                  delay={0.5 + index * 0.15}
                  variant="gradient"
                >
                  <Label className="mb-2 text-primary">{phase.period}</Label>
                  <Heading level="h4" className="mb-6 text-xl font-bold text-white">
                    {phase.title}
                  </Heading>

                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <Body size="sm" as="span">{item}</Body>
                      </li>
                    ))}
                  </ul>
                </Box>
              </div>
            ))}
          </Grid>
        </div>

        {/* Bottom quote */}
        <Box animation="fade" delay={1.0} hoverEffect="none" className="mt-10 text-center">
          <Body size="lg" className="text-gray-400 italic">
            Most clients see their first qualified demos within 30 days of launch.
          </Body>
        </Box>
      </div>
    </Slide>
  );
}
