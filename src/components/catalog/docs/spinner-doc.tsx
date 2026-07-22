import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"

/**
 * className の size-* によるサイズ展開
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md items-end gap-4">
      <div className="flex flex-col items-center gap-1">
        <Spinner />
        <span className="text-xs text-muted-foreground">size-4</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Spinner className="size-6" />
        <span className="text-xs text-muted-foreground">size-6</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Spinner className="size-8" />
        <span className="text-xs text-muted-foreground">size-8</span>
      </div>
    </div>
  )
}

/**
 * 通常時と送信中を並べたボタン内ローディング
 */
function ButtonLoadingPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">検索フッター（通常 → 検索中）</span>
        <div className="flex flex-wrap items-center gap-2">
          <Button>128件 検索する</Button>
          <Button disabled>
            <Spinner />
            検索中…
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">応募ボタン（通常 → 送信中）</span>
        <div className="flex flex-wrap items-center gap-2">
          <Button>応募する</Button>
          <Button disabled>
            <Spinner />
            応募を送信中…
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">求人票の一時保存</span>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" disabled>
            <Spinner />
            一時保存中…
          </Button>
        </div>
      </div>
    </div>
  )
}

/**
 * 一覧やメッセージ欄が空の間の読み込み中プレースホルダ
 */
function LoadingPlaceholderPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Card className="p-0 gap-0">
        <div className="flex flex-col items-center gap-2 p-4">
          <Spinner className="size-6" />
          <p className="text-sm text-muted-foreground">那覇市の求人を読み込み中…</p>
        </div>
      </Card>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Spinner />
        メッセージを読み込み中…
      </div>
    </div>
  )
}

export const spinnerDoc: ComponentDoc = {
  name: "spinner",
  title: "Spinner",
  category: "フィードバック",
  purpose:
    "処理が進行中であることを示す回転インジケータです。求人検索や応募の送信など、結果を待つ間に操作が受け付けられたことを伝える場面で使います。Loader2Icon ベースの単一 SVG で、className の size-* だけでサイズを変えられます。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "className の size-* によるサイズ展開です。デフォルトは size-4 で、ボタン内やインラインはそのまま、セクション全体の読み込みには size-6〜8 を使います。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "button-loading",
      title: "ボタン内ローディング",
      description:
        "送信中のボタンは disabled にして Spinner を先頭に置き、ラベルを進行中の文言に差し替えます。検索フッターや応募ボタンの二重送信防止と待機表示を兼ねます。",
      previewHeight: null,
      Demo: ButtonLoadingPattern,
    },
    {
      id: "loading-placeholder",
      title: "読み込み中プレースホルダ",
      description:
        "求人一覧やメッセージ欄のデータ到着前に、中央寄せの Spinner と読み込み中の文言で待機状態を示します。読み込み完了後にコンテンツへ差し替えます。",
      previewHeight: null,
      Demo: LoadingPlaceholderPattern,
    },
  ],
}
