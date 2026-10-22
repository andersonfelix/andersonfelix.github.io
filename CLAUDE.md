# CLAUDE.md

Project context: see [CONTEXT.md](CONTEXT.md).

## Git workflow

- Before starting any work: `git checkout master && git pull`.
- Always work in a worktree under `.worktrees/<branch>` on a new branch
  from master, prefixed `feat/`, `fix/`, `refactor/`, `docs/` or `chore/`.
- Never commit, push, open PRs or merge. Leave changes in the worktree
  for the owner to review and commit.

## Commands

- `pnpm install` / `pnpm dev` / `pnpm build` / `pnpm preview`
- `pnpm lint` (ESLint + Stylelint + Prettier check) / `pnpm format`

## Conventions

- Site content in Portuguese (pt-BR); code, comments and docs in English.
- Deploy: push to master → GitHub Actions (`.github/workflows/deploy.yml`).
