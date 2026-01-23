import Slide from "~/components/Slide";
import {
  Body,
  Box,
  PageHeader,
  Carousel,
} from "~/components/slide-components";

export default function OurWorkSlide({ slideNumber }: { slideNumber: number }) {
  const projects = [
    {
      id: "scriber",
      name: "Scriber",
      description: "Website Design & Development",
    },
    {
      id: "truyoumed",
      name: "TruYouMed",
      description: "Brand Identity & Guidelines",
    },
    {
      id: "cloudsync",
      name: "CloudSync",
      description: "Landing Page & Paid Ads",
    },
    {
      id: "datapulse",
      name: "DataPulse",
      description: "Full Growth System",
    },
  ];

  const carouselItems = projects.map((project) => ({
    id: project.id,
    content: (
      <Box
        animation="none"
        variant="gradient"
        className="h-full flex flex-col items-center justify-center p-6 rounded-2xl"
      >
        {/* Placeholder image area */}
        <div className="w-full h-52 bg-neutral-800 rounded-xl mb-5 flex items-center justify-center border border-neutral-700">
          <div className="text-center">
            <div className="text-5xl text-neutral-600 mb-2">📷</div>
            <Body size="xs" className="text-neutral-500">
              Project Screenshot
            </Body>
          </div>
        </div>

        {/* Project info */}
        <div className="text-center">
          <Body size="lg" className="text-white font-semibold mb-1">
            {project.name}
          </Body>
          <Body size="sm" className="text-gray-400">
            {project.description}
          </Body>
        </div>
      </Box>
    ),
  }));

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader label="PORTFOLIO" title="OUR WORK" />

        {/* 3D Carousel */}
        <Carousel
          items={carouselItems}
          autoPlay={true}
          autoPlayInterval={5000}
          className="w-full max-w-[800px] mb-6"
        />

        {/* Bottom caption */}
        <Box animation="fade" delay={0.6} hoverEffect="none" className="text-center">
          <Body size="sm" className="text-gray-500 italic">
            {`Here's a few recent projects. Happy to walk through any of these.`}
          </Body>
        </Box>
      </div>
    </Slide>
  );
}
