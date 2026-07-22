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
    value: "rounded-md (8px)",
    role: "独立した面。Button・Card・Input・Popover など、それ自体で完結する要素の外枠。",
  },
  {
    token: "--radius-inner",
    value: "rounded-sm (6px)",
    role: "面の中で繰り返される項目。メニュー項目・TabsTrigger など、外枠の内側に並ぶ要素。",
  },
] as const

const radiusCombinations = [
  {
    inner: "rounded-sm",
    matches: { "p-0.5": "rounded-md", "p-1": "rounded-lg", "p-2": "rounded-xl" },
  },
  {
    inner: "rounded-md",
    matches: { "p-0.5": "rounded-lg", "p-1": null, "p-2": null },
  },
  {
    inner: "rounded-lg",
    matches: { "p-0.5": null, "p-1": "rounded-xl", "p-2": "rounded-2xl" },
  },
  {
    inner: "rounded-xl",
    matches: { "p-0.5": null, "p-1": "rounded-2xl", "p-2": "rounded-3xl" },
  },
  {
    inner: "rounded-2xl",
    matches: { "p-0.5": null, "p-1": "rounded-3xl", "p-2": "rounded-4xl" },
  },
  {
    inner: "rounded-3xl",
    matches: { "p-0.5": null, "p-1": "rounded-4xl", "p-2": null },
  },
] as const

const insetTokens = ["p-0.5", "p-1", "p-2"] as const

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
        lead="角丸は全コンポーネントで --radius-outer と --radius-inner の 2 つの意味トークンに統一している。用途ごとに半径を発明せず、面には outer、その中の項目には inner を使う。面を入れ子にするときは、内側と外側の曲線が同じ中心を共有するよう、半径と余白の関係で決める。"
      />

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">2つの意味トークン</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          角丸に使うトークンは 2 つだけ。独立した面には <code>--radius-outer</code>
          、面の中で繰り返される項目には <code>--radius-inner</code>。Button・Card・Tabs をはじめ 19
          のコンポーネントがこの 2 つに接続していて、 用途ごとに半径を発明しない。現在は outer が
          rounded-md (8px)、inner が rounded-sm (6px)。
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
          <code>rounded-(--radius-inner)</code> と記述する。これらの意味トークンは{" "}
          <code>--radius-outer</code> が <code>--radius-md</code>、<code>--radius-inner</code> が{" "}
          <code>--radius-sm</code> に接続していて、値の変更はこの 2 行だけで全体に伝わる。
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
          外側の角から内側の角までが一定の距離なら、2本の曲線は平行になる。角だけが太ったり細ったりせず、四辺と同じ厚みに見える。
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
          <div className="w-fit max-w-full rounded-md bg-background px-4 py-2 font-mono text-sm ring-1 ring-border">
            rounded-lg = rounded-sm + p-1
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">対応する外側トークン</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          内側の rounded と間隔の p-* が交わるセルを、外側の rounded
          に使う。「一致なし」の組み合わせは、内側か間隔を変更する。
        </p>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full min-w-xl text-left text-sm">
            <thead className="bg-muted/60 text-xs text-muted-foreground">
              <tr>
                <th className="px-4 py-2 font-medium">内側</th>
                {insetTokens.map((inset) => (
                  <th key={inset} className="px-4 py-2 font-mono font-medium">
                    {inset}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {radiusCombinations.map((combination) => (
                <tr key={combination.inner}>
                  <th className="px-4 py-2 font-mono text-xs font-medium">{combination.inner}</th>
                  {insetTokens.map((inset) => {
                    const outer = combination.matches[inset]

                    return (
                      <td key={inset} className="px-4 py-2 text-xs">
                        {outer ? (
                          <code>{outer}</code>
                        ) : (
                          <span className="font-medium text-destructive">一致なし</span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">Tabs に当てはめる</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          TabsTrigger の <code>--radius-inner</code> は rounded-sm、その周りの TabsList が{" "}
          <code>p-1</code> なので、TabsList は <code>rounded-lg</code>
          にする。選択されたタブと背景の曲線が同じ流れになる。
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
        <h2 className="text-xl font-semibold tracking-tight">不一致になる組み合わせ</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          外側が小さすぎても、大きすぎても曲線は揃わない。対応表にない組み合わせへ近いトークンを無理に当てるのも避ける。
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
          を使う。ここだけは意味トークンの外側にある。
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
