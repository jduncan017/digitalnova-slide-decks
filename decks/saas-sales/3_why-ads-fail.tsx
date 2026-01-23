import Slide from "~/components/Slide";
import {
  Body,
  Box,
  Grid,
  PageHeader,
} from "~/components/slide-components";
import { XCircle, ArrowRight, CheckCircle } from "lucide-react";

export default function WhyAdsFailSlide({ slideNumber }: { slideNumber: number }) {
  const failures = [
    {
      problem: "Ads run in isolation",
      result: "Traffic with nowhere to go",
    },
    {
      problem: "Generic landing pages",
      result: "Visitors bounce immediately",
    },
    {
      problem: "No tracking or attribution",
      result: "No idea what's working",
    },
    {
      problem: "Agency only does ads",
      result: "Finger-pointing when it fails",
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label="SOUND FAMILIAR?"
          title="WHY ADS FAIL"
          subtitle="You've tried paid ads before. Here's why they didn't work."
        />

        {/* Failure patterns */}
        <Grid cols={2} gap={8} animation="none" className="max-w-[1000px] mb-12">
          {failures.map((item, index) => (
            <Box
              key={index}
              animation="slideUp"
              delay={0.3 + index * 0.1}
              variant="gradient"
              className="flex items-center gap-4 p-6"
            >
              <XCircle className="h-7 w-7 shrink-0 text-red-400" />
              <div className="flex flex-col gap-1">
                <Body size="base" className="text-gray-300 font-medium">{item.problem}</Body>
                <Body size="sm" className="text-gray-500 italic">{item.result}</Body>
              </div>
            </Box>
          ))}
        </Grid>

        {/* The solution teaser */}
        <Box
          animation="fade"
          delay={0.8}
          variant="highlight"
          className="flex items-center gap-4 px-8 py-5"
        >
          <CheckCircle className="h-7 w-7 shrink-0 text-primary" />
          <Body size="lg" className="text-white">
            The solution? <span className="text-primary font-semibold">Build the full funnel.</span> Not just the ads.
          </Body>
        </Box>
      </div>
    </Slide>
  );
}
