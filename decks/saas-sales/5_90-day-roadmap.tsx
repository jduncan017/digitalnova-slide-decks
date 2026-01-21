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
      month: "MONTH 1",
      title: "Strategy & Foundation",
      items: [
        "Competitive analysis",
        "ICP refinement",
        "Offer positioning",
        "Messaging framework",
      ],
    },
    {
      month: "MONTH 2",
      title: "Website & Systems",
      items: [
        "High-converting landing pages",
        "Demo funnel optimization",
        "SEO foundation",
        "CRM integration",
      ],
    },
    {
      month: "MONTH 3",
      title: "Launch & Optimize",
      items: [
        "Google Ads campaign setup",
        "Keyword research & targeting",
        "Ad creative & landing pages",
        "Conversion tracking",
      ],
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center px-16">
        <PageHeader label="HOW IT WORKS" title="YOUR 90-DAY ROADMAP" />

        {/* Timeline with 3 boxes */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-10 h-0.25 bg-slate-700">
            <div className="h-full w-full bg-primary/30"></div>
          </div>

          {/* Timeline boxes */}
          <Grid cols={3} gap={8} className="relative" animation="none">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Dot on timeline */}
                <Box animation="scale" delay={0.3 + index * 0.15} hoverEffect="none" className="mb-8 flex justify-center">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-6 border-neutral-950 bg-primary">
                    <span className="text-2xl font-bold text-slate-900">
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
                  <Label className="mb-2 text-primary">{phase.month}</Label>
                  <Heading level="h4" className="mb-6 text-xl font-bold text-white">
                    {phase.title}
                  </Heading>

                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-slate-300"
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
      </div>
    </Slide>
  );
}
