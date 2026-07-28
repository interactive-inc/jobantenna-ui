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

- URL は `https://ui.jobantenna.jp.localhost`（`portless.json` の name 由来）。ポート番号で叩かない
- `portless.json` で `appPort: 44791` を固定し、`vite.config.ts` の `server.port` も同じ 44791 に固定している。ポートがずれるとプロキシが 502 になる
- `dev` スクリプトの `--host 127.0.0.1` は必須。外すと Vite が IPv6 のみでバインドし、127.0.0.1 へ繋ぐ portless プロキシが ECONNREFUSED になる

## デプロイ

main にプッシュすると Cloudflare が自動デプロイする。公開 URL は https://ui.jobantenna.jp

- SSG（プレレンダー）で配信される。crawler は `<a href>` しか辿らないため、リンクされていないルートは HTML が生成されず、未生成パスへのアクセスはフォールバックのトップページ HTML が返る
- 新しいルートを足したら、いずれかのページからアンカーリンクで到達できることを確認する（iframe の src だけでは辿られない）

## Base UI の属性規約

コンポーネントは Base UI（`@base-ui/react`）で実装する。Radix の属性名をそのまま書くと、型チェックも lint も通るのに CSS が一切当たらない。無言で壊れるため、変換表に従う。

- `data-[state=on]:` → `data-pressed:`（Toggle が出すのは `data-pressed` / `data-disabled` のみ）
- `data-vertical:` → `data-[orientation=vertical]:`
- `data-horizontal:` → `data-[orientation=horizontal]:`
- `group-data-vertical/x:` → `group-data-[orientation=vertical]/x:`

`data-vertical` / `data-horizontal` は Radix でも Base UI でも存在しない。どちらも `data-orientation` に値を入れる。Tailwind v4 の裸 data variant は属性の存在チェックに展開されるため、値付きセレクタで書く必要がある。

各コンポーネントが実際に出す属性は `node_modules/@base-ui/react/<component>/<Component>DataAttributes.d.ts` で確認する。推測で書かない。

`orientation` のような props はプリミティブへ転送する。分割代入で取り出して `data-orientation` を手で付けるだけでは、`aria` 属性やローミングフォーカスがプリミティブ側に伝わらない。

### 検証

見た目が正しく見えても機構が働いているとは限らない。`separator` の縦線は `data-vertical:w-px` が無効でも、空 div の幅がほぼ0で `bg-border` が線のように見えるため正常に見えていた（Issue #8）。

Tailwind クラスの有効性は**生成 CSS にルールが存在するか**で判定する。computed style だけでは足りない。

```js
for (const sheet of document.styleSheets) {
  for (const r of sheet.cssRules) {
    if (/data-vertical/.test(r.selectorText ?? "")) console.log(r.selectorText)
  }
}
```

縦向き・押下状態などの分岐は、カタログにパターンが無いと検証できない。分岐を追加したらデモも追加する。
