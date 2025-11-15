# Chief AI Academy - Multi-Course Learning Platform

A brutalist-minimalist multi-course presentation platform built with Next.js, featuring modular course architecture, role-based learning paths, interactive slides, and AI-powered image generation.

## Overview

This platform provides a complete multi-course system for delivering AI Academy content with:

- **Multi-Course Architecture**: Separate courses (Foundation, Skills) with atomic slide composition
- **Role-Based Learning Paths**: Curated paths for Executives, AI Champions, Agent Managers, and Developers
- **Brutalist-Minimalist Aesthetic**: Bold typography, electric orange #FF4D00 accent, retro-futuristic design
- **Interactive Components**: Staggered animations, presenter mode, keyboard navigation
- **Atomic Slide Library**: Reusable slides that compose into different courses and paths
- **AI Image Generation**: Integrated Gemini API workflow with 16 predefined templates
- **Design System Documentation**: Comprehensive guidelines in `/ai_docs`

## Current Status: Phase 1 - Infrastructure Complete ✅

Phase 1 delivers the **structural foundation** with:
- ✅ Multi-course routing (`/courses/foundation`, `/courses/skills`)
- ✅ Learning path routing (`/paths/executive`, `/paths/ai-champion`, `/paths/agent-manager`, `/paths/developer`)
- ✅ Course selector and path navigator landing page
- ✅ Navigation components (breadcrumbs, progress, presenter mode)
- ✅ 3 mock slides demonstrating design system and path filtering
- ✅ Configuration system for courses, paths, and slides

**Phase 2** (Future): Convert F1-F2, S1-S3 markdown content to 84+ slides with full image generation.

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### 3. Explore the Platform

**Landing Page** (`/`):
- Course Selector: Choose Foundation or Skills course
- Path Navigator: Select role-based learning path (Executive, AI Champion, Agent Manager, Developer)

**Available Routes**:
- `/courses/foundation` - Foundation course (F1, F2 modules)
- `/courses/skills` - Skills course (S1, S2, S3 modules)
- `/paths/executive` - Executive learning path (strategic focus)
- `/paths/ai-champion` - Full curriculum path
- `/paths/agent-manager` - Context engineering focus
- `/paths/developer` - Technical implementation focus

**Keyboard Shortcuts**:
- `Arrow Left/Right` or `Space` - Navigate slides
- `Home` - First slide
- `End` - Last slide
- `P` - Toggle presenter mode

### 4. Adding New Content

See **[COURSE_DEVELOPMENT_GUIDE.md](./COURSE_DEVELOPMENT_GUIDE.md)** for complete instructions on:
- Creating new courses
- Developing slide components
- Configuring learning paths
- Converting markdown to slides
- Generating AI images

## Architecture

### Multi-Course System

```
Landing Page (/)
    │
    ├─► Courses
    │    ├─► Foundation (/courses/foundation)
    │    │    └─► F1 + F2 modules
    │    └─► Skills (/courses/skills)
    │         └─► S1 + S2 + S3 modules
    │
    └─► Learning Paths
         ├─► Executive (/paths/executive)
         │    └─► Curated strategic slides
         ├─► AI Champion (/paths/ai-champion)
         │    └─► Full curriculum
         ├─► Agent Manager (/paths/agent-manager)
         │    └─► Context engineering focus
         └─► Developer (/paths/developer)
              └─► Technical implementation
```

### Key Components

- **PresentationContainer**: Handles slide display, navigation, presenter mode
- **CourseSelector**: Landing page course cards
- **PathNavigator**: Landing page learning path cards
- **CourseNavigation**: In-presentation nav bar (breadcrumbs, progress, arrows)
- **PresenterMode**: Overlay with speaker notes and timing

### Configuration Files

- `config/courses.ts` - Course definitions (title, duration, modules)
- `config/paths.ts` - Learning path definitions (audience, slide composition)
- `config/slides.ts` - Slide registry (components, metadata, notes)
- `types/courses.ts` - TypeScript interfaces

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