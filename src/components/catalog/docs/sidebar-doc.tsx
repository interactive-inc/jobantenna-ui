import { FootprintsIcon, ThumbsUpIcon, UserRoundPlusIcon, UsersRoundIcon } from "lucide-react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

const items = [
  { id: "search", label: "候補者と出会う", icon: UsersRoundIcon },
  { id: "likes", label: "いいかも", icon: ThumbsUpIcon, count: 2 },
  { id: "visits", label: "あしあと", icon: FootprintsIcon, count: 5 },
  { id: "follows", label: "フォロー", icon: UserRoundPlusIcon, count: 1 },
]

function CandidateMenu({ horizontal = false }: { horizontal?: boolean }) {
  return (
    <nav
      aria-label="候補者メニュー"
      className={cn("w-full bg-card", horizontal ? "overflow-x-auto border-b" : "max-w-60 py-6")}
    >
      <SidebarMenu className={horizontal ? "w-max min-w-full flex-row gap-0" : "gap-1"}>
        {items.map(({ id, label, icon: Icon, count }) => {
          const active = id === "search"
          return (
            <SidebarMenuItem
              key={id}
              className={cn(
                horizontal ? "shrink-0 border-b-2 border-transparent p-1" : "px-4",
                active && (horizontal
                  ? "border-brand"
                  : "before:absolute before:inset-y-0 before:start-0 before:my-auto before:h-5 before:w-0.75 before:rounded-full before:bg-brand"),
              )}
            >
              <SidebarMenuButton
                render={<a href={`#${id}`} aria-current={active ? "page" : undefined} />}
                isActive={active}
                variant="section"
              >
                {!horizontal && <Icon strokeWidth={1.75} aria-hidden />}
                <span>{label}</span>
                {count !== undefined && horizontal && (
                  <span className="font-numeric text-link">{count}</span>
                )}
                {count !== undefined && !horizontal && id !== "follows" && (
                  <span className="ml-auto inline-flex size-5 items-center justify-center rounded-full bg-(--ja-blue) text-xs font-bold text-(--ja-paper)">
                    {count}
                  </span>
                )}
                {count !== undefined && !horizontal && id === "follows" && (
                  <>
                    <span className="ml-auto size-2 rounded-full bg-blue2" aria-hidden="true" />
                    <span className="sr-only">新着あり</span>
                  </>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </nav>
  )
}

function HorizontalCandidateMenu() {
  return <CandidateMenu horizontal />
}

export const sidebarDoc: ComponentDoc = {
  name: "sidebar",
  title: "Sidebar",
  category: "ナビゲーション",
  purpose: "候補者など、一つの区分の中で関連する画面を移動するときに使います。",
  patterns: [
    {
      id: "admin",
      title: "左側の候補者メニュー",
      description: "1280px以上では本文の左に置き、現在地を左の黄色い印と太字で示します。",
      showControls: false,
      previewHeight: null,
      Demo: CandidateMenu,
    },
    {
      id: "horizontal",
      title: "横並びの候補者メニュー",
      description: "1280px未満では本文の上に置き、現在地の下に線を引きます。収まらない項目は横にスクロールして表示します。",
      showControls: false,
      previewHeight: null,
      Demo: HorizontalCandidateMenu,
    },
  ],
  usage: {
    recommended: [
      "縦に固定するメニューは、本文と独立してスクロールできるようにする。",
      "項目にカーソルを重ねたときは、丸い面で反応を示す。",
      "PCではいいかもとあしあとの件数を青い丸で、フォローの新着を青い点で示す。横並びでは件数を項目名の横に置く。",
    ],
    avoid: ["区分内のメニューに全体ナビゲーションの項目を重ねて並べる。"],
  },
}
