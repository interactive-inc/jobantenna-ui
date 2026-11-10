import { SlidersHorizontalIcon } from "lucide-react"
import { useState } from "react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"

function SearchFilters() {
  const isMobile = useIsMobile()
  const filtersState = useState({ recentLogin: false, hasWorkHistory: false })
  const filters = filtersState[0]
  const setFilters = filtersState[1]

  return (
    <Sheet>
      <SheetTrigger render={<Button type="button" variant="ghost" />}>
        <SlidersHorizontalIcon strokeWidth={1.75} aria-hidden />
        細かく探す
      </SheetTrigger>
      <SheetContent
        side={isMobile ? "bottom" : "right"}
        showCloseButton={false}
        className={
          isMobile
            ? "h-(--ja-layout-filter-height)! rounded-t-(--radius-container)"
            : "w-full max-w-(--ja-dialog-width)!"
        }
      >
        <SheetHeader className="shrink-0 flex-row items-start justify-between gap-3 border-b px-(--ja-layout-panel-gutter) py-4">
          <div className="grid min-w-0 gap-1">
            <SheetTitle className="text-2xl font-bold">細かく探す</SheetTitle>
            <SheetDescription>希望や経験、最近の活動から候補者を絞れます。</SheetDescription>
          </div>
          <SheetClose
            render={<Button type="button" variant="ghost" size="sm" className="text-link" />}
          >
            閉じる
          </SheetClose>
        </SheetHeader>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-(--ja-layout-panel-gutter) py-6">
          <fieldset className="grid gap-(--ja-layout-field-gap)">
            <legend className="mb-4 text-lg font-bold">活動・経験</legend>
            <Label className="min-h-6">
              <Checkbox
                checked={filters.recentLogin}
                onCheckedChange={(recentLogin) =>
                  setFilters((current) => ({ ...current, recentLogin }))
                }
              />
              1週間以内にログイン
            </Label>
            <Label className="min-h-6">
              <Checkbox
                checked={filters.hasWorkHistory}
                onCheckedChange={(hasWorkHistory) =>
                  setFilters((current) => ({ ...current, hasWorkHistory }))
                }
              />
              職歴あり
            </Label>
          </fieldset>
        </div>
        <SheetFooter className="flex-row justify-between shrink-0 border-t px-(--ja-layout-panel-gutter) pt-4 pb-(--ja-layout-safe-bottom)">
          <Button
            type="button"
            variant="ghost"
            className="px-0 text-link"
            onClick={() => setFilters({ recentLogin: false, hasWorkHistory: false })}
          >
            条件をはずす
          </Button>
          <SheetClose render={<Button type="button" />}>検索する</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export const sheetDoc: ComponentDoc = {
  name: "sheet",
  title: "シート（Sheet）",
  category: "オーバーレイ",
  purpose: "元の画面を離れずに、一覧や複数の入力欄を画面の端から開きます。",
  patterns: [
    {
      id: "basic",
      title: "候補者の検索条件",
      description:
        "PCでは右、スマートフォンでは下から開きます。見出しと操作を残し、条件欄をスクロールできるようにします。",
      previewHeight: 420,
      showControls: false,
      Demo: SearchFilters,
    },
  ],
  usage: {
    recommended: [
      "本文が長い場合は、シートの中でスクロールできるようにする。",
      "閉じる操作は見出しの右、検索する操作はシートの下に置く。",
      "条件をはずす操作は下部の左に置く。編集中の条件を外し、検索する操作で結果に反映する。",
      "シート内で一覧から詳細を開く場合は、ヘッダーの左に一覧へ戻る操作、右に閉じる操作を置く。",
      "保存済みの検索条件を表示しているときは、条件欄から別の保存済み条件を選べるようにする。選んだ条件で検索し、条件名と結果を更新する。",
      "保存済みの条件を編集したときは、保存メニューで上書きと別名保存を選べるようにする。別名で保存すると元の条件はそのまま残る。",
      "スマートフォンでは検索する操作の下に端末の安全領域を取る。",
    ],
    avoid: ["操作のすぐ近くに短い補足を出すために使う。その場合はポップオーバーを使う。"],
  },
}
