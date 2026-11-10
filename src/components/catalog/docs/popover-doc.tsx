import { CircleHelpIcon } from "lucide-react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

function ActivityHelp() {
  return (
    <Popover>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold">アンテナ</span>
        <PopoverTrigger
          aria-label="アンテナの説明を開く"
          render={<Button type="button" variant="ghost" size="icon-sm" />}
        >
          <CircleHelpIcon aria-hidden="true" />
        </PopoverTrigger>
      </div>
      <PopoverContent>
        <PopoverTitle>アンテナ</PopoverTitle>
        <PopoverDescription>候補者が最後にログインした時期を、棒と文言で示します。</PopoverDescription>
      </PopoverContent>
    </Popover>
  )
}

export const popoverDoc: ComponentDoc = {
  name: "popover",
  title: "ポップオーバー（Popover）",
  category: "オーバーレイ",
  purpose: "短い説明や小さな入力欄を、操作したボタンの近くに開きます。",
  patterns: [
    {
      id: "antenna-level-help",
      title: "用語の補足",
      description: "読み方が分かりにくい用語に、すぐ確認できる説明を添えます。",
      previewHeight: 250,
      showControls: false,
      Demo: ActivityHelp,
    },
  ],
  usage: {
    recommended: ["内容と開くボタンを近くに置き、アイコンだけの場合は読み上げ名を付ける。"],
    avoid: ["長い一覧や入力画面を入れる。その場合はシートなど、内容を読む場所を確保する。"],
  },
}
