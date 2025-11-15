/**
 * Type definitions for multi-course learning path architecture
 * Supports modular course structure, learning paths, and atomic slide composition
 */

/**
 * Slide metadata and component reference
 */
export interface Slide {
  /** Unique slide identifier (e.g., "f1-01-title") */
  id: string
  /** Lazy-loaded slide component */
  component: () => Promise<{ default: React.ComponentType }>
  /** Module this slide belongs to */
  module: string
  /** Human-readable slide title */
  title: string
  /** Tags for filtering and categorization */
  tags: string[]
  /** Estimated duration in minutes */
  duration: number
  /** Optional speaker notes for presenter mode */
  notes?: string
}

/**
 * Slide range specification for path composition
 */
export interface SlideRange {
  /** Module identifier (e.g., "f1", "f2", "s1") */
  module: string
  /** Slide number range [start, end] (inclusive) */
  range: [number, number]
}

/**
 * Course module definition
 */
export interface Module {
  /** Module identifier (e.g., "f1", "s2") */
  id: string
  /** Human-readable module title */
  title: string
  /** Module description */
  description: string
  /** Estimated duration in minutes */
  duration: number
  /** Total number of slides in this module */
  slideCount: number
}

/**
 * Course definition
 */
export interface Course {
  /** Course identifier (e.g., "foundation", "skills") */
  id: string
  /** Human-readable course title */
  title: string
  /** Course description */
  description: string
  /** Estimated total duration in minutes */
  duration: number
  /** Modules included in this course */
  modules: string[]
  /** URL slug for routing */
  slug: string
  /** Course color theme (primary, cyan, amber) */
  theme?: string
}

/**
 * Learning path definition
 */
export interface Path {
  /** Path identifier (e.g., "executive", "ai-champion") */
  id: string
  /** Human-readable path title */
  title: string
  /** Path description */
  description: string
  /** Estimated total duration in minutes */
  duration: number
  /** Target audience description */
  audience: string
  /** Slide composition rules (which slides to include) */
  slides: SlideRange[]
  /** URL slug for routing */
  slug: string
  /** Path color theme (primary, cyan, amber) */
  theme?: string
}

/**
 * Navigation state
 */
export interface NavigationState {
  /** Current course ID (if in course view) */
  currentCourse?: string
  /** Current path ID (if in path view) */
  currentPath?: string
  /** Current slide index (0-based) */
  currentSlide: number
  /** Total number of slides in current presentation */
  totalSlides: number
  /** Is presenter mode active */
  presenterMode: boolean
}

/**
 * Presenter mode state
 */
export interface PresenterState {
  /** Is presenter mode active */
  active: boolean
  /** Current slide elapsed time (seconds) */
  slideElapsed: number
  /** Total presentation elapsed time (seconds) */
  totalElapsed: number
  /** Speaker notes for current slide */
  currentNotes?: string
  /** Next slide preview component */
  nextSlide?: React.ComponentType
}

/**
 * Slide registry entry
 */
export interface SlideRegistryEntry {
  /** Slide metadata */
  slide: Slide
  /** Component lazy loader */
  loader: () => Promise<{ default: React.ComponentType }>
}

/**
 * Slide registry type (map of slide ID to entry)
 */
export type SlideRegistry = Record<string, SlideRegistryEntry>

/**
 * Course registry type (map of course ID to course)
 */
export type CourseRegistry = Record<string, Course>

/**
 * Path registry type (map of path ID to path)
 */
export type PathRegistry = Record<string, Path>

/**
 * Module registry type (map of module ID to module)
 */
export type ModuleRegistry = Record<string, Module>
