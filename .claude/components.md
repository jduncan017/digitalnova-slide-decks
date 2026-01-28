# Slide Components Reference

All components are exported from `~/components/slide-components`. Import them like:

```tsx
import { Heading, Body, Box, Grid, PageHeader } from "~/components/slide-components";
```

---

## Typography Components

Located in `slide-components/typography/`

### Heading

Renders semantic headings (h1-h6) with consistent sizing and animations.

```tsx
<Heading level="h1" animation="slideDown" delay={0.2}>Main Title</Heading>
<Heading level="h3" className="text-primary">Styled Title</Heading>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `"h1"` \| `"h2"` \| `"h3"` \| `"h4"` \| `"h5"` \| `"h6"` | `"h2"` | Heading level |
| `animation` | `"fade"` \| `"slideUp"` \| `"slideDown"` \| `"slideLeft"` \| `"slideRight"` \| `"none"` | `"none"` | Entry animation |
| `delay` | `number` | `0` | Animation delay in seconds |
| `className` | `string` | `""` | Additional classes |
| `style` | `CSSProperties` | - | Inline styles (useful for gradients) |

**Size Reference:**
- h1: 60px (`text-6xl font-light`)
- h2: 48px (`text-5xl font-bold`)
- h3: 30px (`text-3xl font-bold`)
- h4: 24px (`text-2xl font-semibold`)
- h5: 20px (`text-xl font-semibold`)
- h6: 18px (`text-lg font-semibold`)

---

### Body

Renders body text with consistent sizing and animations.

```tsx
<Body size="lg" className="text-gray-300">Large body text</Body>
<Body size="sm" as="span">Inline text</Body>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"xl"` \| `"lg"` \| `"base"` \| `"sm"` \| `"xs"` | `"base"` | Text size |
| `as` | `"p"` \| `"span"` \| `"div"` | `"p"` | HTML element |
| `animation` | `"fade"` \| `"slideUp"` \| `"slideDown"` \| `"slideLeft"` \| `"slideRight"` \| `"none"` | `"none"` | Entry animation |
| `delay` | `number` | `0` | Animation delay in seconds |
| `className` | `string` | `""` | Additional classes |

**Size Reference:**
- xl: 20px (`text-xl`)
- lg: 18px (`text-lg`)
- base: 16px (`text-base`)
- sm: 14px (`text-sm`)
- xs: 12px (`text-xs`)

---

### Label

Renders small, uppercase labels (eyebrows/section labels).

```tsx
<Label className="text-gray-400">SECTION LABEL</Label>
<Label uppercase={false}>lowercase label</Label>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `uppercase` | `boolean` | `true` | Transform to uppercase |
| `animation` | `"fade"` \| `"slideUp"` \| `"slideDown"` \| `"slideLeft"` \| `"slideRight"` \| `"none"` | `"none"` | Entry animation |
| `delay` | `number` | `0` | Animation delay in seconds |
| `className` | `string` | `""` | Additional classes |

---

## Layout Components

Located in `slide-components/layout/`

### Box

General-purpose animated container. The workhorse component for wrapping content.

```tsx
<Box animation="slideUp" delay={0.3} variant="gradient">
  <Heading level="h4">Card Title</Heading>
  <Body>Card content</Body>
</Box>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | `"fade"` \| `"slideUp"` \| `"slideDown"` \| `"slideLeft"` \| `"slideRight"` \| `"scale"` \| `"none"` | `"fade"` | Entry animation |
| `delay` | `number` | `0` | Animation delay in seconds |
| `hoverEffect` | `"lift"` \| `"highlight"` \| `"none"` | `"lift"` | Hover interaction style |
| `variant` | `"none"` \| `"gradient"` \| `"highlight"` | `"none"` | Visual styling preset |
| `className` | `string` | `""` | Additional classes |

**Variants:**
- `none`: No styling (use className for custom)
- `gradient`: Dark gradient background with border
- `highlight`: Primary-tinted gradient with accent border

**Hover Effects:**
- `lift`: Subtle lift effect for cards/containers
- `highlight`: Glow effect for text-heavy elements
- `none`: No hover interaction

---

### Grid

Responsive grid layout with optional stagger animation.

```tsx
<Grid cols={3} gap={6} animation="stagger">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Grid>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cols` | `1` \| `2` \| `3` \| `4` | `2` | Number of columns (responsive) |
| `gap` | `number` | `4` | Gap size (Tailwind scale) |
| `animation` | `"fade"` \| `"stagger"` \| `"none"` | `"fade"` | Entry animation |
| `delay` | `number` | `0` | Animation delay in seconds |
| `className` | `string` | `""` | Additional classes |

**Responsive Behavior:**
- `cols={1}`: Always 1 column
- `cols={2}`: 1 col mobile → 2 cols md+
- `cols={3}`: 1 col mobile → 2 cols md → 3 cols lg+
- `cols={4}`: 1 col mobile → 2 cols md → 4 cols lg+

---

### Section

Styled section container with background options.

```tsx
<Section background="light" animation="slideUp">
  <Heading level="h4">Section Title</Heading>
</Section>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `background` | `"transparent"` \| `"light"` \| `"dark"` \| `"gradient"` | `"transparent"` | Background style |
| `animation` | `"fade"` \| `"slideUp"` \| `"slideDown"` \| `"none"` | `"fade"` | Entry animation |
| `delay` | `number` | `0` | Animation delay in seconds |
| `className` | `string` | `""` | Additional classes |

---

## Card Components

Located in `slide-components/cards/`

### FeatureCard

Icon + title + description card. Good for feature grids.

```tsx
import { Zap } from "lucide-react";

<FeatureCard
  icon={Zap}
  title="Fast Performance"
  description="Lightning-fast load times"
  delay={0.2}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `LucideIcon` | required | Lucide icon component |
| `title` | `string` | required | Card title |
| `description` | `string` | required | Card description |
| `delay` | `number` | `0` | Animation delay |
| `iconSize` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Icon size |
| `className` | `string` | `""` | Additional classes |

---

### FeatureRow

Horizontal row with icon, text, and optional checkmark. Good for feature lists.

```tsx
import { Shield } from "lucide-react";

<FeatureRow
  icon={Shield}
  text="Enterprise-grade security"
  showCheck={true}
  delay={0.1}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `LucideIcon` | required | Lucide icon component |
| `text` | `string` | required | Feature text |
| `delay` | `number` | `0` | Animation delay |
| `showCheck` | `boolean` | `true` | Show checkmark on right |
| `className` | `string` | `""` | Additional classes |

---

### CheckListItem

Simple check/X list item. Good for before/after comparisons.

```tsx
<CheckListItem text="Fast load times" variant="positive" delay={0.1} />
<CheckListItem text="Slow performance" variant="negative" delay={0.2} />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | required | Item text |
| `variant` | `"positive"` \| `"negative"` | `"positive"` | Check or X icon |
| `delay` | `number` | `0` | Animation delay |
| `animateFrom` | `"left"` \| `"right"` | `"left"` | Slide direction |
| `className` | `string` | `""` | Additional classes |

---

### ProcessStep

Vertical process step with icon, title, description, and connector line.

```tsx
import { Search, Code, Rocket } from "lucide-react";

<ProcessStep icon={Search} title="Discovery" description="..." delay={0.1} showConnector={true} />
<ProcessStep icon={Code} title="Build" description="..." delay={0.2} showConnector={true} />
<ProcessStep icon={Rocket} title="Launch" description="..." delay={0.3} showConnector={false} />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `LucideIcon` | required | Lucide icon component |
| `title` | `string` | required | Step title |
| `description` | `string` | required | Step description |
| `delay` | `number` | `0` | Animation delay |
| `showConnector` | `boolean` | `true` | Show vertical line below |
| `className` | `string` | `""` | Additional classes |

---

## Data Components

Located in `slide-components/data/`

### ComparisonTable

Feature comparison matrix with check/X indicators.

```tsx
<ComparisonTable
  columns={[
    { label: "DIY", featured: false },
    { label: "With Us", featured: true },
  ]}
  rows={[
    { feature: "Fast setup", values: [false, true] },
    { feature: "Expert support", values: [false, true] },
    { feature: "Custom design", values: [false, true] },
  ]}
  delay={0.3}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `{ label: string; featured?: boolean }[]` | required | Column headers |
| `rows` | `{ feature: string; values: boolean[] }[]` | required | Row data |
| `delay` | `number` | `0.3` | Animation delay |
| `className` | `string` | `""` | Additional classes |

---

## Media Components

Located in `slide-components/media/`

### Logo

Renders a logo image with animation.

```tsx
<Logo src="/logos/client.png" alt="Client Logo" height={48} />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | `"/logo.png"` | Image path |
| `alt` | `string` | `"Logo"` | Alt text |
| `height` | `number` | `64` | Height in pixels |
| `animation` | `"fade"` \| `"slideDown"` \| `"none"` | `"fade"` | Entry animation |
| `delay` | `number` | `0` | Animation delay |
| `className` | `string` | `""` | Additional classes |

---

### Carousel

Auto-rotating content carousel with arrows and dots.

```tsx
<Carousel
  items={[
    { id: "1", content: <div>Slide 1</div> },
    { id: "2", content: <div>Slide 2</div> },
  ]}
  autoPlay={true}
  autoPlayInterval={4000}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `{ id: string; content: ReactNode }[]` | required | Carousel items |
| `autoPlay` | `boolean` | `true` | Auto-rotate |
| `autoPlayInterval` | `number` | `4000` | Interval in ms |
| `showDots` | `boolean` | `true` | Show navigation dots |
| `showArrows` | `boolean` | `true` | Show arrow buttons |
| `className` | `string` | `""` | Additional classes |

---

### OverlappingShowcase

Two overlapping images with hover to bring forward. Good for before/after or brand/web design pairs.

```tsx
<OverlappingShowcase
  items={[
    { id: "1", leftImage: "/brand.png", rightImage: "/web.png" },
    { id: "2", leftImage: "/brand2.png", rightImage: "/web2.png" },
  ]}
  leftTitle="Brand"
  rightTitle="Web"
  autoPlay={true}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `ShowcaseItem[]` | required | Showcase items |
| `leftTitle` | `string` | `"Brand Design"` | Left side label |
| `rightTitle` | `string` | `"Web Design"` | Right side label |
| `autoPlay` | `boolean` | `true` | Auto-rotate items |
| `autoPlayInterval` | `number` | `5000` | Interval in ms |
| `showArrows` | `boolean` | `true` | Show arrow buttons |
| `showDots` | `boolean` | `false` | Show navigation dots |
| `className` | `string` | `""` | Additional classes |

---

## Composite Components

Located in `slide-components/composite/`

### PageHeader

Standard page header with label, title, and optional subtitle. Applies gradient styling to title by default.

```tsx
<PageHeader
  label="THE PROBLEM"
  title="Sound Familiar?"
  subtitle="Common challenges we solve"
  align="center"
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | required | Section label (uppercase) |
| `title` | `string` | required | Main title |
| `subtitle` | `string` | - | Optional subtitle below title |
| `align` | `"center"` \| `"left"` | `"center"` | Text alignment |
| `delay` | `number` | `0.2` | Animation delay |
| `titleStyle` | `CSSProperties` | gradient | Custom title styles |
| `titleClassName` | `string` | `""` | Additional title classes |
| `labelClassName` | `string` | `""` | Additional label classes |
| `className` | `string` | `""` | Additional container classes |

---

### Testimonial

Quote with attribution. Shows a quote icon with styled text.

```tsx
<Testimonial
  quote="They transformed our business"
  name="Jane Doe"
  role="CEO, Acme Corp"
  delay={0.5}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `quote` | `string` | required | Quote text |
| `name` | `string` | required | Attribution name |
| `role` | `string` | - | Role/title |
| `delay` | `number` | `0` | Animation delay |
| `className` | `string` | `""` | Additional classes |

---

## Component Folder Structure

```
src/components/slide-components/
├── typography/
│   ├── Heading.tsx
│   ├── Body.tsx
│   └── Label.tsx
├── layout/
│   ├── Box.tsx
│   ├── Grid.tsx
│   └── Section.tsx
├── cards/
│   ├── FeatureCard.tsx
│   ├── FeatureRow.tsx
│   ├── CheckListItem.tsx
│   └── ProcessStep.tsx
├── data/
│   └── ComparisonTable.tsx
├── media/
│   ├── Logo.tsx
│   ├── Carousel.tsx
│   └── OverlappingShowcase.tsx
├── composite/
│   ├── PageHeader.tsx
│   └── Testimonial.tsx
└── index.ts
```
