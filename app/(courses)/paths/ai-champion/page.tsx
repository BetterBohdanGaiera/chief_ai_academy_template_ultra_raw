/**
 * AI Champion Learning Path Page
 * Full curriculum for transformation leaders
 */

import { PresentationContainer } from '@/components/presentation-container'

// Mock slide IDs for AI Champion path (complete curriculum)
const aiChampionSlides = [
  'mock-01-foundation-title',
  'mock-02-skills-concept',
  'mock-03-executive-strategic'
]

export default function AIChampionPathPage() {
  return (
    <PresentationContainer
      slideIds={aiChampionSlides}
      title="AI Champion Path"
      id="path-ai-champion"
    />
  )
}
