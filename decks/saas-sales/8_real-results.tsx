import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Label,
  Box,
  Grid,
} from "~/components/slide-components";

export default function RealResultsSlide({ slideNumber }: { slideNumber: number }) {
  const monthOneMetrics = [
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      label: "Total Searches",
      value: "212",
      change: "+112%",
      positive: true,
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          />
        </svg>
      ),
      label: "Website Visits",
      value: "21",
      change: "+5%",
      positive: true,
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      label: "Profile Views",
      value: "586",
      change: "+47%",
      positive: true,
    },
  ];

  const benchmarks = [
    {
      title: "AVG. COST-PER-DEMO",
      value: "$150 - 300",
      subtitle: "Industry Standard",
      color: "border-slate-600",
    },
    {
      title: "OUR PROCESS TARGET",
      value: "<$200",
      subtitle: "Through optimized funnel",
      color: "border-purple-500",
    },
    {
      title: "TYPICAL IMPROVEMENT",
      value: "30-40%",
      subtitle: "Reduction within 90 days",
      color: "border-emerald-500",
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col">
        {/* Main content */}
        <div className="flex flex-1 items-center justify-center px-12 pt-20">
          <div className="w-full max-w-7xl">
            <Box animation="slideDown" delay={0.2}>
              <Label className="mb-3">PROOF</Label>
              <Heading level="h2" className="mb-12">
                REAL RESULTS: WHAT HAPPENS
                <br />
                WHEN IT&apos;S DONE RIGHT
              </Heading>
            </Box>

            {/* Month 1 Performance Section */}
            <Box animation="slideUp" delay={0.4} className="mb-10">
              <div className="mb-6 flex items-center gap-3">
                <svg
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <Heading level="h3">Month 1 Performance (Website Launch)</Heading>
              </div>

              <Box className="rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-slate-800/20 p-8">
                <Grid cols={3} gap={8} className="mb-6" animation="none">
                  {monthOneMetrics.map((metric, index) => (
                    <Box key={index} animation="fade" delay={0.5 + index * 0.1} className="text-center">
                      <div className="mb-3 flex justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700/50 text-slate-400">
                          {metric.icon}
                        </div>
                      </div>
                      <Body className="mb-2 text-slate-400">{metric.label}</Body>
                      <div className="mb-1 font-bold text-white">{metric.value}</div>
                      <div
                        className={`font-semibold ${
                          metric.positive ? "text-emerald-400" : "text-red-400"
                        }`}
                      >
                        {metric.change}
                      </div>
                    </Box>
                  ))}
                </Grid>

                <div className="border-t border-slate-700 pt-6">
                  <Body className="text-slate-400 italic">
                    &quot;This is just organic traffic from a new website. Now
                    imagine if we&apos;d been running paid ads to this traffic.&quot;
                  </Body>
                </div>
              </Box>
            </Box>

            {/* Industry Benchmarks Section */}
            <Box animation="slideUp" delay={0.6}>
              <div className="mb-6 flex items-center gap-3">
                <svg
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <Heading level="h3">Industry Benchmarks (SaaS)</Heading>
              </div>

              <Grid cols={3} gap={6} animation="none">
                {benchmarks.map((benchmark, index) => (
                  <Box
                    key={index}
                    animation="slideUp"
                    delay={0.7 + index * 0.1}
                    className={`border-l-4 bg-slate-800/30 ${benchmark.color} rounded-r-lg p-6`}
                  >
                    <Label className="mb-2 text-slate-400">{benchmark.title}</Label>
                    <div className="mb-1 font-bold text-white">{benchmark.value}</div>
                    <Body className="text-slate-400">{benchmark.subtitle}</Body>
                  </Box>
                ))}
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </Slide>
  );
}
