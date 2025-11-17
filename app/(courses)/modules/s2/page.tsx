/**
 * S2 Module Page - Understanding AI Agents
 * 2 starter slides
 */

import { PresentationContainer } from '@/components/presentation-container'

// S2: Understanding Agents slide IDs (2 slides)
const s2Slides = [
  's2-01-title',
  's2-02-four-components'
]

export default function S2ModulePage() {
  return (
    <PresentationContainer
      slideIds={s2Slides}
      title="S2: Understanding AI Agents"
      id="s2"
    />
  )
}
