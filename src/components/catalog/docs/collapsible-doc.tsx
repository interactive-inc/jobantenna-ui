import { SlidersHorizontalIcon } from "lucide-react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function MessageFiltersExample() {
  return (
    <Collapsible className="w-full max-w-sm border-b px-4 pt-2">
      <div className="flex min-h-9 items-center justify-end">
        <CollapsibleTrigger
          render={<Button variant="ghost" size="sm" className="text-muted-foreground" />}
        >
          <SlidersHorizontalIcon data-icon="inline-start" strokeWidth={1.75} aria-hidden />
          絞り込み
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="grid max-h-48 gap-2 overflow-y-auto py-3">
        <Select defaultValue="未応募含む">
          <SelectTrigger className="w-full" aria-label="応募フィルター">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="未応募含む">未応募含む</SelectItem>
            <SelectItem value="応募あり">応募あり</SelectItem>
            <SelectItem value="応募なし">応募なし</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="既読含む">
          <SelectTrigger className="w-full" aria-label="既読フィルター">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="既読含む">既読含む</SelectItem>
            <SelectItem value="未読">未読</SelectItem>
            <SelectItem value="既読">既読</SelectItem>
          </SelectContent>
        </Select>
      </CollapsibleContent>
    </Collapsible>
  )
}

export const collapsibleDoc: ComponentDoc = {
  name: "collapsible",
  title: "折りたたみ（Collapsible）",
  category: "レイアウト",
  purpose: "同じ画面の中で、必要なときに補足情報や詳しい条件を開けるようにします。",
  patterns: [
    {
      id: "search-filter",
      title: "やりとりの絞り込み",
      description: "やりとり一覧の「絞り込み」から、応募や既読の条件を開きます。",
      previewHeight: 320,
      Demo: MessageFiltersExample,
    },
  ],
  usage: {
    recommended: [
      "何が開くか分かるラベルをボタンに付け、開く領域のすぐ上に置く。",
      "未読への切り替えなど、頻繁に使う操作は折りたたみの外に置く。",
    ],
    avoid: ["操作に必須の入力や、入力エラーを閉じた領域に隠す。"],
  },
}
