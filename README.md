# Pitch Decks

An interactive pitch deck presentation platform built with Next.js. Create beautiful, animated slide presentations for clients with keyboard and swipe navigation.

## Features

- **Dynamic Routing**: Each client gets their own URL path (e.g., `/example-client`)
- **Keyboard Navigation**: Arrow keys, space bar, Home/End to navigate slides
- **Touch Gestures**: Swipe left/right on mobile devices
- **Smooth Animations**: Pre-built animation options using Framer Motion
- **Reusable Components**: Build slides with composable components
- **Responsive Design**: Works seamlessly on desktop and mobile

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the home page.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
pitch_decks/
├── src/
│   ├── app/                     # Next.js app router
│   │   ├── [deckId]/           # Dynamic route for deck presentations
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── slide-components/   # Reusable slide components
│   │   │   ├── TextBox.tsx    # Animated text container
│   │   │   ├── Box.tsx        # Animated box container
│   │   │   ├── Section.tsx    # Slide section with backgrounds
│   │   │   ├── Grid.tsx       # Responsive grid layout
│   │   │   └── Icon.tsx       # Animated icon component
│   │   ├── DeckPresentation.tsx # Main presentation wrapper
│   │   └── Slide.tsx          # Individual slide wrapper
│   └── lib/
│       └── getDecks.ts        # Utility to list all decks
└── decks/                      # Client deck folders
    └── example-client/
        └── deck.tsx           # Slide definitions
```

## Creating a New Deck

1. Create a new folder in `decks/` with your client's name (use kebab-case):
   ```bash
   mkdir decks/acme-corp
   ```

2. Create a `deck.tsx` file in that folder:
   ```tsx
   import { TextBox, Box, Section, Grid } from "~/components/slide-components";

   const slides = [
     // Slide 1
     <div key="slide-1" className="text-center">
       <TextBox animation="slideDown">
         <h1 className="text-7xl font-bold text-white">
           Your Title Here
         </h1>
       </TextBox>
     </div>,

     // Add more slides...
   ];

   export default slides;
   ```

3. Access your deck at `/acme-corp`

## Available Components

### TextBox
Animated text container with various animation options.

```tsx
<TextBox animation="fade" delay={0.2}>
  <h1>Your text here</h1>
</TextBox>
```

**Props:**
- `animation`: "fade" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "none"
- `delay`: number (in seconds)
- `className`: string

### Box
General-purpose animated container.

```tsx
<Box animation="scale" delay={0.3}>
  <p>Your content here</p>
</Box>
```

**Props:**
- `animation`: "fade" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scale" | "none"
- `delay`: number (in seconds)
- `className`: string

### Section
Slide section with background options.

```tsx
<Section background="gradient" animation="slideUp">
  <h2>Section content</h2>
</Section>
```

**Props:**
- `background`: "transparent" | "light" | "dark" | "gradient"
- `animation`: "fade" | "slideUp" | "slideDown" | "none"
- `delay`: number (in seconds)
- `className`: string

### Grid
Responsive grid layout with stagger animations.

```tsx
<Grid cols={3} gap={6} animation="stagger">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Grid>
```

**Props:**
- `cols`: 1 | 2 | 3 | 4
- `gap`: number (Tailwind gap scale)
- `animation`: "fade" | "stagger" | "none"
- `delay`: number (in seconds)
- `className`: string

### Icon
Animated icon placeholder (extend with your preferred icon library).

```tsx
<Icon name="✨" size={48} animation="bounce" />
```

**Props:**
- `name`: string (emoji or icon identifier)
- `size`: number
- `animation`: "fade" | "scale" | "bounce" | "rotate" | "none"
- `delay`: number (in seconds)
- `className`: string

## Navigation

### Keyboard Controls
- **Arrow Right / Arrow Down / Space**: Next slide
- **Arrow Left / Arrow Up**: Previous slide
- **Home**: First slide
- **End**: Last slide

### Touch/Mouse
- **Swipe left**: Next slide
- **Swipe right**: Previous slide
- **Click navigation dots**: Jump to specific slide
- **Click arrow buttons**: Navigate forward/backward

## Deployment

This app is designed to be deployed on a subdomain (e.g., `pitchdecks.digitalnovastudio.com`).

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure your custom domain in Vercel settings
4. Deploy!

The dynamic routing will automatically create routes for all decks in the `decks/` folder.

## Customization

### Styling
All components use Tailwind CSS. Modify colors, spacing, and styles directly in the components or pass custom `className` props.

### Animations
Animations are powered by Framer Motion. You can customize animation variants in each component or add new animation types.

### Add New Slide Components
Create new reusable components in `src/components/slide-components/` and export them from `index.ts`.

## Tips

- Keep slides simple and focused on one main idea
- Use animations sparingly - too many can be distracting
- Test on mobile devices to ensure swipe gestures work well
- Use high contrast colors for better readability
- Consider your audience when choosing animation speeds

## License

Private project for Digital Nova Studio clients.
