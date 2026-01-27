import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Label,
  Box,
  PageHeader,
} from "~/components/slide-components";
import { Check, ArrowRight } from "lucide-react";

export default function NextStepsSlide({ slideNumber }: { slideNumber: number }) {
  const steps = [
    {
      period: "TODAY",
      title: "Get Started",
      items: [
        "Confirm plan",
        "Sign contract",
        "Invoice for setup fee",
      ],
    },
    {
      period: "WEEK 1-2",
      title: "Build",
      items: [
        "30-min onboarding call",
        "Offer workshop + script",
        "CRM setup",
        "Funnel + landing page build",
        "You record raw video",
      ],
    },
    {
      period: "WEEK 3-4",
      title: "Launch",
      items: [
        "Video asset production",
        "You approve everything",
        "Ads go live",
        "First leads start coming in",
      ],
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center px-8m items-center">
        <PageHeader label="WHAT HAPPENS NEXT" title="YOUR GROWTH TIMELINE" />

        {/* Steps with arrows - using items-stretch for equal height */}
        <div className="flex items-stretch justify-center gap-0 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-stretch">
              {/* Step card */}
              <Box
                animation="slideUp"
                delay={0.3 + index * 0.15}
                variant={index === 0 ? "highlight" : "gradient"}
                className="w-[300px] rounded-2xl p-6 flex flex-col"
              >
                {/* Title and badge */}
                <div className="mb-5 text-center">
                  <Label className="mb-2 text-primary">{step.period}</Label>
                  <Heading level="h4" className="text-white">
                    {step.title}
                  </Heading>
                </div>

                {/* Items */}
                <ul className="space-y-2 flex-1">
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

              {/* Arrow between cards (not after last) - vertically centered */}
              {index < steps.length - 1 && (
                <div className="flex items-center px-3">
                  <Box
                    animation="fade"
                    delay={0.5 + index * 0.15}
                    hoverEffect="none"
                  >
                    <ArrowRight className="h-8 w-8 text-primary/60" />
                  </Box>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Retainer callout - full width, merged with timeline note */}
        <Box
          animation="fade"
          delay={0.9}
          variant="gradient"
          className="w-full text-center py-5 px-8 max-w-[1000px]"
        >
          <Body size="base" className="text-gray-300 mb-2">
            <span className="text-primary font-semibold">Your retainer doesn&apos;t start until ads launch.</span>
            {" "}You only pay the setup fee during the build phase.
          </Body>
          <Body size="sm" className="text-gray-500 italic">
            Most clients see their first qualified demos within 30 days of launch.
          </Body>
        </Box>
      </div>
    </Slide>
  );
}
