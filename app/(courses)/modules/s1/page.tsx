/**
 * S1 Module Page - Choosing AI Technology
 * 2 starter slides
 */

import { PresentationContainer } from '@/components/presentation-container'

// S1: Choosing AI Technology slide IDs (2 slides)
const s1Slides = [
  's1-01-title',
  's1-02-four-approaches'
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
