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
      <div className="slide-content w-full h-full px-28 pt-20 pb-32 max-w-[1540px]">{children}</div>
      <div className="absolute z-0 bottom-4 w-full h-28 px-28 gap-8 flex items-center justify-between max-w-[1540px]">
      {showLogo && (
        <div className="logo">
          <Image src="/logo.png" alt="DigitalNova Logo" width={280} height={40} />
        </div>
      )}
      <div className="h-0.25 w-full bg-gray-500" />
      <p className="text-gray-500 text-body-xl">{slideNumber}</p>
      </div>
    </div>
  );
}
