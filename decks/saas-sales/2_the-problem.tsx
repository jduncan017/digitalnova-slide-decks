import Slide from "~/components/Slide";
import {
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";

export default function TheProblemSlide({ slideNumber }: { slideNumber: number }) {
  const problems = [
    { text: "Founder-led sales doesn't scale" },
    { text: "Your website doesn't convert visitors" },
    { text: "You've tried ads but the cost-per-demo was brutal" },
    { text: "You're stuck between $10K and $100K MRR" },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="h-full flex gap-20 items-center">
        {/* Left side - Content */}
        <div className="flex flex-col justify-center w-full max-w-[640px] mx-auto">
          <PageHeader
            label="THE PROBLEM"
            title="Inconsistent Pipeline"
            subtitle="You've built an incredible product. But your pipeline is inconsistent."
            align="left"
          />

          <div className="space-y-4">
            {problems.map((problem, index) => (
              <Box
                key={index}
                animation="slideLeft"
                delay={0.4 + index * 0.1}
                className="flex items-start gap-4"
                hoverEffect="highlight"
              >
                <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <Body size="lg" className="text-gray-300">
                  {problem.text}
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
