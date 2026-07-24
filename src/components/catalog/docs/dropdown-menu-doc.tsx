import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ArrowUpDownIcon,
  BookmarkIcon,
  BuildingIcon,
  ChevronDownIcon,
  FileTextIcon,
  FootprintsIcon,
  HeartIcon,
  LogOutIcon,
  MailIcon,
  SendIcon,
  SettingsIcon,
  Share2Icon,
  TrashIcon,
} from "lucide-react"

/**
 * 通常項目・サブメニュー・破壊的操作を組み合わせた基本形
 */
function BasicPattern() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline">
            求人の操作
            <ChevronDownIcon />
          </Button>
        }
      />

      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>この求人</DropdownMenuLabel>

          <DropdownMenuItem>
            <SendIcon />
            応募する
            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <BookmarkIcon />
            キープする
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <BuildingIcon />
            企業情報を見る
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Share2Icon />
            共有
          </DropdownMenuSubTrigger>

          <DropdownMenuSubContent>
            <DropdownMenuItem>LINE で送る</DropdownMenuItem>
            <DropdownMenuItem>メールで送る</DropdownMenuItem>
            <DropdownMenuItem>リンクをコピー</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive">
          <TrashIcon />
          閲覧履歴から削除
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/**
 * アバターをトリガーにしたマイページメニューの例
 */
function MyPageMenuPattern() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" className="h-auto px-2 py-1">
            <Avatar>
              <AvatarFallback>山</AvatarFallback>
            </Avatar>
            山田 太郎
            <ChevronDownIcon />
          </Button>
        }
      />

      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>yamada@example.com</DropdownMenuLabel>

          <DropdownMenuItem>
            <FileTextIcon />
            Web履歴書
          </DropdownMenuItem>

          <DropdownMenuItem>
            <BookmarkIcon />
            キープした求人
          </DropdownMenuItem>

          <DropdownMenuItem>
            <HeartIcon />
            いいかも！
          </DropdownMenuItem>

          <DropdownMenuItem>
            <FootprintsIcon />
            あしあと
          </DropdownMenuItem>

          <DropdownMenuItem>
            <MailIcon />
            メッセージ
            <Badge variant="destructive" className="ml-auto">
              3
            </Badge>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <SettingsIcon />
          設定
        </DropdownMenuItem>

        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          ログアウト
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/**
 * 求人一覧の並び替えを RadioGroup で単一選択する例
 */
function SortMenuPattern() {
  return (
    <div className="flex w-full max-w-md items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground">128件の求人</span>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="outline" size="sm">
              <ArrowUpDownIcon />
              並び替え
            </Button>
          }
        />

        <DropdownMenuContent align="end">
          <DropdownMenuRadioGroup defaultValue="newest">
            <DropdownMenuLabel>並び順</DropdownMenuLabel>

            <DropdownMenuRadioItem value="newest">新着順</DropdownMenuRadioItem>

            <DropdownMenuRadioItem value="recommended">おすすめ順</DropdownMenuRadioItem>

            <DropdownMenuRadioItem value="salary">給与が高い順</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export const dropdownMenuDoc: ComponentDoc = {
  name: "dropdown-menu",
  title: "Dropdown Menu",
  category: "オーバーレイ",
  purpose:
    "ボタンやアバターをトリガーに、関連する操作をまとめて表示するメニューです。画面上に常時並べるほどではない補助的な操作の置き場所に使います。ジョブアンテナでは求人カードの操作、ヘッダーのマイページメニュー、求人一覧の並び替えに使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "通常項目・サブメニュー・破壊的操作を組み合わせた基本形です。DropdownMenuTrigger は render プロップに Button を渡してトリガーにします。",
      previewHeight: 400,
      Demo: BasicPattern,
    },
    {
      id: "mypage-menu",
      title: "マイページメニュー",
      description:
        "アバター付きボタンをトリガーにしたマイページメニューです。DropdownMenuLabel でアカウント情報を示し、未読メッセージ数は ml-auto の Badge で右端に表示します。",
      previewHeight: 480,
      Demo: MyPageMenuPattern,
    },
    {
      id: "sort-menu",
      title: "並び替え",
      description:
        '求人一覧の並び順を DropdownMenuRadioGroup で単一選択する例です。defaultValue で初期値を指定し、align="end" でトリガーの右端に揃えます。',
      previewHeight: null,
      Demo: SortMenuPattern,
    },
  ],
}
