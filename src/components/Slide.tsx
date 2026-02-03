"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

type ChromeVariant = "standard" | "minimal" | "hero";

interface SlideProps {
  children: ReactNode;
  className?: string;
  showLogo?: boolean;
  slideNumber?: number;
  chromeVariant?: ChromeVariant;
}

export default function Slide({
  children,
  className = "",
  showLogo = true,
  slideNumber,
  chromeVariant = "standard",
}: SlideProps) {
  const theme = useTheme();
  const mode = theme.mode;
  const logoSrc = mode === "light" ? "/dn-logo-dark.png" : "/logo.png";
  const textColor = mode === "light" ? "text-slate-500" : "text-gray-500";
  const lineColor = mode === "light" ? "bg-slate-300" : "bg-gray-500";

  // Standard variant needs bottom padding for inline footer, minimal doesn't
  const contentPadding = chromeVariant === "minimal"
    ? "px-16 min-[1400px]:px-28 py-14 min-[1400px]:py-20"
    : "px-16 min-[1400px]:px-28 pt-14 min-[1400px]:pt-20 pb-24 min-[1400px]:pb-32";

  return (
    <div
      className={`flex h-full w-full items-center justify-center ${className}`}
    >
      {/* Responsive padding: minimal variant is centered, standard has footer space */}
      <div className={`slide-content w-full h-full ${contentPadding} max-w-[1540px]`}>{children}</div>

      {/* Standard chrome: logo left, line, number right - all at bottom */}
      {chromeVariant === "standard" && (
        <div className="absolute z-0 bottom-4 w-full h-20 min-[1400px]:h-28 px-16 min-[1400px]:px-28 gap-6 min-[1400px]:gap-8 flex items-center max-w-[1540px]">
          {showLogo && (
            <>
              <div className="logo shrink-0">
                <Image src={logoSrc} alt="DigitalNova Logo" width={220} height={31} className="min-[1400px]:w-[280px]" />
              </div>
              <div className={`h-px flex-1 ${lineColor}`} />
              <p className={`${textColor} text-body-xl shrink-0`}>{slideNumber}</p>
            </>
          )}
        </div>
      )}

      {/* Minimal chrome: logo bottom-left corner, number top-right, no line, no space reserved */}
      {chromeVariant === "minimal" && showLogo && (
        <>
          <div className="absolute z-0 bottom-6 left-8 min-[1400px]:bottom-8 min-[1400px]:left-10">
            <Image src={logoSrc} alt="DigitalNova Logo" width={160} height={23} className="min-[1400px]:w-[200px]" />
          </div>
          {slideNumber && (
            <p className={`absolute z-0 top-6 right-8 min-[1400px]:top-8 min-[1400px]:right-10 ${textColor} text-body-lg`}>
              {slideNumber}
            </p>
          )}
        </>
      )}

      {/* Hero chrome: logo left with line extending right, no page number */}
      {chromeVariant === "hero" && showLogo && (
        <div className="absolute z-0 bottom-0 left-0 right-0 h-28 pl-32 gap-8 flex items-center">
          <div className="logo shrink-0">
            <Image src={logoSrc} alt="DigitalNova Logo" width={200} height={40} />
          </div>
          <div className={`h-px flex-1 ${lineColor} opacity-30`} />
        </div>
      )}
    </div>
  );
}
