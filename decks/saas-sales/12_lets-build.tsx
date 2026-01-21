import Slide from "~/components/Slide";
import Image from "next/image";
import {
  Heading,
  Body,
  Box,
  Grid,
  PageHeader,
} from "~/components/slide-components";

export default function LetsBuildSlide({ slideNumber }: { slideNumber: number }) {
  const contactItems = [
    {
      icon: (
        <svg
          className="h-6 w-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      text: "josh@digitalnovastudio.com",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      text: "digitalnovastudio.com",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      text: "(315) 276-5928",
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <Grid cols={2} gap={16} className="h-full" animation="none">
        {/* Left side - CTA text */}
        <div className="flex flex-col justify-center pl-16">
          <PageHeader
            label="QUESTIONS?"
            title="LET'S BUILD YOUR GROWTH SYSTEM"
            align="left"
          />

          <Box animation="slideUp" delay={0.4} className="space-y-6" hoverEffect="highlight">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                {item.icon}
                <Body size="lg" className="text-slate-300">
                  {item.text}
                </Body>
              </div>
            ))}
          </Box>

          {/* Profile */}
          <Box animation="fade" delay={0.6} className="mt-12 flex items-center gap-4" hoverEffect="highlight">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-700">
              <Image
                src="/joshua-duncan.png"
                alt="Joshua Duncan"
                className="rounded-full"
                width={100}
                height={100}
              />
            </div>
            <div>
              <Heading level="h3" className="text-xl font-bold text-white">
                Josh Duncan
              </Heading>
              <Body size="sm" className="text-slate-400">
                Founder, DigitalNova Studio
              </Body>
            </div>
          </Box>
        </div>

        {/* Right side - Image placeholder */}
        <Box
          animation="fade"
          delay={0.5}
          hoverEffect="highlight"
          className="flex items-center justify-center rounded-2xl bg-linear-to-br from-slate-700 to-slate-800"
        >
          <div className="text-center text-slate-600">
            <Image
              src="/joshua-duncan.png"
              alt="Team Photo"
              width={120}
              height={120}
            />
          </div>
        </Box>
      </Grid>
    </Slide>
  );
}
