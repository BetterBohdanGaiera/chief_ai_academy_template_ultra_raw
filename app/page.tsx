/**
 * Homepage - Direct Presentation View
 * Displays the presentation immediately without module selection
 */

import { PresentationContainer } from '@/components/presentation-container'

// Default presentation slides (M1 Example Module)
const defaultSlides = [
  'm1-01-title',
  'm1-02-interactive',
  'm1-03-feedback'
]

export default function HomePage() {
  return (
    <PresentationContainer
      slideIds={defaultSlides}
      title="Presentation"
      id="main"
    />
  )
}
