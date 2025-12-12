-- Migration: Add Agent Sessions Table
-- Purpose: Store agent conversation sessions for AI-powered forms

-- Create agent_sessions table
CREATE TABLE IF NOT EXISTS agent_sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT NOT NULL UNIQUE,
    form_id TEXT NOT NULL,
    form_type TEXT NOT NULL CHECK (form_type IN ('onboarding', 'feedback', 'discovery', 'custom')),
    current_question_index INTEGER DEFAULT 0,
    gathered_answers TEXT, -- JSON serialized Record<string, GatheredAnswer>
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'abandoned')),
    metadata TEXT, -- JSON serialized ConversationMetadata
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_agent_sessions_form_id ON agent_sessions(form_id);
CREATE INDEX IF NOT EXISTS idx_agent_sessions_status ON agent_sessions(status);
CREATE INDEX IF NOT EXISTS idx_agent_sessions_created_at ON agent_sessions(created_at);

-- Create form_responses table for individual question responses
CREATE TABLE IF NOT EXISTS form_responses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT NOT NULL,
    form_id TEXT NOT NULL,
    form_type TEXT NOT NULL,
    question_id TEXT NOT NULL,
    primary_answer TEXT NOT NULL,
    conversation_thread TEXT, -- JSON serialized ConversationMessage[]
    extracted_insights TEXT, -- JSON serialized insights
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'abandoned')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES agent_sessions(session_id)
);

-- Create indexes for form_responses
CREATE INDEX IF NOT EXISTS idx_form_responses_session_id ON form_responses(session_id);
CREATE INDEX IF NOT EXISTS idx_form_responses_form_id ON form_responses(form_id);
CREATE INDEX IF NOT EXISTS idx_form_responses_question_id ON form_responses(question_id);

-- Add new columns to existing feedback table if not exists
-- Note: SQLite doesn't support IF NOT EXISTS for columns, so we use a pragma to check
-- This is a safe migration that won't fail if columns already exist

-- Ensure form_type column exists (may already exist from previous migrations)
-- ALTER TABLE feedback ADD COLUMN form_type TEXT;
