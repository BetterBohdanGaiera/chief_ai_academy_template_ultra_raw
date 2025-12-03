# Deploy Presentation

Deploy your presentation to the web with a single command. The deployment system supports multiple providers, automatic database provisioning, and session management for multi-instance deployments.

## Quick Deploy

Run the deploy command to automatically build and deploy your presentation:

```bash
pnpm deploy
```

This will:
1. Detect available deployment CLI tools
2. Initialize D1 database (if using Cloudflare)
3. Run migrations automatically
4. Build the presentation as a static site
5. Deploy to the best available provider
6. Return a public URL

## Database Auto-Provisioning

The deploy script automatically handles database setup for Cloudflare deployments:

```bash
# Deploy with auto database init (default)
pnpm deploy

# Deploy without database init (for CI/CD where DB already exists)
pnpm deploy --skip-db-init

# Deploy with custom database name
pnpm deploy --db-name=my-workshop-db

# Deploy with custom project name and database
pnpm deploy --name=my-presentation --db-name=my-presentation-db
```

### Manual Database Commands

```bash
# Initialize database manually
pnpm db:init

# Initialize with custom database name
pnpm db:init my-custom-db

# Run migration for existing databases (adds multi-form support)
pnpm db:migrate
```

## Session Management

Sessions allow multiple instances of the same presentation to be deployed with independent feedback collection.

### Create a New Session

```bash
# Basic session creation
pnpm session:create --name "Workshop Day 1"

# With custom ID
pnpm session:create --name "AI Training" --id ai-training-2024

# With description and database init
pnpm session:create --name "Demo" --description "Demo for stakeholders" --db
```

### List Sessions

```bash
# List all sessions with feedback counts
pnpm session:list
```

### View Feedback by Form/Session

```bash
# Feedback count by form
pnpm feedback:by-form

# Feedback count by session
pnpm feedback:by-session
```

## Deployment Providers

### Cloudflare Pages (Recommended)
- **Free tier**: Unlimited bandwidth, unlimited deploys
- **Commercial use**: Allowed
- **Database**: D1 included (auto-provisioned)
- **Setup**: `wrangler login` (one-time)
- **Deploy**: `pnpm deploy:cloudflare`

### Netlify
- **Free tier**: 100GB bandwidth/month
- **Commercial use**: Allowed
- **Setup**: `netlify login` (one-time)
- **Deploy**: `pnpm deploy netlify`

### Surge.sh
- **Free tier**: Unlimited bandwidth
- **Commercial use**: Allowed
- **Setup**: `surge login` (one-time)
- **Deploy**: `pnpm deploy surge`

### Vercel
- **Free tier**: 100GB bandwidth/month
- **Commercial use**: Pro plan required
- **Setup**: `vercel login` (one-time)
- **Deploy**: `pnpm deploy:vercel`

## First-Time Setup

### Cloudflare (Recommended)
1. Create a free Cloudflare account at https://dash.cloudflare.com/sign-up
2. Run `wrangler login` to authenticate
3. Run `pnpm deploy` - done! Database is auto-provisioned.

### Netlify
1. Create a free Netlify account at https://app.netlify.com/signup
2. Install CLI: `pnpm add -D netlify-cli`
3. Run `netlify login` to authenticate
4. Run `pnpm deploy netlify`

### Surge.sh
1. Install CLI: `pnpm add -D surge`
2. Run `surge login` (creates account if needed)
3. Run `pnpm deploy surge`

## Environment Variables

Set these environment variables for CI/CD or to override defaults:

| Variable | Purpose | Default |
|----------|---------|---------|
| `SESSION_ID` | Unique session identifier | `default-session` |
| `SESSION_NAME` | Human-readable session name | `Default Session` |
| `SESSION_DESCRIPTION` | Optional description | - |
| `PRESENTATION_TITLE` | Title for this session | `Presentation` |
| `D1_DATABASE_NAME` | Custom database name | `presentation-feedback` |

For client-side access, use `NEXT_PUBLIC_` prefix:
- `NEXT_PUBLIC_SESSION_ID`
- `NEXT_PUBLIC_SESSION_NAME`
- etc.

## Troubleshooting

### "Not authenticated" error
Run the login command for your provider:
- Cloudflare: `wrangler login`
- Netlify: `netlify login`
- Surge: `surge login`
- Vercel: `vercel login`

### Build errors
Make sure the presentation builds locally first:
```bash
pnpm build
```

### Database initialization fails
```bash
# Run manually with verbose output
bash scripts/init-database.sh

# Check if database exists
wrangler d1 list
```

### Migration errors
If migration fails due to existing columns:
```bash
# This is expected for databases that already have the columns
# The warning can be ignored
```

### Large bundle size warning
Cloudflare Workers has a 3MB limit. If exceeded, consider:
- Removing unused dependencies
- Optimizing images
- Using Netlify or Vercel instead

## Cost Comparison

| Monthly Usage | Cloudflare | Netlify | Vercel |
|--------------|------------|---------|--------|
| < 100GB      | $0         | $0      | $0     |
| 200GB        | $0         | Suspended | $20+  |
| Commercial   | $0         | $0      | $20+   |
| D1 Database  | Free (5M reads/day) | N/A | N/A |

Cloudflare Pages is recommended for most use cases due to unlimited free bandwidth, commercial use, and included D1 database.
