import Slide from "~/components/Slide";
import {
  Body,
  Box,
  Grid,
  PageHeader,
} from "~/components/slide-components";
import { CheckCircle } from "lucide-react";

export default function WhyAdsSucceedSlide({ slideNumber }: { slideNumber: number }) {
  const successFactors = [
    {
      factor: "Ads feed a real funnel",
      result: "Traffic converts because the destination is built to convert",
    },
    {
      factor: "Custom landing pages",
      result: "Messaging matches the ad, visitors take action",
    },
    {
      factor: "Full-stack tracking",
      result: "Every click, demo, and conversion is attributed",
    },
    {
      factor: "One team owns the outcome",
      result: "No finger-pointing — we're accountable end-to-end",
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label="OUR APPROACH"
          title="WHY ADS SUCCEED WITH US"
          subtitle="Paid acquisition works when the entire system is built to convert."
        />

        {/* Success factors */}
        <Grid cols={2} gap={8} animation="none" className="max-w-[1000px] mb-12">
          {successFactors.map((item, index) => (
            <Box
              key={index}
              animation="slideUp"
              delay={0.3 + index * 0.1}
              variant="gradient"
              className="flex items-center gap-4 p-6"
            >
              <CheckCircle className="h-7 w-7 shrink-0 text-primary" />
              <div className="flex flex-col gap-1">
                <Body size="base" className="text-white font-medium">{item.factor}</Body>
                <Body size="sm" className="text-gray-400">{item.result}</Body>
              </div>
            </Box>
          ))}
        </Grid>

        {/* Key differentiator */}
        <Box
          animation="fade"
          delay={0.8}
          variant="highlight"
          className="flex items-center gap-4 px-8 py-5"
        >
          <Body size="lg" className="text-white text-center">
            We don&apos;t just run ads. <span className="text-primary font-semibold">We build the system that makes them work.</span>
          </Body>
        </Box>
      </div>
    </Slide>
  );
}
