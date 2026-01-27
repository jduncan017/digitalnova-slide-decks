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
  TimelineSlideContent,
  CTASlideContent,
  GrowthEngineSlideContent,
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
  | { type: "timeline"; content: TimelineSlideContent }
  | { type: "cta"; content: CTASlideContent }
  | { type: "growthEngine"; content: GrowthEngineSlideContent };

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
