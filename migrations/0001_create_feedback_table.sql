-- Feedback Collection System
-- Migration 0001: Create feedback table

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
    metadata TEXT  -- JSON for extensibility
);

-- Indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_feedback_presentation_id ON feedback(presentation_id);
CREATE INDEX IF NOT EXISTS idx_feedback_slide_id ON feedback(slide_id);
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback(created_at);
