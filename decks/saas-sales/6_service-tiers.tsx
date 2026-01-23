import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  Grid,
  PageHeader,
} from "~/components/slide-components";
import { Check } from "lucide-react";

export default function ServiceTiersSlide({ slideNumber }: { slideNumber: number }) {
  const tiers = [
    {
      title: "PAID ACQUISITION",
      subtitle: "You've got a solid brand and website. You just need leads.",
      price: "$2,500 Setup",
      monthly: "+ $1,500/mo",
      features: [
        "Ad campaigns (Meta or Google)",
        "Landing page/funnel",
        "CRM integration",
        "Weekly reports",
        "A/B testing",
      ],
    },
    {
      title: "GROWTH SYSTEM",
      subtitle: "You need a conversion-focused website AND a lead engine.",
      price: "$5,000 Setup",
      monthly: "+ $1,500/mo",
      features: [
        "Everything in Paid Acquisition",
        "Website (5 pages)",
        "SEO foundation",
        "Full funnel build",
      ],
    },
    {
      title: "COMPLETE REBRAND",
      subtitle: "You're starting fresh or your brand isn't working. We rebuild everything.",
      price: "$6,500 Setup",
      monthly: "+ $1,500/mo",
      features: [
        "Everything in Growth System",
        "Brand strategy",
        "Logo design",
        "Brand guidelines",
        "Messaging framework",
      ],
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader label="CHOOSE YOUR GROWTH PATH" title="SERVICE TIERS" />

        {/* Pricing cards */}
        <Grid cols={3} gap={4} className="max-w-[1280px]" animation="none">
          {tiers.map((tier, index) => (
            <Box
              key={index}
              animation="slideUp"
              delay={0.4 + index * 0.15}
              variant="gradient"
              className="flex h-full flex-col rounded-2xl p-8"
            >
              <Heading level="h3" className="mb-2 text-xl font-bold text-white">
                {tier.title}
              </Heading>
              <Body size="sm" className="mb-4 min-h-14 text-gray-400">
                {tier.subtitle}
              </Body>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary">
                    {tier.price}
                  </span>
                </div>
                {tier.monthly && (
                  <div className="mt-1 text-lg text-primary/80 italic">{tier.monthly}</div>
                )}
              </div>

              <ul className="flex-1 space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <Body size="sm" as="span">{feature}</Body>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Grid>
      </div>
    </Slide>
  );
}
