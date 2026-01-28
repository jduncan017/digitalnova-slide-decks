"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  /** Custom logo source - defaults to Digital Nova logo */
  src?: string;
  /** Alt text for the logo */
  alt?: string;
  className?: string;
  animation?: "fade" | "slideDown" | "none";
  delay?: number;
  height?: number;
}

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  none: {
    initial: {},
    animate: {},
  },
};

export default function Logo({
  src = "/logo.png",
  alt = "Logo",
  className = "",
  animation = "fade",
  delay = 0,
  height = 64,
}: LogoProps) {
  const animationVariant = animations[animation];

  return (
    <motion.div
      initial={animationVariant.initial}
      animate={animationVariant.animate}
      transition={{ duration: 0.6, delay }}
      className={`flex items-center gap-2 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={height * 4}
        height={height}
        className="object-contain"
      />
    </motion.div>
  );
}
