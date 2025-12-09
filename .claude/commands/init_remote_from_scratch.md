# Deploy Presentation to Remote

Deploy your presentation to Cloudflare Pages and get a public URL.

## What This Does

1. **Authenticate** with Cloudflare (if not already logged in)
2. **Build** the presentation as a static site
3. **Deploy** to Cloudflare Pages
4. **Return** the public URL

## Instructions

### Step 1: Check Prerequisites
```bash
# Verify wrangler is installed
wrangler --version

# Check authentication status
wrangler whoami
```

If not authenticated, run `wrangler login` first.

### Step 2: Deploy
```bash
# Deploy with auto-detection
pnpm deploy

# Or deploy with custom project name
pnpm deploy --name=<project-name>
```

### Step 3: Get URL

After deployment completes, the public URL will be displayed. Report this URL to the user.

## Troubleshooting

### "Not authenticated" error
```bash
wrangler login
```

### Build errors
Make sure the presentation builds locally first:
```bash
pnpm build
```

## Report

After running, confirm:
- [ ] Authentication successful
- [ ] Build completed
- [ ] Deployment successful
- [ ] Public URL provided to user
