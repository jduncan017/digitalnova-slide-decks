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

export default function HowWeKickOffSlide({ slideNumber }: { slideNumber: number }) {
  const steps = [
    {
      number: "1.",
      title: "Deposit",
      badge: "$1,000 Deposit",
      items: [
        "Secure your project start date",
        "Full amount credited to your first invoice",
        "Triggers formal onboarding process",
        "Fully refundable before project kickoff"
      ],
    },
    {
      number: "2.",
      title: "Proposal",
      badge: "Within 48 Hours",
      items: [
        "Outline of exact scope & deliverables",
        "Clear payment schedule & milestones",
        "Documentation of custom requirements",
        "Contract delivered to be signed"
      ],
    },
    {
      number: "3.",
      title: "Project Kickoff",
      badge: "Within 1 Week",
      items: [
        "Deep-dive strategy workshop",
        "Technical account setups & access",
        "Content gathering & design kickoff",
        "We take it from there!"
      ],
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center px-16">
        <PageHeader label="NEXT STEPS" title="HOW WE KICK OFF" />

        {/* Steps with timeline */}
        <div className="relative">
          <Grid cols={3} gap={4} className="relative" animation="none">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <Box
                  animation="slideUp"
                  delay={0.5 + index * 0.15}
                  variant={index === 0 ? "highlight" : "gradient"}
                  className="rounded-2xl p-8"
                >
                  {/* Title and badge */}
                  <div className="mb-6 text-center">
                    <Heading level="h3" className="mb-2 text-white">
                      {step.title}
                    </Heading>
                    <div className="inline-block">
                      <Label className="rounded-full px-2 py-1 text-primary-light">
                        {step.badge}
                      </Label>
                    </div>
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
              </div>
            ))}
          </Grid>
        </div>
      </div>
    </Slide>
  );
}
