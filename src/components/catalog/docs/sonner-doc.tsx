import { toast } from "sonner"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"

function SaveResult() {
  return (
    <>
      <Toaster />
      <Button onClick={() => toast("一時保存しました。")}>一時保存する</Button>
    </>
  )
}

export const sonnerDoc: ComponentDoc = {
  name: "sonner",
  title: "Sonner",
  category: "フィードバック",
  purpose: "保存や送信など、利用者が行った操作の結果を短い時間だけ表示します。",
  patterns: [
    {
      id: "basic",
      title: "一時保存の結果",
      description: "保存が完了したら、墨色の面に結果を一文で表示します。",
      previewHeight: null,
      showControls: false,
      Demo: SaveResult,
    },
  ],
  usage: {
    recommended: [
      "取り消せる操作には「取り消す」を添える。",
      "両思いでは黄色の面に相手の顔と「メッセージを書く」を表示する。",
    ],
    avoid: [
      "利用者の操作に関係のないお知らせを表示する。その場合は画面内のお知らせの帯を使う。",
      "両思い以外の結果を黄色の面に表示する。",
    ],
  },
}
