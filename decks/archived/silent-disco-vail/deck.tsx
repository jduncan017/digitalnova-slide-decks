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
  Headphones,
  Users,
  Truck,
  Check,
  Sparkles,
  Music,
  Mic,
  Palette,
  X,
  ArrowRight,
  Clock,
  Camera,
  PartyPopper,
  Quote,
} from "lucide-react";
import HeroSlideTemplate from "~/templates/slides/opening/HeroSlide";
import CTASlideTemplate from "~/templates/slides/closing/CTASlide";
import type { CTASlideContent, HeroSlideContent } from "~/templates/types";

// ============================================
// SLIDE 1: Hero
// ============================================
const heroContent: HeroSlideContent = {
  title: "Silent Disco Experience",
  subtitle: "Vail Resorts",
  tagline:
    "390 Interlocken Crescent, Broomfield, CO — Tuesday, April 21st, 2026",
  heroImage: "/images/purple/purple-2.webp",
  preparedFor: "Presented by CiferNoise Productions",
  hideFooter: true,
};

const TitleSlide = <HeroSlideTemplate key="title" content={heroContent} />;

// ============================================
// SLIDE 2: DIY vs Full Service (combined comparison + pricing)
// ============================================

const comparisonItems = [
  {
    icon: Headphones,
    label: "Silent Disco System",
    detail: "75 headphones, 3-channel, transmitters & audio connections",
    diy: "$450",
    full: "$450",
  },
  {
    icon: Truck,
    label: "Delivery to Venue",
    detail: "390 Interlocken Crescent, Broomfield, CO",
    diy: "$75",
    full: "$75",
  },
  {
    icon: Mic,
    label: "Live DJ",
    detail: "1 hr setup/teardown + 3 hrs run-time",
    diy: null,
    full: "$500",
  },
  {
    icon: Users,
    label: "On-Site Staff",
    detail: "Guest onboarding, headphone cleaning & assistance",
    diy: null,
    full: "$210",
  },
  {
    icon: Sparkles,
    label: "Professional Lighting",
    detail: "Moving lights, disco lighting, low-level lasers & haze",
    diy: null,
    full: "$300",
  },
];

const ComparisonSlide = (
  <Slide key="comparison" showLogo={false} slideNumber={3}>
    <div className="flex h-full flex-col justify-center px-16">
      <PageHeader
        label="PRICING"
        title="DIY Rental vs. Full Service"
        subtitle="Same great headphones. Very different experience."
        align="center"
        className="mb-6"
      />

      <div className="mx-auto w-full max-w-5xl">
        <Box animation="slideUp" delay={0.2} hoverEffect="none">
          <div className="relative pt-[52px]">
            {/* DIY column overlay — starts above card, overlaps through it */}
            <div
              className="pointer-events-none absolute top-0 bottom-2 z-10 w-[140px] rounded-xl border border-neutral-600"
              style={{ right: 200 }}
            >
              <div className="flex h-[52px] items-center justify-center rounded-t-xl border-b border-neutral-700 bg-neutral-900">
                <span className="text-[15px] font-bold tracking-wider text-gray-400 uppercase">
                  DIY
                </span>
              </div>
            </div>

            {/* Full Service column overlay */}
            <div className="pointer-events-none absolute top-0 right-12 bottom-2 z-10 w-[140px] rounded-xl border border-purple-500/60">
              <div className="flex h-[52px] items-center justify-center rounded-t-xl border-b border-neutral-700 bg-purple-950/80">
                <span className="text-[15px] font-bold tracking-wider text-purple-300 uppercase">
                  Full Service
                </span>
              </div>
            </div>

            {/* Main pricing card */}
            <div className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-8">
              <div className="flex flex-col gap-2 py-2 pl-5">
                {comparisonItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="grid h-[64px] grid-cols-[1fr_140px_12px_140px] items-center rounded-xl bg-gray-950/20 px-4 py-2"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <div className="bg-primary/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                        <item.icon className="text-primary h-4 w-4" />
                      </div>
                      <div>
                        <Body size="base" className="font-medium text-gray-200">
                          {item.label}
                        </Body>
                        <Body size="sm" className="text-gray-500">
                          {item.detail}
                        </Body>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      {item.diy ? (
                        <Body size="sm" className="font-semibold text-gray-400">
                          {item.diy}
                        </Body>
                      ) : (
                        <X className="h-4 w-4 text-neutral-600" />
                      )}
                    </div>
                    <div />
                    <div className="flex items-center justify-center">
                      <Body size="sm" className="font-semibold text-purple-300">
                        {item.full}
                      </Body>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Totals */}
              <div className="mt-8 grid h-[68px] grid-cols-[1fr_140px_12px_140px] items-center border-t border-neutral-700 px-4 py-2">
                <div className="flex items-center justify-end pr-4">
                  <Body
                    size="sm"
                    className="font-semibold tracking-wide text-gray-400 uppercase"
                  >
                    Total
                  </Body>
                </div>
                <div className="flex h-full items-center justify-center">
                  <Heading level="h4" className="text-gray-400">
                    $525
                  </Heading>
                </div>
                <div />
                <div className="flex h-full items-center justify-center">
                  <Heading level="h4" className="text-primary">
                    $1,535
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </Box>

        <Box
          animation="fade"
          delay={0.7}
          hoverEffect="none"
          className="mt-4 text-center"
        >
          <Body size="sm" className="text-gray-500">
            Full Service includes{" "}
            <span className="text-purple-300">
              channel curation, setup & breakdown, and post-event pickup
            </span>{" "}
            — you just show up and enjoy.
          </Body>
        </Box>
      </div>
    </div>
  </Slide>
);

// ============================================
// SLIDE 3: What Full Service Looks Like
// ============================================
const FullServiceSlide = (
  <Slide key="fullservice" showLogo={false} slideNumber={2}>
    <div className="flex h-full items-center gap-12 px-16">
      <div className="flex-1">
        <Box animation="slideUp" delay={0.1} hoverEffect="none">
          <Label className="mb-3 text-purple-400">
            THE SILENT DISCO EXPERIENCE
          </Label>
          <Heading level="h2" className="mb-3 text-gray-200">
            You Enjoy the Event.{" "}
            <span className="text-primary">We Handle the Rest.</span>
          </Heading>
          <Body size="lg" className="mb-8 text-gray-400">
            From pre-event planning to post-event pickup, your only job is to
            have fun.
          </Body>
        </Box>

        <div className="space-y-4">
          {[
            {
              icon: Music,
              title: "Curated Channels",
              desc: "We work with you to pick the perfect genres for each of the 3 channels.",
            },
            {
              icon: Mic,
              title: "Live DJ",
              desc: "A professional DJ runs one channel live, reading the room and keeping energy high.",
            },
            {
              icon: Users,
              title: "On-Site Staff",
              desc: "Our team handles guest onboarding, headphone distribution, and cleaning between uses.",
            },
            {
              icon: Sparkles,
              title: "Lighting & Atmosphere",
              desc: "Professional moving lights, disco lighting, low-level lasers, and haze included.",
            },
            {
              icon: Clock,
              title: "Setup & Breakdown",
              desc: "We arrive early, set everything up, and tear it all down when it's over.",
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
                <item.icon className="text-primary h-4.5 w-4.5" />
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
          src="/cifernoise/image-2.jpg"
          alt="Silent disco experience"
          width={600}
          height={800}
          className="h-full w-full rounded-xl object-cover"
        />
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 4: Optional Add-Ons
// ============================================
const AddOnsSlide = (
  <Slide key="addons" showLogo={false} slideNumber={4}>
    <div className="flex h-full flex-col justify-center px-16">
      <PageHeader
        label="MAKE IT YOURS"
        title="Optional Add-Ons"
        subtitle="Enhance the experience with photo, entertainment, and branding upgrades."
        align="center"
        className="mb-6"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-5">
        {/* Photo Booth */}
        <Box
          animation="slideUp"
          delay={0.2}
          hoverEffect="none"
          className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-5"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-primary/20 flex h-9 w-9 items-center justify-center rounded-lg">
              <Camera className="text-primary h-4 w-4" />
            </div>
            <Heading level="h5" className="text-purple-300">
              Photo Booth
            </Heading>
          </div>

          <div className="space-y-3">
            {[
              {
                name: "Essential",
                price: "$250",
                features: "Unlimited photos, email delivery, 3 hrs",
              },
              {
                name: "Premium",
                price: "$400",
                features:
                  "+ custom overlays, GIFs & boomerangs, text delivery, live gallery",
              },
              {
                name: "Ultimate",
                price: "$650",
                features:
                  "+ video, props, custom filters, QR & AirDrop sharing",
              },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="rounded-lg bg-neutral-900/50 p-3"
              >
                <div className="mb-1 flex items-center justify-between">
                  <Body size="sm" className="font-medium text-gray-200">
                    {tier.name}
                  </Body>
                  <Body size="sm" className="font-semibold text-purple-300">
                    {tier.price}
                  </Body>
                </div>
                <Body size="sm" className="text-gray-500">
                  {tier.features}
                </Body>
              </motion.div>
            ))}
          </div>
        </Box>

        {/* Dance Floor Favors */}
        <Box
          animation="slideUp"
          delay={0.3}
          hoverEffect="none"
          className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-5"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-primary/20 flex h-9 w-9 items-center justify-center rounded-lg">
              <PartyPopper className="text-primary h-4 w-4" />
            </div>
            <Heading level="h5" className="text-purple-300">
              Dance Floor Extras
            </Heading>
          </div>

          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="rounded-lg bg-neutral-900/50 p-3"
            >
              <div className="mb-1 flex items-center justify-between">
                <Body size="sm" className="font-medium text-gray-200">
                  Karaoke DJ Experience
                </Body>
                <Body size="sm" className="font-semibold text-purple-300">
                  $160/hr
                </Body>
              </div>
              <Body size="sm" className="text-gray-500">
                MC station, two monitors & mic
              </Body>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.53 }}
              className="rounded-lg bg-neutral-900/50 p-3"
            >
              <div className="mb-1 flex items-center justify-between">
                <Body size="sm" className="font-medium text-gray-200">
                  Glow Party Pack
                </Body>
                <Body size="sm" className="font-semibold text-purple-300">
                  $284
                </Body>
              </div>
              <Body size="sm" className="text-gray-500">
                Glow sticks, neon glasses, blacklights
              </Body>
            </motion.div>
          </div>
        </Box>

        {/* Custom Branding */}
        <Box
          animation="slideUp"
          delay={0.4}
          hoverEffect="none"
          className="relative rounded-xl border-2 border-purple-500 bg-purple-500/5 p-5"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-purple-500 px-3 py-0.5 text-xs font-bold tracking-wide text-white uppercase">
            Popular
          </div>

          <div className="mb-4 flex items-center gap-3">
            <div className="bg-primary/20 flex h-9 w-9 items-center justify-center rounded-lg">
              <Palette className="text-primary h-4 w-4" />
            </div>
            <Heading level="h5" className="text-purple-300">
              Custom Branding
            </Heading>
          </div>

          <div className="mb-4">
            <Heading level="h3" className="text-primary">
              $375
            </Heading>
            <Body size="sm" className="mt-1 text-gray-400">
              Your logo on every headphone
            </Body>
          </div>

          <div className="space-y-2.5">
            {[
              "Vinyl adhesive on both earpieces",
              "Looks great in photos & marketing",
              "Reinforces brand presence all night",
              "Half-price for single-side option",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.06 }}
                className="flex items-center gap-2.5"
              >
                <Check className="h-4 w-4 shrink-0 text-purple-400" />
                <Body size="sm" className="text-gray-300">
                  {item}
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
// SLIDE 5: Next Steps + Testimonial
// ============================================
const NextStepsSlide = (
  <Slide key="nextsteps" showLogo={false} slideNumber={5}>
    <div className="flex h-full flex-col justify-center px-16">
      <PageHeader
        label="HOW IT WORKS"
        title="Next Steps"
        align="center"
        className="mb-8"
      />

      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-6">
        {[
          {
            step: "01",
            title: "Book It",
            description:
              "Review the proposal, sign the rental agreement, and submit a 50% deposit to lock in your date.",
          },
          {
            step: "02",
            title: "Curate It",
            description:
              "2-3 months before the event, we hop on a call to pick genres for each channel and select your DJ.",
          },
          {
            step: "03",
            title: "Enjoy It",
            description:
              "We show up, set everything up, run the show, and tear it all down. You just have a great time.",
          },
        ].map((item, i) => (
          <Box
            key={i}
            animation="slideUp"
            delay={0.2 + i * 0.1}
            hoverEffect="none"
            className="relative rounded-xl border border-neutral-700 bg-neutral-800/30 p-6 text-center"
          >
            <div className="mx-auto mb-4">
              <span className="text-5xl font-bold text-purple-300/80">
                {item.step}
              </span>
            </div>
            <Heading level="h4" className="mb-3 text-gray-200">
              {item.title}
            </Heading>
            <Body size="base" className="leading-relaxed text-gray-400">
              {item.description}
            </Body>
            {i < 2 && (
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 text-purple-500">
                <ArrowRight className="h-6 w-6" />
              </div>
            )}
          </Box>
        ))}
      </div>

      {/* Divider */}
      <div className="mx-auto mt-12 mb-10 h-px w-full max-w-4xl bg-neutral-700/60" />

      {/* Testimonial */}
      <Box
        animation="fade"
        delay={0.6}
        hoverEffect="none"
        className="mx-auto max-w-3xl text-center"
      >
        <Quote className="mx-auto mb-4 h-5 w-5 text-purple-400/60" />
        <Body size="base" className="leading-relaxed text-white italic">
          &ldquo;One of the biggest draws at the Great American Beer
          Festival&mdash;besides the beer, of course&mdash;is the silent disco.
          We&apos;ve worked with CiferNoise for many years, and their DJs always
          get the crowd hyped. What&apos;s more, they&apos;re true
          professionals&mdash;always pleasant and responsive.&rdquo;
        </Body>
        <Body size="sm" className="mt-3 font-semibold text-purple-300">
          Brewers Association{" "}
          <span className="font-normal text-gray-500">
            — Great American Beer Festival
          </span>
        </Body>
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 8: CTA
// ============================================
const ctaContent: CTASlideContent = {
  label: "LET'S GO",
  title: "Let's Make It Happen",
  subtitle: "Full-service silent disco — delivered, managed, and memorable.",
  profile: {
    image: "/logos/cifernoise.webp",
    name: "CiferNoise Productions",
    title: "Silent Disco & Immersive Audio Experiences",
  },
  contactItems: [
    {
      icon: "Mail",
      text: "jason@cifernoiseproductions.com",
      href: "mailto:jason@cifernoiseproductions.com",
    },
    { icon: "Phone", text: "(720) 295-4749", href: "tel:+17202954749" },
    {
      icon: "Globe",
      text: "cifernoiseproductions.com",
      href: "https://cifernoiseproductions.com",
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
    slideNumber={6}
    deckTitle="Vail Resorts — Silent Disco Experience"
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
  FullServiceSlide,
  ComparisonSlide,
  AddOnsSlide,
  NextStepsSlide,
  CloseSlide,
];

const slides = baseSlides.map((slide, i) => (
  <BodyTextScaler key={`slide-${i}`}>{slide}</BodyTextScaler>
));

export default slides;
