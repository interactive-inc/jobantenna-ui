import { createFileRoute } from "@tanstack/react-router"

import { RulePageHeader } from "@/components/catalog/rule-page-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
        <h2 className="text-xl font-semibold tracking-tight">AI エージェントから使う（MCP）</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          MCP を設定すると、Claude Code や Codex がこのレジストリを直接読めるようになり、
          「ボタンを追加して」と頼むだけでコンポーネントの検索から追加までを任せられます。
          手順は3ステップです。
        </p>

        <h3 className="text-lg font-semibold">1. レジストリを登録する</h3>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          プロジェクトの <code className="text-sm">components.json</code> に @jobantenna
          レジストリを追加します。「導入する」で登録済みなら次へ進んでください。
        </p>
        <pre className="overflow-x-auto rounded-2xl bg-muted p-4 text-xs leading-relaxed text-foreground">
          <code>{`{
  "registries": {
    "@jobantenna": "https://ui.jobantenna.jp/r/styles/default/{name}.json"
  }
}`}</code>
        </pre>

        <h3 className="text-lg font-semibold">2. MCP サーバーを登録する</h3>
        <Tabs defaultValue="claude-code">
          <TabsList>
            <TabsTrigger value="claude-code">Claude Code</TabsTrigger>
            <TabsTrigger value="codex">Codex</TabsTrigger>
          </TabsList>
          <TabsContent value="claude-code" className="space-y-5">
            <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
              コマンド1つで完了します。実行すると <code className="text-sm">.mcp.json</code>{" "}
              が生成されるので、Claude Code を再起動してください。
            </p>
            <pre className="overflow-x-auto rounded-2xl bg-muted p-4 text-xs leading-relaxed text-foreground">
              <code>bunx shadcn@latest mcp init --client claude</code>
            </pre>
          </TabsContent>
          <TabsContent value="codex" className="space-y-5">
            <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
              <code className="text-sm">~/.codex/config.toml</code> に次の3行を追記して、Codex
              を再起動してください。
            </p>
            <pre className="overflow-x-auto rounded-2xl bg-muted p-4 text-xs leading-relaxed text-foreground">
              <code>{`[mcp_servers.shadcn]
command = "npx"
args = ["shadcn@latest", "mcp"]`}</code>
            </pre>
          </TabsContent>
        </Tabs>

        <h3 className="text-lg font-semibold">3. あとは話しかけるだけ</h3>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          設定はこれで終わりです。依頼に @jobantenna
          を含めると、エージェントがレジストリを検索してコンポーネントを取り込みます。
          デザイン原則（DESIGN.md）も <code className="text-sm">@jobantenna/design</code>{" "}
          で参照できます。
        </p>
        <pre className="overflow-x-auto rounded-2xl bg-muted p-4 text-xs leading-relaxed text-foreground">
          <code>{`@jobantenna にどんなコンポーネントがあるか教えて
@jobantenna/button をこのプロジェクトに追加して
@jobantenna/design のデザイン原則に従って実装して`}</code>
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
