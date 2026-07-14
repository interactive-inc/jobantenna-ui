import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

/**
 * 通常項目・ショートカット・サブメニュー・破壊的操作を組み合わせた基本形
 */
function BasicPattern() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>求人</MenubarTrigger>

        <MenubarContent>
          <MenubarItem>
            キーワードで探す
            <MenubarShortcut>⌘K</MenubarShortcut>
          </MenubarItem>

          <MenubarItem>
            新着求人を見る
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>

          <MenubarSub>
            <MenubarSubTrigger>エリアから探す</MenubarSubTrigger>

            <MenubarSubContent>
              <MenubarItem>那覇市</MenubarItem>
              <MenubarItem>浦添市</MenubarItem>
              <MenubarItem>宜野湾市</MenubarItem>
              <MenubarItem>沖縄市</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarItem variant="destructive">検索履歴を削除</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>マイページ</MenubarTrigger>

        <MenubarContent>
          <MenubarItem>応募履歴</MenubarItem>
          <MenubarItem>お気に入り求人</MenubarItem>

          <MenubarSeparator />

          <MenubarItem>ログアウト</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

/**
 * チェックボックスとラジオグループで求人一覧の絞り込みと並び替えを行う例
 */
function FilterSortPattern() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>絞り込み</MenubarTrigger>

        <MenubarContent>
          <MenubarLabel>雇用形態</MenubarLabel>

          <MenubarCheckboxItem defaultChecked>正社員</MenubarCheckboxItem>
          <MenubarCheckboxItem>契約社員</MenubarCheckboxItem>
          <MenubarCheckboxItem>アルバイト・パート</MenubarCheckboxItem>

          <MenubarSeparator />

          <MenubarLabel>こだわり条件</MenubarLabel>

          <MenubarCheckboxItem defaultChecked>未経験歓迎</MenubarCheckboxItem>
          <MenubarCheckboxItem>リモート可</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>並び替え</MenubarTrigger>

        <MenubarContent>
          <MenubarRadioGroup defaultValue="newest">
            <MenubarRadioItem value="newest">新着順</MenubarRadioItem>
            <MenubarRadioItem value="salary">給与が高い順</MenubarRadioItem>
            <MenubarRadioItem value="popular">人気順</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

/**
 * 企業向け管理画面のグローバルメニューに未読バッジを添えた例
 */
function AdminPattern() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>求人票</MenubarTrigger>

        <MenubarContent>
          <MenubarItem>
            新規作成
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>

          <MenubarItem>求人票一覧</MenubarItem>

          <MenubarSeparator />

          <MenubarItem>下書き</MenubarItem>
          <MenubarItem>公開停止中</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>候補者</MenubarTrigger>

        <MenubarContent>
          <MenubarItem>候補者リスト</MenubarItem>
          <MenubarItem>送ったいいかも</MenubarItem>

          <MenubarItem>
            もらったいいかも
            <Badge variant="secondary" className="ml-auto">
              3
            </Badge>
          </MenubarItem>

          <MenubarItem>あしあと</MenubarItem>
          <MenubarItem>フォロー</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>応募者</MenubarTrigger>

        <MenubarContent>
          <MenubarItem>
            進捗管理
            <Badge variant="destructive" className="ml-auto">
              8
            </Badge>
          </MenubarItem>

          <MenubarItem>
            メッセージ
            <Badge variant="destructive" className="ml-auto">
              5
            </Badge>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>設定</MenubarTrigger>

        <MenubarContent>
          <MenubarItem>保存した検索条件</MenubarItem>
          <MenubarItem>メッセージテンプレート</MenubarItem>

          <MenubarSeparator />

          <MenubarItem>会社管理</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export const menubarDoc: ComponentDoc = {
  name: "menubar",
  title: "Menubar",
  category: "ナビゲーション",
  purpose:
    "複数のドロップダウンメニューを横一列に並べ、デスクトップアプリのメニューバーのように機能を分類して提供するコンポーネント。左右キーでメニュー間を移動でき、操作の多い画面のヘッダーに向く。jobantenna では企業向け管理画面のグローバルメニューや、求人検索ページの操作バーに使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "通常項目・ショートカット表示・サブメニュー・破壊的操作を組み合わせた基本形。MenubarTrigger に文字列を渡すだけでメニューバーの項目になる。",
      previewHeight: 400,
      Demo: BasicPattern,
    },
    {
      id: "filter-sort",
      title: "絞り込みと並び替え",
      description:
        "MenubarCheckboxItem で雇用形態やこだわり条件を複数選択し、MenubarRadioGroup で並び順を単一選択する例。defaultChecked / defaultValue で初期状態を指定する。",
      previewHeight: 400,
      Demo: FilterSortPattern,
    },
    {
      id: "admin",
      title: "管理画面",
      description:
        "企業向け管理画面のグローバルメニュー。求人票・候補者・応募者・設定を機能ごとにまとめ、未読件数は ml-auto の Badge で項目の右端に表示する。",
      previewHeight: 400,
      Demo: AdminPattern,
    },
  ],
}
