# Multi-Slide Feedback Pattern

This pattern enables state persistence across multiple feedback/question slides in a presentation, allowing users to navigate back and forth without losing their selections.

## Problem

When a presentation has multiple question slides followed by a summary slide:
- Each slide component uses local `useState`
- When navigating between slides, components unmount
- All local state is lost when the component unmounts
- Users return to slides and see their selections have been reset
- Summary slide cannot access selections from other slides

## Solution

Use React Context to lift state up to a common ancestor (any page rendering the slides) that doesn't unmount during navigation.

```
Page Component (doesn't unmount during slide navigation)
└── FeedbackProvider (holds all state)
    └── PresentationContainer
        └── Slide Components (consume state via hook)
```

**CRITICAL**: The `FeedbackProvider` must wrap `PresentationContainer` on EVERY page that loads feedback slides. This includes:
- Module pages (e.g., `app/(courses)/modules/fb/page.tsx`)
- Home page if it loads feedback slides (e.g., `app/page.tsx`)
- Any other page that renders these slides

## When to Use

| Scenario | Use This Pattern? |
|----------|-------------------|
| Single question slide only | No |
| 2+ question slides with summary | **Yes** |
| Feedback collection module | **Yes** |
| Survey/questionnaire flow | **Yes** |
| Independent question slides (no summary) | No |

## Implementation Checklist

- [ ] Create or use existing `FeedbackContext.tsx` in `contexts/`
- [ ] Wrap **ALL pages** that load feedback slides with `FeedbackProvider`
  - [ ] Module page (e.g., `app/(courses)/modules/[module]/page.tsx`)
  - [ ] Home page if it loads these slides (e.g., `app/page.tsx`)
  - [ ] Any other page that renders feedback slides
- [ ] Replace `useState` in question slides with context hook
- [ ] Update summary slide to consume context (not mock data)
- [ ] Add visual confirmation ("Selection saved") on each selection
- [ ] Add Enter key handler for text inputs

## File Structure

```
contexts/
└── FeedbackContext.tsx    # Context provider and hook

app/
├── page.tsx               # Home page - wrap with FeedbackProvider if loading feedback slides
└── (courses)/modules/[module]/
    └── page.tsx           # Module page - wrap with FeedbackProvider

components/slides/[module]/
├── XX-question-slide.tsx  # Uses useFeedback() hook
├── XX-question-slide.tsx  # Uses useFeedback() hook
└── XX-summary-slide.tsx   # Consumes and displays context state
```

## Reference Files

- `context-provider.tsx` - Example FeedbackContext implementation
- `question-slide.tsx` - Example question slide using context
- `summary-slide.tsx` - Example summary slide consuming context
- `module-page.tsx` - Example module page with provider wrapper
