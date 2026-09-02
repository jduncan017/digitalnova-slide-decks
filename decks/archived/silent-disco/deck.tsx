"use client";

import type { ReactNode } from "react";
import Slide from "~/components/Slide";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Box,
  Heading,
  Body,
  Label,
  PageHeader,
} from "~/components/slide-components";
import {
  Radio,
  Headphones,
  Users,
  Truck,
  Check,
  Sparkles,
  Volume2,
  VolumeX,
  Zap,
  Target,
  Mic,
  Mail,
  Phone,
  Globe,
  Layers,
  Layout,
  Lightbulb,
  Palette,
  MapPin,
  ArrowUpFromLine,
  Calendar,
  Film,
  Heart,
  Star,
} from "lucide-react";

// ============================================
// SLIDE 1: Hero
// ============================================
const HeroSlide = (
  <Slide key="hero" showLogo={false}>
    <div className="relative flex h-full items-center gap-10 overflow-hidden">
      {/* Left side - Content */}
      <div className="relative z-10 mx-auto flex w-full flex-col pb-28 pl-16">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-4"
          >
            <Image
              src="/logos/medtronic.png"
              alt="Medtronic"
              width={280}
              height={80}
              className="object-contain"
            />
          </motion.div>

          <Box
            animation="slideUp"
            delay={0.2}
            hoverEffect="none"
            className="mt-8"
          >
            <Heading level="h1" className="mb-4 text-gray-300">
              Silent Conference Solution
            </Heading>

            <Heading level="h3" className="mb-6 font-normal text-gray-400">
              Maximize Your Breakout Sessions
            </Heading>

            <Body size="lg" className="text-gray-500">
              Multi-track audio for your 3-day employee conference
            </Body>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-6 flex items-center gap-3"
            >
              <Body size="base" className="text-gray-500">
                Presented by CiferNoise Productions
              </Body>
            </motion.div>
          </Box>
        </div>
      </div>

      {/* Right side - Image */}
      <Box
        animation="fade"
        delay={0.3}
        hoverEffect="none"
        className="relative z-10 ml-auto h-full max-w-2xl"
      >
        <Image
          src="/images/silent-conference.png"
          alt="Conference"
          width={1000}
          height={1000}
          className="h-full rounded-xl border object-cover"
        />
      </Box>

      {/* Bottom bar */}
      <div className="absolute right-0 bottom-0 left-0 z-0 flex h-28 items-center justify-between gap-8 pl-16">
        <div className="logo">
          <Image
            src="/logos/cifernoise.webp"
            alt="Cifernoise"
            width={140}
            height={45}
            className="object-contain"
          />
        </div>
        <div className="h-px w-full bg-gray-500/30" />
      </div>
    </div>
  </Slide>
);

// ============================================
// SLIDE 2: The Opportunity
// ============================================
const OpportunitySlide = (
  <Slide key="opportunity" showLogo={false} slideNumber={2}>
    <div className="absolute top-5 right-6 z-10">
      <Image
        src="/logos/medtronic.png"
        alt="Medtronic"
        width={140}
        height={45}
        className="object-contain"
      />
    </div>

    <div className="mx-auto flex h-full max-w-4xl flex-col justify-center">
      <PageHeader
        label="THE OPPORTUNITY"
        title="More Sessions, Less Space"
        subtitle="Run multiple breakout tracks simultaneously—in a single room."
        align="left"
        className="mb-8"
      />

      <div className="grid grid-cols-3 gap-4">
        {[
          {
            icon: Layers,
            title: "Multiple Tracks, One Room",
            description:
              "Each attendee tunes into their chosen session via headphone channels—no room conflicts, no sound bleed.",
          },
          {
            icon: Users,
            title: "Employee Choice",
            description:
              "Your team selects the content most relevant to them, switching channels freely throughout each session.",
          },
          {
            icon: Layout,
            title: "Maximize Your Venue",
            description:
              "Transform limited space into a flexible, multi-track conference environment without building out separate rooms.",
          },
        ].map((item, i) => (
          <Box
            key={i}
            animation="slideUp"
            delay={0.3 + i * 0.1}
            hoverEffect="lift"
            className="rounded-xl border border-neutral-700 bg-neutral-800/50 p-5"
          >
            <div className="bg-primary/20 mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
              <item.icon className="text-primary h-5 w-5" />
            </div>
            <Heading level="h5" className="mb-2 text-gray-300">
              {item.title}
            </Heading>
            <Body size="sm" className="text-gray-400">
              {item.description}
            </Body>
          </Box>
        ))}
      </div>

      <Box
        animation="fade"
        delay={0.7}
        hoverEffect="none"
        className="bg-primary/10 border-primary/30 mt-8 rounded-xl border p-4"
      >
        <Body size="base" className="text-center text-gray-300">
          <span className="text-primary font-semibold">The result:</span> A
          seamless, professional conference experience that maximizes engagement
          and venue efficiency.
        </Body>
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 3: Why Silent Conference
// ============================================
const WhySilentConferenceSlide = (
  <Slide key="why" showLogo={false} slideNumber={3}>
    <div className="absolute top-5 right-6 z-10">
      <Image
        src="/logos/medtronic.png"
        alt="Medtronic"
        width={140}
        height={45}
        className="object-contain"
      />
    </div>

    <div className="flex h-full flex-col justify-center">
      <PageHeader
        label="WHY SILENT CONFERENCE"
        title="The Smarter Way to Run Breakouts"
        align="center"
        className="mb-6"
      />

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5">
        <Box
          animation="slideLeft"
          delay={0.2}
          hoverEffect="none"
          className="space-y-2.5"
        >
          {[
            {
              icon: VolumeX,
              title: "Zero Audio Interference",
              desc: "Multiple speakers present simultaneously without competing for airspace",
            },
            {
              icon: Volume2,
              title: "Crystal Clear Content",
              desc: "Every attendee hears their chosen track perfectly—no straining to hear",
            },
            {
              icon: Users,
              title: "Attendee Autonomy",
              desc: "Employees control their experience—volume, channel, and focus",
            },
            {
              icon: Zap,
              title: "Instant Track Switching",
              desc: "Change sessions with one button—no walking between rooms",
            },
            {
              icon: Target,
              title: "Higher Engagement",
              desc: "Immersive audio creates focused, distraction-free learning",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-start gap-3 rounded-lg bg-neutral-800/30 p-2.5"
            >
              <div className="bg-primary/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                <item.icon className="text-primary h-4 w-4" />
              </div>
              <div>
                <Body size="sm" className="font-medium text-gray-300">
                  {item.title}
                </Body>
                <Body size="sm" className="text-gray-500">
                  {item.desc}
                </Body>
              </div>
            </motion.div>
          ))}
        </Box>

        <Box
          animation="slideRight"
          delay={0.3}
          hoverEffect="none"
          className="bg-primary/10 border-primary/30 rounded-xl border p-5"
        >
          <Label className="text-primary mb-4">PERFECT FOR YOUR EVENT</Label>
          <div className="space-y-6">
            {[
              {
                time: "Breakout Sessions",
                desc: "Run all concurrent tracks in one ballroom, each speaker on their own channel",
              },
              {
                time: "Training Sessions",
                desc: "Different skill levels or departments can learn side-by-side",
              },
              {
                time: "Team Building",
                desc: "Add evening entertainment—same headphones, different vibe",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Body size="sm" className="font-medium text-purple-300">
                  {item.time}
                </Body>
                <Body size="sm" className="text-gray-400">
                  {item.desc}
                </Body>
              </motion.div>
            ))}
          </div>
        </Box>
      </div>
    </div>
  </Slide>
);

// ============================================
// SLIDE 4: What You Get
// ============================================
const WhatYouGetSlide = (
  <Slide key="whatyouget" showLogo={false} slideNumber={4}>
    <div className="absolute top-5 right-6 z-10">
      <Image
        src="/logos/medtronic.png"
        alt="Medtronic"
        width={140}
        height={45}
        className="object-contain"
      />
    </div>

    <div className="mx-auto flex h-full max-w-5xl flex-col justify-center">
      <PageHeader
        label="THE PACKAGE"
        title="Everything You Need"
        subtitle="Full-service silent conference experience, handled end-to-end."
        align="center"
        className="mb-6"
      />

      <div className="grid grid-cols-4 gap-4">
        {[
          {
            icon: Headphones,
            title: "Premium Headphones",
            items: [
              "LED color-changing",
              "10-channel switching",
              "Comfortable for hours",
              "Fully sanitized",
            ],
          },
          {
            icon: Radio,
            title: "Pro Transmitters",
            items: [
              "Crystal clear audio",
              "500+ ft range",
              "Multiple channels",
              "Backup units included",
            ],
          },
          {
            icon: Users,
            title: "Expert Staff",
            items: [
              "Setup & breakdown",
              "On-site management",
              "Troubleshooting",
              "Attendee assistance",
            ],
          },
          {
            icon: Mic,
            title: "Full Support",
            items: [
              "Speaker mic hookup",
              "Channel programming",
              "Real-time adjustments",
              "Post-event pickup",
            ],
          },
        ].map((item, i) => (
          <Box
            key={i}
            animation="slideUp"
            delay={0.2 + i * 0.1}
            hoverEffect="lift"
            className="rounded-xl border border-neutral-700 bg-neutral-800/50 p-4"
          >
            <div className="bg-primary/20 mb-3 flex h-10 w-10 items-center justify-center rounded-lg">
              <item.icon className="text-primary h-5 w-5" />
            </div>
            <Heading level="h6" className="mb-3 text-gray-300">
              {item.title}
            </Heading>
            <ul className="space-y-1.5">
              {item.items.map((li, j) => (
                <li key={j} className="flex items-center gap-2">
                  <Check className="text-primary h-3 w-3 shrink-0" />
                  <Body size="sm" className="text-gray-400">
                    {li}
                  </Body>
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </div>

      <Box
        animation="fade"
        delay={0.7}
        hoverEffect="none"
        className="mt-5 text-center"
      >
        <Body size="sm" className="text-gray-500">
          <span className="text-purple-300">Included:</span> We coordinate with
          your AV team to ensure seamless integration with existing conference
          setup.
        </Body>
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 5: Our Recommendations
// ============================================
const RecommendationsSlide = (
  <Slide key="recommendations" showLogo={false} slideNumber={7}>
    <div className="absolute top-5 right-6 z-10">
      <Image
        src="/logos/medtronic.png"
        alt="Medtronic"
        width={140}
        height={45}
        className="object-contain"
      />
    </div>

    <div className="mx-auto flex h-full max-w-5xl flex-col justify-center">
      <PageHeader
        label="ELEVATE THE EXPERIENCE"
        title="Our Recommendations"
        subtitle="Maximize the impact of your silent conference with these enhancements."
        align="center"
        className="mb-6"
      />

      <div className="grid grid-cols-2 gap-4">
        {/* Left column - Visual enhancements */}
        <div className="space-y-3">
          <Box
            animation="slideUp"
            delay={0.2}
            hoverEffect="lift"
            className="rounded-xl border border-neutral-700 bg-neutral-800/50 p-4"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                <Palette className="text-primary h-5 w-5" />
              </div>
              <div>
                <Heading level="h6" className="mb-1 text-gray-300">
                  Color-Coded Uplighting
                </Heading>
                <Body size="sm" className="text-gray-400">
                  Match stage lighting to headphone channel colors. Attendees
                  instantly know which speaker corresponds to their
                  channel—green stage = green channel.
                </Body>
              </div>
            </div>
          </Box>

          <Box
            animation="slideUp"
            delay={0.3}
            hoverEffect="lift"
            className="rounded-xl border border-neutral-700 bg-neutral-800/50 p-4"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                <MapPin className="text-primary h-5 w-5" />
              </div>
              <div>
                <Heading level="h6" className="mb-1 text-gray-300">
                  Channel Signage
                </Heading>
                <Body size="sm" className="text-gray-400">
                  Clear signage at each stage showing channel assignment and
                  session topic. Helps attendees navigate and reinforces the
                  multi-track format.
                </Body>
              </div>
            </div>
          </Box>

          <Box
            animation="slideUp"
            delay={0.4}
            hoverEffect="lift"
            className="rounded-xl border border-neutral-700 bg-neutral-800/50 p-4"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                <ArrowUpFromLine className="text-primary h-5 w-5" />
              </div>
              <div>
                <Heading level="h6" className="mb-1 text-gray-300">
                  Stage Risers
                </Heading>
                <Body size="sm" className="text-gray-400">
                  Elevate each presentation area so attendees can see their
                  chosen speaker from anywhere in their seated breakout area.
                </Body>
              </div>
            </div>
          </Box>
        </div>

        {/* Right column - Value maximization */}
        <Box
          animation="slideRight"
          delay={0.3}
          hoverEffect="none"
          className="bg-primary/10 border-primary/30 rounded-xl border p-5"
        >
          <Label className="text-primary mb-4">
            MAXIMIZE YOUR HEADPHONE VALUE
          </Label>
          <Body size="sm" className="mb-4 text-gray-400">
            You have the headphones for 3 days—use them beyond breakouts:
          </Body>

          <div className="space-y-4">
            {[
              {
                icon: Film,
                title: "Evening Movie Night",
                desc: "Wind down with a team movie experience—everyone hears perfectly without disturbing the venue",
              },
              {
                icon: Heart,
                title: "Morning Yoga/Wellness",
                desc: "Start the day with guided meditation or yoga—calming audio piped directly to attendees",
              },
              {
                icon: Calendar,
                title: "Networking Events",
                desc: "Background music at controlled volume during evening mixers—conversations stay easy",
              },
              {
                icon: Star,
                title: "Awards & Recognition",
                desc: "Make announcements crystal clear for ceremonies and team celebrations",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-500/20">
                  <item.icon className="h-3.5 w-3.5 text-purple-300" />
                </div>
                <div>
                  <Body size="sm" className="font-medium text-purple-300">
                    {item.title}
                  </Body>
                  <Body size="sm" className="text-gray-400">
                    {item.desc}
                  </Body>
                </div>
              </motion.div>
            ))}
          </div>
        </Box>
      </div>
    </div>
  </Slide>
);

// ============================================
// SLIDE 6: Custom Branding
// ============================================
const CustomBrandingSlide = (
  <Slide key="branding" showLogo={false} slideNumber={6}>
    <div className="absolute top-5 right-6 z-10">
      <Image
        src="/logos/medtronic.png"
        alt="Medtronic"
        width={140}
        height={45}
        className="object-contain"
      />
    </div>

    <div className="flex h-full items-center justify-center">
      <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-8">
        {/* Left - Image */}
        <Box animation="slideLeft" delay={0.2} hoverEffect="none">
          <div className="overflow-hidden rounded-2xl bg-white p-6">
            <Image
              src="/headphones.png"
              alt="Custom branded headphones"
              width={500}
              height={400}
              className="w-full object-contain"
            />
          </div>
        </Box>

        {/* Right - Content */}
        <div>
          <Box animation="slideUp" delay={0.3} hoverEffect="none">
            <Label className="text-primary mb-3">OPTIONAL UPGRADE</Label>
            <Heading level="h2" className="mb-4 text-gray-300">
              Custom Branded Headphones
            </Heading>
            <Body size="lg" className="mb-6 text-gray-400">
              Make every headphone a branded touchpoint. Custom stickers
              featuring the Medtronic logo on each earpiece.
            </Body>
          </Box>

          <Box
            animation="slideUp"
            delay={0.4}
            hoverEffect="none"
            className="mb-6 space-y-4"
          >
            {[
              {
                text: "High-quality vinyl stickers on both earpieces",
                icon: Check,
              },
              {
                text: "Reinforces brand presence throughout event",
                icon: Check,
              },
              {
                text: "Attendees become walking brand ambassadors",
                icon: Check,
              },
              { text: "Professional, polished appearance", icon: Check },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-primary/20 flex h-6 w-6 items-center justify-center rounded-full">
                  <item.icon className="text-primary h-3.5 w-3.5" />
                </div>
                <Body size="base" className="text-gray-300">
                  {item.text}
                </Body>
              </div>
            ))}
          </Box>

          <Box
            animation="slideUp"
            delay={0.5}
            hoverEffect="none"
            className="bg-primary/10 border-primary/30 rounded-xl border p-5"
          >
            <div className="mb-3">
              <Body size="sm" className="mb-1 text-gray-400">
                Add custom branding
              </Body>
              <Heading level="h3" className="text-primary">
                $4.50{" "}
                <span className="text-lg font-normal text-gray-400">
                  per headphone
                </span>
              </Heading>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 rounded-lg bg-neutral-800/50 p-3 text-center">
                <Body size="sm" className="text-gray-500">
                  Floorplan 1 (450)
                </Body>
                <Body size="lg" className="font-semibold text-purple-300">
                  +$2,025
                </Body>
              </div>
              <div className="flex-1 rounded-lg bg-neutral-800/50 p-3 text-center">
                <Body size="sm" className="text-gray-500">
                  Floorplan 2 (660)
                </Body>
                <Body size="lg" className="font-semibold text-purple-300">
                  +$2,970
                </Body>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  </Slide>
);

// ============================================
// SLIDE 7: Pricing Comparison
// ============================================
const packages = [
  {
    name: "Floorplan 1",
    headphones: 450,
    transmitters: 8,
    staff: 4,
    days: [
      { day: 1, rate: 10.5 },
      { day: 2, rate: 8.5 },
      { day: 3, rate: 6.5 },
    ],
  },
  {
    name: "Floorplan 2",
    headphones: 660,
    transmitters: 9,
    staff: 6,
    recommended: true,
    days: [
      { day: 1, rate: 10.5 },
      { day: 2, rate: 8.5 },
      { day: 3, rate: 6.5 },
    ],
  },
];
const shipping = 450;

const PricingSlide = (
  <Slide key="pricing" showLogo={false} slideNumber={5}>
    <div className="absolute top-5 right-6 z-10">
      <Image
        src="/logos/medtronic.png"
        alt="Medtronic"
        width={140}
        height={45}
        className="object-contain"
      />
    </div>

    <div className="flex h-full flex-col justify-center">
      <div className="mb-3 text-center">
        <Label className="text-primary mb-1">INVESTMENT</Label>
        <Heading level="h3" className="mb-0.5 text-gray-300">
          Choose Your Package
        </Heading>
        <Body size="sm" className="text-gray-500">
          3-Day Event • Multi-day discounts included
        </Body>
      </div>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-3">
        {packages.map((pkg, pkgIndex) => {
          const laborPerDay = pkg.staff * 50 * 10;
          const dailyTotals = pkg.days.map((d) => ({
            ...d,
            headphoneCost: pkg.headphones * d.rate,
            total: pkg.headphones * d.rate + laborPerDay,
          }));
          const threeDayTotal = dailyTotals.reduce(
            (sum, d) => sum + d.total,
            0,
          );
          const transmitterCost = pkg.transmitters * 100;
          const grandTotal = threeDayTotal + transmitterCost + shipping;
          const baseDayCost = pkg.headphones * 10.5 + laborPerDay;
          const savings = baseDayCost * 3 - threeDayTotal;

          return (
            <Box
              key={pkgIndex}
              animation="slideUp"
              delay={0.1 + pkgIndex * 0.15}
              hoverEffect="none"
              className={`relative rounded-xl p-3 ${pkg.recommended ? "bg-primary/10 border-primary border-2" : "border border-neutral-700 bg-neutral-800/50"}`}
            >
              {pkg.recommended && (
                <div className="bg-primary absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">
                  Recommended
                </div>
              )}

              <div className="mb-2 pt-0.5 text-center">
                <Heading level="h5" className="text-gray-300">
                  {pkg.name}
                </Heading>
                <Body size="sm" className="text-purple-300">
                  {pkg.headphones} Headphones • {pkg.transmitters} Transmitters
                  • {pkg.staff} Staff
                </Body>
              </div>

              <div className="mb-1.5 space-y-1">
                {dailyTotals.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="rounded bg-neutral-900/50 px-2 py-1"
                  >
                    <div className="mb-0.5 flex items-center gap-2">
                      <Body size="sm" className="font-medium text-gray-300">
                        Day {day.day}
                      </Body>
                      {day.rate < 10.5 && (
                        <span className="rounded bg-purple-400/20 px-1 py-0.5 text-[12px] text-purple-300">
                          -${(10.5 - day.rate).toFixed(2)}/headphone
                        </span>
                      )}
                    </div>
                    <div className="space-y-0.5 text-[14px]">
                      <div className="flex justify-between">
                        <span className="text-gray-500">
                          Headphones: {pkg.headphones} × ${day.rate.toFixed(2)}
                        </span>
                        <span className="text-gray-400">
                          ${day.headphoneCost.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">
                          Labor: {pkg.staff} × $50/hr × 10hrs
                        </span>
                        <span className="text-gray-400">
                          ${laborPerDay.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="mt-0.5 flex justify-end border-t border-neutral-700/50 pt-0.5">
                      <Body size="sm" className="text-primary font-semibold">
                        ${day.total.toLocaleString()}
                      </Body>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-neutral-700 py-1.5">
                <Body size="sm" className="text-gray-400">
                  3-Day Subtotal
                </Body>
                <Body size="sm" className="font-semibold text-gray-300">
                  ${threeDayTotal.toLocaleString()}
                </Body>
              </div>

              <div className="space-y-1 border-t border-neutral-700 py-1.5 text-[14px]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-gray-500">
                    <Radio className="h-2.5 w-2.5" /> Transmitters (
                    {pkg.transmitters} × $100)
                  </span>
                  <span className="text-gray-400">
                    ${transmitterCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-gray-500">
                    <Truck className="h-2.5 w-2.5" /> Delivery & Handling
                  </span>
                  <span className="text-gray-400">${shipping}</span>
                </div>
              </div>

              <div className="border-primary/50 mt-1.5 border-t-2 pt-2">
                <div className="flex items-center justify-between">
                  <Body size="sm" className="font-semibold text-gray-300">
                    Total
                  </Body>
                  <Heading level="h4" className="text-primary">
                    ${grandTotal.toLocaleString()}
                  </Heading>
                </div>
                {savings > 0 && (
                  <div className="mt-0.5 flex items-center justify-end gap-1">
                    <Sparkles className="h-2.5 w-2.5 text-purple-300" />
                    <Body size="sm" className="text-purple-300">
                      Save ${savings.toLocaleString()} with multi-day
                    </Body>
                  </div>
                )}
              </div>
            </Box>
          );
        })}
      </div>

      <div className="mx-auto mt-3 w-full max-w-5xl">
        <div className="flex items-center justify-center gap-5">
          <Body size="sm" className="tracking-wider text-gray-500 uppercase">
            Includes:
          </Body>
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
              <Check className="text-primary h-2.5 w-2.5" />
              <Body size="sm" className="text-gray-400">
                {item}
              </Body>
            </motion.div>
          ))}
        </div>
        <div className="mt-2 text-center">
          <Body size="sm" className="text-purple-300">
            + Optional: Custom branding at $4.50/headphone
          </Body>
        </div>
      </div>
    </div>
  </Slide>
);

// ============================================
// SLIDE 8: CTA
// ============================================
const CTASlide = (
  <Slide key="cta" showLogo={false} slideNumber={8}>
    <div className="flex h-full items-center justify-center">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Image
            src="/logos/cifernoise.webp"
            alt="Cifernoise"
            width={200}
            height={65}
            className="mx-auto object-contain"
          />
        </motion.div>

        <Box animation="slideUp" delay={0.2} hoverEffect="none">
          <Label className="text-primary mb-3">LET&apos;S MAKE IT HAPPEN</Label>
          <Heading level="h2" className="mb-4 text-gray-300">
            Ready to Transform Your Conference?
          </Heading>
          <Body size="lg" className="mb-8 text-gray-400">
            Let&apos;s discuss how silent conference technology can elevate your
            Medtronic event.
          </Body>
        </Box>

        <Box
          animation="slideUp"
          delay={0.4}
          hoverEffect="none"
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-8">
            {[
              {
                icon: Mail,
                text: "jason@cifernoiseproductions.com",
                href: "mailto:jason@cifernoiseproductions.com",
              },
              { icon: Phone, text: "(720) 295-4749", href: "tel:+17202954749" },
              {
                icon: Globe,
                text: "cifernoiseproductions.com",
                href: "https://cifernoiseproductions.com",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="hover:text-primary flex items-center gap-2 text-gray-400 transition-colors"
              >
                <item.icon className="text-primary h-5 w-5" />
                <Body size="base" as="span">
                  {item.text}
                </Body>
              </motion.a>
            ))}
          </div>
        </Box>

        <Box
          animation="fade"
          delay={0.8}
          hoverEffect="none"
          className="bg-primary/10 border-primary/30 rounded-xl border p-5"
        >
          <div className="flex items-center justify-center gap-3">
            <Lightbulb className="text-primary h-6 w-6" />
            <Body size="lg" className="text-gray-300">
              We&apos;ll coordinate directly with your AV team to ensure{" "}
              <span className="text-primary font-semibold">
                seamless integration
              </span>
              .
            </Body>
          </div>
        </Box>
      </div>
    </div>
  </Slide>
);

// ============================================
// EXPORT ALL SLIDES
// ============================================

// Deck-specific wrapper to slightly increase body text sizes
const BodyTextScaler = ({ children }: { children: ReactNode }) => (
  <div className="h-full [&_.text-base]:text-[18px] [&_.text-lg]:text-[20px] [&_.text-sm]:text-[16px] [&_.text-xl]:text-[22px] [&_.text-xs]:text-[15px]">
    {children}
  </div>
);

const baseSlides = [
  HeroSlide,
  OpportunitySlide,
  WhySilentConferenceSlide,
  WhatYouGetSlide,
  PricingSlide,
  CustomBrandingSlide,
  RecommendationsSlide,
  CTASlide,
];

const slides = baseSlides.map((slide, i) => (
  <BodyTextScaler key={`slide-${i}`}>{slide}</BodyTextScaler>
));

export default slides;
