import Slide from "~/components/Slide";
import {
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import Image from "next/image";
import { TrendingUp, Globe, UserCircle, Target } from "lucide-react";
import { type ReactNode } from "react";

export default function YourSituationSlide({ slideNumber }: { slideNumber: number }) {
  const situations: { text: string; subtext: string; icon: ReactNode }[] = [
    {
      text: "$500k ARR, 100% word of mouth",
      subtext: "Impressive traction — you've proven product-market fit.",
      icon: <TrendingUp className="h-6 w-6 shrink-0 text-white" />
    },
    {
      text: "Ready to scale, but no marketing system",
      subtext: "Growth potential is there, you just need the engine.",
      icon: <Target className="h-6 w-6 shrink-0 text-white" />
    },
    {
      text: "No SEO, no email, no sitemap",
      subtext: "You're leaving organic growth completely on the table.",
      icon: <Globe className="h-6 w-6 shrink-0 text-white" />
    },
    {
      text: "Founder-led sales = bottleneck",
      subtext: "Growth only happens when you personally show up.",
      icon: <UserCircle className="h-6 w-6 shrink-0 text-white" />
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="h-full flex gap-0 items-center">
        {/* Left side - Content */}
        <div className="flex flex-col justify-center w-full max-w-[720px]">
          <PageHeader
            label="WHERE YOU ARE"
            title="Your Situation"
            subtitle="You've built something great. Now let's build the system to scale it."
            align="left"
            titleClassName="text-5xl"
          />

          <div className="space-y-4">
            {situations.map((situation, index) => (
              <Box
                key={index}
                animation="slideLeft"
                delay={0.3 + index * 0.08}
                className="flex items-start gap-4 py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                hoverEffect="none"
              >
                <div className="mt-1 p-2 rounded-lg bg-white/10">
                  {situation.icon}
                </div>
                <div>
                  <Body size="xl" className="text-white font-medium">
                    {situation.text}
                  </Body>
                  <Body size="base" className="text-white/60">
                    {situation.subtext}
                  </Body>
                </div>
              </Box>
            ))}
          </div>
        </div>

        {/* Right side - Image */}
        <Box
          animation="fade"
          delay={0.4}
          hoverEffect="none"
          className="relative h-full max-w-xl ml-auto z-10 flex items-center"
        >
          <div className="relative h-full">
            <Image
              src="/images/blue/blue-4.jpg"
              alt="Growth challenges"
              width={500}
              height={600}
              className="object-cover h-full border border-white/20 rounded-2xl shadow-2xl"
            />
            {/* Stats overlay */}
            <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-xl">
              <Body size="xs" className="text-white/60 uppercase tracking-wider mb-1">
                Goal
              </Body>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">Build the engine</span>
              </div>
              <span className="text-white/60 text-sm">{`so growth doesn't depend on referrals`}</span>
            </div>
          </div>
        </Box>
      </div>
    </Slide>
  );
}
