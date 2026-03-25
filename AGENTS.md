# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 14 app with most routes under `app/` and a small amount of legacy code in `pages/` for older API and OG routes. Reusable UI lives in `components/`, shared helpers and hooks live in `lib/` and `utils/`, and Prisma schema/migrations are in `prisma/`. Static files belong in `public/`; global and module styles are in `styles/` plus route-level CSS such as `app/apple/index.css`.

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start the local Next.js dev server.
- `npm run build`: create a production build; use this before opening a PR.
- `npm run start`: run the production build locally.
- `npm run lint`: run Next.js ESLint checks.
- `npm run format:write`: format `css`, `js`, `jsx`, `json`, `ts`, and `tsx` files with Prettier.

## Coding Style & Naming Conventions
Use TypeScript-first React components where possible. Prettier is the source of truth: 2-space indentation, semicolons, trailing commas, `printWidth` 80, and Tailwind class sorting via `prettier-plugin-tailwindcss`. Use `PascalCase` for component files (`VideoCarousel.tsx`), `camelCase` for hooks and utilities (`use-scroll.ts`, `lib/prisma.ts`), and lowercase route folders in `app/`.

## Testing Guidelines
There is no dedicated automated test suite configured yet. Until one is added, treat `npm run lint` and `npm run build` as the minimum verification step for every change. For UI updates, manually verify the affected route in `npm run dev` and include notes on what you tested in the PR.

## Commit & Pull Request Guidelines
Recent commits use short, imperative subjects such as `add unit21` and `more style tweaks`. Keep commit messages concise, lowercase is acceptable, and focus each commit on one change. Pull requests should include a clear summary, linked issue or task when available, screenshots or recordings for visual changes, and any required env or migration notes.

## Security & Configuration Tips
Do not commit secrets. Features in `app/api/` and Prisma-backed flows require environment variables such as `DATABASE_URL`, `SHADOW_DATABASE_URL`, `OPEN_AI_KEY`, and Stripe secrets. If you change the schema, commit the generated migration in `prisma/migrations/`.
