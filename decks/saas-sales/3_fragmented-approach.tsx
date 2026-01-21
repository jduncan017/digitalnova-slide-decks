import Slide from "~/components/Slide";
import {
  Heading,
  Body,
  Label,
  Box,
  Grid,
  AccentBox,
} from "~/components/slide-components";

export default function FragmentedApproachSlide({ slideNumber }: { slideNumber: number }) {
  return (
    <Slide showLogo slideNumber={slideNumber}>
      <Grid cols={2} gap={12} className="w-full max-w-6xl" animation="none">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center">
          <Box animation="slideRight" delay={0.2}>
            <Label className="mb-4 text-purple-400">WHY THIS KEEPS HAPPENING</Label>
            <Heading level="h2" className="mb-8 leading-tight text-white">
              THE
              <br />
              FRAGMENTED
              <br />
              APPROACH
            </Heading>
            <Body size="lg" className="mb-6 text-slate-300">
              Most companies hire disjointed specialists who operate in silos:
            </Body>
            <ul className="mb-8 space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-purple-400">•</span>
                <span>A brand designer (who doesn&apos;t understand conversion)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-purple-400">•</span>
                <span>A web developer (who doesn&apos;t understand marketing)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  A marketing agency (who blames your website when ads don&apos;t
                  work)
                </span>
              </li>
            </ul>

            <AccentBox title="THE RESULT" animation="slideUp" delay={0.8}>
              <Body className="text-white">
                You spend $15-30K and still don&apos;t have a system that generates
                qualified demos consistently.
              </Body>
            </AccentBox>
          </Box>
        </div>

        {/* Right side - Diagram */}
        <div className="flex items-center justify-center">
          <Box animation="fade" delay={0.5}>
            <div className="relative h-96 w-full max-w-md">
              {/* Ads circle - top left */}
              <Box
                animation="scale"
                delay={0.6}
                className="absolute top-0 left-12 flex h-40 w-40 flex-col items-center justify-center gap-1 rounded-full border-2 border-slate-600 bg-slate-800/50 p-4"
              >
                <svg
                  className="h-12 w-12 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
                <span className="font-semibold text-white">Ads</span>
                <span className="text-center text-slate-500">
                  &quot;Traffic but no conversion&quot;
                </span>
              </Box>

              {/* Website circle - top right */}
              <Box
                animation="scale"
                delay={0.7}
                className="absolute top-0 right-12 flex h-40 w-40 flex-col items-center justify-center gap-1 rounded-full border-2 border-slate-600 bg-slate-800/50 p-4"
              >
                <svg
                  className="h-12 w-12 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <span className="font-semibold text-white">Website</span>
                <span className="text-center text-slate-500">
                  &quot;Code works but no leads&quot;
                </span>
              </Box>

              {/* Brand circle - bottom center */}
              <Box
                animation="scale"
                delay={0.8}
                className="absolute bottom-0 left-1/2 flex h-40 w-40 -translate-x-1/2 flex-col items-center justify-center gap-1 rounded-full border-2 border-slate-600 bg-slate-800/50 p-4"
              >
                <svg
                  className="h-12 w-12 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <span className="font-semibold text-white">Brand</span>
                <span className="text-center text-slate-500">
                  &quot;Looks good but no strategy&quot;
                </span>
              </Box>

              {/* Disconnection X marks */}
              <div className="absolute top-32 left-32 flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                <svg
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="absolute top-32 right-32 flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                <svg
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </Box>
        </div>
      </Grid>
    </Slide>
  );
}
