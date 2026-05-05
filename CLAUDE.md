@AGENTS.md

# AURA Project — Claude Instructions

## Stack (don't re-derive)
- Next.js App Router, React 19, Tailwind CSS v4 (`@import "tailwindcss"` — no v3 directives)
- All pages live in `app/`, shared layout in `app/layout.tsx` (Header + Footer already wired)
- Components in `components/` — chapter content in `components/Chapter{1-5}/Contents-{1-5}.tsx`
- Chapter routes: `app/chapter-{1-5}/page.tsx`

## Colors (use exactly)
- Pink/left accent: `#e01870` — bg `#fff0f5`, border `#e0187030`
- Blue/right accent: `#2255cc` / `#4488ff` — bg `#f0f5ff`, border `#2255cc30`
- Dark nav/footer bg: `#0d0d2e`

## Rules — follow without asking
- Server components by default; add `"use client"` only for hooks/events
- No JS `onMouseEnter`/`onMouseLeave` in server components — use CSS classes in `globals.css`
- Add `suppressHydrationWarning` to `<input>` and `<textarea>` elements
- Section headings use numbered format: `<span style={{color}}>1.1</span> Title` (alternating pink/blue)
- Sub-sections indent with `<div className="pl-4 border-l-2">` using accent color border
- Images: use `next/image` with `fill` prop; raw `<img>` only when inside non-Next image contexts
- No comments unless the WHY is non-obvious; no docstrings

## Do not
- Re-read files already summarized in this CLAUDE.md
- Ask clarifying questions for small UI tweaks — just do it
- Add features beyond what is requested
- Explain what code does; only explain surprising choices
