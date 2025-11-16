# Button Toggle Comparison

## Pattern Overview

A binary toggle interface that allows users to switch between two contrasting scenarios (e.g., "poor" vs "excellent"), dynamically updating a grid of comparison cards to show dramatically different outcomes for identical use cases. This pattern creates a memorable cognitive anchor by placing opposing viewpoints side-by-side.

## Why It Works

**Pedagogical Psychology**: This pattern leverages the **cognitive contrast principle** - our brains learn most effectively when we can directly compare opposing examples. By toggling between "poor execution" and "excellent execution" of the same use cases, learners create mental anchors that stick. Research shows binary comparisons increase retention by up to 40% compared to single-example presentations.

**UX Principles**:
- **Active engagement**: Clicking the toggle transforms passive viewing into active exploration
- **Immediate feedback**: Content updates instantly, creating a satisfying cause-and-effect loop
- **Visual differentiation**: Color-coding (red for poor, green for excellent) creates instant emotional associations
- **Surprise factor**: Dramatic metric differences (5% vs 95% adoption) create "aha moments"

## When to Use

- Comparing two opposing outcomes or approaches (good vs bad, before vs after, naive vs expert)
- Teaching through contrast (showing what NOT to do alongside what TO do)
- Demonstrating that execution quality matters more than the use case itself
- Creating memorable mental anchors for complex concepts
- Situations where you want users to explore both perspectives actively

## When NOT to Use

- Comparing more than 2 scenarios (use a different selector pattern like tabs or dropdowns)
- When the differences between scenarios are subtle or nuanced (toggle implies clear binary choice)
- For data that changes continuously along a spectrum (use a slider instead)
- When one option is clearly "wrong" and should never be selected (just show the right way)
- Mobile-first experiences where large comparison grids don't fit well

## Key Features

- **Binary state management**: Simple `useState` toggle between two data sets
- **Dynamic content rendering**: All cards re-render with new data on toggle
- **Color-coded visual system**: Red/destructive for poor, green/success for excellent
- **Staggered card animations**: Each card animates in with incremental delay
- **Button variant states**: Active button gets filled background, inactive gets outline
- **Transition animations**: Smooth 300ms transitions on button states, 500ms on card changes
- **Responsive grid**: 1 column mobile, 3 columns desktop

## Code Highlights

### State Management

```tsx
type ExecutionType = "poor" | "excellent"

const [activeView, setActiveView] = useState<ExecutionType>("poor")

// Data structured as object with two keys matching state type
const executionData = {
  poor: { /* ... data ... */ },
  excellent: { /* ... data ... */ }
}

const currentData = executionData[activeView]
```

### Interactive Logic

```tsx
// Toggle buttons with dynamic styling based on active state
<Button
  variant={activeView === "poor" ? "default" : "outline"}
  onClick={() => setActiveView("poor")}
  className={`transition-all duration-300 ${
    activeView === "poor"
      ? "bg-destructive hover:bg-destructive/90 text-white"
      : "hover:bg-destructive/10 hover:border-destructive/40"
  }`}
>
  <XCircle className="h-5 w-5 mr-2" />
  Poor Execution
</Button>

// Cards use unique keys to force re-render with animation
<Card
  key={`${activeView}-${index}`}
  className={`${currentData.borderColor} border-2 transition-all`}
  style={{ animationDelay: `${index * 100}ms` }}
>
```

### Color-Coded System

```tsx
// Data structure includes visual theme per scenario
const executionData = {
  poor: {
    color: "text-destructive",
    bgColor: "bg-destructive/5",
    borderColor: "border-destructive/40",
    // ...
  },
  excellent: {
    color: "text-success",
    bgColor: "bg-success/5",
    borderColor: "border-success/40",
    // ...
  }
}
```

## Reuse Guidelines

### Adaptation Steps

1. **Define your binary states**: Determine the two contrasting scenarios you want to compare
2. **Structure your data**: Create an object with two keys matching your state values
3. **Customize metrics**: Replace adoption/outcome/metric with your own comparison dimensions
4. **Adjust color coding**: Choose colors that emotionally align with your scenarios
5. **Modify card count**: Change the grid columns based on how many examples you need
6. **Update copy**: Replace title, subtitle, and key message with your content

### Customization Points

- **Content**: Replace `executionData` object with your comparison scenarios and metrics
- **Styling**: Modify `color`, `bgColor`, `borderColor` for different visual themes
- **Data**: Add/remove example cards or change metric fields (adoption, outcome, etc.)
- **Icons**: Replace Lucide icons with your preferred icon library or custom SVGs
- **Grid layout**: Change `grid-cols-1 lg:grid-cols-3` to adjust card count per row
- **Animation timing**: Adjust `animationDelay` multiplier and transition durations

## Adaptation Example

**Original**: Poor vs Excellent Execution (AI implementation quality)

**Adapted for**: Manual vs Automated Workflow (productivity comparison)

```tsx
type WorkflowType = "manual" | "automated"

const [activeView, setActiveView] = useState<WorkflowType>("manual")

const workflowData = {
  manual: {
    title: "Manual Workflow",
    icon: Users,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
    examples: [
      {
        process: "Invoice Processing",
        timeSpent: "4 hours/day",
        accuracy: "85%",
        satisfaction: "Low morale",
        icon: Clock,
        iconColor: "text-amber-600",
      },
      // ... more examples
    ],
  },
  automated: {
    title: "Automated Workflow",
    icon: Zap,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
    examples: [
      {
        process: "Invoice Processing",
        timeSpent: "15 min/day",
        accuracy: "99.5%",
        satisfaction: "Team empowered",
        icon: TrendingUp,
        iconColor: "text-blue-600",
      },
      // ... more examples
    ],
  },
}
```

**Changes made**:
- State type: `ExecutionType` → `WorkflowType`
- Keys: `poor/excellent` → `manual/automated`
- Metrics: `adoption/outcome/metric` → `timeSpent/accuracy/satisfaction`
- Colors: `destructive/success` → `amber/blue`
- Copy: Replaced all execution-focused language with workflow terminology

## Source

Original slide: `/components/slide-103-execution-interactive.tsx`

## Design System Compliance

- **Typography**: Bebas Neue (titles), Syne (subtitles), Manrope (body), JetBrains Mono (metrics)
- **Colors**: Custom `destructive` (#FF006E) and `success` (#00FF88) with opacity variations
- **Animations**: `animate-fade-in`, `animate-slide-in-up`, `animate-scale-in` with staggered delays
- **Accessibility**:
  - Semantic button elements for toggles
  - ARIA-compliant focus states
  - Color contrast meets WCAG AA (text on backgrounds)
  - Keyboard navigation supported (Tab + Enter)
  - Respects `prefers-reduced-motion`
