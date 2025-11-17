/**
 * S3 Module Page - Managing AI
 * 2 starter slides
 */

import { PresentationContainer } from '@/components/presentation-container'

// S3: Managing AI slide IDs (2 slides)
const s3Slides = [
  's3-01-title',
  's3-02-management-shift'
]

export default function S3ModulePage() {
  return (
    <PresentationContainer
      slideIds={s3Slides}
      title="S3: Managing AI"
      id="s3"
    />
  )
}
