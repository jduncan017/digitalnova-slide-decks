import HeroSlide from "./1_hero";
import TheProblemSlide from "./2_the-problem";
import WhyAdsSucceedSlide from "./3_why-ads-succeed";
import OurSystemSlide from "./4_our-system";
import OurWorkSlide from "./5_our-work";
import ServiceTiersSlide from "./6_service-tiers";
import NextStepsSlide from "./7_next-steps";
import LetsBuildSlide from "./8_lets-build";

const slides = [
  <HeroSlide key="1" />,
  <TheProblemSlide key="2" slideNumber={2} />,
  <WhyAdsSucceedSlide key="3" slideNumber={3} />,
  <OurSystemSlide key="4" slideNumber={4} />,
  <OurWorkSlide key="5" slideNumber={5} />,
  <ServiceTiersSlide key="6" slideNumber={6} />,
  <NextStepsSlide key="7" slideNumber={7} />,
  <LetsBuildSlide key="8" slideNumber={8} />,
];

export default slides;
