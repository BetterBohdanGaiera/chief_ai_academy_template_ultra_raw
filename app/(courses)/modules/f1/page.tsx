/**
 * F1 Module Page - Five Levels Framework
 * 18 slides covering all 5 levels of AI adoption
 */

import { PresentationContainer } from '@/components/presentation-container'

// F1: Five Levels Framework slide IDs (18 slides)
const f1Slides = [
  'f1-01-title',
  'f1-02-why-levels',
  'f1-03-levels-overview',
  'f1-04-level1-individual',
  'f1-05-level2-saas',
  'f1-06-level3-trap',
  'f1-07-level3-failure',
  'f1-08-iteration-economics',
  'f1-09-level4-iterative',
  'f1-10-level5-autonomous',
  'f1-11-transition-l1-l2',
  'f1-12-transition-l3-escape',
  'f1-13-decision-tree',
  'f1-14-l4-optimization',
  'f1-15-self-assessment',
  'f1-16-quiz',
  'f1-17-summary',
  'f1-18-whats-next'
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
