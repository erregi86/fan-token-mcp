# fan-tokens

React component library with design tokens. 45 accessible, themeable components built on Radix UI and Tailwind CSS 4.

## Installation & Setup

### 1. Install fan-tokens
```bash
npm install fan-tokens
# or
pnpm add fan-tokens
```

### 2. Install Tailwind CSS v4 and the Vite plugin
fan-tokens requires Tailwind v4 in your project. Install both packages as devDependencies:
```bash
npm install -D tailwindcss @tailwindcss/vite
# or
pnpm add -D tailwindcss @tailwindcss/vite
```

### 3. Add the Tailwind plugin to your Vite config
In `vite.config.ts` (or `.js`), add `@tailwindcss/vite` BEFORE the `react()` plugin:
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
})
```

### 4. Update your main CSS

Replace the entire content of your main CSS file (e.g. `src/index.css`) with:

```css
@import "tailwindcss";
@source "../node_modules/fan-tokens/dist/**/*.{js,jsx,ts,tsx}";
@import "fan-tokens/tokens";

body {
  font-family: var(--font-sans);
  color: var(--color-foreground);
  background: var(--color-background);
  margin: 0;
  min-height: 100vh;
}
```

> **Important:** _replace_ the file content, don't just append. Vite's default template generates a `:root { ... }` block with custom font/color variables that will conflict with fan-tokens.
>
> Also: if your project has `src/App.css` from the Vite template, **delete it** and remove its import from `src/main.tsx` — it contains demo styles that pollute the design system.

> **Note:** If your project has a `postcss.config.js` from a previous setup, delete it — it's not needed with `@tailwindcss/vite` and will conflict with Tailwind v4.

### That's it!
You can now import components:

```tsx
import { Button, Card, Input } from "fan-tokens"
import { Badge } from "fan-tokens/badge"
```

## Common Pitfalls

### ❌ `Cannot find module '@tailwindcss/vite'` when starting dev server
→ You skipped step 2. Run `npm install -D tailwindcss @tailwindcss/vite`.

### ❌ PostCSS error: "@import tailwindcss not found"
**Problem:** You still have an old `postcss.config.js` that tries to use PostCSS plugins.

**Solution:** Delete `postcss.config.js`. Tailwind v4 doesn't use PostCSS anymore — the `@tailwindcss/vite` plugin handles everything.

### ❌ Styles don't load / components are unstyled
**Problem:** Missing or incorrect `@source` directive in your CSS.

**Solution:** Make sure your CSS file has:
```css
@import "tailwindcss";
@source "../node_modules/fan-tokens/dist/**/*.{js,jsx,ts,tsx}";
@import "fan-tokens/tokens";
```

The path must point to the compiled files in `node_modules/fan-tokens/dist/`, not the source files.

### ❌ @tailwindcss/vite is running after react plugin
**Problem:** Tailwind v4 needs to run first in the Vite plugins array.

**Solution:** Move `tailwindcss()` before `react()`:
```js
plugins: [tailwindcss(), react()],  // ✅ Correct
plugins: [react(), tailwindcss()],  // ❌ Wrong
```

### ❌ Components render but the page looks unstyled (wrong font, light grey text)

**Problem:** Setup is complete but the page uses the browser's default font and text appears light grey instead of near-black. fan-tokens components themselves look correct, but everything around them feels "off".

**Cause:** Either the `<body>` doesn't apply the design system's typography and colors, or your `src/index.css` still contains a `:root { ... }` block from the Vite template that overrides fan-tokens.

**Solution:** See step 4. Make sure `src/index.css` is _exactly_ the 3 imports + body block, with no leftover `:root` or font-family declarations.

## Requirements
- React 18+ or React 19+
- Tailwind CSS 4.x
- Vite (recommended) or any build tool that supports the `@tailwindcss/vite` plugin

See the full documentation at the [Fan Tokens docs site](https://github.com/your-org/fan-tokens).
