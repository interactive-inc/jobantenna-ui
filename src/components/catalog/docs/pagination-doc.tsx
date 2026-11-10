import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

/**
 * 件数表示付きの求人検索結果で、後半ページを省略記号でまとめたページ送り
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <p className="text-muted-foreground text-sm">那覇市の正社員求人 128件</p>

      <Pagination>
        <PaginationContent className="flex-wrap">
          <PaginationItem>
            <PaginationPrevious href="#" text="前へ" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">7</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" text="次へ" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

const total = 1143
const number = new Intl.NumberFormat("ja-JP")

function IconsOnlyPattern() {
  const [position, setPosition] = useState(3)
  return (
    <Pagination className="mx-0 w-auto" aria-label="候補者の前後">
      <PaginationContent className="gap-2">
        <PaginationItem>
          <Button
            type="button"
            size="icon-sm"
            shape="pill"
            variant="secondary"
            aria-label="前の人"
            disabled={position === 1}
            onClick={() => setPosition((value) => Math.max(1, value - 1))}
          >
            <ChevronLeftIcon aria-hidden="true" />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <span aria-live="polite" className="text-sm text-muted-foreground font-numeric">
            {number.format(position)} / {number.format(total)}
          </span>
        </PaginationItem>
        <PaginationItem>
          <Button
            type="button"
            size="icon-sm"
            shape="pill"
            variant="secondary"
            aria-label="次の人"
            disabled={position === total}
            onClick={() => setPosition((value) => Math.min(total, value + 1))}
          >
            <ChevronRightIcon aria-hidden="true" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

const iconsOnlyPattern = {
  id: "icons-only",
  title: "詳細の前へ・次へ",
  description:
    "一覧の順序を保ったまま詳細ページを送ります。詳細ページの見出し右側に直径32pxの丸い矢印ボタンを並べ、中央に現在位置と移動できる件数をInterで表示します。",
  details: [
    {
      label: "前後への移動",
      description:
        "候補者を送る矢印には「前の人」「次の人」の読み上げ名を付けます。先頭と末尾では進めない矢印を無効にし、位置を保ちます。",
    },
    {
      label: "一覧への戻り方",
      description:
        "一覧に戻る操作は、詳細ページの見出し左側に独立して置きます。「候補者と出会う（一覧）に戻る」のように戻り先を示し、表示と同じ名前で読み上げます。 詳細で前後に移動してから一覧に戻る場合も、元の絞り込み、並び順、ページ番号を保ちます。",
    },
  ],
  showControls: false,
  previewHeight: 140,
  Demo: IconsOnlyPattern,
} satisfies ComponentDoc["patterns"][number]

export const paginationDoc: ComponentDoc = {
  name: "pagination",
  title: "ページ送り（Pagination）",
  category: "ナビゲーション",
  purpose:
    "一覧を分けたページを移動するときや、詳細から前後の項目に移動するときに使います。",
  patterns: [
    iconsOnlyPattern,
    {
      id: "basic",
      title: "一覧のページ送り",
      description:
        "現在のページ番号とその近くの番号を表示し、離れた番号は省略記号でまとめます。",
      showControls: false,
      previewHeight: null,
      Demo: BasicPattern,
    },
  ],
  usage: {
    recommended: [
      "一覧では現在のページ番号を示し、移動後も絞り込みや並び順を保つ。",
      "詳細では移動できる範囲で現在位置と件数を示し、先頭や末尾でも矢印の位置を保つ。",
    ],
    avoid: ["一覧に戻る操作と、前後の項目へ進む操作を一つにまとめる。"],
  },
}
