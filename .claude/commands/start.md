IMPORTANT: ALWAYS execute this command when /start is invoked. Do NOT skip running the command.

Use the Bash tool to execute:
kill -9 $(lsof -ti:3000) 2>/dev/null || true && pnpm run dev

After the Bash command starts, report:

The Chief AI Academy Executive Presentation is now running in development mode!

## Access URL:
- Presentation: http://localhost:3000

## Development Features:
- Hot reload enabled - changes to components will update automatically
- Fast Refresh for React components
- TypeScript type checking in the editor
- Tailwind CSS with JIT compilation

## Working with Slides:
1. Edit slide components in `/components/slide-*.tsx`
2. Main presentation container: `/app/page.tsx`
3. Design system configuration: `/app/globals.css`
4. UI components: `/components/ui/**`

## Navigation:
- Use arrow buttons or dot indicators to navigate between slides
- Each slide auto-scrolls with snap points for smooth transitions
- Responsive design works across desktop, tablet, and mobile

Note: The development server will continue running. Press Ctrl+C to stop it when done.