/**
 * S1 Module Page - Choosing AI Technology
 * 14 slides covering decision frameworks and solution categories
 */

import { PresentationContainer } from '@/components/presentation-container'

// S1: Choosing AI Technology slide IDs (14 slides)
const s1Slides = [
  's1-01-title',
  's1-02-four-approaches',
  's1-03-ml-vs-agentic',
  's1-04-build-vs-buy',
  's1-05-context-engineering-advantage',
  's1-06-category-static-info',
  's1-07-category-dynamic-content',
  's1-08-category-workflows',
  's1-09-roi-ranges',
  's1-10-hybrid-strategy',
  's1-11-integration-depth-check',
  's1-12-use-case-readiness',
  's1-13-quiz',
  's1-14-summary'
]

export default function S1ModulePage() {
  return (
    <PresentationContainer
      slideIds={s1Slides}
      title="S1: Choosing AI Technology"
      id="s1"
    />
  )
}
