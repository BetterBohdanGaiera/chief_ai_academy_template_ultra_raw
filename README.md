# Executive Presentation Framework

A brutalist-minimalist presentation framework built with Next.js, featuring interactive slides, algorithmic art, and AI-powered image generation.

## Overview

This framework provides a complete design system and component library for creating stunning executive-level presentations with:

- **Brutalist-Minimalist Aesthetic**: Bold typography, electric orange and neon cyan accents
- **Interactive Components**: Animations, transitions, and interactive elements
- **Algorithmic Art**: Particle fields, mesh gradients, and geometric patterns
- **AI Image Generation**: Integrated Gemini API workflow with 16 predefined templates
- **Design System Documentation**: Comprehensive guidelines in `/ai_docs`

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Create Your Slides

Create slide components in `/components/`:

```tsx
// components/slide-01-title.tsx
import { SlideIn } from "@/components/animations/slide-transitions"

export default function Slide01Title() {
  return (
    <div className="h-screen bg-[#0A0A0A] flex items-center justify-center">
      <SlideIn direction="up">
        <h1 className="font-bebas text-[120px] text-white">
          Your <span className="text-orange-500">Title</span>
        </h1>
      </SlideIn>
    </div>
  )
}
```

### 3. Add Slides to Presentation

Update `app/page.tsx`:

```tsx
import Slide01Title from "@/components/slide-01-title"
import Slide02Overview from "@/components/slide-02-overview"

const slides = [
  <Slide01Title key="slide-01" />,
  <Slide02Overview key="slide-02" />,
  // ... add more slides
]
```

### 4. Run Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view your presentation.

## Design System

### Color Palette

- **Electric Orange**: `#FF4D00` - Primary accent, CTAs, highlights
- **Neon Cyan**: `#00BBFF` - Secondary accent, interactive elements
- **Dark Background**: `#0A0A0A` - Base background
- **White**: `#FFFFFF` - Primary text

### Typography

- **Bebas Neue**: Display headings, large titles
- **Syne**: Subheadings, section labels
- **Manrope**: Body text, descriptions
- **JetBrains Mono**: Code, monospace elements

### Documentation

- 📖 [Design Aesthetics Guide](ai_docs/DESIGN_AESTHETICS.md)
- 📖 [Presentation Design Guidelines](ai_docs/PRESENTATION_DESIGN_GUIDELINES.md)
- 📖 [Image Generation Guide](ai_docs/IMAGE_GENERATION_GUIDE.md)

## AI Image Generation Workflow

This project includes a powerful AI image generation system using Gemini API with integrated design system for creating presentation-ready imagery.

### Quick Start

```bash
# List available templates
pnpm gen:list

# Generate a hero image
pnpm gen:hero "AI Transformation Strategy"

# Generate a concept illustration
pnpm gen:concept "Digital Innovation Framework"

# View comprehensive guide
cat ai_docs/IMAGE_GENERATION_GUIDE.md
```

### Features

- **16 Predefined Templates**: Hero images, concept illustrations, data viz backgrounds, portraits, and abstract backgrounds
- **Design System Integration**: Automatic application of brand colors (electric orange #FF4D00, neon cyan #00BBFF) and brutalist-minimalist aesthetic
- **Smart Prompt Injection**: Design rules automatically added to prompts with intelligent redundancy detection
- **Validation & Metadata**: Automatic image validation and JSON metadata generation for reproducibility
- **Batch Generation**: Generate complete image sets with `bash scripts/generate-presentation-images.sh`

### Template Categories

- **Hero Images**: Title slides, section dividers (hero-bold, hero-subtle, hero-dynamic)
- **Concept Illustrations**: AI, transformation, strategy, innovation (concept-ai, concept-transformation, etc.)
- **Data Viz Backgrounds**: Chart backgrounds (dataviz-grid, dataviz-gradient, dataviz-texture)
- **Executive Portraits**: Team and individual portraits (portrait-executive, portrait-team)
- **Abstract Backgrounds**: Versatile slide backgrounds (background-dots, background-mesh, background-geometric, background-retro)

### Documentation

📖 **[Complete Image Generation Guide](ai_docs/IMAGE_GENERATION_GUIDE.md)** - Comprehensive workflow documentation including:
- Template selection decision tree
- Best practices for prompt writing
- Integration with slide development
- Troubleshooting guide
- Examples gallery

### Command Examples

```bash
# Basic template usage
tsx generate-image.ts "Your prompt" --template hero-bold --ratio 16:9

# Control design system intensity
tsx generate-image.ts "Your prompt" --style bold

# Generate multiple variations
tsx generate-image.ts "Your prompt" --template concept-ai --count 3

# See template details
tsx generate-image.ts --template-info hero-bold
```

### Environment Setup

Ensure you have `GEMINI_API_KEY` in your `.env` file:

```bash
GEMINI_API_KEY=your_api_key_here
```