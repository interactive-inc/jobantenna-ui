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
