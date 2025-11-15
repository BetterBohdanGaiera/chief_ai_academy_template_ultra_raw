/**
 * Developer Learning Path Page
 * Technical implementation focus
 */

import { PresentationContainer } from '@/components/presentation-container'

// Mock slide IDs for Developer path
const developerSlides = [
  'mock-01-foundation-title',
  'mock-02-skills-concept'
]

export default function DeveloperPathPage() {
  return (
    <PresentationContainer
      slideIds={developerSlides}
      title="Developer Path"
      id="path-developer"
    />
  )
}
