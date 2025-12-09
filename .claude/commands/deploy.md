# Deploy Presentation

Deploy your presentation to the web with a single command. The deployment system supports multiple providers.

## Quick Deploy

Run the deploy command to automatically build and deploy your presentation:

```bash
pnpm deploy
```

This will:
1. Detect available deployment CLI tools
2. Build the presentation as a static site
3. Deploy to the best available provider
4. Return a public URL

## Deployment Options

```bash
# Deploy with auto-detection (default)
pnpm deploy

# Deploy with custom project name
pnpm deploy --name=my-presentation
```

## Deployment Providers

### Cloudflare Pages (Recommended)
- **Free tier**: Unlimited bandwidth, unlimited deploys
- **Commercial use**: Allowed
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
3. Run `pnpm deploy` - done!

### Netlify
1. Create a free Netlify account at https://app.netlify.com/signup
2. Install CLI: `pnpm add -D netlify-cli`
3. Run `netlify login` to authenticate
4. Run `pnpm deploy netlify`

### Surge.sh
1. Install CLI: `pnpm add -D surge`
2. Run `surge login` (creates account if needed)
3. Run `pnpm deploy surge`

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

Cloudflare Pages is recommended for most use cases due to unlimited free bandwidth and commercial use.
