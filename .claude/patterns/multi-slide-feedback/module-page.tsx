/**
 * Page Wrapper - Reference Implementation
 *
 * This shows how to wrap ANY page with FeedbackProvider
 * to enable state persistence across slides.
 *
 * KEY INSIGHT: The page component doesn't unmount when navigating
 * between slides, so state stored here persists!
 *
 * CRITICAL: You must wrap EVERY page that loads feedback slides:
 * - Module pages (app/(courses)/modules/[module]/page.tsx)
 * - Home page if it loads feedback slides (app/page.tsx)
 * - Any other page that renders these slides
 */

import { PresentationContainer } from '@/components/presentation-container'
import { FeedbackProvider } from '@/contexts/FeedbackContext'

// Define slide IDs for this module
const moduleSlides = [
  'module-01-title',
  'module-02-context',
  'module-03-overview',
  'module-04-question-1',      // First question slide
  'module-05-question-2',      // Second question slide
  'module-06-question-3',      // Third question slide
  'module-07-summary',         // Summary slide
]

/**
 * ✅ CORRECT: Wrap PresentationContainer with FeedbackProvider
 *
 * The provider lives at the page level, which doesn't
 * unmount when users navigate between slides. This allows
 * all question slides and the summary slide to share state.
 */
export default function ModulePage() {
  return (
    <FeedbackProvider>
      <PresentationContainer
        slideIds={moduleSlides}
        title="Module: Feedback Collection"
        id="feedback-module"
      />
    </FeedbackProvider>
  )
}

/**
 * ============================================
 * HOME PAGE EXAMPLE
 * ============================================
 *
 * If your home page (app/page.tsx) loads feedback slides,
 * it ALSO needs the FeedbackProvider wrapper:
 *
 * ```tsx
 * // app/page.tsx
 * import { PresentationContainer } from '@/components/presentation-container'
 * import { FeedbackProvider } from '@/contexts/FeedbackContext'
 *
 * const defaultSlides = [
 *   'fb-01-title',
 *   'fb-05-positioning-question',  // Uses useFeedback()
 *   'fb-06-brand-tone-question',   // Uses useFeedback()
 *   'fb-08-summary-next-steps',    // Uses useFeedback()
 * ]
 *
 * export default function HomePage() {
 *   return (
 *     <FeedbackProvider>
 *       <PresentationContainer
 *         slideIds={defaultSlides}
 *         title="Presentation"
 *         id="main"
 *       />
 *     </FeedbackProvider>
 *   )
 * }
 * ```
 */

/**
 * ============================================
 * ANTI-PATTERN - DO NOT DO THIS
 * ============================================
 *
 * ❌ WRONG (no provider wrapper):
 * ```tsx
 * export default function ModulePage() {
 *   return (
 *     <PresentationContainer
 *       slideIds={moduleSlides}
 *       title="Module: Feedback Collection"
 *       id="feedback-module"
 *     />
 *   )
 * }
 * ```
 *
 * This will cause: "useFeedback must be used within a FeedbackProvider"
 *
 * Without the FeedbackProvider, slides will:
 * - Crash with runtime error when useFeedback() is called
 * - Cannot share state between slides
 * - Summary slide cannot display selections
 *
 * ✅ CORRECT: Always wrap with FeedbackProvider on EVERY page
 * that loads slides using the useFeedback() hook.
 */
