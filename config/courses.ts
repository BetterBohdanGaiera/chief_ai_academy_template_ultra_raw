/**
 * Module configuration
 * Defines available presentation modules
 *
 * Template: Each module represents a separate visualization/presentation topic
 */

import { type Course, type CourseRegistry, type ModuleRegistry } from '@/types/courses'

/**
 * Module Registry
 * Each module is a self-contained presentation with its own slides
 */
export const modules: ModuleRegistry = {
  m1: {
    id: 'm1',
    title: 'Example Module',
    description: 'Template module with example slides',
    duration: 5,
    slideCount: 2
  },
  m2: {
    id: 'm2',
    title: 'Module 2',
    description: 'Add your content here',
    duration: 0,
    slideCount: 0
  },
  m3: {
    id: 'm3',
    title: 'Module 3',
    description: 'Add your content here',
    duration: 0,
    slideCount: 0
  }
}

/**
 * Course Registry (Optional grouping of modules)
 * Use if you want to group multiple modules into a course
 */
export const courses: CourseRegistry = {
  main: {
    id: 'main',
    title: 'Main Presentation',
    description: 'All modules combined',
    duration: 5,
    modules: ['m1', 'm2', 'm3'],
    slug: '/courses/main',
    theme: 'primary'
  }
}

/**
 * Get module by ID
 */
export function getModule(moduleId: string) {
  return modules[moduleId]
}

/**
 * Get all modules as an array
 */
export function getAllModules() {
  return Object.values(modules)
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
