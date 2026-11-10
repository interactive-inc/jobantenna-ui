import { Badge } from "@/components/ui/badge"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

function DraftChangesExample() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-2 text-sm">
        <span>ホールスタッフ</span>
        <Tooltip>
          <TooltipTrigger aria-label="編集中。公開ページには未反映です">
            <Badge variant="secondary">編集中</Badge>
          </TooltipTrigger>
          <TooltipContent>編集途中の変更があります（未反映）</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

export const tooltipDoc: ComponentDoc = {
  name: "tooltip",
  title: "ツールチップ（Tooltip）",
  category: "オーバーレイ",
  purpose: "アイコンの意味など、短い補足をカーソルやキーボードの操作で表示します。",
  patterns: [
    {
      id: "annotation",
      title: "未反映の変更を補足する",
      description: "求人票一覧の「編集中」の札に、編集中の変更が公開内容に反映されていないことを添えます。",
      previewHeight: 160,
      Demo: DraftChangesExample,
    },
  ],
  usage: {
    recommended: [
      "アイコンだけのボタンには、ツールチップを開く前にも伝わる読み上げ名を付ける。",
      "補足は短くまとめ、カーソルを重ねたときとキーボードで移動したときに表示する。",
    ],
    avoid: ["操作に必要な説明をツールチップだけに置く。本文や操作のそばに表示する。"],
  },
}
