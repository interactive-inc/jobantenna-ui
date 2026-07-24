import { createFileRoute } from "@tanstack/react-router"
import { ImageIcon } from "lucide-react"

import { RulePageHeader } from "@/components/catalog/rule-page-header"
import { sampleCanvasStyle } from "@/components/catalog/sample-canvas-style"

export const Route = createFileRoute("/_catalog/rules/images")({
  component: ImagesPage,
})

/**
 * object-fit の違いを見せるためのデモ画像。被写体（円）の切れ方で挙動がわかる
 */
const demoImageSource =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e4e4e7'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23fbbf24'/%3E%3Crect y='170' width='300' height='30' fill='%23a1a1aa'/%3E%3C/svg%3E"

type AltRule = {
  rule: string
  example: string
}

const altRules: ReadonlyArray<AltRule> = [
  {
    rule: "情報を持つ画像は、見えなくても伝わる説明を alt に書きます",
    example: 'alt="国際通り沿いのカフェ店内。カウンター席とテラス席がある"',
  },
  {
    rule: "隣にテキストがある装飾画像・アイコン画像は alt を空にします",
    example: 'alt=""（スクリーンリーダーが読み飛ばす）',
  },
  {
    rule: "企業ロゴは企業名を alt にします。「ロゴ」という言葉は不要です",
    example: 'alt="株式会社サンプル"',
  },
]

type LoadingRule = {
  rule: string
  example: string
}

const loadingRules: ReadonlyArray<LoadingRule> = [
  {
    rule: "ファーストビューの外にある画像は loading=\"lazy\" で遅延読み込みします",
    example: "求人一覧の2枚目以降のカード画像、フッター周辺の画像",
  },
  {
    rule: "LCP 候補（最初に見える大きな画像）は遅延させず、優先度を上げます",
    example: 'ヒーロー画像に loading="eager" + fetchpriority="high"',
  },
  {
    rule: "サムネイルに原寸画像を使いません。表示サイズに合わせた画像を配信します",
    example: "一覧カードは幅 2x 分（約 800px）で十分",
  },
]

/**
 * 原則「画像」。alt・サイズ予約・トリミング・読み込み・プレースホルダーのルール
 */
function ImagesPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16 md:px-10">
      <RulePageHeader
        title="画像"
        lead="求人写真・企業ロゴなど、img タグを使うときのルールです。ジョブアンテナは SSG 配信のため、サイズ未指定によるレイアウトのガタつき（CLS）が特に目立ちます。すべての画像は「代替テキスト・領域の予約・トリミング方針」の3点を決めてから置きます。"
      />

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">alt テキスト</h2>
        <div className="flex flex-col gap-4 rounded-xl border p-4">
          {altRules.map((alt) => (
            <div key={alt.rule} className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{alt.rule}</span>
              <span className="text-sm text-muted-foreground">
                例: <code className="text-xs">{alt.example}</code>
              </span>
            </div>
          ))}
        </div>
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          alt
          は「画像が表示されなかったとき、その場所に書いてあってほしい文章」です。ファイル名や「画像」という言葉をそのまま入れません。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">サイズの予約（CLS 防止）</h2>
        <div
          style={sampleCanvasStyle}
          className="flex flex-col gap-4 rounded-xl bg-background p-4 text-foreground"
        >
          <div className="flex flex-col gap-1">
            <div className="aspect-video w-full max-w-xs overflow-hidden rounded-md">
              <img
                src={demoImageSource}
                alt=""
                className="size-full object-cover"
                width={300}
                height={200}
              />
            </div>
            <code className="text-xs text-muted-foreground">
              aspect-video + width/height 属性で読み込み前から領域を確保
            </code>
          </div>
        </div>
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          width / height 属性か aspect-ratio
          のどちらかを必ず指定し、画像の読み込みで下のコンテンツが動かないようにします。求人写真は
          16:9（aspect-video）に統一します。比率をコンポーネントで管理する場合は AspectRatio
          を使います。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">トリミング</h2>
        <div
          style={sampleCanvasStyle}
          className="flex flex-wrap gap-6 rounded-xl bg-background p-4 text-foreground"
        >
          <div className="flex flex-col gap-1">
            <div className="size-32 overflow-hidden rounded-md border">
              <img src={demoImageSource} alt="" className="size-full object-cover" />
            </div>
            <code className="text-xs text-muted-foreground">object-cover — 求人写真</code>
          </div>
          <div className="flex flex-col gap-1">
            <div className="size-32 overflow-hidden rounded-md border">
              <img src={demoImageSource} alt="" className="size-full object-contain" />
            </div>
            <code className="text-xs text-muted-foreground">object-contain — 企業ロゴ</code>
          </div>
        </div>
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          求人写真は枠を埋めることを優先して object-cover
          でトリミングします。企業ロゴは欠けると意味が変わるため object-contain
          で全体を表示します。img を直接変形させる width/height の指定ミス（縦横比の崩れ）は NG
          です。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">読み込み</h2>
        <div className="flex flex-col gap-4 rounded-xl border p-4">
          {loadingRules.map((loading) => (
            <div key={loading.rule} className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{loading.rule}</span>
              <span className="text-sm text-muted-foreground">例: {loading.example}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">プレースホルダー</h2>
        <div
          style={sampleCanvasStyle}
          className="flex flex-wrap gap-6 rounded-xl bg-background p-4 text-foreground"
        >
          <div className="flex h-32 w-48 items-center justify-center rounded-md bg-muted">
            <ImageIcon className="size-8 text-muted-foreground" />
          </div>
        </div>
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          画像が未登録の求人は bg-muted の面に ImageIcon
          を置いたプレースホルダーで統一します。ダミー写真や企業ロゴの流用はしません。読み込み失敗（onError）時も同じ見た目に落とします。
        </p>
      </section>
    </div>
  )
}
