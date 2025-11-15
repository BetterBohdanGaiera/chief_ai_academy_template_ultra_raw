# Feature: Multi-Course Learning Path Architecture

## IMPLEMENTATION SCOPE

**THIS SPECIFICATION COVERS: PHASE 1 - INFRASTRUCTURE ONLY**

This phase builds the **structural foundation** for the multi-course system with minimal mock slides to demonstrate functionality. Actual course content (F1-F2, S1-S3 slides from `courses_to_build/ai_academy/`) will be added in future phases after this infrastructure is proven.

**Phase 1 Deliverables:**
- Multi-course routing architecture
- Configuration system for courses, paths, and slides
- Navigation components (breadcrumbs, progress, presenter mode)
- **2-3 mock slides** demonstrating design system integration
- Documentation for future course content addition

**Future Work (Not in This Phase):**
- Converting markdown content to actual slides (84+ slides across F1, F2, S1, S2, S3)
- AI image generation for all course content
- Detailed slide-by-slide implementation

---

## Feature Description

Transform the current single-presentation architecture into a multi-course learning platform that supports:

1. **Separate Course Presentations**: 5 distinct courses (Foundation, Skills, and 3 future courses) each as independent presentations
2. **Role-Based Learning Paths**: Dynamic presentation assembly based on learner role (Executive, AI Champion, Agent Manager, Developer)
3. **Atomic Slide Library**: Reusable slide components that can be composed into different courses and paths
4. **Intelligent Navigation**: Course selection interface, path-based progression, and cross-course navigation
5. **Presenter Experience**: Tools to easily switch between courses, follow learning paths, and track progress during live presentations

The system will support the existing AI Academy content structure (Foundation with F1-F2, Skills with S1-S3) while providing the flexibility to add new courses and customize learning experiences for different audiences.

## User Story

As a **Chief AI Academy presenter**
I want to **easily navigate between separate courses and follow role-specific learning paths**
So that **I can deliver customized presentations to different audiences (executives, champions, managers, developers) without managing one massive slide deck**

## Problem Statement

The current single-presentation architecture has critical limitations for the AI Academy use case:

1. **Content Organization**: 5 separate courses (Foundation F1-F2, Skills S1-S3, future courses) forced into one presentation creates cognitive overload
2. **Role-Based Delivery**: Different roles need different learning paths (Executive: F1→F2→S1, AI Champion: F1→F2→S1→S2→S3) but currently must navigate one giant deck
3. **Presenter Friction**: Presenting to executives requires manually skipping ~50 slides to avoid implementation details
4. **Content Reuse**: Atomic slides (e.g., "Five Levels Overview") need to appear in multiple courses but are duplicated instead of reused
5. **Scalability**: Adding new courses or learning paths requires restructuring the entire presentation
6. **Maintenance**: Updating shared concepts requires editing multiple slide files instead of one canonical source

**Real-world impact**:
- Presenter spends 10+ minutes navigating to correct starting slide for each audience
- Accidentally showing implementation details to executives who need strategic overview
- Duplicated slides drift out of sync (F1 definition in Foundation vs F1 reference in Skills)
- Unable to send executives "their path" as a standalone presentation

## Solution Statement

Implement a **modular course architecture with intelligent path composition**:

### Architecture Components

1. **Course-Based App Routing**:
   - `/` - Landing page with course selector and learning path navigator
   - `/courses/foundation` - Foundation course (F1-F2 modules)
   - `/courses/skills` - Skills course (S1-S3 modules)
   - `/paths/executive` - Executive learning path (curated slides from F1, F2, S1)
   - `/paths/ai-champion` - AI Champion path (full curriculum)
   - `/paths/agent-manager` - Agent Manager path (F1, F2, S3 focus)
   - `/paths/developer` - Developer path (F1, F2, S2, S3)

2. **Atomic Slide Library**:
   - Slides stored in `/components/slides/` organized by module (f1/, f2/, s1/, s2/, s3/)
   - Each slide is a reusable React component
   - Slides can be composed into different courses and paths
   - Metadata system for slide tagging (module, difficulty, role-relevance)

3. **Course Manifest System**:
   - JSON/TypeScript config files defining course composition
   - Path manifests specifying which slides appear in each learning path
   - Support for slide variations (executive vs detailed version of same concept)

4. **Smart Navigation**:
   - Breadcrumb navigation showing "Foundation > F1 > Slide 5/20"
   - "Jump to Course" menu accessible via keyboard shortcut
   - Path progress indicator ("Executive Path: 35/70 min completed")
   - Quick navigation to related content ("Also appears in: Skills S1")

5. **Presenter Tools**:
   - Presenter mode with notes, timing, and path guidance
   - Session state preservation (resume where you left off)
   - Export capabilities (generate PDF for specific path)
   - Pre-presentation checklist (verify all images loaded, test animations)

### Key Benefits

- **Modular Delivery**: Present Foundation alone (40 min) vs Full Curriculum (110 min) vs Executive Path (70 min)
- **Consistent Content**: One canonical "Five Levels" slide used in all courses
- **Easy Customization**: Create new paths by selecting slides without duplicating content
- **Better UX**: Audiences see only relevant content, reducing cognitive load
- **Scalable**: Add Course 3, 4, 5 by creating new route folders without touching existing courses

## Relevant Files

### Existing Files to Modify

- **`app/page.tsx`** (122 lines)
  - Currently: Single presentation container with slide array
  - Will become: Landing page with course selector and path navigator
  - Why: Entry point needs to offer course/path selection instead of diving into slides

- **`app/layout.tsx`**
  - Currently: Root layout with font loading
  - Will add: Global navigation provider, session state, presenter mode toggle
  - Why: Cross-course navigation and presenter tools need app-wide state

- **`README.md`** (160 lines)
  - Update: Architecture section to document multi-course system
  - Add: Course development guide, path creation guide
  - Why: Developers need to understand new structure for adding courses/paths

### New Files to Create

#### App Routes Structure

- **`app/(courses)/layout.tsx`**
  - Purpose: Shared layout for all course pages with course-level navigation
  - Features: Course progress bar, breadcrumbs, "Jump to Course" menu

- **`app/(courses)/courses/foundation/page.tsx`**
  - Purpose: Foundation course presentation (F1 + F2 modules)
  - Composition: Imports slides from components/slides/f1/ and components/slides/f2/

- **`app/(courses)/courses/skills/page.tsx`**
  - Purpose: Skills course presentation (S1 + S2 + S3 modules)
  - Composition: Imports slides from components/slides/s1/, s2/, s3/

- **`app/(courses)/paths/executive/page.tsx`**
  - Purpose: Executive learning path (curated subset)
  - Composition: F1 all slides, F2 all slides, S1 selected slides (no implementation details)

- **`app/(courses)/paths/ai-champion/page.tsx`**
  - Purpose: Full curriculum path
  - Composition: All slides from all modules (F1, F2, S1, S2, S3)

- **`app/(courses)/paths/agent-manager/page.tsx`**
  - Purpose: Agent Manager path (context engineering focus)
  - Composition: F1, F2, S1 brief, S3 deep dive

- **`app/(courses)/paths/developer/page.tsx`**
  - Purpose: Developer path (technical implementation)
  - Composition: F1, F2, S1 brief, S2, S3 deep dive

#### Configuration & Types

- **`config/courses.ts`**
  - Purpose: Course manifest definitions
  - Content: Course metadata (id, title, description, duration, modules, slug)
  - Example:
    ```typescript
    export const courses = {
      foundation: {
        id: 'foundation',
        title: 'Foundation',
        description: 'Five Levels Framework & Organization Structure',
        duration: 40,
        modules: ['f1', 'f2'],
        slug: '/courses/foundation'
      },
      skills: { /* ... */ }
    }
    ```

- **`config/paths.ts`**
  - Purpose: Learning path definitions
  - Content: Path metadata + slide composition rules
  - Example:
    ```typescript
    export const paths = {
      executive: {
        id: 'executive',
        title: 'Executive Path',
        description: 'Strategic AI transformation overview',
        duration: 70,
        audience: 'C-suite executives, VP-level leaders, board members',
        slides: [
          { module: 'f1', range: [1, 20] }, // All F1 slides
          { module: 'f2', range: [1, 18] }, // All F2 slides
          { module: 's1', range: [1, 5] },  // S1 strategic slides only
        ]
      }
    }
    ```

- **`config/slides.ts`**
  - Purpose: Atomic slide registry and metadata
  - Content: Slide component mappings, tags, difficulty, role-relevance
  - Example:
    ```typescript
    export const slideRegistry = {
      'f1-01-title': {
        component: () => import('@/components/slides/f1/01-title'),
        module: 'f1',
        title: 'Five Levels Framework',
        tags: ['introduction', 'framework', 'all-roles'],
        duration: 1
      }
    }
    ```

- **`types/courses.ts`**
  - Purpose: TypeScript interfaces for course system
  - Content: Course, Module, Slide, Path, Navigation types

#### Component Library

- **`components/course-selector.tsx`**
  - Purpose: Landing page course selection UI
  - Features: Cards for each course, visual hierarchy, duration/module counts
  - Design: Brutalist cards with orange accents, course preview images

- **`components/path-navigator.tsx`**
  - Purpose: Learning path selection UI
  - Features: Role-based filtering, path comparison, "Start Path" CTA
  - Design: Tabbed interface with role badges (Executive/Champion/Manager/Developer)

- **`components/course-navigation.tsx`**
  - Purpose: In-presentation navigation component
  - Features: Breadcrumbs, progress indicator, jump menu, keyboard shortcuts
  - Design: Fixed top bar with semi-transparent backdrop

- **`components/presenter-mode.tsx`**
  - Purpose: Presenter tools overlay
  - Features: Speaker notes, timing, next slide preview, path guidance
  - Design: Keyboard-toggle overlay (Press 'P'), dark panel on bottom third

- **`components/slides/f1/*.tsx`** (20 slide components)
  - Purpose: Foundation Module 1 slides (Five Levels Framework)
  - Source: courses_to_build/ai_academy/courses/foundation/f1_five_levels_framework.md
  - Design: Follow DESIGN_AESTHETICS.md and IMAGE_GENERATION_GUIDE.md

- **`components/slides/f2/*.tsx`** (18 slide components)
  - Purpose: Foundation Module 2 slides (Organization Structure)
  - Source: courses_to_build/ai_academy/courses/foundation/f2_organization_structure.md

- **`components/slides/s1/*.tsx`** (~15 slide components)
  - Purpose: Skills Module 1 slides (Choosing AI Technology)
  - Source: courses_to_build/ai_academy/courses/skills/s1_choosing_ai_technology.md

- **`components/slides/s2/*.tsx`** (~8 slide components)
  - Purpose: Skills Module 2 slides (Understanding Agents)
  - Source: courses_to_build/ai_academy/courses/skills/s2_understanding_agents.md

- **`components/slides/s3/*.tsx`** (~23 slide components)
  - Purpose: Skills Module 3 slides (Managing AI)
  - Source: courses_to_build/ai_academy/courses/skills/s3_managing_ai.md

#### Utilities

- **`lib/slide-loader.ts`**
  - Purpose: Dynamic slide loading utility
  - Features: Lazy load slide components, preload next slides, error boundaries

- **`lib/path-builder.ts`**
  - Purpose: Compose slide arrays from path configurations
  - Features: Filter slides by path manifest, handle variants, validate paths

- **`hooks/use-course-navigation.ts`**
  - Purpose: Course navigation state management
  - Features: Current course/path, slide position, progress calculation, navigation functions

- **`hooks/use-presenter-mode.ts`**
  - Purpose: Presenter mode state and controls
  - Features: Toggle presenter view, speaker notes, timing, next slide preview

## Implementation Plan

**PHASE 1 - INFRASTRUCTURE ONLY (This Specification)**

- [x] **Phase 1: Foundation & Configuration** - Set up course architecture, configuration system, and type definitions
  - Status: Completed
  - Comments: Created types/courses.ts with complete type system, config files for courses/paths/slides

- [x] **Phase 2: Component Infrastructure** - Build navigation components, course selector, path navigator, presenter mode
  - Status: Completed
  - Comments: Created CourseSelector, PathNavigator, CourseNavigation, PresenterMode components with full design system integration

- [x] **Phase 3: App Router Structure** - Implement route structure for courses and paths with intelligent navigation
  - Status: Completed
  - Comments: Created app/(courses) group with layout, 2 course routes, 4 path routes, PresentationContainer component for slide management

- [x] **Phase 4: Mock Slide Creation** - Create 2-3 minimal mock slides demonstrating design system integration and path composition
  - Status: Completed
  - Comments: Created 3 mock slides: 01-foundation-title (hero layout), 02-skills-concept (2-column interactive), 03-executive-strategic (simplified for executive path filtering)

- [x] **Phase 5: Testing & Documentation** - Test navigation, verify path composition, document course development workflow
  - Status: Completed
  - Comments: Build successful (9 routes), README updated, COURSE_DEVELOPMENT_GUIDE.md created with complete workflow documentation

**FUTURE PHASES (Not in This Specification)**

- **Phase 6: Content Creation F1-F2** - Convert Foundation module markdown to slides (38 slides)
- **Phase 7: Content Creation S1-S3** - Convert Skills module markdown to slides (46 slides)
- **Phase 8: Image Generation** - Generate all AI images for course content (~60-80 images)
- **Phase 9: Advanced Features** - Slide variants, custom path builder, analytics, export

## Step by Step Tasks

### Phase 1: Foundation & Configuration

- [ ] **Create type definitions in `types/courses.ts`** - Define TypeScript interfaces for Course, Module, Slide, Path, Navigation, PresenterState
  - Status:
  - Comments: Provides type safety across entire course system

- [ ] **Create course configuration in `config/courses.ts`** - Define Foundation and Skills course metadata with module mappings
  - Status:
  - Comments: Single source of truth for course structure

- [ ] **Create path configuration in `config/paths.ts`** - Define all 4 learning paths (Executive, AI Champion, Agent Manager, Developer) with slide composition rules
  - Status:
  - Comments: Maps role-based learning journeys to specific slide sequences

- [ ] **Create slide registry in `config/slides.ts`** - Build slide metadata registry with lazy import mappings
  - Status:
  - Comments: Enables dynamic slide loading and metadata queries

- [ ] **Create path builder utility in `lib/path-builder.ts`** - Implement slide array composition from path manifests with validation
  - Status:
  - Comments: Core logic for assembling presentations from atomic slides

- [ ] **Create slide loader utility in `lib/slide-loader.ts`** - Implement dynamic loading with preloading and error boundaries
  - Status:
  - Comments: Performance optimization for large presentations

### Phase 2: Component Infrastructure

- [ ] **Create course selector component `components/course-selector.tsx`** - Build brutalist card grid with course metadata, durations, and navigation
  - Status:
  - Comments: Landing page primary UI element

- [ ] **Create path navigator component `components/path-navigator.tsx`** - Build role-based path selection with tabbed interface and comparison view
  - Status:
  - Comments: Helps users choose appropriate learning path

- [ ] **Create course navigation component `components/course-navigation.tsx`** - Build breadcrumb navigation with progress indicator and jump menu
  - Status:
  - Comments: Persistent navigation available during presentations

- [ ] **Create presenter mode component `components/presenter-mode.tsx`** - Build presenter overlay with notes, timing, next slide preview
  - Status:
  - Comments: Professional presentation tools for live delivery

- [ ] **Create course navigation hook `hooks/use-course-navigation.ts`** - Implement state management for current course, path, slide position, progress
  - Status:
  - Comments: Centralized navigation state accessible to all components

- [ ] **Create presenter mode hook `hooks/use-presenter-mode.ts`** - Implement presenter mode toggle, notes display, timing logic
  - Status:
  - Comments: Isolated presenter functionality from audience view

### Phase 3: App Router Structure

- [ ] **Update root page `app/page.tsx`** - Convert from single presentation to landing page with CourseSelector and PathNavigator components
  - Status:
  - Comments: New entry point offering choice of course or path

- [ ] **Create course layout `app/(courses)/layout.tsx`** - Implement shared layout with CourseNavigation, progress tracking, global keyboard shortcuts
  - Status:
  - Comments: Consistent UI across all courses and paths

- [ ] **Create Foundation course route `app/(courses)/courses/foundation/page.tsx`** - Compose F1 + F2 slides into presentation with course-specific navigation
  - Status:
  - Comments: First standalone course implementation

- [ ] **Create Skills course route `app/(courses)/courses/skills/page.tsx`** - Compose S1 + S2 + S3 slides into presentation
  - Status:
  - Comments: Second standalone course implementation

- [ ] **Create Executive path route `app/(courses)/paths/executive/page.tsx`** - Compose curated slides from F1, F2, S1 following executive_path.md specification
  - Status:
  - Comments: Strategic overview path without implementation details

- [ ] **Create AI Champion path route `app/(courses)/paths/ai-champion/page.tsx`** - Compose full curriculum (all modules)
  - Status:
  - Comments: Complete learning journey for transformation leaders

- [ ] **Create Agent Manager path route `app/(courses)/paths/agent-manager/page.tsx`** - Compose F1, F2, S3 focus following agent_manager_path.md
  - Status:
  - Comments: Context engineering deep dive for domain experts

- [ ] **Create Developer path route `app/(courses)/paths/developer/page.tsx`** - Compose F1, F2, S2, S3 following developer_path.md
  - Status:
  - Comments: Technical implementation path for builders

### Phase 4: Mock Slide Creation

**NOTE: This phase creates only 2-3 demonstration slides. Actual course content (84+ slides) will be added in future phases.**

- [ ] **Create mock slides directory structure** - Set up `components/slides/mock/` with organized exports
  - Status:
  - Comments: Temporary directory for demonstration slides proving the system works

- [ ] **Create Mock Slide 1: Foundation Title** - "Foundation Course" title slide demonstrating brutalist typography, hero layout, orange accents
  - Status:
  - Comments: Proves design system integration (Bebas Neue, electric orange, layout principles from DESIGN_AESTHETICS.md)

- [ ] **Create Mock Slide 2: Skills Concept** - "Skills Course" concept slide with content layout, AI-generated image, interactive elements
  - Status:
  - Comments: Proves content patterns work (2-column grid, StaggeredReveal animations, HoverCard components, image integration)

- [ ] **Create Mock Slide 3: Executive Strategic** - Executive-specific strategic overview slide (simpler version of Mock 2)
  - Status:
  - Comments: Proves path filtering works (same concept as Mock 2 but filtered for strategic audience)

- [ ] **Update slide registry config** - Add mock slides to `config/slides.ts` with metadata tags
  - Status:
  - Comments: Demonstrates slide registration and metadata system

- [ ] **Update course configs** - Add mock slides to Foundation and Skills course manifests
  - Status:
  - Comments: Demonstrates course composition from slide registry

- [ ] **Update path configs** - Configure Executive path to show Mock 1 + Mock 3, while full courses show Mock 1 + Mock 2
  - Status:
  - Comments: Proves path-based slide filtering works correctly

### Phase 5: Testing & Documentation

- [ ] **Test all course routes** - Verify Foundation, Skills courses load correctly with all slides, navigation works, animations trigger
  - Status:
  - Comments: End-to-end course testing

- [ ] **Test all path routes** - Verify Executive, AI Champion, Agent Manager, Developer paths show correct slide subsets
  - Status:
  - Comments: Path composition validation

- [ ] **Test course navigation** - Verify breadcrumbs update, progress tracking accurate, jump menu functional, keyboard shortcuts work
  - Status:
  - Comments: Navigation UX testing

- [ ] **Test presenter mode** - Verify toggle works, speaker notes display, timing accurate, next slide preview loads
  - Status:
  - Comments: Presenter tools functionality

- [ ] **Verify all images generated** - Check that all AI-generated images exist in public/images/ and load correctly
  - Status:
  - Comments: Asset verification

- [ ] **Accessibility audit** - Test keyboard navigation, screen reader compatibility, color contrast ratios, reduced motion support
  - Status:
  - Comments: WCAG AA compliance check

- [ ] **Performance testing** - Measure page load times, slide transition smoothness, lazy loading effectiveness
  - Status:
  - Comments: Ensure smooth presentation experience

- [ ] **Cross-browser testing** - Test in Chrome, Firefox, Safari, Edge on desktop and tablet devices
  - Status:
  - Comments: Browser compatibility verification

- [ ] **Update README.md** - Document new multi-course architecture, course development guide, path creation guide, presenter mode usage
  - Status:
  - Comments: Developer and presenter documentation

- [ ] **Create COURSE_DEVELOPMENT_GUIDE.md** - Step-by-step guide for adding new courses, creating atomic slides from markdown, configuring paths
  - Status:
  - Comments: Onboarding documentation for future course creators - explains how to convert F1-F2, S1-S3 markdown to slides

- [ ] **Document infrastructure for future content** - Create guide explaining how to add real course slides once infrastructure is proven
  - Status:
  - Comments: Explains the process: markdown → slide components → config updates → testing

- [ ] **Run validation commands** - Execute build, lint, and manual testing checklist
  - Status:
  - Comments: Final validation before moving to content creation phase

## Testing Strategy

### Unit Tests

- **Path Builder Logic**: Test slide composition from path manifests
  - Input: Path config with slide ranges
  - Expected: Correct slide array with proper ordering
  - Edge cases: Overlapping ranges, invalid module references, empty paths

- **Slide Registry**: Test dynamic import resolution and metadata queries
  - Input: Slide ID lookup
  - Expected: Correct component lazy import and metadata
  - Edge cases: Non-existent slide IDs, malformed metadata

- **Navigation State**: Test course/path/slide position tracking
  - Input: Navigation actions (next, prev, jump, home, end)
  - Expected: Correct state updates and boundary handling
  - Edge cases: Navigation at start/end of presentation

### Integration Tests

- **Course Route Loading**: Test full course page renders with all slides
  - Verify: All slide components load, animations trigger, navigation functional

- **Path Route Composition**: Test path routes assemble correct slide subsets
  - Verify: Executive path shows F1, F2, S1 strategic slides only
  - Verify: Agent Manager path shows F1, F2, S3 with S1 brief

- **Cross-Course Navigation**: Test jumping between courses and paths
  - Verify: State preservation when switching routes
  - Verify: Progress tracking accurate across navigation

- **Presenter Mode**: Test presenter overlay functionality
  - Verify: Toggle works, notes display, timing updates, next slide preview

### Edge Cases

- **Empty Path Configuration**: Path with no slides defined
- **Invalid Module Reference**: Path references non-existent module (e.g., 's4')
- **Slide Range Overflow**: Path specifies range [1, 30] but module only has 20 slides
- **Concurrent Navigation**: Rapid keyboard navigation (arrow spam)
- **Deep Linking**: Direct URL access to /courses/foundation?slide=15
- **Browser Back/Forward**: Navigation history integration
- **Slow Network**: Lazy loading behavior with delayed component imports
- **Missing Images**: Graceful degradation when AI-generated images fail to load

## Acceptance Criteria

**PHASE 1 - Infrastructure Acceptance Criteria:**

- [ ] 5 distinct routes accessible: / (landing), /courses/foundation, /courses/skills, /paths/executive, /paths/ai-champion
- [ ] Landing page displays CourseSelector with Foundation and Skills cards showing metadata (planned durations: 40 min, 65 min)
- [ ] Landing page displays PathNavigator with 4 role-based paths (Executive, AI Champion, Agent Manager, Developer)
- [ ] Foundation course loads with mock slides (demonstrating slide composition system)
- [ ] Skills course loads with mock slides (demonstrating different course structure)
- [ ] Executive path loads with filtered mock slides (proves path composition filtering works)
- [ ] Course navigation displays accurate breadcrumbs (e.g., "Foundation > Mock > Slide 1/2")
- [ ] Progress indicator shows completion percentage and estimated time remaining
- [ ] Keyboard shortcuts work: Left/Right arrows (navigate), Home/End (jump), J (jump menu), P (presenter mode)
- [ ] Presenter mode toggles correctly (overlay visible, keyboard shortcut works)
- [ ] Mock slides follow brutalist-minimalist design system (electric orange #FF4D00, Bebas Neue typography)
- [ ] Mock Slide 2 includes AI-generated image proving image generation workflow works
- [ ] Slide transitions are smooth with staggered animations (StaggeredReveal components)
- [ ] Accessibility: WCAG AA compliance (4.5:1 contrast ratios, keyboard navigation, screen reader support)
- [ ] Build completes with zero TypeScript errors
- [ ] All routes load in <2 seconds on broadband connection
- [ ] Browser back/forward buttons work correctly with presentation navigation

**Future Phase Criteria (Not in This Spec):**

- Full course content: Foundation with 38 slides (F1: 20, F2: 18), Skills with 46 slides (S1: 15, S2: 8, S3: 23)
- All slides include AI-generated images (60-80 total images)
- Content accurately represents markdown source files from courses_to_build/ai_academy/

## Slide Design Requirements

**PHASE 1 SCOPE: Mock Slides Only**

This phase creates **2-3 demonstration slides** to prove the infrastructure works. Full course content (84+ slides with comprehensive image generation) will be created in future phases after infrastructure is validated.

### Mock Slide Design Strategy

#### Mock Slide 1: Foundation Title (Demonstrates Hero Layout)

**Purpose**: Prove brutalist-minimalist design system integration

**Layout**:
- Full-screen hero slide (`min-h-screen`)
- Bebas Neue title: "Foundation Course" (text-[120px])
- Orange accent on "Foundation" (#FF4D00)
- Subtitle: "Building Your AI Transformation Knowledge" (Syne, text-2xl, muted)
- Hero image background (optional): Use existing template or simple geometric pattern

**Components**:
- No complex interactions needed
- Simple fade-in animation on load
- Demonstrates typography hierarchy and color usage

**Validation**: Proves DESIGN_AESTHETICS.md principles are correctly implemented

#### Mock Slide 2: Skills Concept (Demonstrates Content Layout)

**Purpose**: Prove content patterns, animations, and component library work

**Layout**:
- 2-column grid layout (`grid grid-cols-1 lg:grid-cols-2`)
- Left: Text content with StaggeredReveal animation
- Right: AI-generated image (1 image needed)
- Badge component: "SKILLS"
- HoverCard for interactive detail reveal
- Recharts simple bar chart (optional data viz demonstration)

**Image Needed**:
- Subject: Generic "AI technology concept"
- Template: concept-ai
- Prompt: "A professional handwritten illustration of AI technology concepts, featuring warm orange tones (vibrant orange #F5A623), charcoal outlines, white background, minimalist geometric style"
- Generation: `tsx generate-image.ts "[prompt]" --template concept-ai --ratio 1:1`

**Components**:
- Badge (module identifier)
- HoverCard (interactive element)
- StaggeredReveal (animation system)
- Optional: Simple Recharts bar chart

**Validation**: Proves component library integration, animations, and image workflow

#### Mock Slide 3: Executive Strategic (Demonstrates Path Filtering)

**Purpose**: Prove path-based slide filtering works correctly

**Layout**:
- Similar to Mock Slide 2 but simplified
- Single column layout with key insights only
- Badge: "EXECUTIVE PATH"
- No complex data visualizations or detailed implementation content
- Focuses on strategic takeaways

**Components**:
- Badge with "executive" styling variant
- Simplified text hierarchy
- No HoverCard or complex interactions

**Validation**: Proves Executive path can show different slide variant than full Skills course

### Image Generation (Mock Phase Only)

**Total Images Needed**: 1-2 images maximum

- Mock Slide 2 image: Generic AI concept illustration (concept-ai template)
- Optional: Hero background for Mock Slide 1 (hero-bold or use geometric pattern component)

**Future Work**: Full image generation strategy (60-80 images for F1-F2, S1-S3) will be documented in course content creation phase

### Visual Component Selection

**Text Blocks**:
- Module titles: Bebas Neue, text-[120px], orange accent on key words
- Slide titles: Bebas Neue, text-7xl, all-caps
- Body text: Manrope, text-lg/xl, #FAFAFA on #0A0A0A
- Key insights: Badge components with orange backgrounds

**Data Visualizations**:
- Iteration economics: Bar chart (Recharts) comparing Level 3 vs Level 4 cycle times
- ROI ranges: Horizontal bar chart showing $15K-$246K across solution categories
- Quality progression: Line chart showing 70% → 95% accuracy over 200 iterations
- Timeline: Custom SVG Gantt chart for transformation phases

**Interactive Elements**:
- Level cards: HoverCard components revealing level details on hover
- Role badges: Badge components for path filtering (Executive/Champion/Manager/Developer)
- Navigation: Accordion for module outlines in course selector
- Comparison tables: Tabs for switching between "Existing Tools" vs "Custom Build"

**Icons**:
- lucide-react library for consistent iconography
- Navigation: ChevronLeft, ChevronRight, Home, Menu
- Roles: Briefcase (Executive), Rocket (Champion), Users (Manager), Code (Developer)
- Status: CheckCircle (success), AlertTriangle (warning), X (failure)

**AI-Generated Images**:
- All slides with conceptual content include supporting images
- Images integrated into slide layouts (not decorative, but narrative-supporting)
- Consistent handwritten illustration style with orange color palette

### Layout Design

**Grid Structure**:
- Full-screen slides: `min-h-screen` with proper vertical centering
- 2-column layouts: `grid grid-cols-1 lg:grid-cols-2 gap-8` for content + image
- 5-column grids: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6` for level overviews
- Content containers: `max-w-7xl mx-auto px-8 lg:px-16` for consistent margins

**Spacing**:
- Container padding: `p-8 lg:p-16`
- Grid gaps: `gap-4` (tight), `gap-6` (medium), `gap-8` (spacious)
- Section spacing: `space-y-6` for vertical rhythm
- Component margins: `mb-4` (title to subtitle), `mb-8` (section breaks)

**Component Hierarchy**:
1. Badge: Module identifier (e.g., "FOUNDATION - F1")
2. Title: Main slide heading (Bebas Neue, text-7xl)
3. Subtitle: Supporting context (Syne, text-2xl, muted color)
4. Content Grid: Main content area (text, images, data viz)
5. Key Insights: Bottom callout section (Badge + text)

**Responsive Breakpoints**:
- Mobile: Single column layouts, reduced font sizes
- Tablet (md): 2-column grids appear
- Desktop (lg): Full 5-column grids, maximum font sizes

### Interactive & Animation Patterns

**Entrance Animations** (tw-animate-css):
- Slide titles: `animate-fade-in-up delay-100`
- Subtitles: `animate-fade-in-up delay-200`
- Content sections: `animate-fade-in delay-300`
- Images: `animate-scale-in delay-400`

**StaggeredReveal Usage**:
- Level cards: Reveal each level sequentially with 100ms delays
- Role badges: Stagger appearance of 4 role cards
- Key takeaways: Reveal bullet points one by one

**Hover Effects**:
- Cards: `hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-300`
- Buttons: `hover:scale-105 transition-transform`
- Navigation arrows: `group-hover:scale-110`

**Transitions**:
- All state changes: `transition-all duration-300`
- Color changes: `transition-colors duration-200`
- Layout shifts: `transition-transform duration-400`

**Interactive Reveals**:
- HoverCards for level details: Appear on hover with fade-in
- Tabs for comparison tables: Slide transition between tab contents
- Accordion for module outlines: Smooth expand/collapse with height animation

### Color & Typography Usage

**Color Scheme**:
- Primary orange (#FF4D00): Titles (select words), badges, CTAs, focus states
- Neon cyan (#00D9FF): Level 5 slides only (creates visual progression surprise)
- Warning amber (#FFB800): Level 3 trap slides, cautionary content
- Success green (#00FF88): Level 4-5 slides, positive outcomes, ROI results
- Dark background (#0A0A0A): Primary slide background
- White text (#FAFAFA): Primary body text

**Text Hierarchy**:
- Hero titles: `font-bebas text-[120px] leading-none tracking-tight`
- Slide titles: `font-bebas text-7xl md:text-8xl`
- Section headers: `font-syne text-4xl font-bold`
- Body text: `font-manrope text-lg md:text-xl leading-relaxed`
- Code/monospace: `font-mono text-sm`

**Contrast Ratios**:
- Orange on dark (#FF4D00 on #0A0A0A): 5.8:1 (WCAG AA large text)
- White on dark (#FAFAFA on #0A0A0A): 19.8:1 (WCAG AAA)
- Gray on dark (#A0A0A0 on #0A0A0A): 6.7:1 (WCAG AA)

**Font Weights**:
- Bebas Neue: Always bold (font-bold, no variations)
- Syne: Bold for headers (font-bold), normal for labels (font-normal)
- Manrope: Bold for emphasis (font-bold), normal for body (font-normal)

### Accessibility Checklist

- [ ] All text meets WCAG AA contrast ratios (4.5:1 minimum for body, 3:1 for large text)
- [ ] Interactive elements have visible focus states (ring-2 ring-primary utilities)
- [ ] Minimum font size 16px for body text (text-lg on mobile)
- [ ] All icons paired with text labels or aria-label attributes
- [ ] Keyboard navigation works: Tab (focus), Enter (activate), Arrow keys (navigate slides)
- [ ] Screen reader compatible: Semantic HTML (nav, main, article), ARIA labels on buttons
- [ ] Motion can be reduced: `prefers-reduced-motion:` variants disable animations
- [ ] Color is not the only means of conveying information (icons + text for status)
- [ ] Alt text provided for all images (descriptive, not decorative)
- [ ] Skip links available for keyboard users to jump to main content

### Component Implementation Notes

**shadcn/ui Components**:
- Badge: Module identifiers, role tags, status indicators
- Card: Course selector cards, level overview cards, path cards
- Button: Navigation arrows, CTA buttons ("Start Path"), presenter mode toggle
- Accordion: Course selector module outlines
- HoverCard: Level detail pop-ups on hover
- Tabs: Technology comparison tables (Existing Tools vs Custom Build)
- Progress: Path completion indicator

**Custom Components**:
- CourseSelector: Brutalist card grid with course metadata
- PathNavigator: Tabbed interface with role-based filtering
- CourseNavigation: Breadcrumb + progress + jump menu bar
- PresenterMode: Dark overlay panel with notes and timing
- ModuleSlideContainer: Wrapper for consistent slide structure (Badge + Title + Content)

**Recharts Configuration**:
- Bar charts: Orange bars (#FF4D00), dark background (#0A0A0A), white axes
- Line charts: Orange line (#FF4D00), cyan comparison line (#00D9FF), gradient fills
- Responsive: `<ResponsiveContainer width="100%" height={400}>`
- Custom tooltips: Dark background, orange border, white text

**Animation Libraries**:
- tw-animate-css: `animate-fade-in`, `animate-fade-in-up`, `animate-scale-in`
- Custom keyframes in globals.css for slide transitions
- StaggeredReveal component for sequenced element reveals

**State Management**:
- Client components: `"use client"` directive for interactive slides
- useState: Toggle states (presenter mode, expanded cards)
- useEffect: Keyboard event listeners, intersection observers for scroll tracking
- Context: Global navigation state via useCourseNavigation hook

## Validation Commands

**PHASE 1 - Infrastructure Testing:**

- `pnpm run build` - Build entire multi-course system, validate zero TypeScript errors, confirm all routes compile
- `pnpm run lint` - Lint all new files (config/, components/, app/ routes), ensure code quality standards
- **Visual inspection**: Test in browser with mock slides
  - Navigate to / and verify course selector displays 2 courses (Foundation, Skills) and 4 paths
  - Click "Foundation" and verify mock slides load with navigation
  - Click "Skills" and verify mock slides load
  - Click "Executive Path" and verify filtered mock slides load (demonstrates path composition works)
  - Test keyboard navigation: Arrow keys, Home, End, J (jump menu), P (presenter mode)
  - Test presenter mode: Verify toggle works with 'P' key, overlay appears
  - Test breadcrumbs: Verify "Foundation > Mock > Slide 1/2" displays correctly
  - Test progress indicator: Verify percentage calculation works
  - Test animations: Verify StaggeredReveal triggers, entrance animations smooth
  - Test accessibility: Tab through interactive elements, verify focus states visible
  - Verify Mock Slide 2's AI-generated image loads correctly
- **Performance testing**: Lighthouse audit
  - Target: Performance score >90
  - Check: First Contentful Paint <1.5s, Time to Interactive <3s
  - Verify: Lazy loading working (slides load on demand)
- **Cross-browser testing**: Test in Chrome, Firefox, Safari
  - Verify: All routes load, animations work, keyboard shortcuts functional
  - Check: Presenter mode works in all browsers

**Future Testing (After Content Creation):**

- Verify all 84+ slides load correctly across courses and paths
- Test AI-generated images (60-80 total) all load
- Validate content accuracy against markdown source files

## Notes

### IMPORTANT: Infrastructure-Only Phase

**This specification implements ONLY the structural foundation** for the multi-course system. The goal is to prove the architecture works before investing time in content creation.

**What This Phase Delivers:**
- ✅ Multi-course routing (`/courses/`, `/paths/`)
- ✅ Configuration system for courses, paths, and slides
- ✅ Navigation infrastructure (breadcrumbs, progress, presenter mode, keyboard shortcuts)
- ✅ 2-3 mock slides demonstrating design system and path filtering
- ✅ Documentation for adding real course content

**What This Phase Does NOT Include:**
- ❌ Full course content (84+ slides from F1-F2, S1-S3 markdown files)
- ❌ Comprehensive image generation (60-80 AI-generated images)
- ❌ Detailed slide-by-slide implementation of course modules

**Next Steps After This Phase:**
1. **Validate Infrastructure**: Test that multi-course navigation, path filtering, and presenter mode work correctly with mock slides
2. **Plan Content Creation**: Decide on approach for converting markdown → slides (manual vs automated)
3. **Phase 2: Foundation Content** - Create F1 and F2 slides (38 slides total) from markdown blueprints
4. **Phase 3: Skills Content** - Create S1, S2, S3 slides (46 slides total)
5. **Phase 4: Image Generation** - Generate all 60-80 AI images for course content
6. **Phase 5: Polish & Launch** - Refine animations, add analytics, optimize performance

**Why This Phased Approach?**
- **Risk Mitigation**: Prove the architecture works before investing in 84+ slides
- **Faster Feedback**: Test with real users using mock slides to validate UX decisions
- **Flexible Content Strategy**: Can add courses incrementally (Foundation first, Skills later)
- **Resource Efficiency**: Avoid wasting time on content if architecture needs major changes

---

### Design Philosophy

This architecture embraces **modularity at every level**:

1. **Atomic Slides**: Each slide is a standalone React component that can be composed into any course or path
2. **Course Independence**: Foundation and Skills courses exist as separate entities with their own routes
3. **Path Flexibility**: Learning paths assemble slides dynamically from course modules based on role needs
4. **Future-Proof**: Adding Course 3, 4, 5 requires only creating new route folders and adding entries to course config

### Content Strategy

The markdown files in `courses_to_build/ai_academy/` serve as **content blueprints**:
- F1-F2 modules define Foundation course slides
- S1-S3 modules define Skills course slides
- Learning path files define which slides each role sees
- Each markdown section (## heading) typically maps to 1-3 slides

### Presenter UX Priorities

The presenter experience is as important as the audience experience:
- **Fast Navigation**: Jump between courses via keyboard shortcut (J)
- **Progress Awareness**: Always know where you are in the path ("35/70 min completed")
- **Speaker Notes**: Context and talking points visible in presenter mode
- **Flexible Delivery**: Easy to skip slides or jump to specific sections mid-presentation
- **Path Guidance**: Presenter mode shows "Executive Path - showing strategic overview only"

### Future Enhancements

Potential additions after initial implementation:
- **Slide Variants**: Executive vs Detailed versions of same concept (e.g., S1 strategic vs S1 technical)
- **Custom Path Builder**: UI for creating ad-hoc paths by selecting slides
- **Analytics**: Track which slides get the most time, where presenters pause
- **Export**: Generate PDF versions of specific paths for sharing
- **Collaboration**: Multiple presenters can co-present by syncing session state
- **Interactive Quizzes**: Integrate quiz content from resources/quizzes/ into slides

### Technical Debt Awareness

Known limitations to address in future iterations:
- **No SSG/SSR**: Client-side routing may slow initial load (consider Next.js App Router SSG)
- **No Caching**: Slide components re-imported on every route change (implement smart preloading)
- **Manual Config**: Course/path configs are hand-written TypeScript (could auto-generate from markdown metadata)
- **Image Dependencies**: AI-generated images must exist before build (no fallback placeholders)

### Migration Path

To avoid breaking existing work:
1. Phase 1-3 creates new structure WITHOUT deleting existing app/page.tsx
2. Existing presentation accessible at /legacy route during migration
3. Once all slides migrated and tested, remove /legacy route
4. Update deployment to point to new multi-course landing page
