# Formal Quiz

## Pattern Overview

A multi-question interactive quiz with navigation, scoring, immediate feedback, and progress tracking. Users select answers, receive instant explanations, navigate between questions, and see a final score summary with performance-based messages. This creates a complete assessment experience with gamification elements.

## Why It Works

**Pedagogical Psychology**: This pattern activates **gamification psychology** - scoring creates achievement motivation and completion drive. Research shows quizzes with immediate explanatory feedback improve learning outcomes by 40% versus quizzes with delayed scoring. The navigation system allows learners to control their pace (**autonomy**), while the progress bar creates **goal gradient effect** (motivation increases as completion nears).

**UX Principles**:
- **Immediate explanatory feedback**: Learning happens when you see why the answer is correct/incorrect
- **Progress visualization**: Progress bar reduces anxiety and creates clarity
- **Error prevention**: Can't change answer after submission (forces deliberate thinking)
- **Completion reward**: Final score card with personalized message creates closure
- **Low cognitive load**: One question at a time, not overwhelming

## When to Use

- Formal assessments after training modules
- Knowledge checks at course section ends
- Certification or qualification tests
- Onboarding knowledge validation
- Scenarios requiring scored, tracked learning outcomes
- When you need to measure comprehension systematically

## When NOT to Use

- Informal engagement (use single-question poll instead)
- More than 10-12 questions (creates fatigue)
- When questions are exploratory vs having clear right answers
- Situations where failure has negative consequences (stress-inducing)
- Quick "pulse checks" (too formal for casual feedback)
- When data persistence is required (this resets on refresh)

## Key Features

- **Question navigation**: Previous/Next buttons with state management
- **Answer locking**: Can't change answer once selected (prevents gaming)
- **Scoring system**: Tracks correct answers, prevents duplicate scoring
- **Progress tracking**: Visual progress bar showing question position
- **Immediate feedback**: Color-coded correct/incorrect with explanations
- **Final score summary**: Personalized message based on performance
- **Retake functionality**: Reset button to try again
- **Progress indicators**: Dots showing answered vs current vs unanswered questions

## Code Highlights

### State Management

```tsx
const [currentQuestion, setCurrentQuestion] = useState(0)
const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
const [showExplanation, setShowExplanation] = useState(false)
const [score, setScore] = useState(0)
const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set())

const handleAnswerSelect = (answer: string) => {
  if (showExplanation) return // Prevent answer changes

  setSelectedAnswer(answer)
  setShowExplanation(true)

  // Score only on first attempt
  if (!answeredQuestions.has(currentQuestion)) {
    setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion]))
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }
}
```

### Interactive Logic

```tsx
const handleNextQuestion = () => {
  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1)
    setSelectedAnswer(null) // Clear answer for next question
    setShowExplanation(false)
  }
}

const resetQuiz = () => {
  setCurrentQuestion(0)
  setSelectedAnswer(null)
  setShowExplanation(false)
  setScore(0)
  setAnsweredQuestions(new Set())
}

const quizComplete = currentQuestion === questions.length - 1 && showExplanation
```

### Answer Feedback UI

```tsx
{question.options.map((option) => {
  const isSelected = selectedAnswer === option.answer
  const isCorrectOption = option.answer === question.correctAnswer
  const showCorrect = showExplanation && isCorrectOption
  const showWrong = showExplanation && isSelected && !isCorrect

  return (
    <button
      onClick={() => handleAnswerSelect(option.answer)}
      disabled={showExplanation}
      className={`${
        showCorrect ? "border-success bg-success/10" :
        showWrong ? "border-destructive bg-destructive/10" :
        isSelected ? "border-primary bg-primary/10" :
        "border-foreground/20"
      }`}
    >
      {/* Option content */}
      {showCorrect && <CheckCircle2 className="text-success" />}
      {showWrong && <XCircle className="text-destructive" />}
    </button>
  )
})}
```

### Progress Visualization

```tsx
{/* Progress bar */}
<div className="h-2 bg-foreground/10 rounded-full">
  <div
    className="h-full bg-primary transition-all duration-500"
    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
  />
</div>

{/* Question dots */}
<div className="flex gap-2">
  {questions.map((_, index) => (
    <div
      key={index}
      className={`w-3 h-3 rounded-full ${
        index === currentQuestion ? "bg-primary scale-125" :
        answeredQuestions.has(index) ? "bg-success" :
        "bg-foreground/20"
      }`}
    />
  ))}
</div>
```

## Reuse Guidelines

### Adaptation Steps

1. **Create question bank**: Build array of question objects with options and explanations
2. **Define answer types**: Use TypeScript union types for type safety
3. **Set scoring rules**: Decide if partial credit, penalties, or binary scoring
4. **Customize feedback**: Write explanations that teach, not just validate
5. **Design progress UI**: Choose between linear progression or allow question jumping
6. **Add final summary**: Create personalized messages based on score ranges

### Customization Points

- **Content**: Replace `questions` array with your domain knowledge
- **Styling**: Change success/destructive colors to match quiz tone
- **Scoring**: Modify to allow partial credit, weighted questions, or time bonuses
- **Navigation**: Add question jumping, shuffle, or randomization
- **Feedback**: Expand explanations with links, images, or further reading
- **Persistence**: Add localStorage or database to save progress

## Adaptation Example

**Original**: ML vs Agentic AI Scenarios (5 questions, technical quiz)

**Adapted for**: Company Culture Quiz (Personality/values assessment)

```tsx
interface CultureQuestion {
  id: number
  scenario: string
  options: {
    value: "Autonomy" | "Structure" | "Innovation" | "Stability"
    label: string
    description: string
  }[]
  bestFit: "Autonomy" | "Structure" | "Innovation" | "Stability"
  explanation: string
}

const questions: CultureQuestion[] = [
  {
    id: 1,
    scenario: "Your team faces an unexpected roadblock. How do you prefer to respond?",
    options: [
      {
        value: "Autonomy",
        label: "Empower team to self-organize",
        description: "Trust individuals to find solutions",
      },
      {
        value: "Structure",
        label: "Follow escalation protocol",
        description: "Use established processes",
      },
      // ... more options
    ],
    bestFit: "Autonomy",
    explanation: "This scenario tests your preference for decentralized vs structured decision-making.",
  },
  // ... more questions
]

// No right/wrong - instead show value alignment
const handleAnswerSelect = (value: string) => {
  // Track value selections for final profile
  setValueProfile((prev) => ({
    ...prev,
    [value]: (prev[value] || 0) + 1,
  }))
  setShowExplanation(true)
}
```

**Changes made**:
- Quiz type: Knowledge test → Personality/values assessment
- Answer validation: Correct/incorrect → Value alignment
- Scoring: Points → Value profile distribution
- Feedback: Explanatory → Reflective (helps self-understanding)
- Final summary: Score percentage → Dominant value archetype
- Visual: Success/error colors → Neutral profile colors

## Source

Original slide: `/components/slide-308-quiz-interactive.tsx`

## Design System Compliance

- **Typography**: Bebas Neue (scores), Syne (headers), Manrope (questions/body)
- **Colors**: Success green (#10B981), destructive red (#EF4444), primary orange
- **Animations**: `animate-fade-in` for explanation, smooth transitions on navigation
- **Accessibility**:
  - Semantic button elements for all options
  - Disabled state after answer selection
  - Visual icons (checkmark/x) supplement color coding
  - Progress bar has numeric label
  - Keyboard navigation (Tab, Enter)
  - Focus states visible
  - Explanations use high-contrast text
  - Respects `prefers-reduced-motion`
