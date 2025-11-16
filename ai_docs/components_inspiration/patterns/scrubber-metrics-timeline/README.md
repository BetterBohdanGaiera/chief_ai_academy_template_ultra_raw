# Scrubber Metrics Timeline

## Pattern Overview

A click-to-expand card selector that allows users to explore multiple implementation paths or options, revealing detailed pros/cons and recommendations when clicked. Each path is presented as a clickable card showing expanded details including advantages, considerations, and best-use scenarios.

## Why It Works

**Pedagogical Psychology**: This pattern leverages **temporal control** and **progressive disclosure** principles. Users select which path interests them most, creating a sense of autonomy and personalized learning. Research shows that learner-controlled exploration increases information retention by 30% compared to linear presentations. The pros/cons framework activates critical thinking by forcing comparison of trade-offs.

**UX Principles**:
- **Exploration over prescription**: Users discover information rather than being told
- **Information hierarchy**: Key details shown first, deeper details revealed on demand
- **Visual feedback**: Selected cards scale up and change color, signaling state change
- **Cognitive chunking**: Breaking complex decisions into discrete, explorable options
- **Curiosity gap**: Collapsed cards hint at hidden information, encouraging exploration

## When to Use

- Presenting 2-4 distinct implementation approaches or strategic options
- Teaching decision-making frameworks with trade-offs
- Showing timeline-based progression (iteration cycles, maturity levels)
- Situations where each option has legitimate use cases (no single "right" answer)
- Content where pros/cons comparison helps learners make informed choices
- Mobile-responsive scenarios (cards stack vertically on small screens)

## When NOT to Use

- More than 4-5 options (creates decision paralysis and visual clutter)
- When there's a single recommended path (just present it directly)
- Linear processes where order matters (use a stepper/wizard instead)
- Continuous data ranges (use a slider or timeline scrubber)
- When expanded content is very long (consider dedicated pages)
- Situations requiring simultaneous comparison of all options

## Key Features

- **Click-to-expand cards**: Click once to expand, click again to collapse
- **Single-select interaction**: Only one card expanded at a time (optional behavior)
- **Dynamic icon rendering**: Icons pulled from Lucide library based on data
- **Three-section expanded view**: Pros (green checkmarks), Cons (amber warnings), Best For (highlighted box)
- **Scale animation on select**: Selected card scales to 105% with smooth transition
- **Color-coded feedback**: Cyan border for selected, neutral for unselected
- **Responsive grid**: 1 column mobile, 3 columns desktop

## Code Highlights

### State Management

```tsx
const [selectedPath, setSelectedPath] = useState<string | null>(null)

// Toggle selection (click again to deselect)
onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}

// Check if current card is selected
const isSelected = selectedPath === path.id
```

### Interactive Logic

```tsx
// Dynamic styling based on selection state
<Card
  className={`cursor-pointer transition-all duration-300 ${
    isSelected
      ? "border-2 border-cyan-400 shadow-lg scale-105 bg-cyan-50/50"
      : "border-2 border-cyan-200 hover:border-cyan-300 hover:shadow-md"
  }`}
  onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
>
  {/* Conditionally render expanded content */}
  {isSelected && (
    <div className="animate-fade-in">
      {/* Pros */}
      <ul>
        {path.pros.map((pro, idx) => (
          <li key={idx}>
            <span className="text-emerald-600">✓</span>
            <span>{pro}</span>
          </li>
        ))}
      </ul>
      {/* Cons */}
      {/* Best For */}
    </div>
  )}
</Card>
```

### Dynamic Icon Rendering

```tsx
import * as LucideIcons from "lucide-react"

// Icon name stored in data as string
const IconComponent = LucideIcons[path.icon as keyof typeof LucideIcons] || LucideIcons.Circle

// Render dynamically
<IconComponent className="w-6 h-6 text-cyan-600" />
```

## Reuse Guidelines

### Adaptation Steps

1. **Define your data structure**: Create an array of path/option objects with required fields
2. **Add pros/cons/bestFor**: Populate advantages, considerations, and use-case recommendations
3. **Choose icons**: Select appropriate Lucide icons for each option
4. **Customize colors**: Replace cyan theme with your preferred color scheme
5. **Adjust card count**: Modify grid to match number of options (2-4 ideal)
6. **Update copy**: Replace title, subtitle, and instruction text

### Customization Points

- **Content**: Replace `IMPLEMENTATION_PATHS` array with your option data
- **Styling**: Change `cyan` colors to match your theme (border, bg, text)
- **Data**: Add/remove fields in path objects (timeline, cost, complexity, etc.)
- **Icons**: Use different icon libraries or custom SVGs
- **Interaction**: Modify to allow multiple expanded cards simultaneously
- **Layout**: Adjust grid columns for different option counts

## Adaptation Example

**Original**: Three Implementation Paths (API-first, Repo-first, Hybrid)

**Adapted for**: Product Pricing Tiers (Starter, Professional, Enterprise)

```tsx
const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter Plan",
    icon: "Rocket",
    description: "Perfect for individuals and small teams",
    price: "$29/month",
    pros: [
      "Quick setup, no credit card required",
      "5 team members included",
      "Email support within 24 hours",
    ],
    cons: [
      "Limited to 100 projects/month",
      "No advanced analytics",
      "Community support only",
    ],
    bestFor: "Freelancers and startups testing the waters",
  },
  {
    id: "professional",
    name: "Professional Plan",
    icon: "Briefcase",
    description: "For growing teams with serious needs",
    price: "$99/month",
    pros: [
      "Unlimited projects",
      "Advanced analytics dashboard",
      "Priority email + chat support",
      "SSO and team permissions",
    ],
    cons: [
      "Higher monthly commitment",
      "Requires technical setup for SSO",
    ],
    bestFor: "Mid-size teams scaling operations",
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    icon: "Building",
    description: "Custom solutions for large organizations",
    price: "Custom pricing",
    pros: [
      "Dedicated account manager",
      "Custom integrations and SLAs",
      "On-premise deployment option",
      "Unlimited everything",
    ],
    cons: [
      "Requires sales conversation",
      "Higher price point",
      "Longer onboarding process",
    ],
    bestFor: "Large enterprises with complex requirements",
  },
]
```

**Changes made**:
- Data structure: Added `price` field, removed technical implementation details
- Color scheme: Could change cyan to purple/blue for pricing context
- Icons: Rocket, Briefcase, Building (instead of technical icons)
- Copy: Pros/cons focused on features, not technical trade-offs
- Use case: Changed from implementation strategy to pricing decision

## Source

Original slide: `/components/slide-210-level4-iterative.tsx`

## Design System Compliance

- **Typography**: Bebas Neue (display titles), Manrope (body text)
- **Colors**: Cyan accent (#00BBFF), emerald for pros, amber for cons
- **Animations**: `animate-fade-in`, `animate-slide-in-up` with delays, scale transition on select
- **Accessibility**:
  - Semantic button/clickable card elements
  - Keyboard navigation (Tab + Enter to expand)
  - Focus states visible on all cards
  - Color contrast meets WCAG AA
  - Checkmark and warning symbols supplement color coding
  - Respects `prefers-reduced-motion`
