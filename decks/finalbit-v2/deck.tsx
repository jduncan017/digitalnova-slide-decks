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
import {
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Check,
  X,
  ArrowRight,
  Zap,
  Shield,
  Target,
  Video,
  Globe,
  Settings,
  Mail,
  Phone,
  Star,
  ChevronRight,
} from "lucide-react";

const slides = [
  // ============================================
  // SLIDE 1: Big Stat Hero
  // A single massive statistic that grabs attention
  // ============================================
  <Slide key="stat-hero" showLogo slideNumber={1}>
    <div className="h-full flex flex-col items-center justify-center text-center">
      {/* Floating background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="text-[400px] font-black text-primary/20">50K</div>
      </motion.div>

      {/* Main content */}
      <Box animation="slideUp" delay={0.2} hoverEffect="none" className="relative z-10">
        <Label className="text-primary mb-6 tracking-[0.3em]">FinalBit by the Numbers</Label>
        <div className="text-[180px] font-black leading-none text-gray-300 mb-4">
          50K
        </div>
        <Heading level="h3" className="text-gray-400 font-normal mb-8">
          filmmakers already using your platform
        </Heading>
        <div className="flex items-center justify-center gap-8 text-gray-500">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            <Body size="base" as="span">$10k MRR</Body>
          </div>
          <div className="w-px h-6 bg-gray-700" />
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <Body size="base" as="span">2-person team</Body>
          </div>
          <div className="w-px h-6 bg-gray-700" />
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <Body size="base" as="span">Ready to scale</Body>
          </div>
        </div>
      </Box>
    </div>
  </Slide>,

  // ============================================
  // SLIDE 2: Before/After Split
  // Dramatic comparison of current vs future state
  // ============================================
  <Slide key="before-after" showLogo slideNumber={2}>
    <div className="h-full flex flex-col justify-center">
      {/* Page Header */}
      <PageHeader
        label="The Transformation"
        title="From Bottleneck to Autopilot"
        subtitle="Here's what changes when we build your growth system."
        align="center"
        className="mb-8"
      />

      {/* Comparison panels */}
      <div className="flex items-stretch gap-6">
        {/* Before - Left side */}
        <Box
          animation="slideRight"
          delay={0.3}
          hoverEffect="none"
          className="flex-1 flex flex-col justify-center p-10 rounded-2xl bg-neutral-900/50 border border-red-900/30 relative overflow-hidden"
        >
          {/* Subtle red glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <Label className="text-red-400/80 mb-4">Where You Are Now</Label>
            <Heading level="h3" className="text-gray-300 mb-8">
              Growth Depends on <span className="text-red-400">You</span>
            </Heading>
            <ul className="space-y-4">
              {[
                "Every lead comes from word of mouth",
                "Lost 50% traffic after rebrand",
                "No system to generate B2B leads",
                "Scaling means more of your time",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <X className="h-3.5 w-3.5 text-red-400" />
                  </div>
                  <Body size="base" className="text-gray-400">{item}</Body>
                </motion.li>
              ))}
            </ul>
          </div>
        </Box>

        {/* Arrow divider */}
        <Box animation="scale" delay={0.6} hoverEffect="none" className="shrink-0 flex items-center">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <ArrowRight className="h-7 w-7 text-neutral-950" />
          </div>
        </Box>

        {/* After - Right side */}
        <Box
          animation="slideLeft"
          delay={0.4}
          hoverEffect="none"
          className="flex-1 flex flex-col justify-center p-10 rounded-2xl bg-neutral-900/50 border border-primary/30 relative overflow-hidden"
        >
          {/* Subtle blue glow */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <Label className="text-primary/80 mb-4">Where We&apos;re Going</Label>
            <Heading level="h3" className="text-gray-300 mb-8">
              Growth Runs on <span className="text-primary">Autopilot</span>
            </Heading>
            <ul className="space-y-4">
              {[
                "Leads come in while you sleep",
                "Ads driving qualified studio traffic",
                "Automated nurture → booked demos",
                "You focus on product, not sales",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <Body size="base" className="text-gray-300">{item}</Body>
                </motion.li>
              ))}
            </ul>
          </div>
        </Box>
      </div>
    </div>
  </Slide>,

  // ============================================
  // SLIDE 3: Vertical Process Flow
  // Steps flowing down with connector lines
  // ============================================
  <Slide key="process-flow" showLogo slideNumber={3}>
    <div className="h-full flex items-center gap-16">
      {/* Left side - Process steps */}
      <div className="flex-1 max-w-xl">
        <PageHeader
          label="The System"
          title="How It Works"
          align="left"
          className="mb-10"
        />

        <div className="relative">
          {/* Vertical connector line - z-0 to go behind icons */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute left-6 top-0 w-px z-0 bg-linear-to-b from-primary via-primary/50 to-transparent"
          />

          {/* Steps */}
          {[
            { icon: Target, title: "We Find Your Studios", desc: "Targeted Meta ads reach indie filmmakers actively looking for production tools" },
            { icon: Video, title: "Video Hooks Them", desc: "Testimonial-style creative shows real filmmakers using FinalBit" },
            { icon: Globe, title: "Landing Page Converts", desc: "B2B-focused messaging speaks directly to studio decision makers" },
            { icon: Settings, title: "Automation Nurtures", desc: "CRM sequences follow up automatically until they book a demo" },
          ].map((step, i) => (
            <Box
              key={i}
              animation="slideRight"
              delay={0.3 + i * 0.15}
              hoverEffect="highlight"
              className="relative flex gap-6 mb-8 last:mb-0"
            >
              <div className="relative z-10 w-12 h-12 rounded-xl bg-slide-bg-to border border-neutral-700 flex items-center justify-center shrink-0">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="pt-1">
                <Heading level="h5" className="text-gray-300 mb-1">{step.title}</Heading>
                <Body size="base" className="text-gray-500">{step.desc}</Body>
              </div>
            </Box>
          ))}
        </div>
      </div>

      {/* Right side - Image */}
      <Box animation="fade" delay={0.4} hoverEffect="none" className="flex-1 h-full flex items-center">
        <Image
          src="/images/film/film-1.webp"
          alt="Film production"
          width={600}
          height={700}
          className="rounded-2xl border border-neutral-800 object-cover h-[80%] w-full"
        />
      </Box>
    </div>
  </Slide>,

  // ============================================
  // SLIDE 4: Comparison Matrix
  // You vs competitors in a clean table format
  // ============================================
  <Slide key="comparison" showLogo slideNumber={4}>
    <div className="h-full flex flex-col justify-center items-center">
      <PageHeader
        label="The Competition"
        title="Why Studios Will Choose You"
        className="mb-12"
      />

      <Box animation="slideUp" delay={0.3} hoverEffect="none" className="w-full max-w-4xl">
        <div className="rounded-2xl border border-neutral-700 overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-4 bg-neutral-800/50">
            <div className="p-4 text-gray-500 text-sm font-medium">Feature</div>
            <div className="p-4 text-center border-l border-neutral-700">
              <Body size="sm" className="text-gray-400">Movie Magic</Body>
            </div>
            <div className="p-4 text-center border-l border-neutral-700">
              <Body size="sm" className="text-gray-400">StudioBinder</Body>
            </div>
            <div className="p-4 text-center border-l border-neutral-700 bg-primary/10">
              <Body size="sm" className="text-primary font-semibold">FinalBit</Body>
            </div>
          </div>

          {/* Comparison rows */}
          {[
            { feature: "All-in-one platform", mm: false, sb: false, fb: true },
            { feature: "AI-powered tools", mm: false, sb: false, fb: true },
            { feature: "Modern interface", mm: false, sb: true, fb: true },
            { feature: "Affordable for indies", mm: false, sb: true, fb: true },
            { feature: "Screenwriting + Budgeting", mm: false, sb: false, fb: true },
          ].map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="grid grid-cols-4 border-t border-neutral-700"
            >
              <div className="p-4">
                <Body size="sm" className="text-gray-300">{row.feature}</Body>
              </div>
              <div className="p-4 flex justify-center border-l border-neutral-700">
                {row.mm ? (
                  <Check className="h-5 w-5 text-green-400" />
                ) : (
                  <X className="h-5 w-5 text-gray-600" />
                )}
              </div>
              <div className="p-4 flex justify-center border-l border-neutral-700">
                {row.sb ? (
                  <Check className="h-5 w-5 text-green-400" />
                ) : (
                  <X className="h-5 w-5 text-gray-600" />
                )}
              </div>
              <div className="p-4 flex justify-center border-l border-neutral-700 bg-primary/5">
                {row.fb ? (
                  <Check className="h-5 w-5 text-primary" />
                ) : (
                  <X className="h-5 w-5 text-gray-600" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <Box animation="fade" delay={0.9} hoverEffect="none" className="text-center mt-6">
          <Body size="base" className="text-gray-500">
            Your product is already better — we just need to get it in front of the right people.
          </Body>
        </Box>
      </Box>
    </div>
  </Slide>,

  // ============================================
  // SLIDE 5: Value Stack
  // Building up what they get - clean and premium
  // ============================================
  <Slide key="value-stack" showLogo slideNumber={5}>
    <div className="h-full flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <PageHeader
          label="Everything Included"
          title="The Full Package"
          className="mb-10"
        />

        <div className="space-y-3">
          {[
            { item: "B2B Landing Page Design & Development", icon: Globe },
            { item: "Video Ad Creative Production", icon: Video },
            { item: "CRM Setup & Automation Flows", icon: Settings },
            { item: "Meta Ad Campaign Build & Structure", icon: Target },
            { item: "Analytics & Conversion Tracking", icon: TrendingUp },
          ].map((row, i) => (
            <Box
              key={i}
              animation="slideRight"
              delay={0.3 + i * 0.1}
              hoverEffect="highlight"
              className="flex items-center gap-4 p-4 rounded-xl bg-neutral-800/30 border border-neutral-700/50"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <row.icon className="h-5 w-5 text-primary" />
              </div>
              <Body size="base" className="text-gray-300">{row.item}</Body>
              <Check className="h-5 w-5 text-primary ml-auto shrink-0" />
            </Box>
          ))}
        </div>

        {/* Total */}
        <Box
          animation="slideUp"
          delay={0.8}
          hoverEffect="none"
          className="mt-8 p-6 rounded-2xl bg-neutral-800/50 border border-primary/30"
        >
          <div className="flex items-center justify-between">
            <div>
              <Body size="sm" className="text-gray-400 mb-1">One-Time Setup</Body>
              <Heading level="h3" className="text-primary">$2,500</Heading>
            </div>
            <div className="h-12 w-px bg-neutral-700" />
            <div>
              <Body size="sm" className="text-gray-400 mb-1">Monthly Management</Body>
              <Heading level="h3" className="text-primary">$1,500</Heading>
            </div>
            <div className="h-12 w-px bg-neutral-700" />
            <div>
              <Body size="sm" className="text-gray-400 mb-1">Ad Spend</Body>
              <Heading level="h3" className="text-primary">$1,500</Heading>
            </div>
          </div>
        </Box>
      </div>
    </div>
  </Slide>,

  // ============================================
  // SLIDE 6: Social Proof / Quote
  // Large testimonial with floating stats
  // ============================================
  <Slide key="social-proof" showLogo slideNumber={6}>
    <div className="h-full flex items-center justify-center relative">
      {/* Floating stat cards */}
      <Box
        animation="slideDown"
        delay={0.6}
        hoverEffect="lift"
        className="absolute top-20 left-20 p-4 rounded-xl bg-neutral-800/80 border border-neutral-700 backdrop-blur-sm"
      >
        <Heading level="h3" className="text-primary">50K+</Heading>
        <Body size="sm" className="text-gray-500">Active Users</Body>
      </Box>

      <Box
        animation="slideDown"
        delay={0.7}
        hoverEffect="lift"
        className="absolute top-32 right-24 p-4 rounded-xl bg-neutral-800/80 border border-neutral-700 backdrop-blur-sm"
      >
        <Heading level="h3" className="text-primary">$10K</Heading>
        <Body size="sm" className="text-gray-500">Monthly Revenue</Body>
      </Box>

      <Box
        animation="slideUp"
        delay={0.8}
        hoverEffect="lift"
        className="absolute bottom-32 left-32 p-4 rounded-xl bg-neutral-800/80 border border-neutral-700 backdrop-blur-sm"
      >
        <div className="flex gap-1 mb-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
        <Body size="sm" className="text-gray-500">User Rating</Body>
      </Box>

      {/* Main quote */}
      <Box animation="scale" delay={0.3} hoverEffect="none" className="max-w-3xl text-center px-8">
        <div className="text-6xl text-primary/30 mb-4">&ldquo;</div>
        <Heading level="h3" className="font-light text-gray-300 leading-relaxed mb-8">
          You&apos;ve already proven the product works. 50,000 users don&apos;t lie.
          Now it&apos;s time to build the system that brings studios to you
          instead of waiting for word of mouth.
        </Heading>
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/joshua-duncan.png"
            alt="Josh Duncan"
            width={56}
            height={56}
            className="rounded-full"
          />
          <div className="text-left">
            <Body size="base" className="text-gray-300 font-medium">Josh Duncan</Body>
            <Body size="sm" className="text-gray-500">DigitalNova Studio</Body>
          </div>
        </div>
      </Box>
    </div>
  </Slide>,

  // ============================================
  // SLIDE 7: Risk Reversal / Guarantee
  // Bold promise with supporting points
  // ============================================
  <Slide key="guarantee" showLogo slideNumber={7}>
    <div className="h-full flex items-center">
      <div className="flex-1 pr-12">
        <PageHeader
          label="Zero Risk"
          title="The Math Works in Your Favor"
          align="left"
          className="mb-6"
        />
        <Body size="xl" className="text-gray-400 mb-10">
          At $2,000/month per studio, you only need <span className="text-primary font-semibold">2 new B2B customers</span> to cover our entire fee. Everything after that is profit.
        </Body>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Shield, title: "No Long-Term Contract", desc: "Month-to-month after setup" },
            { icon: Zap, title: "Fast Results", desc: "Ads live within 4 weeks" },
            { icon: Clock, title: "Your Time Protected", desc: "We handle everything" },
            { icon: TrendingUp, title: "Scalable System", desc: "Increase budget as you grow" },
          ].map((item, i) => (
            <Box
              key={i}
              animation="slideUp"
              delay={0.3 + i * 0.1}
              hoverEffect="lift"
              className="p-5 rounded-xl bg-neutral-800/30 border border-neutral-700"
            >
              <item.icon className="h-8 w-8 text-primary mb-3" />
              <Heading level="h5" className="text-gray-300 mb-1">{item.title}</Heading>
              <Body size="sm" className="text-gray-500">{item.desc}</Body>
            </Box>
          ))}
        </div>
      </div>

      {/* Right side - Big number */}
      <Box animation="scale" delay={0.4} hoverEffect="none" className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-[140px] font-black text-primary leading-none">2</div>
          <Heading level="h3" className="text-gray-400 mt-2 font-normal">customers to break even</Heading>
          <Body size="base" className="text-gray-500 mt-4">Then it&apos;s pure ROI</Body>
        </div>
      </Box>
    </div>
  </Slide>,

  // ============================================
  // SLIDE 8: CTA with Image
  // Left-aligned content with image on right
  // ============================================
  <Slide key="cta-urgency" showLogo slideNumber={8}>
    <div className="h-full flex gap-16 items-center">
      {/* Left side - Content */}
      <div className="flex-1 max-w-xl">
        <Box animation="scale" delay={0.2} hoverEffect="none" className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-8">
          <Zap className="h-8 w-8 text-primary" />
        </Box>

        <PageHeader
          label="Let's Go"
          title="Ready to Build Your B2B Growth Engine?"
          subtitle="Let's get on a quick call to finalize the details and get started."
          align="left"
          titleStyle={{ color: "var(--color-gray-300)" }}
          className="mb-10"
        />

        {/* Profile */}
        <Box
          animation="slideRight"
          delay={0.4}
          hoverEffect="lift"
          className="flex items-center gap-4 mb-8 p-4 rounded-xl bg-neutral-800/30 border border-neutral-700/50 w-fit"
        >
          <Image
            src="/joshua-duncan.png"
            alt="Josh Duncan"
            width={56}
            height={56}
            className="rounded-full"
          />
          <div>
            <Body size="base" className="text-gray-300 font-semibold">Josh Duncan</Body>
            <Body size="sm" className="text-gray-500">Founder, DigitalNova Studio</Body>
          </div>
        </Box>

        {/* Contact options */}
        <Box animation="slideRight" delay={0.5} hoverEffect="none" className="space-y-3">
          {[
            { icon: Mail, text: "josh@digitalnovastudio.com", href: "mailto:josh@digitalnovastudio.com" },
            { icon: Phone, text: "(315) 276-5928", href: "tel:+13152765928" },
            { icon: Globe, text: "digitalnovastudio.com", href: "https://digitalnovastudio.com" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
            >
              <item.icon className="h-5 w-5 text-primary" />
              <Body size="base" as="span">{item.text}</Body>
            </a>
          ))}
        </Box>

        {/* Bottom steps */}
        <Box animation="fade" delay={0.7} hoverEffect="none" className="flex items-center gap-3 mt-10">
          <span className="px-3 py-1.5 rounded-full bg-neutral-800 text-gray-400 text-sm">1. Quick call</span>
          <ChevronRight className="h-4 w-4 text-gray-500" />
          <span className="px-3 py-1.5 rounded-full bg-neutral-800 text-gray-400 text-sm">2. Deposit</span>
          <ChevronRight className="h-4 w-4 text-gray-500" />
          <span className="px-3 py-1.5 rounded-full bg-neutral-800 text-gray-400 text-sm">3. We start building</span>
        </Box>
      </div>

      {/* Right side - Image */}
      <Box animation="fade" delay={0.4} hoverEffect="none" className="flex-1 h-full flex items-center">
        <Image
          src="/images/film/film-2.webp"
          alt="Film production"
          width={600}
          height={700}
          className="rounded-2xl border border-neutral-800 object-cover h-[85%] w-full"
        />
      </Box>
    </div>
  </Slide>,
];

export default slides;
