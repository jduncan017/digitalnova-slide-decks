"use client";

import Slide from "~/components/Slide";
import {
  PageHeader,
  OverlappingShowcase,
} from "~/components/slide-components";
import type { PortfolioSlideContent } from "../types";

interface PortfolioSlideProps {
  content: PortfolioSlideContent;
  slideNumber: number;
}

export default function PortfolioSlide({ content, slideNumber }: PortfolioSlideProps) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label={content.label}
          title={content.title}
          subtitle={content.subtitle}
        />

        {/* Overlapping showcase */}
        <OverlappingShowcase
          items={content.items}
          autoPlay={true}
          autoPlayInterval={6000}
          className="w-full max-w-[1200px] my-4"
          leftTitle={content.leftTitle ?? "Brand Design"}
          rightTitle={content.rightTitle ?? "Web Design"}
          showArrows={true}
          showDots={false}
        />
      </div>
    </Slide>
  );
}
