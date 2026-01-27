import Slide from "~/components/Slide";
import Image from "next/image";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import { Mail, Globe, Phone, Calendar } from "lucide-react";

export default function LetsBuildSlide({ slideNumber }: { slideNumber: number }) {
  const contactItems = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      text: "josh@digitalnovastudio.com",
      href: "mailto:josh@digitalnovastudio.com",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      text: "digitalnovastudio.com",
      href: "https://digitalnovastudio.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      text: "(315) 276-5928",
      href: "tel:+13152765928",
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

           
          {/* CTA Button */}
          <Box animation="slideUp" delay={0.5} hoverEffect="none" className="mb-20">
            <a
              href="https://cal.com/digitalnovastudio/follow-up"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-neutral-950 font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <Calendar className="h-5 w-5" />
              Schedule a Follow-Up Call
            </a>
          </Box>

            {/* Profile */}
         <Box animation="fade" delay={0.6} className="flex items-center gap-4 mb-8" hoverEffect="highlight">
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

          {/* Contact links */}
          <Box animation="slideUp" delay={0.4} className="space-y-5" hoverEffect="none">
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors"
              >
                {item.icon}
                <Body size="lg" as="span" className="hover:underline">
                  {item.text}
                </Body>
              </a>
            ))}
          </Box>

        </div>

        {/* Right side - Image */}
        <Box
          animation="fade"
          delay={0.4}
          hoverEffect="highlight"
          className="relative h-full max-w-2xl ml-auto z-10"
        >
          <Image
            src="/hero.jpg"
            alt="Hero Image"
            width={500}
            height={500}
            className="h-full object-cover border border-neutral-800 rounded-2xl shadow-xl"
          />
        </Box>
      </div>
    </Slide>
  );
}
