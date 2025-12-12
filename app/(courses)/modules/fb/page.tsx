/**
 * FB Module Page - Feedback Presentation (TechFlow Solutions)
 * Q1 2025 Marketing Launch - Stakeholder Feedback Session
 */

import { PresentationContainer } from '@/components/presentation-container'
import { FeedbackProvider } from '@/contexts/FeedbackContext'

// FB: Feedback Module slide IDs
const fbSlides = [
  'fb-01-title',
  'fb-02-techflow-overview',
  'fb-03-market-landscape',
  'fb-04-campaign-context',
  'fb-05-positioning-question',
  'fb-06-brand-tone-question',
  'fb-07-lead-strategy-question',
  'fb-08-summary-next-steps'
]

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
