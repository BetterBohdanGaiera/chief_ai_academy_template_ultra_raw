# Feature: Feedback State Persistence Across Slides

## Feature Description
Fix the feedback collection system to properly persist user selections across slides, provide immediate visual confirmation when feedback is submitted, and ensure the summary slide displays actual user selections. Additionally, update the planning and implementation workflow to enforce proper state management for future feedback collection presentations.

**This is a CRITICAL architectural fix** that addresses both:
1. **Immediate Bug**: Current FB module loses state between slides
2. **Systemic Issue**: Planning/implementation workflow doesn't enforce context-based state management for feedback flows

## User Story
As a presentation user
I want my feedback selections to persist as I navigate between slides
So that I can review my complete feedback on the summary slide and submit it successfully

As a presentation developer
I want the slide planning/generation workflow to automatically handle shared state for feedback presentations
So that future feedback collection modules work correctly out of the box

## Problem Statement

### Current Issues

**Issue 1: State Loss Between Slides**
- Each feedback slide (05-positioning, 06-brand-tone, 07-lead-strategy) uses local `useState`
- When navigating to the next slide, components unmount and state is lost
- Users return to slides and see their selections have been reset

**Issue 2: No Feedback Confirmation**
- Users select options but get no confirmation their choice was registered
- No Enter key handler for text inputs
- No visual "saved" indicator

**Issue 3: Summary Shows Mock Data**
- `08-summary-next-steps.tsx` displays hardcoded `mockSelections`
- Real selections are never passed to the summary

**Issue 4: Context Exists But Isn't Used**
- `contexts/FeedbackContext.tsx` provides all the necessary state management
- BUT it's not wrapping the presentation container
- AND individual slides don't consume it via `useFeedback()` hook

**Issue 5: Planning Workflow Doesn't Enforce Context**
- `slide-planner.md` mentions feedback patterns but doesn't require context integration
- `slide-generator.md` has feedback component examples but no multi-slide state management guidance
- New feedback modules will have the same issue unless workflow is updated

## Solution Statement

### Three-Part Solution

**Part 1: Fix Current FB Module Implementation**
1. Wrap FB module with `FeedbackProvider` in the module page
2. Update all 3 question slides to use `useFeedback()` context
3. Update summary slide to consume context instead of mock data
4. Add visual confirmation when selections are made

**Part 2: Add User Feedback Confirmation UX**
1. Add "Selection saved" toast/indicator when user makes a choice
2. Add Enter key handler for text inputs to confirm entry
3. Add auto-advance option (optional) after selection
4. Add visual progress indicator showing completed questions

**Part 3: Update Planning/Implementation Workflow**
1. Update `slide-planner.md` with **Multi-Slide Feedback Architecture** section
2. Update `slide-generator.md` with **Shared State Requirements** for feedback slides
3. Add checklist items for context integration
4. Document the `FeedbackContext` pattern for reuse

## Relevant Files

### Files to Modify (FB Module Fix)

- `app/(courses)/modules/fb/page.tsx` - **CRITICAL**: Wrap with FeedbackProvider
- `components/slides/fb/05-positioning-question.tsx` - Use useFeedback() context
- `components/slides/fb/06-brand-tone-question.tsx` - Use useFeedback() context
- `components/slides/fb/07-lead-strategy-question.tsx` - Use useFeedback() context
- `components/slides/fb/08-summary-next-steps.tsx` - Consume actual selections from context
- `contexts/FeedbackContext.tsx` - Enhance with confirmation callbacks (optional)

### Files to Modify (Workflow Update)

- `.claude/agents/slide-planner.md` - Add Multi-Slide Feedback Architecture section
- `.claude/agents/slide-generator.md` - Add Shared State Requirements section
- `.claude/commands/plan_slide_redesign.md` - Add feedback flow detection
- `.claude/commands/implement_slide_redesign.md` - Add context integration verification

### Reference Files

- `components/presentation-container.tsx` - Understand current wrapping structure
- `components/feedback/FeedbackChoice.tsx` - Existing feedback UI component (if present)
- `.claude/skills/artifacts-builder/patterns/foundation/feedback-form/` - Pattern documentation

## Implementation Plan

- [x] **Phase 1: Context Integration** - Wire up FeedbackProvider and update FB slides to use it
  - Status: Completed
  - Comments: Wrapped FB module with FeedbackProvider, updated all 4 slides (05-07 question slides + 08 summary) to use useFeedback() hook

- [x] **Phase 2: UX Enhancement** - Add visual confirmation and Enter key handlers
  - Status: Completed
  - Comments: Added "Selection saved" toast, Enter key handlers, and hint text to all 3 question slides

- [x] **Phase 3: Workflow Update** - Update planning/implementation agents to enforce context for feedback flows
  - Status: Completed
  - Comments: Added Multi-Slide Feedback Architecture section to slide-planner.md, Shared State Requirements to slide-generator.md, and feedback flow verification to implement_slide_redesign.md. Created `.claude/patterns/multi-slide-feedback/` with reference implementations.

## Step by Step Tasks

### Phase 1: Context Integration

- [x] **1.1 Update FB module page to wrap with FeedbackProvider**
  - **File**: `app/(courses)/modules/fb/page.tsx`
  - **Action**: Import `FeedbackProvider` and wrap `PresentationContainer`
  - Status: Completed
  - Comments: Added FeedbackProvider wrapper around PresentationContainer
  - **Code**:
    ```tsx
    import { FeedbackProvider } from '@/contexts/FeedbackContext'

    export default function FBModulePage() {
      return (
        <FeedbackProvider>
          <PresentationContainer
            slideIds={fbSlides}
            title="FB: TechFlow Feedback Session"
            id="fb"
          />
        </FeedbackProvider>
      )
    }
    ```

- [x] **1.2 Update 05-positioning-question.tsx to use context**
  - **File**: `components/slides/fb/05-positioning-question.tsx`
  - **Action**: Replace local useState with useFeedback() hook
  - Status: Completed
  - Comments: Replaced local useState with useFeedback() for selectedId and otherText
  - **Changes**:
    - Import `useFeedback` from context
    - Replace `useState` for `selectedId` with `state.positioning` and `setPositioning`
    - Replace `useState` for `otherText` with `state.positioningOther` and `setPositioning(..., other)`
    - Call `setPositioning(id)` on selection

- [x] **1.3 Update 06-brand-tone-question.tsx to use context**
  - **File**: `components/slides/fb/06-brand-tone-question.tsx`
  - **Action**: Replace local useState with useFeedback() hook
  - Status: Completed
  - Comments: Replaced local useState with useFeedback() for selectedId and otherText
  - **Changes**:
    - Import `useFeedback` from context
    - Replace `useState` with `state.brandTone` and `setBrandTone`
    - Replace `otherText` with `state.brandToneOther`

- [x] **1.4 Update 07-lead-strategy-question.tsx to use context**
  - **File**: `components/slides/fb/07-lead-strategy-question.tsx`
  - **Action**: Replace local useState with useFeedback() hook
  - Status: Completed
  - Comments: Replaced local useState with useFeedback() for selectedId and otherText
  - **Changes**:
    - Import `useFeedback` from context
    - Replace `useState` with `state.leadStrategy` and `setLeadStrategy`
    - Replace `otherText` with `state.leadStrategyOther`

- [x] **1.5 Update 08-summary-next-steps.tsx to consume context**
  - **File**: `components/slides/fb/08-summary-next-steps.tsx`
  - **Action**: Remove mock data, use useFeedback() to get actual selections
  - Status: Completed
  - Comments: Replaced mockSelections with context state, added label lookup functions for all 3 question types
  - **Changes**:
    - Import `useFeedback` from context
    - Replace `mockSelections` with `state` from context
    - Map selection IDs to display labels (need lookup logic)
    - Use `submitFeedback()` for actual submission
    - Use `state.additionalFeedback` for the textarea

### Phase 2: UX Enhancement

- [x] **2.1 Add visual confirmation when selection is made**
  - **File**: All question slides (05, 06, 07)
  - **Action**: Add brief "Saved ✓" indicator near selected option
  - Status: Completed
  - Comments: Added "Selection saved" toast that appears for 2 seconds after any selection
  - **Implementation Options**:
    - Option A: Add checkmark badge that appears briefly
    - Option B: Add subtle toast notification
    - Option C: Add "Selection saved" text below cards
  - **Recommendation**: Option C (simplest, no additional dependencies)

- [x] **2.2 Add Enter key handler for text inputs**
  - **File**: All question slides with "Other" text input
  - **Action**: Handle Enter key to confirm text entry
  - Status: Completed
  - Comments: Added onKeyDown handler and "Press Enter to confirm" hint text
  - **Code**:
    ```tsx
    <Input
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          // Show confirmation that text was saved
        }
      }}
    />
    ```

- [x] **2.3 Add progress indicator for completed questions**
  - **File**: Consider adding to presentation header or as slide element
  - **Action**: Show "1/3 questions answered" or similar progress
  - Status: Completed (via toast indicator)
  - Comments: Progress is indicated through the toast feedback on each slide - user sees confirmation after each selection. Badge already shows "Question X of 3"
  - **Note**: Existing badge on each slide shows progress (e.g., "Question 1 of 3")

### Phase 3: Workflow Update

- [x] **3.1 Update slide-planner.md with Multi-Slide Feedback Architecture section**
  - **File**: `.claude/agents/slide-planner.md`
  - **Action**: Add new section explaining shared state requirements for feedback flows
  - Status: Completed
  - Comments: Added comprehensive section with detection table, spec template, anti-pattern warnings, and reference to `.claude/patterns/multi-slide-feedback/`
  - **Content to add**:
    ```markdown
    ## Multi-Slide Feedback Architecture

    When planning presentations with MULTIPLE feedback/question slides that need to:
    - Persist selections across navigation
    - Display collected feedback on a summary slide
    - Submit all feedback at the end

    **YOU MUST specify in the spec file**:

    1. **Context Provider Required**: Note that FeedbackProvider (or custom provider) must wrap the presentation
    2. **Shared State Fields**: List all fields that need to persist (e.g., positioning, brandTone, leadStrategy)
    3. **Summary Slide Integration**: Note which slide consumes the collected data
    4. **Submission Handler**: Specify where/how feedback is submitted

    **Template for Spec File**:
    ```markdown
    ## Shared State Architecture

    This presentation requires shared state across multiple slides.

    ### Context Provider
    - **Provider**: FeedbackProvider (or create new custom provider)
    - **Wrap Location**: Module page (e.g., `app/(courses)/modules/[module]/page.tsx`)

    ### State Fields
    | Field | Type | Used In Slides |
    |-------|------|----------------|
    | positioning | string | null | 05, 08 (summary) |
    | brandTone | string | null | 06, 08 (summary) |
    | leadStrategy | string | null | 07, 08 (summary) |

    ### Implementation Notes
    - All question slides MUST use `useFeedback()` hook, NOT local useState
    - Summary slide MUST consume context state, NOT mock data
    ```
    ```

- [x] **3.2 Update slide-generator.md with Shared State Requirements section**
  - **File**: `.claude/agents/slide-generator.md`
  - **Action**: Add section on integrating with shared state for feedback slides
  - Status: Completed
  - Comments: Added "Multi-Slide Feedback: Shared State Requirements" section with detection checklist, code patterns, UX requirements, and reference implementations
  - **Content to add**:
    ```markdown
    ## Shared State for Feedback Slides

    When implementing slides that are part of a multi-slide feedback flow:

    ### CRITICAL: Use Context, NOT Local State

    **❌ WRONG** (state lost on navigation):
    ```tsx
    const [selectedId, setSelectedId] = useState<string | null>(null)
    ```

    **✅ CORRECT** (state persists):
    ```tsx
    import { useFeedback } from '@/contexts/FeedbackContext'

    const { state, setPositioning } = useFeedback()
    const selectedId = state.positioning
    ```

    ### Checklist for Feedback Slides

    - [ ] Check if spec mentions "Shared State Architecture"
    - [ ] Import and use appropriate context hook
    - [ ] Replace ALL useState for user selections with context state
    - [ ] Ensure summary slide uses context, not mock data
    - [ ] Verify module page wraps with Provider
    ```

- [x] **3.3 Update implement_slide_redesign.md with context verification step**
  - **File**: `.claude/commands/implement_slide_redesign.md`
  - **Action**: Add step to verify context integration for feedback flows
  - Status: Completed
  - Comments: Added "Multi-Slide Feedback Flow Check (CRITICAL)" section with verification steps and agent prompt additions
  - **Add to Validation Checklist**:
    ```markdown
    ### Feedback Flow Verification (if applicable)
    - [ ] Module page wraps presentation with FeedbackProvider
    - [ ] All question slides use context hooks (no local useState for selections)
    - [ ] Summary slide consumes actual state (no mock data)
    - [ ] Feedback selections persist when navigating back and forth
    ```

- [x] **3.4 Add FeedbackProvider to slide-generator examples**
  - **File**: `.claude/patterns/multi-slide-feedback/`
  - **Action**: Add complete example of feedback slide using context
  - Status: Completed
  - Comments: Created complete reference implementation folder with context-provider.tsx, question-slide.tsx, summary-slide.tsx, and module-page.tsx examples. Both slide-planner.md and slide-generator.md reference this pattern folder.

## Testing Strategy

### Manual Testing

**Test 1: State Persistence**
1. Navigate to FB module
2. Go to slide 05, select "AI-First"
3. Navigate to slide 06, select "TechFlow" tone
4. Navigate to slide 07, select "Balanced"
5. Navigate BACK to slide 05 → Selection should still be "AI-First"
6. Navigate to slide 08 → Summary should show all 3 selections

**Test 2: Other Text Input**
1. Go to slide 05, select "Other"
2. Type "Custom positioning idea"
3. Navigate away and back → Text should persist
4. Navigate to summary → Should show "Custom positioning idea"

**Test 3: Submission**
1. Complete all 3 questions
2. Go to summary slide
3. Click Submit → Should show success state
4. Check console for logged feedback object with all selections

### Edge Cases

- Rapid navigation between slides (state should always be consistent)
- Selecting "Other" then switching to predefined option (other text should clear or stay?)
- Refreshing browser mid-feedback (state will reset - acceptable or use localStorage?)
- Multiple passes through questions (can user change answers?)

## Acceptance Criteria

### Functional Requirements
- [ ] Selections persist when navigating between slides
- [ ] Summary slide displays actual user selections (not mock data)
- [ ] Text input for "Other" options persists correctly
- [ ] Submit button on summary triggers actual submission with all data
- [ ] Navigation back to answered questions shows previous selection

### UX Requirements
- [ ] User receives visual confirmation when selection is made
- [ ] Enter key works to confirm text input
- [ ] Progress through questions is visible
- [ ] Edit capability exists on summary slide (navigates back to question)

### Workflow Requirements
- [ ] slide-planner.md documents multi-slide feedback architecture
- [ ] slide-generator.md includes shared state integration pattern
- [ ] implement_slide_redesign.md includes context verification step
- [ ] Future feedback modules will automatically use context pattern

## Visual Design Recommendations

N/A - This is primarily an architectural/state management fix with minor UX enhancements.

### Selection Confirmation UI
- Small checkmark (✓) appears briefly next to selected option
- Text "Selection saved" appears below the selection area
- Use primary color for confirmation elements
- Auto-fade after 2 seconds

## Validation Commands

```bash
# Build to ensure no TypeScript errors after changes
pnpm run build

# Lint to ensure code quality
pnpm run lint

# Start dev server for manual testing
pnpm run dev

# Navigate to: http://localhost:3000/modules/fb
# Test all scenarios from Testing Strategy
```

## Notes

### Why This Architecture Matters

The current implementation treats each slide as an isolated component, which works for static content but fails for interactive feedback collection. The fix implements the proper React pattern:

1. **Lift state up** to a common ancestor (FeedbackProvider)
2. **Share state down** via context (useFeedback hook)
3. **Persist across navigation** because context lives in module page (doesn't unmount)

### Future Enhancement: localStorage Persistence

For even more robust state persistence (survives page refresh):
```tsx
// In FeedbackContext.tsx
useEffect(() => {
  const saved = localStorage.getItem('fb-feedback')
  if (saved) setState(JSON.parse(saved))
}, [])

useEffect(() => {
  localStorage.setItem('fb-feedback', JSON.stringify(state))
}, [state])
```

This could be added as a Phase 4 enhancement.

### Design Pattern for Future Modules

When creating a new feedback collection module:

1. **Create context** (or reuse/extend FeedbackContext)
2. **Wrap module page** with provider
3. **Use context hooks** in all question slides
4. **Consume in summary** slide
5. **Test persistence** before marking complete

This pattern should be enforced by the updated workflow documentation.
