/**
 * M2 Module Page - Empty Module
 * Add your slides here
 */

import { PresentationContainer } from '@/components/presentation-container'

// M2: Add your slide IDs here
const m2Slides: string[] = [
  // 'm2-01-title',
  // 'm2-02-content',
]

export default function M2ModulePage() {
  return (
    <PresentationContainer
      slideIds={m2Slides}
      title="M2: Module 2"
      id="m2"
    />
  )
}
