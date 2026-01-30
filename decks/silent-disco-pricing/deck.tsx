"use client";

import Slide from "~/components/Slide";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Box,
  Heading,
  Body,
  Label,
} from "~/components/slide-components";
import {
  Radio,
  Headphones,
  Users,
  Truck,
  Check,
  Sparkles,
} from "lucide-react";

const packages = [
  {
    name: "Standard Package",
    headphones: 450,
    transmitters: 8,
    staff: 5,
    days: [
      { day: 1, rate: 10.50 },
      { day: 2, rate: 8.50 },
      { day: 3, rate: 6.50 },
    ],
  },
  {
    name: "Large Package",
    headphones: 660,
    transmitters: 9,
    staff: 7,
    recommended: true,
    days: [
      { day: 1, rate: 10.50 },
      { day: 2, rate: 8.50 },
      { day: 3, rate: 6.50 },
    ],
  },
];

const shipping = 450;

const slides = [
  <Slide key="pricing" showLogo={false}>
    {/* Cifernoise logo top right */}
    <div className="absolute top-5 right-6 z-10">
      <Image
        src="/logos/cifernoise.webp"
        alt="Cifernoise"
        width={140}
        height={45}
        className="object-contain"
      />
    </div>

    <div className="h-full flex flex-col justify-center">
      {/* Header */}
      <div className="text-center mb-3">
        <Label className="text-primary mb-1">INVESTMENT</Label>
        <Heading level="h3" className="text-gray-300 mb-0.5">Silent Disco Event Pricing</Heading>
        <Body size="sm" className="text-gray-500">3-Day Event • Compare Packages</Body>
      </div>

      {/* Two Column Comparison */}
      <div className="grid grid-cols-2 gap-3 max-w-5xl mx-auto w-full">
        {packages.map((pkg, pkgIndex) => {
          const laborPerDay = pkg.staff * 50 * 12;
          const dailyTotals = pkg.days.map(d => ({
            ...d,
            headphoneCost: pkg.headphones * d.rate,
            total: pkg.headphones * d.rate + laborPerDay,
          }));
          const threeDayTotal = dailyTotals.reduce((sum, d) => sum + d.total, 0);
          const transmitterCost = pkg.transmitters * 100;
          const grandTotal = threeDayTotal + transmitterCost + shipping;
          const baseDayCost = pkg.headphones * 10.50 + laborPerDay;
          const savings = (baseDayCost * 3) - threeDayTotal;

          return (
            <Box
              key={pkgIndex}
              animation="slideUp"
              delay={0.1 + pkgIndex * 0.15}
              hoverEffect="none"
              className={`p-3 rounded-xl relative ${
                pkg.recommended
                  ? "bg-primary/10 border-2 border-primary"
                  : "bg-neutral-800/50 border border-neutral-700"
              }`}
            >
              {/* Recommended badge */}
              {pkg.recommended && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wide">
                  Recommended
                </div>
              )}

              {/* Package header */}
              <div className="text-center mb-2 pt-0.5">
                <Heading level="h5" className="text-gray-300">{pkg.name}</Heading>
                <Body size="xs" className="text-purple-300">{pkg.headphones} Headphones • {pkg.transmitters} Transmitters • {pkg.staff} Staff</Body>
              </div>

              {/* Daily breakdown */}
              <div className="space-y-1.5 mb-2">
                {dailyTotals.map((day, dayIndex) => (
                  <div key={dayIndex} className="bg-neutral-900/50 rounded-lg p-2">
                    {/* Day header */}
                    <div className="flex items-center gap-2 mb-1">
                      <Body size="xs" className="text-gray-300 font-medium">Day {day.day}</Body>
                      {day.rate < 10.50 && (
                        <span className="text-[9px] px-1 py-0.5 rounded bg-purple-400/20 text-purple-300">
                          -${(10.50 - day.rate).toFixed(2)}/headphone
                        </span>
                      )}
                    </div>

                    {/* Line items */}
                    <div className="space-y-0.5 text-[11px]">
                      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-1">
                        <span className="flex items-center gap-1 text-purple-300">
                          <Headphones className="h-2.5 w-2.5" /> Headphones
                        </span>
                        <span className="text-gray-500 text-center">{pkg.headphones} × ${day.rate.toFixed(2)}</span>
                        <span className="text-gray-300 text-right">${day.headphoneCost.toLocaleString()}</span>
                      </div>
                      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-1">
                        <span className="flex items-center gap-1 text-purple-300">
                          <Users className="h-2.5 w-2.5" /> Labor
                        </span>
                        <span className="text-gray-500 text-center">{pkg.staff} × $50/hr × 12hrs</span>
                        <span className="text-gray-300 text-right">${laborPerDay.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Day subtotal */}
                    <div className="flex justify-between items-center mt-1.5 pt-1.5 border-t border-neutral-700">
                      <Body size="xs" className="text-gray-500">Subtotal</Body>
                      <Body size="xs" className="text-primary font-semibold">${day.total.toLocaleString()}</Body>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3-Day Subtotal */}
              <div className="flex justify-between items-center py-1.5 border-t border-neutral-700">
                <Body size="xs" className="text-gray-400">3-Day Subtotal</Body>
                <Body size="sm" className="text-gray-300 font-semibold">${threeDayTotal.toLocaleString()}</Body>
              </div>

              {/* One-time costs */}
              <div className="space-y-1 py-1.5 border-t border-neutral-700 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-gray-500">
                    <Radio className="h-2.5 w-2.5" /> Transmitters ({pkg.transmitters} × $100)
                  </span>
                  <span className="text-gray-400">${transmitterCost.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-gray-500">
                    <Truck className="h-2.5 w-2.5" /> Shipping & Handling
                  </span>
                  <span className="text-gray-400">${shipping}</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="mt-1.5 pt-2 border-t-2 border-primary/50">
                <div className="flex justify-between items-center">
                  <Body size="sm" className="text-gray-300 font-semibold">Total</Body>
                  <Heading level="h4" className="text-primary">${grandTotal.toLocaleString()}</Heading>
                </div>
                {savings > 0 && (
                  <div className="flex items-center justify-end gap-1 mt-0.5">
                    <Sparkles className="h-2.5 w-2.5 text-purple-300" />
                    <Body size="xs" className="text-purple-300">Save ${savings.toLocaleString()} with multi-day</Body>
                  </div>
                )}
              </div>
            </Box>
          );
        })}
      </div>

      {/* What's Included */}
      <div className="mt-3 max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-center gap-5">
          <Body size="xs" className="text-gray-500 uppercase tracking-wider">Includes:</Body>
          {[
            "Setup & breakdown",
            "Staff management",
            "Equipment testing",
            "On-site support",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.05 }}
              className="flex items-center gap-1"
            >
              <Check className="h-2.5 w-2.5 text-primary" />
              <Body size="xs" className="text-gray-400">{item}</Body>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Slide>,
];

export default slides;
