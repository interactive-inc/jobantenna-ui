import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function CompanyNameField() {
  return (
    <div className="grid w-full max-w-md gap-2">
      <Label htmlFor="label-company-name">会社名</Label>
      <Input id="label-company-name" placeholder="株式会社サンプル" />
    </div>
  )
}

export const labelDoc: ComponentDoc = {
  name: "label",
  title: "Label",
  category: "フォーム",
  purpose: "入力欄や選択肢に、何を入力・選択するかが分かる名前を付けます。",
  patterns: [
    {
      id: "basic",
      title: "会社名",
      description: "ラベルと入力欄を関連づけると、項目名を押して入力欄に移動できます。",
      showControls: false,
      previewHeight: null,
      Demo: CompanyNameField,
    },
  ],
  usage: {
    recommended: [
      "一行・複数行の入力欄では、項目名を欄の上に置く。",
      "ラベルの htmlFor と入力欄の id を揃え、項目名を読み上げでも伝える。",
      "必須の札や文字数、入力エラーを含む場合は Field でまとめる。",
    ],
    avoid: ["入力例やアイコンだけで項目名を示す。"],
  },
}
