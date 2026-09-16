# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## What this is

A Next.js/TypeScript rebuild of `ar1vit0r.github.io` (the vanilla HTML/CSS/JS
sci-fi portfolio site, still live at that repo). Built to close a React/TS
gap blocking a specific job application, and to eventually replace the live
site once the R3F boot/particle/portal scene (tracked in `plan/`, not yet
built) is ported over.

- App Router, TypeScript strict mode, static export (`output: 'export'`) —
  same free GitHub Pages hosting model as the source site, no server.
- Tailwind CSS v4 (CSS-based `@theme` in `app/globals.css`, no
  `tailwind.config.ts`) — theme tokens are copied from the source site's
  `style.css` `:root` block (colors, fonts, type scale), not reinvented.
- `next-intl` for EN/PT copy, used *without* routing (no `/en`/`/pt` URL
  prefix, no middleware — static export doesn't support middleware). Locale
  is client-side state persisted to `localStorage`, matching the source
  site's own toggle-button UX exactly.
- No test framework, matching the source repo's own convention. Verify with
  `npm run build` (typecheck + lint + export) and a manual browser pass via
  `npm run dev`.

## Porting convention

Every component in this repo ports a specific file from the source repo
(`/home/ar1v1t0r/github/ar1vit0r.github.io`) — content, copy, and behavior
copied 1:1, not redesigned. If you're unsure what a component should do,
read the corresponding source file before guessing.

## What's NOT here yet

The Three.js boot/particle/portal scene (`js/scene.js` + `js/boot.js` in the
source repo) is a separate, later plan (see `plan/`) — the hero currently
renders directly, no cinematic boot gate.

## Next.js's own agent notes

`AGENTS.md` in this repo has a block between `<!-- BEGIN:nextjs-agent-rules -->`
and `<!-- END:nextjs-agent-rules -->` that Next.js's tooling writes and
re-adds automatically (see `node_modules/next/dist/server/lib/generate-agent-files.js`).
Don't remove it; commit it as-is if it changes.
