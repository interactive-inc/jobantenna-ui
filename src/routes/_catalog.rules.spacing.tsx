import type { ReactNode } from "react"
import { createFileRoute } from "@tanstack/react-router"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RulePageHeader } from "@/components/catalog/rule-page-header"
import { sampleCanvasStyle } from "@/components/catalog/sample-canvas-style"

export const Route = createFileRoute("/_catalog/rules/spacing")({
  component: SpacingPage,
})

type SpacingStep = {
  tailwind: string
  px: number
  usage: string
}

const spacingSteps: ReadonlyArray<SpacingStep> = [
  {
    tailwind: "p-0.5 / gap-0.5",
    px: 2,
    usage: "タイトルと補足のように、意味が地続きな行の間",
  },
  {
    tailwind: "p-1 / gap-1",
    px: 4,
    usage: "バッジの並びなど、同じ種類の要素を横に詰める間",
  },
  {
    tailwind: "p-2 / gap-2",
    px: 8,
    usage: "カード内のセクション間、ボタンの並び",
  },
  {
    tailwind: "p-4 / gap-4",
    px: 16,
    usage: "カードの内側パディング、セクション間の大きな区切り",
  },
]

/**
 * 余白のスケールを塗り分けで見せる帯。px 幅は 8 倍して視認しやすくする
 */
function SpacingScaleRow(props: SpacingStep) {
  return (
    <div className="flex items-center gap-4">
      <code className="w-28 shrink-0 text-xs font-medium">{props.tailwind}</code>
      <span className="w-10 shrink-0 text-xs text-muted-foreground">{props.px}px</span>
      <div className="h-4 shrink-0 rounded-xs bg-primary" style={{ width: props.px * 8 }} />
      <span className="min-w-0 flex-1 truncate text-xs text-muted-foreground">{props.usage}</span>
    </div>
  )
}

type SpacingSwatch = {
  token: string
  chip: string
}

const p4Swatch: SpacingSwatch = { token: "p-4", chip: "bg-amber-200" }
const gap2Swatch: SpacingSwatch = { token: "gap-2", chip: "bg-sky-300" }
const gap1Swatch: SpacingSwatch = { token: "gap-1", chip: "bg-orange-300" }
const gap05Swatch: SpacingSwatch = { token: "gap-0.5", chip: "bg-emerald-300" }

/**
 * 色とトークンの対応を示す凡例チップ。図解と同じ色を背景に敷く
 */
function SpacingLabel(props: SpacingSwatch) {
  return (
    <code
      className={`rounded-xs px-1 py-px text-[10px] font-medium text-neutral-800 ${props.chip}`}
    >
      {props.token}
    </code>
  )
}

/**
 * 図解を白い面の上に置くための枠。ダークな殻の中でライト値に切り替える
 */
function SpacingStage(props: { children: ReactNode }) {
  return (
    <div
      style={sampleCanvasStyle}
      className="flex flex-col items-start gap-6 rounded-2xl bg-background p-6 text-foreground sm:flex-row sm:flex-wrap sm:items-center"
    >
      {props.children}
    </div>
  )
}

/**
 * 1つの横並びを、要素の間に実寸の色付きスペーサーを挟んで見せる図解。
 * 色が付くのは隙間の幅だけ。行は w-fit で右に色が伸びない
 */
function HorizontalGapExample(props: {
  swatch: SpacingSwatch
  caption: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-fit items-center rounded-xl bg-white p-2 text-neutral-900">
        {props.children}
      </div>
      <div className="flex items-center gap-2">
        <SpacingLabel {...props.swatch} />
        <span className="text-xs text-muted-foreground">{props.caption}</span>
      </div>
    </div>
  )
}

/**
 * 横に並べるときの近接を、バッジ（gap-1）とボタン（gap-2）の2例で見せる
 */
function HorizontalProximity() {
  return (
    <SpacingStage>
      <HorizontalGapExample swatch={gap1Swatch} caption="意味が近い要素は詰める">
        <Badge variant="secondary">正社員</Badge>
        <div className="h-5 w-1 bg-orange-200" />
        <Badge variant="secondary">未経験OK</Badge>
      </HorizontalGapExample>
      <HorizontalGapExample swatch={gap2Swatch} caption="独立した操作は開ける">
        <Button size="sm">応募する</Button>
        <div className="h-8 w-2 bg-sky-200" />
        <Button size="sm" variant="outline">
          詳細を見る
        </Button>
      </HorizontalGapExample>
    </SpacingStage>
  )
}

/**
 * 縦の近接を、地続きのかたまり（gap-0.5）とまとまりの区切り（gap-2）で見せる
 */
function VerticalProximity() {
  return (
    <SpacingStage>
      <div className="flex w-64 flex-col rounded-xl bg-white p-4 text-neutral-900">
        <span className="text-xs font-medium text-neutral-500">求人タイトル</span>

        <div className="mt-2 flex flex-col">
          <span className="font-medium">フロントエンドエンジニア</span>
          <div className="h-0.5 bg-emerald-200" />
          <span className="text-xs text-neutral-500">株式会社サンプル / 那覇市</span>
        </div>

        <div className="h-2 bg-sky-200" />

        <div className="flex items-center">
          <Badge variant="secondary">正社員</Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <SpacingLabel {...gap05Swatch} />
          <span className="text-xs text-muted-foreground">地続きの行は一体に見せる</span>
        </div>
        <div className="flex items-center gap-2">
          <SpacingLabel {...gap2Swatch} />
          <span className="text-xs text-muted-foreground">まとまり同士は区切る</span>
        </div>
      </div>
    </SpacingStage>
  )
}

/**
 * カードの内側の余白 p-4 を、額縁として見える図解で見せる
 */
function InnerPadding() {
  return (
    <SpacingStage>
      <div className="rounded-4xl bg-amber-100 p-4">
        <div className="flex w-56 flex-col rounded-lg bg-white p-3 text-neutral-900">
          <span className="font-medium">フロントエンドエンジニア</span>
          <span className="text-xs text-neutral-500">株式会社サンプル / 那覇市</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <SpacingLabel {...p4Swatch} />
        <span className="text-xs text-muted-foreground">
          黄が 16px の額縁。内容はその内側に収まる
        </span>
      </div>
    </SpacingStage>
  )
}

/**
 * 各原則を実クラスのまま組んだ完成形。gap-1 / gap-0.5 / gap-2 / p-4 をそのまま使う
 */
function PlainJobCard() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 rounded-(--radius-outer) border bg-card p-4 text-card-foreground">
      <div className="flex items-center gap-1">
        <Badge variant="secondary">正社員</Badge>
        <Badge variant="secondary">未経験OK</Badge>
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="font-medium">フロントエンドエンジニア</span>
        <span className="text-xs text-muted-foreground">株式会社サンプル / 那覇市</span>
      </div>
      <div className="flex gap-2">
        <Button size="sm">応募する</Button>
        <Button size="sm" variant="outline">
          詳細を見る
        </Button>
      </div>
    </div>
  )
}

/**
 * 原則「余白は4段階のリズム」。スケールと、横・縦・内側の近接を分けて見せる
 */
function SpacingPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16 md:px-10">
      <RulePageHeader
        title="余白"
        lead="余白は p-0.5 / p-1 / p-2 / p-4 の4段階だけを使います。gap も同じく gap-0.5 / gap-1 / gap-2 / gap-4。情報密度が高い画面でも、このスケールを守ることでリズムが崩れません。中間の値が欲しくなったら、それは値の問題ではなく階層設計の見直しが必要なサインです。"
      />

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">スケール</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          使うのは 0.5 / 1 / 2 / 4 の4段階だけです。数字がそのまま余白の名前で、sm や md
          のようなトークン名はありません。帯の長さは実寸の8倍で、px 表記の値がそのまま実際の余白です。
        </p>
        <div className="flex flex-col gap-2 rounded-xl border p-4">
          {spacingSteps.map((step) => (
            <SpacingScaleRow key={step.tailwind} {...step} />
          ))}
        </div>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          この4値の間にある p-1.5 や p-3 は使いません。大きな区切りほど大きな余白、という対応を
          4段で完結させます。縦の間隔は margin でなく gap / space-y で作ります。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">横は、近い要素ほど詰める</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          横に並べるとき、意味が近い要素は gap-1 で詰めてひとかたまりに見せます。独立した操作は
          gap-2
          で開けて別々だと分かるようにします。図解の色付きの帯が、要素の間に空く実寸の隙間です。
        </p>
        <HorizontalProximity />
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">縦は、地続きか区切りかで決める</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          タイトルと会社名のように意味が地続きな行は gap-0.5
          でほぼ隙間なく重ね、1つのかたまりに見せます。かたまり同士は gap-2
          で区切って、別々の情報だと分かるようにします。
        </p>
        <VerticalProximity />
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">内側は、面から一定の余白を空ける</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          カードのように内容を囲む面は、内側に p-4
          の余白を回します。縁と内容がくっつかず、四辺すべてで同じ厚みの額縁になります。
        </p>
        <InnerPadding />
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">完成形</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          横の gap-1 / gap-2、縦の gap-0.5 / gap-2、内側の p-4。ここまでの原則が、この求人カード
          1枚に全部入っています。図解ではなく実クラスをそのまま使っています。
        </p>
        <SpacingStage>
          <PlainJobCard />
        </SpacingStage>
      </section>
    </div>
  )
}
