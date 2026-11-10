import { ArrowRightIcon } from "lucide-react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Card } from "@/components/ui/card"

function TextLinkExample() {
  return (
    <Card variant="surface" className="p-6">
      <a
        href="/components/button"
        className="inline-flex items-center gap-1 rounded-(--radius-outer) text-base font-bold text-link hover:underline focus-visible:outline-2 focus-visible:outline-ring"
      >
        ボタンの使い方を見る
        <ArrowRightIcon className="size-4" aria-hidden="true" />
      </a>
    </Card>
  )
}

export const textLinkDoc: ComponentDoc = {
  name: "text-link",
  title: "テキストリンク",
  category: "アクション",
  purpose:
    "別のページへ進むときに使います。青い文字の右に矢印を置き、「求人を見る」のように移動先が分かる言葉を使います。",
  patterns: [
    {
      id: "appearance",
      title: "見た目",
      description:
        "文字と矢印を一つのリンクにします。矢印は装飾として扱い、読み上げる名前には移動先を示します。",
      previewHeight: 160,
      Demo: TextLinkExample,
    },
  ],
  usage: {
    recommended: [
      "別のページへ移動する導線に使う。",
      "続きへ進むリンクは左に寄せる。",
      "行やカード全体を開ける場合は、文字を通常色にして右端に灰色の山形を置く。",
    ],
    avoid: [
      "情報を入力する、求人票を作る、設定を変えるといった操作に使う。これらは白のボタンを使う。",
      "行全体が開けるときに、文字だけを青いリンクのように見せる。",
    ],
  },
}
