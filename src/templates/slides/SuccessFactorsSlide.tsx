"use client";

import Slide from "~/components/Slide";
import {
  Body,
  Box,
  Grid,
  PageHeader,
} from "~/components/slide-components";
import { CheckCircle } from "lucide-react";
import type { SuccessFactorsSlideContent } from "../types";

interface SuccessFactorsSlideProps {
  content: SuccessFactorsSlideContent;
  slideNumber: number;
}

export default function SuccessFactorsSlide({ content, slideNumber }: SuccessFactorsSlideProps) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label={content.label}
          title={content.title}
          subtitle={content.subtitle}
        />

        {/* Success factors */}
        <Grid cols={2} gap={8} animation="none" className="max-w-[1000px] mb-12">
          {content.factors.map((item, index) => (
            <Box
              key={index}
              animation="slideUp"
              delay={0.3 + index * 0.1}
              variant="gradient"
              className="flex items-center gap-4 p-6"
            >
              <CheckCircle className="h-7 w-7 shrink-0 text-primary" />
              <div className="flex flex-col gap-1">
                <Body size="base" className="text-gray-300 font-medium">{item.factor}</Body>
                <Body size="sm" className="text-gray-400">{item.result}</Body>
              </div>
            </Box>
          ))}
        </Grid>

        {/* Key differentiator */}
        {content.differentiator && (
          <Box
            animation="fade"
            delay={0.8}
            variant="highlight"
            className="flex items-center gap-4 px-8 py-5"
          >
            <Body size="lg" className="text-gray-300 text-center">
              {content.differentiator.text}{" "}
              <span className="text-primary font-semibold">{content.differentiator.highlight}</span>
            </Body>
          </Box>
        )}
      </div>
    </Slide>
  );
}
