# Visualization Template

## Overview
This is a clean template for building presentations and visualizations using Next.js, React, and Tailwind CSS.

## Project Structure

```
├── .claude/              # Claude commands, agents, skills
│   ├── agents/           # Slide generator and planner agents
│   ├── commands/         # Workflow automation commands
│   └── skills/           # Algorithmic art, artifacts builder (with patterns library)
├── ai_docs/              # Core design system (DESIGN_AESTHETICS.md, IMAGE_GENERATION_GUIDE.md)
├── app/                  # Next.js app router
│   └── (courses)/modules/  # Module pages (m1, m2, m3)
├── components/
│   ├── slides/m1/        # Example slides
│   ├── ui/               # shadcn/ui components
│   ├── decorative/       # Background effects
│   ├── algorithmic/      # Canvas animations
│   └── animations/       # Slide transitions
├── config/               # Slide and module configuration
└── lib/                  # Utilities and helpers
```

## Documentation Architecture

**Core Design System** (ai_docs/):
- `DESIGN_AESTHETICS.md` - Colors, typography, animations, component variants
- `IMAGE_GENERATION_GUIDE.md` - AI image generation workflow
- `PRESENTATION_DESIGN_GUIDELINES.md` - High-level layout philosophy

**Implementation Details** (.claude/skills/):
- `artifacts-builder/` - React patterns, shadcn/ui components, 13 patterns + 6 templates
- `algorithmic-art/` - Canvas animations, p5.js, MeshGradient, ParticleField

## Slide Management Workflow

**CRITICAL**: After creating, editing, or deleting ANY slide components:

1. **Create slide component** in `components/slides/{module}/`
2. **Register slide** in `config/slides.ts`
3. **Update module page** `app/(courses)/modules/{module}/page.tsx`

### Example: Adding a new slide to M1

```tsx
// 1. Create: components/slides/m1/03-new-slide.tsx
export default function NewSlide() {
  return <div>Your slide content</div>
}

// 2. Register in config/slides.ts
'm1-03-new-slide': {
  slide: {
    id: 'm1-03-new-slide',
    component: () => import('@/components/slides/m1/03-new-slide'),
    module: 'm1',
    title: 'New Slide',
    tags: ['content'],
    duration: 2,
    notes: 'Speaker notes here'
  },
  loader: () => import('@/components/slides/m1/03-new-slide')
}

// 3. Add to module page app/(courses)/modules/m1/page.tsx
const m1Slides = [
  'm1-01-title',
  'm1-02-interactive',
  'm1-03-new-slide'  // Add here
]
```

## Slide Export Rule

All slide components MUST use default exports:

```tsx
// ✅ Correct - Default export
export default function SlideComponentName() {
  return (/* slide content */)
}

// ❌ Wrong - Named export (breaks lazy loading)
export function SlideComponentName() {
  return (/* slide content */)
}
```

## Available Commands

- `/plan_slide_redesign` - Plan a new slide
- `/implement_slide_redesign` - Implement a slide from spec
- `/implement` - General implementation
- `/plan` - General planning

## Git Configuration

Remember to use the correct SSH key configuration for git operations.
