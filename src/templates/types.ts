// Icon names that map to lucide-react icons
export type IconName =
  | "MousePointerClick"
  | "DollarSign"
  | "TrendingDown"
  | "TrendingUp"
  | "Calendar"
  | "UserX"
  | "Users"
  | "CheckCircle"
  | "Check"
  | "Lightbulb"
  | "Monitor"
  | "Mail"
  | "Globe"
  | "Phone"
  | "ArrowRight"
  | "Target"
  | "RefreshCw"
  | "FileText"
  | "BookOpen"
  | "Linkedin"
  | "Zap"
  | "Shield"
  | "Star"
  | "Heart"
  | "Clock"
  | "Settings"
  | "Award"
  | "Rocket"
  | "Brain"
  | "MessageSquare"
  | "BarChart"
  | "PieChart"
  | "LineChart"
  | "Database"
  | "Code"
  | "Layers"
  | "Layout"
  | "Briefcase"
  | "Building"
  | "CreditCard"
  | "Gift"
  | "Lock"
  | "Unlock"
  | "Search"
  | "Send"
  | "Share"
  | "Sparkles"
  | "ThumbsUp"
  | "Video"
  | "Wifi"
  | "Plus"
  | "ChevronRight"
  | "Home"
  | "Play"
  | "User"
  | "Filter";

// ============================================
// SLIDE CONTENT INTERFACES
// ============================================

/**
 * Hero Slide - Opening slide with client branding
 */
export interface HeroSlideContent {
  /** Main headline */
  title: string;
  /** Secondary headline */
  subtitle: string;
  /** Optional tagline (appears below subtitle) */
  tagline?: string;
  /** Path to hero image on the right side */
  heroImage?: string;
  /** Prepared for client name (optional, falls back to theme.clientName) */
  preparedFor?: string;
}

/**
 * Problem Slide - Highlights pain points
 */
export interface ProblemSlideContent {
  /** Section label (e.g., "SOUND FAMILIAR?") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** List of challenges with icons */
  challenges: {
    text: string;
    /** Optional subtext for additional context */
    subtext?: string;
    icon: IconName;
  }[];
  /** Optional side image */
  sideImage?: string;
  /** Optional stats overlay on the side image */
  statsOverlay?: {
    label: string;
    value: string;
    subtext?: string;
  };
}

/**
 * Success Factors Slide - Why the approach works
 */
export interface SuccessFactorsSlideContent {
  /** Section label (e.g., "OUR APPROACH") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** List of success factors */
  factors: {
    factor: string;
    result: string;
  }[];
  /** Key differentiator statement */
  differentiator?: {
    text: string;
    highlight: string;
  };
}

/**
 * Opportunity Slide - Flow of opportunities with callout
 */
export interface OpportunitySlideContent {
  /** Section label (e.g., "THE UPSIDE") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** Opportunity items shown in a flow */
  opportunities: {
    icon: IconName;
    factor: string;
    result: string;
  }[];
  /** Icon shown between cards (defaults to ArrowRight) */
  connectorIcon?: IconName;
  /** Key insight callout at bottom */
  callout?: {
    icon: IconName;
    title: string;
    subtitle: string;
  };
}

/**
 * Deliverables Slide - What will be built
 */
export interface DeliverablesSlideContent {
  /** Section label (e.g., "THE PLAN") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** Deliverable items with step numbers */
  deliverables: {
    number: string;
    title: string;
    icon: IconName;
    items: string[];
  }[];
  /** Optional implementation options */
  options?: {
    icon: IconName;
    title: string;
    description: string;
  }[];
}

/**
 * Pillars Slide - Core offerings or approach
 */
export interface PillarsSlideContent {
  /** Section label (e.g., "THE FULL STACK") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** List of pillars (3 recommended) */
  pillars: {
    title: string;
    description: string;
    icon: IconName;
  }[];
  /** Optional profile section */
  profile?: {
    image: string;
    name: string;
    title: string;
    description: string;
  };
  /** Optional testimonial */
  testimonial?: {
    quote: string;
    name: string;
    role?: string;
  };
}

/**
 * Portfolio Slide - Showcase work
 */
export interface PortfolioSlideContent {
  /** Section label (e.g., "PORTFOLIO") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** Portfolio items for overlapping showcase */
  items: {
    id: string;
    leftImage: string;
    rightImage: string;
    leftLabel?: string;
    rightLabel?: string;
  }[];
  /** Left side title for showcase */
  leftTitle?: string;
  /** Right side title for showcase */
  rightTitle?: string;
}

/**
 * Pricing Slide - Service tiers
 */
export interface PricingSlideContent {
  /** Section label (e.g., "CHOOSE YOUR PATH") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** Pricing tiers (up to 3 recommended) */
  tiers: {
    /** Unique identifier for selection tracking */
    id?: string;
    title: string;
    subtitle: string;
    price: string;
    priceLabel?: string;
    monthly?: string;
    features: string[];
    /** Mark this tier as recommended */
    recommended?: boolean;
    /** SOW deliverables to include when this tier is selected */
    sowDeliverables?: {
      title: string;
      description?: string;
      items?: string[];
    }[];
  }[];
  /** Optional icons to show between tiers (e.g., arrows to show flow) */
  connectorIcons?: IconName[];
  /** Optional add-ons section */
  addOns?: {
    required?: {
      /** Unique identifier for selection tracking */
      id?: string;
      name: string;
      price: string;
      description?: string;
      /** SOW deliverables to include when this add-on is selected */
      sowDeliverables?: {
        title: string;
        description?: string;
        items?: string[];
      }[];
    }[];
    optional?: {
      /** Unique identifier for selection tracking */
      id?: string;
      name: string;
      price: string;
      description?: string;
      /** SOW deliverables to include when this add-on is selected */
      sowDeliverables?: {
        title: string;
        description?: string;
        items?: string[];
      }[];
    }[];
  };
  /** Optional note at bottom */
  note?: string;
}

/**
 * Timeline Slide - Next steps / process
 */
export interface TimelineSlideContent {
  /** Section label (e.g., "WHAT HAPPENS NEXT") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** Alignment of header */
  headerAlign?: "center" | "left";
  /** Timeline steps (3 recommended for arrow layout, 4 for grid layout) */
  steps: {
    period: string;
    title: string;
    icon?: IconName;
    items: string[];
    /** Highlight this step */
    highlight?: boolean;
  }[];
  /** Layout style: arrow (3 steps with arrows) or grid (4 steps in row) */
  layout?: "arrow" | "grid";
  /** Optional note at the bottom */
  note?: {
    highlight: string;
    text: string;
    subtext?: string;
  };
}

/**
 * CTA Slide - Call to action / closing slide
 */
export interface CTASlideContent {
  /** Section label (e.g., "QUESTIONS?") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle / call to action text */
  subtitle?: string;
  /** CTA button */
  ctaButton?: {
    text: string;
    href: string;
    icon?: IconName;
    /** Override button text color (e.g., "text-black" for light primary colors) */
    textColor?: string;
  };
  /** Profile section */
  profile?: {
    image: string;
    name: string;
    title: string;
  };
  /** Contact items */
  contactItems?: {
    icon: IconName;
    text: string;
    href: string;
  }[];
  /** Optional side image */
  sideImage?: string;
}

/**
 * Growth Engine Slide - Detailed breakdown of strategy
 */
export interface GrowthEngineSlideContent {
  /** Section label (e.g., "THE DETAILS") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** Left panel content */
  leftPanel: {
    icon: IconName;
    title: string;
    sectionLabel: string;
    items: {
      icon: IconName;
      title: string;
      description: string;
    }[];
  };
  /** Right panel content */
  rightPanel: {
    icon: IconName;
    title: string;
    sectionLabel: string;
    items: {
      icon: IconName;
      title: string;
      description: string;
    }[];
  };
}

/**
 * Before/After Slide - Dramatic comparison of current vs future state
 */
export interface BeforeAfterSlideContent {
  /** Section label (e.g., "THE TRANSFORMATION") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** Before state (left panel, red) */
  before: {
    label: string;
    title: string;
    /** Word to highlight in red */
    highlight?: string;
    items: string[];
  };
  /** After state (right panel, primary color) */
  after: {
    label: string;
    title: string;
    /** Word to highlight in primary color */
    highlight?: string;
    items: string[];
  };
}

/**
 * Process Flow Slide - Vertical steps with connector line
 */
export interface ProcessFlowSlideContent {
  /** Section label (e.g., "THE SYSTEM") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** Process steps */
  steps: {
    icon: IconName;
    title: string;
    description: string;
  }[];
  /** Optional side image */
  sideImage?: string;
}

/**
 * Comparison Slide - Feature comparison matrix
 */
export interface ComparisonSlideContent {
  /** Section label (e.g., "THE COMPETITION") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** Column headers (competitors + you) */
  columns: {
    name: string;
    /** Highlight this column (usually your product) */
    highlighted?: boolean;
  }[];
  /** Feature rows */
  features: {
    feature: string;
    /** Boolean for each column - true = has feature */
    values: boolean[];
  }[];
  /** Optional footnote */
  footnote?: string;
}

/**
 * Value Stack Slide - Building up deliverables with totals
 */
export interface ValueStackSlideContent {
  /** Section label (e.g., "EVERYTHING INCLUDED") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** Stack items */
  items: {
    icon: IconName;
    text: string;
  }[];
  /** Totals section at bottom */
  totals?: {
    label: string;
    value: string;
  }[];
  /** Optional note */
  note?: string;
}

/**
 * ROI Slide - Show the math / risk reversal
 */
export interface ROISlideContent {
  /** Section label (e.g., "ZERO RISK") */
  label: string;
  /** Main title */
  title: string;
  /** Description with highlight */
  description: string;
  /** Word/phrase to highlight in primary color */
  highlight?: string;
  /** Benefit cards (2x2 grid) */
  benefits: {
    icon: IconName;
    title: string;
    description: string;
  }[];
  /** Big metric on the right */
  metric: {
    value: string;
    label: string;
    subtext?: string;
  };
}

/**
 * Pricing With Add-ons Slide - Base package with optional add-ons
 */
export interface PricingWithAddonsSlideContent {
  /** Section label (e.g., "INVESTMENT") */
  label: string;
  /** Main title */
  title: string;
  /** Base package */
  basePackage: {
    /** Unique identifier for selection tracking */
    id?: string;
    label: string;
    title: string;
    description: string;
    price: string;
    priceLabel: string;
    features: string[];
    /** SOW deliverables to include when this package is selected */
    sowDeliverables?: {
      title: string;
      description?: string;
      items?: string[];
    }[];
  };
  /** Optional add-ons section */
  addOns?: {
    /** Featured add-on (larger card) */
    featured?: {
      /** Unique identifier for selection tracking */
      id?: string;
      icon: IconName;
      title: string;
      subtitle: string;
      price: string;
      priceLabel: string;
      monthly?: string;
      features: string[];
      /** SOW deliverables to include when this add-on is selected */
      sowDeliverables?: {
        title: string;
        description?: string;
        items?: string[];
      }[];
    };
    /** Smaller add-on items */
    items?: {
      /** Unique identifier for selection tracking */
      id?: string;
      name: string;
      description: string;
      price: string;
      /** SOW deliverables to include when this add-on is selected */
      sowDeliverables?: {
        title: string;
        description?: string;
        items?: string[];
      }[];
    }[];
  };
  /** Footer note */
  note?: string;
}

/**
 * Projections Slide - Growth trajectory with scenario toggle
 */
export interface ProjectionsSlideContent {
  /** Section label (e.g., "THE TRAJECTORY") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** Scenario definitions */
  scenarios: {
    /** Unique identifier */
    id: string;
    /** Button label */
    label: string;
    /** Description shown when selected */
    description: string;
    /** Curve type: exponential, steady, recovery */
    curve: "exponential" | "steady" | "recovery";
    /** Mark as default selected */
    default?: boolean;
  }[];
  /** Phase markers on the timeline */
  phases: {
    /** Starting month for this phase */
    month: number;
    /** Phase label */
    label: string;
  }[];
  /** Total months to show on x-axis (default 6) */
  totalMonths?: number;
}

/**
 * Projections Inverted Slide - CPA/cost reduction trajectory (lower is better)
 */
export interface ProjectionsInvSlideContent {
  /** Section label (e.g., "REALISTIC EXPECTATIONS") */
  label: string;
  /** Main title */
  title: string;
  /** Subtitle description */
  subtitle?: string;
  /** Current value (e.g., current CPA of $250) */
  currentValue?: number;
  /** Target value (e.g., target CPA of $100) */
  targetValue?: number;
  /** Scenario definitions */
  scenarios: {
    /** Unique identifier */
    id: string;
    /** Button label */
    label: string;
    /** Description shown when selected */
    description: string;
    /** Curve type: exponential (fast drop), steady (linear), recovery (struggle then improve) */
    curve: "exponential" | "steady" | "recovery";
    /** Mark as default selected */
    default?: boolean;
  }[];
  /** Phase markers on the timeline */
  phases: {
    /** Starting month for this phase */
    month: number;
    /** Phase label */
    label: string;
  }[];
  /** Total months to show on x-axis (default 6) */
  totalMonths?: number;
}
