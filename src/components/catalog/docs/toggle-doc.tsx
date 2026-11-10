import { useState } from "react"
import { CheckIcon } from "lucide-react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Toggle } from "@/components/ui/toggle"

function FilterChipExample() {
  const [selected, setSelected] = useState(false)

  return (
    <Toggle variant="filter" size="lg" pressed={selected} onPressedChange={setSelected}>
      {selected && <CheckIcon data-icon="inline-start" strokeWidth={1.75} aria-hidden="true" />}
      1週間以内にログイン
      <span className="text-(--ja-filter-chip-count) group-aria-pressed/toggle:text-input">412</span>
    </Toggle>
  )
}

export const toggleDoc: ComponentDoc = {
  name: "toggle",
  title: "フィルターチップ（Toggle）",
  category: "アクション",
  purpose: "一覧の絞り込み条件を、その場で選択・解除するために使います。",
  patterns: [
    {
      id: "filter-chip",
      title: "フィルターチップ",
      description:
        "白地のチップを選ぶと、墨地に白い文字とチェックを表示します。高さ40px、左右の余白は16pxです。チェックが付くと左の余白は12pxになり、16pxのアイコンと文字の間は8pxです。",
      previewHeight: 190,
      Demo: FilterChipExample,
    },
  ],
  usage: {
    recommended: [
      "候補者一覧では、求人の選択欄の横に、よく使う絞り込み条件を置く。",
      "一覧の上に、選択欄、フィルターチップ、フリーワード検索の順で並べる。",
      "スマートフォンの検索条件パネルでは、よく使う条件のチップを先頭に縦に並べ、下部の検索ボタンで適用する。",
      "チップ同士は8px、ほかの操作との間は16px空ける。",
      "該当人数を表示する場合は条件名の右に添え、人数が不要な場合は省略する。",
      "条件名は選択前後で変えず、チェックの有無で選択を示す。",
    ],
    avoid: ["一覧全体の検索結果件数をチップに入れる。件数は結果一覧に表示する。"],
  },
}
