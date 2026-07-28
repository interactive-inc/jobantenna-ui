# jobantenna-ui

転職・求人サービスのための、製品から独立した規範デザインシステム。トークンと原則をカタログサイトで定め、コンポーネントを shadcn レジストリとして配布する。

公開 URL: https://ui.jobantenna.jp

## 構成

- デザインルール: 基本原則・配色・形・余白・文字などの規範（`/rules/*`）
- コンポーネントカタログ: 各コンポーネントの実例とコード（`/components/{name}`）
- shadcn レジストリ: 外部プロジェクトへの配布（`/r/styles/default/{name}.json`）

トークンと造形原則の正は [DESIGN.md](DESIGN.md)。カタログの `/rules/*` はその解説。

## 外部プロジェクトから使う

shadcn CLI でコンポーネントを取り込める。

```bash
bunx shadcn@latest add https://ui.jobantenna.jp/r/styles/default/button.json
```

namespace 設定（`@jobantenna/button`）や MCP 連携の手順はトップページ https://ui.jobantenna.jp に記載している。

## 開発

```bash
bun install
portless
```

開発サーバは portless で立てる（素の `bun run dev` を直接叩かない）。URL は https://ui.jobantenna.jp.localhost

- `bun run check`: format + lint + typecheck
- `bun run test`: Vitest
- `bun run build`: レジストリ生成 + vite build

スタック: TanStack Start / React 19 / Tailwind CSS v4 / shadcn/ui（@base-ui/react）/ vite-plus

## デプロイ

main に push すると Cloudflare が自動デプロイする。SSG プレレンダーのため、新しいルートはいずれかのページから `<a href>` で到達できる必要がある。
