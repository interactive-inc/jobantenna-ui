import { useState } from "react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

function EmploymentOptions() {
  return (
    <div className="grid w-full max-w-xs gap-2" role="group" aria-label="希望する雇用形態">
      <Label className="min-h-6 w-full cursor-pointer">
        <Checkbox name="employment" value="fulltime" defaultChecked />
        正社員
      </Label>
      <Label className="min-h-6 w-full cursor-pointer">
        <Checkbox name="employment" value="contract" />
        契約社員
      </Label>
      <Label className="min-h-6 w-full cursor-pointer">
        <Checkbox name="employment" value="parttime" />
        アルバイト・パート
      </Label>
    </div>
  )
}

function RowSelection() {
  const [selected, setSelected] = useState(true)

  return (
    <div className="grid w-full max-w-md gap-3">
      <div className="flex items-center gap-3 rounded-(--radius-outer) border bg-card p-3">
        <Checkbox
          aria-label="ホールスタッフの求人を選択"
          checked={selected}
          onCheckedChange={setSelected}
        />
        <span className="text-sm">ホールスタッフ</span>
      </div>
      {selected && (
        <Card className="flex flex-wrap items-center justify-between gap-2 p-3 shadow-(--ja-shadow-floating) sm:flex-row">
          <span className="text-sm font-bold" role="status">
            1件を選択中
          </span>
          <Button type="button" variant="link" size="sm" onClick={() => setSelected(false)}>
            選ぶのをやめる
          </Button>
        </Card>
      )}
    </div>
  )
}

export const checkboxDoc: ComponentDoc = {
  name: "checkbox",
  title: "Checkbox",
  category: "フォーム",
  purpose:
    "複数の項目を選んだり、保存時に確定する設定を選んだりするときに使います。四角は16px、角丸は4pxです。",
  patterns: [
    {
      id: "basic",
      title: "ラベル付き",
      description:
        "ラベルも押せるようにし、行の高さは24px以上、行同士の間隔は8pxにします。長いラベルは折り返せます。",
      showControls: false,
      previewHeight: null,
      Demo: EmploymentOptions,
    },
    {
      id: "candidate-bulk-select",
      title: "一覧の行選択",
      description:
        "行の左端にチェックボックスを置きます。選択があるときだけ一括操作バーを表示し、選んだ件数と選択解除を左、まとめて行う操作を右に置きます。",
      showControls: false,
      previewHeight: null,
      Demo: RowSelection,
    },
  ],
  usage: {
    recommended: [
      "複数選べる条件や、保存ボタンで確定する設定に使う。",
      "ラベル付きの選択肢は、ラベルを含む行全体から切り替えられるようにする。",
      "下部に固定ナビがある画面では、一括操作バーをナビの上に置き、操作が重ならないようにする。",
      "選んだ人数と操作の対象人数が異なる場合は、操作ボタンに対象人数を示す。",
      "一括操作を終えたら、何件に反映されたかをトーストで伝える。",
    ],
    avoid: [
      "一つしか選べない項目に使う。選択肢の数に応じてラジオボタンかSelectにする。",
      "切り替えと同時に反映する設定に使う。すぐに反映する場合はスイッチにする。",
    ],
  },
}
