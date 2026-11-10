import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { HeartIcon, ThumbsUpIcon, UsersIcon } from "lucide-react"

function MatchCountPattern() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge variant="success" className="font-semibold">
        合う 3/3
      </Badge>
      <Badge variant="secondary" className="font-semibold">
        合う 1/3
      </Badge>
      <Badge variant="secondary" className="font-semibold">
        合う 0/3
      </Badge>
      <Badge variant="secondary" className="font-semibold">
        合う ?/3
      </Badge>
    </div>
  )
}

function ActivityPattern() {
  const levels = ["最近は静か", "ときどき動いている", "よく動いている"]
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {levels.map((label, level) => (
        <Badge
          key={label}
          variant="secondary"
          className={
            level > 0
              ? "bg-(--status-interest-surface) font-bold text-foreground"
              : "font-bold text-foreground"
          }
        >
          <span className="flex h-4 shrink-0 items-end gap-0.5" aria-hidden>
            {["h-1.5", "h-2.5", "h-4"].map((height, index) => (
              <span
                key={height}
                className={`w-0.5 rounded-full ${height} ${index <= level ? "bg-(--ja-yellow)" : "bg-input"}`}
              />
            ))}
          </span>
          {label}
        </Badge>
      ))}
    </div>
  )
}

function StatusExamples() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge variant="information">
        応募・未選考
        <time className="font-numeric font-semibold" dateTime="2026-11-08">11/8</time>
      </Badge>
      <Badge variant="interest">
        <HeartIcon className="fill-current" aria-hidden />
        両思い
      </Badge>
      <Badge variant="interest">
        <ThumbsUpIcon aria-hidden />
        いいかもが届いています
      </Badge>
      <Badge variant="secondary">編集中</Badge>
      <Badge variant="secondary">下書き</Badge>
      <Badge variant="secondary">公開停止</Badge>
      <Badge variant="success">掲載中</Badge>
      <Badge variant="attention">要確認</Badge>
    </div>
  )
}

function NewCountPattern() {
  return (
    <div className="flex w-full max-w-xs items-center gap-2 rounded-(--radius-outer) px-2 py-1">
      <UsersIcon className="size-4 text-muted-foreground" aria-hidden="true" />
      <span className="flex-1 text-sm">候補者</span>
      <Badge variant="information" className="font-numeric" aria-label="新着8件">8</Badge>
    </div>
  )
}

export const badgeDoc: ComponentDoc = {
  name: "badge",
  title: "Badge",
  category: "データ表示",
  purpose:
    "候補者との関係や求人の掲載状況を短い札で示します。ナビゲーションでは件数を添えるためにも使います。",
  patterns: [
    {
      id: "basic",
      title: "状態を示す札",
      description:
        "応募は青、両思いと受信したいいかもは黄、掲載中は緑、編集中・下書き・公開停止は灰、確認が必要なものは橙で示します。",
      previewHeight: null,
      showControls: false,
      Demo: StatusExamples,
    },
    {
      id: "match-count",
      title: "条件が合う数",
      description:
        "勤務地・職種・経歴の3項目を、選んだ求人と照らし合わせます。狭い画面では一致した数を一つの札にまとめ、2項目以上は緑、1項目以下は灰色にします。",
      details: [
        { label: "0/3", description: "比較できた項目の中に、一致した項目がありません。" },
        { label: "?/3", description: "比較に必要な情報がなく、一致数を確認できません。" },
      ],
      showControls: false,
      previewHeight: 140,
      Demo: MatchCountPattern,
    },
    {
      id: "activity",
      title: "アンテナ",
      description:
        "最終ログインからの経過を、棒と文言で示します。狭い画面では一つの札にまとめ、広い画面では最終ログインの時期も添えます。",
      details: [
        { label: "よく動いている", description: "最終ログインから14日未満。" },
        { label: "ときどき動いている", description: "最終ログインから14日以上30日未満。" },
        { label: "最近は静か", description: "最終ログインから30日以上。" },
      ],
      showControls: false,
      previewHeight: 140,
      Demo: ActivityPattern,
    },
    {
      id: "unread-count",
      title: "新着件数",
      description:
        "候補者や選考では、取得できる新着件数をナビゲーションの項目名の横に青で示します。",
      previewHeight: null,
      Demo: NewCountPattern,
    },
  ],
  usage: {
    recommended: [
      "選んだ求人について、候補者一人につき一つだけ表示する。",
      "複数の関係があるときは、応募、両思い、受信したいいかもの順で優先する。",
      "複数の求人に応募がある場合は、選んだ求人の状態札と選考操作を概要にまとめ、他の求人の状態は本文で確認できるようにする。",
      "状態になった日が分かる場合は、札の中に月日をInterのセミボールドで添える。",
    ],
    avoid: [
      "送信しただけのいいかもや、閲覧済みを関係の札として表示する。",
      "状態を色だけで伝える。短い文言を添える。",
    ],
  },
}
