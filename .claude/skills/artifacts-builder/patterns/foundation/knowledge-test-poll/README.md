# Knowledge Test Poll

## Pattern Overview

A single-question interactive polling interface where users vote by clicking their choice, triggering live results visualization with animated percentage bars and aggregate statistics. After voting, users see how their answer compares to others, creating social proof and knowledge validation.

## Why It Works

**Pedagogical Psychology**: This pattern leverages **active recall** - testing immediately after learning improves retention by 3x compared to passive review. When users commit to an answer publicly (voting), they create stronger memory encoding. The social comparison ("Most Common" stat) activates **social learning theory** - we learn from seeing how others think. Research shows immediate feedback on self-assessment increases metacognitive awareness.

**UX Principles**:
- **Low-stakes engagement**: Simple click interaction removes friction
- **Social validation**: Seeing others' votes creates belonging and curiosity
- **Immediate gratification**: Results appear instantly, satisfying curiosity gap
- **Visual feedback**: Percentage bars grow with animation, creating delight
- **One-time interaction**: Can't change vote, encouraging deliberate thinking

## When to Use

- After teaching a concept, to test comprehension
- Gauging audience baseline knowledge at session start
- Creating engagement during lectures (Zoom polls, live presentations)
- Collecting anonymous opinions on subjective topics
- Building rapport by showing "you're not alone" solidarity
- Mobile-first experiences (simple tap interaction)

## When NOT to Use

- Formal assessments requiring verified identity
- Multiple-question surveys (use full quiz pattern instead)
- When vote data needs persistence (this resets on refresh)
- Situations requiring private, confidential responses
- Complex questions with nuanced answers (limits understanding)
- When the "right answer" would bias voting (people cheat to see results)

## Key Features

- **Single-vote mechanism**: Users can only vote once, enforced by state
- **Live results visualization**: Animated horizontal bars show vote percentages
- **Aggregate statistics**: Total votes, most common answer, transformation metric
- **Staircase card layout**: Levels stacked vertically for scanability
- **Scale animation on select**: User's choice card highlights with ring and badge
- **Conditional rendering**: Results appear only after user votes
- **Responsive design**: Cards stack on mobile, side-by-side stats on desktop

## Code Highlights

### State Management

```tsx
const [votes, setVotes] = useState<Record<number, number>>({
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
})
const [userVote, setUserVote] = useState<number | null>(null)
const [showResults, setShowResults] = useState(false)

const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0)

const handleVote = (levelId: number) => {
  if (userVote === null) { // Prevent double-voting
    setVotes((prev) => ({
      ...prev,
      [levelId]: prev[levelId] + 1,
    }))
    setUserVote(levelId)
    setShowResults(true)
  }
}
```

### Interactive Logic

```tsx
// Calculate percentage for each option
const getPercentage = (levelId: number) => {
  if (totalVotes === 0) return 0
  return Math.round((votes[levelId] / totalVotes) * 100)
}

// Dynamic button styling based on vote state
<Button
  className={`${
    canVote ? "hover:scale-102 cursor-pointer" : "cursor-not-allowed"
  } ${
    isUserVote ? "ring-4 ring-primary shadow-2xl" : ""
  }`}
  onClick={() => handleVote(level.id)}
  disabled={!canVote}
>
  {/* Percentage background bar */}
  {showResults && (
    <div
      className="absolute left-0 top-0 bottom-0 transition-all duration-1000"
      style={{
        width: `${percentage}%`,
        backgroundColor: `${level.color}20`,
      }}
    />
  )}
</Button>
```

### Aggregate Statistics

```tsx
{showResults && (
  <Card>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Votes */}
      <div>
        <div className="text-5xl font-bebas">{totalVotes}</div>
        <div className="text-sm">Total Votes</div>
      </div>

      {/* Most Common Answer */}
      <div>
        <div className="text-5xl font-bebas">
          {Object.entries(votes).reduce((a, b) =>
            a[1] > b[1] ? a : b
          )[0]}
        </div>
        <div className="text-sm">Most Common</div>
      </div>

      {/* Custom Metric */}
      <div>
        <div className="text-5xl font-bebas">
          {Math.round((votes[4] + votes[5]) / totalVotes * 100)}%
        </div>
        <div className="text-sm">At Transformation (4-5)</div>
      </div>
    </div>
  </Card>
)}
```

## Reuse Guidelines

### Adaptation Steps

1. **Define your question**: Create a clear, single-answer question
2. **List options**: 3-6 choices (more creates decision paralysis)
3. **Design data structure**: Use object keys matching option IDs
4. **Add visual differentiation**: Color-code options if semantically meaningful
5. **Customize stats**: Change aggregate metrics to match your domain
6. **Adjust animations**: Modify transition duration for percentage bars

### Customization Points

- **Content**: Replace `FIVE_LEVELS` data with your custom options
- **Styling**: Change colors per option or use uniform color scheme
- **Data**: Modify vote storage structure (could persist to database)
- **Statistics**: Add/remove aggregate metrics (median, distribution, etc.)
- **Interaction**: Allow vote changes, show real-time updates from other users
- **Layout**: Adjust card grid (1-column, 2-column, or horizontal buttons)

## Adaptation Example

**Original**: "Where is your organization?" (5 AI maturity levels)

**Adapted for**: "What's your biggest challenge?" (Product feedback poll)

```tsx
const CHALLENGES = [
  {
    id: 1,
    name: "Finding qualified candidates",
    icon: "Users",
    color: "#3B82F6",
  },
  {
    id: 2,
    name: "Budget constraints",
    icon: "DollarSign",
    color: "#10B981",
  },
  {
    id: 3,
    name: "Technical debt",
    icon: "AlertTriangle",
    color: "#F59E0B",
  },
  {
    id: 4,
    name: "Slow iteration speed",
    icon: "Clock",
    color: "#EF4444",
  },
]

const [votes, setVotes] = useState<Record<number, number>>({
  1: 0,
  2: 0,
  3: 0,
  4: 0,
})

// Custom aggregate metric
const topChallenge = Object.entries(votes).reduce((a, b) =>
  a[1] > b[1] ? a : b
)[0]

const topChallengeLabel = CHALLENGES.find(c => c.id === parseInt(topChallenge))?.name
```

**Changes made**:
- Question: Organizational maturity → Product challenges
- Options: 5 levels → 4 challenges
- Data structure: Levels → Challenges
- Aggregate stat: "Transformation %" → "Top Challenge" name
- Visual: Level staircase → Equal-sized buttons
- Color scheme: Level-based colors → Challenge-type colors

## Source

Original slide: `/components/slide-213-interactive-poll.tsx`

## Design System Compliance

- **Typography**: Bebas Neue (large numbers), Syne (headers), Manrope (body)
- **Colors**: Level-specific colors from Five Levels Framework
- **Animations**: `animate-fade-in` for results, 1000ms transition for percentage bars
- **Accessibility**:
  - Semantic button elements for each option
  - Disabled state prevents double-voting
  - Visual ring + badge for user's vote (not just color)
  - Keyboard navigation (Tab + Enter)
  - Percentage numbers supplement colored bars
  - Focus states visible on all interactive elements
  - Respects `prefers-reduced-motion`
