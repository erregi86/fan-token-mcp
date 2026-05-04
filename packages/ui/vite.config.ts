import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import tailwindcss from "@tailwindcss/vite"
import { resolve } from "path"
import { readdirSync } from "fs"

const componentsDir = resolve(__dirname, "src/components")
const componentEntries = Object.fromEntries(
  readdirSync(componentsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => [`components/${d.name}/index`, resolve(componentsDir, d.name, "index.ts")])
)

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      outDir: "dist",
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        "lib/utils": resolve(__dirname, "src/lib/utils.ts"),
        ...componentEntries,
      },
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        /^react-dom\//,
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
    minify: false,
    sourcemap: true,
    outDir: "dist",
    emptyOutDir: true,
    copyPublicDir: false,
  },
})
