import type { ComponentDoc } from "@/components/catalog/component-doc"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { HomeIcon, SlashIcon } from "lucide-react"

/**
 * ホームから現在ページまでの標準的な3階層のパンくず
 */
function BasicPattern() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">ホーム</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">求人検索</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>那覇市の正社員求人</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

/**
 * 求人検索の職種ドリルダウンをホームアイコン付きで表すパンくず
 */
function JobDrilldownPattern() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="inline-flex items-center gap-1">
            <HomeIcon className="size-4" />
            求人を探す
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">職種</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>営業・企画営業（法人向け）</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

/**
 * 深い階層の中間を BreadcrumbEllipsis で省略した求人詳細のパンくず
 */
function DeepHierarchyPattern() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">ホーム</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">ソフトウェア・情報処理</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>フロントエンドエンジニア</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

/**
 * 管理画面向けにスラッシュ区切りで求人票の編集画面までの経路を表すパンくず
 */
function AdminSlashPattern() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">ダッシュボード</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">求人票</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>【未経験歓迎・在宅可】調理スタッフの編集</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export const breadcrumbDoc: ComponentDoc = {
  name: "breadcrumb",
  title: "Breadcrumb",
  category: "ナビゲーション",
  purpose:
    "現在のページがサイト階層のどこにあるかを示し、上位階層へワンクリックで戻れるようにするナビゲーションです。jobantenna では「求人を探す > 職種 > 営業・企画営業」のような検索条件のドリルダウンや、求人詳細・管理画面での現在地表示に使います。最後の項目は BreadcrumbPage でリンクなしの現在地として示します。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "ホームから現在ページまでを BreadcrumbLink で辿り、最後だけ BreadcrumbPage にする最小構成です。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "job-drilldown",
      title: "職種ドリルダウン",
      description:
        "求人検索で職種を絞り込んでいく経路を表します。先頭にホームアイコンを添えて起点を分かりやすくしています。",
      previewHeight: null,
      Demo: JobDrilldownPattern,
    },
    {
      id: "deep-hierarchy",
      title: "深い階層の省略",
      description:
        "業種 > 職種カテゴリと階層が深くなる求人詳細で、中間階層を BreadcrumbEllipsis で省略して横幅を抑えます。",
      previewHeight: null,
      Demo: DeepHierarchyPattern,
    },
    {
      id: "admin-slash",
      title: "管理画面",
      description:
        "BreadcrumbSeparator の children を差し替えてスラッシュ区切りにした例です。管理画面の求人票編集など、パス感を出したい画面で使います。",
      previewHeight: null,
      Demo: AdminSlashPattern,
    },
  ],
}
