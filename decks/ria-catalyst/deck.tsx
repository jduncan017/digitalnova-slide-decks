import CoverSlide from "./1_hero";
import YourSituationSlide from "./2_the-problem";
import TheOpportunitySlide from "./3_why-ads-succeed";
import WhatIdBuildSlide from "./4_our-system";
import GrowthEngineSlide from "./5_growth-engine";
import InvestmentSlide from "./6_service-tiers";
import TimelineSlide from "./7_next-steps";
import NextStepsSlide from "./8_lets-build";

const slides = [
  <CoverSlide key="1" />,
  <YourSituationSlide key="2" slideNumber={2} />,
  <TheOpportunitySlide key="3" slideNumber={3} />,
  <WhatIdBuildSlide key="4" slideNumber={4} />,
  <GrowthEngineSlide key="5" slideNumber={5} />,
  <InvestmentSlide key="6" slideNumber={6} />,
  <TimelineSlide key="7" slideNumber={7} />,
  <NextStepsSlide key="8" slideNumber={8} />,
];

export default slides;
