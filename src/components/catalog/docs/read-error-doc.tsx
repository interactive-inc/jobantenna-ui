import { CircleAlert } from "lucide-react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

function InlineFailure() {
  return (
    <Alert variant="destructive" className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <CircleAlert className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
        <div className="grid min-w-0 gap-1">
          <AlertTitle className="font-bold">新着通知の確認に失敗しました</AlertTitle>
          <p className="text-foreground">
            通信を確かめて、もう一度読み込んでください。読み込めた内容は引き続き見られます。
          </p>
        </div>
      </div>
      <Button type="button" variant="secondary" className="self-start sm:self-auto">
        もう一度読み込む
      </Button>
    </Alert>
  )
}

function PageFailure() {
  return (
    <Empty className="px-3 py-6 sm:px-6">
      <EmptyHeader>
        <EmptyMedia className="text-muted-foreground">
          <CircleAlert className="size-7" strokeWidth={1.75} aria-hidden />
        </EmptyMedia>
        <EmptyTitle role="heading" aria-level={2} className="font-bold">
          ページを読み込めませんでした
        </EmptyTitle>
        <EmptyDescription>
          通信が切れたか、時間がかかりすぎました。しばらく待ってから、もう一度読み込んでください。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button type="button">もう一度読み込む</Button>
      </EmptyContent>
    </Empty>
  )
}

export const readErrorDoc: ComponentDoc = {
  name: "read-error",
  title: "読み込みの失敗",
  category: "フィードバック",
  purpose: "読み込めなかった内容と、もう一度読み込む操作を示します。",
  patterns: [
    {
      id: "inline",
      title: "一部を読み込めなかったとき",
      description: "読み込めた内容を残し、失敗した箇所にエラーの帯とSecondaryのボタンを置きます。",
      previewHeight: null,
      showControls: false,
      Demo: InlineFailure,
    },
    {
      id: "page",
      title: "ページ全体を読み込めなかったとき",
      description: "中央に見出しと説明を置き、Primaryのボタンで再読み込みを案内します。",
      previewHeight: null,
      showControls: false,
      Demo: PageFailure,
    },
  ],
  usage: {
    recommended: [
      "何を読み込めなかったかを伝え、操作名は「もう一度読み込む」にする。",
      "読み込み直している間はボタンを無効にする。",
    ],
    avoid: ["エラーコードなどの技術的な情報を表示する。"],
  },
}
