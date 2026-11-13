# Context

Personal website of Anderson Felix — a one-page resume (hero, about,
expertise and skills, featured projects, career timeline, contact) aimed at
recruiters and tech leads.

- Content: YAML files in `src/content/` (profile, expertise, skills,
  projects, experience), loaded as Astro content collections
  (`src/content.config.ts`); components only render them
- Themes: light and dark in `src/assets/themes.css`; the dark theme is the
  owner's own design, so propose changes to it before making them

- URL: https://www.andersonfelix.com.br (custom domain via `public/CNAME`)
- Repo: andersonfelix/andersonfelix.github.io (GitHub user page, no base path)
- Audience: Portuguese-speaking; content in pt-BR
- Stack: Astro (minimal, strict TS), pnpm, Node 24
- Hosting: GitHub Pages via GitHub Actions, deployed from `main`
