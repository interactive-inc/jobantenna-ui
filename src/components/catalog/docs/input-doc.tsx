import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function EmailField() {
  return (
    <div className="grid w-full max-w-md gap-2">
      <Label htmlFor="input-doc-email">メールアドレス</Label>
      <Input id="input-doc-email" type="email" placeholder="taro@example.com" />
    </div>
  )
}

export const inputDoc: ComponentDoc = {
  name: "input",
  title: "一行入力（Input）",
  category: "フォーム",
  purpose: "メールアドレスなど、一行で入力する項目に使います。標準は白地に枠線、高さ40px、角丸8pxです。",
  patterns: [
    {
      id: "basic",
      title: "メールアドレス",
      description: "入力欄の上に項目名を置き、入力形式の例は補足色で示します。",
      showControls: false,
      previewHeight: null,
      Demo: EmailField,
    },
  ],
  usage: {
    recommended: [
      "入力を始めた後も項目名が分かるよう、ラベルを残す。",
      "入力の誤りは枠線で示し、直し方を欄のすぐ下に書く。",
    ],
    avoid: [
      "入力例だけで項目名を伝える。",
      "変更できない欄を入力できる欄と同じ白地で示す。",
    ],
  },
}
