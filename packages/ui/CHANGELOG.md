# Changelog

All notable changes to this project will be documented in this file.

## 1.1.2 — 2026-05-04

- fix: move 151 component-level design token variables from :root to @theme block in components.css
- Tailwind v4 consumers can now generate arbitrary utility classes that reference these variables (e.g. h-[var(--button-height)], rounded-[var(--card-radius)])
- Discovered while testing v1.1.1 in fan-token-dashboard — components rendered without proper sizing, padding, and border-radius because Tailwind didn't materialize variable-based classes
- colors.css :root and .dark blocks preserved (semantic colors continue to work via @theme inline mapping)

## 1.1.1 — 2026-05-04

- docs: split Tailwind install into its own step
- docs: add "Cannot find module '@tailwindcss/vite'" to common pitfalls

## 1.1.0 — 2026-04-24

- feat: implement 4 Figma designs for AppHeader (Mobile, Desktop V2, Data Sticky, MenuItems)
- docs: enhance AppHeader documentation and templates
- fix: document-level scrollbar by restricting html and body to viewport height
- refactor: tokens-doc to use ComponentPage and DemoSection layout pattern
