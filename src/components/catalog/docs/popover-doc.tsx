import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { BellIcon, CircleHelpIcon, FootprintsIcon, HeartIcon, MailIcon } from "lucide-react"

/**
 * ボタンから通知設定のポップオーバーを開く最小構成
 */
function BasicPattern() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <BellIcon />
        新着求人の通知
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>通知の設定</PopoverTitle>
          <PopoverDescription>保存した検索条件に合う新着求人をお知らせします。</PopoverDescription>
        </PopoverHeader>
        <div className="flex flex-col gap-2">
          <p>条件: 正社員 / 那覇市 / 月給25万円以上</p>
          <Button size="sm">通知を受け取る</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

/**
 * アンテナレベルの数値の横に置くヘルプアイコンから用語解説を開く
 */
function AntennaLevelHelpPattern() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="font-semibold">アンテナレベル 42</span>
      <Popover>
        <PopoverTrigger
          render={<Button variant="ghost" size="icon" aria-label="アンテナレベルとは？" />}
        >
          <CircleHelpIcon className="text-muted-foreground" />
        </PopoverTrigger>
        <PopoverContent side="bottom" align="start" className="w-80">
          <PopoverHeader>
            <PopoverTitle>アンテナレベルとは？</PopoverTitle>
            <PopoverDescription>
              プロフィールやWeb履歴書の充実度を表すスコアです。レベルが高いほど検索結果に表示されやすくなり、企業から「いいかも！」が届きやすくなります。
            </PopoverDescription>
          </PopoverHeader>
          <div className="flex flex-col gap-1 text-muted-foreground">
            <div className="flex items-center justify-between">
              <span>基本プロフィールの入力</span>
              <span>+10</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Web履歴書の登録</span>
              <span>+20</span>
            </div>
            <div className="flex items-center justify-between">
              <span>希望条件の設定</span>
              <span>+10</span>
            </div>
          </div>
          <Button size="sm" variant="outline">
            プロフィールを充実させる
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}

/**
 * ヘッダーのベルアイコンからいいかも・あしあと・メッセージの通知一覧を開く
 */
function NotificationListPattern() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <BellIcon />
        通知
        <Badge variant="destructive">3</Badge>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80">
        <PopoverHeader>
          <PopoverTitle>通知</PopoverTitle>
        </PopoverHeader>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <HeartIcon className="size-4" />
            </div>
            <div className="flex flex-col gap-0.5">
              <p>株式会社サンプルから「いいかも！」が届きました</p>
              <span className="text-xs text-muted-foreground">3分前</span>
            </div>
            <span className="mt-1 size-2 shrink-0 rounded-full bg-destructive" />
          </div>
          <div className="flex items-start gap-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <MailIcon className="size-4" />
            </div>
            <div className="flex flex-col gap-0.5">
              <p>応募した求人「フロントエンドエンジニア」にメッセージが届きました</p>
              <span className="text-xs text-muted-foreground">1時間前</span>
            </div>
            <span className="mt-1 size-2 shrink-0 rounded-full bg-destructive" />
          </div>
          <div className="flex items-start gap-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <FootprintsIcon className="size-4" />
            </div>
            <div className="flex flex-col gap-0.5">
              <p>常磐合同産業株式会社があなたのWeb履歴書を見ました</p>
              <span className="text-xs text-muted-foreground">昨日</span>
            </div>
          </div>
        </div>
        <Button size="sm" variant="ghost">
          すべて既読にする
        </Button>
      </PopoverContent>
    </Popover>
  )
}

export const popoverDoc: ComponentDoc = {
  name: "popover",
  title: "Popover",
  category: "オーバーレイ",
  purpose:
    "クリックで開く小さなフローティングパネルです。ダイアログを出すほどではない補足情報や軽い操作を、ページ遷移せずその場で見せたいときに使います。ジョブアンテナではアンテナレベルなどの用語ヘルプや、ヘッダーの通知一覧に使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "Trigger と Content に Header・Title・Description を組み合わせた最小構成です。ボタンを押すと通知設定のパネルが開きます。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "antenna-level-help",
      title: "アンテナレベルのヘルプ",
      description:
        "数値の横に置いたヘルプアイコンから「アンテナレベルとは？」の解説を開きます。用語の意味とレベルの上げ方をその場で確認でき、ページを離れずに次のアクションへ誘導できます。",
      previewHeight: 400,
      Demo: AntennaLevelHelpPattern,
    },
    {
      id: "notification-list",
      title: "通知一覧",
      description:
        "ヘッダーのベルアイコンから、いいかも！・メッセージ・あしあとの通知をまとめて表示します。未読は赤いドットで示し、未読件数はトリガー側のバッジで伝えます。",
      previewHeight: 520,
      Demo: NotificationListPattern,
    },
  ],
}
