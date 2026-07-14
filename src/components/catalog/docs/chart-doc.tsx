import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const monthlyApplications = [
  { month: "1月", applications: 32, hires: 6 },
  { month: "2月", applications: 45, hires: 9 },
  { month: "3月", applications: 61, hires: 14 },
  { month: "4月", applications: 54, hires: 11 },
  { month: "5月", applications: 38, hires: 7 },
  { month: "6月", applications: 47, hires: 10 },
]

const monthlyChartConfig = {
  applications: {
    label: "応募数",
    color: "var(--chart-1)",
  },
  hires: {
    label: "採用数",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

/**
 * BarChart による月別応募数・採用数の比較
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <ChartContainer config={monthlyChartConfig} className="h-64 w-full">
        <BarChart accessibilityLayer data={monthlyApplications}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} tickMargin={8} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey="applications"
            fill="var(--color-applications)"
            radius={4}
            isAnimationActive={false}
          />
          <Bar dataKey="hires" fill="var(--color-hires)" radius={4} isAnimationActive={false} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

const channelApplications = [
  { month: "1月", search: 18, iikamo: 9, follow: 5 },
  { month: "2月", search: 24, iikamo: 13, follow: 8 },
  { month: "3月", search: 30, iikamo: 19, follow: 12 },
  { month: "4月", search: 27, iikamo: 17, follow: 10 },
  { month: "5月", search: 20, iikamo: 11, follow: 7 },
  { month: "6月", search: 25, iikamo: 14, follow: 8 },
]

const channelChartConfig = {
  search: {
    label: "検索経由",
    color: "var(--chart-1)",
  },
  iikamo: {
    label: "いいかも経由",
    color: "var(--chart-2)",
  },
  follow: {
    label: "フォロー経由",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

/**
 * stackId を揃えたチャネル別応募数の積み上げ棒グラフ
 */
function ChannelStackedPattern() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <ChartContainer config={channelChartConfig} className="h-64 w-full">
        <BarChart accessibilityLayer data={channelApplications}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} tickMargin={8} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey="search"
            stackId="applications"
            fill="var(--color-search)"
            isAnimationActive={false}
          />
          <Bar
            dataKey="iikamo"
            stackId="applications"
            fill="var(--color-iikamo)"
            isAnimationActive={false}
          />
          <Bar
            dataKey="follow"
            stackId="applications"
            fill="var(--color-follow)"
            radius={[4, 4, 0, 0]}
            isAnimationActive={false}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

const dailyViews = [
  { day: "月", views: 142 },
  { day: "火", views: 168 },
  { day: "水", views: 155 },
  { day: "木", views: 190 },
  { day: "金", views: 210 },
  { day: "土", views: 176 },
  { day: "日", views: 199 },
]

const viewsChartConfig = {
  views: {
    label: "閲覧数",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

/**
 * KPI カードに AreaChart を組み合わせた閲覧数の推移表示
 */
function ViewsTrendPattern() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardDescription>求人票の閲覧数（直近7日間）</CardDescription>
        <CardTitle className="text-2xl tabular-nums">1,240</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={viewsChartConfig} className="h-32 w-full">
          <AreaChart accessibilityLayer data={dailyViews}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} tickMargin={8} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Area
              dataKey="views"
              type="monotone"
              fill="var(--color-views)"
              fillOpacity={0.2}
              stroke="var(--color-views)"
              isAnimationActive={false}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export const chartDoc: ComponentDoc = {
  name: "chart",
  title: "Chart",
  category: "データ表示",
  purpose:
    "応募数や閲覧数などの数値データをグラフで可視化するコンポーネント。recharts をラップし、ChartConfig でラベルと色を一元管理して --color-* CSS 変数として参照できる。jobantenna では管理画面ダッシュボードの月別応募数や求人票の閲覧数推移の表示に使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "BarChart による月別の応募数・採用数の比較。ChartConfig で定義した色を fill の var(--color-*) で参照する。recharts 3.8.0 のバグで初期アニメーション中に棒が描画されないため、Bar には必ず isAnimationActive={false} を付ける。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "channel-stacked",
      title: "チャネル別積み上げ",
      description:
        "stackId を揃えて応募チャネル（検索経由・いいかも経由・フォロー経由）の内訳を積み上げ表示する例。合計の推移と内訳の割合を同時に見せたいときに使う。角丸は最上段の Bar だけに付ける。",
      previewHeight: null,
      Demo: ChannelStackedPattern,
    },
    {
      id: "views-trend",
      title: "閲覧数の推移カード",
      description:
        "KPI カードに小さな AreaChart を組み合わせた例。管理画面ダッシュボードで累計値と直近の推移をひと目で伝える。",
      previewHeight: null,
      Demo: ViewsTrendPattern,
    },
  ],
}
