/**
 * Reddit Module Page - Reddit Marketing Research
 * Slides covering Reddit marketing research, architecture, and strategy
 */

import { PresentationContainer } from '@/components/presentation-container'

// Reddit: Marketing Research slide IDs
const redditSlides = [
  'reddit-01-title',
  'reddit-02-all-in-one-platforms',
  'reddit-03-monitoring-tools',
  'reddit-04-components-spare-parts',
  'reddit-05-shadowban-safety',
  'reddit-06-build-vs-buy',
  'reddit-07-economics-roi',
  'reddit-08-architecture',
  'reddit-09-native-strategy',
  'reddit-10-risks-next-steps'
]

export default function RedditModulePage() {
  return (
    <PresentationContainer
      slideIds={redditSlides}
      title="Reddit Marketing Research"
      id="reddit"
    />
  )
}
