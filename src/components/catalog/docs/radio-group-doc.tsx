import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const employmentOptions = [
  { value: "full-time", label: "正社員" },
  { value: "contract", label: "契約社員" },
  { value: "part-time", label: "アルバイト・パート" },
  { value: "temporary", label: "派遣社員" },
]

function BasicPattern() {
  return (
    <div className="grid w-full max-w-md gap-2">
      <p id="radio-employment-label" className="text-sm font-medium">
        雇用形態
      </p>
      <RadioGroup aria-labelledby="radio-employment-label" defaultValue="full-time">
        {employmentOptions.map(({ value, label }) => (
          <Label key={value} htmlFor={`radio-employment-${value}`} className="w-full cursor-pointer py-1">
            <RadioGroupItem id={`radio-employment-${value}`} value={value} />
            {label}
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}

export const radioGroupDoc: ComponentDoc = {
  name: "radio-group",
  title: "ラジオボタン",
  category: "フォーム",
  purpose:
    "少数の選択肢を並べ、その中から一つだけ選ぶ入力欄です。丸は20pxで、選んだ項目は墨色の太い輪で示します。",
  patterns: [
    {
      id: "basic",
      title: "雇用形態",
      description: "丸とラベルを一つの行にまとめ、行のどこを押してもその項目を選べるようにします。",
      showControls: false,
      previewHeight: null,
      Demo: BasicPattern,
    },
  ],
  usage: {
    recommended: [
      "4つまでの選択肢を一覧で見せたいときに使う。",
      "グループに見出しを付け、何について選ぶのかを示す。",
    ],
    avoid: [
      "5つ以上の選択肢を一つずつ並べる。選択欄にまとめる。",
      "複数選択に使う。複数選べる項目はチェックボックスにする。",
    ],
  },
}
