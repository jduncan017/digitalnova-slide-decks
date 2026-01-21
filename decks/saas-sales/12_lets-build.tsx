import Slide from "~/components/Slide";
import Image from "next/image";
import {
  Heading,
  Body,
  Box,
  Grid,
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
