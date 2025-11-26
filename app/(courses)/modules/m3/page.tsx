/**
 * M3 Module Page - Empty Module
 * Add your slides here
 */

import { PresentationContainer } from '@/components/presentation-container'

// M3: Add your slide IDs here
const m3Slides: string[] = [
  // 'm3-01-title',
  // 'm3-02-content',
]

export default function M3ModulePage() {
  return (
    <PresentationContainer
      slideIds={m3Slides}
      title="M3: Module 3"
      id="m3"
    />
  )
}
