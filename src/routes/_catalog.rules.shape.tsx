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
    value: "rounded-lg (8px)",
    role: "独立した面。Button・Card・Input・Popover など、それ自体で完結する要素の外枠。",
  },
  {
    token: "--radius-inner",
    value: "rounded-sm (4px)",
    role: "面の中で繰り返される項目。メニュー項目・TabsTrigger など、外枠の内側に並ぶ要素。",
  },
] as const

const comparisonExamples = [
  {
    issue: "外側に rounded-md を発明している。面の外枠は常に rounded-lg (outer)",
    before: { outer: "rounded-md", inset: "p-1", inner: "rounded-sm" },
    after: { outer: "rounded-lg", inset: "p-1", inner: "rounded-sm" },
  },
  {
    issue: "余白を p-2 に広げても、外側を rounded-xl に大きくしない。半径は余白に追従させない",
    before: { outer: "rounded-xl", inset: "p-2", inner: "rounded-sm" },
    after: { outer: "rounded-lg", inset: "p-2", inner: "rounded-sm" },
  },
  {
    issue: "外側に rounded-2xl を発明している。大きい面でも外枠は rounded-lg (outer)",
    before: { outer: "rounded-2xl", inset: "p-2", inner: "rounded-sm" },
    after: { outer: "rounded-lg", inset: "p-2", inner: "rounded-sm" },
  },
  {
    issue: "内側に rounded-md を発明している。中の項目は常に rounded-sm (inner)",
    before: { outer: "rounded-lg", inset: "p-1", inner: "rounded-md" },
    after: { outer: "rounded-lg", inset: "p-1", inner: "rounded-sm" },
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
        <span className={`text-xs font-semibold ${isBefore ? "text-destructive" : "text-green3"}`}>
          {isBefore ? "不一致" : "一致"}
        </span>
      </div>
      <div className="relative h-32 overflow-hidden rounded-md border bg-muted/30">
        <div
          className={`absolute top-4 left-4 size-20 origin-top-left scale-[2.5] ${props.tokens.outer} ${props.tokens.inset} ${isBefore ? "bg-destructive/25 ring-destructive/60" : "bg-green2/25 ring-green2/60"} ring-1`}
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
 * 角丸を outer / inner の 2 つの意味トークンの固定ペアだけで決めるルール
 */
function ShapePage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16 md:px-10">
      <RulePageHeader
        title="形"
        lead="角丸は全コンポーネントで --radius-outer と --radius-inner の 2 つの意味トークンに統一しています。用途ごとに半径を発明せず、面には outer、その中の項目には inner を使います。面を入れ子にしても余白を広げても、使う半径はこの 2 つから増やしません。"
      />

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">2つの意味トークン</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          角丸に使うトークンは 2 つだけです。独立した面には <code>--radius-outer</code>
          、面の中で繰り返される項目には <code>--radius-inner</code>。Button・Card・Tabs をはじめ 36
          のコンポーネントがこの 2 つに接続していて、 用途ごとに半径を発明しません。現在は outer が
          rounded-lg (8px)、inner が rounded-sm (4px) です。
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
          <code>rounded-(--radius-inner)</code> と記述します。<code>--radius-outer</code> は{" "}
          <code>--radius-lg</code>、<code>--radius-inner</code> は <code>--radius-sm</code>{" "}
          にそのまま固定していて、値を独自に計算しません。面の大きさを変えたいときは接続先の 2
          行を差し替えれば全体に伝わります。
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
        <h2 className="text-xl font-semibold tracking-tight">入れ子でもペアは変えない</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          面の中に項目が入っても、間の余白を <code>p-1</code> から広げても、外側は outer・内側は
          inner のままです。余白に合わせて <code>rounded-xl</code> や <code>rounded-2xl</code>{" "}
          など中間の半径を持ち出した時点で不一致になります。
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
            <dd className="text-muted-foreground">余白ルールに従って選ぶ。半径には影響しない</dd>
          </dl>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">Tabs に当てはめる</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          TabsList は面なので <code>rounded-(--radius-outer)</code>、その中の TabsTrigger
          は項目なので <code>rounded-(--radius-inner)</code>。ここでも使う半径はペアの 2
          つだけで、個別の値を選びません。
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
          を面と項目に手で当てると、面ごとに角の表情がばらつきます。外側は rounded-lg
          (outer)、内側は rounded-sm (inner)。それ以外の半径を持ち出した組み合わせが不一致です。
          サンプルは角を見やすくするため 2.5 倍に拡大表示しています。
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
