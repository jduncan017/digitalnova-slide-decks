"use client";

import { useState, useEffect, useCallback, type ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import Slide from "./Slide";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DeckPresentationProps {
  slides: ReactElement[];
  deckId: string;
}

export default function DeckPresentation({ slides }: DeckPresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentSlide(index);
      }
    },
    [totalSlides],
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, totalSlides, nextSlide, prevSlide, goToSlide]);

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: false,
    trackTouch: true,
  });

  return (
    <div
      {...swipeHandlers}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-neutral-800"
    >
      {/* 16:9 Slide Container */}
      <div className="relative shadow-2xl h-full max-h-[56.25vw] border border-neutral-700 w-full max-w-[177.78vh] bg-linear-to-b from-neutral-950 to-neutral-900">
        {/* Slide content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            <Slide className="px-20 pt-20 pb-28">{slides[currentSlide]}</Slide>
          </motion.div>
        </AnimatePresence>

        {/* Bottom navigation area */}
        <div className="absolute -bottom-20 left-1/2 z-50 flex -translate-x-1/2 transform flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            {/* Previous arrow */}
            {currentSlide > 0 && (
              <button
                onClick={prevSlide}
                className="text-white/50 transition-colors hover:text-white"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Navigation dots */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-6 bg-white"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next arrow */}
            {currentSlide < totalSlides - 1 && (
              <button
                onClick={nextSlide}
                className="text-white/50 transition-colors hover:text-white"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Slide counter */}
          <div className="text-xs text-white/50">
            {currentSlide + 1} / {totalSlides}
          </div>
        </div>
      </div>
    </div>
  );
}
