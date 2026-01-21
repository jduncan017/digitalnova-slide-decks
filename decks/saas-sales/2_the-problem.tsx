import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Label,
  Box,
} from "~/components/slide-components";
import Image from "next/image";

export default function TheProblemSlide({ slideNumber }: { slideNumber: number }) {
  const problems = [
    { text: "Founder-led sales doesn't scale" },
    { text: "Your website doesn't convert visitors" },
    { text: "You've tried ads but the cost-per-demo was brutal" },
    { text: "You're stuck between $10K and $100K MRR" },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="h-full flex gap-10 items-center">
        {/* Left side - Content */}
        <div className="flex flex-col justify-center w-full mx-auto">
          <Box animation="slideRight" delay={0.2} hoverEffect="highlight">
            <Label className="mb-4 text-slate-500">THE PROBLEM</Label>

            <Heading level="h1" className="mb-8 text-primary">
              Inconsistent Pipeline
            </Heading>

            <Heading level="h3" className="mb-12 text-slate-300">
              You&apos;ve built an incredible product. But your pipeline is
              inconsistent.
            </Heading>
          </Box>

          <div className="space-y-4">
            {problems.map((problem, index) => (
              <Box
                key={index}
                animation="slideLeft"
                delay={0.4 + index * 0.1}
                className="flex items-start gap-4"
                hoverEffect="highlight"
              >
                <svg
                  className="mt-1 h-6 w-6 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <Body size="lg" className="text-slate-300">
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
          <Image src="/hero4.jpg" alt="Hero Image" width={1000} height={1000} className="h-full object-cover border border-neutral-700" />
      </Box>
      </div>
    </Slide>
  );
}
