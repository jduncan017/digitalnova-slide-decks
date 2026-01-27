"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  role?: string;
  delay?: number;
  className?: string;
}

export default function Testimonial({
  quote,
  name,
  role,
  delay = 0,
  className = "",
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`flex items-start gap-3 ${className}`}
    >
      <Quote className="h-5 w-5 shrink-0 text-primary/60 mt-0.5" />
      <div>
        <p className="text-gray-400 italic leading-relaxed mb-2">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="text-gray-500 text-sm">
          — {name}{role && <span className="text-gray-600">, {role}</span>}
        </p>
      </div>
    </motion.div>
  );
}
