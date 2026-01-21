import HeroSlide from "./1_hero";
import TheProblemSlide from "./2_the-problem";
import IntegratedGrowthSystemSlide from "./4_integrated-growth-system";
import RoadmapSlide from "./5_90-day-roadmap";
import ServiceTiersSlide from "./6_service-tiers";
import IncludedServicesSlide from "./7_included-services";
import HowWeKickOffSlide from "./11_how-we-kick-off";
import LetsBuildSlide from "./12_lets-build";

const slides = [
  <HeroSlide key="1" />,
  <TheProblemSlide key="2" slideNumber={2} />,
  <IntegratedGrowthSystemSlide key="3" slideNumber={3} />,
  <RoadmapSlide key="4" slideNumber={4} />,
  <ServiceTiersSlide key="5" slideNumber={5} />,
  <IncludedServicesSlide key="6" slideNumber={6} />,
  <HowWeKickOffSlide key="7" slideNumber={7} />,
  <LetsBuildSlide key="8" slideNumber={8} />,
];

export default slides;
