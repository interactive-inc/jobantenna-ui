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
        <PaginationContent>
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

/**
 * ページ数が少ないときに全ページ番号を並べる省略記号なしのページ送り
 */
function FewPagesPattern() {
  return (
    <Pagination>
      <PaginationContent>
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
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" text="次へ" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

/**
 * 中間ページ閲覧中に前後を省略記号でまとめ、先頭と末尾へ飛べるページ送り
 */
function MiddlePagePattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <p className="text-muted-foreground text-sm">
        キーワード「フロントエンドエンジニア」の求人 245件（13ページ中 7ページ目）
      </p>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" text="前へ" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">6</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              7
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">8</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">13</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" text="次へ" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

/**
 * 先頭ページ表示中に「前へ」を aria-disabled で無効化したページ送り
 */
function FirstPagePattern() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            text="前へ"
            aria-disabled
            className="pointer-events-none opacity-50"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
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
  )
}

export const paginationDoc: ComponentDoc = {
  name: "pagination",
  title: "Pagination",
  category: "ナビゲーション",
  purpose:
    "検索結果や一覧が複数ページに分かれるとき、ページ番号と前後リンクで移動するためのナビゲーションです。ジョブアンテナでは求人検索結果や管理画面の応募者テーブルのページ送りに使います。現在ページは isActive で示し、ページ数が多いときは PaginationEllipsis で中間を省略します。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "求人検索結果の件数表示と組み合わせた標準形です。現在ページ付近と最終ページを残し、間を PaginationEllipsis で省略します。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "few-pages",
      title: "省略記号なし",
      description:
        "総ページ数が5ページ程度までなら省略せず全ページ番号を並べます。目的のページへ一足飛びに移動できます。",
      previewHeight: null,
      Demo: FewPagesPattern,
    },
    {
      id: "middle-page",
      title: "中間ページ",
      description:
        "ページ数が多い検索結果の中間を閲覧中の状態です。前後1ページと先頭・末尾だけを残し、両側を省略記号でまとめます。",
      previewHeight: null,
      Demo: MiddlePagePattern,
    },
    {
      id: "first-page",
      title: "先頭ページ",
      description:
        "1ページ目では「前へ」を aria-disabled と pointer-events-none で無効化します。リンク要素のため Button の disabled ではなくクラスで抑止します。",
      previewHeight: null,
      Demo: FirstPagePattern,
    },
  ],
}
