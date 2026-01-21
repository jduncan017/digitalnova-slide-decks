import Slide from "~/components/Slide";
import Image from "next/image";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import { Mail, Globe, Phone } from "lucide-react";

export default function LetsBuildSlide({ slideNumber }: { slideNumber: number }) {
  const contactItems = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      text: "josh@digitalnovastudio.com",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      text: "digitalnovastudio.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      text: "(315) 276-5928",
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="h-full flex gap-20 items-center">
        {/* Left side - CTA text */}
        <div className="flex flex-col justify-center max-w-[640px]">
          <PageHeader
            label="QUESTIONS?"
            title="LET'S BUILD YOUR GROWTH SYSTEM"
            align="left"
          />

          <Box animation="slideUp" delay={0.4} className="space-y-6" hoverEffect="highlight">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                {item.icon}
                <Body size="lg" className="text-gray-300">
                  {item.text}
                </Body>
              </div>
            ))}
          </Box>

          {/* Profile */}
          <Box animation="fade" delay={0.6} className="mt-12 flex items-center gap-4" hoverEffect="highlight">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-700">
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
              <Body size="sm" className="text-gray-400">
                Founder, DigitalNova Studio
              </Body>
            </div>
          </Box>
        </div>

         {/* Right side - Image */}
         <Box
        animation="fade"
        delay={0.4}
        hoverEffect="highlight"
        className="relative h-full max-w-2xl ml-auto z-10"
      >
          <Image src="/hero.jpg" alt="Hero Image" width={500} height={500} className="h-full object-cover border border-neutral-700 rounded-2xl shadow-xl" />
      </Box>
      </div>
    </Slide>
  );
}
