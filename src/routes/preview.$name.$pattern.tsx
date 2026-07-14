import { createFileRoute } from "@tanstack/react-router"

import { cn } from "@/lib/utils"
import { componentDocs } from "@/components/catalog/component-docs"

type PreviewSearch = {
  theme: "light" | "dark"
}

export const Route = createFileRoute("/preview/$name/$pattern")({
  validateSearch: (search: Record<string, unknown>): PreviewSearch => ({
    theme: search.theme === "dark" ? "dark" : "light",
  }),
  component: PreviewPage,
})

/**
 * カタログの iframe に埋め込むパターン単体プレビュー
 */
function PreviewPage() {
  const params = Route.useParams()
  const search = Route.useSearch()
  const doc = componentDocs.find((entry) => entry.name === params.name)
  const pattern = doc?.patterns.find((entry) => entry.id === params.pattern)

  if (!pattern) {
    return (
      <main className="flex min-h-svh items-center justify-center p-4 text-sm text-muted-foreground">
        「{params.name}/{params.pattern}」のプレビューが見つかりません
      </main>
    )
  }

  return (
    <main
      className={cn(
        "flex min-h-svh items-center justify-center bg-background p-4 text-foreground",
        search.theme === "dark" && "dark",
      )}
    >
      <pattern.Demo />
    </main>
  )
}
