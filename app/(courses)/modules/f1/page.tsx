/**
 * F1 Module Page - Five Levels Framework
 * 2 starter slides
 */

import { PresentationContainer } from '@/components/presentation-container'

// F1: Five Levels Framework slide IDs (2 slides)
const f1Slides = [
  'f1-01-title',
  'f1-02-why-levels'
]

export default function F1ModulePage() {
  return (
    <PresentationContainer
      slideIds={f1Slides}
      title="F1: Five Levels Framework"
      id="f1"
    />
  )
}
