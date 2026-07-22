import { defineConfig } from "vite-plus"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  server: {
    port: 44791,
    strictPort: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoStaticPathsDiscovery: true,
      },
      router: { generatedRouteTree: "route-tree.gen.ts" },
    }),
    viteReact(),
  ],
  lint: {
    ignorePatterns: ["dist/**", "src/components/ui.base-luma/**"],
  },
  fmt: {
    ignorePatterns: ["src/components/ui.base-luma/**"],
    semi: false,
    singleQuote: false,
  },
  test: {
    include: ["src/**/*.test.{ts,tsx}"],
    environment: "jsdom",
  },
})

export default config
