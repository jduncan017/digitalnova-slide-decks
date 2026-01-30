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
  Radio,
  Headphones,
  Users,
  Truck,
  Check,
  Sparkles,
  Volume2,
  VolumeX,
  Zap,
  MessageSquare,
  Camera,
  Target,
  TrendingUp,
  PartyPopper,
  Mic,
  Mail,
  Phone,
  Globe,
} from "lucide-react";

// ============================================
// SLIDE 1: Hero
// ============================================
const HeroSlide = (
  <Slide key="hero" showLogo={false}>
    <div className="h-full flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Image
          src="/logos/cifernoise.webp"
          alt="Cifernoise"
          width={280}
          height={90}
          className="object-contain"
        />
      </motion.div>

      <Box animation="slideUp" delay={0.3} hoverEffect="none">
        <Heading level="h1" className="text-gray-300 mb-4">
          Silent Disco Experience
        </Heading>
      </Box>

      <Box animation="slideUp" delay={0.5} hoverEffect="none">
        <Body size="xl" className="text-purple-300 mb-2">
          Make Your Product Launch Unforgettable
        </Body>
      </Box>

      <Box animation="fade" delay={0.7} hoverEffect="none">
        <Body size="base" className="text-gray-500">
          A proposal for your 3-day medical device convention
        </Body>
      </Box>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4"
      >
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-primary" style={{ opacity: 0.3 + i * 0.15 }} />
        ))}
      </motion.div>
    </div>
  </Slide>
);

// ============================================
// SLIDE 2: The Opportunity
// ============================================
const OpportunitySlide = (
  <Slide key="opportunity" showLogo={false} slideNumber={2}>
    <div className="absolute top-5 right-6 z-10">
      <Image src="/logos/cifernoise.webp" alt="Cifernoise" width={120} height={40} className="object-contain" />
    </div>

    <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
      <PageHeader
        label="THE OPPORTUNITY"
        title="Stand Out at Your Convention"
        subtitle="Your product launch deserves more than a standard booth experience."
        align="left"
        className="mb-8"
      />

      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: Target, title: "Capture Attention", description: "In a sea of booths and presentations, silent disco creates an unmissable experience that draws crowds." },
          { icon: MessageSquare, title: "Drive Conversations", description: "Attendees naturally want to talk about what they just experienced—your product becomes the story they tell." },
          { icon: TrendingUp, title: "Amplify Your Launch", description: "Transform a product demo into an event. Give attendees a reason to seek you out." },
        ].map((item, i) => (
          <Box key={i} animation="slideUp" delay={0.3 + i * 0.1} hoverEffect="lift" className="p-5 rounded-xl bg-neutral-800/50 border border-neutral-700">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <Heading level="h5" className="text-gray-300 mb-2">{item.title}</Heading>
            <Body size="sm" className="text-gray-400">{item.description}</Body>
          </Box>
        ))}
      </div>

      <Box animation="fade" delay={0.7} hoverEffect="none" className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/30">
        <Body size="base" className="text-gray-300 text-center">
          <span className="text-primary font-semibold">The goal:</span> Make your new product the most talked-about thing at the convention.
        </Body>
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 3: Why Silent Disco
// ============================================
const WhySilentDiscoSlide = (
  <Slide key="why" showLogo={false} slideNumber={3}>
    <div className="absolute top-5 right-6 z-10">
      <Image src="/logos/cifernoise.webp" alt="Cifernoise" width={120} height={40} className="object-contain" />
    </div>

    <div className="h-full flex flex-col justify-center">
      <PageHeader label="WHY SILENT DISCO" title="The Perfect Convention Feature" align="center" className="mb-6" />

      <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto">
        <Box animation="slideLeft" delay={0.2} hoverEffect="none" className="space-y-2.5">
          {[
            { icon: VolumeX, title: "Zero Noise Pollution", desc: "Doesn't disturb neighboring booths or presentations" },
            { icon: Volume2, title: "Multiple Channels", desc: "Product info on one channel, celebration music on another" },
            { icon: Users, title: "Inclusive Experience", desc: "Attendees control their own volume—accessibility built in" },
            { icon: Camera, title: "Social Media Gold", desc: "Unique visuals that attendees will share organically" },
            { icon: Zap, title: "Instant Energy", desc: "Transform any moment into an engaging, high-energy experience" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.08 }} className="flex items-start gap-3 p-2.5 rounded-lg bg-neutral-800/30">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <item.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <Body size="sm" className="text-gray-300 font-medium">{item.title}</Body>
                <Body size="xs" className="text-gray-500">{item.desc}</Body>
              </div>
            </motion.div>
          ))}
        </Box>

        <Box animation="slideRight" delay={0.3} hoverEffect="none" className="p-5 rounded-xl bg-primary/10 border border-primary/30">
          <Label className="text-primary mb-4">PERFECT FOR YOUR LAUNCH</Label>
          <div className="space-y-4">
            {[
              { time: "Product Reveal", desc: "Build anticipation with synchronized audio countdown, then drop into celebration mode" },
              { time: "Networking Hours", desc: "Keep energy high during evening events without overwhelming conversation" },
              { time: "Demo Sessions", desc: "Broadcast detailed product info to engaged listeners while others enjoy ambient music" },
              { time: "VIP Experience", desc: "Create an exclusive 'in the know' feeling for your most important attendees" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}>
                <Body size="sm" className="text-purple-300 font-medium">{item.time}</Body>
                <Body size="xs" className="text-gray-400">{item.desc}</Body>
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
      <Image src="/logos/cifernoise.webp" alt="Cifernoise" width={120} height={40} className="object-contain" />
    </div>

    <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
      <PageHeader label="THE PACKAGE" title="Everything You Need" subtitle="Full-service silent disco experience, handled end-to-end." align="center" className="mb-6" />

      <div className="grid grid-cols-4 gap-4">
        {[
          { icon: Headphones, title: "Premium Headphones", items: ["LED color-changing", "3-channel switching", "Comfortable for hours", "Fully sanitized"] },
          { icon: Radio, title: "Pro Transmitters", items: ["Crystal clear audio", "500+ ft range", "Multiple channels", "Backup units included"] },
          { icon: Users, title: "Expert Staff", items: ["Setup & breakdown", "On-site management", "Troubleshooting", "Guest assistance"] },
          { icon: Mic, title: "Full Support", items: ["Audio source hookup", "Channel programming", "Real-time adjustments", "Post-event pickup"] },
        ].map((item, i) => (
          <Box key={i} animation="slideUp" delay={0.2 + i * 0.1} hoverEffect="lift" className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <Heading level="h6" className="text-gray-300 mb-3">{item.title}</Heading>
            <ul className="space-y-1.5">
              {item.items.map((li, j) => (
                <li key={j} className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-primary shrink-0" />
                  <Body size="xs" className="text-gray-400">{li}</Body>
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </div>

      <Box animation="fade" delay={0.7} hoverEffect="none" className="mt-5 text-center">
        <Body size="sm" className="text-gray-500">
          <span className="text-purple-300">Bonus:</span> We can color-match LED headphones to your brand for an extra-cohesive look.
        </Body>
      </Box>
    </div>
  </Slide>
);

// ============================================
// SLIDE 5: Pricing Comparison
// ============================================
const packages = [
  { name: "Standard Package", headphones: 450, transmitters: 8, staff: 5, days: [{ day: 1, rate: 10.50 }, { day: 2, rate: 8.50 }, { day: 3, rate: 6.50 }] },
  { name: "Large Package", headphones: 660, transmitters: 9, staff: 7, recommended: true, days: [{ day: 1, rate: 10.50 }, { day: 2, rate: 8.50 }, { day: 3, rate: 6.50 }] },
];
const shipping = 450;

const PricingSlide = (
  <Slide key="pricing" showLogo={false} slideNumber={5}>
    <div className="absolute top-5 right-6 z-10">
      <Image src="/logos/cifernoise.webp" alt="Cifernoise" width={120} height={40} className="object-contain" />
    </div>

    <div className="h-full flex flex-col justify-center">
      <div className="text-center mb-3">
        <Label className="text-primary mb-1">INVESTMENT</Label>
        <Heading level="h3" className="text-gray-300 mb-0.5">Choose Your Package</Heading>
        <Body size="sm" className="text-gray-500">3-Day Event • Multi-day discounts included</Body>
      </div>

      <div className="grid grid-cols-2 gap-3 max-w-5xl mx-auto w-full">
        {packages.map((pkg, pkgIndex) => {
          const laborPerDay = pkg.staff * 50 * 12;
          const dailyTotals = pkg.days.map(d => ({ ...d, headphoneCost: pkg.headphones * d.rate, total: pkg.headphones * d.rate + laborPerDay }));
          const threeDayTotal = dailyTotals.reduce((sum, d) => sum + d.total, 0);
          const transmitterCost = pkg.transmitters * 100;
          const grandTotal = threeDayTotal + transmitterCost + shipping;
          const baseDayCost = pkg.headphones * 10.50 + laborPerDay;
          const savings = (baseDayCost * 3) - threeDayTotal;

          return (
            <Box key={pkgIndex} animation="slideUp" delay={0.1 + pkgIndex * 0.15} hoverEffect="none" className={`p-3 rounded-xl relative ${pkg.recommended ? "bg-primary/10 border-2 border-primary" : "bg-neutral-800/50 border border-neutral-700"}`}>
              {pkg.recommended && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wide">Recommended</div>}

              <div className="text-center mb-2 pt-0.5">
                <Heading level="h5" className="text-gray-300">{pkg.name}</Heading>
                <Body size="xs" className="text-purple-300">{pkg.headphones} Headphones • {pkg.transmitters} Transmitters • {pkg.staff} Staff</Body>
              </div>

              <div className="space-y-1.5 mb-2">
                {dailyTotals.map((day, dayIndex) => (
                  <div key={dayIndex} className="bg-neutral-900/50 rounded-lg p-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Body size="xs" className="text-gray-300 font-medium">Day {day.day}</Body>
                      {day.rate < 10.50 && <span className="text-[9px] px-1 py-0.5 rounded bg-purple-400/20 text-purple-300">-${(10.50 - day.rate).toFixed(2)}/headphone</span>}
                    </div>
                    <div className="space-y-0.5 text-[11px]">
                      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-1">
                        <span className="flex items-center gap-1 text-purple-300"><Headphones className="h-2.5 w-2.5" /> Headphones</span>
                        <span className="text-gray-500 text-center">{pkg.headphones} × ${day.rate.toFixed(2)}</span>
                        <span className="text-gray-300 text-right">${day.headphoneCost.toLocaleString()}</span>
                      </div>
                      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-1">
                        <span className="flex items-center gap-1 text-purple-300"><Users className="h-2.5 w-2.5" /> Labor</span>
                        <span className="text-gray-500 text-center">{pkg.staff} × $50/hr × 12hrs</span>
                        <span className="text-gray-300 text-right">${laborPerDay.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-1.5 pt-1.5 border-t border-neutral-700">
                      <Body size="xs" className="text-gray-500">Subtotal</Body>
                      <Body size="xs" className="text-primary font-semibold">${day.total.toLocaleString()}</Body>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center py-1.5 border-t border-neutral-700">
                <Body size="xs" className="text-gray-400">3-Day Subtotal</Body>
                <Body size="sm" className="text-gray-300 font-semibold">${threeDayTotal.toLocaleString()}</Body>
              </div>

              <div className="space-y-1 py-1.5 border-t border-neutral-700 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-gray-500"><Radio className="h-2.5 w-2.5" /> Transmitters ({pkg.transmitters} × $100)</span>
                  <span className="text-gray-400">${transmitterCost.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-gray-500"><Truck className="h-2.5 w-2.5" /> Shipping & Handling</span>
                  <span className="text-gray-400">${shipping}</span>
                </div>
              </div>

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

      <div className="mt-3 max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-center gap-5">
          <Body size="xs" className="text-gray-500 uppercase tracking-wider">Includes:</Body>
          {["Setup & breakdown", "Staff management", "Equipment testing", "On-site support"].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.05 }} className="flex items-center gap-1">
              <Check className="h-2.5 w-2.5 text-primary" />
              <Body size="xs" className="text-gray-400">{item}</Body>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Slide>
);

// ============================================
// SLIDE 6: CTA
// ============================================
const CTASlide = (
  <Slide key="cta" showLogo={false} slideNumber={6}>
    <div className="h-full flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="mb-6">
          <Image src="/logos/cifernoise.webp" alt="Cifernoise" width={200} height={65} className="object-contain mx-auto" />
        </motion.div>

        <Box animation="slideUp" delay={0.2} hoverEffect="none">
          <Label className="text-primary mb-3">LET'S MAKE IT HAPPEN</Label>
          <Heading level="h2" className="text-gray-300 mb-4">Ready to Elevate Your Launch?</Heading>
          <Body size="lg" className="text-gray-400 mb-8">Let's discuss how silent disco can make your product the star of the convention.</Body>
        </Box>

        <Box animation="slideUp" delay={0.4} hoverEffect="none" className="mb-8">
          <div className="flex items-center justify-center gap-8">
            {[
              { icon: Mail, text: "events@cifernoise.com", href: "mailto:events@cifernoise.com" },
              { icon: Phone, text: "(555) 123-4567", href: "tel:+15551234567" },
              { icon: Globe, text: "cifernoise.com", href: "https://cifernoise.com" },
            ].map((item, i) => (
              <motion.a key={i} href={item.href} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                <item.icon className="h-5 w-5 text-primary" />
                <Body size="base" as="span">{item.text}</Body>
              </motion.a>
            ))}
          </div>
        </Box>

        <Box animation="fade" delay={0.8} hoverEffect="none" className="p-5 rounded-xl bg-primary/10 border border-primary/30">
          <div className="flex items-center justify-center gap-3">
            <PartyPopper className="h-6 w-6 text-primary" />
            <Body size="lg" className="text-gray-300">
              Book by <span className="text-primary font-semibold">February 15th</span> and receive complimentary branded headphone stickers.
            </Body>
          </div>
        </Box>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.2 }} className="mt-8">
          <Body size="sm" className="text-gray-500 italic">"The silent disco was the highlight of our entire conference. People couldn't stop talking about it."</Body>
          <Body size="xs" className="text-gray-600 mt-1">— Previous Client, Healthcare Industry Convention</Body>
        </motion.div>
      </div>
    </div>
  </Slide>
);

// ============================================
// EXPORT ALL SLIDES
// ============================================
const slides = [
  HeroSlide,
  OpportunitySlide,
  WhySilentDiscoSlide,
  WhatYouGetSlide,
  PricingSlide,
  CTASlide,
];

export default slides;
