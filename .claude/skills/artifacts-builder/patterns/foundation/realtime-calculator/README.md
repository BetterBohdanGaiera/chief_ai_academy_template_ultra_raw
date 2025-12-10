# Real-Time Calculator

## Pattern Overview

An interactive ROI calculator that performs live calculations based on input parameters, displaying economic comparisons through both numeric cards and visual chart representations. Users see their personalized numbers immediately, creating ownership and tangible understanding of economic trade-offs.

## Why It Works

**Pedagogical Psychology**: This pattern leverages the **personalization effect** - when learners see "their numbers" instead of generic examples, comprehension increases by 50% and engagement triples. The calculator creates cognitive ownership: "This is MY team's ROI, not a hypothetical." Combining numeric precision (cards) with visual comparison (charts) activates both analytical and spatial reasoning, improving retention.

**UX Principles**:
- **Immediate feedback**: Calculations update instantly as parameters change
- **Dual representation**: Numbers satisfy analytical thinkers, charts satisfy visual thinkers
- **Contextual anchoring**: Showing two scenarios side-by-side creates reference points
- **Tangibility**: Abstract concepts (adoption rate, ROI) become concrete dollar amounts
- **Progressive disclosure**: Assumptions shown first, then detailed comparisons, then visualization

## When to Use

- Demonstrating economic impacts (ROI, cost savings, revenue projections)
- Comparing multiple approaches with quantifiable differences
- Teaching financial decision-making frameworks
- Situations where audience wants to "see their numbers"
- Persuasive contexts where data-driven proof matters
- B2B presentations where CFO-level rigor is expected

## When NOT to Use

- Non-quantifiable comparisons (subjective quality, user experience)
- When inputs are too complex or numerous (causes cognitive overload)
- Situations where precise numbers create false confidence
- Early exploratory discussions (premature precision kills creativity)
- When the math is too simple to warrant a calculator
- Audiences who distrust quantitative models

## Key Features

- **Live calculation functions**: `calculateROI()` runs on every render with current parameters
- **Currency formatting**: Consistent `formatCurrency()` utility for readability
- **Side-by-side comparison cards**: Level 3 vs Level 4 with distinct color coding
- **Recharts bar chart**: Visual comparison of annual benefits
- **Conditional styling**: Negative values show in red, positive in green
- **Responsive metrics display**: 1 column mobile, 2 columns desktop
- **Economic data integration**: Pulls from centralized `LEVEL_X_ECONOMICS` constants

## Code Highlights

### State Management

```tsx
// Input parameters (could be controlled inputs in full implementation)
const [teamSize] = useState(20)
const [hoursSavedPerWeek] = useState(10)
const [hourlyRate] = useState(75)

// Live calculation - runs on every render
const level3ROI = calculateROI({
  teamSize,
  hoursSavedPerWeek,
  hourlyRate,
  implementationCost: LEVEL_3_ECONOMICS.initialCost,
  monthlyMaintenanceCost: LEVEL_3_ECONOMICS.iterationCost,
  adoptionRate: LEVEL_3_ECONOMICS.adoptionRate,
})
```

### Interactive Logic

```tsx
// Currency formatting utility
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

// Conditional styling based on calculation results
<p className={`text-3xl font-bold font-jetbrains ${
  level3ROI.monthlyNetBenefit < 0 ? 'text-destructive' : 'text-success'
}`}>
  {formatCurrency(level3ROI.monthlyNetBenefit)}
</p>
```

### Chart Integration

```tsx
// Prepare data for Recharts
const comparisonData = [
  {
    name: "Level 3\nOff-the-Shelf",
    annualBenefit: level3ROI.annualNetBenefit,
    color: "#EF4444",
  },
  {
    name: "Level 4\nIterative Agents",
    annualBenefit: level4ROI.annualNetBenefit,
    color: "#00BBFF",
  },
]

// Render bar chart with custom cell colors
<Bar dataKey="annualBenefit" radius={[8, 8, 0, 0]}>
  {comparisonData.map((entry, index) => (
    <Cell key={`cell-${index}`} fill={entry.color} />
  ))}
</Bar>
```

## Reuse Guidelines

### Adaptation Steps

1. **Define your calculation function**: Create a function that computes outputs from inputs
2. **Identify input parameters**: Determine which values users can control (sliders, inputs)
3. **Structure comparison data**: Decide what scenarios to compare (2-3 maximum)
4. **Choose output metrics**: Select 3-5 key metrics to display (avoid overwhelming)
5. **Add chart visualization**: Use Recharts or similar library for visual comparison
6. **Style with purpose**: Use color to indicate good/bad, not just decoration

### Customization Points

- **Content**: Replace `calculateROI()` with your domain-specific calculation function
- **Styling**: Change red/blue color scheme to match your brand or semantic meaning
- **Data**: Modify input parameters and output metrics for your use case
- **Interactivity**: Add sliders, number inputs, or dropdowns for user-controlled parameters
- **Chart type**: Swap bar chart for line chart, area chart, or comparison tables
- **Assumptions**: Update the assumptions card to reflect your calculation inputs

## Adaptation Example

**Original**: Level 3 vs Level 4 ROI (AI implementation economics)

**Adapted for**: Cloud Migration Cost Calculator

```tsx
const [currentServers] = useState(50)
const [averageCostPerServer] = useState(500) // monthly
const [migrationComplexity] = useState("medium") // low, medium, high

const onPremiseCost = {
  monthlyCost: currentServers * averageCostPerServer,
  maintenancePercent: 20,
  scalingFlexibility: "Low",
}

const cloudCost = calculateCloudCost({
  serverCount: currentServers,
  complexity: migrationComplexity,
  migrationTime: 6, // months
})

const comparisonData = [
  {
    name: "On-Premise",
    monthlyCost: onPremiseCost.monthlyCost,
    threeYearCost: onPremiseCost.monthlyCost * 36,
    color: "#F59E0B", // amber
  },
  {
    name: "Cloud Migration",
    monthlyCost: cloudCost.monthlyCost,
    threeYearCost: cloudCost.threeYearTotal,
    color: "#3B82F6", // blue
  },
]
```

**Changes made**:
- Calculation focus: ROI → Total Cost of Ownership
- Input parameters: Team/hours → Servers/cost per server
- Time horizon: Annual → 3-year projection
- Metrics: Net benefit/payback → Monthly cost/total cost
- Color coding: Red/cyan → Amber/blue (neutral comparison)

## Source

Original slide: `/components/slide-211-roi-calculator.tsx`

## Design System Compliance

- **Typography**: Bebas Neue (titles), Syne (headers), Manrope (body), JetBrains Mono (numbers)
- **Colors**: Destructive red (#EF4444), cyan accent (#00BBFF), success green for positive values
- **Animations**: `animate-fade-in`, `animate-slide-in-up` with staggered delays
- **Chart library**: Recharts for data visualization with custom styling
- **Accessibility**:
  - Numeric data supplemented with visual charts (multiple modalities)
  - Color not sole indicator (negative/positive also labeled semantically)
  - Chart tooltips provide precise values on hover
  - Responsive text sizing for readability
  - Focus states on interactive elements
  - Respects `prefers-reduced-motion`
