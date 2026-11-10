import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function JobDescriptionField() {
  return (
    <div className="grid w-full max-w-md gap-2">
      <Label htmlFor="textarea-doc-job-description">仕事内容</Label>
      <Textarea
        id="textarea-doc-job-description"
        placeholder="担当する業務や、一日の流れを入力"
        rows={3}
      />
    </div>
  )
}

export const textareaDoc: ComponentDoc = {
  name: "textarea",
  title: "複数行入力（Textarea）",
  category: "フォーム",
  purpose: "仕事内容やメモなど、改行を含む文章に使います。白地に枠線を付け、角丸は8pxです。",
  patterns: [
    {
      id: "basic",
      title: "仕事内容",
      description: "入力欄の上に項目名を置き、何を書けばよいかを短い入力例で示します。",
      showControls: false,
      previewHeight: null,
      Demo: JobDescriptionField,
    },
  ],
  usage: {
    recommended: [
      "欄ごとに確定するメモなどでは、右下に高さ32pxの確定ボタンを置く。空欄では無効にし、入力後は墨色で示す。",
      "入力の誤りがある場合は、欄の直下に直し方を書く。",
    ],
    avoid: ["入力例を項目名の代わりに使う。"],
  },
}
