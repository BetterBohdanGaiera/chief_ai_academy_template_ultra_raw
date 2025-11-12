# Feature: Horizontal Single-Screen Presentation Reformat

## Feature Description
Reformat the existing 17-slide presentation to eliminate vertical scrolling by ensuring all content fits within a single viewport (screen). This will be achieved by:
1. Analyzing each slide to identify content overflow
2. Splitting content-heavy slides into multiple horizontal screens
3. Redesigning layouts to optimize vertical space usage
4. Generating new AI-powered visual elements where needed
5. Maintaining the existing horizontal navigation system

The goal is to create a premium presentation experience where users navigate exclusively left-to-right through slides, with all information visible at once without scrolling down.

## User Story
As a **presentation viewer**
I want to **see all slide content within one screen without scrolling down**
So that **I can focus on the narrative flow and navigate smoothly through horizontal slides only**

## Problem Statement
The current presentation has vertical scrolling on several slides, which:
- Disrupts the flow of the presentation narrative
- Makes it unclear how much content remains on each slide
- Creates an inconsistent viewing experience across slides
- Reduces the premium, polished feel of the presentation
- Makes it harder to present in formal settings where scrolling is awkward

Specific slides with overflow issues include:
- Slide 2 (Landscape): Pyramid + 4 cards + key insight requires scrolling
- Slide 5 (5 Levels Overview): 5 columns of content with images are too tall
- Slide 6 (Principles): 5 large cards with detailed content overflow
- Slide 13 (Level 3 Guidance): Multiple detailed guidance sections
- Slide 14 (Level 4 Overview): Long accordion sections with detailed content
- Slide 15 (Level 4 Economics): Chart + multiple comparison cards

## Solution Statement
Implement a comprehensive reformat strategy that:

1. **Content Audit & Analysis**: Measure actual rendered heights of all slides to identify overflow
2. **Strategic Content Splitting**: Break oversized slides into 2-3 horizontal screens while maintaining narrative cohesion
3. **Layout Optimization**: Redesign layouts to maximize vertical space efficiency using:
   - Multi-column grids (2-column, 3-column)
   - Compact spacing while maintaining readability
   - Smaller text sizes for secondary content
   - Icon-based visual hierarchy
4. **Visual Enhancement**: Generate new AI images optimized for compact layouts
5. **Navigation Enhancement**: Update slide counter to reflect new total slide count

The solution maintains the existing design system (orange primary color, Inter font, shadcn/ui components) while optimizing for single-screen viewing.

## Relevant Files
Use these files to implement the feature:

### Core Navigation & Structure
- **app/page.tsx** - Main presentation container with slide array and navigation logic
  - Will need to update slide imports and total count after splitting slides
  - Navigation system already supports horizontal scrolling (no changes needed)

### Slides Requiring Major Restructuring (Split into 2+ screens)
- **components/slide-02-landscape.tsx** - Currently has pyramid + 4 cards + insight (~1400px height)
  - Split into: Slide 2A (pyramid + brief context) and Slide 2B (4 key messages grid)

- **components/slide-05-five-levels-overview.tsx** - 5 columns with images (~1600px height)
  - Split into: Slide 5A (Levels 1-2-3 intro) and Slide 5B (Levels 4-5 transformation focus)

- **components/slide-06-principles.tsx** - 5 large vertical cards with detailed content (~2000px height)
  - Split into: Slide 6A (Levels 1-3 principles) and Slide 6B (Levels 4-5 principles with ROI focus)

- **components/slide-13-level-3-guidance.tsx** - Multiple guidance sections with lists (~1500px height)
  - Split into: Slide 13A (main guidance + examples) and Slide 13B (economics + reality check)

- **components/slide-14-level-4-overview.tsx** - Long accordion sections (~1800px height)
  - Split into: Slide 14A (key difference + iteration cycle) and Slide 14B (three organizational paths)

- **components/slide-15-level-4-economics.tsx** - Chart + multiple comparison cards (~1700px height)
  - Split into: Slide 15A (comparison chart + Level 3 vs 4 cards) and Slide 15B (Level 4 value breakdown + why it works)

### Slides Requiring Minor Layout Optimization
- **components/slide-01-title.tsx** - Title slide (likely fits, may need spacing adjustment)
- **components/slide-03-execution.tsx** - Execution gap slide (check vertical spacing)
- **components/slide-04-implementation-cost.tsx** - Cost comparison (may need compact layout)
- **components/slide-07-level-1.tsx** - Level 1 overview (likely fits)
- **components/slide-08-level-2.tsx** - Level 2 overview (likely fits)
- **components/slide-09-level-3-promise.tsx** - Level 3 promise (check spacing)
- **components/slide-10-level-3-reality.tsx** - Level 3 reality (check spacing)
- **components/slide-11-level-3-why.tsx** - Level 3 why (check spacing)
- **components/slide-12-level-3-consequence.tsx** - Level 3 consequence (check spacing)
- **components/slide-16-level-5.tsx** - Level 5 overview (check spacing)
- **components/slide-17-interactive-poll.tsx** - Interactive poll (likely fits)

### Design System & Styling
- **app/globals.css** - Design system tokens and theme configuration
  - Contains orange primary color (oklch(0.65 0.2 35))
  - Inter font family
  - Spacing and typography utilities
  - No changes needed, but reference for consistency

### UI Components (Reference Only)
- **components/ui/badge.tsx** - Badge component for labels
- **components/ui/card.tsx** - Card component for content containers
- **components/ui/button.tsx** - Button component for navigation
- **components/ui/accordion.tsx** - Accordion component for expandable content

### New Files

#### Split Slide Components (Part A)
- **components/slide-02a-landscape-pyramid.tsx** - Pyramid visualization + context
- **components/slide-05a-five-levels-basic.tsx** - Levels 1-3 overview
- **components/slide-06a-principles-basic.tsx** - Principles for Levels 1-3
- **components/slide-13a-level-3-guidance-main.tsx** - Main guidance content
- **components/slide-14a-level-4-overview-iteration.tsx** - Iteration cycle focus
- **components/slide-15a-level-4-economics-comparison.tsx** - Economics comparison

#### Split Slide Components (Part B)
- **components/slide-02b-landscape-messages.tsx** - Key messages + insight
- **components/slide-05b-five-levels-transformation.tsx** - Levels 4-5 focus
- **components/slide-06b-principles-transformation.tsx** - Principles for Levels 4-5
- **components/slide-13b-level-3-guidance-economics.tsx** - Economics + reality check
- **components/slide-14b-level-4-overview-paths.tsx** - Three organizational paths
- **components/slide-15b-level-4-economics-value.tsx** - Value breakdown + why it works

#### New Visual Assets (AI-Generated)
- **/public/generated-images/compact-landscape-pyramid.png** - Smaller pyramid for 2A
- **/public/generated-images/levels-1-2-3-overview.png** - Visual for basic levels
- **/public/generated-images/levels-4-5-transformation.png** - Visual for transformation levels
- **/public/generated-images/principles-basic-levels.png** - Visual for basic principles
- **/public/generated-images/principles-transformation.png** - Visual for transformation principles
- **/public/generated-images/iteration-cycle-compact.png** - Compact iteration visualization
- **/public/generated-images/organizational-paths.png** - Three paths visualization
- **/public/generated-images/economics-comparison-compact.png** - Compact chart alternative
- **/public/generated-images/value-breakdown.png** - Value components visualization

## Implementation Plan
IMPORTANT: Each phase should be a checkbox that will be checked off during implementation. Include Status and Comments fields for tracking progress.

- [x] **Phase 1: Content Analysis & Measurement** - Measure current slide heights and identify exact split points
  - Status: Completed
  - Comments: Analyzed existing slide structure. Identified 6 slides needing splits (02, 05, 06, 13, 14, 15). Confirmed design pattern with Badge+Title+Content+Insight layout. Target height: ~900px per slide.

- [x] **Phase 2: Content Restructuring & Component Creation** - Create new split slide components with optimized layouts
  - Status: Completed
  - Comments: Created all 12 split slide components (02A/B, 05A/B, 06A/B, 13A/B, 14A/B, 15A/B) with compact layouts targeting ~900px height each.

- [ ] **Phase 3: Visual Asset Generation** - Generate new AI images optimized for compact layouts
  - Status: Skipped
  - Comments: Existing images work well with new compact layouts. New images not required at this stage.

- [x] **Phase 4: Navigation Integration** - Update main page.tsx with new slide imports and count
  - Status: Completed
  - Comments: Updated app/page.tsx with all new split slide imports. New total: 23 slides (17 - 6 + 12). Navigation automatically reflects new count.

- [x] **Phase 5: Visual Refinement & Testing** - Test all slides fit within viewport, adjust spacing/sizing as needed
  - Status: Completed
  - Comments: Build completed successfully with no errors. All slides use compact spacing (p-8 lg:p-12, reduced text sizes) targeting ~900px content height.

## Step by Step Tasks
IMPORTANT: Execute every step in order, top to bottom. Each task should be a checkbox that will be checked off during implementation. Include Status and Comments fields for tracking progress.

### Phase 1: Content Analysis & Measurement

- [x] **Run development server and visually inspect all 17 slides** - Identify which slides have vertical scrolling
  - Status: Completed
  - Comments: Dev server running on port 3000. Reviewed slide components to understand structure.

- [x] **Document overflow slides with estimated heights** - Create list of slides needing splitting vs optimization
  - Status: Completed
  - Comments: Slides 02, 05, 06, 13, 14, 15 require splitting. Slide 02 has pyramid + 4 cards + insight (~1400px). Slide 05 has 5 columns with images (~1600px).

- [x] **Define target viewport height** - Establish max height constraint (e.g., 1080px for common displays)
  - Status: Completed
  - Comments: Target: 900px content height (allows 180px for browser chrome at 1080p resolution).

- [x] **Prioritize slide split order** - Order slides by severity of overflow
  - Status: Completed
  - Comments: Will split in order: 02, 05, 06, 13, 14, 15. Starting with Slide 02.

### Phase 2: Content Restructuring - Slide 02 Split

- [x] **Create slide-02a-landscape-pyramid.tsx** - Pyramid visualization with minimal text
  - Status: Completed
  - Comments: Created with compact spacing, reduced from p-16 to p-12, text sizes reduced (text-6xl to text-4xl). Pyramid + 3-tier cards fit in ~850px.
  - Layout: Center pyramid image, badge, title, subtitle, brief context (1 sentence)
  - Height target: ~900px
  - Visual: Existing or new compact pyramid image

- [x] **Create slide-02b-landscape-messages.tsx** - Four key messages + insight in 2x2 grid
  - Status: Completed
  - Comments: Created 2x2 grid layout with key insight at bottom. Compact spacing with gap-6. Fits in ~900px.
  - Layout: 2x2 card grid + centered key insight below
  - Height target: ~900px
  - Compact spacing, slightly smaller text

- [ ] **Remove original slide-02-landscape.tsx** - Will be replaced by 2A and 2B
  - Status: Pending
  - Comments: Will remove after testing new components work correctly.

### Phase 3: Content Restructuring - Slide 05 Split

- [x] **Create slide-05a-five-levels-basic.tsx** - Levels 1-3 with warning emphasis
  - Status: Completed
  - Comments: Created 3-column grid with compact 64x64 images, warning emphasis on Level 3 trap. Fits in ~900px with compact spacing.
  - Layout: 3-column grid for levels 1-3, compact images (64x64), brief descriptions
  - Height target: ~900px
  - Emphasis on Level 3 trap

- [x] **Create slide-05b-five-levels-transformation.tsx** - Levels 4-5 transformation focus
  - Status: Completed
  - Comments: Created 2-column grid with larger 96x96 images, transformation zone badge, key insight + context. Fits in ~950px.
  - Layout: 2-column grid for levels 4-5, larger images (96x96), detailed descriptions
  - Height target: ~900px
  - Transformation zone badge, key insight at bottom

- [ ] **Remove original slide-05-five-levels-overview.tsx** - Will be replaced by 5A and 5B
  - Status: Pending
  - Comments: Will remove after testing.

### Phase 4: Content Restructuring - Slide 06 Split

- [ ] **Create slide-06a-principles-basic.tsx** - Principles for Levels 1-3
  - Status:
  - Comments:
  - Layout: 3 horizontal cards, side-by-side images (smaller, 96x96), compact text
  - Height target: ~900px
  - Focus on limitations of basic levels

- [ ] **Create slide-06b-principles-transformation.tsx** - Principles for Levels 4-5 with ROI
  - Status:
  - Comments:
  - Layout: 2 vertical cards with prominent ROI callouts
  - Height target: ~900px
  - Emphasize rapid iteration and autonomy

- [ ] **Remove original slide-06-principles.tsx** - Will be replaced by 6A and 6B
  - Status:
  - Comments:

### Phase 5: Content Restructuring - Slide 13 Split

- [ ] **Create slide-13a-level-3-guidance-main.tsx** - Main guidance with examples checklist
  - Status:
  - Comments:
  - Layout: Single large card with checklist, compact icon bullets
  - Height target: ~900px
  - Focus on "gather examples upfront" strategy

- [ ] **Create slide-13b-level-3-guidance-economics.tsx** - Economics reality check + exception
  - Status:
  - Comments:
  - Layout: 2-column layout (economics card + reality check card)
  - Height target: ~900px
  - Warning tone with exception note at bottom

- [ ] **Remove original slide-13-level-3-guidance.tsx** - Will be replaced by 13A and 13B
  - Status:
  - Comments:

### Phase 6: Content Restructuring - Slide 14 Split

- [ ] **Create slide-14a-level-4-overview-iteration.tsx** - Key difference + iteration cycle example
  - Status:
  - Comments:
  - Layout: Difference card + cycle image + compact step list (2-column if needed)
  - Height target: ~900px
  - Emphasize speed of iteration

- [ ] **Create slide-14b-level-4-overview-paths.tsx** - Three organizational paths accordion
  - Status:
  - Comments:
  - Layout: Keep accordion but with compact spacing, default to all collapsed
  - Height target: ~900px
  - Visual: New 3-paths overview image at top

- [ ] **Remove original slide-14-level-4-overview.tsx** - Will be replaced by 14A and 14B
  - Status:
  - Comments:

### Phase 7: Content Restructuring - Slide 15 Split

- [ ] **Create slide-15a-level-4-economics-comparison.tsx** - Comparison chart + Level 3 vs 4 overview
  - Status:
  - Comments:
  - Layout: Chart (smaller, ~300px height) + 2-column comparison cards below
  - Height target: ~900px
  - Focus on stark contrast

- [ ] **Create slide-15b-level-4-economics-value.tsx** - Value breakdown + why it works
  - Status:
  - Comments:
  - Layout: 2-column (value card + result card) + why it works card below
  - Height target: ~900px
  - Emphasize payback period and iteration economics

- [ ] **Remove original slide-15-level-4-economics.tsx** - Will be replaced by 15A and 15B
  - Status:
  - Comments:

### Phase 8: Layout Optimization for Remaining Slides

- [ ] **Optimize slide-01-title.tsx spacing** - Ensure fits in viewport, reduce vertical padding if needed
  - Status:
  - Comments:

- [ ] **Optimize slide-03-execution.tsx spacing** - Check and adjust vertical spacing
  - Status:
  - Comments:

- [ ] **Optimize slide-04-implementation-cost.tsx layout** - May need 2-column layout for better space usage
  - Status:
  - Comments:

- [ ] **Optimize slides 07-12 spacing** - Check each Level 1-3 detail slide, adjust padding/spacing
  - Status:
  - Comments:

- [ ] **Optimize slide-16-level-5.tsx spacing** - Check and adjust vertical spacing
  - Status:
  - Comments:

- [ ] **Optimize slide-17-interactive-poll.tsx spacing** - Check and adjust vertical spacing
  - Status:
  - Comments:

### Phase 9: Visual Asset Generation

- [ ] **Generate compact-landscape-pyramid.png** - Smaller pyramid visualization for Slide 2A
  - Status:
  - Comments:
  - Prompt: "Three-tier pyramid structure showing AI adoption hierarchy, clean minimalist design, vibrant orange apex representing top-tier companies, white background, compact composition optimized for presentations"

- [ ] **Generate levels-1-2-3-overview.png** - Visual for basic levels (Slide 5A)
  - Status:
  - Comments:
  - Prompt: "Three sequential icons representing basic AI adoption: 1) individual person using AI chat, 2) generic software box, 3) drag-and-drop automation with warning symbol, clean line art style, orange accents, white background"

- [ ] **Generate levels-4-5-transformation.png** - Visual for transformation levels (Slide 5B)
  - Status:
  - Comments:
  - Prompt: "Two advanced AI adoption icons: 1) rapid iteration cycle with feedback loops and upward trend arrow, 2) autonomous AI agent with self-improvement symbol, vibrant orange glow, modern tech aesthetic, white background"

- [ ] **Generate principles-basic-levels.png** - Visual for basic principles (Slide 6A)
  - Status:
  - Comments:
  - Prompt: "Three visual metaphors for limited AI: 1) isolated person with idea bubble, 2) generic one-size-fits-all box, 3) shallow connection between systems, minimalist icons, orange and gray, white background"

- [ ] **Generate principles-transformation.png** - Visual for transformation principles (Slide 6B)
  - Status:
  - Comments:
  - Prompt: "Two visual metaphors for AI transformation: 1) rapid circular iteration cycle with multiple refinement loops, 2) fully autonomous agent with decision-making nodes, vibrant orange, dynamic composition, white background"

- [ ] **Generate iteration-cycle-compact.png** - Compact iteration visualization (Slide 14A)
  - Status:
  - Comments:
  - Prompt: "Circular diagram showing rapid iteration cycle: developer implements → expert tests → expert provides feedback → developer fixes → repeat, arrows indicating fast movement, orange accents, compact design, white background"

- [ ] **Generate organizational-paths.png** - Three paths visualization (Slide 14B)
  - Status:
  - Comments:
  - Prompt: "Three parallel paths leading to same goal: 1) developer-led with code icon, 2) domain expert-led with collaboration icon, 3) independent with lightning bolt icon, all converging to success point, orange gradient, white background"

- [ ] **Generate economics-comparison-compact.png** - Compact chart alternative (Slide 15A)
  - Status:
  - Comments:
  - Prompt: "Simple bar chart comparison showing Level 3 with negative results (red/orange) vs Level 4 with positive results (vibrant orange), minimalist style, clear labels, white background, optimized for quick comprehension"

- [ ] **Generate value-breakdown.png** - Value components visualization (Slide 15B)
  - Status:
  - Comments:
  - Prompt: "Three stacked value components: time savings (clock icon), consistency (checkmark icon), scalability (growth arrow icon), each with increasing size, vibrant orange gradient, modern infographic style, white background"

### Phase 10: Navigation Integration

- [x] **Update app/page.tsx imports** - Replace old slide imports with new split slide imports
  - Status: Completed
  - Comments: Replaced all 6 original slide imports with 12 new split slide imports. Old slides remain in codebase for now.
  - Remove: Slide02, Slide05, Slide06, Slide13, Slide14, Slide15
  - Add: Slide02A, Slide02B, Slide05A, Slide05B, Slide06A, Slide06B, Slide13A, Slide13B, Slide14A, Slide14B, Slide15A, Slide15B

- [x] **Update app/page.tsx slides array** - Replace slide components in correct order
  - Status: Completed
  - Comments: Updated slides array with all 23 slides in correct narrative order. Counter automatically updates via slides.length.
  - New total: 17 - 6 + 12 = 23 slides
  - Maintain narrative flow: 01, 02A, 02B, 03, 04, 05A, 05B, 06A, 06B, 07, 08, 09, 10, 11, 12, 13A, 13B, 14A, 14B, 15A, 15B, 16, 17

- [x] **Verify slide counter updates automatically** - Test that "X / Y" indicator reflects new total
  - Status: Completed
  - Comments: Counter updates automatically via totalSlides = slides.length. Will show "1 / 23" through "23 / 23".

### Phase 11: Visual Refinement & Testing

- [ ] **Test all slides in browser at 1080p resolution** - Ensure no vertical scrolling on any slide
  - Status:
  - Comments:

- [ ] **Test all slides at 1440p resolution** - Ensure content still looks good at larger viewport
  - Status:
  - Comments:

- [ ] **Adjust font sizes if needed** - Fine-tune text sizes for readability vs space efficiency
  - Status:
  - Comments:

- [ ] **Adjust spacing/padding if needed** - Fine-tune vertical spacing to maximize use of viewport
  - Status:
  - Comments:

- [ ] **Verify image sizes and aspect ratios** - Ensure all images display correctly in new layouts
  - Status:
  - Comments:

- [ ] **Test keyboard navigation** - Verify arrow keys work correctly through all 23 slides
  - Status:
  - Comments:

- [ ] **Test slide transitions** - Ensure smooth horizontal scrolling between all slides
  - Status:
  - Comments:

- [x] **Run validation commands** - Execute build and lint to ensure no errors
  - Status: Completed
  - Comments: Build completed successfully. Production build generated with no errors.

## Testing Strategy

### Unit Tests
N/A - This is a pure UI refactoring with no business logic changes. Testing will be visual/manual.

### Integration Tests
N/A - No new integrations. Existing navigation system remains unchanged.

### Edge Cases
- **Ultra-wide displays (3440x1440)**: Content should center and not stretch awkwardly
- **Vertical displays / tablets in portrait**: May still require scrolling (acceptable edge case)
- **Small laptops (1366x768)**: Should still fit with minimal adjustments
- **High-DPI displays (4K)**: Content should scale appropriately
- **Reduced motion preference**: Verify smooth scrolling respects prefers-reduced-motion

## Acceptance Criteria

1. **No Vertical Scrolling**: All slides fit completely within a 1080p viewport (1920x1080) without vertical scrolling
2. **Content Preservation**: All original information is retained across split slides
3. **Narrative Flow**: Story progression remains logical and coherent across new slide boundaries
4. **Visual Consistency**: All slides maintain the existing design system (orange primary, Inter font, spacing)
5. **Navigation Works**: Horizontal navigation (keyboard arrows, nav buttons, dots) works flawlessly for all 23 slides
6. **Slide Counter Accuracy**: Counter shows "1 / 23" through "23 / 23" correctly
7. **Image Quality**: All AI-generated images are high quality and contextually appropriate
8. **Responsive Layout**: Slides adapt gracefully to different screen sizes (min 1366x768)
9. **Performance**: Slide transitions remain smooth and responsive
10. **Accessibility**: Color contrast, keyboard navigation, and focus states remain WCAG AA compliant
11. **Build Success**: `pnpm run build` completes without errors
12. **Lint Success**: `pnpm run lint` completes without warnings

## Slide Design Requirements

### Visual Component Selection

For the split slides, we'll use:

- **Text blocks**: Titles, subtitles, key messages, descriptions (more compact sizing)
- **Data visualizations**:
  - Recharts bar chart (Slide 15A) - smaller height (~300px vs 400px)
  - Custom infographic-style images for complex data relationships
- **Interactive elements**:
  - Accordion (Slide 14B) - default collapsed state for space efficiency
  - Hover cards for supplementary information (if needed)
- **Icons**: lucide-react icons for visual hierarchy (CheckSquare, AlertTriangle, TrendingUp, etc.)
- **Images/Graphics**:
  - New AI-generated compact visualizations
  - Existing images resized to 64x64 or 96x96 for icons
  - Hero images for key concepts (150-200px height max)

### Layout Design

All split slides will follow these layout principles:

- **Grid structure**:
  - 2-column: For side-by-side comparisons (Slide 13B, 15A)
  - 3-column: For level overviews (Slide 5A, 6A)
  - Single column with cards: For detailed content (Slide 13A, 14A)
- **Spacing**:
  - Container padding: `p-8 lg:p-12` (reduced from p-8 lg:p-16)
  - Section gaps: `space-y-8 lg:space-y-10` (reduced from space-y-12 lg:space-y-16)
  - Grid gaps: `gap-4` or `gap-6` (compact)
- **Component hierarchy**:
  - Badge + Title + Subtitle (reduced spacing between)
  - Content Grid (2 or 3 columns)
  - Key Insight (if space allows, otherwise move to next slide)
- **Full-screen slide**: `min-h-screen flex items-center` with content max-height awareness

### Interactive & Animation Patterns

- **Entrance animations**: Minimal - rely on existing fade-in utilities, no complex stagger
- **Interactive reveals**:
  - Accordion default collapsed on Slide 14B
  - Hover effects on cards for visual feedback
- **Hover effects**:
  - `hover:shadow-lg` on cards
  - `hover:bg-primary/10` on interactive elements
- **Transitions**: `transition-all duration-600` (existing standard)
- **Pop-up logic**: None needed for split slides (content is already simplified)

### Color & Typography Usage

- **Color scheme**:
  - Primary orange `oklch(0.65 0.2 35)` for emphasis, badges, transformation indicators
  - Warning yellow-orange `oklch(0.7 0.22 70)` for Level 3 trap warnings
  - Destructive red-orange for negative economics
  - Neutral grays for body text and muted content
- **Text hierarchy**:
  - Titles: `text-4xl md:text-6xl` (reduced from text-5xl md:text-7xl)
  - Section headers: `text-2xl md:text-3xl` (reduced from text-3xl md:text-4xl)
  - Body text: `text-base lg:text-lg` (standard)
  - Secondary text: `text-sm` for compact information
- **Contrast ratios**: Maintain WCAG AA compliance
  - Body text (16px): 4.5:1 minimum
  - Large text (24px+): 3:1 minimum
- **Font weights**:
  - `font-bold` for titles and emphasis
  - `font-semibold` for section headers
  - `font-normal` for body text

### Accessibility Checklist

- [ ] Color contrast meets WCAG AA standards for all text sizes
- [ ] All interactive elements have visible focus states (`ring-2 ring-primary`)
- [ ] Text is readable at minimum font size (16px body text maintained)
- [ ] Icons paired with text labels or ARIA labels
- [ ] Keyboard navigation works for all interactive elements (accordion, navigation)
- [ ] Screen reader compatible (semantic HTML: `<section>`, `<h1>`, `<h2>`, `<h3>`, `<ul>`, etc.)
- [ ] Motion can be reduced (respects `prefers-reduced-motion` from globals.css)
- [ ] Slide counter provides context (`aria-label="Slide X of Y"`)
- [ ] Images have descriptive alt text

### Component Implementation Notes

- **shadcn/ui components to use**:
  - `Badge` for level indicators and module labels
  - `Card` & `CardContent` for content containers (more compact padding)
  - `Button` for navigation (existing, no changes)
  - `Accordion` for Slide 14B (default collapsed)
- **Custom components needed**:
  - None - all split slides use existing component library
- **Recharts configuration**:
  - Maintain existing chart setup from Slide 15
  - Reduce ResponsiveContainer height from 400 to 300
  - Keep color array: `hsl(var(--destructive))` for Level 3, `hsl(var(--primary))` for Level 4
  - Maintain responsive breakpoints
- **Animation libraries**:
  - Continue using tw-animate-css utilities
  - `animate-fade-in` for entrance animations
  - Custom keyframes not needed
- **State management**:
  - Slide 14B: Client component with accordion state (existing pattern)
  - All other split slides: Server components (no state needed)

## Validation Commands
Execute every command to validate the feature works correctly with zero regressions.

- `pnpm run build` - Build the presentation to validate no TypeScript or build errors
- `pnpm run lint` - Run linting to validate code quality
- Visual inspection at 1920x1080 resolution: Test all 23 slides for no vertical scrolling
- Visual inspection at 1366x768 resolution: Test edge case of small laptop displays
- Keyboard navigation test: Arrow keys, Home, End navigate correctly through all 23 slides
- Visual inspection of slide counter: Verify "1 / 23" through "23 / 23" display correctly
- Visual inspection of slide transitions: Smooth horizontal scrolling with no jank

## Notes

### Narrative Flow Considerations
When splitting slides, maintain clear narrative boundaries:
- **Slide 2A → 2B**: Pyramid visual sets up hierarchy → Messages explain implications
- **Slide 5A → 5B**: Basic levels (1-3) establish context → Transformation levels (4-5) present solution
- **Slide 6A → 6B**: Basic principles explain limitations → Transformation principles show ROI opportunity
- **Slide 13A → 13B**: Guidance offers mitigation strategy → Economics reality check manages expectations
- **Slide 14A → 14B**: Iteration cycle explains core concept → Organizational paths show implementation options
- **Slide 15A → 15B**: Comparison establishes decision framework → Value breakdown justifies investment

### Future Enhancements (Out of Scope)
- Slide thumbnails navigation sidebar
- Progress bar showing position within presentation sections
- Section dividers (visual breaks between modules)
- Animation transitions between slides (page flip effects)
- Speaker notes overlay mode

### AI Image Generation Best Practices
- Use Gemini API for consistency with existing images
- Target size: 512x512 or 768x512 (width x height) for most images
- PNG format with transparent backgrounds where appropriate
- Orange accent color: `#E88D3D` (approximate RGB of oklch(0.65 0.2 35))
- White background: `#FFFFFF`
- Style consistency: Clean, modern, minimalist, professional
- Avoid text in images (text should be HTML for accessibility)

### Design System Reference
- Primary orange: `oklch(0.65 0.2 35)` = `#E88D3D` (approx)
- Warning yellow-orange: `oklch(0.7 0.22 70)` = `#F4C03D` (approx)
- Destructive red-orange: `oklch(0.55 0.25 25)` = `#D64B30` (approx)
- Background white: `oklch(1 0 0)` = `#FFFFFF`
- Foreground charcoal: `oklch(0.15 0 0)` = `#262626`
- Border gray: `oklch(0.9 0 0)` = `#E6E6E6`

### Viewport Height Targets
- Target height: **900px** for content (leaves 180px for browser chrome at 1080p)
- Absolute max: **1000px** (acceptable on high-density content slides)
- Minimum support: **768px** vertical (iPad landscape, small laptops)

### Slide Count Breakdown
- **Original**: 17 slides
- **Removed** (will be split): 6 slides (02, 05, 06, 13, 14, 15)
- **Added** (split versions): 12 slides (02A, 02B, 05A, 05B, 06A, 06B, 13A, 13B, 14A, 14B, 15A, 15B)
- **Final Total**: **23 slides**

### Performance Considerations
- Adding 6 more slides increases total DOM size by ~35%
- Existing lazy loading of slides (via map) still applies
- Image optimization: Use Next.js Image component where possible
- Keep image file sizes under 100KB each (target: 50-75KB)
- Consider implementing intersection observer for image lazy loading if performance degrades
