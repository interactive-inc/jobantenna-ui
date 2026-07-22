import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { BellIcon, ImageIcon } from "lucide-react"

/**
 * オン・オフ・disabled の各状態と sm サイズの基本形
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch id="switch-basic-new-job" defaultChecked />
        <Label htmlFor="switch-basic-new-job">新着求人の通知を受け取る</Label>
      </div>

      <div className="flex items-center gap-2">
        <Switch id="switch-basic-scout" />
        <Label htmlFor="switch-basic-scout">企業からのスカウトを許可する</Label>
      </div>

      <div className="flex items-center gap-2">
        <Switch id="switch-basic-naha" size="sm" defaultChecked />
        <Label htmlFor="switch-basic-naha">那覇市の求人のみ表示（sm）</Label>
      </div>

      <div className="flex items-center gap-2">
        <Switch id="switch-basic-public" disabled defaultChecked />
        <Label htmlFor="switch-basic-public">プロフィールを公開する（無効）</Label>
      </div>
    </div>
  )
}

/**
 * 通知設定の一覧。各行に設定名と補足説明を置き、右端の Switch で即時に切り替える
 */
function NotificationSettingsPattern() {
  return (
    <div className="w-full max-w-sm rounded-lg border">
      <div className="flex items-center gap-2 border-b p-4">
        <BellIcon className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">通知設定</span>
      </div>

      <div className="flex items-center gap-4 border-b p-4">
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <Label htmlFor="switch-notify-new-job">新着求人メール</Label>
          <span className="text-xs text-muted-foreground">
            保存した検索条件に合う求人をメールで受け取る
          </span>
        </div>

        <Switch id="switch-notify-new-job" defaultChecked />
      </div>

      <div className="flex items-center gap-4 border-b p-4">
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <Label htmlFor="switch-notify-scout">スカウト受信</Label>
          <span className="text-xs text-muted-foreground">
            企業からのスカウトメッセージを受け取る
          </span>
        </div>

        <Switch id="switch-notify-scout" defaultChecked />
      </div>

      <div className="flex items-center gap-4 border-b p-4">
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <Label htmlFor="switch-notify-iikamo">いいかも！通知</Label>
          <span className="text-xs text-muted-foreground">
            企業からいいかも！が届いたら通知する
          </span>
        </div>

        <Switch id="switch-notify-iikamo" defaultChecked />
      </div>

      <div className="flex items-center gap-4 p-4">
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <Label htmlFor="switch-notify-ashiato">あしあと通知</Label>
          <span className="text-xs text-muted-foreground">
            企業がプロフィールを閲覧したら通知する
          </span>
        </div>

        <Switch id="switch-notify-ashiato" />
      </div>
    </div>
  )
}

/**
 * 管理画面の求人票一覧で掲載中と公開停止を行ごとに切り替える
 */
function JobPublishPattern() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border">
      <div className="flex items-center gap-2 border-b p-2">
        <div className="flex size-8 shrink-0 items-center justify-center rounded bg-muted">
          <ImageIcon className="size-4 text-muted-foreground" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">
            【未経験歓迎・在宅可】フロントエンドエンジニア
          </span>
          <span className="truncate text-xs text-muted-foreground">
            那覇市 ほか2件 / 正社員 / 月給 25万円
          </span>
        </div>

        <Badge>掲載中</Badge>

        <Switch size="sm" defaultChecked aria-label="求人の公開を切り替える" />
      </div>

      <div className="flex items-center gap-2 border-b p-2">
        <div className="flex size-8 shrink-0 items-center justify-center rounded bg-muted">
          <ImageIcon className="size-4 text-muted-foreground" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">営業・企画営業（法人向け）</span>
          <span className="truncate text-xs text-muted-foreground">
            浦添市 / 正社員 / 月給 200,000〜300,000円
          </span>
        </div>

        <Badge>掲載中</Badge>

        <Switch size="sm" defaultChecked aria-label="求人の公開を切り替える" />
      </div>

      <div className="flex items-center gap-2 p-2">
        <div className="flex size-8 shrink-0 items-center justify-center rounded bg-muted">
          <ImageIcon className="size-4 text-muted-foreground" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">調理スタッフ</span>
          <span className="truncate text-xs text-muted-foreground">
            那覇市 / 派遣社員 / 月給 200,000円
          </span>
        </div>

        <Badge variant="outline">公開停止</Badge>

        <Switch size="sm" aria-label="求人の公開を切り替える" />
      </div>
    </div>
  )
}

export const switchDoc: ComponentDoc = {
  name: "switch",
  title: "Switch",
  category: "フォーム",
  purpose:
    "オンとオフの二値を即時に切り替えるためのフォームコントロールです。@base-ui/react ベースで defaultChecked による非制御利用に対応し、保存ボタンを介さず反映される設定に向きます。ジョブアンテナでは新着求人メールやスカウト受信などの通知設定、管理画面での求人票の公開切替に使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "オン・オフ・disabled の各状態と sm サイズです。id と Label の htmlFor を対応させると、ラベルのクリックでも切り替わります。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "notification-settings",
      title: "通知設定",
      description:
        "求職者のマイページで新着求人メール・スカウト受信・いいかも！通知などを切り替える例です。設定名の下に補足説明を添え、Switch は行の右端に揃えます。",
      previewHeight: null,
      Demo: NotificationSettingsPattern,
    },
    {
      id: "job-publish",
      title: "求人票の公開切替",
      description:
        "管理画面の求人票一覧で掲載中・公開停止を切り替える例です。状態はバッジで示し、行内では sm サイズの Switch を使います。ラベルが視覚的にない場合は aria-label を付けます。",
      previewHeight: null,
      Demo: JobPublishPattern,
    },
  ],
}
