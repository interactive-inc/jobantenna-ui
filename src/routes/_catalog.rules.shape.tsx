import { createFileRoute } from "@tanstack/react-router"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RulePageHeader } from "@/components/catalog/rule-page-header"
import { sampleCanvasStyle } from "@/components/catalog/sample-canvas-style"
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute("/_catalog/rules/shape")({
  component: ShapePage,
})

const semanticTokens = [
  {
    token: "--radius-outer",
    value: "rounded-lg (10px)",
    role: "独立した面。Button・Card・Input・Popover など、それ自体で完結する要素の外枠。",
  },
  {
    token: "--radius-inner",
    value: "outer − p-1 (6px)",
    role: "面の中で繰り返される項目。メニュー項目・TabsTrigger など、外枠の内側に並ぶ要素。outer から p-1 を引いた値として計算されます。",
  },
] as const

const comparisonExamples = [
  {
    issue: "p-1 に対して、左の外側は丸みが足りない",
    before: { outer: "rounded-md", inset: "p-1", inner: "rounded-sm" },
    after: { outer: "rounded-lg", inset: "p-1", inner: "rounded-sm" },
  },
  {
    issue: "p-2 に対して、左の外側は丸みが足りない",
    before: { outer: "rounded-lg", inset: "p-2", inner: "rounded-sm" },
    after: { outer: "rounded-xl", inset: "p-2", inner: "rounded-sm" },
  },
  {
    issue: "p-2 に対して、左の外側は丸みが大きすぎる",
    before: { outer: "rounded-2xl", inset: "p-2", inner: "rounded-sm" },
    after: { outer: "rounded-xl", inset: "p-2", inner: "rounded-sm" },
  },
  {
    issue: "rounded-md + p-1 には対応する外側がないため、内側を変更する",
    before: { outer: "rounded-xl", inset: "p-1", inner: "rounded-md" },
    after: { outer: "rounded-xl", inset: "p-1", inner: "rounded-lg" },
  },
] as const

type CurvatureTokens = (typeof comparisonExamples)[number]["before" | "after"]
type CurvatureComparisonProps = (typeof comparisonExamples)[number]

type CurvatureCornerProps = {
  tokens: CurvatureTokens
  state: "before" | "after"
}

/**
 * 角だけを拡大し、内外の曲線間隔を見せる
 */
function CurvatureCorner(props: CurvatureCornerProps) {
  const isBefore = props.state === "before"

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className={`text-xs font-semibold ${isBefore ? "text-destructive" : "text-success"}`}>
          {isBefore ? "不一致" : "一致"}
        </span>
      </div>
      <div className="relative h-32 overflow-hidden rounded-md border bg-muted/30">
        <div
          className={`absolute top-4 left-4 size-20 origin-top-left scale-[2.5] ${props.tokens.outer} ${props.tokens.inset} ${isBefore ? "bg-destructive/25 ring-destructive/60" : "bg-success/25 ring-success/60"} ring-1`}
        >
          <div
            className={`${props.tokens.inner} size-full bg-background ring-1 ring-foreground/25`}
          />
        </div>
      </div>
      <code className="block text-xs leading-relaxed">
        {props.tokens.outer} / {props.tokens.inset} / {props.tokens.inner}
      </code>
    </div>
  )
}

/**
 * 同じ条件の不一致と一致を一組で比較する
 */
function CurvatureComparison(props: CurvatureComparisonProps) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium">{props.issue}</p>
      <div className="grid grid-cols-2 gap-4">
        <CurvatureCorner tokens={props.before} state="before" />
        <CurvatureCorner tokens={props.after} state="after" />
      </div>
    </div>
  )
}

/**
 * 角丸の意味トークンと、入れ子になった面の曲率を半径と余白の関係で決めるルール
 */
function ShapePage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16 md:px-10">
      <RulePageHeader
        title="形"
        lead="角丸は全コンポーネントで --radius-outer と --radius-inner の 2 つの意味トークンに統一しています。用途ごとに半径を発明せず、面には outer、その中の項目には inner を使います。面を入れ子にするときは、内側と外側の曲線が同じ中心を共有するよう、半径と余白の関係で決めます。"
      />

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">2つの意味トークン</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          角丸に使うトークンは 2 つだけです。独立した面には <code>--radius-outer</code>
          、面の中で繰り返される項目には <code>--radius-inner</code>。Button・Card・Tabs をはじめ 36
          のコンポーネントがこの 2 つに接続していて、 用途ごとに半径を発明しません。現在は outer が
          rounded-lg (10px)、inner が outer から p-1 を引いた 6px です。
        </p>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full min-w-xl text-left text-sm">
            <thead className="bg-muted/60 text-xs text-muted-foreground">
              <tr>
                <th className="px-4 py-2 font-medium">トークン</th>
                <th className="px-4 py-2 font-medium">現在値</th>
                <th className="px-4 py-2 font-medium">用途</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {semanticTokens.map((semanticToken) => (
                <tr key={semanticToken.token}>
                  <th className="px-4 py-2 font-mono text-xs font-medium">{semanticToken.token}</th>
                  <td className="px-4 py-2 font-mono text-xs">{semanticToken.value}</td>
                  <td className="px-4 py-2 text-xs text-muted-foreground">{semanticToken.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          コンポーネントでは <code>rounded-(--radius-outer)</code> または{" "}
          <code>rounded-(--radius-inner)</code> と記述します。<code>--radius-outer</code> が{" "}
          <code>--radius-lg</code> に接続し、<code>--radius-inner</code> は{" "}
          <code>calc(var(--radius-outer) - var(--spacing))</code>
          として計算されます。inner が outer に追従するので、面の大きさを変えたいときは outer の 1
          行だけを差し替えれば全体に伝わります。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex flex-wrap items-center gap-6 rounded-lg bg-background p-4 text-foreground"
        >
          <div className="flex flex-col items-start gap-1">
            <Button>応募する</Button>
            <code className="text-xs text-muted-foreground">rounded-(--radius-outer)</code>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Card size="sm" className="w-56">
              <CardContent>
                <span className="text-sm font-medium">ホールスタッフ</span>
                <p className="text-xs text-muted-foreground">那覇市 / 正社員</p>
              </CardContent>
            </Card>
            <code className="text-xs text-muted-foreground">rounded-(--radius-outer)</code>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Tabs defaultValue="jobs">
              <TabsList>
                <TabsTrigger value="jobs">おすすめ</TabsTrigger>
                <TabsTrigger value="new">新着</TabsTrigger>
              </TabsList>
            </Tabs>
            <code className="text-xs text-muted-foreground">
              TabsTrigger = rounded-(--radius-inner)
            </code>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">半径は余白の分だけ大きくする</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          外側の角から内側の角までが一定の距離なら、2本の曲線は平行になります。角だけが太ったり細ったりせず、四辺と同じ厚みに見えます。
        </p>
        <div className="space-y-4 rounded-lg border bg-muted/30 p-4">
          <div className="space-y-4">
            <div className="font-mono text-xl font-semibold tracking-tight md:text-2xl">
              外側の rounded = 内側の rounded + padding
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
              <dt className="font-mono font-semibold">外側</dt>
              <dd className="text-muted-foreground">コンテナの rounded トークン</dd>
              <dt className="font-mono font-semibold">内側</dt>
              <dd className="text-muted-foreground">子要素の rounded トークン</dd>
              <dt className="font-mono font-semibold">padding</dt>
              <dd className="text-muted-foreground">間を空ける p-* トークン</dd>
            </dl>
          </div>
          <div className="w-fit max-w-full rounded-(--radius-inner) bg-background px-4 py-2 font-mono text-sm ring-1 ring-border">
            --radius-outer (10px) = --radius-inner (6px) + p-1 (4px)
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">inner は計算済み</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          <code>--radius-inner</code> は <code>--radius-outer</code> から <code>p-1</code>
          を引いた値として定義しています。面に outer、その中の項目に inner を書き、間を{" "}
          <code>p-1</code> 空けるだけで、外側と内側の曲線は必ず同心になります。半径と余白の対応を
          個別に計算する必要はありません。
        </p>
        <div className="space-y-3 rounded-(--radius-outer) border bg-muted/30 p-4">
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
            <dt className="font-mono font-semibold">面</dt>
            <dd className="text-muted-foreground">
              <code>rounded-(--radius-outer)</code>
            </dd>
            <dt className="font-mono font-semibold">その中の項目</dt>
            <dd className="text-muted-foreground">
              <code>rounded-(--radius-inner)</code>
            </dd>
            <dt className="font-mono font-semibold">間</dt>
            <dd className="text-muted-foreground">
              <code>p-1</code>
            </dd>
          </dl>
          <p className="text-sm text-muted-foreground">
            この 3 つだけで同心が定義上保証されます。<code>--radius-inner</code> は{" "}
            <code>calc(var(--radius-outer) - var(--spacing))</code> なので、<code>p-1</code>{" "}
            の分がちょうど内側で戻り、2 本の曲線が平行になります。
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">Tabs に当てはめる</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          TabsList は面なので <code>rounded-(--radius-outer)</code>、その中の TabsTrigger
          は項目なので <code>rounded-(--radius-inner)</code>、間は <code>p-1</code>。3
          つを書くだけで、選択されたタブと背景の曲線が同心になります。outer
          の値を変えても、この関係は崩れません。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex flex-col items-start gap-4 rounded-lg bg-background p-4 text-foreground"
        >
          <Tabs defaultValue="jobs">
            <TabsList>
              <TabsTrigger value="jobs">おすすめ</TabsTrigger>
              <TabsTrigger value="new">新着</TabsTrigger>
              <TabsTrigger value="saved">保存済み</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">生トークンで組むと崩れる</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          2 つの意味トークンを使わず、生の rounded-*
          を面と項目に手で当てると同心が崩れます。外側が小さすぎても大きすぎても曲線は揃いません。だからこそ
          outer / inner / <code>p-1</code> の 3 つに寄せて、半径を個別に選ばないようにします。
        </p>
        <div
          style={sampleCanvasStyle}
          className="grid gap-2 rounded-lg bg-background p-4 text-foreground"
        >
          {comparisonExamples.map((example, index) => (
            <div key={example.issue}>
              {index > 0 && <Separator className="my-4" />}
              <CurvatureComparison {...example} />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">rounded-full — 円形・トラック形状</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          Avatar、Switch、Slider、Progress、RadioGroup
          など、円とトラック(細長い丸)にはスケールでなく rounded-full
          を使います。ここだけは意味トークンの外側にあります。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex flex-wrap items-center gap-4 rounded-lg bg-background p-4 text-foreground"
        >
          <Avatar>
            <AvatarFallback>比</AvatarFallback>
          </Avatar>
          <Switch defaultChecked />
          <div className="h-2 w-40 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-2/3 rounded-full bg-primary" />
          </div>
        </div>
      </section>
    </div>
  )
}
