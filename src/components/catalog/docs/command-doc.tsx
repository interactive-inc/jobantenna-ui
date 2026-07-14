import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  BookmarkIcon,
  BriefcaseIcon,
  BuildingIcon,
  ClipboardListIcon,
  FileTextIcon,
  HeartIcon,
  HouseIcon,
  LaptopIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  MessageSquareIcon,
  PlusIcon,
  SearchIcon,
  SproutIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"

/**
 * 人気の検索・エリア・マイページをグループ分けした求人検索パレット
 */
function BasicPattern() {
  return (
    <div className="w-full max-w-md">
      <Command className="rounded-2xl border">
        <CommandInput placeholder="求人・エリア・キーワードで検索..." />

        <CommandList>
          <CommandEmpty>該当する求人が見つかりません</CommandEmpty>

          <CommandGroup heading="人気の検索">
            <CommandItem>
              <SearchIcon />
              <span>正社員の求人を探す</span>
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <BriefcaseIcon />
              <span>事務・オフィスワーク</span>
            </CommandItem>
            <CommandItem>
              <BuildingIcon />
              <span>ホテル・観光業界</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="エリアから探す">
            <CommandItem>
              <MapPinIcon />
              <span>那覇市の求人</span>
            </CommandItem>
            <CommandItem>
              <MapPinIcon />
              <span>浦添市の求人</span>
            </CommandItem>
            <CommandItem>
              <MapPinIcon />
              <span>沖縄市の求人</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="マイページ">
            <CommandItem>
              <HeartIcon />
              <span>お気に入り求人</span>
              <CommandShortcut>⌘F</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <UserIcon />
              <span>プロフィール設定</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem disabled>
              <BriefcaseIcon />
              <span>応募履歴（準備中）</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}

/**
 * 管理画面のページ移動とクイック操作をまとめたパレット。未読件数はバッジで表示
 */
function AdminQuickActionsPattern() {
  return (
    <div className="w-full max-w-md">
      <Command className="rounded-2xl border">
        <CommandInput placeholder="ページ名や操作を入力..." />

        <CommandList>
          <CommandEmpty>該当するページ・操作が見つかりません</CommandEmpty>

          <CommandGroup heading="ページ移動">
            <CommandItem>
              <LayoutDashboardIcon />
              <span>ダッシュボード</span>
              <CommandShortcut>⌘1</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <FileTextIcon />
              <span>求人票</span>
              <CommandShortcut>⌘2</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <UsersIcon />
              <span>応募者の進捗管理</span>
              <CommandShortcut>
                <Badge variant="destructive">8</Badge>
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <MessageSquareIcon />
              <span>メッセージ</span>
              <CommandShortcut>
                <Badge variant="destructive">3</Badge>
              </CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="クイック操作">
            <CommandItem>
              <PlusIcon />
              <span>求人票を新規作成</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <BookmarkIcon />
              <span>保存した検索条件を開く</span>
            </CommandItem>
            <CommandItem>
              <ClipboardListIcon />
              <span>メッセージテンプレートを管理</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}

/**
 * 雇用形態・こだわり条件を選ぶ検索条件パレット。フッターに件数つき検索ボタン
 */
function SearchConditionPattern() {
  return (
    <div className="w-full max-w-md">
      <Command className="rounded-2xl border">
        <CommandInput placeholder="職種名や仕事内容などを入力" />

        <CommandList>
          <CommandEmpty>該当する条件が見つかりません</CommandEmpty>

          <CommandGroup heading="雇用形態">
            <CommandItem>
              <BriefcaseIcon />
              <span>正社員</span>
            </CommandItem>
            <CommandItem>
              <BuildingIcon />
              <span>派遣社員</span>
            </CommandItem>
            <CommandItem>
              <UserIcon />
              <span>アルバイト・パート</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="こだわり条件">
            <CommandItem>
              <FileTextIcon />
              <span>Web履歴書OK</span>
            </CommandItem>
            <CommandItem>
              <SproutIcon />
              <span>未経験歓迎</span>
            </CommandItem>
            <CommandItem>
              <LaptopIcon />
              <span>在宅ワークOK</span>
            </CommandItem>
            <CommandItem>
              <HouseIcon />
              <span>転勤なし</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>

        <div className="flex items-center justify-between gap-2 border-t border-border/50 p-2">
          <Button variant="ghost" size="sm">
            すべてクリア
          </Button>
          <Button size="sm">128件 検索する</Button>
        </div>
      </Command>
    </div>
  )
}

export const commandDoc: ComponentDoc = {
  name: "command",
  title: "Command",
  category: "ナビゲーション",
  purpose:
    "キーワード入力で候補を絞り込みながら選択できるコマンドパレットです。入力に応じて項目が自動でフィルタリングされ、キーボードだけで目的の項目まで辿り着けます。jobantenna では求人検索の入り口や、管理画面でのページ移動・クイック操作の起動に使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "人気の検索・エリア・マイページを CommandGroup で区切った求人検索パレットです。入力すると全グループ横断で絞り込まれ、0件のときは CommandEmpty が表示されます。",
      previewHeight: 420,
      Demo: BasicPattern,
    },
    {
      id: "admin-quick-actions",
      title: "管理画面クイック操作",
      description:
        "採用担当者向けにページ移動と操作を1つのパレットにまとめた例です。CommandShortcut にキーボードショートカットや未読件数バッジを入れて右端に揃えています。",
      previewHeight: 420,
      Demo: AdminQuickActionsPattern,
    },
    {
      id: "search-condition",
      title: "検索条件",
      description:
        "雇用形態やこだわり条件を選ぶ絞り込みパレットです。CommandList の下にフッターを足し、ヒット件数つきの検索ボタンとクリアボタンを配置しています。",
      previewHeight: 480,
      Demo: SearchConditionPattern,
    },
  ],
}
