import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SendIcon } from "lucide-react"

const selfPrExampleText =
  "那覇市のホテルで接客スタッフとして3年間勤務し、外国人観光客への英語対応やアルバイトスタッフの教育を担当しました。お客様アンケートで名前を挙げていただくことが多く、丁寧なコミュニケーションには自信があります。今後は接客で培った提案力を活かし、営業・企画営業として長く働ける職場を探しています。"

/**
 * Textarea の基本形。プレースホルダ・ラベル付き・エラー・無効の各状態
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Textarea placeholder="志望動機を入力してください" />

      <div className="flex flex-col gap-2">
        <Label htmlFor="textarea-doc-appeal">自己PR</Label>
        <Textarea
          id="textarea-doc-appeal"
          defaultValue="那覇市での接客経験が3年あります。正社員として長く働ける職場を探しています。"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="textarea-doc-invalid">応募メッセージ</Label>
        <Textarea id="textarea-doc-invalid" aria-invalid placeholder="応募メッセージは必須です" />
        <p className="text-sm text-destructive">応募メッセージを入力してください</p>
      </div>

      <Textarea disabled defaultValue="この求人は受付を終了しました" />
    </div>
  )
}

/**
 * Web履歴書の自己PR入力。文字数の目安と現在の文字数を添える
 */
function SelfPrPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Label htmlFor="textarea-doc-self-pr">自己PR</Label>

      <Textarea id="textarea-doc-self-pr" defaultValue={selfPrExampleText} />

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>200〜400文字を目安に入力してください</span>
        <span>{selfPrExampleText.length} / 400</span>
      </div>
    </div>
  )
}

/**
 * 応募確認画面のメッセージ入力。注意書きと応募完了ボタンを添える
 */
function ApplyMessagePattern() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border">
      <div className="flex flex-col gap-1 border-b p-4">
        <p className="text-sm text-muted-foreground">株式会社サンプル</p>
        <p className="font-medium">フロントエンドエンジニア</p>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <Label htmlFor="textarea-doc-apply-message">応募メッセージ（任意）</Label>
        <Textarea
          id="textarea-doc-apply-message"
          placeholder="担当者へのメッセージがあれば入力してください"
        />
        <p className="text-sm text-muted-foreground">
          応募する求人を確認の上、「応募を完了する」を押してください。
        </p>
        <p className="text-sm text-muted-foreground">※応募すると氏名が企業に公開されます。</p>
      </div>

      <div className="flex justify-end border-t p-4">
        <Button>
          <SendIcon data-icon="inline-start" />
          応募を完了する
        </Button>
      </div>
    </div>
  )
}

export const textareaDoc: ComponentDoc = {
  name: "textarea",
  title: "Textarea",
  category: "フォーム",
  purpose:
    "複数行のテキストを入力するフォームコンポーネントです。内容に応じて高さが自動で伸びます。ジョブアンテナでは Web履歴書の自己PR、応募時のメッセージ、求人フォームの仕事内容や企業メモなど、長文の入力に使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "プレースホルダのみ・Label 付き・aria-invalid のエラー・disabled の各状態です。入力内容に合わせて高さが自動調整されます。",
      previewHeight: 480,
      Demo: BasicPattern,
    },
    {
      id: "self-pr",
      title: "自己PR",
      description:
        "Web履歴書の自己PR入力です。下部に文字数の目安と現在の文字数を並べ、書く分量の指針を示します。",
      previewHeight: null,
      Demo: SelfPrPattern,
    },
    {
      id: "apply-message",
      title: "応募メッセージ",
      description:
        "応募確認画面での任意メッセージ入力です。求人情報のヘッダー、氏名公開の注意書き、応募完了ボタンとひとまとまりで使います。",
      previewHeight: 480,
      Demo: ApplyMessagePattern,
    },
  ],
}
