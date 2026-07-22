import type { ComponentDoc } from "@/components/catalog/component-doc"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { SearchIcon } from "lucide-react"

/**
 * 単体キーと KbdGroup による組み合わせ表記の基本形
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Kbd>⌘</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>Enter</Kbd>
        <Kbd>Esc</Kbd>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>求人をキーワード検索</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>気になる求人を保存</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>応募フォームを送信</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>Enter</Kbd>
        </KbdGroup>
      </div>
    </div>
  )
}

/**
 * 求人検索の入力欄にショートカットヒントを添える例
 */
function SearchShortcutPattern() {
  return (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="職種名や仕事内容などを入力" />
        <InputGroupAddon align="inline-end">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

/**
 * 管理画面のキーボードショートカット一覧
 */
function ShortcutHelpPattern() {
  return (
    <div className="w-full max-w-md divide-y overflow-hidden rounded-lg border">
      <div className="flex items-center gap-2 px-4 py-2">
        <span className="flex-1 text-sm">求人検索を開く</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>

      <div className="flex items-center gap-2 px-4 py-2">
        <span className="flex-1 text-sm">次の候補者へ移動</span>
        <Kbd>J</Kbd>
      </div>

      <div className="flex items-center gap-2 px-4 py-2">
        <span className="flex-1 text-sm">前の候補者へ移動</span>
        <Kbd>K</Kbd>
      </div>

      <div className="flex items-center gap-2 px-4 py-2">
        <span className="flex-1 text-sm">メッセージを送信</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>Enter</Kbd>
        </KbdGroup>
      </div>

      <div className="flex items-center gap-2 px-4 py-2">
        <span className="flex-1 text-sm">ダイアログを閉じる</span>
        <Kbd>Esc</Kbd>
      </div>
    </div>
  )
}

export const kbdDoc: ComponentDoc = {
  name: "kbd",
  title: "Kbd",
  category: "データ表示",
  purpose:
    "キーボードのキーやショートカットの組み合わせを表示するコンポーネント。ジョブアンテナでは求人検索の起動（⌘K）や応募フォーム送信（⌘Enter）のヒント表示、管理画面のショートカットヘルプに使う。KbdGroup で複数キーの組み合わせをまとめられる。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "Kbd で単体キーを、KbdGroup で ⌘K のような組み合わせを表示する。操作の説明文に添えてショートカットを案内する。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "search-shortcut",
      title: "検索入力のヒント",
      description:
        "求人検索の入力欄の末尾に ⌘K を添える例。InputGroup の中に置くと Kbd の背景が入力欄に馴染む色へ自動で切り替わる。",
      previewHeight: null,
      Demo: SearchShortcutPattern,
    },
    {
      id: "shortcut-help",
      title: "ショートカット一覧",
      description:
        "管理画面の候補者確認で使えるショートカットをヘルプとして一覧表示する例。操作名を左、キーを右に揃えて対応を読み取りやすくする。",
      previewHeight: null,
      Demo: ShortcutHelpPattern,
    },
  ],
}
