"use client";

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
import { Check, ArrowRight } from "lucide-react";
import CTASlideTemplate from "~/templates/slides/closing/CTASlide";
import type { CTASlideContent } from "~/templates/types";

// ============================================
// SLIDE 1: Title
// ============================================
const TitleSlide = (
  <Slide key="title" showLogo={false}>
    <div className="relative flex h-full items-center overflow-hidden">
      <div className="relative z-10 flex w-full flex-col pb-28 pl-16">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-6"
          >
            <Image
              src="/logos/cifernoise.webp"
              alt="CiferNoise"
              width={200}
              height={65}
              className="object-contain"
            />
          </motion.div>

          <Box
            animation="slideUp"
            delay={0.2}
            hoverEffect="none"
            className="mt-4"
          >
            <Heading level="h1" className="mb-2 text-gray-200">
              Silent Disco Experiences
            </Heading>

            <div className="mt-6 space-y-2">
              <Body size="lg" className="text-gray-400">
                <span className="text-purple-300">Client:</span> Lewis Brisbois
                — Annual Retreat
              </Body>
              <Body size="lg" className="text-gray-400">
                <span className="text-purple-300">Location:</span> Gaylord
                Rockies Resort & Convention Center
              </Body>
              <Body size="lg" className="text-gray-400">
                <span className="text-purple-300">Date:</span> Saturday,
                September 26th, 2026
              </Body>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="mt-8 border-t border-neutral-700/50 pt-4"
            >
              <Body size="base" className="text-gray-500">
                Prepared for <span className="text-gray-300">Leah Young</span>,
                Senior Creative Associate, Access
              </Body>
            </motion.div>
          </Box>
        </div>
      </div>

      <Box
        animation="fade"
        delay={0.3}
        hoverEffect="none"
        className="relative z-10 ml-auto h-full w-[45%] shrink-0"
      >
        <Image
          src="/cifernoise/image-1.png"
          alt="Silent disco co-working experience"
          width={1000}
          height={600}
          className="h-full w-full rounded-l-2xl object-cover"
        />
      </Box>

      <div className="absolute right-0 bottom-0 left-0 z-20 flex h-20 items-center gap-8 pl-16">
        <div className="h-px w-full bg-gray-500/30" />
      </div>
    </div>
  </Slide>
);

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
          { num: "01", title: "The Opportunity" },
          { num: "02", title: "Concept 1 — Mindful Morning Sessions" },
          { num: "03", title: "Concept 2 — Go Mobile! Momentum Walk" },
          { num: "04", title: "Concepts 3 & 4 — Co-Working & Meet & Greet" },
          { num: "05", title: "Sample Event Flow" },
          { num: "06", title: "Pricing & Add-Ons" },
          { num: "07", title: "Next Steps" },
        ].map((item, i) => (
          <Box
            key={i}
            animation="slideUp"
            delay={0.15 + i * 0.06}
            hoverEffect="none"
          >
            <div className="flex items-baseline gap-4 border-b border-neutral-800 pb-4">
              <span className="text-2xl font-bold text-purple-500/40">
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
  <Slide key="opportunity" showLogo={false} slideNumber={3}>
    <div className="flex h-full items-center gap-10 px-16">
      <div className="flex-1">
        <Box animation="slideUp" delay={0.1} hoverEffect="none">
          <Label className="mb-3 text-purple-400">THE OPPORTUNITY</Label>
          <Heading level="h2" className="mb-6 text-gray-200">
            Set the Tone Before the First Session
          </Heading>
          <Body size="lg" className="mb-8 leading-relaxed text-gray-400">
            Your executives arrive with energy to spare — give them an
            intentional, immersive experience before the day begins. Silent
            disco transforms the pre-session window into a curated moment that
            energizes, focuses, and connects your audience — no additional
            breakout rooms needed.
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
  <Slide key="mindful" showLogo={false} slideNumber={4}>
    <div className="flex h-full items-center gap-10 px-16">
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
        className="h-[80%] w-[35%] shrink-0"
      >
        <Image
          src="/cifernoise/image-2.jpg"
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
  <Slide key="momentum" showLogo={false} slideNumber={5}>
    <div className="flex h-full items-center gap-10 px-16">
      <Box
        animation="fade"
        delay={0.2}
        hoverEffect="none"
        className="h-[80%] w-[35%] shrink-0"
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
  <Slide key="more" showLogo={false} slideNumber={6}>
    <div className="flex h-full flex-col justify-center px-16">
      <PageHeader
        label="ADDITIONAL CONCEPTS"
        title="More Ways to Activate the Morning"
        align="left"
        className="mb-8"
      />

      <div className="grid grid-cols-2 gap-8">
        <Box
          animation="slideUp"
          delay={0.2}
          hoverEffect="none"
          className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-8"
        >
          <Heading level="h4" className="mb-4 text-gray-200">
            Silent Disco Co-Working Caf&eacute;
          </Heading>
          <Body size="base" className="leading-relaxed text-gray-400">
            A refined lounge with focus playlists and productivity channels.
            Pair with a coffee bar, waffle cart, or continental bites for a
            modern co-working feel.
          </Body>
        </Box>

        <Box
          animation="slideUp"
          delay={0.3}
          hoverEffect="none"
          className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-8"
        >
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

      <Box animation="fade" delay={0.5} hoverEffect="none" className="mt-8">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/cifernoise/image-1.png"
            alt="Silent disco co-working experience"
            width={1200}
            height={300}
            className="h-40 w-full object-cover"
          />
        </div>
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 6: Sample Event Flow
// ============================================
const EventFlowSlide = (
  <Slide key="flow" showLogo={false} slideNumber={7}>
    <div className="flex h-full flex-col justify-center px-16">
      <PageHeader
        label="THE EXPERIENCE"
        title="Sample Event Flow"
        align="center"
        className="mb-10"
      />

      <div className="mx-auto grid max-w-5xl grid-cols-4 gap-6">
        {[
          {
            step: "01",
            title: "Guest Arrival",
            description:
              "Immersive environment with ambient lighting, lounge seating, and headphones ready.",
          },
          {
            step: "02",
            title: "Experience Engagement",
            description:
              "Choose a wellness, focus, or networking audio channel.",
          },
          {
            step: "03",
            title: "Hospitality Integration",
            description:
              "Coffee bars, light culinary stations, comfortable seating.",
          },
          {
            step: "04",
            title: "Transition to Session",
            description:
              "Headsets returned — guests enter the general session energized and connected.",
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
              <span className="text-4xl font-bold text-purple-500/30">
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
              <div className="absolute top-6 -right-4 text-purple-500/20">
                <ArrowRight className="h-5 w-5" />
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
            This experience can take place{" "}
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
  <Slide key="pricing" showLogo={false} slideNumber={8}>
    <div className="flex h-full flex-col justify-center px-16">
      <PageHeader
        label="INVESTMENT"
        title="Pricing Infomation"
        align="center"
        className="mb-6"
      />

      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-5">
        {[
          {
            title: "Playlist Experience",
            subtitle: "Curated audio only — no live instructor",
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
            subtitle: "One guided experience with a live instructor",
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
            subtitle: "Multi-channel with live instructors + playlists",
            price: "$1,250 – $1,700",
            features: [
              "Up to 3 headphone channels",
              "1–2 channels with live instructor",
              "Remaining channels as curated playlists",
              "On-site technicians & event staff",
              "Delivery, setup & breakdown",
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

      <Box
        animation="fade"
        delay={0.6}
        hoverEffect="none"
        className="mx-auto mt-6 max-w-4xl"
      >
        <div className="rounded-xl border border-neutral-700 bg-neutral-800/30 p-4">
          <Heading level="h6" className="mb-2 text-gray-300">
            Available Add-Ons
          </Heading>
          <Body size="base" className="text-gray-400">
            <span className="text-purple-300">Hospitality:</span> Coffee cart,
            waffle station, smoothie & juice bars, infused water stations.{" "}
            <span className="text-purple-300">Wellness:</span> Yoga instructors,
            meditation leaders, mobility specialists.{" "}
            <span className="text-purple-300">Branding:</span> Custom headphone
            decals, LED color matching, lounge furniture & lighting.
          </Body>
        </div>
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 8: Close (using CTA template)
// ============================================
const ctaContent: CTASlideContent = {
  label: "LET'S GO",
  title: "Let's Create a Memorable Start to an Exceptional Retreat",
  subtitle:
    "White-glove setup & breakdown. Corporate event expertise. Fully customizable experiences.",
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
  sideImage: "/cifernoise/image-3.jpg",
};

const CloseSlide = (
  <CTASlideTemplate
    key="close"
    content={ctaContent}
    slideNumber={9}
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
  CloseSlide,
];

export default slides;
