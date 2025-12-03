-- Feedback Collection System
-- Migration 0001: Create feedback table
--
-- This migration creates the feedback table with full multi-form support.
-- For existing deployments, run 0002_add_multi_form_support.sql to add the new columns.

CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    presentation_id TEXT NOT NULL,
    slide_id TEXT NOT NULL,
    slide_index INTEGER,
    feedback_text TEXT NOT NULL,
    reviewer_name TEXT,
    reviewer_email TEXT,
    feedback_type TEXT DEFAULT 'general',
    created_at TEXT DEFAULT (datetime('now')),
    metadata TEXT,  -- JSON for extensibility
    -- Multi-form support columns (added in v2)
    form_id TEXT DEFAULT 'default',       -- Unique identifier for each feedback form
    session_id TEXT,                       -- Identifier for deployment session/instance
    question_hash TEXT,                    -- Hash of question prompt for grouping
    form_context TEXT                      -- JSON storing form config at submission time
);

-- Indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_feedback_presentation_id ON feedback(presentation_id);
CREATE INDEX IF NOT EXISTS idx_feedback_slide_id ON feedback(slide_id);
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback(created_at);
-- Multi-form support indexes
CREATE INDEX IF NOT EXISTS idx_feedback_form_id ON feedback(form_id);
CREATE INDEX IF NOT EXISTS idx_feedback_session_id ON feedback(session_id);
CREATE INDEX IF NOT EXISTS idx_feedback_composite ON feedback(session_id, form_id);
