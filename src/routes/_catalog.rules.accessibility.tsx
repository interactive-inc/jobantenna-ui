import { createFileRoute } from "@tanstack/react-router"
import { EllipsisIcon, ThumbsUpIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RulePageHeader } from "@/components/catalog/rule-page-header"

export const Route = createFileRoute("/_catalog/rules/accessibility")({
  component: AccessibilityPage,
})

type ScreenReaderRule = {
  rule: string
  example: string
}

const screenReaderRules: ReadonlyArray<ScreenReaderRule> = [
  {
    rule: "アイコンだけのボタンには sr-only テキストか aria-label で名前を付けます",
    example: '<Button size="icon"><SendIcon /><span className="sr-only">送信</span></Button>',
  },
  {
    rule: "装飾のアイコン・SVG は aria-hidden で読み上げ対象から外します",
    example: '<svg aria-hidden="true">…</svg>',
  },
  {
    rule: "通知バッジは数字だけでなく意味まで読み上げられるようにします",
    example: 'aria-label="メッセージ 未読99件以上"',
  },
  {
    rule: "状態の変化はテキストでも伝えます。色だけで区別しません",
    example: "エラーは赤い枠線に加えてエラーメッセージを表示する",
  },
]

type KeyboardRule = {
  rule: string
  example: string
}

const keyboardRules: ReadonlyArray<KeyboardRule> = [
  {
    rule: "focus-visible のフォーカスリングを消しません（outline-none だけの指定は NG）",
    example: "コンポーネント標準の focus-visible:ring をそのまま使う",
  },
  {
    rule: "Tab の到達順は視覚的な並び順と一致させます。tabindex の正の値は使いません",
    example: "DOM 順 = 見た目順にする。順序変更は CSS でなく構造で解決する",
  },
  {
    rule: "Esc で閉じる・矢印キーで移動などの挙動は Base UI に任せ、独自実装しません",
    example: "Dialog / Dropdown Menu / Combobox のキーボード操作は組み込み済み",
  },
  {
    rule: "パネル内の詳細から一覧に戻るときは、開いていた項目にフォーカスを戻します",
    example: "お知らせの詳細から一覧に戻ると、読んでいたお知らせの行に戻る",
  },
]

/**
 * 原則「アクセシビリティ」。ラベル・コントラスト・キーボード・読み上げ・モーションのルール
 */
function AccessibilityPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16 md:px-10">
      <RulePageHeader
        title="アクセシビリティ"
        lead="求人を探すすべての人が、環境や身体条件によらず同じ情報にたどり着けるためのルールです。特別な対応を後付けするのではなく、ラベル・コントラスト・キーボード操作の基本を最初から守ります。多くはコンポーネント側（Base UI）が担保するので、壊さないことが最重要です。"
      />

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">ラベル</h2>
        <div className="ja-light-surface flex flex-wrap items-end gap-6 rounded-xl bg-background p-4 text-foreground">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="ほかの操作">
              <EllipsisIcon aria-hidden="true" />
            </Button>
          </div>
          <div className="flex w-full max-w-60 flex-col gap-2">
            <Label htmlFor="a11y-keyword">キーワード</Label>
            <Input id="a11y-keyword" placeholder="職種名などを入力" />
          </div>
        </div>
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          アイコンだけのボタンには「ほかの操作」のような読み上げ名を付けます。
          項目名は入力欄と関連づけ、入力を始めた後も表示します。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">コントラスト</h2>
        <div className="ja-light-surface flex flex-wrap items-center gap-6 rounded-xl bg-background p-4 text-foreground">
          <Button variant="interest">
            <ThumbsUpIcon data-icon="inline-start" aria-hidden="true" />
            いいかもを送る
          </Button>
        </div>
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          本文テキストは WCAG 2.2 AA（4.5:1）、大きな文字と操作の境界は 3:1
          を満たします。ブランドの黄色に白文字は載せません。brand-foreground が墨
          なのはこのためです。muted-foreground は補足専用で、本文には使いません。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">キーボード操作</h2>
        <div className="ja-light-surface flex flex-wrap items-center gap-2 rounded-xl bg-background p-4 text-foreground">
          <Button variant="secondary">条件を変える</Button>
          <Button>検索する</Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Tabキーで移動したときは、次に操作できるボタンを輪郭で示します。
        </p>
        <div className="flex flex-col gap-4 rounded-xl border p-4">
          {keyboardRules.map((keyboard) => (
            <div key={keyboard.rule} className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{keyboard.rule}</span>
              <span className="text-sm text-muted-foreground">例: {keyboard.example}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">スクリーンリーダー</h2>
        <div className="flex flex-col gap-4 rounded-xl border p-4">
          {screenReaderRules.map((screenReader) => (
            <div key={screenReader.rule} className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{screenReader.rule}</span>
              <span className="text-sm text-muted-foreground">
                例: <code className="text-xs">{screenReader.example}</code>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">モーション</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          アニメーションは装飾であり、情報をアニメーションだけで伝えません。自動再生・無限ループのモーションは使わず、
          prefers-reduced-motion が有効な環境では動きを減らします。トランジションは 200〜450ms
          の範囲に収め、酔いやすい大きな視差・ズームは避けます。
        </p>
      </section>
    </div>
  )
}
