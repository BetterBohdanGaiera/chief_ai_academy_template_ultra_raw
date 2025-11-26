# Visualization Template

A brutalist-minimalist presentation and visualization template built with Next.js, React, Tailwind CSS, and powerful design system tooling.

## Features

- **Modular Architecture**: Self-contained modules for different presentations/topics
- **Brutalist-Minimalist Aesthetic**: Bold typography, electric orange accent, retro-futuristic design
- **Interactive Components**: Staggered animations, keyboard navigation, toggle patterns
- **AI-Powered Workflows**: Claude commands, agents, and skills for slide generation
- **Design System Documentation**: Comprehensive guidelines in `/ai_docs`
- **AI Image Generation**: Integrated Gemini API workflow

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the template.

### 3. Create Your First Slide

1. Create slide component in `components/slides/m1/`
2. Register in `config/slides.ts`
3. Add to module page `app/(courses)/modules/m1/page.tsx`

See [CLAUDE.md](./CLAUDE.md) for detailed workflow.

## Project Structure

```
├── .claude/                # Claude commands, agents, skills
│   ├── agents/             # Slide generator and planner
│   ├── commands/           # Workflow automation
│   └── skills/             # Algorithmic art, artifacts
├── ai_docs/                # Design system documentation
├── app/                    # Next.js app router
│   └── (courses)/modules/  # Module pages (m1, m2, m3)
├── components/
│   ├── slides/             # Slide components by module
│   ├── ui/                 # shadcn/ui components
│   ├── decorative/         # Background effects
│   ├── algorithmic/        # Canvas animations
│   └── animations/         # Slide transitions
├── config/                 # Slide and module configuration
└── lib/                    # Utilities and helpers
```

## Available Modules

- **M1**: Example module with template slides
- **M2**: Empty module (ready for your content)
- **M3**: Empty module (ready for your content)

Each module is a self-contained presentation with its own slides.

## Design System

### Color Palette

- **Electric Orange**: `#FF4D00` - Primary accent
- **Neon Cyan**: `#00BBFF` - Secondary accent
- **Dark Background**: `#0A0A0A` - Base
- **White**: `#FFFFFF` - Text

### Typography

- **Bebas Neue**: Display headings
- **Syne**: Subheadings
- **Manrope**: Body text
- **JetBrains Mono**: Code

### Documentation

- 📖 [Design Aesthetics Guide](ai_docs/DESIGN_AESTHETICS.md)
- 📖 [Presentation Design Guidelines](ai_docs/PRESENTATION_DESIGN_GUIDELINES.md)
- 📖 [Interactive Patterns](ai_docs/INTERACTIVE_PATTERNS.md)
- 📖 [Image Generation Guide](ai_docs/IMAGE_GENERATION_GUIDE.md)

## Claude Commands

This template includes powerful Claude Code commands:

- `/plan_slide_redesign` - Plan a new slide with AI assistance
- `/implement_slide_redesign` - Implement a slide from spec
- `/implement` - General implementation assistance
- `/plan` - General planning assistance

## Keyboard Shortcuts

- `Arrow Left/Right` - Navigate slides
- `Home` - First slide
- `End` - Last slide

## AI Image Generation

Generate presentation-ready images using Gemini API:

```bash
# List available templates
pnpm gen:list

# Generate a hero image
pnpm gen:hero "Your Title"

# Generate a concept illustration
pnpm gen:concept "Your Concept"
```

### Environment Setup

Add `GEMINI_API_KEY` to your `.env` file:

```bash
GEMINI_API_KEY=your_api_key_here
```

## License

MIT
