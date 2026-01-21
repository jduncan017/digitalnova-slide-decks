import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Box,
  Grid,
  PageHeader,
} from "~/components/slide-components";
import { Zap, BarChart3, Settings, Palette, Check } from "lucide-react";

export default function IncludedServicesSlide({ slideNumber }: { slideNumber: number }) {
  const serviceCategories = [
    {
      title: "PAID ACQUISITION",
      icon: <Zap className="h-10 w-10" />,
      items: [
        "Google Ads campaign management",
        "Keyword research & expansion",
        "Ad creative & copywriting",
        "Conversion tracking setup",
      ],
    },
    {
      title: "PERFORMANCE OPTIMIZATION",
      icon: <BarChart3 className="h-10 w-10" />,
      items: [
        "Weekly performance reports",
        "A/B testing (copy, creative, offers)",
        "Cost-per-demo tracking",
        "Quarterly planning",
      ],
    },
    {
      title: "TECHNICAL MANAGEMENT",
      icon: <Settings className="h-10 w-10" />,
      items: [
        "CRM integration (HubSpot, Salesforce)",
        "Demo booking automation",
        "Website performance monitoring",
        "SEO maintenance",
      ],
    },
    {
      title: "CREATIVE ASSETS",
      icon: <Palette className="h-10 w-10" />,
      items: [
        "Ad creative (images, headlines)",
        "Landing page design",
        "Pitch deck updates",
        "Social proof optimization",
      ],
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center px-16">
        <PageHeader label="WHAT YOU GET (ONGOING)" title="INCLUDED SERVICES" />

        {/* Service grid - 2 columns */}
        <Grid cols={2} gap={4} animation="none">
          {serviceCategories.map((category, index) => (
            <Box
              key={index}
              animation="slideUp"
              delay={0.4 + index * 0.1}
              variant="gradient"
              className="h-full p-8"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  {category.icon}
                </div>
                <Heading level="h3" className="text-xl font-bold text-white">
                  {category.title}
                </Heading>
              </div>

              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <Body size="sm" as="span">{item}</Body>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Grid>
      </div>
    </Slide>
  );
}
