/**
 * Skills Course Page
 * Displays mock slides demonstrating the Skills course structure
 */

import { PresentationContainer } from '@/components/presentation-container'

// Mock slide IDs for Skills course
// In full implementation, this would include all S1 + S2 + S3 slides
const skillsSlides = [
  'mock-02-skills-concept',
  'mock-03-executive-strategic' // This slide appears differently in Executive path
]

export default function SkillsCoursePage() {
  return (
    <PresentationContainer
      slideIds={skillsSlides}
      title="Skills Course"
      id="skills"
    />
  )
}
