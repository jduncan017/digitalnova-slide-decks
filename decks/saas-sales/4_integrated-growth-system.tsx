import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  Grid,
  PageHeader,
} from "~/components/slide-components";

export default function IntegratedGrowthSystemSlide({ slideNumber }: { slideNumber: number }) {
  const steps = [
    {
      number: "1",
      title: "Brand Strategy",
      description:
        "Position your SaaS to stand out and attract your Ideal Customer Profile (ICP).",
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Conversion Website",
      description:
        "Pages built specifically to turn visitors into qualified demos.",
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Paid Acquisition",
      description:
        "Google Ads campaigns that consistently deliver demos at predictable cost.",
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
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
