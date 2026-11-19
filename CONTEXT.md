# Context

Personal website of Anderson Felix — a one-page resume (hero, about,
expertise and skills, featured projects, career timeline, contact) aimed at
recruiters and tech leads.

- Content: YAML files in `src/content/` (profile, expertise, skills,
  projects, experience), loaded as Astro content collections
  (`src/content.config.ts`); components only render them
- Themes: light, dark and neobrutalism in `src/assets/themes.css`; the dark
  theme is the owner's own design, so propose changes to it before making
  them
- CSS variables, three kinds:
  - Global tokens: every theme defines all of them (base `:root` holds the
    defaults, themes override); components read them without fallbacks.
    Colors use Material Design role names (`--primary`, `--on-surface`,
    `--outline`, `--shadow`); the rest is category first
    (`--corner-small`, `--shadow-offset-sm-hover`, `--font-heading`)
  - Component APIs `--{component}-{part?}-{role}-{state?}`
    (`--tag-outline-hover`, `--hero-photo-outline-width`): same MD roles
    (`outline` = border color, `container` = background, `shadow` = shadow
    color, `color` = text/accent), state always last. For looks that differ
    per component; the default is a `var()` fallback in the component,
    unless every theme sets them (`--card-gradient-*`, `--hero-photo-*`)
  - Private `--_*` (`--_bg`): a component's internal state, e.g. values
    that change on hover; never set from outside, and a component never
    sets its own API

- URL: https://www.andersonfelix.com.br (custom domain via `public/CNAME`)
- Repo: andersonfelix/andersonfelix.github.io (GitHub user page, no base path)
- Audience: Portuguese-speaking; content in pt-BR
- Stack: Astro (minimal, strict TS), pnpm, Node 24
- Hosting: GitHub Pages via GitHub Actions, deployed from `main`
