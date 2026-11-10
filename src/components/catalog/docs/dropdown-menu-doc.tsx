import { EllipsisIcon } from "lucide-react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function MoreActionsExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="ほかの操作"
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-(--ja-control-height)"
          />
        }
      >
        <EllipsisIcon aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>複製する</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>掲載を停止する</DropdownMenuItem>
        <DropdownMenuItem>削除する</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const dropdownMenuDoc: ComponentDoc = {
  name: "dropdown-menu",
  title: "ドロップダウンメニュー（Dropdown Menu）",
  category: "オーバーレイ",
  purpose:
    "対象ごとの補助操作をまとめるメニューです。求人票の操作をまとめる場合は、各項目を「複製する」のように動詞で書きます。メニューの幅の目安は200〜280px、各項目の最小高さは44px、上下の内側の余白は8pxです。項目にフォーカスすると、行の幅いっぱいに背景色が付きます。",
  patterns: [
    {
      id: "icon-trigger",
      title: "アイコンで開く",
      description:
        "行末の三点アイコンからメニューを開き、ボタンの右端に揃えます。押せる範囲は40px四方、角丸は8pxです。読み上げ名は「ほかの操作」にします。",
      previewHeight: 320,
      Demo: MoreActionsExample,
    },
  ],
  usage: {
    recommended: [
      "複製や公開停止など、たまに使う操作をまとめる。",
      "停止と削除は下にまとめ、ほかの操作と区切り線で分ける。",
      "項目を選んだらメニューを閉じる。",
    ],
    avoid: [
      "よく使う操作をメニューに入れる。直接押せる位置に置く。",
      "取り消せない操作を選んだ時点で実行する。確認ダイアログを開く。",
    ],
  },
}
