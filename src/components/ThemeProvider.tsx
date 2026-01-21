"use client";

import { createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { type DeckTheme, defaultTheme } from "~/lib/theme";

const ThemeContext = createContext<DeckTheme>(defaultTheme);

export function useTheme() {
  return useContext(ThemeContext);
}

interface ThemeProviderProps {
  theme: DeckTheme;
  children: ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  // Set CSS variables directly using --color-* names that Tailwind uses
  const cssVars: CSSProperties & Record<string, string> = {
    // Primary colors
    "--color-primary": theme.primary,
    "--color-primary-light": theme.primaryLight,

    // Slide background gradient
    "--color-slide-bg-from": theme.slideBg.from,
    "--color-slide-bg-to": theme.slideBg.to,
    "--color-outer-bg": theme.outerBg,

    // Neutrals
    "--color-neutral-600": theme.neutral[600],
    "--color-neutral-700": theme.neutral[700],
    "--color-neutral-800": theme.neutral[800],
    "--color-neutral-900": theme.neutral[900],
    "--color-neutral-950": theme.neutral[950],

    // Grays
    "--color-gray-300": theme.gray[300],
    "--color-gray-400": theme.gray[400],
    "--color-gray-500": theme.gray[500],
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={cssVars} className="h-full w-full">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
