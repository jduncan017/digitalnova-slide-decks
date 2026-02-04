"use client";

import { useState } from "react";
import Slide from "~/components/Slide";
import { Body, Box, PageHeader } from "~/components/slide-components";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectionsInvSlideContent } from "../../types";

interface ProjectionsInvSlideProps {
  content: ProjectionsInvSlideContent;
  slideNumber: number;
}

// Generate curve points for CPA reduction
// Returns CPA values that decrease from ~currentCPA to ~targetCPA
// Each scenario reaches target at different months, then levels off just below
function generateCurvePoints(
  type: "exponential" | "steady" | "recovery",
  totalMonths: number,
  currentCPA: number,
  targetCPA: number,
): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = [];
  const steps = 50;
  const cpaRange = currentCPA - targetCPA; // e.g., 250 - 100 = 150
  const finalCPA = targetCPA * 0.95; // End just below target (~$95)

  // Define when each scenario hits target (as fraction of totalMonths)
  // Accelerate: Month 2, Optimize: Month 3, Pivot: Month 4
  const targetMonth: Record<typeof type, number> = {
    exponential: 2, // Accelerate hits target at month 2
    steady: 3,      // Optimize hits target at month 3
    recovery: 4,    // Pivot hits target at month 4
  };

  const hitTargetAt = targetMonth[type] / totalMonths;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = t * totalMonths;
    let y: number;

    switch (type) {
      case "exponential": {
        // Fast initial drop, hits target at month 2, then levels off
        if (t <= hitTargetAt) {
          // Aggressive curve down to target
          const progress = t / hitTargetAt;
          const easedProgress = 1 - Math.pow(1 - progress, 2); // Ease out
          y = currentCPA - easedProgress * cpaRange;
        } else {
          // Gentle decline below target
          const postProgress = (t - hitTargetAt) / (1 - hitTargetAt);
          y = targetCPA - postProgress * (targetCPA - finalCPA);
        }
        break;
      }
      case "steady": {
        // Linear reduction, hits target at month 3, then levels off
        if (t <= hitTargetAt) {
          const progress = t / hitTargetAt;
          y = currentCPA - progress * cpaRange;
        } else {
          // Gentle decline below target
          const postProgress = (t - hitTargetAt) / (1 - hitTargetAt);
          y = targetCPA - postProgress * (targetCPA - finalCPA);
        }
        break;
      }
      case "recovery": {
        // Initial struggle (CPA goes up), then drops to target at month 4
        const struggleEnd = 0.2; // First 20% of time = struggle phase
        const peakCPA = currentCPA * 1.1; // CPA goes 10% higher initially

        if (t <= struggleEnd) {
          // CPA increases during struggle
          const struggleProgress = t / struggleEnd;
          y = currentCPA + struggleProgress * (peakCPA - currentCPA);
        } else if (t <= hitTargetAt) {
          // Recovery phase - drop from peak to target
          const recoveryProgress = (t - struggleEnd) / (hitTargetAt - struggleEnd);
          const easedProgress = 1 - Math.pow(1 - recoveryProgress, 1.5);
          y = peakCPA - easedProgress * (peakCPA - targetCPA);
        } else {
          // Post-target: gentle decline below target
          const postProgress = (t - hitTargetAt) / (1 - hitTargetAt);
          y = targetCPA - postProgress * (targetCPA - finalCPA);
        }
        break;
      }
    }

    points.push({ x, y });
  }

  return points;
}

// Convert CPA points to SVG path
// Standard Y-axis: higher values at top, lower at bottom
function pointsToPath(
  points: { x: number; y: number }[],
  width: number,
  height: number,
  totalMonths: number,
  padding: number,
  maxCPA: number,
): string {
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;

  const pathPoints = points.map((p) => ({
    x: padding + (p.x / totalMonths) * graphWidth,
    // Standard Y-axis: high CPA at top (small y), low CPA at bottom (large y)
    y: padding + graphHeight * (1 - p.y / maxCPA),
  }));

  return pathPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
}

// Convert points to SVG area path (for fill under the curve)
function pointsToAreaPath(
  points: { x: number; y: number }[],
  width: number,
  height: number,
  totalMonths: number,
  padding: number,
  maxCPA: number,
): string {
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;

  const pathPoints = points.map((p) => ({
    x: padding + (p.x / totalMonths) * graphWidth,
    y: padding + graphHeight * (1 - p.y / maxCPA),
  }));

  const linePath = pathPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  // Fill from line DOWN to bottom
  const bottomRight = `L ${pathPoints[pathPoints.length - 1]!.x} ${padding + graphHeight}`;
  const bottomLeft = `L ${padding} ${padding + graphHeight}`;
  const closePath = "Z";

  return `${linePath} ${bottomRight} ${bottomLeft} ${closePath}`;
}

export default function ProjectionsInvSlide({
  content,
  slideNumber,
}: ProjectionsInvSlideProps) {
  const totalMonths = content.totalMonths ?? 6;
  const defaultScenario =
    content.scenarios.find((s) => s.default) ?? content.scenarios[0]!;
  const [activeScenario, setActiveScenario] = useState(defaultScenario.id);

  const currentScenario =
    content.scenarios.find((s) => s.id === activeScenario) ?? defaultScenario;

  // SVG dimensions
  const width = 900;
  const height = 400;
  const padding = 60;

  // CPA values
  const currentCPA = content.currentValue ?? 250;
  const targetCPA = content.targetValue ?? 100;
  const maxCPA = Math.ceil(currentCPA * 1.2 / 50) * 50; // Round up to nearest 50 with 20% headroom

  const points = generateCurvePoints(
    currentScenario.curve,
    totalMonths,
    currentCPA,
    targetCPA,
  );
  const linePath = pointsToPath(points, width, height, totalMonths, padding, maxCPA);
  const areaPath = pointsToAreaPath(points, width, height, totalMonths, padding, maxCPA);

  // Calculate positions
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;

  // Y positions for reference lines (standard axis: high values at top)
  const currentCPAY = padding + graphHeight * (1 - currentCPA / maxCPA);
  const targetCPAY = padding + graphHeight * (1 - targetCPA / maxCPA);

  return (
    <Slide showLogo slideNumber={slideNumber} chromeVariant="minimal">
      <div className="flex h-full flex-col justify-center">
        <PageHeader
          label={content.label}
          title={content.title}
          subtitle={content.subtitle}
          align="center"
          className="mb-6"
        />

        {/* Scenario toggle buttons */}
        <div className="mb-6 flex justify-center gap-3">
          {content.scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setActiveScenario(scenario.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeScenario === scenario.id
                  ? "bg-primary shadow-primary/30 text-white shadow-lg"
                  : "bg-neutral-600/30 text-gray-400 hover:bg-neutral-600/50 hover:text-gray-300"
              }`}
            >
              {scenario.label}
            </button>
          ))}
        </div>

        {/* Graph container */}
        <Box
          animation="fade"
          delay={0.3}
          hoverEffect="none"
          className="mx-auto"
        >
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            className="overflow-visible"
          >
            {/* Gradients */}
            <defs>
              <linearGradient
                id="areaGradientInv"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  className="[stop-color:var(--color-primary)]"
                  stopOpacity="0.3"
                />
                <stop
                  offset="100%"
                  className="[stop-color:var(--color-primary)]"
                  stopOpacity="0.05"
                />
              </linearGradient>
              <linearGradient
                id="phaseGradientInv"
                x1="0%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#404040" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#404040" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Horizontal grid lines */}
            {[0.25, 0.5, 0.75].map((ratio) => (
              <line
                key={ratio}
                x1={padding}
                y1={padding + graphHeight * ratio}
                x2={width - padding}
                y2={padding + graphHeight * ratio}
                className="stroke-neutral-700/30"
                strokeDasharray="4 4"
              />
            ))}

            {/* Phase zones */}
            {content.phases.map((phase, i) => {
              const nextPhase = content.phases[i + 1];
              const startX =
                padding + ((phase.month - 1) / totalMonths) * graphWidth;
              const endX = nextPhase
                ? padding + ((nextPhase.month - 1) / totalMonths) * graphWidth
                : width - padding;

              return (
                <g key={phase.label} className="group/phase">
                  {/* Phase zone gradient background - visible on hover */}
                  <rect
                    x={startX}
                    y={padding}
                    width={endX - startX}
                    height={graphHeight}
                    fill="url(#phaseGradientInv)"
                    style={{ pointerEvents: "all" }}
                    className="opacity-0 transition-opacity duration-300 group-hover/phase:opacity-100"
                  />
                  {/* Vertical line at phase start */}
                  <line
                    x1={startX}
                    y1={padding}
                    x2={startX}
                    y2={height - padding}
                    className="stroke-neutral-600/50"
                    strokeDasharray="6 4"
                  />
                  {/* Phase label */}
                  <text
                    x={startX + (endX - startX) / 2}
                    y={padding - 15}
                    textAnchor="middle"
                    className="fill-gray-500 text-xs font-medium tracking-wider uppercase transition-colors duration-300 group-hover/phase:fill-primary"
                  >
                    {phase.label}
                  </text>
                </g>
              );
            })}

            {/* Current CPA line (near top since it's higher value) */}
            <g>
              <line
                x1={padding}
                y1={currentCPAY}
                x2={width - padding}
                y2={currentCPAY}
                className="stroke-red-400/40"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
              <text
                x={padding - 8}
                y={currentCPAY + 4}
                className="fill-red-400/70 text-xs font-medium"
                textAnchor="end"
              >
                ${currentCPA}
              </text>
              <text
                x={width - padding + 8}
                y={currentCPAY + 4}
                className="fill-red-400/70 text-xs font-medium"
                textAnchor="start"
              >
                Current
              </text>
            </g>

            {/* Target CPA line (lower on chart since it's lower value) */}
            <g>
              <line
                x1={padding}
                y1={targetCPAY}
                x2={width - padding}
                y2={targetCPAY}
                className="stroke-primary/60"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
              <text
                x={padding - 8}
                y={targetCPAY + 4}
                className="fill-primary text-xs font-semibold"
                textAnchor="end"
              >
                ${targetCPA}
              </text>
              <text
                x={width - padding + 8}
                y={targetCPAY + 4}
                className="fill-primary text-xs font-semibold"
                textAnchor="start"
              >
                Target CPA
              </text>
            </g>

            {/* X-axis */}
            <line
              x1={padding}
              y1={height - padding}
              x2={width - padding}
              y2={height - padding}
              className="stroke-neutral-600"
              strokeWidth="2"
            />

            {/* Y-axis */}
            <line
              x1={padding}
              y1={padding}
              x2={padding}
              y2={height - padding}
              className="stroke-neutral-600"
              strokeWidth="2"
            />

            {/* Y-axis label */}
            <text
              x={padding - 40}
              y={height / 2}
              textAnchor="middle"
              transform={`rotate(-90, ${padding - 40}, ${height / 2})`}
              className="fill-gray-500 text-sm"
            >
              Cost Per Demo
            </text>

            {/* X-axis labels (months) */}
            {Array.from({ length: totalMonths + 1 }, (_, i) => (
              <text
                key={i}
                x={padding + (i / totalMonths) * graphWidth}
                y={height - padding + 25}
                textAnchor="middle"
                className="fill-gray-500 text-xs"
              >
                {i === 0 ? "Start" : `M${i}`}
              </text>
            ))}

            {/* Animated area fill */}
            <AnimatePresence mode="wait">
              <motion.path
                key={`area-${activeScenario}`}
                d={areaPath}
                fill="url(#areaGradientInv)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Animated curve */}
            <AnimatePresence mode="wait">
              <motion.path
                key={`line-${activeScenario}`}
                d={linePath}
                fill="none"
                className="stroke-primary"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </AnimatePresence>
          </svg>
        </Box>

        {/* Scenario description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-center"
          >
            <Body size="lg" className="text-gray-300">
              <span className="text-primary font-semibold">
                {currentScenario.label}:
              </span>{" "}
              {currentScenario.description}
            </Body>
          </motion.div>
        </AnimatePresence>
      </div>
    </Slide>
  );
}
