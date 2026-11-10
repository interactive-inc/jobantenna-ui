import type { ComponentDoc } from "@/components/catalog/component-doc"
import { StepIndicator } from "@/components/ui/step-indicator"

const steps = [
  { key: "input", label: "入力" },
  { key: "confirm", label: "確認" },
  { key: "complete", label: "送信完了" },
]

function ConfirmStep() {
  return <StepIndicator steps={steps} currentStep="confirm" />
}

export const stepIndicatorDoc: ComponentDoc = {
  name: "step-indicator",
  title: "ステッパー",
  category: "フォーム",
  purpose: "複数の画面に分かれた入力で、いまの手順と済んだ手順を示します。",
  patterns: [
    {
      id: "states",
      title: "入力内容の確認",
      description: "確認画面では、済んだ入力と、これからの送信を確認できます。最後の手順まで済んだら、すべて緑のチェックに切り替えます。",
      details: [
        { label: "現在", description: "墨の丸と太字で、いまの手順を示します。" },
        { label: "完了", description: "済んだ手順は緑のチェックに切り替えます。" },
        { label: "未着手", description: "淡い丸と番号で、これからの手順を示します。" },
      ],
      showControls: false,
      previewHeight: null,
      Demo: ConfirmStep,
    },
  ],
  usage: {
    recommended: ["手順は3段階までにし、「入力」「確認」のような短い名前を付ける。"],
    avoid: ["手順を4段階以上に分ける。先に、一つの画面へまとめられるかを検討する。"],
  },
}
