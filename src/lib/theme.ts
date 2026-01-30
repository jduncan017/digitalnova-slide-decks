// Theme type definition for per-deck customization

export interface DeckTheme {
  // Brand colors
  primary: string; // Accent color (buttons, highlights, icons)
  primaryLight: string; // Lighter variant for gradients

  // Backgrounds
  slideBg: {
    from: string; // Gradient start
    to: string; // Gradient end
  };
  outerBg: string; // Background outside the slide container

  // Neutrals (for boxes, cards, borders)
  neutral: {
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };

  // Grays (for text, subtle elements)
  gray: {
    300: string;
    400: string;
    500: string;
  };

  // Display mode - determines logo variant and other visual adjustments
  mode: "light" | "dark";

  // Client branding
  clientLogo?: string; // Path to client logo (replaces your logo on hero)
  clientName?: string; // Client name for personalization
}

// Default theme - Indigo palette
// Targets: General population
// Psychology: Innovation, trust, premium, professional
export const defaultTheme: DeckTheme = {
  primary: "#6366f1", // Indigo - innovative, trusted, modern
  primaryLight: "#a5b4fc", // Soft indigo for gradients

  slideBg: {
    from: "#09090b", // Near black with subtle cool tone
    to: "#18181b", // Zinc-900
  },
  outerBg: "#27272a", // Zinc-800

  neutral: {
    600: "#52525b", // Zinc-600
    700: "#3f3f46", // Zinc-700
    800: "#27272a", // Zinc-800
    900: "#18181b", // Zinc-900
    950: "#09090b", // Zinc-950
  },

  gray: {
    300: "#d4d4d8", // Zinc-300
    400: "#a1a1aa", // Zinc-400
    500: "#71717a", // Zinc-500
  },

  mode: "dark",

  clientLogo: "/logo.png",
  clientName: "DigitalNova Studio",
};

// Helper to create a theme with overrides
export function createTheme(overrides: Partial<DeckTheme>): DeckTheme {
  return {
    ...defaultTheme,
    ...overrides,
    slideBg: {
      ...defaultTheme.slideBg,
      ...(overrides.slideBg ?? {}),
    },
    neutral: {
      ...defaultTheme.neutral,
      ...(overrides.neutral ?? {}),
    },
    gray: {
      ...defaultTheme.gray,
      ...(overrides.gray ?? {}),
    },
    mode: overrides.mode ?? defaultTheme.mode,
  };
}
