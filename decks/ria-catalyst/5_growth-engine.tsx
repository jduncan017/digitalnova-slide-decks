"use client";

import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  PageHeader,
} from "~/components/slide-components";
import {
  Globe,
  FileText,
  Users,
  BookOpen,
  Calendar,
  Linkedin,
  Target,
  RefreshCw,
  TrendingUp
} from "lucide-react";

export default function GrowthEngineSlide({ slideNumber }: { slideNumber: number }) {
  const sitemapItems = [
    { page: "Homepage", purpose: "Clear value prop + primary CTA", icon: <Globe className="h-4 w-4" /> },
    { page: "Product / Platform", purpose: "Feature deep-dive for evaluators", icon: <FileText className="h-4 w-4" /> },
    { page: "Use Cases", purpose: "RIA vs PE firm positioning", icon: <Users className="h-4 w-4" /> },
    { page: "Case Studies", purpose: "Social proof for MDs", icon: <BookOpen className="h-4 w-4" /> },
    { page: "Blog / Resources", purpose: "SEO + thought leadership", icon: <FileText className="h-4 w-4" /> },
    { page: "Book a Demo", purpose: "Conversion endpoint", icon: <Calendar className="h-4 w-4" /> },
  ];

  const adsStrategy = [
    {
      title: "LinkedIn Ads",
      icon: <Linkedin className="h-5 w-5" />,
      details: "Primary channel for B2B corp dev"
    },
    {
      title: "ICP Targeting",
      icon: <Target className="h-5 w-5" />,
      details: "Corp dev titles at RIAs & PE firms"
    },
    {
      title: "Retargeting",
      icon: <RefreshCw className="h-5 w-5" />,
      details: "Site visitors → demo booking"
    },
    {
      title: "Content Ads",
      icon: <TrendingUp className="h-5 w-5" />,
      details: "Case studies + thought leadership"
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center">
        <PageHeader
          label="THE DETAILS"
          title="GROWTH ENGINE BREAKDOWN"
          subtitle="Website structure + paid acquisition working together."
          align="left"
        />

        <div className="flex gap-8 mt-2">
          {/* Left side - Sitemap */}
          <Box
            animation="slideLeft"
            delay={0.2}
            className="flex-1 h-fit p-6 bg-white/5 border border-white/10 rounded-2xl"
            hoverEffect="none"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-white/10">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <Heading level="h4" className="text-white">
                Website & Funnel
              </Heading>
            </div>

            <Body size="sm" className="text-white/50 uppercase tracking-wider mb-4">
              Sitemap Structure
            </Body>

            <div className="space-y-3 h-fit">
              {sitemapItems.map((item, index) => (
                <Box
                  key={index}
                  animation="fade"
                  delay={0.3 + index * 0.05}
                  className="flex items-center gap-3"
                  hoverEffect="none"
                >
                  <div className="p-1.5 rounded bg-white/10 text-white/70">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <Body size="sm" className="text-white font-medium">
                      {item.page}
                    </Body>
                    <Body size="xs" className="text-white/50">
                      {item.purpose}
                    </Body>
                  </div>
                </Box>
              ))}
            </div>
          </Box>

          {/* Right side - Paid Ads Strategy */}
          <Box
            animation="slideRight"
            delay={0.3}
            className="flex-1 p-6 bg-white/5 border border-white/10 rounded-2xl"
            hoverEffect="none"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-white/10">
                <Target className="h-5 w-5 text-white" />
              </div>
              <Heading level="h4" className="text-white">
                Paid Ads Strategy
              </Heading>
            </div>

            <Body size="sm" className="text-white/50 uppercase tracking-wider mb-4">
              LinkedIn-First Approach
            </Body>

            <div className="space-y-4">
              {adsStrategy.map((item, index) => (
                <Box
                  key={index}
                  animation="fade"
                  delay={0.4 + index * 0.08}
                  hoverEffect="none"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/10 text-white">
                      {item.icon}
                    </div>
                    <div>
                      <Body size="sm" className="text-white mb-1">
                        {item.title}
                      </Body>
                      <Body size="xs" className="text-white/60">
                        {item.details}
                      </Body>
                    </div>
                  </div>
                </Box>
              ))}
            </div>
          </Box>
        </div>
      </div>
    </Slide>
  );
}
