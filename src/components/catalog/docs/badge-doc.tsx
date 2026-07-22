import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import {
  BriefcaseIcon,
  Building2Icon,
  FootprintsIcon,
  HeartIcon,
  ImageIcon,
  MapPinIcon,
  MessageSquareIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"

/**
 * Badge の全バリアントとアイコン付きの使用例
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>正社員</Badge>
        <Badge variant="secondary">未経験歓迎</Badge>
        <Badge variant="destructive">急募</Badge>
        <Badge variant="outline">那覇市</Badge>
        <Badge variant="ghost">土日休み</Badge>
        <Badge variant="link">求人詳細</Badge>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">
          <BriefcaseIcon data-icon="inline-start" />
          月給25万円〜
        </Badge>
        <Badge variant="outline">
          <MapPinIcon data-icon="inline-start" />
          沖縄県宜野湾市
        </Badge>
      </div>
    </div>
  )
}

/**
 * 求人カードでのタグ表示。新着は default、属性タグは secondary / outline で強弱をつける
 */
function JobCardTagsPattern() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border">
      <div className="relative flex h-32 items-center justify-center bg-muted">
        <ImageIcon className="size-8 text-muted-foreground" />
        <Badge className="absolute top-2 left-2">NEW</Badge>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <div className="flex size-4 shrink-0 items-center justify-center rounded bg-muted">
            <Building2Icon className="size-3 text-muted-foreground" />
          </div>
          <span className="truncate text-xs text-muted-foreground">株式会社サンプル</span>
        </div>
        <p className="text-sm font-medium">フロントエンドエンジニア｜自社サービスの UI 開発</p>
        <p className="text-xs text-muted-foreground">那覇市 / 正社員 / 月給 200,000〜300,000円</p>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary">新卒採用</Badge>
          <Badge variant="secondary">Web履歴書OK</Badge>
          <Badge variant="outline">未経験歓迎</Badge>
        </div>
      </div>
    </div>
  )
}

/**
 * 応募者リストの選考ステータス。対応が必要なものほど強い色を割り当てる
 */
function ApplicationStatusPattern() {
  return (
    <div className="w-full max-w-md divide-y overflow-hidden rounded-lg border">
      <div className="flex items-center gap-2 p-2">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
          <UserIcon className="size-4 text-muted-foreground" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">比嘉 太郎</span>
          <span className="truncate text-xs text-muted-foreground">28歳・男性・前職: 営業</span>
        </div>
        <Badge variant="destructive">未対応</Badge>
      </div>

      <div className="flex items-center gap-2 p-2">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
          <UserIcon className="size-4 text-muted-foreground" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">金城 花子</span>
          <span className="truncate text-xs text-muted-foreground">25歳・女性・前職: 販売</span>
        </div>
        <Badge variant="secondary">対応中</Badge>
      </div>

      <div className="flex items-center gap-2 p-2">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
          <UserIcon className="size-4 text-muted-foreground" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">大城 健</span>
          <span className="truncate text-xs text-muted-foreground">
            30歳・男性・前職: エンジニア
          </span>
        </div>
        <Badge>内定</Badge>
      </div>

      <div className="flex items-center gap-2 p-2">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
          <UserIcon className="size-4 text-muted-foreground" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">島袋 美咲</span>
          <span className="truncate text-xs text-muted-foreground">26歳・女性・前職: 事務</span>
        </div>
        <Badge variant="outline">不採用</Badge>
      </div>
    </div>
  )
}

/**
 * 管理画面メニューの件数バッジ。未読メッセージのみ destructive で注意を引く
 */
function UnreadCountPattern() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <div className="flex items-center gap-2 rounded-md px-2 py-1">
        <UsersIcon className="size-4 text-muted-foreground" />
        <span className="flex-1 text-sm">候補者リスト</span>
        <Badge variant="secondary">24</Badge>
      </div>

      <div className="flex items-center gap-2 rounded-md px-2 py-1">
        <HeartIcon className="size-4 text-muted-foreground" />
        <span className="flex-1 text-sm">もらったいいかも</span>
        <Badge variant="secondary">3</Badge>
      </div>

      <div className="flex items-center gap-2 rounded-md px-2 py-1">
        <FootprintsIcon className="size-4 text-muted-foreground" />
        <span className="flex-1 text-sm">あしあと</span>
        <Badge variant="secondary">5</Badge>
      </div>

      <div className="flex items-center gap-2 rounded-md px-2 py-1">
        <MessageSquareIcon className="size-4 text-muted-foreground" />
        <span className="flex-1 text-sm">メッセージ</span>
        <Badge variant="destructive">12</Badge>
      </div>
    </div>
  )
}

export const badgeDoc: ComponentDoc = {
  name: "badge",
  title: "Badge",
  category: "データ表示",
  purpose:
    "ステータスや属性を短いラベルで表示するコンポーネントです。ジョブアンテナでは求人カードのタグ（新卒採用、Web履歴書OK など）、応募者の選考ステータス、管理画面メニューの未読件数に使います。バリアントの色で情報の種類と緊急度を伝えます。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "default / secondary / destructive / outline / ghost / link の6バリアントです。data-icon 属性でアイコンを先頭・末尾に添えられます。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "job-card-tags",
      title: "求人カードのタグ",
      description:
        "求人カードで募集条件のタグを並べる例です。新着（NEW）は default で目立たせ、属性タグは secondary、補足条件は outline で階層をつけます。",
      previewHeight: 400,
      Demo: JobCardTagsPattern,
    },
    {
      id: "application-status",
      title: "応募ステータス",
      description:
        "応募者リストで選考状況を示す例です。未対応は destructive、対応中は secondary、内定は default、不採用は outline と、対応の緊急度で色を割り当てます。",
      previewHeight: null,
      Demo: ApplicationStatusPattern,
    },
    {
      id: "unread-count",
      title: "未読件数",
      description:
        "管理画面のメニュー項目に件数を添える例です。通常の件数は secondary、未読メッセージなど対応が必要なものだけ destructive にします。",
      previewHeight: null,
      Demo: UnreadCountPattern,
    },
  ],
}
