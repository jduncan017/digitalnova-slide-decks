import Slide from "~/components/Slide";
import {
  PageHeader,
  OverlappingShowcase,
} from "~/components/slide-components";

export default function OurWorkSlide({ slideNumber }: { slideNumber: number }) {
  // Portfolio items - brand proofs (left) paired with design proofs (right)
  const portfolioItems = [
    {
      id: "set-1",
      leftImage: "/brand-proofs/newflower.png",
      rightImage: "/design-proofs/newflower.png",
      leftLabel: "Brand Identity",
      rightLabel: "Web Design",
    },
    {
      id: "set-2",
      leftImage: "/brand-proofs/funnel.png",
      rightImage: "/design-proofs/scriber.png",
      leftLabel: "Web Branding",
      rightLabel: "Pricing Page",
    },
    {
      id: "set-3",
      leftImage: "/brand-proofs/values.png",
      rightImage: "/design-proofs/newflower-value-section.png",
      leftLabel: "Brand Identity",
      rightLabel: "Value Section",
    },
    {
      id: "set-4",
      leftImage: "/brand-proofs/who-what-why.png",
      rightImage: "/design-proofs/scriber2.jpeg",
      leftLabel: "Web Branding",
      rightLabel: "Service Header",
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center items-center">
        <PageHeader
          label="PORTFOLIO"
          title="WORK WE'VE SHIPPED"
          subtitle="Brand to website to conversion — the full stack."
        />

        {/* Overlapping showcase */}
        <OverlappingShowcase
          items={portfolioItems}
          autoPlay={true}
          autoPlayInterval={6000}
          className="w-full max-w-[1200px] my-4"
          leftTitle="Brand Design"
          rightTitle="Web Design"
          showArrows={true}
          showDots={false}
        />
      </div>
    </Slide>
  );
}
