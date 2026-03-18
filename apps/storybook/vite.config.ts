import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { readdirSync } from "fs"

// Build aliases for all fan-tokens/* deep imports so Vite resolves to source
const componentsDir = resolve(__dirname, "../../packages/ui/src/components")
const componentAliases = Object.fromEntries(
  readdirSync(componentsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => [`fan-tokens/${d.name}`, resolve(componentsDir, d.name, "index.ts")])
)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Token CSS
      "fan-tokens/tokens": resolve(__dirname, "../../packages/ui/src/tokens/index.css"),
      // Utils
      "fan-tokens/utils": resolve(__dirname, "../../packages/ui/src/lib/utils.ts"),
      // Per-component deep imports
      ...componentAliases,
      // Barrel import (must be last — less specific)
      "fan-tokens": resolve(__dirname, "../../packages/ui/src/index.ts"),
    },
  },
})
