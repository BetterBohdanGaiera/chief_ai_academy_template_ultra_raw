# Course Development Guide

**Chief AI Academy Multi-Course Learning Platform**

This guide explains how to add new courses, create slides, and configure learning paths in the multi-course architecture.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Adding a New Course](#adding-a-new-course)
3. [Creating Slide Components](#creating-slide-components)
4. [Configuring Learning Paths](#configuring-learning-paths)
5. [Development Workflow](#development-workflow)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)

---

## Architecture Overview

### Key Concepts

**Atomic Slides**: Each slide is a standalone React component that can be composed into different courses and paths.

**Courses**: Standalone presentations covering specific topics (e.g., Foundation, Skills).

**Paths**: Role-based learning journeys that assemble slides from multiple courses based on audience needs.

**Slide Registry**: Central mapping of slide IDs to components and metadata (`config/slides.ts`).

### Directory Structure

```
├── app/
│   ├── (courses)/                    # Route group for courses and paths
│   │   ├── layout.tsx                # Shared layout
│   │   ├── courses/
│   │   │   ├── foundation/page.tsx   # Foundation course route
│   │   │   └── skills/page.tsx       # Skills course route
│   │   └── paths/
│   │       ├── executive/page.tsx    # Executive path route
│   │       ├── ai-champion/page.tsx  # AI Champion path route
│   │       ├── agent-manager/page.tsx
│   │       └── developer/page.tsx
│   └── page.tsx                      # Landing page
├── components/
│   ├── slides/                       # Slide components
│   │   ├── mock/                     # Mock slides (Phase 1)
│   │   │   ├── 01-foundation-title.tsx
│   │   │   ├── 02-skills-concept.tsx
│   │   │   └── 03-executive-strategic.tsx
│   │   ├── f1/                       # Foundation Module 1 (future)
│   │   ├── f2/                       # Foundation Module 2 (future)
│   │   ├── s1/                       # Skills Module 1 (future)
│   │   ├── s2/                       # Skills Module 2 (future)
│   │   └── s3/                       # Skills Module 3 (future)
│   ├── course-selector.tsx           # Landing page course cards
│   ├── path-navigator.tsx            # Landing page path cards
│   ├── course-navigation.tsx         # In-presentation nav bar
│   ├── presenter-mode.tsx            # Presenter overlay
│   └── presentation-container.tsx    # Slide display wrapper
├── config/
│   ├── courses.ts                    # Course definitions
│   ├── paths.ts                      # Learning path definitions
│   └── slides.ts                     # Slide registry
├── hooks/
│   ├── use-course-navigation.ts      # Navigation state hook
│   └── use-presenter-mode.ts         # Presenter mode hook
├── lib/
│   ├── path-builder.ts               # Path composition utility
│   └── slide-loader.ts               # Lazy slide loading
└── types/
    └── courses.ts                    # TypeScript interfaces
```

---

## Adding a New Course

### Step 1: Define the Course

Edit `config/courses.ts`:

```typescript
export const courses: CourseRegistry = {
  // Existing courses...

  'new-course': {
    id: 'new-course',
    title: 'New Course Title',
    description: 'Course description for landing page',
    duration: 45, // minutes
    modules: ['nc1', 'nc2'], // Module IDs
    slug: '/courses/new-course',
    theme: 'primary' // or 'cyan', 'amber'
  }
}
```

### Step 2: Create Course Route

Create `app/(courses)/courses/new-course/page.tsx`:

```tsx
import { PresentationContainer } from '@/components/presentation-container'

// Define slide IDs for this course
const newCourseSlides = [
  'nc1-01-title',
  'nc1-02-overview',
  'nc2-01-deep-dive',
  // ... more slides
]

export default function NewCoursePage() {
  return (
    <PresentationContainer
      slideIds={newCourseSlides}
      title="New Course Title"
      id="new-course"
    />
  )
}
```

### Step 3: Create Slide Components

Create slides in `components/slides/nc1/` and `components/slides/nc2/`:

```tsx
// components/slides/nc1/01-title.tsx
import { Badge } from '@/components/ui/badge'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
// ... other imports

export default function NC1TitleSlide() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      {/* Slide content */}
    </section>
  )
}
```

### Step 4: Register Slides

Add slides to `config/slides.ts`:

```typescript
export const slideRegistry: SlideRegistry = {
  // Existing slides...

  'nc1-01-title': {
    slide: {
      id: 'nc1-01-title',
      component: () => import('@/components/slides/nc1/01-title'),
      module: 'nc1',
      title: 'New Course Introduction',
      tags: ['title', 'nc1', 'all-roles'],
      duration: 1,
      notes: 'Opening slide for new course module 1'
    },
    loader: () => import('@/components/slides/nc1/01-title')
  }
}
```

---

## Creating Slide Components

### Design System Integration

**ALWAYS reference** `ai_docs/DESIGN_AESTHETICS.md` for:
- Typography hierarchy (Bebas Neue, Syne, Manrope, JetBrains Mono)
- Color palette (electric orange #FF4D00, charcoal #0A0A0A)
- Animation patterns (staggered reveals, entrance sequences)
- Component variants (Badge, Card, Button)

### Standard Slide Structure

```tsx
/**
 * Slide: [Module]-[Number]-[Title]
 * Purpose: [Brief description]
 */

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
// ... other imports

export default function ModuleNumberTitleSlide() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-7xl w-full space-y-8">
        {/* Badge */}
        <div className="text-center">
          <Badge variant="gradient">MODULE ID</Badge>
        </div>

        {/* Title */}
        <h2 className="font-bebas text-5xl md:text-7xl text-center">
          SLIDE <span className="text-primary">TITLE</span>
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Your content here */}
        </div>
      </div>
    </section>
  )
}
```

### AI-Generated Images

Follow `ai_docs/IMAGE_GENERATION_GUIDE.md`:

```bash
# Generate image for slide
tsx generate-image.ts "AI transformation concept" --template concept-ai --ratio 16:9

# Integrate into slide
<img
  src="/generated-images/gemini-[timestamp]-1.png"
  alt="AI transformation visualization"
  className="w-full h-auto rounded-xl shadow-lg"
/>
```

---

## Configuring Learning Paths

### Define a New Path

Edit `config/paths.ts`:

```typescript
export const paths: PathRegistry = {
  // Existing paths...

  'new-role': {
    id: 'new-role',
    title: 'New Role Path',
    description: 'Custom learning journey for specific role',
    duration: 60, // minutes
    audience: 'Target audience description',
    slides: [
      { module: 'f1', range: [1, 10] },  // F1 slides 1-10
      { module: 'nc1', range: [1, 5] },  // New course slides 1-5
      { module: 's3', range: [15, 23] }  // S3 slides 15-23
    ],
    slug: '/paths/new-role',
    theme: 'primary'
  }
}
```

### Create Path Route

Create `app/(courses)/paths/new-role/page.tsx`:

```tsx
import { PresentationContainer } from '@/components/presentation-container'
import { buildSlidesFromPath } from '@/lib/path-builder'
import { getPath } from '@/config/paths'

// Build slide array from path configuration
const path = getPath('new-role')!
const newRoleSlides = buildSlidesFromPath(path)

export default function NewRolePathPage() {
  return (
    <PresentationContainer
      slideIds={newRoleSlides}
      title="New Role Path"
      id="path-new-role"
    />
  )
}
```

---

## Development Workflow

### 1. Plan Content

- Review markdown source files in `courses_to_build/ai_academy/`
- Identify slide boundaries (## headings typically = 1-3 slides)
- Sketch layouts and interactions

### 2. Create Slides

```bash
# Create slide component
touch components/slides/[module]/[number]-[title].tsx

# Implement slide following design guidelines
# Reference: ai_docs/DESIGN_AESTHETICS.md
```

### 3. Generate Images

```bash
# Generate AI images for slides
tsx generate-image.ts "[concept]" --template [template-id] --ratio [ratio]

# Verify images in public/generated-images/
```

### 4. Register Slides

```bash
# Add entries to config/slides.ts
# Update course/path configurations
```

### 5. Test

```bash
# Build to check for errors
pnpm run build

# Run dev server
pnpm run dev

# Navigate to http://localhost:3000
# Test course/path routes
# Verify keyboard navigation (arrows, P for presenter mode)
```

### 6. Document

Update `README.md` with any new features or patterns.

---

## Best Practices

### Slide Design

1. **One Key Message**: Each slide should convey a single main idea
2. **Visual Hierarchy**: Use typography scale to guide attention
3. **Generous Spacing**: Don't cram content (p-8 lg:p-16 minimum)
4. **Staggered Animations**: Reveal content sequentially with delays
5. **Accessibility**: WCAG AA contrast (4.5:1), keyboard navigation, alt text

### Code Organization

1. **Naming Convention**: `[module]-[number]-[title-slug].tsx`
2. **Component Purity**: Slides should be self-contained
3. **Reusability**: Extract common patterns into shared components
4. **Type Safety**: Use TypeScript interfaces from `types/courses.ts`

### Performance

1. **Lazy Loading**: All slides loaded dynamically via registry
2. **Preloading**: Next 3 slides preloaded for smooth navigation
3. **Image Optimization**: Use Next.js Image component when possible
4. **Bundle Size**: Keep slide components focused and minimal

---

## Troubleshooting

### Build Errors

**Issue**: TypeScript errors about missing imports

**Solution**:
```bash
# Verify all imports exist
# Check component export: export default function SlideName()
# Ensure slideRegistry loader points to correct path
```

**Issue**: Route not appearing in build output

**Solution**:
```bash
# Verify page.tsx exists in correct directory
# Check file exports default function
# Rebuild: pnpm run build
```

### Runtime Errors

**Issue**: Slide component not loading

**Solution**:
```typescript
// Check slideRegistry entry
// Verify loader path matches component location
// Test lazy import manually:
const test = await import('@/components/slides/module/slide')
```

**Issue**: Navigation not working

**Solution**:
```bash
# Verify slideIds array in page.tsx
# Check slide IDs exist in slideRegistry
# Test keyboard shortcuts (arrows, Home, End, P)
```

### Image Issues

**Issue**: AI-generated images not displaying

**Solution**:
```bash
# Verify images in public/generated-images/
# Check file path in <img src="" />
# Ensure Next.js can access public/ directory
```

---

## Converting Markdown to Slides

### Process

1. **Parse Markdown**: Identify structure (headings, lists, code blocks)
2. **Map to Slide Types**:
   - `# Title` → Hero slide
   - `## Section` → Content slide with title
   - Lists → Card grids or bullet points
   - Code blocks → Syntax highlighted code
   - Tables → Data visualization or comparison layout

3. **Design Layout**:
   - Title slides: Hero pattern (full-screen, large typography)
   - Content slides: 2-column or grid layouts
   - Data slides: Charts using Recharts

4. **Add Interactivity**:
   - HoverCard for detail reveals
   - StaggeredReveal for sequential appearance
   - Tabs for comparisons

5. **Generate Images**: Use concepts from markdown to create supporting visuals

### Example Conversion

**Markdown**:
```markdown
## Five Levels of AI Maturity

1. **Level 1**: Manual workflows
2. **Level 2**: Assisted intelligence
3. **Level 3**: Iteration trap
4. **Level 4**: Confident delegation
5. **Level 5**: Autonomous AI
```

**Slide Component**:
```tsx
// components/slides/f1/03-five-levels.tsx
export default function FiveLevelsSlide() {
  const levels = [
    { num: 1, title: 'Manual workflows', color: 'muted' },
    { num: 2, title: 'Assisted intelligence', color: 'muted' },
    { num: 3, title: 'Iteration trap', color: 'warning' },
    { num: 4, title: 'Confident delegation', color: 'primary' },
    { num: 5, title: 'Autonomous AI', color: 'cyan' }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl w-full space-y-8">
        <h2 className="font-bebas text-7xl text-center">
          FIVE <span className="text-primary">LEVELS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {levels.map((level, i) => (
            <Card
              key={level.num}
              className="animate-fade-in fill-backwards"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <Badge variant={level.color}>{level.num}</Badge>
                <p className="mt-2 font-syne">{level.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Phase 2: Full Content Creation

**Status**: Phase 1 (Infrastructure) is complete. Phase 2 will add real course content.

### Planned Steps

1. **Foundation F1-F2** (38 slides):
   - Convert `courses_to_build/ai_academy/courses/foundation/f1_five_levels_framework.md`
   - Convert `courses_to_build/ai_academy/courses/foundation/f2_organization_structure.md`

2. **Skills S1-S3** (46 slides):
   - Convert `courses_to_build/ai_academy/courses/skills/s1_choosing_ai_technology.md`
   - Convert `courses_to_build/ai_academy/courses/skills/s2_understanding_agents.md`
   - Convert `courses_to_build/ai_academy/courses/skills/s3_managing_ai.md`

3. **Image Generation** (60-80 images):
   - Generate images for all slides using templates
   - Follow `ai_docs/IMAGE_GENERATION_GUIDE.md`

4. **Testing**:
   - Verify all routes work
   - Test path filtering
   - Accessibility audit

---

## Support

For questions or issues:
1. Review this guide's [Troubleshooting](#troubleshooting) section
2. Check `ai_docs/DESIGN_AESTHETICS.md` for design system questions
3. Refer to `ai_docs/IMAGE_GENERATION_GUIDE.md` for image generation
4. Inspect existing mock slides in `components/slides/mock/` for patterns

---

**Last Updated**: 2025
**Version**: 1.0 (Phase 1 - Infrastructure)
