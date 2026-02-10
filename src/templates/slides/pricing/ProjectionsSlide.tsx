/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-return */
"use client";

import { useState } from "react";
import Slide from "~/components/Slide";
import { Body, Box, PageHeader } from "~/components/slide-components";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectionsSlideContent } from "../../types";

interface ProjectionsSlideProps {
  content: ProjectionsSlideContent;
  slideNumber: number;
}

// Generate curve points based on type
function generateCurvePoints(
  type: "fast" | "steady" | "recovery",
  totalMonths: number,
): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = [];
  const steps = 50;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = t * totalMonths;
    let y: number;

    switch (type) {
      case "fast":
        // Fast rise: crosses benchmark ~month 1, keeps growing
        y = Math.pow(t, 0.8) * 100;
        break;
      case "steady":
        // S-curve: slow start, steady middle, plateau
        y = 100 / (1 + Math.exp(-8 * (t - 0.5)));
        break;
      case "recovery":
        // Dip then recover: starts, dips at month 2, then rises
        if (t < 0.15) {
          y = t * 100; // Initial rise
        } else if (t < 0.35) {
          // Dip
          const dipProgress = (t - 0.15) / 0.2;
          y = 15 - dipProgress * 10;
        } else {
          // Recovery and growth
          const recoveryT = (t - 0.35) / 0.65;
          y = 5 + Math.pow(recoveryT, 2) * 95;
        }
        break;
    }

    points.push({ x, y });
  }

  return points;
}

// Convert points to SVG path
function pointsToPath(
  points: { x: number; y: number }[],
  width: number,
  height: number,
  totalMonths: number,
  padding: number,
): string {
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;

  const pathPoints = points.map((p) => ({
    x: padding + (p.x / totalMonths) * graphWidth,
    y: padding + graphHeight - (p.y / 100) * graphHeight,
  }));

  return pathPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
}

// Convert points to SVG area path (for fill)
function pointsToAreaPath(
  points: { x: number; y: number }[],
  width: number,
  height: number,
  totalMonths: number,
  padding: number,
): string {
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;

  const pathPoints = points.map((p) => ({
    x: padding + (p.x / totalMonths) * graphWidth,
    y: padding + graphHeight - (p.y / 100) * graphHeight,
  }));

  const linePath = pathPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
  const bottomRight = `L ${padding + graphWidth} ${padding + graphHeight}`;
  const bottomLeft = `L ${padding} ${padding + graphHeight}`;
  const closePath = "Z";

  return `${linePath} ${bottomRight} ${bottomLeft} ${closePath}`;
}

export default function ProjectionsSlide({
  content,
  slideNumber,
}: ProjectionsSlideProps) {
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

  const points = generateCurvePoints(currentScenario.curve, totalMonths);
  const linePath = pointsToPath(points, width, height, totalMonths, padding);
  const areaPath = pointsToAreaPath(
    points,
    width,
    height,
    totalMonths,
    padding,
  );

  // Calculate phase positions
  const graphWidth = width - padding * 2;

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
            {/* Grid lines */}
            <defs>
              <linearGradient
                id="areaGradient"
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
                id="phaseGradient"
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
                y1={padding + (height - padding * 2) * ratio}
                x2={width - padding}
                y2={padding + (height - padding * 2) * ratio}
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
                    height={height - padding * 2}
                    fill="url(#phaseGradient)"
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

            {/* Benchmark line - "Target Demo Benchmark" */}
            {(() => {
              const benchmarkY = 18; // Y value (0-100 scale)
              const benchmarkYPos =
                padding + (height - padding * 2) * (1 - benchmarkY / 100);
              return (
                <g>
                  <line
                    x1={padding}
                    y1={benchmarkYPos}
                    x2={width - padding}
                    y2={benchmarkYPos}
                    className="stroke-primary/40"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                  />
                  <text
                    x={width - padding + 8}
                    y={benchmarkYPos + 4}
                    className="fill-primary/70 text-xs font-medium"
                    textAnchor="start"
                  >
                    Target Demo Benchmark
                  </text>
                </g>
              );
            })()}

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

            {/* Y-axis arrow */}
            <polygon
              points={`${padding},${padding - 5} ${padding - 6},${padding + 8} ${padding + 6},${padding + 8}`}
              className="fill-neutral-600"
            />

            {/* Y-axis label */}
            <text
              x={padding - 35}
              y={height / 2}
              textAnchor="middle"
              transform={`rotate(-90, ${padding - 35}, ${height / 2})`}
              className="fill-gray-500 text-sm"
            >
              Growth
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
                fill="url(#areaGradient)"
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
