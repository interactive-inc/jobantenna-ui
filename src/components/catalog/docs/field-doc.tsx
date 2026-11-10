import { CircleAlertIcon } from "lucide-react"
import { useState } from "react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Field, FieldCharacterCount, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function JobTitleField() {
  const [title, setTitle] = useState("")
  const maxLength = 50

  return (
    <Field className="w-full max-w-md gap-2">
      <div className="flex items-center justify-between gap-2">
        <FieldLabel htmlFor="field-job-title">
          求人タイトル{" "}
          {!title.trim() && (
            <Badge aria-hidden variant="attention">
              必須
            </Badge>
          )}
        </FieldLabel>
        <FieldCharacterCount id="field-job-title-count" value={title} maxLength={maxLength} />
      </div>
      <Input
        id="field-job-title"
        aria-required
        aria-describedby="field-job-title-count"
        maxLength={maxLength}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
    </Field>
  )
}

function EmailErrorField() {
  return (
    <Field data-invalid="true" className="w-full max-w-md gap-2">
      <FieldLabel htmlFor="field-email">メールアドレス</FieldLabel>
      <Input
        id="field-email"
        type="email"
        aria-invalid
        aria-describedby="field-email-error"
        defaultValue="taro@example"
      />
      <FieldError id="field-email-error" className="flex items-start gap-2">
        <CircleAlertIcon className="size-4 shrink-0" aria-hidden="true" />
        taro@example.com のように、@の後ろにドメイン名を入力してください。
      </FieldError>
    </Field>
  )
}

export const fieldDoc: ComponentDoc = {
  name: "field",
  title: "Field",
  category: "フォーム",
  purpose: "項目名、入力欄、補足やエラーを一つのまとまりにします。",
  patterns: [
    {
      id: "basic",
      title: "項目名と文字数",
      description: "項目名は欄の8px上に置き、上限があるときだけ文字数を右に表示します。",
      showControls: false,
      previewHeight: null,
      Demo: JobTitleField,
    },
    {
      id: "error",
      title: "入力エラー",
      description: "入力欄の8px下に、アイコンと修正方法を表示します。",
      showControls: false,
      previewHeight: null,
      Demo: EmailErrorField,
    },
  ],
  usage: {
    recommended: [
      "未入力の必須項目に橙色の札を添え、入力されたら札を外す。",
      "何が足りないか、どう直せばよいかを入力欄の近くに書く。",
      "確定時に入力や選択が足りなければ、修正できる最初の欄にフォーカスを移し、案内を読み上げでも関連づける。",
    ],
    avoid: [
      "入力済みの欄に必須の札を出し続ける。",
      "赤色や「入力エラー」という文言だけで修正を促す。",
    ],
  },
}
