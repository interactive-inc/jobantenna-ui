import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

/**
 * アバター・テキスト行・画像ブロックを組み合わせた基本形
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center gap-4">
        <Skeleton className="size-12 rounded-full" />

        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-48" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      <div className="flex items-center gap-2">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-16" />
      </div>
    </div>
  )
}

/**
 * 求人カード（MEDIUM）と同じレイアウトのローディングスケルトン
 */
function JobCardPattern() {
  return (
    <Card className="w-full max-w-sm gap-0 p-0">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2">
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-4 w-40" />
        </div>

        <Skeleton className="aspect-video w-full" />

        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-40" />
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>

        <Skeleton className="h-9 w-full" />
      </div>
    </Card>
  )
}

/**
 * 求人票一覧（サムネ + タイトル + 条件 + 統計）の行スケルトン
 */
function JobListPattern() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <div className="flex items-center gap-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-16 shrink-0" />

          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-4 w-16 rounded-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>

          <Skeleton className="h-3 w-24" />
        </div>

        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-16 shrink-0" />

          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-4 w-16 rounded-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-3 w-1/2" />
          </div>

          <Skeleton className="h-3 w-24" />
        </div>

        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-16 shrink-0" />

          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-4 w-16 rounded-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-2/5" />
          </div>

          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  )
}

/**
 * 管理画面ダッシュボードの KPI カード群のスケルトン
 */
function KpiCardsPattern() {
  return (
    <div className="grid w-full max-w-xl grid-cols-2 gap-4">
      <Card className="gap-0 p-0">
        <div className="flex flex-col gap-2 p-4">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-3 w-20" />
        </div>
      </Card>

      <Card className="gap-0 p-0">
        <div className="flex flex-col gap-2 p-4">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-3 w-24" />
        </div>
      </Card>

      <Card className="gap-0 p-0">
        <div className="flex flex-col gap-2 p-4">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-3 w-16" />
        </div>
      </Card>

      <Card className="gap-0 p-0">
        <div className="flex flex-col gap-2 p-4">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-3 w-24" />
        </div>
      </Card>
    </div>
  )
}

export const skeletonDoc: ComponentDoc = {
  name: "skeleton",
  title: "Skeleton",
  category: "フィードバック",
  purpose:
    "データ取得中に実コンテンツと同じ形のプレースホルダを表示し、レイアウトのがたつきを防ぐコンポーネントです。animate-pulse 付きの div に className でサイズと形を与えるだけで使えます。ジョブアンテナでは求人カードや求人票一覧、ダッシュボードの読み込み中表示に使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "アバター・テキスト行・画像ブロックの組み合わせです。className の高さ・幅・角丸を実コンテンツに合わせて調整するだけで任意のプレースホルダを作れます。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "job-card",
      title: "求人カード",
      description:
        "企業ロゴ + 企業名、メイン画像、職種名 + キャッチタイトル、勤務地・雇用形態・給与、バッジ、応募ボタンまで、実際の求人カードと同じ構成で置いたスケルトンです。読み込み完了時にレイアウトがずれません。",
      previewHeight: 560,
      Demo: JobCardPattern,
    },
    {
      id: "job-list",
      title: "求人票一覧",
      description:
        "管理画面の求人票一覧を模した行スケルトンです。ステータスタブ + サムネイル + ステータスバッジ + タイトル + 勤務条件 + 統計の行を 3 件並べ、一覧取得中の表示に使います。",
      previewHeight: null,
      Demo: JobListPattern,
    },
    {
      id: "kpi-cards",
      title: "KPI カード",
      description:
        "管理画面ダッシュボードの KPI カード（公開中の求人数・応募数・未読メッセージ・もらったいいかも）の読み込み中表示です。ラベル・数値・補足の 3 行構成をそのまま骨組みにしています。",
      previewHeight: null,
      Demo: KpiCardsPattern,
    },
  ],
}
