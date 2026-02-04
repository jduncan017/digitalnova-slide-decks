import type { DeckTheme } from "./theme";
import type {
  HeroSlideContent,
  ProblemSlideContent,
  SuccessFactorsSlideContent,
  OpportunitySlideContent,
  DeliverablesSlideContent,
  PillarsSlideContent,
  PortfolioSlideContent,
  PricingSlideContent,
  PricingWithAddonsSlideContent,
  TimelineSlideContent,
  CTASlideContent,
  GrowthEngineSlideContent,
  BeforeAfterSlideContent,
  ProcessFlowSlideContent,
  ComparisonSlideContent,
  ValueStackSlideContent,
  ROISlideContent,
  ProjectionsSlideContent,
  ProjectionsInvSlideContent,
} from "~/templates/types";

// Union type for all possible slide definitions
export type SlideDefinition =
  | { type: "hero"; content: HeroSlideContent }
  | { type: "problem"; content: ProblemSlideContent }
  | { type: "successFactors"; content: SuccessFactorsSlideContent }
  | { type: "opportunity"; content: OpportunitySlideContent }
  | { type: "deliverables"; content: DeliverablesSlideContent }
  | { type: "pillars"; content: PillarsSlideContent }
  | { type: "portfolio"; content: PortfolioSlideContent }
  | { type: "pricing"; content: PricingSlideContent }
  | { type: "pricingWithAddons"; content: PricingWithAddonsSlideContent }
  | { type: "timeline"; content: TimelineSlideContent }
  | { type: "cta"; content: CTASlideContent }
  | { type: "growthEngine"; content: GrowthEngineSlideContent }
  | { type: "beforeAfter"; content: BeforeAfterSlideContent }
  | { type: "processFlow"; content: ProcessFlowSlideContent }
  | { type: "comparison"; content: ComparisonSlideContent }
  | { type: "valueStack"; content: ValueStackSlideContent }
  | { type: "roi"; content: ROISlideContent }
  | { type: "projections"; content: ProjectionsSlideContent }
  | { type: "projectionsInv"; content: ProjectionsInvSlideContent };

// Deck definition interface
export interface DeckDefinition {
  /** Unique identifier for the deck (matches folder name) */
  id: string;
  /** Metadata about the deck */
  meta: {
    /** Title of the deck */
    title: string;
    /** Who the deck was prepared for */
    preparedFor?: string;
  };
  /** Optional theme overrides */
  theme?: Partial<DeckTheme>;
  /** Array of slide definitions */
  slides: SlideDefinition[];
}
