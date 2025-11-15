/**
 * Executive Learning Path Page
 * Displays curated slides for C-suite executives (strategic focus)
 */

import { PresentationContainer } from '@/components/presentation-container'

// Mock slide IDs for Executive path
// Demonstrates filtering: shows strategic overview (slide 3) instead of detailed content (slide 2)
const executiveSlides = [
  'mock-01-foundation-title',
  'mock-03-executive-strategic' // Simplified strategic content for executives
]

export default function ExecutivePathPage() {
  return (
    <PresentationContainer
      slideIds={executiveSlides}
      title="Executive Path"
      id="path-executive"
    />
  )
}
