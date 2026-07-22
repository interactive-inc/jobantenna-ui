import { createFileRoute } from "@tanstack/react-router"

import { RulePageHeader } from "@/components/catalog/rule-page-header"

export const Route = createFileRoute("/_catalog/")({
  component: HomePage,
})

/**
 * ホーム。shadcn レジストリとしての導入案内
 */
function HomePage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16 md:px-10">
      <RulePageHeader
        title="ジョブアンテナ UI"
        lead="転職・求人サービスのための、製品から独立した規範デザインシステムです。トークンと原則をここで定め、コンポーネントは shadcn レジストリとして配布します。"
      />

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">導入する</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          このサイトは shadcn レジストリに対応しています。外部プロジェクトから shadcn CLI
          でコンポーネントの JSON を直接指定すると、ソースがそのプロジェクトに取り込まれます。
        </p>
        <pre className="overflow-x-auto rounded-2xl bg-muted p-4 text-xs leading-relaxed text-foreground">
          <code>bunx shadcn@latest add https://ui.jobantenna.jp/r/styles/default/button.json</code>
        </pre>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          プロジェクトの <code className="text-sm">components.json</code> にレジストリを登録すると、
          名前空間付きの短縮形で追加できます。
        </p>
        <pre className="overflow-x-auto rounded-2xl bg-muted p-4 text-xs leading-relaxed text-foreground">
          <code>{`{
  "registries": {
    "@jobantenna": "https://ui.jobantenna.jp/r/styles/default/{name}.json"
  }
}`}</code>
        </pre>
        <pre className="overflow-x-auto rounded-2xl bg-muted p-4 text-xs leading-relaxed text-foreground">
          <code>bunx shadcn@latest add @jobantenna/button</code>
        </pre>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">コンポーネント一覧</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          配布中のコンポーネントの一覧は <code className="text-sm">/r/index.json</code>{" "}
          で取得できます。個々のコンポーネントは{" "}
          <code className="text-sm">/r/styles/default/{"{name}"}.json</code> で、ui.shadcn.com
          と同じ URL 構成になっています。
        </p>
        <pre className="overflow-x-auto rounded-2xl bg-muted p-4 text-xs leading-relaxed text-foreground">
          <code>https://ui.jobantenna.jp/r/index.json</code>
        </pre>
      </section>
    </div>
  )
}
