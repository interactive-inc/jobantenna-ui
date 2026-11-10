import { Link, createFileRoute } from "@tanstack/react-router"

import { RulePageHeader } from "@/components/catalog/rule-page-header"

export const Route = createFileRoute("/_catalog/")({
  component: InstallationPage,
})

const codeBlock =
  "rounded-(--radius-container) bg-muted p-4 text-sm wrap-anywhere whitespace-pre-wrap"

function InstallationPage() {
  return (
    <div className="mx-auto grid w-full max-w-4xl gap-10 px-6 py-12 md:px-10">
      <RulePageHeader
        title="導入"
        lead="ジョブアンテナの画面をつくるための設計ルールと、共通コンポーネントの導入手順です。"
      />

      <section className="grid gap-3" aria-labelledby="guide-navigation">
        <h2 id="guide-navigation" className="text-xl font-semibold">
          ガイドの読み方
        </h2>
        <p className="text-muted-foreground">
          画面を設計するときは、先に基本原則を確認します。部品の見本は、目次から用途別に探せます。
        </p>
        <Link to="/rules/principles" className="w-fit font-bold text-link hover:underline">
          基本原則を見る
        </Link>
      </section>

      <section className="grid min-w-0 gap-4 border-t pt-6" aria-labelledby="add-component">
        <h2 id="add-component" className="text-xl font-semibold">
          コンポーネントを追加する
        </h2>
        <p className="text-muted-foreground">
          プロジェクトのルートで、追加するコンポーネントのURLを指定します。
        </p>
        <pre className={codeBlock}>
          <code>bunx shadcn@latest add https://ui.jobantenna.jp/r/styles/default/button.json</code>
        </pre>
        <a href="/r/index.json" className="w-fit font-semibold underline underline-offset-4">
          配布中のコンポーネント一覧（JSON）
        </a>
      </section>

      <section className="grid min-w-0 gap-4 border-t pt-6" aria-labelledby="register-registry">
        <h2 id="register-registry" className="text-xl font-semibold">
          レジストリを登録する
        </h2>
        <p className="text-muted-foreground">
          <code>components.json</code> の <code>registries</code> に <code>@jobantenna</code>{" "}
          を追加します。登録済みのレジストリがある場合は、同じ設定に追記してください。
        </p>
        <pre className={codeBlock}>
          <code>{`{
  "registries": {
    "@jobantenna": "https://ui.jobantenna.jp/r/styles/default/{name}.json"
  }
}`}</code>
        </pre>
        <pre className={codeBlock}>
          <code>bunx shadcn@latest add @jobantenna/button</code>
        </pre>
        <p className="text-muted-foreground">
          保存先は利用側の <code>components.json</code> にある <code>aliases.ui</code>{" "}
          で決まります。
        </p>
        <p className="text-muted-foreground">
          デザイン原則の <code>DESIGN.md</code> も <code>@jobantenna/design</code>{" "}
          として配布しています。
        </p>
      </section>

      <section className="grid min-w-0 gap-4 border-t pt-6" aria-labelledby="mcp-connection">
        <h2 id="mcp-connection" className="text-xl font-semibold">
          MCP接続（任意）
        </h2>
        <p className="text-muted-foreground">
          レジストリを登録したプロジェクトで、使用するクライアントに合わせてMCPを設定します。
        </p>
        <h3 className="font-semibold">Claude Code</h3>
        <pre className={codeBlock}>
          <code>bunx shadcn@latest mcp init --client claude</code>
        </pre>
        <p className="text-muted-foreground">
          プロジェクトの <code>.mcp.json</code> に設定が追加されます。設定後に Claude Code
          を再起動します。
        </p>
        <h3 className="font-semibold">Codex</h3>
        <p className="text-muted-foreground">
          <code>~/.codex/config.toml</code> に以下を追加し、Codex を再起動します。
        </p>
        <pre className={codeBlock}>
          <code>{`[mcp_servers.shadcn]
command = "npx"
args = ["shadcn@latest", "mcp"]`}</code>
        </pre>
      </section>
    </div>
  )
}
