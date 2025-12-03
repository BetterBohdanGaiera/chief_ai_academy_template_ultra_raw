# Git Commit & Push

Commit all changes and push to GitHub using the correct SSH key configuration.

## Instructions

- Generate a concise commit message in the format: `<type>: <description>`
- The `<description>` should be:
  - Present tense (e.g., "add", "fix", "update", not "added", "fixed", "updated")
  - 50-72 characters or less
  - Descriptive of the actual changes made
  - No period at the end
- Common types: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`
- Examples:
  - `feat: add user authentication module`
  - `fix: resolve login validation error`
  - `chore: update dependencies to latest versions`

## Run

1. Run `git status` and `git diff HEAD` to understand what changes have been made
2. Run `git add -A` to stage all changes
3. Run `git commit -m "<generated_commit_message>"` to create the commit
4. Ensure the remote uses the correct SSH key:
   ```bash
   git remote set-url origin git@github.com-bohdangaiera:BetterBohdanGaiera/chief_ai_academy_template_ultra_raw.git
   ```
5. Run `git push` to push changes to GitHub

## Report

Return the commit message and confirm the push was successful