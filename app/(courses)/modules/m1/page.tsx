/**
 * M1 Module Page - Example Module
 * Template with 2 example slides
 */

import { PresentationContainer } from '@/components/presentation-container'

// M1: Example Module slide IDs (3 slides)
const m1Slides = [
  'm1-01-title',
  'm1-02-interactive',
  'm1-03-feedback'
]

export default function M1ModulePage() {
  return (
    <PresentationContainer
      slideIds={m1Slides}
      title="M1: Example Module"
      id="m1"
    />
  )
}
