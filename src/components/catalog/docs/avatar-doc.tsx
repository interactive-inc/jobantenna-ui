import type { ComponentDoc } from "@/components/catalog/component-doc"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import { Building2 } from "lucide-react"

/**
 * サイズ展開(sm / default / lg)とフォールバック表示
 */
function BasicPattern() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <Avatar size="sm">
          <AvatarFallback>田</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>比</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>金</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <span className="w-6 text-center">sm</span>
        <span className="w-8 text-center">default</span>
        <span className="w-10 text-center">lg</span>
      </div>
    </div>
  )
}

/**
 * 求人カードヘッダの企業ロゴ表示
 */
function CompanyLogoPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center gap-2">
        <Avatar size="lg">
          <AvatarFallback>
            <Building2 className="size-4" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">株式会社サンプル</span>
          <span className="text-xs text-muted-foreground">ソフトウェア・情報処理</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Avatar size="lg">
          <AvatarFallback>
            <Building2 className="size-4" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">株式会社アールエムシー</span>
          <span className="text-xs text-muted-foreground">インターネット関連</span>
        </div>
      </div>
    </div>
  )
}

/**
 * AvatarBadge によるオンライン状態の表示
 */
function OnlineStatusPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center gap-2">
        <Avatar size="lg">
          <AvatarFallback>山</AvatarFallback>
          <AvatarBadge aria-label="オンライン" className="bg-emerald-500" />
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">人事部　山田太郎</span>
          <span className="text-xs text-muted-foreground">オンライン</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Avatar size="lg">
          <AvatarFallback>比</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">比嘉 花子</span>
          <span className="text-xs text-muted-foreground">最終ログイン 3日前</span>
        </div>
      </div>
    </div>
  )
}

/**
 * AvatarGroup による応募者一覧の重なり表示
 */
function ApplicantGroupPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center gap-4">
        <AvatarGroup>
          <Avatar>
            <AvatarFallback>田</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>比</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>金</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+9</AvatarGroupCount>
        </AvatarGroup>
        <div className="flex flex-col">
          <span className="text-sm font-medium">フロントエンドエンジニア</span>
          <span className="text-xs text-muted-foreground">応募 12名</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <AvatarGroup>
          <Avatar>
            <AvatarFallback>那</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>覇</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
        <div className="flex flex-col">
          <span className="text-sm font-medium">調理スタッフ</span>
          <span className="text-xs text-muted-foreground">応募 5名</span>
        </div>
      </div>
    </div>
  )
}

export const avatarDoc: ComponentDoc = {
  name: "avatar",
  title: "Avatar",
  category: "データ表示",
  purpose:
    "人物や企業を画像・イニシャル・アイコンで表すコンポーネントです。画像が読み込めない場合は AvatarFallback が代わりに表示されます。ジョブアンテナでは応募者テーブルやメッセージ画面の人物表示、求人カードの企業ロゴ、応募者数のグループ表示に使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "sm / default / lg の3サイズ展開です。画像がない場合はイニシャルのフォールバックを表示します。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "company-logo",
      title: "企業ロゴ",
      description:
        "求人カードのヘッダで企業ロゴと企業名・業種を並べる使い方です。ロゴ未設定の企業はアイコンのフォールバックで補います。",
      previewHeight: null,
      Demo: CompanyLogoPattern,
    },
    {
      id: "online-status",
      title: "オンライン状態",
      description:
        "AvatarBadge で採用担当者や候補者のオンライン状態を示します。メッセージ画面で相手が返信できる状態かを伝えるときに使います。",
      previewHeight: null,
      Demo: OnlineStatusPattern,
    },
    {
      id: "applicant-group",
      title: "応募者グループ",
      description:
        "AvatarGroup と AvatarGroupCount で応募者を重ねて表示し、求人票ごとの応募人数をひと目で伝えます。",
      previewHeight: null,
      Demo: ApplicantGroupPattern,
    },
  ],
}
