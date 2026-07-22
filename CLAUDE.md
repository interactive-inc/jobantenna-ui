# jobantenna-ui

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

## 開発サーバ

開発サーバは portless で立てる。リポジトリルートで `portless` を実行する。素の `bun run dev` / `vite dev` を直接叩かない。

- URL は `https://design.jobantenna.localhost`（`portless.json` の name 由来）。ポート番号で叩かない
- `portless.json` で `appPort: 4791` を固定し、`vite.config.ts` の `server.port` も同じ 4791 に固定している。ポートがずれるとプロキシが 502 になる
- `dev` スクリプトの `--host 127.0.0.1` は必須。外すと Vite が IPv6 のみでバインドし、127.0.0.1 へ繋ぐ portless プロキシが ECONNREFUSED になる

## デプロイ

main にプッシュすると Cloudflare が自動デプロイする。公開 URL は https://ui.jobantenna.jp

- SSG（プレレンダー）で配信される。crawler は `<a href>` しか辿らないため、リンクされていないルートは HTML が生成されず、未生成パスへのアクセスはフォールバックのトップページ HTML が返る
- 新しいルートを足したら、いずれかのページからアンカーリンクで到達できることを確認する（iframe の src だけでは辿られない）
