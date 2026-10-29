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

利用側の `components.json` にレジストリを登録すると、短縮名で追加できる。

```json
{
  "registries": {
    "@jobantenna": "https://ui.jobantenna.jp/r/styles/default/{name}.json"
  }
}
```

```bash
bunx shadcn@latest add @jobantenna/sheet
```

`@jobantenna` は取得先の名前であり、保存先のフォルダ名ではない。保存先は利用側の `components.json` の `aliases.ui` に従う。`"ui": "@/components/ui"` の場合、Sheet は `components/ui/sheet.tsx` に配置される（`@/` が `src/` を指す構成なら `src/components/ui/sheet.tsx`）。

部品同士の依存先は、このレジストリの完全な URL で指定している。Sheet が必要とする Button なども `ui.jobantenna.jp` から取得されるため、URL で直接追加する場合も、短縮名を使う場合も、取得先を差し替えるプロキシや専用の同期スクリプトは不要。

MCP 連携の手順はトップページ https://ui.jobantenna.jp に記載している。

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
