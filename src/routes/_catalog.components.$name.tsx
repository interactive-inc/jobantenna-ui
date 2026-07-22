import type { ReactNode } from "react"
import { Link, createFileRoute } from "@tanstack/react-router"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { componentDocs } from "@/components/catalog/component-docs"
import {
  ExternalLinkIcon,
  MonitorIcon,
  MoonIcon,
  SmartphoneIcon,
  SunIcon,
  TabletIcon,
} from "lucide-react"

type ComponentSearch = {
  theme?: "light" | "dark"
  viewport?: "desktop" | "tablet" | "mobile"
}

const viewportWidths: Record<string, string> = {
  desktop: "100%",
  tablet: "768px",
  mobile: "375px",
}

export const Route = createFileRoute("/_catalog/components/$name")({
  validateSearch: (search: Record<string, unknown>): ComponentSearch => ({
    theme: search.theme === "dark" ? "dark" : undefined,
    viewport:
      search.viewport === "tablet" || search.viewport === "mobile" ? search.viewport : undefined,
  }),
  component: ComponentPage,
})

type ToggleLinkProps = {
  name: string
  search: ComponentSearch
  label: string
  isActive: boolean
  children: ReactNode
}

/**
 * テーマ・ビューポート切り替えのアイコンボタン
 */
function ToggleLink(props: ToggleLinkProps) {
  return (
    <Link
      to="/components/$name"
      params={{ name: props.name }}
      search={props.search}
      title={props.label}
      className={cn(
        buttonVariants({
          variant: props.isActive ? "secondary" : "ghost",
          size: "icon-sm",
        }),
      )}
    >
      {props.children}
      <span className="sr-only">{props.label}</span>
    </Link>
  )
}

/**
 * コンポーネント詳細。目的の説明と、パターンごとの解説付き iframe プレビューを表示する
 */
function ComponentPage() {
  const params = Route.useParams()
  const search = Route.useSearch()
  const theme = search.theme ?? "light"
  const viewport = search.viewport ?? "desktop"
  const doc = componentDocs.find((entry) => entry.name === params.name)

  if (!doc) {
    return (
      <div className="flex min-h-svh items-center justify-center p-4 text-sm text-muted-foreground">
        「{params.name}」のドキュメントが見つかりません
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16 md:px-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="md:hidden" />
          <h1 className="text-3xl font-bold tracking-tight">{doc.title}</h1>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{doc.purpose}</p>
      </div>

      {doc.patterns.map((pattern) => (
        <section key={pattern.id} className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">{pattern.title}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{pattern.description}</p>
          <div className="overflow-hidden rounded-2xl border bg-muted/50">
            <div className="flex flex-wrap items-center justify-end gap-4 border-b px-2 py-1">
              <div className="flex items-center gap-0.5">
                <ToggleLink
                  name={doc.name}
                  search={{ ...search, theme: "light" }}
                  label="ライトモード"
                  isActive={theme === "light"}
                >
                  <SunIcon />
                </ToggleLink>
                <ToggleLink
                  name={doc.name}
                  search={{ ...search, theme: "dark" }}
                  label="ダークモード"
                  isActive={theme === "dark"}
                >
                  <MoonIcon />
                </ToggleLink>
              </div>
              <div className="flex items-center gap-0.5">
                <ToggleLink
                  name={doc.name}
                  search={{ ...search, viewport: "desktop" }}
                  label="PC 幅で表示"
                  isActive={viewport === "desktop"}
                >
                  <MonitorIcon />
                </ToggleLink>
                <ToggleLink
                  name={doc.name}
                  search={{ ...search, viewport: "tablet" }}
                  label="タブレット幅で表示"
                  isActive={viewport === "tablet"}
                >
                  <TabletIcon />
                </ToggleLink>
                <ToggleLink
                  name={doc.name}
                  search={{ ...search, viewport: "mobile" }}
                  label="スマホ幅で表示"
                  isActive={viewport === "mobile"}
                >
                  <SmartphoneIcon />
                </ToggleLink>
              </div>
              <div className="flex items-center gap-0.5">
                <Link
                  to="/preview/$name/$pattern"
                  params={{ name: doc.name, pattern: pattern.id }}
                  search={{ theme }}
                  target="_blank"
                  title="新しいタブで開く"
                  className={cn(buttonVariants({ variant: "ghost", size: "icon-sm" }))}
                >
                  <ExternalLinkIcon />
                  <span className="sr-only">新しいタブで開く</span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center p-4">
              <iframe
                key={`${doc.name}-${pattern.id}-${theme}`}
                title={`${doc.title} — ${pattern.title}`}
                src={`/preview/${doc.name}/${pattern.id}?theme=${theme}`}
                className="rounded-xl border bg-background shadow-sm"
                style={{
                  width: viewportWidths[viewport],
                  height: pattern.previewHeight ?? 320,
                }}
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
