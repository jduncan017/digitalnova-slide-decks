import type { ReactElement } from "react";
import type { DeckDefinition, SlideDefinition } from "./deckSchema";
import {
  HeroSlide,
  ProblemSlide,
  SuccessFactorsSlide,
  OpportunitySlide,
  DeliverablesSlide,
  PillarsSlide,
  PortfolioSlide,
  PricingSlide,
  PricingWithAddonsSlide,
  TimelineSlide,
  CTASlide,
  GrowthEngineSlide,
  BeforeAfterSlide,
  ProcessFlowSlide,
  ComparisonSlide,
  ValueStackSlide,
  ROISlide,
  ProjectionsSlide,
} from "~/templates";

interface DeckMeta {
  title: string;
  preparedFor?: string;
}

/**
 * Renders a single slide based on its type
 */
function renderSlide(slide: SlideDefinition, index: number, meta: DeckMeta): ReactElement {
  const slideNumber = index + 1;

  switch (slide.type) {
    case "hero":
      return <HeroSlide key={`slide-${index}`} content={slide.content} />;
    case "problem":
      return <ProblemSlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "successFactors":
      return <SuccessFactorsSlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "opportunity":
      return <OpportunitySlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "deliverables":
      return <DeliverablesSlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "pillars":
      return <PillarsSlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "portfolio":
      return <PortfolioSlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "pricing":
      return <PricingSlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "pricingWithAddons":
      return <PricingWithAddonsSlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "timeline":
      return <TimelineSlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "cta":
      return <CTASlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} deckTitle={meta.title} preparedFor={meta.preparedFor} />;
    case "growthEngine":
      return <GrowthEngineSlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "beforeAfter":
      return <BeforeAfterSlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "processFlow":
      return <ProcessFlowSlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "comparison":
      return <ComparisonSlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "valueStack":
      return <ValueStackSlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "roi":
      return <ROISlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    case "projections":
      return <ProjectionsSlide key={`slide-${index}`} content={slide.content} slideNumber={slideNumber} />;
    default:
      // TypeScript exhaustive check
      const _exhaustiveCheck: never = slide;
      throw new Error(`Unknown slide type: ${JSON.stringify(_exhaustiveCheck)}`);
  }
}

/**
 * Renders all slides from a deck definition
 */
export function renderDeck(deck: DeckDefinition): ReactElement[] {
  const meta: DeckMeta = {
    title: deck.meta.title,
    preparedFor: deck.meta.preparedFor,
  };
  return deck.slides.map((slide, index) => renderSlide(slide, index, meta));
}
