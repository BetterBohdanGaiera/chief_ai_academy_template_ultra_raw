# Initialize Remote Infrastructure from Scratch

Initialize the complete remote infrastructure for a new presentation deployment. This sets up the Cloudflare D1 database, runs migrations, creates a session, and optionally deploys.

## What This Does

1. **Authenticate** with Cloudflare (if not already logged in)
2. **Create D1 database** with the specified name (or default)
3. **Run all migrations** to set up the feedback table schema
4. **Update wrangler.toml** with the new database ID
5. **Create a session** (optional) for tracking feedback
6. **Deploy** (optional) to Cloudflare Pages

## Instructions

Run the following steps based on user requirements:

### Step 1: Check Prerequisites
```bash
# Verify wrangler is installed
wrangler --version

# Check authentication status
wrangler whoami
```

If not authenticated, run `wrangler login` first.

### Step 2: Initialize Database
```bash
# Default database name
pnpm db:init

# Or with custom name
pnpm db:init <database-name>
```

This will:
- Create the D1 database if it doesn't exist
- Update `wrangler.toml` with the database ID
- Run migration 0001 (create feedback table)
- Run migration 0002 (add multi-form support columns)

### Step 3: Create Session (Optional)
```bash
# Create a new session for this deployment
pnpm session:create --name "<Session Name>" --id <session-id>

# Example
pnpm session:create --name "Workshop Day 1" --id workshop-day-1
```

### Step 4: Verify Setup
```bash
# List databases to confirm creation
wrangler d1 list

# Check the database schema
wrangler d1 execute <database-name> --remote --command="SELECT name FROM sqlite_master WHERE type='table';"

# Verify feedback table columns
wrangler d1 execute <database-name> --remote --command="PRAGMA table_info(feedback);"
```

### Step 5: Deploy (Optional)
```bash
# Deploy with auto-detection
pnpm deploy

# Or deploy with custom project name
pnpm deploy --name=<project-name>

# Skip database init if already done
pnpm deploy --skip-db-init --name=<project-name>
```

## Quick One-Liner

For a complete fresh setup with defaults:
```bash
pnpm db:init && pnpm session:create --name "Default Session" && pnpm deploy
```

## Environment Variables

Set these before running if you want custom values:

| Variable | Purpose | Default |
|----------|---------|---------|
| `D1_DATABASE_NAME` | Database name | `presentation-feedback` |
| `SESSION_ID` | Session identifier | `default-session` |
| `SESSION_NAME` | Human-readable name | `Default Session` |
| `PRESENTATION_TITLE` | Presentation title | `Presentation` |

## Troubleshooting

### "Not authenticated" error
```bash
wrangler login
```

### Database already exists
This is fine - the script will skip creation and just run migrations.

### Migration errors about existing columns
This is expected if migrations were already run. The warnings can be ignored.

### Verify everything is working
```bash
# Check database exists
wrangler d1 list

# Check tables exist
wrangler d1 execute presentation-feedback --remote --command="SELECT name FROM sqlite_master WHERE type='table';"

# Check feedback table has all columns
wrangler d1 execute presentation-feedback --remote --command="PRAGMA table_info(feedback);"
```

## Report

After running, confirm:
- [ ] Database created/exists
- [ ] Migrations ran successfully
- [ ] `wrangler.toml` has correct `database_id`
- [ ] Session created (if requested)
- [ ] Deployment successful (if requested)
