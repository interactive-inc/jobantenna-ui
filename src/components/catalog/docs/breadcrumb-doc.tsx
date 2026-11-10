import { ArrowLeftIcon } from "lucide-react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

function SettingsHierarchy() {
  return (
    <div className="grid gap-3">
      <Breadcrumb aria-label="現在の階層">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">設定</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>メール通知</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="text-xl font-bold">メール通知</p>
    </div>
  )
}

function BackToList() {
  return (
    <div className="grid gap-3">
      <a href="#" className="inline-flex w-fit items-center gap-1 text-sm font-bold text-link hover:underline">
        <ArrowLeftIcon className="size-4" aria-hidden="true" />
        求人票に戻る
      </a>
      <p className="text-xl font-bold">求人票を編集する</p>
    </div>
  )
}

export const breadcrumbDoc: ComponentDoc = {
  name: "breadcrumb",
  title: "Breadcrumb",
  category: "ナビゲーション",
  purpose: "ページの見出しの上に、現在の階層か戻り先を示します。",
  patterns: [
    {
      id: "basic",
      title: "パンくず",
      description: "設定のように階層が深い画面では、上位の項目だけをリンクにします。",
      showControls: false,
      previewHeight: null,
      Demo: SettingsHierarchy,
    },
    {
      id: "back",
      title: "一覧に戻る",
      description: "一覧から開いた詳細や編集では、戻り先の名前をリンクに含めます。",
      showControls: false,
      previewHeight: null,
      Demo: BackToList,
    },
  ],
  usage: {
    recommended: ["ページ見出しより上に置き、本文と分ける。"],
    avoid: [
      "サイドメニューで現在地が分かる最上位のページにもパンくずを置く。",
      "パンくずの先頭にホームやダッシュボードを加える。",
    ],
  },
}
