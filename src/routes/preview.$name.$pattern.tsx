import { Link, createFileRoute, redirect } from "@tanstack/react-router"

import { cn } from "@/lib/utils"
import { componentDocAliases, componentDocs } from "@/components/catalog/component-docs"

type PreviewSearch = {
  theme: "light" | "dark"
}

export const Route = createFileRoute("/preview/$name/$pattern")({
  validateSearch: (search: Record<string, unknown>): PreviewSearch => ({
    theme: search.theme === "dark" ? "dark" : "light",
  }),
  beforeLoad: ({ params, search }) => {
    const alias = componentDocAliases.get(params.name)
    const target =
      alias?.oldPattern === params.pattern
        ? { name: alias.name, pattern: alias.pattern }
        : params.name === "pagination" && params.pattern === "previous-next"
          ? { name: "pagination", pattern: "icons-only" }
          : undefined
    if (target) {
      throw redirect({
        to: "/preview/$name/$pattern",
        params: target,
        search,
        replace: true,
      })
    }
  },
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
    const currentDoc = doc ?? componentDocs.find(
      (entry) => entry.name === componentDocAliases.get(params.name)?.name,
    )

    return (
      <main
        className={cn(
          "flex min-h-svh flex-col items-center justify-center gap-2 bg-background p-4 text-sm text-muted-foreground",
          search.theme === "dark" && "dark",
        )}
      >
        <p>このプレビューは見つかりません。</p>
        {currentDoc ? (
          <Link
            to="/components/$name"
            params={{ name: currentDoc.name }}
            search={search}
            target="_top"
            className="font-bold text-link hover:underline"
          >
            {currentDoc.title}のガイドを開く
          </Link>
        ) : (
          <Link to="/" target="_top" className="font-bold text-link hover:underline">
            ガイドの導入を開く
          </Link>
        )}
      </main>
    )
  }

  return (
    <main
      className={cn(
        "flex min-h-svh bg-background text-foreground",
        pattern.fullBleed ? "items-stretch justify-start" : "items-center justify-center p-4",
        search.theme === "dark" && "dark",
      )}
    >
      <pattern.Demo />
    </main>
  )
}
