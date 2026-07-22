import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  BanIcon,
  BellIcon,
  BookmarkIcon,
  Building2Icon,
  EyeOffIcon,
  FileTextIcon,
  HeartIcon,
  ImageIcon,
  LinkIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  SendIcon,
  Share2Icon,
  UserIcon,
} from "lucide-react"

/**
 * 右クリックでメニューを開く基本形。項目・ショートカット・サブメニュー・チェックボックス・破壊的操作を含む
 */
function BasicPattern() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-48 w-full max-w-md flex-col items-center justify-center gap-2 rounded-(--radius-outer) border border-dashed text-sm text-muted-foreground">
        <span className="font-medium text-foreground">カフェスタッフ（正社員） / 那覇市</span>
        <span>月給 20万円〜 / 未経験歓迎</span>
        <span className="text-xs">ここを右クリック</span>
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>この求人の操作</ContextMenuLabel>

          <ContextMenuItem>
            <SendIcon />
            応募する
            <ContextMenuShortcut>⌘A</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuItem>
            <BookmarkIcon />
            キープに追加
            <ContextMenuShortcut>⌘K</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Share2Icon />
              共有
            </ContextMenuSubTrigger>

            <ContextMenuSubContent>
              <ContextMenuItem>リンクをコピー</ContextMenuItem>
              <ContextMenuItem>LINE で送る</ContextMenuItem>
              <ContextMenuItem>メールで送る</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>

        <ContextMenuSeparator />

        <ContextMenuCheckboxItem defaultChecked>新着通知を受け取る</ContextMenuCheckboxItem>

        <ContextMenuSeparator />

        <ContextMenuItem variant="destructive">
          <EyeOffIcon />
          この求人を非表示
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

/**
 * 求人カード全体をトリガーにして、保存・共有・ブロックをその場で呼び出す
 */
function JobCardPattern() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-full max-w-sm overflow-hidden rounded-(--radius-outer) border bg-card text-card-foreground shadow-sm">
        <div className="flex items-center gap-2 p-4">
          <div className="flex size-8 items-center justify-center rounded-(--radius-inner) bg-muted">
            <Building2Icon className="size-4 text-muted-foreground" />
          </div>
          <span className="text-sm font-medium">株式会社アールエムシー</span>
        </div>

        <div className="flex h-32 items-center justify-center bg-muted">
          <ImageIcon className="size-8 text-muted-foreground" />
        </div>

        <div className="flex flex-col gap-2 p-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">フロントエンドエンジニア</span>
            <span className="text-xs text-muted-foreground">
              【未経験歓迎・在宅可】自社サービスの UI 開発メンバー募集
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <MapPinIcon className="size-3" />
            <span>那覇市</span>
            <span>・</span>
            <span>正社員</span>
            <span>・</span>
            <span>月給 250,000〜350,000円</span>
          </div>

          <div className="flex gap-1">
            <Badge variant="secondary">Web履歴書OK</Badge>
            <Badge variant="outline">新卒採用</Badge>
          </div>
        </div>
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>この求人の操作</ContextMenuLabel>

          <ContextMenuItem>
            <HeartIcon />
            いいかも！を送る
          </ContextMenuItem>

          <ContextMenuItem>
            <BookmarkIcon />
            キープに追加
          </ContextMenuItem>

          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Share2Icon />
              共有
            </ContextMenuSubTrigger>

            <ContextMenuSubContent>
              <ContextMenuItem>
                <LinkIcon />
                リンクをコピー
              </ContextMenuItem>
              <ContextMenuItem>
                <MailIcon />
                メールで送る
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>

          <ContextMenuItem>
            <BellIcon />
            この企業をフォロー
          </ContextMenuItem>
        </ContextMenuGroup>

        <ContextMenuSeparator />

        <ContextMenuItem variant="destructive">
          <EyeOffIcon />
          この求人を非表示
        </ContextMenuItem>

        <ContextMenuItem variant="destructive">
          <BanIcon />
          この企業をブロック
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

/**
 * 管理画面の応募者行を右クリックして、選考ステータスの変更や履歴書の確認を行う
 */
function ApplicantStatusPattern() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-full max-w-md items-center gap-2 rounded-(--radius-outer) border bg-card p-4 text-card-foreground">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
          <UserIcon className="size-4 text-muted-foreground" />
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-medium">比嘉 太郎</span>
          <span className="text-xs text-muted-foreground">28歳・男性・前職: 調理スタッフ</span>
        </div>

        <Badge variant="secondary" className="ml-auto">
          未選考
        </Badge>
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>応募ステータス</ContextMenuLabel>

          <ContextMenuRadioGroup defaultValue="pending">
            <ContextMenuRadioItem value="pending">未選考</ContextMenuRadioItem>
            <ContextMenuRadioItem value="on-hold">保留中</ContextMenuRadioItem>
            <ContextMenuRadioItem value="contacted">連絡済</ContextMenuRadioItem>
            <ContextMenuRadioItem value="hired">採用</ContextMenuRadioItem>
            <ContextMenuRadioItem value="rejected">不採用</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>

        <ContextMenuSeparator />

        <ContextMenuItem>
          <MessageSquareIcon />
          メッセージを送る
        </ContextMenuItem>

        <ContextMenuItem>
          <FileTextIcon />
          Web履歴書を見る
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuCheckboxItem defaultChecked>企業メモあり</ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export const contextMenuDoc: ComponentDoc = {
  name: "context-menu",
  title: "Context Menu",
  category: "オーバーレイ",
  purpose:
    "右クリック（タッチ端末では長押し）で、その場に操作メニューを開くオーバーレイ。対象の要素に紐づく操作を画面遷移なしでまとめて呼び出せる。ジョブアンテナでは求人カードの保存・共有・非表示や、管理画面での応募者ステータス変更に使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        '点線のプレースホルダを右クリックしてメニューを開く基本形。通常項目とショートカット、共有のサブメニュー、通知のチェックボックス、破壊的操作の variant="destructive" を一通り見せる。',
      previewHeight: 400,
      Demo: BasicPattern,
    },
    {
      id: "job-card",
      title: "求人カード",
      description:
        "求人カード全体を ContextMenuTrigger にした実務パターン。いいかも！やキープなどの保存系、共有サブメニュー、非表示・ブロックの破壊的操作をセパレータで区切って並べる。",
      previewHeight: 560,
      Demo: JobCardPattern,
    },
    {
      id: "applicant-status",
      title: "応募ステータス",
      description:
        "管理画面の応募者行を右クリックして選考ステータスを切り替えるパターン。単一選択には ContextMenuRadioGroup、企業メモの有無には ContextMenuCheckboxItem を使う。",
      previewHeight: 480,
      Demo: ApplicantStatusPattern,
    },
  ],
}
