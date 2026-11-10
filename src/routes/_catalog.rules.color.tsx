import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRight, ThumbsUp } from "lucide-react"

import { ColorSwatch } from "@/components/catalog/color-swatch"
import { RulePageHeader } from "@/components/catalog/rule-page-header"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"

export const Route = createFileRoute("/_catalog/rules/color")({
  component: ColorPage,
})

const colors = [
  {
    name: "brand / interest",
    light: "#FFC306",
    dark: "#FFC306",
    usage: "ロゴ・現在地・いいかも。黄色の上は墨の文字。",
  },
  { name: "page", light: "#F7F9FC", dark: "#1C232A", usage: "画面の地。白いカードと区別する。" },
  { name: "foreground", light: "#262F37", dark: "#FAFAFA", usage: "見出しと本文の色。" },
  {
    name: "primary",
    light: "#262F37",
    dark: "#EEF1F4",
    usage: "画面で最も重要な決定。1画面に原則1つ。",
  },
  { name: "link", light: "#076ABA", dark: "#A1CFFE", usage: "テキストリンクと新着の印。" },
  {
    name: "ring",
    light: "#076ABA",
    dark: "#78BBFE",
    usage: "キーボードフォーカス。周囲との区別を保つ。",
  },
]

const surfaceColors = [
  { name: "card", light: "#FFFFFF", dark: "oklch(0.205 0 0)", usage: "カードや面の地。" },
  {
    name: "secondary",
    light: "#EEF1F4",
    dark: "oklch(0.274 0.006 286.033)",
    usage: "ページ移動用のボタンや補助操作。",
  },
  {
    name: "muted",
    light: "#EEF1F4",
    dark: "oklch(0.269 0 0)",
    usage: "くぼみや補足をまとめる背景。",
  },
  { name: "border", light: "#E0E3E7", dark: "oklch(1 0 0 / 10%)", usage: "カードや行の区切り。" },
  { name: "input", light: "#CDD1D5", dark: "oklch(1 0 0 / 15%)", usage: "入力欄の境界。" },
]

const chartBars = [
  { label: "系列1", className: "h-16 bg-chart-1" },
  { label: "系列2", className: "h-12 bg-chart-2" },
  { label: "系列3", className: "h-20 bg-chart-3" },
  { label: "系列4", className: "h-8 bg-chart-4" },
  { label: "系列5", className: "h-14 bg-chart-5" },
]

function ColorPage() {
  return (
    <div className="mx-auto grid w-full max-w-4xl gap-12 px-6 py-12 md:px-10">
      <RulePageHeader
        title="配色"
        lead="色はプリミティブと役割の2段で管理します。コンポーネントは地、文字、操作、状態などの役割で色を指定します。"
      />
      <section className="grid gap-4">
        <h2 className="text-xl font-bold">ブランドと操作</h2>
        <p className="text-muted-foreground">
          主の操作は墨。黄色はロゴ・現在地・いいかもに使います。ボタン型のリンクはSecondary、テキストリンクは青です。失敗や入力エラーは赤、注意は橙です。
        </p>
        {colors.map((color) => (
          <ColorSwatch key={color.name} {...color} />
        ))}
      </section>
      <section className="grid gap-4" aria-labelledby="surface-tokens">
        <h2 id="surface-tokens" className="text-xl font-bold">
          背景と境界のトークン
        </h2>
        {surfaceColors.map((color) => (
          <ColorSwatch key={color.name} {...color} />
        ))}
      </section>
      <section className="grid gap-4">
        <h2 className="text-xl font-bold">使い分け</h2>
        <div className="ja-light-surface flex flex-wrap items-center gap-3 rounded-2xl bg-page p-6 text-foreground">
          <Button>条件を適用</Button>
          <Button variant="interest">
            <ThumbsUp data-icon="inline-start" />
            いいかもを送る
          </Button>
          <Button variant="secondary">キャンセル</Button>
          <Button variant="ghost">項目を追加する</Button>
          <Link
            to="/components/$name"
            params={{ name: "button" }}
            className={buttonVariants({ variant: "secondary" })}
          >
            Buttonの使用例を見る
            <ArrowRight data-icon="inline-end" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          ボタンの形で別画面へ案内する場合は、Secondaryの面と文字色を使います。
        </p>
      </section>
      <section className="grid gap-4">
        <h2 className="text-xl font-bold">状態の札</h2>
        <p className="text-muted-foreground">
          淡い地と濃い文字を組み合わせ、文言でも状態が分かるようにします。公開停止は灰、掲載中や条件の一致は緑です。
        </p>
        <div className="ja-light-surface flex flex-wrap gap-3 rounded-2xl bg-card p-6 text-foreground">
          <Badge variant="information">応募あり</Badge>
          <Badge variant="interest">
            <ThumbsUp aria-hidden="true" />
            いいかもが届いています
          </Badge>
          <Badge variant="secondary">公開停止</Badge>
          <Badge variant="secondary" className="bg-success-muted text-success">
            掲載中
          </Badge>
          <Badge variant="attention">要確認</Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          灰色の地に置く補足は、白地の補足より濃くします。本文と補足はWCAG 2.2 AAを基準にします。
        </p>
      </section>
      <section className="grid gap-4" aria-labelledby="chart-colors">
        <h2 id="chart-colors" className="text-xl font-bold">
          チャートの系列色
        </h2>
        <p className="text-muted-foreground">
          系列は <code>--chart-1</code> から <code>--chart-5</code>{" "}
          の明度差で区別します。系列名や凡例を併記します。
        </p>
        <figure className="ja-light-surface rounded-(--radius-container) bg-card p-4 text-foreground sm:p-6">
          <div className="grid grid-cols-5 items-end gap-2">
            {chartBars.map((bar) => (
              <div key={bar.label} className="grid justify-items-center gap-2">
                <div
                  className={`w-full max-w-10 rounded-t-(--radius-inner) ${bar.className}`}
                  aria-hidden
                />
                <span className="text-xs text-muted-foreground">{bar.label}</span>
              </div>
            ))}
          </div>
        </figure>
        <Link
          to="/components/$name"
          params={{ name: "chart" }}
          className="w-fit font-semibold underline-offset-4 hover:underline"
        >
          Chartの使用例を見る
        </Link>
      </section>
    </div>
  )
}
