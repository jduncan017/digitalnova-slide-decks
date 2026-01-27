import Slide from "~/components/Slide";
import {
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import Image from "next/image";
import { MousePointerClick, DollarSign, TrendingDown, Calendar, UserX } from "lucide-react";
import { type ReactNode } from "react";

export default function TheProblemSlide({ slideNumber }: { slideNumber: number }) {
  const challenges: { text: string; icon: ReactNode }[] = [
    {
      text: "A website that gets traffic but not demos",
      icon: <MousePointerClick className="h-7 w-7 shrink-0 text-primary" />
    },
    {
      text: "Ad spend that burns cash without ROI",
      icon: <DollarSign className="h-7 w-7 shrink-0 text-primary" />
    },
    {
      text: "Growth that stalls between $10K and $100K MRR",
      icon: <TrendingDown className="h-7 w-7 shrink-0 text-primary" />
    },
    {
      text: "Your calendar is full of calls, but your pipeline isn't",
      icon: <Calendar className="h-7 w-7 shrink-0 text-primary" />
    },
    {
      text: "Growth depends on you personally showing up",
      icon: <UserX className="h-7 w-7 shrink-0 text-primary" />
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="h-full flex gap-20 items-center">
        {/* Left side - Content */}
        <div className="flex flex-col justify-center w-full max-w-[640px] mx-auto">
          <PageHeader
            label="SOUND FAMILIAR?"
            title="Common Growth Challenges"
            subtitle="Great products don't sell themselves. These are the patterns we see most often."
            align="left"
            titleClassName="text-5xl"
          />

          <div className="space-y-5">
            {challenges.map((challenge, index) => (
              <Box
                key={index}
                animation="slideLeft"
                delay={0.3 + index * 0.08}
                className="flex items-center gap-4"
                hoverEffect="highlight"
              >
                {challenge.icon}
                <Body size="xl" className="text-gray-300">
                  {challenge.text}
                </Body>
              </Box>
            ))}
          </div>
        </div>

        {/* Right side - Image placeholder */}
        <Box
        animation="fade"
        delay={0.4}
        hoverEffect="highlight"
        className="relative h-full max-w-2xl ml-auto z-10"
      >
          <Image src="/hero5.jpg" alt="Hero Image" width={500} height={500} className="h-full object-cover border border-neutral-800 rounded-2xl shadow-xl" />
      </Box>
      </div>
    </Slide>
  );
}
