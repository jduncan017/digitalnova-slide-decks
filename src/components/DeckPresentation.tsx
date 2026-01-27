"use client";

import { useState, useEffect, useCallback, type ReactElement } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight, Monitor } from "lucide-react";

interface DeckPresentationProps {
  slides: ReactElement[];
  deckId: string;
}

export default function DeckPresentation({ slides }: DeckPresentationProps) {
  const [isDesktop, setIsDesktop] = useState(true);

  // Check viewport width
  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);
  const searchParams = useSearchParams();
  const initialSlide = Math.max(0, Math.min(slides.length - 1, parseInt(searchParams.get("slide") ?? "1", 10) - 1));

  const [currentSlide, setCurrentSlide] = useState(initialSlide);
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

  // Desktop-only message for small viewports
  if (!isDesktop) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-outer-bg px-8 text-center">
        <div className="mb-6 rounded-2xl bg-white/10 p-4">
          <Monitor className="h-12 w-12 text-white/60" />
        </div>
        <h1 className="mb-3 text-2xl font-bold text-white">Desktop Only</h1>
        <p className="max-w-md text-white/60">
          This presentation is optimized for desktop viewing. Please open on a device with a screen width of at least 1200px for the best experience.
        </p>
      </div>
    );
  }

  return (
    <div
      {...swipeHandlers}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-outer-bg"
    >
      {/* 16:9 Slide Container */}
      <div className="relative shadow-2xl h-full max-h-[min(56.25vw,900px)] border border-neutral-700 w-full max-w-[min(177.78vh,1600px)] bg-linear-to-b from-slide-bg-from to-slide-bg-to">
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
            {slides[currentSlide]}
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
