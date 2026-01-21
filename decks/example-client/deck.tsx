import { TextBox, Box, Section, Grid } from "~/components/slide-components";

const slides = [
  // Slide 1: Title Slide
  <div key="slide-1" className="text-center">
    <TextBox animation="slideDown" delay={0}>
      <h1 className="mb-6 text-7xl font-bold text-white">Example Client</h1>
    </TextBox>
    <TextBox animation="slideUp" delay={0.3}>
      <p className="text-3xl text-slate-300">
        Brand Strategy & Digital Transformation
      </p>
    </TextBox>
    <TextBox animation="fade" delay={0.6}>
      <p className="mt-8 text-xl text-slate-400">
        Presented by Digital Nova Studio
      </p>
    </TextBox>
  </div>,

  // Slide 2: Problem Statement
  <div key="slide-2">
    <TextBox animation="slideDown">
      <h2 className="mb-12 text-5xl font-bold text-white">The Challenge</h2>
    </TextBox>
    <Grid cols={2} gap={6} animation="stagger">
      <Box animation="slideLeft" delay={0.2}>
        <Section background="light" className="h-full">
          <h3 className="mb-4 text-2xl font-semibold text-white">
            Current State
          </h3>
          <ul className="space-y-3 text-lg text-slate-300">
            <li>• Outdated brand identity</li>
            <li>• Low digital presence</li>
            <li>• Inconsistent messaging</li>
          </ul>
        </Section>
      </Box>
      <Box animation="slideRight" delay={0.4}>
        <Section background="gradient" className="h-full">
          <h3 className="mb-4 text-2xl font-semibold text-white">
            Desired State
          </h3>
          <ul className="space-y-3 text-lg text-slate-300">
            <li>• Modern, cohesive brand</li>
            <li>• Strong online presence</li>
            <li>• Clear value proposition</li>
          </ul>
        </Section>
      </Box>
    </Grid>
  </div>,

  // Slide 3: Our Solution
  <div key="slide-3">
    <TextBox animation="slideDown">
      <h2 className="mb-12 text-5xl font-bold text-white">Our Approach</h2>
    </TextBox>
    <Grid cols={3} gap={6} animation="stagger">
      <Box animation="scale" delay={0.2}>
        <Section background="light" className="h-full text-center">
          <div className="mb-4 text-4xl">🎨</div>
          <h3 className="mb-3 text-xl font-semibold text-white">
            Brand Strategy
          </h3>
          <p className="text-slate-300">
            Comprehensive brand identity and positioning
          </p>
        </Section>
      </Box>
      <Box animation="scale" delay={0.4}>
        <Section background="light" className="h-full text-center">
          <div className="mb-4 text-4xl">💻</div>
          <h3 className="mb-3 text-xl font-semibold text-white">
            Digital Presence
          </h3>
          <p className="text-slate-300">
            Modern website and social media strategy
          </p>
        </Section>
      </Box>
      <Box animation="scale" delay={0.6}>
        <Section background="light" className="h-full text-center">
          <div className="mb-4 text-4xl">📈</div>
          <h3 className="mb-3 text-xl font-semibold text-white">
            Growth Marketing
          </h3>
          <p className="text-slate-300">
            Data-driven campaigns for measurable results
          </p>
        </Section>
      </Box>
    </Grid>
  </div>,

  // Slide 4: Timeline
  <div key="slide-4">
    <TextBox animation="slideDown">
      <h2 className="mb-12 text-5xl font-bold text-white">Project Timeline</h2>
    </TextBox>
    <div className="space-y-6">
      <Box animation="slideLeft" delay={0.2}>
        <Section background="light">
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-blue-400">1</div>
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Discovery & Research
              </h3>
              <p className="text-slate-300">
                Weeks 1-2: Brand audit and market analysis
              </p>
            </div>
          </div>
        </Section>
      </Box>
      <Box animation="slideLeft" delay={0.4}>
        <Section background="light">
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-blue-400">2</div>
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Strategy & Design
              </h3>
              <p className="text-slate-300">
                Weeks 3-6: Brand development and creative execution
              </p>
            </div>
          </div>
        </Section>
      </Box>
      <Box animation="slideLeft" delay={0.6}>
        <Section background="light">
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-blue-400">3</div>
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Implementation & Launch
              </h3>
              <p className="text-slate-300">
                Weeks 7-8: Rollout and campaign activation
              </p>
            </div>
          </div>
        </Section>
      </Box>
    </div>
  </div>,

  // Slide 5: Call to Action
  <div key="slide-5" className="text-center">
    <TextBox animation="fade" delay={0}>
      <h2 className="mb-8 text-6xl font-bold text-white">
        Ready to Transform Your Brand?
      </h2>
    </TextBox>
    <TextBox animation="fade" delay={0.3}>
      <p className="mb-12 text-2xl text-slate-300">
        Let's create something amazing together
      </p>
    </TextBox>
    <TextBox animation="slideUp" delay={0.6}>
      <button className="rounded-lg bg-blue-600 px-12 py-4 text-xl text-white transition-colors hover:bg-blue-700">
        Get Started
      </button>
    </TextBox>
  </div>,
];

export default slides;
