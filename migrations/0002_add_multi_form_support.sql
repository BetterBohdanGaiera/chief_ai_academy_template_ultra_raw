-- Multi-Form Support Migration
-- Migration 0002: Add columns for multi-form feedback support
--
-- This migration adds support for:
-- - form_id: Unique identifier for each feedback form
-- - session_id: Identifier for the deployment session/instance
-- - question_hash: Hash of the question prompt for grouping responses
-- - form_context: JSON field storing form configuration at submission time

-- Add new columns with defaults for backward compatibility
ALTER TABLE feedback ADD COLUMN form_id TEXT DEFAULT 'default';
ALTER TABLE feedback ADD COLUMN session_id TEXT;
ALTER TABLE feedback ADD COLUMN question_hash TEXT;
ALTER TABLE feedback ADD COLUMN form_context TEXT;

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_feedback_form_id ON feedback(form_id);
CREATE INDEX IF NOT EXISTS idx_feedback_session_id ON feedback(session_id);
CREATE INDEX IF NOT EXISTS idx_feedback_composite ON feedback(session_id, form_id);
