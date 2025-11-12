# Feature Planning

Create a new plan in specs/*.md to implement the `Feature` using the exact specified markdown `Plan Format`. Follow the `Instructions` to create the plan use the `Relevant Files` to focus on the right files.

## Instructions

- You're writing a plan to implement a net new feature that will add value to the application.
- Create the plan in the `specs/*.md` file. Name it appropriately based on the `Feature`.
- Use the `Plan Format` below to create the plan.
- Research the codebase to understand existing patterns, architecture, and conventions before planning the feature.
- IMPORTANT: Replace every <placeholder> in the `Plan Format` with the requested value. Add as much detail as needed to implement the feature successfully.
- Use your reasoning model: THINK HARD about the feature requirements, design, and implementation approach.
- Follow existing patterns and conventions in the codebase. Don't reinvent the wheel.
- Design for extensibility and maintainability.
- If you need a new library, use `uv add` and be sure to report it in the `Notes` section of the `Plan Format`.
- Respect requested files in the `Relevant Files` section.
- Start your research by reading the `README.md` file.
- **IMPORTANT:** For slide features, ALWAYS plan AI-generated images using `IMAGE_GENERATION_GUIDE.md` specifications. Every slide should have visually supportive images in the handwritten illustration style with orange color palette.

## Relevant Files

Focus on the following files:
- `README.md` - Contains the project overview and instructions.
- `IMAGE_GENERATION_GUIDE.md` - **CRITICAL:** Style guide for AI-generated images. Must be referenced for all slide image planning.
- `generate-image.ts` - CLI tool for generating images using Gemini API.
- `app/page.tsx` - Main presentation container with slide navigation.
- `components/slide-*.tsx` - Individual slide components.
- `components/ui/**` - Reusable UI primitives from shadcn/ui.
- `app/globals.css` - Design system colors and theme configuration.

Ignore all other files in the codebase.

## Plan Format

```md
# Feature: <feature name>

## Feature Description
<describe the feature in detail, including its purpose and value to users>

## User Story
As a <type of user>
I want to <action/goal>
So that <benefit/value>

## Problem Statement
<clearly define the specific problem or opportunity this feature addresses>

## Solution Statement
<describe the proposed solution approach and how it solves the problem>

## Relevant Files
Use these files to implement the feature:

<find and list the files that are relevant to the feature describe why they are relevant in bullet points. If there are new files that need to be created to implement the feature, list them in an h3 'New Files' section.>

## Implementation Plan
IMPORTANT: Each phase should be a checkbox that will be checked off during implementation. Include Status and Comments fields for tracking progress.

- [ ] **Phase 1: Foundation** - <describe the foundational work needed before implementing the main feature>
  - Status:
  - Comments:

- [ ] **Phase 2: Core Implementation** - <describe the main implementation work for the feature>
  - Status:
  - Comments:

- [ ] **Phase 3: Integration** - <describe how the feature will integrate with existing functionality>
  - Status:
  - Comments:

## Step by Step Tasks
IMPORTANT: Execute every step in order, top to bottom. Each task should be a checkbox that will be checked off during implementation. Include Status and Comments fields for tracking progress.

<list step by step tasks as checkboxes with h3 headers for grouping. Format each task as:
- [ ] **Task description** - <detailed explanation>
  - Status:
  - Comments:

Use as many h3 headers as needed to organize the tasks. Order matters, start with the foundational shared changes required then move on to the specific implementation. Include creating tests throughout the implementation process. Your last step should be running the `Validation Commands` to validate the feature works correctly with zero regressions.>

## Testing Strategy
### Unit Tests
<describe unit tests needed for the feature>

### Integration Tests
<describe integration tests needed for the feature>

### Edge Cases
<list edge cases that need to be tested>

## Acceptance Criteria
<list specific, measurable criteria that must be met for the feature to be considered complete>

## Slide Design Requirements
IMPORTANT: If this feature involves creating or modifying presentation slides, complete this section. Otherwise, mark as "N/A".

### Image Generation Strategy
IMPORTANT: Every slide should be visually supported by AI-generated images. Reference the IMAGE_GENERATION_GUIDE.md for complete style specifications.

<plan the images needed for this slide:
- Number of images: How many images will support this slide's narrative (typically 1-3)
- Image subjects: What should each image depict?
- Aspect ratios: Choose appropriate ratios (16:9 for hero, 1:1 for cards, 3:2 for balanced scenes)
- Prompt drafts: Draft the generation prompts using the template from IMAGE_GENERATION_GUIDE.md
- Integration points: Where in the slide layout will each image appear?

REMEMBER:
- All images must use the handwritten illustration style with orange color palette
- Use the base prompt template: "A professional handwritten illustration of [SUBJECT], featuring warm orange tones (vibrant orange #F5A623, light orange, dark orange accents), with charcoal outlines and white/light gray backgrounds..."
- Generate images using: `tsx generate-image.ts "[PROMPT]" --ratio [RATIO]`
- Each image should complement and enhance the slide's message>

### Visual Component Selection
<specify which visual elements will be used and why they're appropriate for the narrative:
- Text blocks: For key messages, quotes, definitions
- Data visualizations: Charts (Recharts), tables, infographics - specify chart type and data structure
- Interactive elements: Pop-ups, hover cards, accordions, tabs - describe interaction pattern
- Icons: lucide-react icons for visual hierarchy and emphasis
- AI-Generated Images: Specify subjects and integration (MUST reference Image Generation Strategy above)>

### Layout Design
<describe the slide layout using the existing design system:
- Grid structure: 1/2/5 column patterns with responsive breakpoints
- Spacing: Use Tailwind spacing scale (p-8 lg:p-16 for containers, gap-4/6/8 for grids)
- Component hierarchy: Badge + Title + Subtitle + Content Grid + Key Insights
- Full-screen slide: min-h-screen with proper vertical centering>

### Interactive & Animation Patterns
<detail the interactive elements that enhance visual appeal:
- Entrance animations: fade-in, slide-up, stagger effects using tw-animate-css
- Interactive reveals: Elements that appear on interaction (click, hover, scroll)
- Hover effects: Shadow, color changes, scale transforms
- Transitions: Smooth state changes with transition-all
- Pop-up logic: When/how elements appear (onClick, onHover, onScroll)>

### Color & Typography Usage
<specify how the design system will be applied:
- Color scheme: Primary orange, status colors (basic/warning/transformation), or neutral grays
- Text hierarchy: text-7xl for titles, text-4xl for headers, text-lg/xl for body
- Contrast ratios: Ensure WCAG AA compliance (4.5:1 for body text, 3:1 for large text)
- Font weights: font-bold for emphasis, font-normal for body>

### Accessibility Checklist
<list accessibility requirements to ensure inclusive design:
- [ ] Color contrast meets WCAG AA standards (4.5:1 minimum)
- [ ] All interactive elements have visible focus states (ring utilities)
- [ ] Text is readable at minimum font size (16px for body text)
- [ ] Icons paired with text labels or ARIA labels
- [ ] Keyboard navigation works for all interactive elements
- [ ] Screen reader compatible (semantic HTML, ARIA attributes)
- [ ] Motion can be reduced (respects prefers-reduced-motion)>

### Component Implementation Notes
<technical notes for implementing the visual design:
- shadcn/ui components to use: Badge, Card, Button, Accordion, HoverCard, etc.
- Custom components needed: List any new reusable components
- Recharts configuration: Chart types, responsive settings, color arrays
- Animation libraries: tw-animate-css utilities or custom keyframes
- State management: Client component with useState for interactivity>

## Validation Commands
Execute every command to validate the feature works correctly with zero regressions.

<list commands you'll use to validate with 100% confidence the feature is implemented correctly with zero regressions. every command must execute without errors so be specific about what you want to run to validate the feature works as expected. Include commands to test the feature end-to-end.>
- `pnpm run build` - Build the presentation to validate no TypeScript or build errors
- `pnpm run lint` - Run linting to validate code quality
- Visual inspection: Test slide navigation, animations, and interactive elements in browser

## Notes
<optionally list any additional notes, future considerations, or context that are relevant to the feature that will be helpful to the developer>
```

## Feature
$ARGUMENTS