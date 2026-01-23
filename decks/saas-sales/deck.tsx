import HeroSlide from "./1_hero";
import TheProblemSlide from "./2_the-problem";
import WhyAdsFailSlide from "./3_why-ads-fail";
import IntegratedGrowthSystemSlide from "./4_integrated-growth-system";
import RoadmapSlide from "./5_90-day-roadmap";
import OnePartnerSlide from "./6_one-partner";
import OurWorkSlide from "./7_our-work";
import ServiceTiersSlide from "./6_service-tiers";
import HowWeKickOffSlide from "./9_how-we-kick-off";
import LetsBuildSlide from "./10_lets-build";

const slides = [
  <HeroSlide key="1" />,
  <TheProblemSlide key="2" slideNumber={2} />,
  <WhyAdsFailSlide key="3" slideNumber={3} />,
  <IntegratedGrowthSystemSlide key="4" slideNumber={4} />,
  <OnePartnerSlide key="5" slideNumber={5} />,
  <OurWorkSlide key="6" slideNumber={6} />,
  <RoadmapSlide key="7" slideNumber={7} />,
  <ServiceTiersSlide key="8" slideNumber={8} />,
  <HowWeKickOffSlide key="9" slideNumber={9} />,
  <LetsBuildSlide key="10" slideNumber={10} />,
];

export default slides;
