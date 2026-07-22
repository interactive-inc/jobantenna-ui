import { defineConfig } from "vite-plus"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  server: {
    port: 4791,
    strictPort: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({ spa: { enabled: true }, router: { generatedRouteTree: "route-tree.gen.ts" } }),
    viteReact()
  ],
  lint: {
    ignorePatterns: ["dist/**"],
  },
  fmt: {
    semi: false,
    singleQuote: false,
  },
  test: {
    include: ["src/**/*.test.{ts,tsx}"],
    environment: "jsdom",
  },
})

export default config
