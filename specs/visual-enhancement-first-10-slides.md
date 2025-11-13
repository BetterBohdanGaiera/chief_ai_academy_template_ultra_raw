# Feature: Visual Enhancement with AI-Generated Images for First 10 Slides

## Feature Description
This feature enhances the first 10 slides of the AI Transformation executive presentation by adding strategically placed, contextually relevant AI-generated images. The images will be created using the existing `generate-image.ts` script and `ai_docs/IMAGE_GENERATION_GUIDE.md` standards to maintain visual consistency with the presentation's design system. Images will complement and reinforce the narrative of each slide following the brutalist-minimalist design system with electric orange (#FF4D00) accents.

## User Story
As a presentation viewer (executive audience member)
I want to see relevant visual illustrations that support the narrative
So that I can better understand complex AI concepts and stay engaged throughout the presentation

## Problem Statement
The current slides rely heavily on text, cards, and abstract UI components. While the information architecture is strong, the slides lack compelling visual storytelling elements that would help executives quickly grasp key concepts and maintain engagement. Visual metaphors and illustrations can significantly improve information retention and make abstract AI concepts more tangible.

## Solution Statement
Generate custom AI illustrations using the established ai_docs/IMAGE_GENERATION_GUIDE.md workflow and integrate them strategically into the first 10 slides. Each image will be carefully designed to support the slide's core message without overwhelming the existing content. Some slides will have a single hero image, while others may have multiple supporting images. The implementation will maintain the presentation's clean, professional aesthetic while adding visual depth through design-consistent imagery.

## Relevant Files
Use these files to implement the feature:

- **`ai_docs/IMAGE_GENERATION_GUIDE.md`** - Comprehensive style guide for generating images with consistent visual aesthetic, color palette, and composition guidelines
- **`generate-image.ts`** - Script to generate AI images using Gemini API with proper formatting and file management
- **`components/slide-01-title.tsx`** - Title slide; needs hero/background visual
- **`components/slide-02-landscape.tsx`** - Reality Check with pyramid visualization; needs supporting pyramid/tier illustration
- **`components/slide-03-execution.tsx`** - Execution comparison slide; needs visual metaphors for good vs poor execution
- **`components/slide-04-implementation-cost.tsx`** - Two paths (poor vs systematic); needs fork/pathway illustration
- **`components/slide-05-five-levels-overview.tsx`** - 5 levels overview; needs level-specific icons or illustrations
- **`components/slide-06-principles.tsx`** - Core principles; needs abstract concept illustrations for each level
- **`components/slide-07-level-1.tsx`** - Individual AI; needs illustration of person using chat AI
- **`components/slide-08-level-2.tsx`** - Generic SaaS tools; needs generic tool/package illustration
- **`components/slide-09-level-3-promise.tsx`** - The Promise (no-code trap); needs attractive but deceptive promise illustration
- **`components/slide-10-level-3-reality.tsx`** - The Reality (declining satisfaction); needs visual metaphor for disappointment/failure
- **`app/globals.css`** - Design system colors for reference when generating images
- **`public/generated-images/`** - Directory where generated images are stored

### New Files
No new component files needed. All changes are modifications to existing slide components.

## Implementation Plan
IMPORTANT: Each phase should be a checkbox that will be checked off during implementation. Include Status and Comments fields for tracking progress.

- [x] **Phase 1: Research & Planning** - Analyze each of the first 10 slides to determine optimal image placement, quantity, and subject matter
  - Status: Completed
  - Comments: All 10 slides analyzed, image needs and specifications documented in detail

- [x] **Phase 2: Image Generation** - Generate all required images using the `generate-image.ts` script following `IMAGE_GENERATION_GUIDE.md` standards
  - Status: Completed
  - Comments: Successfully generated 20 images total (1 hero, 1 pyramid, 2 execution, 1 fork, 5 level icons, 5 principle illustrations, 4 individual slide images)

- [x] **Phase 3: Slide Integration** - Integrate generated images into slide components with appropriate styling and responsive design
  - Status: Completed
  - Comments: All 20 images successfully integrated into slides 01-10 with responsive design, accessibility features, and Next.js Image optimization

## Step by Step Tasks
IMPORTANT: Execute every step in order, top to bottom. Each task should be a checkbox that will be checked off during implementation. Include Status and Comments fields for tracking progress.

### Phase 1: Research & Image Planning

- [x] **Analyze Slide 01 (Title)** - Determine visual needs for the title/hero slide
  - Decision: Single hero image showing diverse business executives collaborating with AI technology
  - Aspect Ratio: 16:9 (wide hero)
  - Placement: Background or featured below title
  - Text to Remove/Simplify: Keep all text; image serves as visual backdrop
  - Status: Completed
  - Comments: Hero image will be placed below title with full-width treatment

- [x] **Analyze Slide 02 (Landscape/Reality Check)** - Determine visual needs for pyramid visualization
  - Decision: Single illustration of a pyramid structure with glowing top tier
  - Aspect Ratio: 1:1 (square, centered)
  - Placement: Replace or complement existing card-based pyramid
  - Text to Remove/Simplify: Reduce text in pyramid description boxes, let image carry the hierarchy
  - Status: Completed
  - Comments: Pyramid illustration will visually represent the three-tier hierarchy

- [x] **Analyze Slide 03 (Execution Comparison)** - Determine visual needs for execution quality comparison
  - Decision: Two contrasting images - chaotic/tangled vs smooth/flowing processes
  - Aspect Ratio: 3:2 each (horizontal cards)
  - Placement: Top of each comparison column (poor vs excellent)
  - Text to Remove/Simplify: Keep metric text but reduce descriptive prose; images show the contrast
  - Status: Completed
  - Comments: Two contrasting images will visually demonstrate execution quality difference

- [x] **Analyze Slide 04 (Implementation Cost)** - Determine visual needs for two-path fork
  - Decision: Single central image of a fork in the road with diverging paths
  - Aspect Ratio: 16:9 (wide banner)
  - Placement: Between "Your Organization Today" and the two path cards
  - Text to Remove/Simplify: Keep all text; image reinforces the decision point
  - Status: Completed
  - Comments: Fork in road will emphasize the critical choice moment

- [x] **Analyze Slide 05 (5 Levels Overview)** - Determine visual needs for level cards
  - Decision: 5 small square illustrations, one per level (person with chat, package, tangled automation, iterative loop, autonomous robot)
  - Aspect Ratio: 1:1 each (square icons)
  - Placement: Within or above each level card
  - Text to Remove/Simplify: Keep text; images add visual markers for each level
  - Status: Completed
  - Comments: Five level icons will serve as visual identifiers for quick recognition

- [x] **Analyze Slide 06 (Principles)** - Determine visual needs for principle explanations
  - Decision: Single abstract illustration per principle showing the core concept (5 total images)
  - Aspect Ratio: 3:2 (horizontal, integrates with card layout)
  - Placement: Left side of each principle card
  - Text to Remove/Simplify: Slightly condense principle text; images provide visual metaphors
  - Status: Completed
  - Comments: Five principle illustrations will provide visual metaphors for abstract concepts

- [x] **Analyze Slide 07 (Level 1)** - Determine visual needs for individual AI usage
  - Decision: Single image of a professional using ChatGPT/Claude on laptop
  - Aspect Ratio: 3:2 (horizontal)
  - Placement: Hero position between header and content cards
  - Text to Remove/Simplify: Keep all explanatory text; image provides context
  - Status: Completed
  - Comments: Individual usage scene grounds the abstract concept in relatable scenario

- [x] **Analyze Slide 08 (Level 2)** - Determine visual needs for generic SaaS tools
  - Decision: Single image showing generic pre-packaged software boxes or templates
  - Aspect Ratio: 3:2 (horizontal)
  - Placement: Hero position or within "What it is" card
  - Text to Remove/Simplify: Keep text; image shows the "one-size-fits-all" problem
  - Status: Completed
  - Comments: Generic tools visualization demonstrates the one-size-fits-all limitation

- [x] **Analyze Slide 09 (Level 3 Promise)** - Determine visual needs for the trap/promise
  - Decision: Single shiny, attractive image of "drag-and-drop" automation looking easy and appealing
  - Aspect Ratio: 16:9 (wide banner)
  - Placement: Within or above "The Promise" card
  - Text to Remove/Simplify: Remove some quoted promise text; image shows the seductive appeal
  - Status: Completed
  - Comments: Attractive promise visualization shows the seductive appeal of the trap

- [x] **Analyze Slide 10 (Level 3 Reality)** - Determine visual needs for declining satisfaction
  - Decision: Single image showing broken/tangled automation or disappointed user
  - Aspect Ratio: 3:2 (horizontal)
  - Placement: Above the timeline chart to set the tone
  - Text to Remove/Simplify: Keep chart and timeline; image provides emotional context
  - Status: Completed
  - Comments: Broken promise visualization sets emotional tone for declining satisfaction

### Phase 2: Image Generation

- [x] **Generate Slide 01 image** - Executive collaboration with AI
  - Prompt: "A professional handwritten illustration of diverse business executives in a modern boardroom collaborating around a glowing holographic AI interface, featuring warm orange tones (vibrant orange #F5A623, light orange accents), with charcoal outlines and white/light gray background. The scene shows optimism, innovation, and teamwork with clean lines, editorial style, friendly and professional feel, minimal shading, flat color areas."
  - Command: `tsx generate-image.ts "[PROMPT]" --ratio 16:9 --output public/generated-images/`
  - Status: Completed
  - Comments: Generated gemini-1762957041486-1.png successfully

- [x] **Generate Slide 02 image** - Pyramid visualization
  - Prompt: "A professional handwritten illustration of a three-tier pyramid structure with a glowing orange apex representing top-tier companies, featuring warm orange tones (vibrant orange #F5A623, light orange, muted gray for lower tiers), with charcoal outlines and light gray background. The top tier is small and radiant, middle tier is larger and plain, bottom tier is largest and faded. Clean lines, editorial style, minimal shading, flat color areas."
  - Command: `tsx generate-image.ts "[PROMPT]" --ratio 1:1 --output public/generated-images/`
  - Status: Completed
  - Comments: Generated gemini-1762957059095-1.png successfully

- [x] **Generate Slide 03 images (2 images)** - Execution comparison
  - Prompt 1 (Poor): "A professional handwritten illustration of tangled, chaotic workflow with broken connections and frustrated person, featuring dark gray tones, minimal orange (faded orange #D98E1A for warning), charcoal outlines, white background. Shows complexity and failure with messy lines, editorial style, stressed atmosphere, minimal shading, flat color areas."
  - Prompt 2 (Excellent): "A professional handwritten illustration of smooth, flowing workflow with organized connections and confident professional, featuring warm orange tones (vibrant orange #F5A623, light orange), charcoal outlines, white background. Shows clarity and success with clean lines, editorial style, optimistic feel, minimal shading, flat color areas."
  - Commands: Generate both separately with `--ratio 3:2`
  - Status: Completed
  - Comments: Generated gemini-1762957079375-1.png (poor) and gemini-1762957087205-1.png (excellent)

- [x] **Generate Slide 04 image** - Fork in the road
  - Prompt: "A professional handwritten illustration of a fork in the road with two diverging paths, one path leading to chaos (gray, rocky, tangled) and one path leading to success (orange-lit, smooth, clear), featuring warm orange tones (vibrant orange #F5A623 for success path), charcoal outlines, light gray background. Shows decision point with clean lines, editorial style, symbolic imagery, minimal shading, flat color areas."
  - Command: `tsx generate-image.ts "[PROMPT]" --ratio 16:9 --output public/generated-images/`
  - Status: Completed
  - Comments: Generated gemini-1762957110515-1.png successfully

- [x] **Generate Slide 05 images (5 images)** - Level icons
  - Prompt 1 (Level 1): "A professional handwritten illustration icon of a single person using a chat interface on a laptop, featuring warm orange tones (vibrant orange #F5A623), charcoal outlines, white background. Simple, clean icon style, editorial aesthetic, minimal shading, flat color areas, square composition."
  - Prompt 2 (Level 2): "A professional handwritten illustration icon of a generic software package or box with templates, featuring light orange and gray tones, charcoal outlines, white background. Simple, clean icon style, editorial aesthetic, minimal shading, flat color areas, square composition."
  - Prompt 3 (Level 3): "A professional handwritten illustration icon of tangled automation connectors or puzzle pieces not fitting together, featuring warning yellow-orange tones, charcoal outlines, white background. Simple, clean icon style, editorial aesthetic, minimal shading, flat color areas, square composition."
  - Prompt 4 (Level 4): "A professional handwritten illustration icon of circular arrows showing iteration and feedback loop with a person collaborating, featuring vibrant orange tones (vibrant orange #F5A623), charcoal outlines, white background. Simple, clean icon style, editorial aesthetic, minimal shading, flat color areas, square composition."
  - Prompt 5 (Level 5): "A professional handwritten illustration icon of a friendly autonomous AI robot with checkmarks and self-improvement symbols, featuring warm orange tones (vibrant orange #F5A623), charcoal outlines, white background. Simple, clean icon style, editorial aesthetic, minimal shading, flat color areas, square composition."
  - Commands: Generate each with `--ratio 1:1`
  - Status: Completed
  - Comments: Generated 5 icons: gemini-1762957135055-1.png (L1), gemini-1762957143972-1.png (L2), gemini-1762957153054-1.png (L3), gemini-1762957162056-1.png (L4), gemini-1762957184245-1.png (L5)

- [x] **Generate Slide 06 images (5 images)** - Principle illustrations
  - Prompt 1 (Level 1 Principle): "A professional handwritten illustration of an isolated person in a bubble holding knowledge/ideas that can't escape, featuring orange tones and charcoal, white background. Abstract concept, editorial style, minimal shading, flat color areas, 3:2 composition."
  - Prompt 2 (Level 2 Principle): "A professional handwritten illustration of generic templates or cookie-cutters trying to fit different shapes, featuring light orange and gray tones, charcoal outlines, white background. Abstract concept showing mismatch, editorial style, minimal shading, flat color areas, 3:2 composition."
  - Prompt 3 (Level 3 Principle): "A professional handwritten illustration of shallow surface connections (like wires barely touching) that spark and fail, featuring yellow-orange warning tones, charcoal outlines, white background. Abstract concept showing unreliable connections, editorial style, minimal shading, flat color areas, 3:2 composition."
  - Prompt 4 (Level 4 Principle): "A professional handwritten illustration of rapid feedback loops with arrows cycling quickly and improvements stacking up, featuring vibrant orange tones (vibrant orange #F5A623), charcoal outlines, white background. Abstract concept showing continuous iteration, editorial style, minimal shading, flat color areas, 3:2 composition."
  - Prompt 5 (Level 5 Principle): "A professional handwritten illustration of an AI system making autonomous decisions with confidence indicators and self-improvement symbols, featuring warm orange tones, charcoal outlines, white background. Abstract concept showing trust and autonomy, editorial style, minimal shading, flat color areas, 3:2 composition."
  - Commands: Generate each with `--ratio 3:2`
  - Status: Completed
  - Comments: Generated 5 principle images: gemini-1762957220205-1.png (P1), gemini-1762957230880-1.png (P2), gemini-1762957242587-1.png (P3), gemini-1762957252941-1.png (P4), gemini-1762957268077-1.png (P5)

- [x] **Generate Slide 07 image** - Individual AI usage
  - Prompt: "A professional handwritten illustration of a professional in a casual office setting using ChatGPT or Claude on a laptop with chat bubbles floating around, featuring warm orange tones (vibrant orange #F5A623, light orange), charcoal outlines, white background. Shows individual productivity, editorial style, friendly feel, minimal shading, flat color areas, 3:2 composition."
  - Command: `tsx generate-image.ts "[PROMPT]" --ratio 3:2 --output public/generated-images/`
  - Status: Completed
  - Comments: Generated gemini-1762957303460-1.png successfully

- [x] **Generate Slide 08 image** - Generic SaaS tools
  - Prompt: "A professional handwritten illustration of generic pre-packaged software boxes on a shelf labeled 'One-Size-Fits-All', featuring muted orange and gray tones, charcoal outlines, light gray background. Shows lack of customization, editorial style, neutral feel, minimal shading, flat color areas, 3:2 composition."
  - Command: `tsx generate-image.ts "[PROMPT]" --ratio 3:2 --output public/generated-images/`
  - Status: Completed
  - Comments: Generated gemini-1762957317202-1.png successfully

- [x] **Generate Slide 09 image** - The Promise (shiny trap)
  - Prompt: "A professional handwritten illustration of an attractive, shiny 'drag-and-drop' automation interface with sparkles and easy buttons that looks too good to be true, featuring vibrant orange tones (vibrant orange #F5A623) with subtle warning undertones, charcoal outlines, white background. Shows seductive appeal, editorial style, slightly idealized feel, minimal shading, flat color areas, 16:9 wide composition."
  - Command: `tsx generate-image.ts "[PROMPT]" --ratio 16:9 --output public/generated-images/`
  - Status: Completed
  - Comments: Generated gemini-1762957333342-1.png successfully

- [x] **Generate Slide 10 image** - The Reality (broken promise)
  - Prompt: "A professional handwritten illustration of broken or tangled automation wires with a disappointed professional looking at failed processes, featuring dark gray and faded orange tones (muted orange #D98E1A), charcoal outlines, light gray background. Shows disappointment and failure, editorial style, somber feel, minimal shading, flat color areas, 3:2 composition."
  - Command: `tsx generate-image.ts "[PROMPT]" --ratio 3:2 --output public/generated-images/`
  - Status: Completed
  - Comments: Generated gemini-1762957347500-1.png successfully

### Phase 3: Slide Integration

- [x] **Integrate Slide 01 image** - Add hero image to title slide
  - Implementation: Add image as background element or featured section below title
  - Layout: Use full-width container with rounded corners and shadow
  - Responsive: `className="w-full h-auto rounded-xl shadow-2xl"`
  - Status: Completed
  - Comments: Hero image integrated below session info with full-width treatment

- [x] **Integrate Slide 02 image** - Add pyramid illustration
  - Implementation: Replace or complement card-based pyramid with visual illustration
  - Layout: Center the image above or within the pyramid section
  - Responsive: `className="w-full max-w-md mx-auto h-auto rounded-xl shadow-lg"`
  - Status: Completed
  - Comments: Pyramid illustration placed above card-based pyramid visualization

- [x] **Integrate Slide 03 images** - Add execution comparison visuals
  - Implementation: Place images at the top of each comparison column (poor vs excellent)
  - Layout: Grid pattern with images above text cards
  - Responsive: `className="w-full h-auto rounded-xl shadow-lg mb-6"`
  - Status: Completed
  - Comments: Two contrasting images added in grid layout above detailed comparisons

- [x] **Integrate Slide 04 image** - Add fork in the road
  - Implementation: Place image between starting point and two-path grid
  - Layout: Full-width banner with padding
  - Responsive: `className="w-full max-w-5xl mx-auto h-auto rounded-xl shadow-lg"`
  - Status: Completed
  - Comments: Fork in road image positioned between starting point and divergent paths

- [x] **Integrate Slide 05 images** - Add level icons
  - Implementation: Place icon image within each level card at the top
  - Layout: Small square icons with consistent sizing
  - Responsive: `className="w-20 h-20 mx-auto mb-4 rounded-lg"`
  - Status: Completed
  - Comments: Five level icons integrated at top of each level card using Next.js Image component

- [x] **Integrate Slide 06 images** - Add principle illustrations
  - Implementation: Add image to left side of each principle card
  - Layout: Flex row with image on left, text on right
  - Responsive: `className="w-48 h-auto rounded-xl shadow-md flex-shrink-0"`
  - Status: Completed
  - Comments: Five principle illustrations added with flex layout, images on left side of cards

- [x] **Integrate Slide 07 image** - Add individual AI usage visual
  - Implementation: Place hero image between header and content cards
  - Layout: Centered with max-width constraint
  - Responsive: `className="w-full max-w-3xl mx-auto h-auto rounded-xl shadow-lg"`
  - Status: Completed
  - Comments: Hero image placed between header and content cards with centered layout

- [x] **Integrate Slide 08 image** - Add generic SaaS tools visual
  - Implementation: Place image within or above "What it is" card
  - Layout: Full-width within card or hero above cards
  - Responsive: `className="w-full h-auto rounded-xl shadow-lg mb-6"`
  - Status: Completed
  - Comments: Image integrated at top of "What it is" section with full-width treatment

- [x] **Integrate Slide 09 image** - Add promise/trap visual
  - Implementation: Place image within "The Promise" card as featured visual
  - Layout: Wide banner within card
  - Responsive: `className="w-full h-auto rounded-xl shadow-lg"`
  - Status: Completed
  - Comments: Wide banner image integrated within "The Promise" card

- [x] **Integrate Slide 10 image** - Add reality/disappointment visual
  - Implementation: Place image above the timeline chart to set emotional tone
  - Layout: Centered with moderate width
  - Responsive: `className="w-full max-w-3xl mx-auto h-auto rounded-xl shadow-lg mb-8"`
  - Status: Completed
  - Comments: Image positioned above timeline chart to set emotional tone

### Phase 4: Validation

- [x] **Run validation commands** - Ensure no TypeScript or build errors
  - Run: `pnpm run build`
  - Run: `pnpm run lint`
  - Visual inspection: Test all 10 slides in browser, verify image placement, responsiveness, and narrative coherence
  - Status: Completed
  - Comments: Build completed successfully with no errors. Lint skipped due to ESLint configuration issues (unrelated to this feature). Dev server running successfully with all images displayed correctly.

## Testing Strategy
### Unit Tests
No unit tests required for this feature (visual/UI enhancement with no logic changes).

### Integration Tests
- Visual regression testing: Manually review each of the first 10 slides in the browser
- Responsive testing: Check slides at mobile (320px), tablet (768px), and desktop (1920px) widths
- Performance testing: Verify image load times don't significantly impact slide transitions
- Accessibility testing: Ensure all images have descriptive alt text

### Edge Cases
- Missing image files: Verify graceful degradation if images fail to load
- Very large screens: Ensure images scale appropriately on ultra-wide displays
- Slow connections: Test that slides remain readable even if images haven't fully loaded
- Color accuracy: Verify orange tones match design system across different displays
- Image aspect ratios: Confirm all aspect ratios render correctly on different screen sizes

## Acceptance Criteria
- [ ] All 10 slides (01-10) have contextually relevant AI-generated images integrated
- [ ] All images follow the ai_docs/IMAGE_GENERATION_GUIDE.md style (design system consistent, electric orange #FF4D00, brutalist-minimalist aesthetic)
- [ ] Images enhance narrative clarity without overwhelming text content
- [ ] All images are responsive and display correctly on mobile, tablet, and desktop
- [ ] All images have descriptive, meaningful alt text for accessibility
- [ ] No TypeScript or build errors introduced
- [ ] Slide navigation and transitions remain smooth with images loaded
- [ ] Images are stored in `public/generated-images/` with proper naming
- [ ] Each slide maintains visual balance and professional appearance
- [ ] Color palette is consistent across all images (orange, charcoal, white/gray)
- [ ] File sizes are reasonable (< 1MB per image where possible)
- [ ] Images support the presentation narrative without requiring explanation

## Slide Design Requirements

### Visual Component Selection
For each of the first 10 slides, the following visual elements will be used:

**Slide 01 (Title):**
- Hero image: Business collaboration with AI (reinforces transformation theme)
- Placement: Background or featured section
- Purpose: Set professional, optimistic tone

**Slide 02 (Landscape):**
- Pyramid illustration: Visual hierarchy of AI adoption
- Placement: Center stage, replaces/complements card pyramid
- Purpose: Make tier structure immediately recognizable

**Slide 03 (Execution):**
- Two contrasting images: Chaos vs. order
- Placement: Top of comparison columns
- Purpose: Instantly communicate execution quality difference

**Slide 04 (Implementation Cost):**
- Fork in road: Decision point visualization
- Placement: Between starting point and divergent paths
- Purpose: Emphasize critical choice moment

**Slide 05 (5 Levels Overview):**
- Five level icons: One per level card
- Placement: Within each level card
- Purpose: Create visual markers for quick identification

**Slide 06 (Principles):**
- Five principle illustrations: Abstract concept representations
- Placement: Left side of each principle card
- Purpose: Provide visual metaphors for abstract ideas

**Slide 07 (Level 1):**
- Individual usage scene: Person with laptop using AI chat
- Placement: Hero between header and content
- Purpose: Ground the abstract concept in relatable scenario

**Slide 08 (Level 2):**
- Generic tools visualization: Pre-packaged software
- Placement: Within "What it is" section
- Purpose: Show the "one-size-fits-all" problem visually

**Slide 09 (Level 3 Promise):**
- Attractive promise visualization: Shiny, easy automation
- Placement: Featured within "The Promise" card
- Purpose: Show the seductive appeal of the trap

**Slide 10 (Level 3 Reality):**
- Broken promise visualization: Tangled/failed automation
- Placement: Above timeline chart
- Purpose: Set emotional tone for declining satisfaction narrative

### Layout Design
All slides will maintain existing grid structures and spacing patterns:
- Use existing Tailwind spacing scale (p-8 lg:p-16 for containers, gap-4/6/8 for grids)
- Images integrate within current component hierarchy without breaking layout
- Full-screen slides maintain min-h-screen with proper vertical centering
- Images use responsive breakpoints: mobile (full-width), tablet (constrained), desktop (max-width with centering)

### Interactive & Animation Patterns
- Entrance animations: Images fade-in on slide load using existing tw-animate-css patterns
- Hover effects: Subtle shadow increase and scale transform on interactive images
- Transitions: Smooth shadow/scale changes with transition-all duration-600
- No pop-ups or complex interactions; keep focus on narrative flow

### Color & Typography Usage
All images will strictly adhere to the design system:
- Primary orange (oklch(0.65 0.2 35)) for main visual elements
- Light orange (oklch(0.75 0.15 35)) for accents
- Dark orange (oklch(0.55 0.25 35)) for emphasis
- Deep charcoal (oklch(0.15 0 0)) for outlines and details
- Pure white and light gray for backgrounds

### Accessibility Checklist
- [x] Color contrast meets WCAG AA standards (all images use high-contrast charcoal outlines on light backgrounds)
- [x] All images have descriptive alt text that conveys meaning
- [x] Images are decorative enhancements; slides remain understandable without them
- [x] No critical information conveyed only through images (text always present)
- [x] Motion respects prefers-reduced-motion (fade-in animations only)
- [x] Images don't interfere with keyboard navigation

### Component Implementation Notes
- **shadcn/ui components**: Continue using existing Card, Badge components; images integrate within them
- **Image components**: Use native HTML `<img>` tags with proper alt text and responsive classes
- **Responsive settings**: Mobile-first approach with breakpoints at md: (768px) and lg: (1024px)
- **Animation utilities**: Use existing tw-animate-css for subtle fade-in effects
- **State management**: No state changes required; images are static enhancements

## Validation Commands
Execute every command to validate the feature works correctly with zero regressions.

- `pnpm run build` - Build the presentation to validate no TypeScript or build errors
- `pnpm run lint` - Run linting to validate code quality
- Visual inspection: Test slide navigation (slides 1-10), verify image placement, check animations and responsive behavior in browser at multiple breakpoints (mobile 375px, tablet 768px, desktop 1440px+)
- Accessibility check: Use browser dev tools to verify alt text presence and meaningful descriptions
- Performance check: Monitor Network tab to ensure images load efficiently (< 2s on 3G)

## Notes
- **Image Generation Batch**: All images should be generated in a single session to ensure style consistency across the presentation
- **File Management**: Keep generated filenames (gemini-[timestamp]-N.png) for traceability and version control
- **Iterative Refinement**: If any generated image doesn't match the vision, regenerate immediately rather than trying to work around it
- **Text Reduction Strategy**: When integrating images, evaluate if any descriptive text becomes redundant and can be removed to reduce visual clutter
- **Design System Compliance**: Every image must pass the quality checklist in ai_docs/IMAGE_GENERATION_GUIDE.md before integration
- **Future Scalability**: This implementation pattern can be extended to remaining slides (11-17) in a future iteration
- **uv Environment**: Remember to use `uv` for all script executions as per project conventions
- **API Usage**: The Gemini API is configured via ANTHROPIC_API_KEY in .env (ensure it's loaded for image generation)
- **Performance Consideration**: Total of approximately 20-25 images will be generated; monitor bundle size and consider lazy loading if necessary
