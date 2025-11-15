/**
 * Foundation Course Page
 * Displays mock slides demonstrating the Foundation course structure
 */

import { PresentationContainer } from '@/components/presentation-container'

// Mock slide IDs for Foundation course
// In full implementation, this would include all F1 + F2 slides
const foundationSlides = [
  'mock-01-foundation-title',
  'mock-02-skills-concept' // Shared slide also appears in Skills
]

export default function FoundationCoursePage() {
  return (
    <PresentationContainer
      slideIds={foundationSlides}
      title="Foundation Course"
      id="foundation"
    />
  )
}
