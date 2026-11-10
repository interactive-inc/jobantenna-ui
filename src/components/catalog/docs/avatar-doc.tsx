import { ClipboardListIcon, CodeXmlIcon, HandshakeIcon, HardHatIcon, StethoscopeIcon } from "lucide-react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const occupations = [
  {
    name: "営業・カスタマーサポート",
    Icon: HandshakeIcon,
    tone: "bg-(--ja-occupation-orange-surface) text-(--ja-occupation-orange-text)",
  },
  {
    name: "建築・土木",
    Icon: HardHatIcon,
    tone: "bg-(--ja-occupation-green-surface) text-(--ja-occupation-green-text)",
  },
  {
    name: "IT・通信エンジニア",
    Icon: CodeXmlIcon,
    tone: "bg-(--ja-occupation-violet-surface) text-(--ja-occupation-violet-text)",
  },
  {
    name: "管理・事務",
    Icon: ClipboardListIcon,
    tone: "bg-(--ja-occupation-blue-surface) text-(--ja-occupation-blue-text)",
  },
  {
    name: "医療・福祉・介護",
    Icon: StethoscopeIcon,
    tone: "bg-(--ja-occupation-pink-surface) text-(--ja-occupation-pink-text)",
  },
]

function OccupationExamples() {
  return (
    <ul className="flex flex-wrap gap-4">
      {occupations.map(({ name, Icon, tone }) => (
        <li key={name} aria-label={name}>
          <Avatar className="size-10">
            <AvatarFallback className={tone}>
              <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
            </AvatarFallback>
          </Avatar>
        </li>
      ))}
    </ul>
  )
}

export const avatarDoc: ComponentDoc = {
  name: "avatar",
  title: "Avatar",
  category: "データ表示",
  purpose: "候補者の顔写真を丸く表示します。写真がない場合は希望職種のアイコンを使います。",
  patterns: [
    {
      id: "basic",
      title: "希望職種のアイコン",
      description: "希望職種をアイコンと5系統の色で示します。職種が分からない場合は人物アイコンを使います。",
      showControls: false,
      previewHeight: null,
      Demo: OccupationExamples,
    },
  ],
  usage: {
    recommended: [
      "一覧は40px、スマートフォンのカードは44px、詳細ヘッダーは96〜104pxを目安にする。",
      "写真や職種アイコンは同じ円の枠に収め、名前と並べる。",
    ],
    avoid: [
      "写真が未登録の候補者を空の丸で示す。",
      "職種アイコンや背景色をオンライン状態の表示に使う。",
    ],
  },
}
