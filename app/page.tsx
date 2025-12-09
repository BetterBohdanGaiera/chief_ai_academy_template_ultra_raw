/**
 * Homepage - Direct Presentation View
 * Displays the presentation immediately without module selection
 */

import { PresentationContainer } from '@/components/presentation-container'

// Vlada Financial Management Presentation - All 18 slides
const defaultSlides = [
  'vlada-01-title',
  'vlada-02-problem',
  'vlada-03-solution',
  'vlada-04-pricing',
  'vlada-05-basic-plan-intro',
  'vlada-06-basic-plan-details',
  'vlada-07-before-state',
  'vlada-08-after-state',
  'vlada-09-premium-plan-intro',
  'vlada-10-premium-zoom-meetings',
  'vlada-11-premium-cost-calculation',
  'vlada-12-premium-yearly-plan',
  'vlada-13-premium-4-dividends',
  'vlada-14-premium-5-efficiency',
  'vlada-15-premium-budgets',
  'vlada-16-comparison-table',
  'vlada-17-decision-guide',
  'vlada-18-cta-contacts'
]

export default function HomePage() {
  return (
    <PresentationContainer
      slideIds={defaultSlides}
      title="Presentation"
      id="main"
    />
  )
}
