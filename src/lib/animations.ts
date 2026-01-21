import type { Transition } from "framer-motion";

// Shared fast transition for hover effects
const hoverTransition: Transition = {
  duration: 0.15,
  ease: "easeOut",
};

// Hover animation for containers with backgrounds/borders
// Lifts up and increases brightness
export const containerHover = {
  whileHover: {
    y: -8,
    filter: "brightness(1.2)",
  },
  transition: hoverTransition,
};

// Hover animation for text elements
// Only increases brightness, no lift
export const textHover = {
  whileHover: {
    filter: "brightness(1.2)",
  },
  transition: hoverTransition,
};

// Base filter style to enable smooth transitions
export const baseFilter = {
  filter: "brightness(1)",
};
