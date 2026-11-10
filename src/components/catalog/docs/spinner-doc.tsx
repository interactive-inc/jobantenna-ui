import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

function BasicPattern() {
  return (
    <div className="flex items-center gap-6">
      <Spinner />
      <Spinner className="size-5" />
    </div>
  )
}

function ButtonLoadingPattern() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled aria-busy="true">
        <Spinner aria-hidden="true" />
        検索中…
      </Button>
    </div>
  )
}

function LoadingPlaceholderPattern() {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground" role="status">
      <Spinner className="size-5" aria-hidden="true" />
      追加のメッセージを読み込み中…
    </div>
  )
}

export const spinnerDoc: ComponentDoc = {
  name: "spinner",
  title: "スピナー",
  category: "フィードバック",
  purpose: "ボタンを押した後や、一覧の続きを取得する間の短い待ち時間を示します。",
  patterns: [
    {
      id: "basic",
      title: "16・20",
      description: "小さい操作には16、読み込みの文言に添える場合は20を使います。",
      previewHeight: null,
      showControls: false,
      Demo: BasicPattern,
    },
    {
      id: "button-loading",
      title: "ボタンの処理中",
      description: "処理が終わるまでボタンを無効にし、何を処理しているかをラベルで伝えます。",
      previewHeight: null,
      showControls: false,
      Demo: ButtonLoadingPattern,
    },
    {
      id: "loading-placeholder",
      title: "追加の読み込み",
      description:
        "一覧の続きを読み込む間は表示済みの内容を残します。ページの初期表示にはスケルトン、完了までの割合が分かる場合は進捗バーを使います。",
      previewHeight: null,
      showControls: false,
      Demo: LoadingPlaceholderPattern,
    },
  ],
  usage: {
    recommended: ["スピナーだけで待機を示す場合は、読み上げでも「読み込み中」と伝える。"],
    avoid: [
      "ページの初期表示に使う。画面の構成が決まっている場合はスケルトンを使う。",
      "完了の割合が分かる処理に使う。その場合は進捗バーを使う。",
    ],
  },
}
