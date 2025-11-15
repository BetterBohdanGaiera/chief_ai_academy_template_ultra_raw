/**
 * Course configuration
 * Defines all available courses with metadata and module mappings
 */

import { type Course, type CourseRegistry } from '@/types/courses'

export const courses: CourseRegistry = {
  foundation: {
    id: 'foundation',
    title: 'Foundation',
    description: 'Five Levels Framework & Organization Structure',
    duration: 40, // minutes
    modules: ['f1', 'f2'],
    slug: '/courses/foundation',
    theme: 'primary'
  },
  skills: {
    id: 'skills',
    title: 'Skills',
    description: 'Choosing AI Technology, Understanding Agents & Managing AI',
    duration: 65, // minutes
    modules: ['s1', 's2', 's3'],
    slug: '/courses/skills',
    theme: 'primary'
  }
}

/**
 * Get course by ID
 */
export function getCourse(courseId: string): Course | undefined {
  return courses[courseId]
}

/**
 * Get all courses as an array
 */
export function getAllCourses(): Course[] {
  return Object.values(courses)
}
