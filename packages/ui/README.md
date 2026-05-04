# fan-tokens

React component library with design tokens. 45 accessible, themeable components built on Radix UI and Tailwind CSS 4.

## Installation & Setup

### 1. Install the package
```bash
npm install fan-tokens
# or
pnpm add fan-tokens
```

### 2. Add @tailwindcss/vite to vite.config.js (Tailwind v4)
**IMPORTANT: Add it BEFORE the react plugin**

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'  // ← Add this
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),    // ← Must come first
    react(),
  ],
})
```

### 3. Update your main CSS file
In your app's entry CSS file (e.g., `src/index.css` or `src/globals.css`):

```css
@import "tailwindcss";
@source "../node_modules/fan-tokens/dist/**/*.{js,jsx,ts,tsx}";
@import "fan-tokens/tokens";
```

The `@source` directive tells Tailwind where to find your fan-tokens classes for content detection.

### 4. Delete old config files
If you have them from Tailwind v3, **remove these files**:
- `postcss.config.js` — No longer needed with Tailwind v4
- `tailwind.config.js` — Tailwind v4 uses native CSS configuration (see step 3)

### That's it!
You can now import components:

```tsx
import { Button, Card, Input } from "fan-tokens"
import { Badge } from "fan-tokens/badge"
```

## Common Pitfalls

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

## Requirements
- React 18+ or React 19+
- Tailwind CSS 4.x
- Vite (recommended) or any build tool that supports the `@tailwindcss/vite` plugin

See the full documentation at the [Fan Tokens docs site](https://github.com/your-org/fan-tokens).
