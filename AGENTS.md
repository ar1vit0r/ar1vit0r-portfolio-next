<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio rebuild — short form

Full detail in `CLAUDE.md`; key points:

- Next.js App Router + TypeScript strict + Tailwind v4 (`@theme` in
  `app/globals.css`) + `next-intl` (no routing, client-side locale toggle
  persisted to `localStorage`).
- Static export (`output: 'export'`) for GitHub Pages — no server-side
  features.
- Every component ports a specific file from
  `/home/ar1v1t0r/github/ar1vit0r.github.io` — read the source file before
  changing behavior.
- No test framework — verify with `npm run build` + manual browser check.
- Three.js boot/particle/portal scene is not implemented yet (separate
  later plan, see `plan/`).

Keep this section in sync with `CLAUDE.md`.
