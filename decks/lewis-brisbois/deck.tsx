"use client";

import Slide from "~/components/Slide";
import Image from "next/image";
import {
  Box,
  Heading,
  Body,
  Label,
  PageHeader,
} from "~/components/slide-components";
import { Check, ArrowRight } from "lucide-react";
import HeroSlideTemplate from "~/templates/slides/opening/HeroSlide";
import CTASlideTemplate from "~/templates/slides/closing/CTASlide";
import type { CTASlideContent, HeroSlideContent } from "~/templates/types";

// ============================================
// SLIDE 1: Title (using Hero template)
// ============================================
const heroContent: HeroSlideContent = {
  title: "Silent Disco Experiences",
  subtitle: "Lewis Brisbois Annual Retreat",
  tagline: "Gaylord Rockies Resort & Convention Center — September 26th, 2026",
  heroImage: "/images/purple/purple-2.webp",
  preparedFor: "Leah Young, Senior Creative Associate, Access",
  hideFooter: true,
};

const TitleSlide = <HeroSlideTemplate key="title" content={heroContent} />;

// ============================================
// SLIDE 2: Index / Table of Contents
// ============================================
const IndexSlide = (
  <Slide key="index" showLogo={false} slideNumber={2}>
    <div className="flex h-full flex-col justify-center px-16">
      <Box animation="slideUp" delay={0.1} hoverEffect="none" className="mb-10">
        <Label className="mb-3 text-purple-400">WHAT&apos;S INSIDE</Label>
        <Heading level="h2" className="text-gray-200">
          Proposal Overview
        </Heading>
      </Box>

      <div className="max-w-2xl space-y-4">
        {[
          { num: "01", title: "Vision & Opportunity" },
          { num: "02", title: "Concept 1 — Mindful Morning Sessions" },
          { num: "03", title: "Concept 2 — Go Mobile! Momentum Walk" },
          { num: "04", title: "Concepts 3 & 4 — Co-Working & Meet & Greet" },
          { num: "05", title: "Sample Event Flow" },
          { num: "06", title: "Pricing" },
          { num: "07", title: "Suggested Enhancements" },
          { num: "08", title: "Next Steps" },
        ].map((item, i) => (
          <Box
            key={i}
            animation="slideUp"
            delay={0.15 + i * 0.06}
            hoverEffect="none"
          >
            <div className="flex items-baseline gap-4 border-b border-neutral-800 pb-4">
              <span className="text-2xl font-bold text-purple-300/80">
                {item.num}
              </span>
              <Body size="lg" className="font-semibold text-gray-200">
                {item.title}
              </Body>
            </div>
          </Box>
        ))}
      </div>
    </div>
  </Slide>
);

// ============================================
// SLIDE 3: The Opportunity
// ============================================
const OpportunitySlide = (
  <Slide key="opportunity" showLogo={false} slideNumber={1}>
    <div className="mx-auto flex h-full max-w-7xl items-center gap-10 px-16">
      <div className="flex-1">
        <Box
          animation="slideUp"
          delay={0.1}
          hoverEffect="none"
          className="max-w-xl"
        >
          <Label className="mb-3 text-purple-400">VISION & OPPORTUNITY</Label>
          <Heading level="h2" className="mb-6 text-gray-200">
            Set the Tone Before the First Session
          </Heading>
          <Body size="lg" className="mb-8 leading-relaxed text-gray-400">
            Your executives start their day with an intentional, immersive
            experience to prepare for the day. Silent disco transforms the
            pre-session window into a curated moment that energizes, focuses,
            and connects your audience.
          </Body>
        </Box>

        <div className="space-y-4">
          {[
            "Works indoors or outdoors, in your existing space",
            "Guests choose their own experience via headphone channels",
            "Seamless transition into your general session",
          ].map((item, i) => (
            <Box
              key={i}
              animation="slideUp"
              delay={0.3 + i * 0.1}
              hoverEffect="none"
            >
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 shrink-0 text-purple-400" />
                <Body size="lg" className="text-gray-300">
                  {item}
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
        className="h-[75%] w-[35%] shrink-0"
      >
        <Image
          src="/cifernoise/image-2.jpg"
          alt="Silent disco wellness experience"
          width={600}
          height={800}
          className="h-full w-full rounded-xl object-cover"
        />
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 4: Concept 1 — Mindful Morning
// ============================================
const MindfulMorningSlide = (
  <Slide key="mindful" showLogo={false} slideNumber={2}>
    <div className="flex h-full items-center gap-20 px-16">
      <div className="flex-1">
        <Box animation="slideUp" delay={0.1} hoverEffect="none">
          <Label className="mb-3 text-purple-400">CONCEPT 1</Label>
          <Heading level="h2" className="mb-3 text-gray-200">
            Mindful Silent Sessions
          </Heading>
          <Body size="lg" className="mb-8 text-gray-400">
            Guests choose a headphone channel to mentally prepare for the day.
          </Body>
        </Box>

        <div className="space-y-4">
          <Box
            animation="slideUp"
            delay={0.2}
            hoverEffect="none"
            className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-5"
          >
            <div className="mb-2 flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-blue-500" />
              <Heading level="h5" className="text-blue-300">
                Channel 1 — Blue
              </Heading>
            </div>
            <Heading level="h5" className="mb-1 text-gray-200">
              Guided Mindfulness
            </Heading>
            <Body size="base" className="text-gray-400">
              Breathwork, guided meditation, and executive mindset coaching.
            </Body>
          </Box>

          <Box
            animation="slideUp"
            delay={0.3}
            hoverEffect="none"
            className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-5"
          >
            <div className="mb-2 flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-red-500" />
              <Heading level="h5" className="text-red-300">
                Channel 2 — Red
              </Heading>
            </div>
            <Heading level="h5" className="mb-1 text-gray-200">
              Ambient Focus Soundscapes
            </Heading>
            <Body size="base" className="text-gray-400">
              Nature sounds, instrumental music, spa-style audio.
            </Body>
          </Box>

          <Box
            animation="slideUp"
            delay={0.4}
            hoverEffect="none"
            className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-5"
          >
            <div className="mb-2 flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-green-500" />
              <Heading level="h5" className="text-green-300">
                Channel 3 — Green
              </Heading>
            </div>
            <Heading level="h5" className="mb-1 text-gray-200">
              Slow Yoga Flow
            </Heading>
            <Body size="base" className="text-gray-400">
              Instructor-led gentle yoga with curated music.
            </Body>
          </Box>
        </div>
      </div>

      <Box
        animation="fade"
        delay={0.3}
        hoverEffect="none"
        className="h-full w-[40%] shrink-0"
      >
        <Image
          src="/cifernoise/image-5.jpeg"
          alt="Silent disco yoga experience"
          width={600}
          height={800}
          className="h-full w-full rounded-xl object-cover"
        />
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 5: Concept 2 — Momentum Walk
// ============================================
const MomentumWalkSlide = (
  <Slide key="momentum" showLogo={false} slideNumber={3}>
    <div className="flex h-full items-center gap-20 px-16">
      <Box
        animation="fade"
        delay={0.2}
        hoverEffect="none"
        className="h-full w-[40%] shrink-0"
      >
        <Image
          src="/cifernoise/image-3.jpg"
          alt="Silent disco outdoor experience"
          width={600}
          height={800}
          className="h-full w-full rounded-xl object-cover"
        />
      </Box>

      <div className="flex-1">
        <Box animation="slideUp" delay={0.1} hoverEffect="none">
          <Label className="mb-3 text-purple-400">CONCEPT 2</Label>
          <Heading level="h2" className="mb-3 text-gray-200">
            Go Mobile! Momentum Walk
          </Heading>
          <Body size="lg" className="mb-8 text-gray-400">
            Take it outdoors — a guided audio walk with your morning beverage.
          </Body>
        </Box>

        <div className="space-y-4">
          <Box
            animation="slideUp"
            delay={0.2}
            hoverEffect="none"
            className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-5"
          >
            <div className="mb-2 flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-blue-500" />
              <Heading level="h5" className="text-blue-300">
                Channel 1 — Blue
              </Heading>
            </div>
            <Heading level="h5" className="mb-1 text-gray-200">
              Podcast & Perspectives Walk
            </Heading>
            <Body size="base" className="text-gray-400">
              Industry stories and thought leadership.
            </Body>
          </Box>

          <Box
            animation="slideUp"
            delay={0.3}
            hoverEffect="none"
            className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-5"
          >
            <div className="mb-2 flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-red-500" />
              <Heading level="h5" className="text-red-300">
                Channel 2 — Red
              </Heading>
            </div>
            <Heading level="h5" className="mb-1 text-gray-200">
              Visualization & Intention
            </Heading>
            <Body size="base" className="text-gray-400">
              Guided mindfulness, breathwork, and conference goal-setting.
            </Body>
          </Box>

          <Box
            animation="slideUp"
            delay={0.4}
            hoverEffect="none"
            className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-5"
          >
            <div className="mb-2 flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-green-500" />
              <Heading level="h5" className="text-green-300">
                Channel 3 — Green
              </Heading>
            </div>
            <Heading level="h5" className="mb-1 text-gray-200">
              Sunrise Soundtrack Walk
            </Heading>
            <Body size="base" className="text-gray-400">
              Music shifts from peaceful morning tones to upbeat motivation.
            </Body>
          </Box>
        </div>
      </div>
    </div>
  </Slide>
);

// ============================================
// SLIDE 5: More Ways to Activate the Morning
// ============================================
const MoreConceptsSlide = (
  <Slide key="more" showLogo={false} slideNumber={4}>
    <div className="flex h-full flex-col justify-center px-8">
      <PageHeader
        label="ADDITIONAL CONCEPTS"
        title="More Ways to Activate the Morning"
        align="left"
        className="mb-8"
      />

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Box
            animation="slideUp"
            delay={0.2}
            hoverEffect="none"
            className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-8"
          >
            <Label className="mb-3 text-purple-400">CONCEPT 3</Label>
            <Heading level="h4" className="mb-4 text-gray-200">
              Silent Disco Co-Working Caf&eacute;
            </Heading>
            <Body size="base" className="leading-relaxed text-gray-400">
              A refined lounge with focus playlists and productivity channels.
              Pair with a coffee bar, waffle cart, or continental bites for a
              modern co-working feel.
            </Body>
          </Box>

          <Box animation="fade" delay={0.5} hoverEffect="none">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/cifernoise/image-1.png"
                alt="Silent disco co-working experience"
                width={1200}
                height={300}
                className="h-68 w-full object-cover"
              />
            </div>
          </Box>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Box animation="fade" delay={0.5} hoverEffect="none">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/cifernoise/handshake.jpg"
                alt="Silent disco co-working experience"
                width={1200}
                height={300}
                className="h-68 w-full object-cover object-bottom"
              />
            </div>
          </Box>
          <Box
            animation="slideUp"
            delay={0.3}
            hoverEffect="none"
            className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-8"
          >
            <Label className="mb-3 text-purple-400">CONCEPT 4</Label>
            <Heading level="h4" className="mb-4 text-gray-200">
              Morning Meet & Greet with Intention
            </Heading>
            <Body size="base" className="mb-4 leading-relaxed text-gray-400">
              Multiple speakers host simultaneous pod-style conversations on
              separate channels. Guests move freely between presenters and hear
              every word clearly — no crowd noise.
            </Body>
            <Body size="base" className="text-purple-300">
              Optional: connection prompts on screens to guide networking.
            </Body>
          </Box>
        </div>
      </div>
    </div>
  </Slide>
);

// ============================================
// SLIDE 6: Sample Event Flow
// ============================================
const EventFlowSlide = (
  <Slide key="flow" showLogo={false} slideNumber={5}>
    <div className="flex h-full flex-col justify-center px-16">
      <PageHeader
        label="THE EXPERIENCE"
        title="Sample Event Flow"
        align="center"
        className="mb-10"
      />

      <div className="mx-auto grid max-w-5xl grid-cols-4 gap-12">
        {[
          {
            step: "01",
            title: "Guest Arrival",
            description:
              "Immersive environment with ambient lighting, lounge seating, and headphones ready.",
          },
          {
            step: "02",
            title: "Experience Selection",
            description:
              "Choose a wellness, focus, or networking audio channel.",
          },
          {
            step: "03",
            title: "Hospitality Integration",
            description:
              "Coffee bars, culinary stations, and comfortable seating.",
          },
          {
            step: "04",
            title: "Transition to Session",
            description:
              "Guests return headsets and enter the general session energized for the day.",
          },
        ].map((item, i) => (
          <Box
            key={i}
            animation="slideUp"
            delay={0.2 + i * 0.1}
            hoverEffect="none"
            className="relative"
          >
            <div className="mb-3">
              <span className="text-4xl font-bold text-purple-300/80">
                {item.step}
              </span>
            </div>
            <Heading level="h5" className="mb-2 text-gray-200">
              {item.title}
            </Heading>
            <Body size="base" className="leading-relaxed text-gray-400">
              {item.description}
            </Body>
            {i < 3 && (
              <div className="absolute top-20 -right-8 text-purple-500">
                <ArrowRight className="h-8 w-8" />
              </div>
            )}
          </Box>
        ))}
      </div>

      <Box
        animation="fade"
        delay={0.7}
        hoverEffect="none"
        className="mx-auto mt-10 max-w-3xl"
      >
        <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-5 text-center">
          <Body size="base" className="text-gray-300">
            Can take place{" "}
            <span className="font-semibold text-purple-300">
              outside or inside the main ballroom
            </span>{" "}
            — no additional breakout room needed.
          </Body>
        </div>
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 7: Pricing & Add-Ons
// ============================================
const PricingSlide = (
  <Slide key="pricing" showLogo={false} slideNumber={6}>
    <div className="flex h-full flex-col justify-center px-16">
      <PageHeader
        label="INVESTMENT"
        title="Pricing Infomation"
        subtitle="All packages include silent disco headphones, on-site technicians & event staff, and full delivery, setup & breakdown."
        align="center"
        className="mb-6"
      />

      <div className="mx-auto mt-4 grid max-w-6xl grid-cols-3 gap-8">
        {[
          {
            title: "Playlist Experience",
            subtitle: "Multi-channel curated playlists",
            price: "$800 – $1,100",
            features: [
              "Up to 3 headphone channels",
              "Curated playlist per channel",
              "On-site technicians & event staff",
              "Delivery, setup & breakdown",
            ],
            recommended: false,
          },
          {
            title: "Single Channel",
            subtitle: "Single channel with a live instructor",
            price: "$1,050 – $1,450",
            features: [
              "Single headphone channel",
              "Live instructor for guided experience",
              "On-site technicians & event staff",
              "Delivery, setup & breakdown",
            ],
            recommended: false,
          },
          {
            title: "Premium Immersive",
            subtitle: "Multi-channel with instructor & playlists",
            price: "$1,250 – $1,700",
            features: [
              "Up to 3 headphone channels",
              "1–2 channels with live instructor",
              "Remaining channels as curated playlists",
              "On-site technicians & event staff",
            ],
            recommended: true,
          },
        ].map((tier, i) => (
          <Box
            key={i}
            animation="slideUp"
            delay={0.2 + i * 0.1}
            hoverEffect="none"
            className={`relative rounded-xl p-5 ${
              tier.recommended
                ? "border-2 border-purple-500 bg-purple-500/5"
                : "border border-neutral-700 bg-neutral-800/30"
            }`}
          >
            {tier.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-purple-500 px-4 py-1 text-sm font-bold tracking-wide text-white uppercase">
                Recommended
              </div>
            )}

            <div className="mb-3">
              <Heading level="h5" className="mb-1 text-gray-200">
                {tier.title}
              </Heading>
              <Body size="base" className="text-gray-500">
                {tier.subtitle}
              </Body>
            </div>

            <div className="mb-4 border-y border-neutral-700/50 py-3">
              <Heading level="h3" className="text-purple-400">
                {tier.price}
              </Heading>
              <Body size="base" className="text-gray-500">
                based on headphone count
              </Body>
            </div>

            <div className="space-y-2">
              {tier.features.map((item, j) => (
                <div key={j} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-purple-400" />
                  <Body size="base" className="text-gray-400">
                    {item}
                  </Body>
                </div>
              ))}
            </div>
          </Box>
        ))}
      </div>
    </div>
  </Slide>
);

// ============================================
// SLIDE 9: Suggested Enhancements
// ============================================
const EnhancementsSlide = (
  <Slide key="enhancements" showLogo={false} slideNumber={7}>
    <div className="flex h-full flex-col justify-center px-16">
      <Box animation="slideUp" delay={0.1} hoverEffect="none" className="mb-8">
        <Label className="mb-3 text-purple-400">RECOMMENDATIONS</Label>
        <Heading level="h2" className="mb-3 text-gray-200">
          Suggested Enhancements
        </Heading>
        <Body size="lg" className="max-w-3xl text-gray-400">
          A few ideas to elevate the morning beyond audio. Pair these with any
          package to create something truly memorable.
        </Body>
      </Box>

      <div className="grid max-w-6xl grid-cols-3 gap-6">
        <Box
          animation="slideUp"
          delay={0.2}
          hoverEffect="none"
          className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-6"
        >
          <Heading level="h5" className="mb-3 text-purple-300">
            Hospitality
          </Heading>
          <div className="space-y-2">
            {[
              "Full-service coffee cart",
              "Build-your-own waffle station",
              "Smoothie & juice bar",
              "Infused water stations",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="h-4 w-4 shrink-0 text-purple-400" />
                <Body size="base" className="text-gray-400">
                  {item}
                </Body>
              </div>
            ))}
          </div>
        </Box>

        <Box
          animation="slideUp"
          delay={0.3}
          hoverEffect="none"
          className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-6"
        >
          <Heading level="h5" className="mb-3 text-purple-300">
            Wellness Instructors
          </Heading>
          <div className="space-y-2">
            {[
              "Yoga instructor",
              "Guided meditation leader",
              "Mobility specialist",
              "Executive coach",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="h-4 w-4 shrink-0 text-purple-400" />
                <Body size="base" className="text-gray-400">
                  {item}
                </Body>
              </div>
            ))}
          </div>
        </Box>

        <Box
          animation="slideUp"
          delay={0.4}
          hoverEffect="none"
          className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-6"
        >
          <Heading level="h5" className="mb-3 text-purple-300">
            Branding & Production
          </Heading>
          <div className="space-y-2">
            {[
              "Custom headphone decals",
              "LED colors matching event brand",
              "Lounge furniture & seating",
              "Ambient lighting & signage",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="h-4 w-4 shrink-0 text-purple-400" />
                <Body size="base" className="text-gray-400">
                  {item}
                </Body>
              </div>
            ))}
          </div>
        </Box>
      </div>

      <Box animation="fade" delay={0.6} hoverEffect="none" className="mt-6">
        <Body size="base" className="text-gray-500">
          All enhancements priced individually. We&apos;ll help you build the
          right combination for your retreat.
        </Body>
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 10: Close (using CTA template)
// ============================================
const ctaContent: CTASlideContent = {
  label: "LET'S GO",
  title: "Let's Create an Exceptional Retreat",
  subtitle: "White-glove setup & breakdown. Corporate event expertise.",
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
};

const CloseSlide = (
  <CTASlideTemplate
    key="close"
    content={ctaContent}
    slideNumber={8}
    deckTitle="Lewis Brisbois — Silent Disco Retreat Experience"
    preparedFor="Leah Young"
  />
);

// ============================================
// EXPORT
// ============================================
const slides = [
  TitleSlide,
  IndexSlide,
  OpportunitySlide,
  MindfulMorningSlide,
  MomentumWalkSlide,
  MoreConceptsSlide,
  EventFlowSlide,
  PricingSlide,
  EnhancementsSlide,
  CloseSlide,
];

export default slides;
