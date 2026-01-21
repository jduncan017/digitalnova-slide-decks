import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Label,
  Box,
} from "~/components/slide-components";

export default function InvestmentBreakdownSlide({ slideNumber }: { slideNumber: number }) {
  const setupItems = [
    "Brand strategy & positioning",
    "Conversion-optimized website (5 pages)",
    "CRM integration & tracking setup",
    "Initial campaign strategy",
  ];

  const monthlyItems = [
    "Google Ads management & optimization",
    "Weekly performance reports & A/B testing",
    "Landing page & creative updates",
    "Monthly strategy calls",
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center px-16">
        {/* Header */}
        <Box animation="slideDown" delay={0.2} hoverEffect="highlight" className="mb-16">
          <Label className="mb-4 text-slate-500">YOUR INVESTMENT</Label>
          <Heading level="h1" className="text-primary">
            INVESTMENT BREAKDOWN
          </Heading>
        </Box>

        {/* 2-column layout */}
        <div className="flex items-center justify-center gap-12">
          {/* Left card - Setup */}
          <Box
            animation="slideRight"
            delay={0.4}
            className="flex-1 rounded-2xl bg-slate-800 p-10"
          >
            <div className="mb-6 text-center">
              <Label className="mb-2 text-slate-400">ONE-TIME SETUP</Label>
              <div className="text-5xl font-bold text-primary">$5,000</div>
            </div>

            <div className="space-y-4">
              {setupItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-6 w-6 shrink-0 text-primary"
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
                  <Body size="sm" className="text-slate-300">
                    {item}
                  </Body>
                </div>
              ))}
            </div>

            <Box hoverEffect="none" className="mt-8 rounded-xl bg-slate-700/50 p-4">
              <Body size="xs" className="text-slate-400">
                <span className="font-semibold text-white">
                  Payment: $1,000 deposit
                </span>{" "}
                + $4,000 at website launch
              </Body>
            </Box>
          </Box>

          {/* Plus sign */}
          <div className="text-6xl font-bold text-slate-600">+</div>

          {/* Right card - Monthly */}
          <Box
            animation="slideLeft"
            delay={0.5}
            className="relative flex-1 rounded-2xl border-2 border-primary bg-slate-800 p-10"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-primary px-4 py-1 text-sm font-bold text-slate-900">
                Recommended
              </span>
            </div>

            <div className="mb-6 text-center">
              <Label className="mb-2 text-slate-400">MONTHLY RETAINER</Label>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-primary">$1,500</span>
                <span className="text-2xl text-slate-400">/mo</span>
              </div>
            </div>

            <div className="space-y-4">
              {monthlyItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-6 w-6 shrink-0 text-primary"
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
                  <Body size="sm" className="text-slate-300">
                    {item}
                  </Body>
                </div>
              ))}
            </div>

            <Box hoverEffect="none" className="mt-8 rounded-xl bg-slate-700/50 p-4">
              <Body size="xs" className="text-slate-400">
                <span className="font-semibold text-white">
                  3-month minimum commitment
                </span>
              </Body>
            </Box>
          </Box>
        </div>

        {/* Bottom CTA */}
        <Box
          animation="fade"
          delay={0.8}
          className="mt-12 flex items-center justify-center gap-4 rounded-2xl border border-primary/30 bg-slate-800/50 p-5"
        >
          <Body size="lg" className="font-bold text-primary">
            PAY 3 MONTHS UP FRONT: SAVE $1,500
          </Body>
        </Box>
      </div>
    </Slide>
  );
}
