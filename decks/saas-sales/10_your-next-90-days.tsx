import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Label,
  Box,
} from "~/components/slide-components";

export default function YourNext90DaysSlide({ slideNumber }: { slideNumber: number }) {
  const timeline = [
    {
      label: "TODAY",
      title: "KICKOFF & COMMITMENT",
      amount: "$1,000 Deposit",
      amountColor: "text-emerald-400",
      items: [
        "Discovery call completion",
        "Project kickoff scheduled",
        "Access & asset request",
      ],
      color: "border-purple-500",
    },
    {
      label: "WEEK 1-2",
      title: "STRATEGY PHASE",
      items: [
        "Competitive analysis",
        "Messaging workshop",
        "Wireframe approval",
        "Content gathering",
      ],
      color: "border-slate-600",
    },
    {
      label: "WEEK 3-6",
      title: "WEBSITE BUILD",
      amount: "$4,000 Due",
      amountColor: "text-emerald-400",
      items: [
        "Design review (Week 3)",
        "Development (Week 4-5)",
        "Site Launch (Week 6)",
        "Training session",
      ],
      color: "border-slate-600",
    },
    {
      label: "WEEK 7-8",
      title: "ADS LAUNCH",
      amount: "$1,500 Due",
      amountColor: "text-emerald-400",
      items: [
        "Campaign setup & targeting",
        "Ads go live",
        "Weekly reporting starts",
      ],
      color: "border-slate-600",
    },
    {
      label: "WEEK 9-12",
      title: "OPTIMIZE & SCALE",
      items: [
        "A/B testing running",
        "Cost-per-demo optimization",
        "Monthly strategy call",
        "Scale winning campaigns",
      ],
      color: "border-slate-600",
    },
  ];

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full flex-col">
        {/* Main content */}
        <div className="flex flex-1 items-center justify-center px-12 pt-20 pb-12">
          <div className="w-full max-w-7xl">
            <Box animation="slideDown" delay={0.2}>
              <Label className="mb-3">TIMELINE</Label>
              <Heading level="h2" className="mb-12">
                YOUR NEXT 90 DAYS
              </Heading>
            </Box>

            {/* Timeline */}
            <div className="space-y-6">
              {timeline.map((phase, index) => (
                <Box key={index} animation="slideLeft" delay={0.3 + index * 0.1}>
                  <div className="flex items-start gap-6">
                    {/* Timeline indicator */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          index === 0 ? "bg-purple-500" : "bg-slate-600"
                        }`}
                      ></div>
                      {index < timeline.length - 1 && (
                        <div className="mt-2 h-full w-0.5 bg-slate-700"></div>
                      )}
                    </div>

                    {/* Content */}
                    <Box className="flex-1 pb-4">
                      <div className="rounded-r-lg border-l-4 border-slate-700 bg-slate-800/50 p-5">
                        <div className="mb-4 flex items-start justify-between">
                          <div>
                            <Label
                              className={`mb-1 ${
                                index === 0 ? "text-purple-400" : "text-slate-500"
                              }`}
                            >
                              {phase.label}
                            </Label>
                            <Heading level="h4" className="font-bold text-white">
                              {phase.title}
                            </Heading>
                          </div>
                          {phase.amount && (
                            <div
                              className={`${phase.amountColor} rounded bg-emerald-500/10 px-3 py-1 font-bold`}
                            >
                              {phase.amount}
                            </div>
                          )}
                        </div>

                        <ul className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-4">
                          {phase.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2 text-slate-300"
                            >
                              <span className="mt-0.5 text-purple-400">•</span>
                              <Body size="sm" as="span">{item}</Body>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Box>
                  </div>
                </Box>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
