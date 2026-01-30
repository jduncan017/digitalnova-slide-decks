"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

interface SlideProps {
  children: ReactNode;
  className?: string;
  showLogo?: boolean;
  slideNumber?: number;
}

export default function Slide({
  children,
  className = "",
  showLogo = true,
  slideNumber,
}: SlideProps) {
  const theme = useTheme();
  const mode = theme.mode;
  const logoSrc = mode === "light" ? "/dn-logo-dark.png" : "/logo.png";
  const textColor = mode === "light" ? "text-slate-500" : "text-gray-500";
  const lineColor = mode === "light" ? "bg-slate-300" : "bg-gray-500";

  return (
    <div
      className={`flex h-full w-full items-center justify-center ${className}`}
    >
      {/* Responsive padding: smaller for 1200-1400px, normal for 1400px+ */}
      <div className="slide-content w-full h-full px-16 min-[1400px]:px-28 pt-14 min-[1400px]:pt-20 pb-24 min-[1400px]:pb-32 max-w-[1540px]">{children}</div>
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
    </div>
  );
}
