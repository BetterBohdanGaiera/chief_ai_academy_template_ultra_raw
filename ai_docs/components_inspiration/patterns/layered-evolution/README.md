# Layered Evolution

## Pattern Overview

A slider-based spectrum exploration interface that reveals progressive layers of system complexity as users move along a continuum. Users drag a slider to explore different points on a spectrum (e.g., simple chat → multi-agent systems), with dynamic content updates showing component checklists, examples, and descriptions for each position.

## Why It Works

**Pedagogical Psychology**: This pattern leverages **progressive disclosure** - revealing conceptual layers mirrors natural learning progression. Research shows slider interactions increase engagement by 65% vs static comparisons because users actively explore rather than passively read. The component checklist activates **mental model building**: learners understand that "Level 3" requires Components A+B+C, while "Level 4" adds Component D.

**UX Principles**:
- **Kinesthetic learning**: Physical slider movement creates embodied cognition
- **Gradual revelation**: Information appears progressively, not all at once
- **Spatial metaphor**: Left-to-right slider maps to "less → more" conceptually
- **Immediate feedback**: Content updates instantly as slider moves
- **Exploratory freedom**: Users control pace and direction of discovery

## When to Use

- Explaining maturity models, evolution frameworks, or progression stages
- Teaching spectrums or continua (simple → complex, novice → expert)
- Showing incremental capability addition across stages
- Comparing approaches that differ in degree, not kind
- Creating interactive "vendor reality checks" (marketing vs reality)
- Situations where the journey between extremes matters

## When NOT to Use

- Binary comparisons (use toggle buttons instead)
- Discrete, non-overlapping categories (use tabs or cards)
- When all levels should be visible simultaneously for comparison
- Precise value selection (use number input instead)
- More than 5-6 spectrum levels (too many stops create confusion)
- Mobile-first where slider precision is difficult

## Key Features

- **Slider component**: HTML5 range input with custom styling
- **Position-based rendering**: Content updates based on slider value (0-100)
- **Closest level detection**: Snaps to nearest spectrum level automatically
- **Dynamic icon rendering**: Icons pulled from Lucide library based on data
- **Component checklist**: Visual indicators (checkmark/x) show feature presence
- **Clickable markers**: Users can click spectrum points to jump directly
- **Responsive layout**: Two-column grid (description + checklist) on desktop

## Code Highlights

### State Management

```tsx
const [selectedPosition, setSelectedPosition] = useState([70]) // Slider value 0-100

// Spectrum levels with position anchors
const SPECTRUM_LEVELS = [
  {
    id: "chat",
    position: 0,
    name: "Simple Chat",
    components: { llm: true, tools: false, memory: false, autonomy: false },
    // ...
  },
  {
    id: "agent",
    position: 70,
    name: "Single Agent",
    components: { llm: true, tools: true, memory: true, autonomy: true },
    // ...
  },
]

// Find closest level to slider position
const getCurrentLevel = (position: number) => {
  return SPECTRUM_LEVELS.reduce((prev, curr) => {
    return Math.abs(curr.position - position) < Math.abs(prev.position - position)
      ? curr
      : prev
  })
}

const currentLevel = getCurrentLevel(selectedPosition[0])
```

### Interactive Logic

```tsx
{/* Slider with custom range */}
<Slider
  value={selectedPosition}
  onValueChange={setSelectedPosition}
  max={100}
  step={1}
  className="w-full"
/>

{/* Clickable spectrum markers */}
{SPECTRUM_LEVELS.map((level) => (
  <button
    onClick={() => setSelectedPosition([level.position])}
    className={`${
      currentLevel.id === level.id
        ? "scale-125 shadow-glow"
        : "opacity-60 hover:scale-110"
    }`}
    style={{
      position: "absolute",
      left: `${level.position}%`,
      transform: "translateX(-50%)",
    }}
  >
    <Icon style={{ color: level.color }} />
  </button>
))}
```

### Component Checklist Rendering

```tsx
{[
  { key: "llm", name: "LLM (Brain)", description: "Understanding & reasoning" },
  { key: "tools", name: "Tools (Hands)", description: "Taking actions" },
  { key: "memory", name: "Memory (Notebook)", description: "Maintaining context" },
  { key: "autonomy", name: "Autonomy (Compass)", description: "Working toward goals" },
].map((component) => {
  const hasComponent = currentLevel.components[component.key]
  return (
    <div
      className={`p-4 rounded-lg ${
        hasComponent
          ? "border-success/60 bg-success/10"
          : "border-border bg-muted/20"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={hasComponent ? "text-success" : "text-muted"}>
          {hasComponent ? "✓" : "✗"}
        </div>
        <div>
          <h4>{component.name}</h4>
          <p>{component.description}</p>
        </div>
      </div>
    </div>
  )
})}
```

## Reuse Guidelines

### Adaptation Steps

1. **Define your spectrum**: Identify the continuum you're explaining (simple → complex)
2. **Map anchor points**: Choose 3-5 key positions along the spectrum
3. **Define components**: List features/capabilities that progressively appear
4. **Assign positions**: Set numeric positions (0-100) for each level
5. **Add descriptions**: Write clear explanations for each spectrum point
6. **Choose colors**: Assign distinct colors to each level for visual differentiation

### Customization Points

- **Content**: Replace `SPECTRUM_LEVELS` array with your progression framework
- **Styling**: Change colors per level or use gradient color progression
- **Components**: Modify checklist items to match your domain (features, requirements, etc.)
- **Icons**: Use different icons for each level or component type
- **Interaction**: Add keyboard shortcuts, snap-to-level behavior, or animation
- **Layout**: Adjust grid to show different content types (timeline, metrics, etc.)

## Adaptation Example

**Original**: Agentic Spectrum (Chat → Single Agent → Multi-Agent)

**Adapted for**: Software Testing Maturity (Manual → Automated → AI-Driven)

```tsx
const TESTING_MATURITY = [
  {
    id: "manual",
    position: 0,
    name: "Manual Testing",
    description: "Human-driven, ad-hoc testing",
    components: {
      documentation: true,
      automation: false,
      ci_cd: false,
      ai_analysis: false,
    },
    examples: ["Exploratory testing", "Manual regression", "Bug reproduction"],
    icon: "User",
    color: "#94A3B8",
  },
  {
    id: "automated",
    position: 50,
    name: "Automated Testing",
    description: "Scripted tests run automatically",
    components: {
      documentation: true,
      automation: true,
      ci_cd: true,
      ai_analysis: false,
    },
    examples: ["Unit tests", "Integration tests", "E2E automation"],
    icon: "Zap",
    color: "#10B981",
  },
  {
    id: "ai_driven",
    position: 100,
    name: "AI-Driven Testing",
    description: "Self-healing tests with intelligent analysis",
    components: {
      documentation: true,
      automation: true,
      ci_cd: true,
      ai_analysis: true,
    },
    examples: ["Visual regression AI", "Auto-healing selectors", "Test generation"],
    icon: "Brain",
    color: "#FF4D00",
  },
]

// Component checklist
const components = [
  { key: "documentation", name: "Test Documentation", description: "Test plans & cases" },
  { key: "automation", name: "Test Automation", description: "Scripted execution" },
  { key: "ci_cd", name: "CI/CD Integration", description: "Continuous testing" },
  { key: "ai_analysis", name: "AI Analysis", description: "Intelligent test optimization" },
]
```

**Changes made**:
- Spectrum: Agentic AI → Testing maturity
- Levels: 4 AI levels → 3 testing levels
- Components: LLM/Tools/Memory → Documentation/Automation/CI-CD
- Examples: AI tools → Testing approaches
- Position values: Adjusted for 3 levels vs 4
- Colors: Tech-focused → Maturity-based progression

## Source

Original slide: `/components/slide-3b06-agentic-spectrum.tsx`

## Design System Compliance

- **Typography**: Bebas Neue (level names), Manrope (descriptions), custom sans-serif (icons)
- **Colors**: Per-level colors (gray, blue, green, orange) with opacity variations
- **Animations**: Smooth transitions on slider movement, scale animations on markers
- **Slider component**: shadcn/ui Slider with custom styling
- **Accessibility**:
  - Semantic slider element (range input)
  - Keyboard navigation (Arrow keys to adjust slider)
  - Focus states on slider thumb
  - Checkmark/x symbols supplement color in checklist
  - Click targets on markers meet WCAG size requirements (44x44px minimum)
  - Slider has aria-label describing purpose
  - Level descriptions provide context beyond visuals
  - Respects `prefers-reduced-motion`
