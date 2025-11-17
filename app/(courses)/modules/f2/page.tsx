/**
 * F2 Module Page - Organization Structure
 * 2 starter slides
 */

import { PresentationContainer } from '@/components/presentation-container'

// F2: Organization Structure slide IDs (2 slides)
const f2Slides = [
  'f2-01-title',
  'f2-02-four-roles-framework'
]

export default function F2ModulePage() {
  return (
    <PresentationContainer
      slideIds={f2Slides}
      title="F2: Organization Structure"
      id="f2"
    />
  )
}
