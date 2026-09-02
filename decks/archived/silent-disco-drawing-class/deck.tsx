"use client";

import type { ReactNode } from "react";
import Slide from "~/components/Slide";
import Image from "next/image";
import {
  Box,
  Heading,
  Body,
  Label,
  PageHeader,
} from "~/components/slide-components";
import {
  Headphones,
  Users,
  Check,
  Palette,
  Music,
  Star,
  Calendar,
  TrendingUp,
  Handshake,
  Megaphone,
  Quote,
  DoorOpen,
  Pencil,
  PartyPopper,
  ArrowRight,
  DollarSign,
} from "lucide-react";
import CTASlideTemplate from "~/templates/slides/closing/CTASlide";
import { Logo } from "~/components/slide-components";
import type { CTASlideContent } from "~/templates/types";

// ============================================
// SLIDE 1: Custom Hero with Testimonial
// ============================================
const TitleSlide = (
  <Slide key="title" showLogo={false} chromeVariant="minimal">
    <div className="relative flex h-full items-center gap-10 overflow-hidden">
      <div className="relative z-10 mx-auto flex w-full flex-col pl-32">
        <div className="w-full max-w-2xl">
          <Logo
            src="/logos/cifernoise.webp"
            alt="CiferNoise Productions"
            animation="slideDown"
            delay={0}
            height={64}
            className="pb-4"
          />

          <Box
            animation="slideUp"
            delay={0.2}
            hoverEffect="highlight"
            className="mt-6"
          >
            <Heading level="h1" className="mb-4 text-gray-300">
              Silent Disco Drawing Class
            </Heading>
            <Heading level="h3" className="mb-6 font-normal text-gray-400">
              An immersive, headphone-based drawing party
            </Heading>
          </Box>

          <Box
            animation="fade"
            delay={0.5}
            hoverEffect="none"
            className="mt-4 rounded-xl border border-neutral-700 bg-neutral-800/40 p-5"
          >
            <div className="flex items-start gap-4">
              <Quote className="text-primary/60 mt-1 h-6 w-6 shrink-0" />
              <div>
                <Body
                  size="sm"
                  className="leading-relaxed text-gray-300 italic"
                >
                  &ldquo;One of the biggest draws at the Great American Beer
                  Festival&mdash;besides the beer, of course&mdash;is the silent
                  disco. We&apos;ve worked with CiferNoise for many years, and
                  their DJs always get the crowd hyped. True
                  professionals&mdash;always pleasant and responsive.&rdquo;
                </Body>
                <Body size="sm" className="mt-2 font-semibold text-purple-300">
                  Brewers Association{" "}
                  <span className="font-normal text-gray-500">
                    — Great American Beer Festival
                  </span>
                </Body>
              </div>
            </div>
          </Box>
        </div>
      </div>

      <Box
        animation="none"
        hoverEffect="none"
        className="relative z-10 ml-auto h-full max-w-2xl"
      >
        <Image
          src="/images/purple/purple-3.webp"
          alt="Hero Image"
          width={1000}
          height={1000}
          className="h-full border border-neutral-700/25 object-cover"
        />
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 2: Problem — Something Different
// ============================================
const ProblemSlide = (
  <Slide key="problem" showLogo={false} slideNumber={2}>
    <div className="mx-auto flex h-full max-w-5xl flex-col justify-center px-16">
      <PageHeader
        label="THE OPPORTUNITY"
        title="Looking for Something Different to Host at Your Venue?"
        align="left"
        className="mb-8"
      />

      <div className="grid grid-cols-3 gap-5">
        {[
          {
            icon: Calendar,
            title: "Slow Nights",
            description:
              "Thursdays and Sundays can be hard to fill. You need an event that brings people through the door consistently.",
          },
          {
            icon: Users,
            title: "New Audiences",
            description:
              "Attract creative professionals, date-night couples, bachelorettes, and corporate groups — all in one format.",
          },
          {
            icon: TrendingUp,
            title: "Drink Revenue",
            description:
              "A structured event with a built-in drink bundle drives bar sales beyond what a typical slow night yields.",
          },
        ].map((item, i) => (
          <Box
            key={i}
            animation="slideUp"
            delay={0.2 + i * 0.1}
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
        delay={0.6}
        hoverEffect="none"
        className="bg-primary/10 border-primary/30 mt-8 rounded-xl border p-4"
      >
        <Body size="base" className="text-center text-gray-300">
          <span className="text-primary font-semibold">
            We have the answer.
          </span>{" "}
          A structured, ready-to-run event that fills your room and drives bar
          sales.
        </Body>
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 3: What Is It
// ============================================
const WhatIsItSlide = (
  <Slide key="whatisit" showLogo={false} slideNumber={3}>
    <div className="flex h-full items-center gap-12 px-16">
      <div className="flex-1">
        <Box animation="slideUp" delay={0.1} hoverEffect="none">
          <Label className="mb-3 text-purple-400">THE EXPERIENCE</Label>
          <Heading level="h2" className="mb-4 text-gray-200">
            What Is the{" "}
            <span className="text-primary">Silent Disco Drawing Class?</span>
          </Heading>
          <Body size="lg" className="mb-8 text-gray-400">
            Guests wear silent disco headphones and follow a live drawing
            instructor — all while listening to curated music in their own
            personal audio bubble. They draw, sip, and connect. Everyone walks
            away with their own original artwork.
          </Body>
        </Box>

        <div className="space-y-3">
          {[
            {
              icon: Headphones,
              title: "Wireless, Multi-Channel Headphones",
              desc: "No noise complaints — every guest in their own audio bubble.",
            },
            {
              icon: Palette,
              title: "All Art Supplies Provided",
              desc: "We bring everything — no lift for your staff.",
            },
            {
              icon: Users,
              title: "25 to 75 Guests Per Event",
              desc: "Scales to fit your room and audience.",
            },
            {
              icon: Music,
              title: "Curated Music Channels",
              desc: "Set the vibe all night across multiple genres.",
            },
            {
              icon: Star,
              title: "One-of-a-Kind Creation",
              desc: "Guests leave with an original piece they made.",
            },
          ].map((item, i) => (
            <Box
              key={i}
              animation="slideUp"
              delay={0.2 + i * 0.08}
              hoverEffect="none"
              className="flex items-start gap-4"
            >
              <div className="bg-primary/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                <item.icon className="text-primary h-4 w-4" />
              </div>
              <div>
                <Body size="base" className="font-medium text-gray-200">
                  {item.title}
                </Body>
                <Body size="sm" className="text-gray-400">
                  {item.desc}
                </Body>
              </div>
            </Box>
          ))}
        </div>
      </div>

      <Box
        animation="fade"
        delay={0.3}
        hoverEffect="none"
        className="h-[80%] w-[38%] shrink-0"
      >
        <Image
          src="/images/silent-disco/drawing.webp"
          alt="Silent disco drawing class"
          width={600}
          height={800}
          className="h-full w-full rounded-xl object-cover"
        />
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 4: What a Night Looks Like
// ============================================
const NightTimelineSlide = (
  <Slide key="timeline" showLogo={false} slideNumber={4}>
    <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-16">
      <PageHeader
        label="THE RUN OF SHOW"
        title="What a Night Looks Like"
        subtitle="A 2½-hour experience — we handle everything from arrival to breakdown."
        align="left"
        className="mb-10"
      />

      <div className="grid grid-cols-4 gap-3">
        {[
          {
            time: "0:00",
            icon: DoorOpen,
            title: "Doors Open",
            desc: "Guests arrive, check in, grab a drink. We're already set up and ready.",
          },
          {
            time: "0:30",
            icon: Headphones,
            title: "Headphones Out",
            desc: "Staff distributes headphones and hands out art supplies. Music kicks on.",
          },
          {
            time: "0:45",
            icon: Pencil,
            title: "Class Starts",
            desc: "Live drawing instructor guides the room through poses and techniques.",
          },
          {
            time: "2:30",
            icon: PartyPopper,
            title: "Take It Home",
            desc: "Guests leave with original artwork. We clean up and pack out.",
          },
        ].map((step, i) => (
          <div key={i} className="relative">
            <Box
              animation="slideUp"
              delay={0.2 + i * 0.1}
              hoverEffect="lift"
              className="relative h-full rounded-xl border border-neutral-700 bg-neutral-800/50 p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg">
                  <step.icon className="text-primary h-5 w-5" />
                </div>
                <span className="text-primary font-mono text-sm font-semibold">
                  {step.time}
                </span>
              </div>
              <Heading level="h6" className="mb-2 text-gray-200">
                {step.title}
              </Heading>
              <Body size="sm" className="text-gray-400">
                {step.desc}
              </Body>
            </Box>
            {i < 3 && (
              <div className="absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                <ArrowRight className="text-primary/60 h-5 w-5" />
              </div>
            )}
          </div>
        ))}
      </div>

      <Box
        animation="fade"
        delay={0.7}
        hoverEffect="none"
        className="mt-8 rounded-xl border border-neutral-700 bg-neutral-800/40 p-5"
      >
        <Label className="text-primary mb-3">PERFECT FOR</Label>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {[
            "Creative professionals",
            "Date-night couples",
            "Bachelorette parties",
            "Corporate team outings",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <Check className="text-primary mt-1 h-4 w-4 shrink-0" />
              <Body size="sm" className="text-gray-300">
                {item}
              </Body>
            </div>
          ))}
        </div>
        <Body size="sm" className="mt-4 text-purple-300 italic">
          These guests don&apos;t just show up once — they bring friends, post
          photos, and become repeat customers at your venue.
        </Body>
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 10: Optional Add-On — Custom Branded Headphones
// ============================================
const BrandingSlide = (
  <Slide key="branding" showLogo={false} slideNumber={10}>
    <div className="mx-auto flex h-full max-w-6xl items-center gap-10 px-16">
      <Box
        animation="slideLeft"
        delay={0.2}
        hoverEffect="none"
        className="w-[42%] shrink-0"
      >
        <div className="overflow-hidden rounded-2xl bg-white p-6">
          <Image
            src="/headphones.png"
            alt="Custom branded headphones"
            width={600}
            height={500}
            className="w-full object-contain"
          />
        </div>
      </Box>

      <div className="flex-1">
        <Label className="text-primary mb-2">OPTIONAL ADD-ON</Label>
        <Heading level="h2" className="mb-4 text-gray-200">
          Turn Headphones Into a{" "}
          <span className="text-primary">Sponsored Billboard</span>
        </Heading>
        <Body size="base" className="mb-6 text-gray-400">
          For a small per-headphone fee, we brand every headset with the logo of
          your choice. Bring a local sponsor on board to cover the event cost —
          or use it to amplify your own venue&apos;s brand all night.
        </Body>

        <div className="mb-6 space-y-3">
          {[
            "Lock in a sponsor to cover (or offset) the entire event fee",
            "Custom vinyl logo on both earpieces — shows up in every guest photo",
            "Looks great on social — attendees tag your venue and the sponsor",
            "Turnaround: ~2 weeks from approved artwork to event day",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="bg-primary/20 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                <Check className="text-primary h-3.5 w-3.5" />
              </div>
              <Body size="sm" className="text-gray-300">
                {item}
              </Body>
            </div>
          ))}
        </div>

        <Box
          animation="slideUp"
          delay={0.4}
          hoverEffect="none"
          className="bg-primary/10 border-primary/30 rounded-xl border p-4"
        >
          <div className="mb-3">
            <Body size="sm" className="text-gray-400">
              Branding cost — flat rate per headphone
            </Body>
            <Heading level="h3" className="text-primary">
              $4.60 – $5.00{" "}
              <span className="text-lg font-normal text-gray-400">
                / headphone
              </span>
            </Heading>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { count: 25, total: "$125" },
              { count: 50, total: "$240" },
              { count: 75, total: "$345" },
            ].map((tier) => (
              <div
                key={tier.count}
                className="rounded-lg bg-neutral-900/50 px-2 py-2"
              >
                <Body size="sm" className="text-gray-500">
                  {tier.count} headphones
                </Body>
                <Body size="base" className="font-semibold text-purple-300">
                  {tier.total}
                </Body>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </div>
  </Slide>
);

// ============================================
// SLIDE 6: Marketing Ask & Recommendations
// ============================================
const MarketingAskSlide = (
  <Slide key="marketing" showLogo={false} slideNumber={9}>
    <div className="mx-auto flex h-full max-w-5xl flex-col justify-center px-16">
      <PageHeader
        label="WHAT WORKS BEST"
        title="How to Set the Event Up for Success"
        align="left"
        className="mb-8"
      />

      <div className="space-y-4">
        {[
          {
            icon: Calendar,
            title: "Best Nights",
            desc: "Thursday evenings & Sunday afternoons are prime — low competition, high appetite for something different. We fill your slow nights.",
          },
          {
            icon: DoorOpen,
            title: "Open Doors 30 Minutes Early",
            desc: "Let guests arrive, grab a drink, and settle in before the instruction starts. Gets the bar moving and avoids a rushed start.",
          },
          {
            icon: Megaphone,
            title: "Co-Marketing",
            desc: "Share the event on your social channels and email list. We'll provide assets. Combined reach = more tickets sold.",
          },
        ].map((item, i) => (
          <Box
            key={i}
            animation="slideUp"
            delay={0.2 + i * 0.1}
            hoverEffect="lift"
            className="flex items-start gap-4 rounded-xl border border-neutral-700 bg-neutral-800/50 p-5"
          >
            <div className="bg-primary/20 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg">
              <item.icon className="text-primary h-5 w-5" />
            </div>
            <div>
              <Heading level="h5" className="mb-1 text-purple-300">
                {item.title}
              </Heading>
              <Body size="base" className="text-gray-400">
                {item.desc}
              </Body>
            </div>
          </Box>
        ))}
      </div>

      <Box
        animation="fade"
        delay={0.7}
        hoverEffect="none"
        className="mt-6 text-center"
      >
        <Body size="sm" className="text-purple-300 italic">
          Our events are designed to be low-lift for your team — we handle
          setup, instruction, and breakdown.
        </Body>
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 8: ROI
// ============================================
const ROISlide = (
  <Slide key="roi" showLogo={false} slideNumber={8}>
    <div className="mx-auto flex h-full max-w-5xl flex-col justify-center px-16">
      <PageHeader
        label="THE MATH"
        title="What a Packed Room Is Worth to You"
        subtitle="Here's a realistic look at bar revenue on a night that would otherwise be slow."
        align="left"
        className="mb-8"
      />

      <div className="grid grid-cols-5 items-stretch gap-4">
        <Box
          animation="slideUp"
          delay={0.2}
          hoverEffect="lift"
          className="col-span-3 rounded-xl border border-neutral-700 bg-neutral-800/50 p-6"
        >
          <Label className="text-primary mb-4">A TYPICAL THURSDAY</Label>
          <div className="space-y-3">
            {[
              { label: "Guests", value: "75", sub: "max capacity" },
              {
                label: "Avg. bar spend per guest",
                value: "~$30",
                sub: "2 drinks + tip, Denver market",
              },
              {
                label: "Ticket take-rate (Option B)",
                value: "$0",
                sub: "we cover via ticketing",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg bg-neutral-900/40 px-4 py-3"
              >
                <div>
                  <Body size="base" className="font-medium text-gray-300">
                    {row.label}
                  </Body>
                  <Body size="sm" className="text-gray-500">
                    {row.sub}
                  </Body>
                </div>
                <Heading level="h4" className="text-purple-300">
                  {row.value}
                </Heading>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-neutral-700 pt-4">
            <Body size="base" className="text-gray-400">
              Estimated bar revenue
            </Body>
            <Heading level="h3" className="text-primary">
              ~$2,250
            </Heading>
          </div>
        </Box>

        <Box
          animation="slideUp"
          delay={0.35}
          hoverEffect="none"
          className="bg-primary/10 border-primary/40 col-span-2 flex flex-col items-center justify-center rounded-xl border-2 p-6 text-center"
        >
          <DollarSign className="text-primary mb-2 h-10 w-10" />
          <Body size="sm" className="mb-1 text-gray-400">
            Net bar revenue after $400 venue fee
          </Body>
          <Heading level="h1" className="text-primary">
            ~$1,850
          </Heading>
          <Body size="sm" className="mt-3 text-purple-300 italic">
            on a night that was otherwise empty
          </Body>
        </Box>
      </div>

      <Box
        animation="fade"
        delay={0.6}
        hoverEffect="none"
        className="mt-6 text-center"
      >
        <Body size="sm" className="text-gray-500">
          Math assumes Option B (we collect tickets). Under Option A you also
          keep 100% of ticket revenue — upside can be significantly higher if
          you can sell the room.
        </Body>
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 9: Pricing Option A
// ============================================
const PricingASlide = (
  <Slide key="pricingA" showLogo={false} slideNumber={6}>
    <div className="mx-auto flex h-full max-w-5xl flex-col justify-center px-16">
      <PageHeader
        label="OPTION A — FLAT-FEE BUYOUT"
        title="You Sell the Tickets, Keep 100%"
        subtitle="Pay us one flat fee. You set ticket prices, you run the sale, and every dollar of ticket revenue is yours. No revenue share."
        align="left"
        className="mb-6"
      />

      <div className="grid grid-cols-2 gap-5">
        <Box
          animation="slideLeft"
          delay={0.2}
          hoverEffect="none"
          className="bg-primary/10 border-primary/40 flex flex-col justify-between rounded-xl border-2 p-6"
        >
          <div>
            <Label className="text-primary mb-2">BASE PACKAGE</Label>
            <Heading level="h1" className="text-primary mb-4">
              $750
            </Heading>
            <div className="space-y-2">
              {[
                "25 headphones minimum",
                "1 staff member on-site",
                "Additional headphones: +$10 each",
                "We handle setup, instruction & breakdown",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-primary h-4 w-4 shrink-0" />
                  <Body size="sm" className="text-gray-300">
                    {item}
                  </Body>
                </div>
              ))}
            </div>
          </div>
        </Box>

        <div className="flex flex-col gap-3">
          {[
            { label: "Min. Guests", value: "25" },
            { label: "Max. Guests", value: "75" },
            { label: "Extra Headphone", value: "+$10" },
          ].map((stat, i) => (
            <Box
              key={i}
              animation="slideRight"
              delay={0.3 + i * 0.1}
              hoverEffect="lift"
              className="flex flex-1 items-center justify-between rounded-xl border border-neutral-700 bg-neutral-800/50 px-6"
            >
              <Body size="base" className="text-gray-400">
                {stat.label}
              </Body>
              <Heading level="h3" className="text-purple-300">
                {stat.value}
              </Heading>
            </Box>
          ))}
        </div>
      </div>

      <Box
        animation="fade"
        delay={0.7}
        hoverEffect="none"
        className="mt-6 rounded-xl bg-purple-950/40 p-4 text-center"
      >
        <Body size="base" className="font-semibold text-purple-200">
          <span className="font-semibold text-purple-100">
            Drink bundle (suggested):
          </span>{" "}
          since you keep 100% of tickets, we&apos;ve found best results when
          venues bundle 1–2 discounted drinks into the ticket price — it
          guarantees bar traffic and lifts the guest experience.
        </Body>
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 8: Pricing Option B
// ============================================
const PricingBSlide = (
  <Slide key="pricingB" showLogo={false} slideNumber={7}>
    <div className="mx-auto flex h-full max-w-5xl flex-col justify-center px-16">
      <PageHeader
        label="OPTION B — CO-SELL PARTNERSHIP"
        title="We Run Ticketing, You Run the Bar"
        subtitle="You pay a smaller flat fee and we collect ticket revenue directly from guests. You keep 100% of bar sales — we cover the rest from tickets."
        align="left"
        className="mb-6"
      />

      <div className="grid grid-cols-2 gap-5">
        <Box
          animation="slideLeft"
          delay={0.2}
          hoverEffect="none"
          className="bg-primary/10 border-primary/40 rounded-xl border-2 p-6"
        >
          <Label className="text-primary mb-2">WHAT THE VENUE PAYS</Label>
          <Heading level="h1" className="text-primary mb-2">
            $400
          </Heading>
          <Body size="sm" className="mb-4 text-gray-400 italic">
            flat venue fee
          </Body>
          <Body size="base" className="text-gray-300">
            No ticket management, no revenue risk. You keep 100% of bar sales on
            top.
          </Body>
        </Box>

        <Box
          animation="slideRight"
          delay={0.3}
          hoverEffect="none"
          className="rounded-xl border border-neutral-700 bg-neutral-800/50 p-6"
        >
          <Label className="mb-3 text-purple-300">WHAT GUESTS PAY US</Label>
          <div className="mb-4 flex items-end gap-3">
            <Heading level="h1" className="text-gray-200">
              $25
            </Heading>
            <Body size="base" className="mb-2 text-gray-500">
              →
            </Body>
            <Heading level="h1" className="text-primary">
              $40
            </Heading>
          </div>
          <Body size="sm" className="mb-3 text-gray-400">
            Early bird → late grab ticket pricing
          </Body>
          <Body size="base" className="text-gray-300">
            Tickets start at $25 for early birds and rise to $40 for late
            purchases — covering equipment, instruction, and staff.
          </Body>
        </Box>
      </div>

      <Box
        animation="fade"
        delay={0.6}
        hoverEffect="none"
        className="mt-6 flex items-start justify-center gap-3 rounded-xl bg-purple-950/40 p-4"
      >
        <Handshake className="text-primary mt-0.5 h-5 w-5 shrink-0" />
        <Body size="base" className="text-purple-200">
          <span className="font-semibold">Zero risk, zero ticketing lift:</span>{" "}
          we handle pricing, marketing the event to our audience, and guest
          check-in. You focus on filling drink orders at the bar.
        </Body>
      </Box>
    </div>
  </Slide>
);

const ctaContent: CTASlideContent = {
  label: "LET'S GO",
  title: "Let's Create Something Unforgettable",
  subtitle:
    "The Silent Disco Drawing Class is a turnkey, high-energy experience that fills slow nights, drives drink revenue, and gives your venue a reputation for doing something truly different.",
  profile: {
    image: "/logos/cifernoise.webp",
    name: "Jason Gorley",
    title: "CiferNoise Productions",
  },
  contactItems: [
    {
      icon: "Mail",
      text: "Jason@cifernoiseproductions.com",
      href: "mailto:Jason@cifernoiseproductions.com",
    },
    { icon: "Phone", text: "(720) 295-4745", href: "tel:+17202954745" },
    {
      icon: "Globe",
      text: "cifernoiseproductions.com",
      href: "https://www.cifernoiseproductions.com",
    },
  ],
  sideImage: "/images/rainbow/6.webp",
  hideBookCall: true,
  hideEmailForm: true,
  hideFooter: true,
};

const CloseSlide = (
  <CTASlideTemplate
    key="close"
    content={ctaContent}
    slideNumber={11}
    deckTitle="Silent Disco Drawing Class"
  />
);

// ============================================
// EXPORT ALL SLIDES
// ============================================
const BodyTextScaler = ({ children }: { children: ReactNode }) => (
  <div className="h-full [&_.text-base]:text-[18px] [&_.text-lg]:text-[20px] [&_.text-sm]:text-[16px] [&_.text-xl]:text-[22px] [&_.text-xs]:text-[15px]">
    {children}
  </div>
);

const baseSlides = [
  TitleSlide,
  ProblemSlide,
  WhatIsItSlide,
  NightTimelineSlide,
  PricingASlide,
  PricingBSlide,
  ROISlide,
  MarketingAskSlide,
  BrandingSlide,
  CloseSlide,
];

const slides = baseSlides.map((slide, i) => (
  <BodyTextScaler key={`slide-${i}`}>{slide}</BodyTextScaler>
));

export default slides;
