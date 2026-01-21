"use client";

import { type ReactNode } from "react";
import Image from "next/image";

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
  return (
    <div
      className={`flex h-full w-full items-center justify-center ${className}`}
    >
      <div className="slide-content w-full h-full">{children}</div>
      <div className="absolute z-0 bottom-0 left-0 right-0 h-28 px-20 gap-8 flex items-center justify-between">
      {showLogo && (
        <div className="logo">
          <Image src="/icon-metal-light.png" alt="Logo" width={40} height={40} />
        </div>
      )}
      <div className="h-0.25 w-full bg-zinc-500" />
      <p className="text-neutral-500 text-body-xl">{slideNumber}</p>
      </div>
    </div>
  );
}
