# Progressive Disclosure Pattern

**Source:** `components/slides/foundation/f2/22-team-size.tsx`

## Why It Works

This pattern leverages progressive disclosure and chunking principles to manage cognitive load and maintain engagement:

**Cognitive Chunking**: By breaking information into 3-4 distinct stages (e.g., Year 1, Year 2, Year 3), the pattern respects Miller's Law (7±2 items in working memory). Each stage is digestible on its own, preventing the overwhelm of seeing 30+ data points simultaneously. This is the same principle used in multi-step forms and video game tutorials.

**Temporal Scaffolding**: Revealing stages sequentially (300ms delays) creates a narrative arc—beginning, middle, end. The brain naturally seeks patterns and completion, so viewers stay engaged to see "how the story ends." This is the Zeigarnik Effect: unfinished sequences create tension that compels completion.

**Comparison by Juxtaposition**: Showing Stage 1 → Stage 2 → Stage 3 side-by-side allows instant comparison. Viewers can see "headcount grows from 0-1 → 9-14 → 20-30" without memorizing numbers. Spatial memory (position on page) reinforces temporal memory (order of stages).

**Anchor and Adjust**: The first stage (smallest commitment) acts as an anchor. Subsequent stages feel more reasonable because they're compared to that anchor, not to an absolute standard. This is anchoring bias used productively—"Stage 3 needs 20-30 people" feels acceptable after seeing Stage 1 only needs 0-1 new hires.

## When to Use

1. **Multi-Phase Plans**: When presenting roadmaps, implementation plans, or growth strategies with distinct phases (e.g., pilot → scale → enterprise)

2. **Maturity Models**: When showing progression through capability levels (e.g., Crawl → Walk → Run, or Level 1 → Level 5)

3. **Budget Proposals**: When breaking down costs by stage/year to make large investments more palatable

4. **Team Scaling**: When explaining hiring plans over time (this pattern's original use case)

5. **Feature Rollouts**: When showing phased product releases (MVP → V1 → V2)

## When NOT to Use

1. **All-at-Once Decisions**: If the viewer needs to see all data simultaneously to make a decision (e.g., comparing 10 vendors side-by-side), don't use progressive disclosure

2. **Simple Data**: If you only have 1-2 tables or lists, revealing them "progressively" is unnecessary ceremony

3. **Random-Access Information**: If viewers need to jump between stages frequently (e.g., reference docs), use tabs or an accordion instead of timed reveals

4. **Impatient Audiences**: If your audience is time-pressed executives who want to scan everything in 10 seconds, show all data at once

## Key Features

- **Staggered Animation Reveals**: Each stage fades in 300ms after the previous (customizable)
- **Responsive Table Design**: Tables adapt to mobile with horizontal scrolling if needed
- **Highlighted Summary Rows**: Bottom row of each table uses primary color for emphasis
- **Context Cards**: Post-table insight and budget cards provide interpretation
- **Semantic HTML Tables**: Proper `<table>`, `<thead>`, `<tbody>` structure for accessibility
- **Hover States**: Subtle row highlighting on hover for improved scannability

## Code Highlights

**Staggered Animation Timing**:
```tsx
style={{
  animation: 'fade-in 0.5s ease-out forwards',
  animationDelay: `${600 + stageIndex * 300}ms`,
  opacity: 0,
  animationFillMode: 'both'
}}
```
Each stage appears 300ms after the previous. Adjust multiplier to speed up (200ms) or slow down (500ms).

**Summary Row Highlighting**:
```tsx
<tr className="bg-primary/5 border-t-2 border-primary/30">
  <td className="font-bold text-foreground">{stage.summary.label}</td>
  <td className="font-bold text-primary">{stage.summary.value}</td>
  <td className="text-foreground/70">{stage.summary.notes}</td>
</tr>
```
Thicker top border (`border-t-2`) and background tint separate summary from data rows.

**Responsive Table Wrapper**:
```tsx
<div className="overflow-x-auto ...">
  <table className="w-full">
```
`overflow-x-auto` enables horizontal scrolling on narrow screens without breaking layout.

**Hover State for Rows**:
```tsx
<tr className="hover:bg-muted/5 transition-colors">
```
Subtle background change on hover improves scannability (eyes can track current row).

## Reuse Guidelines

### Step 1: Define Your Stages

```tsx
const yourStages: Stage[] = [
  {
    title: "PHASE 1 (MVP)",
    subtitle: "Proof of concept",
    rows: [
      { role: "Feature A", headcount: "Basic", notes: "Core functionality only" },
      { role: "Feature B", headcount: "None", notes: "Deferred to Phase 2" },
    ],
    summary: {
      label: "Total features",
      value: "3",
      notes: "Minimum viable product"
    }
  },
  // ... add 2-4 stages total
]
```

### Step 2: Customize Table Columns

Replace "Role/Headcount/Notes" with your data:
```tsx
<thead>
  <tr>
    <th>Feature</th>        {/* Column 1 */}
    <th>Maturity</th>       {/* Column 2 */}
    <th>Dependencies</th>   {/* Column 3 */}
  </tr>
</thead>
```

### Step 3: Adjust Animation Timing

```tsx
// Faster reveals (snappier)
animationDelay: `${400 + stageIndex * 200}ms`

// Slower reveals (more deliberate)
animationDelay: `${800 + stageIndex * 500}ms`
```

### Step 4: Customize Insight and Budget Cards

Replace the "Key Insight" and "Budget Guidance" sections with your context:
```tsx
<Card>
  <CardContent>
    <h3>Key Takeaway</h3>
    <p>Your custom summary or call-to-action...</p>
  </CardContent>
</Card>
```

### Step 5: Optional - Convert to Interactive Accordion

For click-to-expand behavior instead of timed reveals:
```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

<Accordion type="single" collapsible>
  {stages.map((stage, idx) => (
    <AccordionItem key={idx} value={`stage-${idx}`}>
      <AccordionTrigger>{stage.title}</AccordionTrigger>
      <AccordionContent>
        {/* Table goes here */}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

## Example Adaptations

### Adaptation 1: Product Roadmap (Feature Rollout)

```tsx
const productStages = [
  {
    title: "Q1 2025 (MVP Launch)",
    subtitle: "Core features",
    rows: [
      { role: "User Authentication", headcount: "Complete", notes: "OAuth + SSO" },
      { role: "Dashboard", headcount: "Basic", notes: "Read-only views" },
      { role: "Reporting", headcount: "None", notes: "Deferred to Q2" },
    ],
    summary: { label: "Total features", value: "5", notes: "Minimum viable" }
  },
  {
    title: "Q2 2025 (Scale-Up)",
    subtitle: "Enhanced functionality",
    rows: [
      { role: "Reporting", headcount: "Complete", notes: "Custom reports + export" },
      { role: "Collaboration", headcount: "Basic", notes: "Comments + sharing" },
      { role: "API Access", headcount: "Beta", notes: "Invite-only" },
    ],
    summary: { label: "Total features", value: "12", notes: "Production-ready" }
  },
  // ... Q3, Q4
]
```

### Adaptation 2: Maturity Model (Security Posture)

```tsx
const securityStages = [
  {
    title: "LEVEL 1 (Basic Hygiene)",
    subtitle: "Foundational controls",
    rows: [
      { role: "Password Policy", headcount: "Enforced", notes: "12+ chars, rotation" },
      { role: "2FA", headcount: "Optional", notes: "Email/SMS" },
      { role: "Encryption", headcount: "Transport only", notes: "TLS 1.3" },
    ],
    summary: { label: "Risk Level", value: "High", notes: "Blocks 50% of attacks" }
  },
  {
    title: "LEVEL 2 (Compliance)",
    subtitle: "Meeting regulatory requirements",
    rows: [
      { role: "2FA", headcount: "Mandatory", notes: "TOTP/hardware keys" },
      { role: "Encryption", headcount: "At rest + transport", notes: "AES-256" },
      { role: "Audit Logging", headcount: "Complete", notes: "90-day retention" },
    ],
    summary: { label: "Risk Level", value: "Medium", notes: "SOC 2 compliant" }
  },
  {
    title: "LEVEL 3 (Proactive Defense)",
    subtitle: "Advanced threat protection",
    rows: [
      { role: "Threat Hunting", headcount: "Active", notes: "24/7 SOC" },
      { role: "Zero Trust", headcount: "Implemented", notes: "Micro-segmentation" },
      { role: "EDR", headcount: "Deployed", notes: "Endpoint detection + response" },
    ],
    summary: { label: "Risk Level", value: "Low", notes: "Blocks 95%+ attacks" }
  }
]
```

### Adaptation 3: Budget Proposal (3-Year Plan)

```tsx
const budgetStages = [
  {
    title: "YEAR 1 (Foundation)",
    subtitle: "Infrastructure + hiring",
    rows: [
      { role: "Cloud Infrastructure", headcount: "$120K", notes: "AWS reserved instances" },
      { role: "Headcount (5 FTEs)", headcount: "$500K", notes: "2 eng, 2 product, 1 design" },
      { role: "Tools & SaaS", headcount: "$60K", notes: "GitHub, Figma, analytics" },
    ],
    summary: { label: "Total Year 1", value: "$680K", notes: "Foundation investment" }
  },
  {
    title: "YEAR 2 (Growth)",
    subtitle: "Scaling team + features",
    rows: [
      { role: "Cloud Infrastructure", headcount: "$200K", notes: "Increased usage" },
      { role: "Headcount (12 FTEs)", headcount: "$1.2M", notes: "Doubling team" },
      { role: "Marketing", headcount: "$150K", notes: "Launch campaign" },
    ],
    summary: { label: "Total Year 2", value: "$1.55M", notes: "Growth phase" }
  },
  {
    title: "YEAR 3 (Scale)",
    subtitle: "Enterprise readiness",
    rows: [
      { role: "Cloud Infrastructure", headcount: "$350K", notes: "Multi-region" },
      { role: "Headcount (25 FTEs)", headcount: "$2.5M", notes: "Full-scale team" },
      { role: "Enterprise Sales", headcount: "$400K", notes: "Sales + support" },
    ],
    summary: { label: "Total Year 3", value: "$3.25M", notes: "Scale investment" }
  }
]
```

## Accessibility Notes

- **Semantic Tables**: Use proper `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>` for screen readers
- **Table Captions**: Add `<caption>` for context:
  ```tsx
  <table>
    <caption className="sr-only">Team size by growth stage</caption>
    {/* ... */}
  </table>
  ```
- **Reduced Motion**: Respect `prefers-reduced-motion`:
  ```tsx
  @media (prefers-reduced-motion: reduce) {
    .animate-fade-in {
      animation: none !important;
      opacity: 1 !important;
    }
  }
  ```
- **Keyboard Navigation**: Tables are naturally keyboard-accessible (Tab to navigate cells)
- **Color Contrast**: Ensure summary row text meets WCAG AA (4.5:1) on primary background

## Performance Notes

- **Animation Performance**: CSS animations are GPU-accelerated (no JavaScript on main thread)
- **Table Rendering**: Static HTML tables (no virtual scrolling needed for <100 rows)
- **Image-Free**: All styling via CSS (no image assets to load)
- **Minimal JavaScript**: Only runs to set inline styles (animation delays)

## Design System Dependencies

- `@/components/ui/badge` - Badge for header
- `@/components/ui/card` - Card, CardContent for insight/budget sections
- `@/components/decorative/grain-overlay` - Texture layer
- `@/components/decorative/geometric-patterns` - Dots background
- `lucide-react` - Users, TrendingUp, DollarSign icons
- Tailwind CSS - table styling, responsive utilities, animations
- Custom fonts: `font-bebas`, `font-manrope`

## Common Pitfalls

1. **Too Many Stages**: More than 4 stages becomes overwhelming (defeats purpose of chunking)
2. **Uneven Stage Complexity**: If Stage 1 has 3 rows but Stage 3 has 15, balance is lost
3. **Missing Context**: Tables without interpretation feel like data dumps (always add insight cards)
4. **Animation Overkill**: If each row animates individually, it's distracting (animate whole tables instead)

## Advanced Enhancements

### Add "Show All" Button

```tsx
const [showAll, setShowAll] = useState(false)

<Button onClick={() => setShowAll(!showAll)}>
  {showAll ? 'Show One at a Time' : 'Show All Stages'}
</Button>

{/* In stage rendering: */}
style={{
  animationDelay: showAll ? '0ms' : `${600 + stageIndex * 300}ms`
}}
```

### Add Stage Navigation

```tsx
const [activeStage, setActiveStage] = useState(0)

<div className="flex gap-2 justify-center">
  {stages.map((_, idx) => (
    <button
      key={idx}
      onClick={() => setActiveStage(idx)}
      className={activeStage === idx ? 'bg-primary' : 'bg-muted'}
    >
      Stage {idx + 1}
    </button>
  ))}
</div>

{/* Only show active stage: */}
{stages
  .filter((_, idx) => idx === activeStage)
  .map((stage) => (/* render stage */))}
```
