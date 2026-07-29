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

## Base UI の属性規約

コンポーネントは Base UI（`@base-ui/react`）で実装する。Radix の属性名をそのまま書くと、型チェックも lint も通るのに CSS が一切当たらない。無言で壊れるため、変換表に従う。

- `data-[state=on]:` → `data-pressed:`（Toggle が出すのは `data-pressed` / `data-disabled` のみ）
- `data-vertical:` → `data-[orientation=vertical]:`
- `data-horizontal:` → `data-[orientation=horizontal]:`
- `group-data-vertical/x:` → `group-data-[orientation=vertical]/x:`

`data-vertical` / `data-horizontal` は Radix でも Base UI でも存在しない。どちらも `data-orientation` に値を入れる。Tailwind v4 の裸 data variant は属性の存在チェックに展開されるため、値付きセレクタで書く必要がある。

各コンポーネントが実際に出す属性は `node_modules/@base-ui/react/<component>/<Component>DataAttributes.d.ts` で確認する。推測で書かない。

### orientation の実装パターン

`orientation` の扱いは3通りある。既存コンポーネントはいずれかに当てはまるので、新規実装でも合わせる。

素通し。`orientation` を分割代入せず `{...props}` でプリミティブへ渡す。値を自分で使う必要がないならこれが最良で、転送漏れが原理的に起きない（`slider`）。

明示転送。デフォルト値を与えたい、子へ渡したいなど値を使う必要がある場合は分割代入するが、`orientation={orientation}` でプリミティブへ戻す。戻し忘れると `aria` 属性やローミングフォーカスが伝わらない（`toggle-group` / `tabs` / `scroll-area` / `separator`）。

手動付与。ラップ対象がプリミティブでなく素の `div` の場合は誰も属性を出さないため、`data-orientation={orientation}` を自分で付ける。root のレイアウトは cva の `orientation` variant で組む（`attachment` / `button-group` / `field`）。

プリミティブをラップする場合に `data-orientation` を手で付けてはいけない。プリミティブが自分で出すため重複する。

### セレクタの使い分け

自分自身の状態で分岐するなら `data-[orientation=vertical]:`、祖先の状態で分岐するなら `group-data-[orientation=vertical]/name:` を使う。後者は root 側に `group/name` が付いていることが前提。

`has-` は付けない。`group-has-data-[orientation=...]` は「子孫に該当要素があるか」を見るため、`data-orientation` が group 要素自身に付く構成では条件が成立しない。入れ子にできるコンポーネントでは内側の状態が外側に誤って効く。

### 検証

見た目が正しく見えても機構が働いているとは限らない。`separator` の縦線は、存在しない縦向き data 属性を条件とする幅指定が無効でも、空 div の幅がほぼ0で `bg-border` が線のように見えるため正常に見えていた（Issue #8）。

Tailwind クラスの有効性は**生成 CSS にルールが存在し、実要素に一致するか**で判定する。computed style だけでは足りない。Tailwind v4 のルールは `@layer` 配下にネストされるため、`sheet.cssRules` の最上位だけでなく、`cssRules` を持つルールを再帰的に走査する。

```js
const collectSelectors = (rules, parentSelector = null, selectors = []) => {
  for (const rule of rules) {
    if (typeof rule.selectorText === "string") {
      const effectiveSelector = parentSelector
        ? rule.selectorText.includes("&")
          ? rule.selectorText.replaceAll("&", `:is(${parentSelector})`)
          : `${parentSelector} ${rule.selectorText}`
        : rule.selectorText

      selectors.push(effectiveSelector)

      if (rule.cssRules) {
        collectSelectors(rule.cssRules, effectiveSelector, selectors)
      }
    } else if (rule.cssRules) {
      collectSelectors(rule.cssRules, parentSelector, selectors)
    }
  }

  return selectors
}

const selectors = []

for (const sheet of document.styleSheets) {
  try {
    collectSelectors(sheet.cssRules, null, selectors)
  } catch {
    // cross-origin stylesheet は走査できないため対象外
  }
}

const positiveControl = selectors.filter((selector) => selector === ".flex-col")

if (positiveControl.length === 0) {
  throw new Error("CSSOM 走査の陽性対照 flex-col が見つからない")
}

const legacySelectors = selectors.filter((selector) =>
  /data-(?:vertical|horizontal)/.test(selector),
)
const target = document.querySelector('[data-orientation="vertical"]')

if (!target) {
  throw new Error("検証対象の縦向き要素が見つからない")
}

const matchingSelectors = selectors.filter((selector) => {
  try {
    return selector.includes("[data-orientation") && target.matches(selector)
  } catch {
    return false
  }
})

if (matchingSelectors.length === 0) {
  throw new Error("値付き orientation セレクタが検証対象に一致しない")
}

console.log({ positiveControl, legacySelectors, matchingSelectors })
```

0件を報告する前に、同じ走査器で `.flex-col` など確実に存在するセレクタが1件以上見つかることを陽性対照として確認する。陽性対照の無い0件では、対象セレクタが存在しないのか走査器が壊れているのか区別できない。対象コンポーネントをカタログで描画し、`matchingSelectors` が1件以上になることも確認する。

縦向き・押下状態などの分岐は、カタログにパターンが無いと検証できない。分岐を追加したらデモも追加する。
