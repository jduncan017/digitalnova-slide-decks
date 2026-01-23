import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Label,
  Box,
  Grid,
  PageHeader,
  Testimonial,
} from "~/components/slide-components";
import { Check } from "lucide-react";

export default function HowWeKickOffSlide({ slideNumber }: { slideNumber: number }) {
  const steps = [
    {
      period: "TODAY",
      title: "Get Started",
      items: [
        "You confirm you want to move forward",
        "I send invoice for setup fee",
      ],
    },
    {
      period: "WEEK 1-2",
      title: "Build",
      items: [
        "30-min onboarding call",
        "Offer workshop",
        "Script + creative direction",
        "You record raw video",
        "I build funnel + landing page",
      ],
    },
    {
      period: "WEEK 3-4",
      title: "Launch",
      items: [
        "I edit video asset",
        "You approve everything",
        "Ads go live",
        "First leads start coming in",
      ],
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center px-16">
        <PageHeader label="WHAT HAPPENS NEXT" title="NEXT STEPS" />

        {/* Steps */}
        <Grid cols={3} gap={6} className="relative mb-8" animation="none">
          {steps.map((step, index) => (
            <Box
              key={index}
              animation="slideUp"
              delay={0.4 + index * 0.15}
              variant={index === 0 ? "highlight" : "gradient"}
              className="rounded-2xl p-6"
            >
              {/* Title and badge */}
              <div className="mb-5 text-center">
                <Label className="mb-2 text-primary">{step.period}</Label>
                <Heading level="h4" className="text-white">
                  {step.title}
                </Heading>
              </div>

              {/* Items */}
              <ul className="space-y-2">
                {step.items.map((item, itemIndex) => (
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
          ))}
        </Grid>

        {/* Bottom text */}
        <Box animation="fade" delay={0.9} hoverEffect="none" className="text-center mb-6">
          <Body size="base" className="text-gray-400">
            Once you approve, we typically launch within 3-4 weeks.
          </Body>
        </Box>

        {/* Testimonial */}
        <div className="flex justify-center">
          <Testimonial
            quote="Josh runs my Google ads with weekly reviews so that I can focus on my clients. 10 out of 10 would recommend."
            name="James M."
            delay={1.0}
          />
        </div>
      </div>
    </Slide>
  );
}
