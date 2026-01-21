import {
  Logo,
  Heading,
  Body,
  Box,
} from "~/components/slide-components";
import Image from "next/image";

export default function HeroSlide() {
  return (
    <div className="h-full flex gap-10 items-center">
      {/* Left side - Content */}
      <div className="flex flex-col justify-center items-center w-full mx-auto pl-20 pb-28">
        <div className="w-full max-w-2xl">

        <Logo animation="slideDown" delay={0} height={90} />

        <Box animation="slideUp" delay={0.2} hoverEffect="highlight" className="mt-8">
          <Heading level="h1" className="mb-6 text-white">
            SaaS Growth System
          </Heading>

          <Heading level="h3" className="mb-8 text-slate-300">
            Predictable Growth for SaaS Companies
          </Heading>

          <Body size="lg" className="text-slate-400">
            Prepared by: Joshua Duncan
          </Body>

          <Body size="lg" className="text-slate-400">
            Brand Strategy • Website Development • Paid Acquisition
          </Body>
        </Box>
        </div>
      </div>

      {/* Right side - Image placeholder */}
      <Box
        animation="none"
        hoverEffect="none"
        className="relative h-full max-w-2xl ml-auto z-10"
      >
          <Image src="/hero4.jpg" alt="Hero Image" width={1000} height={1000} className="h-full object-cover border border-neutral-700" />
      </Box>
    </div>
  );
}
