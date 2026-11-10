import { Link, useLocation } from "@tanstack/react-router"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const ruleGroups = [
  {
    title: null,
    links: [{ to: "/", label: "導入" }],
  },
  {
    title: "設計原則",
    links: [
      { to: "/rules/principles", label: "基本原則" },
      { to: "/rules/experience", label: "画面の言葉" },
      { to: "/rules/accessibility", label: "アクセシビリティ" },
    ],
  },
  {
    title: "基礎要素",
    links: [
      { to: "/rules/color", label: "配色" },
      { to: "/rules/typography", label: "文字" },
      { to: "/rules/spacing", label: "余白とレイアウト" },
      { to: "/rules/shape", label: "角丸と重なり" },
      { to: "/rules/images", label: "画像" },
    ],
  },
] as const

const componentGroups = [
  {
    title: "アクション",
    items: [
      ["button", "ボタン"],
      ["text-link", "テキストリンク"],
      ["toggle", "フィルターチップ"],
    ],
  },
  {
    title: "フォーム",
    items: [
      ["input", "一行入力"],
      ["textarea", "複数行入力"],
      ["select", "セレクト"],
      ["radio-group", "ラジオボタン"],
      ["switch", "スイッチ"],
      ["toggle-group", "セグメントコントロール"],
      ["checkbox", "チェックボックス"],
      ["calendar", "日付ピッカー"],
      ["field", "フィールド"],
      ["step-indicator", "ステッパー"],
    ],
  },
  {
    title: "ナビゲーション",
    items: [
      ["sidebar", "サイドバー"],
      ["tabs", "タブ"],
      ["breadcrumb", "パンくず"],
      ["pagination", "ページ送り"],
    ],
  },
  {
    title: "データ表示",
    items: [
      ["badge", "バッジ"],
      ["avatar", "アバター"],
      ["card", "カード"],
      ["table", "表"],
      ["period-delta", "増減"],
      ["message", "メッセージ"],
    ],
  },
  {
    title: "フィードバック",
    items: [
      ["alert", "お知らせの帯"],
      ["sonner", "トースト"],
      ["empty", "空の状態"],
      ["skeleton", "スケルトン"],
      ["spinner", "スピナー"],
      ["progress", "進捗バー"],
      ["read-error", "読み込みの失敗"],
    ],
  },
  {
    title: "オーバーレイ",
    items: [
      ["dropdown-menu", "ドロップダウンメニュー"],
      ["dialog", "ダイアログ"],
      ["alert-dialog", "確認ダイアログ"],
      ["sheet", "シート"],
      ["popover", "ポップオーバー"],
      ["form-save-bar", "保存バー"],
    ],
  },
] as const

const navItemClass = "border-s-2 border-transparent data-[active=true]:border-sidebar-primary"

/** カタログのガイドラインと部品を探すナビゲーション。 */
export function CatalogSidebar() {
  const pathname = useLocation().pathname
  const sidebar = useSidebar()
  const closeMobile = () => sidebar.setOpenMobile(false)

  return (
    <Sidebar className="group-data-[side=left]:border-r-0">
      <SidebarHeader className="px-4 py-3">
        <p className="text-sm font-bold">ジョブアンテナ UI</p>
      </SidebarHeader>
      <SidebarContent>
        <nav aria-label="デザインシステムの目次">
          {ruleGroups.map((group) => (
            <SidebarGroup key={group.title ?? "overview"}>
              {group.title && <SidebarGroupLabel render={<h2 />}>{group.title}</SidebarGroupLabel>}
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.links.map((link) => (
                    <SidebarMenuItem key={link.to}>
                      <SidebarMenuButton
                        className={navItemClass}
                        render={
                          <Link
                            to={link.to}
                            activeOptions={{ exact: true }}
                            onClick={closeMobile}
                          />
                        }
                        isActive={pathname === link.to}
                        aria-current={pathname === link.to ? "page" : undefined}
                      >
                        {link.label}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}

          {componentGroups.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel render={<h2 />}>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map(([name, label]) => {
                    const active = pathname === `/components/${name}`
                    return (
                      <SidebarMenuItem key={name}>
                        <SidebarMenuButton
                          className={navItemClass}
                          render={
                            <Link to="/components/$name" params={{ name }} onClick={closeMobile} />
                          }
                          isActive={active}
                          aria-current={active ? "page" : undefined}
                        >
                          {label}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </nav>
      </SidebarContent>
    </Sidebar>
  )
}
