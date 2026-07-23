import type { ReactNode } from "react"
import { createFileRoute } from "@tanstack/react-router"

import { SearchXIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Empty, EmptyDescription, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
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

const denseSpacingSteps: ReadonlyArray<SpacingStep> = [
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

const looseSpacingSteps: ReadonlyArray<SpacingStep> = [
  {
    tailwind: "gap-8",
    px: 32,
    usage: "チャットのメッセージ同士など、別発言として離す縦の間隔",
  },
  {
    tailwind: "p-12",
    px: 48,
    usage: "空状態のように、中身が少ない面の内側パディング",
  },
  {
    tailwind: "py-16 / space-y-16",
    px: 64,
    usage: "ページ全体の上下パディング、ページ内の大セクション同士の区切り",
  },
]

/**
 * 余白のスケールを塗り分けで見せる帯。幅は実寸の px そのもの
 */
function SpacingScaleRow(props: SpacingStep) {
  return (
    <div className="flex items-center gap-4">
      <code className="w-36 shrink-0 text-xs font-medium">{props.tailwind}</code>
      <span className="w-10 shrink-0 text-xs text-muted-foreground">{props.px}px</span>
      <div className="h-4 shrink-0 rounded-xs bg-primary" style={{ width: props.px }} />
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
 * トークン名を表示するミニラベル。図解のどこにどの余白が効いているかを明示する
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
 * gap-0.5 の実例。求人タイトルと会社名を地続きに重ね、1つのかたまりに見せる
 */
function DenseLineStack() {
  return (
    <SpacingStage>
      <div className="flex w-64 flex-col gap-0.5 rounded-xl bg-white p-4 text-neutral-900">
        <span className="font-medium">フロントエンドエンジニア</span>
        <span className="text-xs text-neutral-500">株式会社サンプル / 那覇市</span>
      </div>
      <div className="flex items-center gap-2">
        <SpacingLabel {...gap05Swatch} />
        <span className="text-xs text-muted-foreground">2px の隙間で地続きの行を一体に見せる</span>
      </div>
    </SpacingStage>
  )
}

/**
 * gap-1 の実例。同じ種類のバッジを横に詰めて、ひとかたまりの属性に見せる
 */
function HorizontalTightBadges() {
  return (
    <SpacingStage>
      <div className="flex w-fit items-center gap-1 rounded-xl bg-white p-4 text-neutral-900">
        <Badge variant="secondary">正社員</Badge>
        <Badge variant="secondary">未経験OK</Badge>
        <Badge variant="secondary">リモート可</Badge>
      </div>
      <div className="flex items-center gap-2">
        <SpacingLabel {...gap1Swatch} />
        <span className="text-xs text-muted-foreground">
          4px の隙間で同種のバッジをひとまとまりに
        </span>
      </div>
    </SpacingStage>
  )
}

/**
 * gap-2（横）の実例。独立した操作であるボタンを開けて、別々だと分かるようにする
 */
function HorizontalLooseButtons() {
  return (
    <SpacingStage>
      <div className="flex w-fit items-center gap-2 rounded-xl bg-white p-4 text-neutral-900">
        <Button size="sm">応募する</Button>
        <Button size="sm" variant="outline">
          詳細を見る
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <SpacingLabel {...gap2Swatch} />
        <span className="text-xs text-muted-foreground">
          8px の隙間で独立した操作どうしを離す（横）
        </span>
      </div>
    </SpacingStage>
  )
}

/**
 * gap-2（縦）の実例。タイトルブロックとバッジ行を縦に区切り、別のまとまりに見せる
 */
function VerticalSectionGap() {
  return (
    <SpacingStage>
      <div className="flex w-64 flex-col gap-2 rounded-xl bg-white p-4 text-neutral-900">
        <div className="flex flex-col gap-0.5">
          <span className="font-medium">フロントエンドエンジニア</span>
          <span className="text-xs text-neutral-500">株式会社サンプル / 那覇市</span>
        </div>
        <div className="flex items-center gap-1">
          <Badge variant="secondary">正社員</Badge>
          <Badge variant="secondary">未経験OK</Badge>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <SpacingLabel {...gap2Swatch} />
        <span className="text-xs text-muted-foreground">
          8px の隙間でまとまり同士を縦に区切る（縦）
        </span>
      </div>
    </SpacingStage>
  )
}

/**
 * p-4 の実例。カードの内側の余白を額縁として見える図解で見せる
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
 * gap-8 の実例。チャットの吹き出しを縦に gap-8 で並べ、別発言として離して見せる
 */
function LooseMessageGapExample() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 rounded-(--radius-outer) border bg-white p-4 text-neutral-900">
      <div className="flex justify-start">
        <div className="max-w-[85%] rounded-lg bg-muted p-2 text-sm">
          この度はご応募ありがとうございます。面接のご希望日を教えてください。
        </div>
      </div>
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-lg bg-primary p-2 text-sm text-primary-foreground">
          来週の火曜か水曜の午後ですと伺えます。
        </div>
      </div>
    </div>
  )
}

/**
 * 大きい余白の実例。カタログの Empty コンポーネントの p-12 をそのまま使う
 */
function LooseInnerPaddingExample() {
  return (
    <div className="w-full max-w-sm rounded-(--radius-outer) border border-dashed">
      <Empty className="border-none">
        <EmptyMedia variant="icon">
          <SearchXIcon />
        </EmptyMedia>
        <EmptyTitle>該当する求人がありません</EmptyTitle>
        <EmptyDescription>条件を変えて再度検索してください</EmptyDescription>
      </Empty>
    </div>
  )
}

/**
 * 大きい余白の実例。ページ本体の外枠に使う py-16 / space-y-16 の縮尺見本。
 * 実寸の 64px だと枠に収まらないため 1/4 縮尺で構成比だけを見せる
 */
function LoosePageRhythmExample() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full max-w-sm space-y-4 rounded-(--radius-outer) border border-dashed p-4">
        <span className="text-xs font-medium text-neutral-900">セクションA</span>
        <div className="h-8 rounded-(--radius-inner) bg-muted" />
        <div className="h-4 bg-sky-200" />
        <span className="text-xs font-medium text-neutral-900">セクションB</span>
        <div className="h-8 rounded-(--radius-inner) bg-muted" />
      </div>
      <span className="text-xs text-muted-foreground">
        1/4 縮尺（実寸 py-16 / space-y-16 → 表示 py-4 / space-y-4）
      </span>
    </div>
  )
}

/**
 * 原則「余白は4段階のリズム」。スケールと、各パターンを1つずつ独立して見せる
 */
function SpacingPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16 md:px-10">
      <RulePageHeader
        title="余白"
        lead="余白には2つの層があります。要素どうしの近さを作る密な間隔が p-0.5 / p-1 / p-2 / p-4（gap も同じ4段階）、面と面を区切る大きい余白が gap-8 / p-12 / py-16 です。情報密度が高い画面でも、このスケールを守ることでリズムが崩れません。中間の値が欲しくなったら、それは値の問題ではなく階層設計の見直しが必要なサインです。"
      />

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">密な間隔のスケール</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          カードの中、要素どうしの近さに使うのは 0.5 / 1 / 2 / 4 の4段階だけです。数字がそのまま
          余白の名前で、sm や md のようなトークン名はありません。帯の長さは実寸の px そのものです。
        </p>
        <div className="flex flex-col gap-2 rounded-xl border p-4">
          {denseSpacingSteps.map((step) => (
            <SpacingScaleRow key={step.tailwind} {...step} />
          ))}
        </div>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          この4値の間にある p-1.5 や p-3 は使いません。大きな区切りほど大きな余白、という対応を
          4段で完結させます。縦の間隔は margin でなく gap / space-y で作ります。以降、この4段階が
          実際のコンポーネントでどう効くかを、パターンごとに1つずつ見ていきます。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">gap-0.5 ── 地続きな行を重ねる</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          求人タイトルと会社名のように意味が地続きな行は gap-0.5 でほぼ隙間なく重ね、1つのかたまりに
          見せます。行の間に 2px だけ入れることで、詰まりすぎず、かつ別々の情報には見えません。
        </p>
        <DenseLineStack />
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">
          gap-1 ── 同じ種類の要素を横に詰める
        </h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          雇用形態や条件のバッジのように、同じ種類の要素を横に並べるときは gap-1 で詰めます。4px の
          狭い隙間が、ばらばらの単語ではなく1つの属性のまとまりだと伝えます。
        </p>
        <HorizontalTightBadges />
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">
          gap-2（横）── 独立した要素を横に開ける
        </h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          「応募する」と「詳細を見る」のように、それぞれ独立した操作を横に並べるときは gap-2
          で開けます。 8px
          の隙間が、押し間違えない距離と、別々のアクションだという区別を同時に作ります。
        </p>
        <HorizontalLooseButtons />
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">
          gap-2（縦）── まとまり同士を縦に区切る
        </h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          同じ gap-2 は縦にも使います。タイトルブロックとバッジ行のように、性質の違うまとまり同士を
          縦に区切るのがこの用途です。横で操作を開けるときと、縦でまとまりを区切るとき、どちらも
          「独立したもの同士を離す」という同じ意味を、同じ 8px で表しています。
        </p>
        <VerticalSectionGap />
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">p-4 ── 面の内側に余白を回す</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          カードのように内容を囲む面は、内側に p-4
          の余白を回します。縁と内容がくっつかず、四辺すべてで 同じ厚みの額縁になります。
        </p>
        <InnerPadding />
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">大きい余白のスケール</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          p-4 より大きい余白は、カードの中では使いません。使うのは面と面の間、または中身が少ない面の
          内側だけです。密な間隔の4段階とは目的が違うので、同じ4段階のリズムには含めず別の語彙として
          扱います。
        </p>
        <div className="flex flex-col gap-2 rounded-xl border p-4">
          {looseSpacingSteps.map((step) => (
            <SpacingScaleRow key={step.tailwind} {...step} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">gap-8 ── 別発言として離す</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          gap-8 はチャットのメッセージ同士のように、独立した発言単位を離す縦の間隔です
          （message-scroller）。密な間隔よりはっきり空けることで、一続きの内容ではなく別々の発言だと
          伝わります。
        </p>
        <SpacingStage>
          <LooseMessageGapExample />
        </SpacingStage>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">p-12 ── 中身が少ない面の内側</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          p-12 は Empty
          のように中身がテキストとアイコンだけの面で使います。広い内側パディングそのものが
          「ここには何もない」ことを伝え、通常のカードとは違う特別な状態だと分からせます。
        </p>
        <SpacingStage>
          <LooseInnerPaddingExample />
        </SpacingStage>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">
          py-16 / space-y-16 ── ページのリズム
        </h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          py-16 / space-y-16
          はページ本体の外枠と、ページ内の大きなセクション同士の区切りに使います。
          このカタログの全ページがこの値で組まれています。実寸の 64px
          は枠に収まらないため、下の見本は 構成比だけを 1/4 縮尺で示しています。
        </p>
        <SpacingStage>
          <LoosePageRhythmExample />
        </SpacingStage>
      </section>
    </div>
  )
}
