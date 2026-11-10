import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

function CandidateSummarySkeleton() {
  return (
    <Card variant="surface" className="w-full max-w-md p-4">
      <div className="flex items-center gap-4" role="status">
        <span className="sr-only">読み込み中</span>
        <Skeleton className="size-10 shrink-0 rounded-full" aria-hidden="true" />
        <div className="grid min-w-0 flex-1 gap-2" aria-hidden="true">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-3/4" />
        </div>
      </div>
    </Card>
  )
}

function PageSkeleton() {
  return (
    <div className="grid w-full max-w-xl gap-4" role="status">
      <span className="sr-only">読み込み中</span>
      <Skeleton className="h-8 w-48 max-w-full" aria-hidden="true" />
      <Skeleton className="h-24 w-full" aria-hidden="true" />
      <Skeleton className="h-24 w-full" aria-hidden="true" />
      <Skeleton className="h-24 w-full" aria-hidden="true" />
    </div>
  )
}

export const skeletonDoc: ComponentDoc = {
  name: "skeleton",
  title: "Skeleton",
  category: "フィードバック",
  purpose: "初回の読み込み中に、これから表示する見出しや本文の形を先に示します。",
  patterns: [
    {
      id: "basic",
      title: "候補者の概要",
      description: "顔写真が入る場所は丸にし、名前と補足が入る位置に短い帯を置きます。",
      showControls: false,
      previewHeight: null,
      Demo: CandidateSummarySkeleton,
    },
    {
      id: "job-list",
      title: "ページの初回表示",
      description: "ページの枠を残し、見出しと本文の位置に読み込み中の形を置きます。",
      showControls: false,
      previewHeight: null,
      Demo: PageSkeleton,
    },
  ],
  usage: {
    recommended: [
      "読み込み後の内容と同じ並び・大きさの枠を先に確保する。",
      "表では読み込み中も見出しと列の配置を保ち、幅を指定する列は表示後と同じ定義を使う。",
      "先に表示できる見出しや戻るリンクは表示し、取得を待つ一覧や本文にスケルトンを使う。",
      "読み上げでは、領域ごとに「読み込み中」と一度伝える。",
    ],
    avoid: [
      "ページ全体を真っ白にしたまま待たせる。",
      "続きを取得するたびに、表示済みの内容までスケルトンに置き換える。",
    ],
  },
}
