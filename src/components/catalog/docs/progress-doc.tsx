import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"

/**
 * ラベルと値表示を組み合わせた基本形
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Progress value={60}>
        <ProgressLabel>応募書類の準備</ProgressLabel>
        <ProgressValue />
      </Progress>

      <Progress value={100}>
        <ProgressLabel>会員登録</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  )
}

export const progressDoc: ComponentDoc = {
  name: "progress",
  title: "進捗バー（Progress）",
  category: "フィードバック",
  purpose:
    "作業全体のうち、どれだけ済んだかを横のバーで示します。",
  patterns: [
    {
      id: "basic",
      title: "進行中と完了",
      description:
        "左に作業名、右に百分率を表示します。進行中のバーは墨、完了したら緑で表示します。",
      showControls: false,
      previewHeight: null,
      Demo: BasicPattern,
    },
  ],
  usage: {
    recommended: [
      "全体に対する完了の割合が分かるときに使う。",
      "左に作業名、右に「60%」のような百分率を Inter で表示する。",
      "高さ12pxの丸いバーを使い、進行中は墨、完了は緑で示す。",
    ],
    avoid: ["完了までの割合が分からない待機に使う。その場合はスピナーを使う。"],
  },
}
