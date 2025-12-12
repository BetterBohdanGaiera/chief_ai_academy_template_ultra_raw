/**
 * Form Registry
 * Central registry for managing form definitions
 */

import type {
  FormDefinition,
  FormType,
  QuestionWithContext,
  QuestionContext,
  CreateFormInput,
} from '../agent-sdk/types'

// ============================================
// Registry Storage
// ============================================

/**
 * In-memory form registry
 */
const formRegistry = new Map<string, FormDefinition>()

// ============================================
// Registry Operations
// ============================================

/**
 * Register a form definition
 */
export function registerForm(form: CreateFormInput): FormDefinition {
  const formDefinition: FormDefinition = {
    ...form,
    createdAt: new Date().toISOString(),
  }

  formRegistry.set(form.id, formDefinition)
  return formDefinition
}

/**
 * Get a form by ID
 */
export function getForm(formId: string): FormDefinition | undefined {
  return formRegistry.get(formId)
}

/**
 * Get all forms of a specific type
 */
export function getFormsByType(type: FormType): FormDefinition[] {
  return Array.from(formRegistry.values()).filter(form => form.type === type)
}

/**
 * Get all registered forms
 */
export function getAllForms(): FormDefinition[] {
  return Array.from(formRegistry.values())
}

/**
 * Unregister a form
 */
export function unregisterForm(formId: string): boolean {
  return formRegistry.delete(formId)
}

/**
 * Check if a form exists
 */
export function hasForm(formId: string): boolean {
  return formRegistry.has(formId)
}

/**
 * Clear all registered forms
 */
export function clearRegistry(): void {
  formRegistry.clear()
}

// ============================================
// Form Helpers
// ============================================

/**
 * Get a specific question from a form
 */
export function getQuestion(
  formId: string,
  questionId: string
): QuestionWithContext | undefined {
  const form = getForm(formId)
  if (!form) return undefined
  return form.questions.find(q => q.id === questionId)
}

/**
 * Get question by index
 */
export function getQuestionByIndex(
  formId: string,
  index: number
): QuestionWithContext | undefined {
  const form = getForm(formId)
  if (!form) return undefined
  return form.questions[index]
}

/**
 * Get the next question in a form
 */
export function getNextQuestion(
  formId: string,
  currentQuestionId: string
): { question: QuestionWithContext; index: number } | null {
  const form = getForm(formId)
  if (!form) return null

  const currentIndex = form.questions.findIndex(q => q.id === currentQuestionId)
  if (currentIndex === -1 || currentIndex >= form.questions.length - 1) {
    return null
  }

  return {
    question: form.questions[currentIndex + 1],
    index: currentIndex + 1,
  }
}

/**
 * Check if this is the last question
 */
export function isLastQuestion(formId: string, questionId: string): boolean {
  const form = getForm(formId)
  if (!form) return true

  const index = form.questions.findIndex(q => q.id === questionId)
  return index === form.questions.length - 1
}

/**
 * Get total question count for a form
 */
export function getQuestionCount(formId: string): number {
  const form = getForm(formId)
  return form?.questions.length ?? 0
}

// ============================================
// Form Creation Helpers
// ============================================

/**
 * Create a question with context
 */
export function createQuestion(
  id: string,
  primaryQuestion: string,
  context: QuestionContext,
  options?: {
    subtitle?: string
    topicBadge?: string
    placeholder?: string
  }
): QuestionWithContext {
  return {
    id,
    primaryQuestion,
    context,
    subtitle: options?.subtitle,
    topicBadge: options?.topicBadge,
    placeholder: options?.placeholder,
  }
}

/**
 * Create a question context
 */
export function createContext(
  topic: string,
  background: string,
  desiredOutcome: string,
  clarifyingHints?: string[]
): QuestionContext {
  return {
    topic,
    background,
    desiredOutcome,
    clarifyingHints,
  }
}

/**
 * Create a complete form definition
 */
export function createForm(
  id: string,
  type: FormType,
  title: string,
  questions: QuestionWithContext[],
  options?: {
    description?: string
    metadata?: Record<string, unknown>
  }
): CreateFormInput {
  return {
    id,
    type,
    title,
    description: options?.description,
    questions,
    metadata: options?.metadata,
  }
}

// ============================================
// Exports
// ============================================

export type { FormDefinition, FormType, QuestionWithContext, QuestionContext }
