import type { ComponentDoc } from "@/components/catalog/component-doc"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  BellIcon,
  BookmarkIcon,
  BriefcaseIcon,
  Building2Icon,
  FileTextIcon,
  InboxIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  MessageSquareIcon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"

/**
 * 求人サイトのマイページを想定した、トリガーで開閉できるサイドバーレイアウト
 */
function BasicPattern() {
  return (
    <SidebarProvider defaultOpen className="h-full min-h-0">
      <Sidebar collapsible="offcanvas">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1 text-sm font-semibold">
            <BriefcaseIcon className="size-4" />
            <span>ジョブアンテナ</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>求人を探す</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <SearchIcon />
                    <span>求人検索</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <BookmarkIcon />
                    <span>保存した求人</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>12</SidebarMenuBadge>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <MapPinIcon />
                    <span>エリアから探す</span>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#">
                        <span>那覇市</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#">
                        <span>浦添市</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#">
                        <span>沖縄市</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel>応募管理</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <FileTextIcon />
                    <span>応募履歴</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>3</SidebarMenuBadge>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <BellIcon />
                    <span>スカウト通知</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <UserIcon />
                    <span>プロフィール</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SettingsIcon />
                <span>設定</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <span className="text-sm font-medium">求人検索</span>
        </header>
        <div className="flex flex-col gap-2 p-4">
          <p className="text-sm font-medium">那覇市の正社員求人 128件</p>
          <p className="text-sm text-muted-foreground">
            左のトリガーボタンでサイドバーを開閉できます。
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

/**
 * 企業管理画面を想定した、サブメニューと未読バッジ付きのサイドバーと KPI カード
 */
function AdminPattern() {
  return (
    <SidebarProvider defaultOpen className="h-full min-h-0">
      <Sidebar variant="inset" collapsible="offcanvas">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1 text-sm font-semibold">
            <Building2Icon className="size-4" />
            <span>ジョブアンテナ管理画面</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>採用管理</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <LayoutDashboardIcon />
                    <span>ダッシュボード</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <FileTextIcon />
                    <span>求人票</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <UsersIcon />
                    <span>候補者</span>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#">
                        <span>候補者リスト</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#">
                        <span>送ったいいかも</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#">
                        <span>もらったいいかも</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#">
                        <span>あしあと</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#">
                        <span>フォロー</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <InboxIcon />
                    <span>応募者</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge className="bg-destructive text-white">5</SidebarMenuBadge>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#">
                        <span>進捗管理</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#">
                        <span>メッセージ</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel>設定</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <BookmarkIcon />
                    <span>保存した検索条件</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <MessageSquareIcon />
                    <span>メッセージテンプレート</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Building2Icon />
                    <span>会社管理</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-muted">
              <Building2Icon className="size-4 text-muted-foreground" />
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-medium">株式会社サンプル</span>
              <span className="truncate text-xs text-muted-foreground">管理者アカウント</span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <span className="text-sm font-medium">ダッシュボード</span>
        </header>
        <div className="grid grid-cols-2 gap-2 p-4">
          <div className="flex flex-col gap-1 rounded-xl border p-4">
            <span className="text-xs text-muted-foreground">公開中の求人数</span>
            <span className="text-2xl font-semibold tabular-nums">12</span>
            <span className="text-xs text-muted-foreground">停止 2 件</span>
          </div>
          <div className="flex flex-col gap-1 rounded-xl border p-4">
            <span className="text-xs text-muted-foreground">応募数（累計）</span>
            <span className="text-2xl font-semibold tabular-nums">128</span>
            <span className="text-xs text-muted-foreground">未選考 8 件</span>
          </div>
          <div className="flex flex-col gap-1 rounded-xl border p-4">
            <span className="text-xs text-muted-foreground">未読メッセージ</span>
            <span className="text-2xl font-semibold tabular-nums">5</span>
            <span className="text-xs text-muted-foreground">候補者からの新着</span>
          </div>
          <div className="flex flex-col gap-1 rounded-xl border p-4">
            <span className="text-xs text-muted-foreground">もらったいいかも</span>
            <span className="text-2xl font-semibold tabular-nums">34</span>
            <span className="text-xs text-muted-foreground">で〜じ 3 件含む</span>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

/**
 * アイコン幅まで折りたためるサイドバー。折りたたみ中はツールチップでラベルを補う
 */
function IconCollapsePattern() {
  return (
    <SidebarProvider defaultOpen={false} className="h-full min-h-0">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1 text-sm font-semibold">
            <BriefcaseIcon className="size-4 shrink-0" />
            <span className="group-data-[collapsible=icon]:hidden">ジョブアンテナ</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive tooltip="ダッシュボード">
                    <LayoutDashboardIcon />
                    <span>ダッシュボード</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="求人管理">
                    <FileTextIcon />
                    <span>求人管理</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="応募者管理">
                    <UsersIcon />
                    <span>応募者管理</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="スカウト">
                    <SendIcon />
                    <span>スカウト</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="設定">
                <SettingsIcon />
                <span>設定</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <span className="text-sm font-medium">ダッシュボード</span>
        </header>
        <div className="flex flex-col gap-2 p-4">
          <p className="text-sm font-medium">アイコン折りたたみ（collapsible=&quot;icon&quot;）</p>
          <p className="text-sm text-muted-foreground">
            トリガーで展開・折りたたみを切り替えられます。折りたたみ中はメニューにカーソルを合わせるとツールチップでラベルが表示されます。
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export const sidebarDoc: ComponentDoc = {
  name: "sidebar",
  title: "Sidebar",
  category: "ナビゲーション",
  purpose:
    "画面の左右に固定するナビゲーション領域を、開閉状態の管理・モバイルでの Sheet 化まで含めて組み立てるコンポーネント群です。SidebarProvider で全体を包み、Sidebar にメニューを、SidebarInset に本体コンテンツを置き、SidebarTrigger で開閉します。jobantenna では求職者マイページや企業管理画面（ダッシュボード・求人票・候補者・応募者・設定）のグローバルナビゲーションに使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "SidebarProvider + Sidebar + SidebarInset の最小構成です。グループ見出し・未読バッジ・サブメニューを備え、SidebarTrigger と SidebarRail で開閉できます。",
      previewHeight: 480,
      Demo: BasicPattern,
    },
    {
      id: "admin",
      title: "管理画面",
      description:
        'variant="inset" の企業管理画面向けサイドバーです。候補者・応募者のサブメニュー、未読件数の destructive バッジ、フッターの会社アカウント表示と、SidebarInset 側の KPI カードを組み合わせています。',
      previewHeight: 560,
      Demo: AdminPattern,
    },
    {
      id: "icon-collapse",
      title: "アイコン折りたたみ",
      description:
        'collapsible="icon" でアイコン幅まで縮められる構成です。SidebarMenuButton の tooltip を指定すると、折りたたみ中だけラベルがツールチップで表示されます。画面を広く使いたい管理画面向けです。',
      previewHeight: 480,
      Demo: IconCollapsePattern,
    },
  ],
}
