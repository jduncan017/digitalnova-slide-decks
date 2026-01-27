"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ShowcaseItem {
  id: string;
  leftImage: string;
  rightImage: string;
  leftAlt?: string;
  rightAlt?: string;
  leftLabel?: string;
  rightLabel?: string;
}

interface OverlappingShowcaseProps {
  items: ShowcaseItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  leftTitle?: string;
  rightTitle?: string;
  showArrows?: boolean;
  showDots?: boolean;
}

export default function OverlappingShowcase({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = "",
  leftTitle = "Brand Design",
  rightTitle = "Web Design",
  showArrows = true,
  showDots = false,
}: OverlappingShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Track which side is in front - defaults to "left", sticky on hover
  const [frontSide, setFrontSide] = useState<"left" | "right">("left");
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  // Auto-rotate through items
  useEffect(() => {
    if (!isAutoPlaying || items.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length, autoPlayInterval]);

  const handleHover = (side: "left" | "right") => {
    // Sticky hover: once you hover a side, it stays in front until the other is hovered
    setFrontSide(side);
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds of no interaction
    setTimeout(() => setIsAutoPlaying(autoPlay), 8000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(autoPlay), 8000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(autoPlay), 8000);
  };

  const currentItem = items[currentIndex];

  // Determine z-index based on which side is in front (sticky behavior)
  const leftZ = frontSide === "left" ? 20 : 10;
  const rightZ = frontSide === "right" ? 20 : 10;

  if (!currentItem) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Container for overlapping images */}
      <div className="relative h-[500px] w-full flex items-center justify-center">
        {/* Left arrow */}
        {showArrows && items.length > 1 && (
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-primary/20 text-gray-400 hover:text-gray-300 hover:bg-neutral-800 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {/* Right arrow */}
        {showArrows && items.length > 1 && (
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-primary/20 text-gray-400 hover:text-gray-300 hover:bg-neutral-800 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full"
          >
            {/* Left image (Brand) - positioned left, tilted slightly */}
            <motion.div
              className="absolute cursor-pointer"
              style={{
                left: "8%",
                top: "5%",
                width: "58%",
                height: "90%",
              }}
              animate={{
                zIndex: leftZ,
                scale: frontSide === "left" ? 1.02 : 1,
                rotate: frontSide === "left" ? 0 : -3,
                x: frontSide === "left" ? 10 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onMouseEnter={() => handleHover("left")}
            >
              <div className="relative w-full h-full rounded-md overflow-hidden shadow-2xl bg-neutral-900">
                <Image
                  src={currentItem.leftImage}
                  alt={currentItem.leftAlt ?? leftTitle}
                  fill
                  className="object-cover object-top border border-neutral-900"
                />
                {/* Label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-neutral-950 border-x border-b border-neutral-900 p-3">
                  <span className="text-sm uppercase tracking-wider text-white font-medium">
                    {currentItem.leftLabel ?? leftTitle}
                  </span>
                </div>
              </div>
              {/* Shadow effect */}
              <div
                className="absolute inset-0 rounded-xl -z-10"
                style={{
                  boxShadow: "20px 20px 40px rgba(0, 0, 0, 0.5)",
                }}
              />
            </motion.div>

            {/* Right image (Web) - positioned right, tilted slightly opposite */}
            <motion.div
              className="absolute cursor-pointer"
              style={{
                right: "8%",
                top: "0%",
                width: "58%",
                height: "90%",
              }}
              animate={{
                zIndex: rightZ,
                scale: frontSide === "right" ? 1.02 : 1,
                rotate: frontSide === "right" ? 0 : 3,
                x: frontSide === "right" ? -10 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onMouseEnter={() => handleHover("right")}
            >
              <div className="relative w-full h-full rounded-md overflow-hidden shadow-2xl bg-neutral-900">
                <Image
                  src={currentItem.rightImage}
                  alt={currentItem.rightAlt ?? rightTitle}
                  fill
                  className="object-cover object-top border border-neutral-900"
                />
                {/* Label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-neutral-950 border-x border-b border-neutral-900 p-3">
                  <span className="text-sm uppercase tracking-wider text-white font-medium">
                    {currentItem.rightLabel ?? rightTitle}
                  </span>
                </div>
              </div>
              {/* Shadow effect */}
              <div
                className="absolute inset-0 rounded-xl -z-10"
                style={{
                  boxShadow: "20px 20px 40px rgba(0, 0, 0, 0.5)",
                }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots navigation */}
      {showDots && items.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(autoPlay), 8000);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-gray-500/50 hover:bg-gray-400/70"
              }`}
              aria-label={`Go to example ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
