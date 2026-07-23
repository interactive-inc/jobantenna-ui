import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Building2, HeartIcon, PlusIcon, SearchIcon } from "lucide-react"

/**
 * バリアント6種(default / secondary / outline / ghost / destructive / link)の一覧
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-wrap items-center gap-2">
      <Button>応募する</Button>
      <Button variant="secondary">保存</Button>
      <Button variant="outline">詳細を見る</Button>
      <Button variant="ghost">キャンセル</Button>
      <Button variant="destructive">削除</Button>
      <Button variant="link">求人一覧へ</Button>
    </div>
  )
}

/**
 * テキストサイズ4種とアイコン専用サイズ4種の一覧
 */
function SizesPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="xs">XS</Button>
        <Button size="sm">SM</Button>
        <Button size="default">Default</Button>
        <Button size="lg">LG</Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button size="icon-xs" variant="outline" aria-label="追加">
          <PlusIcon />
        </Button>
        <Button size="icon-sm" variant="outline" aria-label="追加">
          <PlusIcon />
        </Button>
        <Button size="icon" variant="outline" aria-label="追加">
          <PlusIcon />
        </Button>
        <Button size="icon-lg" variant="outline" aria-label="追加">
          <PlusIcon />
        </Button>
      </div>
    </div>
  )
}

/**
 * 求人カードの応募ボタン。応募前は primary、応募済みは disabled で再応募を防ぐ
 */
function ApplyStatusPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center gap-4 rounded-lg border p-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted">
          <Building2 className="size-4 text-muted-foreground" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">フロントエンドエンジニア</span>
          <span className="truncate text-xs text-muted-foreground">
            那覇市 / 正社員 / 月給 25万円
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button size="sm" variant="outline">
            <HeartIcon />
            いいかも！
          </Button>
          <Button size="sm">応募する</Button>
        </div>
      </div>

      <div className="flex items-center gap-4 rounded-lg border p-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted">
          <Building2 className="size-4 text-muted-foreground" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">営業・企画営業(法人向け)</span>
          <span className="truncate text-xs text-muted-foreground">
            浦添市 / 正社員 / 月給 200,000〜300,000円
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button size="sm" variant="outline">
            <HeartIcon />
            いいかも！
          </Button>
          <Button size="sm" disabled>
            応募済み
          </Button>
        </div>
      </div>
    </div>
  )
}

/**
 * 検索条件フッターの実行・クリアボタンの組み合わせ
 */
function SearchFooterPattern() {
  return (
    <div className="flex w-full max-w-md items-center justify-between gap-2 rounded-lg border p-4">
      <Button variant="secondary">すべてクリア</Button>
      <Button>
        <SearchIcon />
        128件 検索する
      </Button>
    </div>
  )
}

export const buttonDoc: ComponentDoc = {
  name: "button",
  title: "Button",
  category: "アクション",
  purpose:
    "クリックで操作を実行するための基本コンポーネントです。バリアントとサイズの組み合わせでアクションの重要度を表現します。ジョブアンテナでは求人への応募・いいかも！送信・検索実行・求人票の編集や削除など、あらゆる操作の起点に使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "バリアント6種の一覧です。主要アクションは default、補助は secondary / outline、控えめな操作は ghost、取り消せない操作は destructive、遷移は link を使います。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "sizes",
      title: "サイズ",
      description:
        "テキストボタンは xs / sm / default / lg の4段階です。アイコンのみのボタンは icon-* サイズと aria-label を組み合わせて正方形にします。",
      previewHeight: null,
      Demo: SizesPattern,
    },
    {
      id: "apply-status",
      title: "応募ボタンの状態",
      description:
        "求人カードでの「応募する」と「いいかも！」の並びです。応募済みの求人はラベルを「応募済み」に変えて disabled にし、二重応募を防ぎます。",
      previewHeight: null,
      Demo: ApplyStatusPattern,
    },
    {
      id: "search-footer",
      title: "検索フッター",
      description:
        "検索条件パネルのフッターです。ヒット件数を含めた「128件 検索する」を primary、条件リセットの「すべてクリア」を secondary で並べます。",
      previewHeight: null,
      Demo: SearchFooterPattern,
    },
  ],
}
