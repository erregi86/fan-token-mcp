# CLAUDE.md — Fan Tokens Component Library

## Project Structure

Monorepo managed with pnpm workspaces.

- `packages/ui/` — the component library, published as `fan-tokens` on npm
- `apps/docs/` — documentation site with live demos and showcases (not published)

## Key Commands

```
pnpm install        # install all dependencies
pnpm dev            # start docs dev server (port 5173)
pnpm build          # build the library to packages/ui/dist/
pnpm build:docs     # build the docs site
pnpm test           # run tests in watch mode
pnpm test:ci        # run tests once (CI)
pnpm lint           # lint all packages
pnpm typecheck      # check types
```

## Architecture

- Components live in `packages/ui/src/components/<name>/`
- Each component folder has `<name>.tsx` (implementation) and `index.ts` (re-exports)
- Design tokens are CSS custom properties in `packages/ui/src/tokens/`
- The `cn()` utility in `packages/ui/src/lib/utils.ts` merges Tailwind classes
- All components use CSS variables from tokens, never hard-coded color/spacing values
- Barrel export in `packages/ui/src/index.ts`

## Conventions

- Components use `class-variance-authority` (cva) for variants
- All components forward refs and spread remaining props
- Tailwind CSS 4 with `@tailwindcss/postcss`
- Token CSS files use `@theme` directives (Tailwind v4 syntax)
- TypeScript strict mode, no `any` types
- ESM-first (`"type": "module"`)
- Library source uses relative imports (no `@/` alias)
- Docs app imports from `fan-tokens` and `fan-tokens/<component>`

## When Adding a New Component

1. Create `packages/ui/src/components/<name>/<name>.tsx`
2. Create `packages/ui/src/components/<name>/index.ts`
3. Add exports to `packages/ui/src/index.ts`
4. Add `"./<name>"` entry to `exports` map in `packages/ui/package.json`
5. Write tests in `packages/ui/__tests__/`
6. Create doc page in `apps/docs/src/docs/components/<name>-doc.tsx`
7. Register in `apps/docs/src/docs/index.tsx`

## Do Not

- Use `@/` path aliases in library source code — use relative imports
- Add icon libraries (lucide-react etc.) as library dependencies
- Hard-code colors or spacing — use token CSS variables
- Skip the `index.ts` re-export barrel in component folders
- Commit `dist/` or `node_modules/`
