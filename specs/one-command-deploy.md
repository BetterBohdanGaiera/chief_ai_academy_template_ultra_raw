# Feature: One-Command Deployment System

## Feature Description
A streamlined deployment system that allows users to deploy their presentation with a single command (`pnpm deploy`), automatically provisioning a hosting environment and returning a public URL. The system should work without manual project setup on hosting platforms and be cost-effective for the "idea to presentation" workflow.

## User Story
As a presentation creator
I want to deploy my presentation with a single command
So that I can share my ideas instantly without manual hosting setup or ongoing costs

## Problem Statement
Currently, deploying presentations requires:
1. Manually creating a project on Vercel or other platforms
2. Linking repositories or configuring deployment settings
3. Managing costs for commercial use (Vercel Pro is $20/month for teams)
4. Multiple steps between "idea ready" and "shareable URL"

The "idea to presentation" workflow should be: modify template → run deploy → get URL.

## Solution Statement
Implement a multi-tier deployment system using **Cloudflare Pages** as the primary option (unlimited bandwidth, free forever, one command) with fallback options for different use cases. The solution includes:

1. **Primary: Cloudflare Pages** - Best free tier with unlimited bandwidth, uses `wrangler` CLI
2. **Alternative: Netlify** - Simpler setup, 100GB bandwidth/month free
3. **Fallback: Surge.sh** - Ultra-simple for static exports (one command, no config)
4. **Keep Vercel** - For users who prefer it and don't mind the manual setup

### Comparison of Top Options

| Platform | Free Tier | Bandwidth | CLI Deploy | One Command | Best For |
|----------|-----------|-----------|------------|-------------|----------|
| **Cloudflare Pages** | Unlimited deploys | **Unlimited** | `wrangler pages deploy` | ✅ | Production use |
| **Netlify** | 100GB/mo | 100GB/mo | `netlify deploy --prod` | ✅ | Simplicity |
| **Surge.sh** | Unlimited | Unlimited | `surge` | ✅ | Static only |
| **Vercel** | 100GB/mo | 100GB/mo | `vercel --prod` | ✅ | SSR features |
| **Railway** | $5 credit then paid | - | `railway up` | ✅ | Full backend |
| **Fly.io** | $5 credit then paid | - | `fly deploy` | ⚠️ | Containers |

### Recommendation: Cloudflare Pages (Primary)
- **Unlimited bandwidth** on free tier (others cap at 100GB)
- **Commercial use allowed** (Vercel hobby restricts this)
- **Global CDN** built-in
- **One command**: `pnpm deploy` → `wrangler pages deploy`
- **Auto-generated URLs**: `<project>-<hash>.pages.dev`

## Relevant Files
Use these files to implement the feature:

### Existing Files to Modify
- `package.json` - Add deploy scripts and wrangler dependency
- `next.config.mjs` - Configure for static export (if using static deployment)
- `README.md` - Document deployment options

### New Files
- `wrangler.toml` - Cloudflare Pages configuration (optional, can work without it)
- `netlify.toml` - Netlify configuration (optional alternative)
- `.claude/commands/deploy.md` - Claude command for guided deployment
- `scripts/deploy.sh` - Unified deploy script that handles multiple providers

## Implementation Plan

- [ ] **Phase 1: Cloudflare Pages Integration** - Set up primary deployment with wrangler CLI
  - Status:
  - Comments:

- [ ] **Phase 2: Deploy Scripts & NPM Commands** - Create unified `pnpm deploy` command
  - Status:
  - Comments:

- [ ] **Phase 3: Alternative Provider Support** - Add Netlify and Surge.sh as fallbacks
  - Status:
  - Comments:

- [ ] **Phase 4: Claude Command Integration** - Create `/deploy` command for guided deployment
  - Status:
  - Comments:

## Step by Step Tasks

### Phase 1: Cloudflare Pages Setup

- [ ] **Install wrangler as dev dependency** - `pnpm add -D wrangler`
  - Status:
  - Comments:

- [ ] **Configure Next.js for static export** - Add `output: 'export'` to next.config.mjs for static deployment option
  - Status:
  - Comments: Only needed if user wants static-only deployment. SSR requires Cloudflare Workers setup via @opennextjs/cloudflare

- [ ] **Create wrangler.toml configuration** - Basic Pages configuration
  - Status:
  - Comments:

- [ ] **Add deploy:cloudflare script to package.json** - `"deploy:cloudflare": "next build && wrangler pages deploy out --project-name=presentation"`
  - Status:
  - Comments:

### Phase 2: Unified Deploy Command

- [ ] **Create scripts/deploy.sh** - Shell script that detects available CLIs and deploys to the best option
  - Status:
  - Comments:

- [ ] **Add main deploy script to package.json** - `"deploy": "bash scripts/deploy.sh"`
  - Status:
  - Comments:

- [ ] **Handle first-time setup** - Script should handle wrangler login if not authenticated
  - Status:
  - Comments:

### Phase 3: Alternative Providers

- [ ] **Add Netlify support** - `pnpm add -D netlify-cli` and deploy script
  - Status:
  - Comments:

- [ ] **Add Surge.sh support** - `pnpm add -D surge` for ultra-simple static deployment
  - Status:
  - Comments:

- [ ] **Create netlify.toml configuration** - For Netlify deployments
  - Status:
  - Comments:

### Phase 4: Claude Command & Documentation

- [ ] **Create /deploy Claude command** - `.claude/commands/deploy.md` for guided deployment
  - Status:
  - Comments:

- [ ] **Update README.md** - Document all deployment options
  - Status:
  - Comments:

- [ ] **Run validation commands** - Verify all deployment scripts work
  - Status:
  - Comments:

## Testing Strategy

### Unit Tests
N/A - This is a deployment configuration feature, not application logic.

### Integration Tests
- Test `pnpm deploy:cloudflare` deploys successfully and returns URL
- Test `pnpm deploy:netlify` deploys successfully and returns URL
- Test `pnpm deploy:surge` deploys successfully and returns URL
- Test `pnpm deploy` auto-detects available provider and deploys

### Edge Cases
- First-time deployment (no existing project)
- Re-deployment to existing project
- Authentication not configured
- Build failures before deployment
- Large asset bundles exceeding platform limits (Cloudflare 3MB limit for workers)

## Acceptance Criteria
- [ ] Running `pnpm deploy` from project root deploys the presentation and outputs a public URL
- [ ] Deployment works without pre-creating projects on hosting platforms
- [ ] At least one deployment option is completely free with no bandwidth limits
- [ ] Deploy script handles authentication flow gracefully
- [ ] Documentation clearly explains all deployment options
- [ ] Deployment URL is accessible and presentation renders correctly

## Slide Design Requirements
N/A - This feature does not involve creating presentation slides.

## Validation Commands
- `pnpm run build` - Verify the build completes successfully
- `pnpm run lint` - Verify no linting errors
- `pnpm deploy:cloudflare --dry-run` - Test Cloudflare deployment configuration (if wrangler supports it)
- Manual test: Run `pnpm deploy` and verify returned URL loads the presentation

## Notes

### Authentication Setup (One-Time)
Users need to authenticate once with their chosen provider:
- **Cloudflare**: `wrangler login` (opens browser for OAuth)
- **Netlify**: `netlify login` (opens browser for OAuth)
- **Surge**: `surge login` (email/password in terminal)
- **Vercel**: `vercel login` (opens browser for OAuth)

### Static vs SSR Deployment
- **Static Export** (recommended for presentations): Faster, works everywhere, no server costs
- **SSR**: Required if using Next.js API routes or server components with dynamic data

For presentations, static export is recommended since slides are pre-rendered content.

### Cost Comparison (Monthly)

| Usage Level | Cloudflare | Netlify | Vercel | Surge |
|-------------|------------|---------|--------|-------|
| Light (<10GB) | $0 | $0 | $0 | $0 |
| Medium (50GB) | $0 | $0 | $0 | $0 |
| Heavy (200GB) | $0 | Suspended* | $20+ | $0 |
| Commercial | $0 | $0 | $20+ | $0 |

*Netlify suspends free sites that exceed 100GB/month

### Future Improvements
1. Add GitHub Actions workflow for automatic deployment on push
2. Create environment variable management for different deploy targets
3. Add custom domain configuration helpers
4. Implement deployment preview URLs for branches

### Sources
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [OpenNext Cloudflare Adapter](https://opennext.js.org/cloudflare)
- [Netlify CLI Docs](https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/)
- [Netlify Pricing](https://www.netlify.com/pricing/)
- [Surge.sh Getting Started](https://surge.sh/help/getting-started-with-surge)
- [Vercel CLI Deploy](https://vercel.com/docs/cli/deploying-from-cli)
- [Railway CLI Docs](https://docs.railway.com/guides/cli)
- [Fly.io Next.js Guide](https://fly.io/docs/js/frameworks/nextjs/)
