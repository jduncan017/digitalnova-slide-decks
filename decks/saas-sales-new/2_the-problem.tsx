import Slide from "~/components/Slide";
import {
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import Image from "next/image";
import { MousePointerClick, DollarSign, Calendar, UserX } from "lucide-react";
import { type ReactNode } from "react";

export default function TheProblemSlide({ slideNumber }: { slideNumber: number }) {
  const challenges: { text: string; subtext: string; icon: ReactNode }[] = [
    {
      text: "Traffic without traction",
      subtext: "Visitors browse, but never book a demo.",
      icon: <MousePointerClick className="h-6 w-6 shrink-0 text-primary" />
    },
    {
      text: "Ad spend with no payoff",
      subtext: "You're burning budget without seeing qualified leads.",
      icon: <DollarSign className="h-6 w-6 shrink-0 text-primary" />
    },
    {
      text: "Busy but not productive",
      subtext: "Calendar is packed, but the pipeline stays empty.",
      icon: <Calendar className="h-6 w-6 shrink-0 text-primary" />
    },
    {
      text: "You are the bottleneck",
      subtext: "Growth only happens when you personally show up.",
      icon: <UserX className="h-6 w-6 shrink-0 text-primary" />
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="h-full flex gap-0 items-center">
        {/* Left side - Content */}
        <div className="flex flex-col justify-center w-full max-w-[720px]">
          <PageHeader
            label="SOUND FAMILIAR?"
            title="These Patterns Kill Growth"
            subtitle="You've built something great. But getting people to see it — and buy it — is a different problem."
            align="left"
            titleClassName="text-5xl"
          />

          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <Box
                key={index}
                animation="slideLeft"
                delay={0.3 + index * 0.08}
                className="flex items-start gap-4 py-3 px-4 rounded-xl border border-transparent hover:border-neutral-800 transition-colors"
                hoverEffect="none"
              >
                <div className="mt-1 p-2 rounded-lg bg-primary/10">
                  {challenge.icon}
                </div>
                <div>
                  <Body size="xl" className="text-white font-medium">
                    {challenge.text}
                  </Body>
                  <Body size="base" className="text-gray-400">
                    {challenge.subtext}
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
              src="/hero5.jpg"
              alt="Growth challenges"
              width={500}
              height={600}
              className="object-cover h-full border border-neutral-800 rounded-2xl shadow-2xl"
            />
            {/* Stats overlay */}
            <div className="absolute -bottom-4 -left-4 bg-neutral-900 border border-neutral-700 rounded-xl p-4 shadow-xl">
              <Body size="xs" className="text-gray-500 uppercase tracking-wider mb-1">
                Average without a system
              </Body>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-red-400">2-3%</span>
                <span className="text-gray-400 text-sm">conversion rate</span>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </Slide>
  );
}
