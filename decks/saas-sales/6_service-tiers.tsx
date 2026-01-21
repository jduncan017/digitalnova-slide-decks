import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  Grid,
  PageHeader,
} from "~/components/slide-components";

export default function ServiceTiersSlide({ slideNumber }: { slideNumber: number }) {
  const tiers = [
    {
      title: "PAID ACQUISITION",
      subtitle: "For SaaS with existing website that needs qualified demos",
      price: "$1,500",
      period: "/mo",
      features: [
        "Ad campaigns",
        "Landing pages",
        "Weekly reports",
        "A/B testing",
        "Demo optimization",
      ],
      recommended: false,
    },
    {
      title: "GROWTH SYSTEM",
      subtitle: "For SaaS that needs marketing and demo pipeline",
      price: "$5,000 Setup",
      monthly: "+ $1,500/mo",
      features: [
        "Everything in Paid Acquisition",
        "Website (5 pages)",
        "SEO foundation",
        "CRM integration",
        "Site hosting",
      ],
      recommended: true,
    },
    {
      title: "COMPLETE REBRAND",
      subtitle:
        "For SaaS that needs complete brand + website + marketing transformation",
      price: "$6,500 Setup",
      monthly: "+ $1,500/mo",
      features: [
        "Everything in Growth System",
        "Brand strategy",
        "Logo design",
        "Brand guidelines",
        "Messaging framework",
      ],
      recommended: false,
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center px-16">
        <PageHeader label="CHOOSE YOUR GROWTH PATH" title="SERVICE TIERS" />

        {/* Pricing cards */}
        <Grid cols={3} gap={8} className="mb-8" animation="none">
          {tiers.map((tier, index) => (
            <Box
              key={index}
              animation="slideUp"
              delay={0.4 + index * 0.15}
              variant={tier.recommended ? "highlight" : "gradient"}
              className="relative flex h-full flex-col rounded-2xl p-8"
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-sm font-bold text-slate-900">
                    Recommended
                  </span>
                </div>
              )}

              <Heading level="h3" className="mb-2 text-xl font-bold text-white">
                {tier.title}
              </Heading>
              <Body size="sm" className="mb-6 min-h-16 text-slate-400">
                {tier.subtitle}
              </Body>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-slate-400">{tier.period}</span>
                  )}
                </div>
                {tier.monthly && (
                  <div className="mt-1 text-lg text-primary">{tier.monthly}</div>
                )}
              </div>

              <ul className="flex-1 space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-slate-300"
                  >
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <Body size="sm" as="span">{feature}</Body>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Grid>

        {/* Bottom note */}
        <Box
          animation="fade"
          delay={1}
          hoverEffect="highlight"
          className="flex items-center justify-center gap-3"
          variant="gradient"
        >
          <div className="shrink-0 text-primary">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <Body size="sm" className="text-slate-300">
            <span className="font-semibold">PAY QUARTERLY: Save $1,500 on setup</span>{" "}
            (applies to all tiers)
          </Body>
        </Box>
      </div>
    </Slide>
  );
}
