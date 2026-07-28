# jobantenna-ui

転職・求人サービスのための規範デザインシステム。デザインルールとコンポーネント実例のカタログサイトであり、コンポーネントは shadcn レジストリとして配布する。公開 URL は https://ui.jobantenna.jp

## 地図

- `src/routes/`: カタログ。`_catalog.rules.*` がデザインルール、`_catalog.components.$name` がコンポーネント個別ページ、`preview.*` が iframe 用プレビュー
- `src/components/ui/`: 配布するコンポーネント本体（shadcn 生成）。`ui.base-luma/` は base-luma テーマ版
- `src/styles.css` / `src/styles.jobantenna.css` / `src/styles.base-luma.css`: トークン定義
- `registry.json` + `bun run registry:build`: shadcn レジストリ生成（`public/r/styles/default` に出力、`bun run build` に含まれる）
- `DESIGN.md`: トークンと造形原則の正。UI を触る前に読む

## パッケージマネージャ

- bun を使う（npm/yarn/pnpm 禁止）
- 依存追加: `bun add <pkg>` / `bun add -D <pkg>`
- インストール: `bun install`

## ツールチェーン

lint/format/test は vite-plus (`vp`) に統一。設定はすべて `vite.config.ts` の `lint` / `fmt` / `test` ブロックに書く。eslint.config.js や .prettierrc は使わない。

- `bun run lint` → `vp lint` (Oxlint)
- `bun run format` → `vp fmt` (Oxfmt, セミコロンなし)
- `bun run check` → format + lint + typecheck
- `bun run test` → `vp test` (Vitest)
- `bun run typecheck` → `tsc --noEmit`

## 既知の落とし穴

- `vp check` が `src/route-tree.gen.ts` の format エラーで落ちることがある。TanStack Router の生成ファイルを dev サーバが未整形のまま再生成するため。自分の変更と無関係なら気にしない
- `src/components/ui*/scroll-area.tsx` の未使用 import 型エラーは shadcn 生成由来の既知。手で直さない（.claude/rules/ts.react.shadcn.md）

## 開発サーバ

開発サーバは portless で立てる。リポジトリルートで `portless` を実行する。素の `bun run dev` / `vite dev` を直接叩かない。

- URL は `https://ui.jobantenna.jp.localhost`（`portless.json` の name 由来）。ポート番号で叩かない
- `portless.json` で `appPort: 44791` を固定し、`vite.config.ts` の `server.port` も同じ 44791 に固定している。ポートがずれるとプロキシが 502 になる
- `dev` スクリプトの `--host 127.0.0.1` は必須。外すと Vite が IPv6 のみでバインドし、127.0.0.1 へ繋ぐ portless プロキシが ECONNREFUSED になる

## デプロイ

main にプッシュすると Cloudflare が自動デプロイする。公開 URL は https://ui.jobantenna.jp

- SSG（プレレンダー）で配信される。crawler は `<a href>` しか辿らないため、リンクされていないルートは HTML が生成されず、未生成パスへのアクセスはフォールバックのトップページ HTML が返る
- 新しいルートを足したら、いずれかのページからアンカーリンクで到達できることを確認する（iframe の src だけでは辿られない）
