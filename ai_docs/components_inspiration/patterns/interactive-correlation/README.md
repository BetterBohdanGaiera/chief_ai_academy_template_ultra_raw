# Interactive Correlation Pattern

**Source:** `components/slides/foundation/f1/18-dataset-builder-interactive.tsx`

## Why It Works

This pattern transforms passive learning into active exploration, leveraging principles of experiential learning and gamification:

**Learning by Doing**: Instead of telling users "dataset quality drives automation quality," this pattern lets them discover the relationship themselves. When users add entries and watch the quality meter rise, they're experiencing the correlation firsthand. This creates "aha moments" that stick far better than lecture-style explanations. Research shows hands-on discovery improves retention by 50-70% vs passive reading.

**Instant Gratification Loop**: Each entry added triggers immediate visual feedback (quality meter updates, progress bar fills). This creates a micro-dopamine loop similar to video games or social media "likes." Users are motivated to complete all entries to see the meter hit 100%, even though you never explicitly told them to. This is behavioral design borrowed from Duolingo and FitBit.

**Cognitive Scaffolding**: The three-field form (good/bad/reasoning) structures thinking without being prescriptive. Users must articulate what "good" looks like, contrast it with "bad," and explain why—a process that forces deeper cognitive processing than simply reading examples. This is the Socratic method in widget form.

**Non-Linear Correlation Teaches Nuance**: The carefully calibrated formula (0% → 50%, 100% → 95%) teaches a subtle but critical lesson: you can't reach perfection through inputs alone. That final 5% gap subtly introduces the need for iteration/feedback loops, setting up the next slide's message.

## When to Use

1. **Cause-Effect Relationships**: When demonstrating how input variable X affects output variable Y (e.g., team size → delivery speed, training hours → competency score)

2. **Quality Thresholds**: When showing diminishing returns or inflection points (e.g., "80% coverage is enough, 100% is overkill")

3. **Educational Widgets**: When teaching concepts that benefit from experimentation (e.g., compound interest calculator, carbon footprint estimator)

4. **Requirements Gathering**: When helping stakeholders understand what details you need (e.g., "add 10 user stories to get an accurate estimate")

5. **Gamified Onboarding**: When motivating users to complete profiles, surveys, or setup steps by showing live progress/quality scores

## When NOT to Use

1. **Fixed Data**: If the data is static and unchanging, use a regular chart/table instead (interactivity without purpose is annoying)

2. **Complex Multi-Variable Correlations**: If output depends on 5+ inputs with interdependencies, simplify the model or use a different pattern (too much complexity breaks the "instant feedback" loop)

3. **Sensitive Topics**: Avoid for emotionally charged subjects where gamification feels tone-deaf (e.g., medical risk calculators, financial hardship assessments)

4. **Mobile-First Experiences**: This pattern requires significant screen real estate. On mobile, the form and metrics stack vertically, losing the side-by-side "input → output" spatial relationship.

## Key Features

- **Dual-Pane Reactive Layout**: Form on left, live metrics on right, connected by reactive state
- **Add/Remove Entries**: Full CRUD for dynamic entry management
- **Live Calculation**: `useMemo` hooks ensure calculations only run when dependencies change
- **Dynamic Color Coding**: Quality thresholds (90%+ = green, 75-89% = orange, etc.) provide instant visual feedback
- **Progress Tracking**: Dual progress indicators (entry count + completion percentage)
- **Form Validation**: Button disabled until minimum fields filled (prevents garbage data)
- **Accessible Inputs**: Proper labels, placeholders, and focus states for keyboard navigation

## Code Highlights

**useMemo for Performance**:
```tsx
const inputCompletion = useMemo(() => calculateInputCompletion(entries), [entries])
const outputQuality = useMemo(() => calculateOutputQuality(inputCompletion), [inputCompletion])
```
Only recalculates when `entries` changes, avoiding unnecessary re-renders.

**Non-Linear Correlation Function**:
```tsx
if (inputCompletion === 0) return 50
if (inputCompletion <= 20) {
  return 50 + (inputCompletion / 20) * 15  // 0-20%: gain 15 points
}
if (inputCompletion <= 50) {
  return 65 + ((inputCompletion - 20) / 30) * 15  // 20-50%: gain 15 points
}
// ... diminishing returns at higher percentages
```
Piecewise linear interpolation creates realistic diminishing returns curve.

**Dynamic Color Thresholds**:
```tsx
const getQualityColor = (quality: number): string => {
  if (quality >= 90) return 'text-success'
  if (quality >= 75) return 'text-primary'
  if (quality >= 60) return 'text-warning'
  return 'text-destructive'
}
```
Semantic colors map to quality levels (green = excellent, red = poor).

**Smooth Progress Bar Transition**:
```tsx
<div
  className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 ease-out"
  style={{ width: `${inputCompletion}%` }}
/>
```
CSS transition creates satisfying visual feedback when width changes.

**Form Validation via Button State**:
```tsx
<Button
  disabled={!newEntry.name.trim() || !newEntry.goodExample.trim()}
>
  Add Entry
</Button>
```
Button grays out until minimum required fields are filled.

## Reuse Guidelines

### Step 1: Define Your Data Model

```tsx
interface YourEntry {
  id: string
  field1: string      // Required field
  field2: string      // Required field
  field3?: string     // Optional field
}
```

### Step 2: Customize the Correlation Function

```tsx
function calculateYourOutput(inputCompletion: number): number {
  // Example: Linear correlation (simpler)
  return inputCompletion  // 0% input → 0% output, 100% → 100%

  // Example: Square root (fast early gains, slow later)
  return Math.sqrt(inputCompletion) * 10

  // Example: Logarithmic (diminishing returns)
  return 50 + Math.log10(inputCompletion + 1) * 25
}
```

### Step 3: Update Input Completion Logic

```tsx
function calculateInputCompletion(entries: YourEntry[]): number {
  const targetEntries = 5  // Adjust target
  const filledEntries = entries.filter(entry =>
    entry.field1.trim() && entry.field2.trim()  // Check required fields
  ).length

  return Math.min(100, (filledEntries / targetEntries) * 100)
}
```

### Step 4: Customize Form Fields

Replace the three-field form (good/bad/reasoning) with your fields:
```tsx
<input
  placeholder="Your field 1"
  value={newEntry.field1}
  onChange={(e) => setNewEntry({ ...newEntry, field1: e.target.value })}
  // ... styling
/>
```

### Step 5: Update Quality Thresholds and Labels

```tsx
const getQualityColor = (quality: number): string => {
  if (quality >= 85) return 'text-success'     // Adjust thresholds
  if (quality >= 65) return 'text-primary'
  if (quality >= 50) return 'text-warning'
  return 'text-destructive'
}

// Update badge labels:
{outputQuality >= 85 && <Badge>Excellent</Badge>}
{outputQuality >= 65 && outputQuality < 85 && <Badge>Good</Badge>}
// ...
```

## Example Adaptations

### Adaptation 1: Team Size → Delivery Speed

```tsx
interface TeamMember {
  id: string
  role: string       // "Engineer", "Designer", etc.
  experience: string // "Junior", "Mid", "Senior"
  availability: string // "Full-time", "Part-time"
}

function calculateDeliverySpeed(teamCompletion: number): number {
  // More team members = faster delivery (up to a point, then Brooks's Law kicks in)
  if (teamCompletion === 0) return 10  // 10% speed with no team
  if (teamCompletion <= 60) {
    return 10 + (teamCompletion / 60) * 70  // Linear gains up to 80% speed
  }
  // Diminishing returns after 60% (communication overhead)
  return 80 + ((teamCompletion - 60) / 40) * 10  // Max 90% speed
}

// Form fields:
- Role dropdown
- Experience level slider
- Availability percentage input
```

### Adaptation 2: Training Hours → Competency Score

```tsx
interface TrainingModule {
  id: string
  moduleName: string
  hoursCompleted: number
  assessmentScore: number
}

function calculateCompetency(trainingCompletion: number): number {
  // Sigmoid curve: slow start, rapid middle, plateau at end
  return 100 / (1 + Math.exp(-0.1 * (trainingCompletion - 50)))
}

function calculateTrainingCompletion(modules: TrainingModule[]): number {
  const targetHours = 40
  const totalHours = modules.reduce((sum, m) => sum + m.hoursCompleted, 0)
  return Math.min(100, (totalHours / targetHours) * 100)
}

// Form fields:
- Module name
- Hours completed (number input)
- Assessment score (0-100 slider)
```

### Adaptation 3: User Stories → Estimate Accuracy

```tsx
interface UserStory {
  id: string
  title: string
  acceptanceCriteria: string
  technicalDetails: string
  dependencies: string
}

function calculateEstimateAccuracy(storyCompletion: number): number {
  // More detailed stories = better estimates
  if (storyCompletion < 30) return 40  // Poor accuracy without basics
  if (storyCompletion < 70) {
    return 40 + ((storyCompletion - 30) / 40) * 40  // 40% → 80%
  }
  return 80 + ((storyCompletion - 70) / 30) * 15  // 80% → 95%
}

// Form fields:
- Story title
- Acceptance criteria (textarea)
- Technical details (textarea)
- Dependencies (multi-select)
```

## Accessibility Notes

- **Keyboard Navigation**: Ensure all form fields and buttons are keyboard-accessible (no mouse-only interactions)
- **Screen Readers**:
  ```tsx
  <label htmlFor="entry-name">Entry Name</label>
  <input id="entry-name" aria-describedby="entry-name-help" ... />
  <span id="entry-name-help">Provide a clear name for this entry</span>
  ```
- **Color Blindness**: Use icons in addition to color for quality states (e.g., ✓ for green, ⚠ for yellow, ✗ for red)
- **Focus States**: Ensure input borders/outlines are visible when focused (default Tailwind styles handle this)
- **Live Regions**: Announce quality changes to screen readers:
  ```tsx
  <div role="status" aria-live="polite">
    Quality is now {Math.round(outputQuality)}%
  </div>
  ```

## Performance Notes

- **useMemo Optimization**: Calculations only run when dependencies change (entries array)
- **Avoid Inline Functions in Renders**: Event handlers are defined once, not recreated every render
- **Controlled Inputs**: React state controls input values (single source of truth)
- **List Key Stability**: Use unique IDs (timestamp) for keys, not array indices (prevents re-render bugs when reordering)

## Design System Dependencies

- `@/components/ui/card` - Card, CardContent, CardHeader, CardTitle
- `@/components/ui/badge` - Badge with multiple variants
- `@/components/ui/button` - Button with disabled state
- `@/components/decorative/geometric-patterns` - Grid pattern background
- `@/components/decorative/grain-overlay` - Texture overlay
- `lucide-react` - Plus, Database, Target, CheckCircle, AlertCircle, Sparkles, Trash2
- Tailwind CSS - responsive grid, form styling, transitions
- Custom fonts: `font-bebas`, `font-syne`, `font-manrope`, `font-jetbrains`

## Advanced Enhancements

### Add Data Persistence (localStorage)

```tsx
useEffect(() => {
  const saved = localStorage.getItem('entries')
  if (saved) setEntries(JSON.parse(saved))
}, [])

useEffect(() => {
  localStorage.setItem('entries', JSON.stringify(entries))
}, [entries])
```

### Add Export Functionality

```tsx
const exportData = () => {
  const dataStr = JSON.stringify(entries, null, 2)
  const blob = new Blob([dataStr], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'entries.json'
  link.click()
}
```

### Add Visualization (Chart)

Install Recharts and add below the metrics:
```tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const chartData = [
  { input: 0, output: 50 },
  { input: 20, output: 65 },
  { input: 50, output: 80 },
  { input: 80, output: 92 },
  { input: 100, output: 95 },
  { input: inputCompletion, output: outputQuality }  // Current point
]

<LineChart width={400} height={200} data={chartData}>
  <Line type="monotone" dataKey="output" stroke="#FF4D00" />
  <XAxis dataKey="input" />
  <YAxis />
</LineChart>
```
