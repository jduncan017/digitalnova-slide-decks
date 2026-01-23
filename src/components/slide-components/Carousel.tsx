"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: string | number;
  content: ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
}

export default function Carousel({
  items,
  autoPlay = true,
  autoPlayInterval = 4000,
  className = "",
  showDots = true,
  showArrows = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  // Auto-rotate
  useEffect(() => {
    if (!isAutoPlaying || items.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(autoPlay), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + items.length) % items.length);
  };

  // Calculate position for each card relative to current index
  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;

    // Normalize diff to handle wrapping (-1, 0, 1 for visible cards)
    let normalizedDiff = diff;
    if (diff > items.length / 2) normalizedDiff = diff - items.length;
    if (diff < -items.length / 2) normalizedDiff = diff + items.length;

    const isCenter = normalizedDiff === 0;
    const isLeft = normalizedDiff === -1 || (normalizedDiff === items.length - 1);
    const isRight = normalizedDiff === 1 || (normalizedDiff === -(items.length - 1));
    const isVisible = isCenter || isLeft || isRight;

    if (!isVisible) {
      return {
        opacity: 0,
        scale: 0.7,
        x: normalizedDiff > 0 ? 300 : -300,
        zIndex: 0,
        rotateY: 0,
      };
    }

    if (isCenter) {
      return {
        opacity: 1,
        scale: 1,
        x: 0,
        zIndex: 30,
        rotateY: 0,
      };
    }

    if (isLeft) {
      return {
        opacity: 0.7,
        scale: 0.85,
        x: -180,
        zIndex: 20,
        rotateY: 15,
      };
    }

    // isRight
    return {
      opacity: 0.7,
      scale: 0.85,
      x: 180,
      zIndex: 20,
      rotateY: -15,
    };
  };

  return (
    <div className={`relative ${className}`}>
      {/* Carousel container with perspective */}
      <div
        className="relative h-[350px] flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {/* Cards */}
        <div className="relative w-[500px] h-full">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => {
              const style = getCardStyle(index);

              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{
                    opacity: style.opacity,
                    scale: style.scale,
                    x: style.x,
                    rotateY: style.rotateY,
                    zIndex: style.zIndex,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="absolute inset-0 cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    zIndex: style.zIndex,
                  }}
                  onClick={() => {
                    if (index !== currentIndex) {
                      goToSlide(index);
                    }
                  }}
                >
                  {item.content}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        {showArrows && items.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 text-white/70 hover:text-white hover:bg-neutral-800 transition-colors z-40"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 text-white/70 hover:text-white hover:bg-neutral-800 transition-colors z-40"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Dots navigation */}
      {showDots && items.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
