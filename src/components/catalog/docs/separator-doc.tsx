import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Separator } from "@/components/ui/separator"
import { Building2Icon, ImageIcon } from "lucide-react"

/**
 * 水平・垂直の区切り線。orientation で向きを切り替える
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="text-sm font-medium">株式会社ジョブアンテナ沖縄</div>
        <div className="text-sm text-muted-foreground">那覇市の正社員求人を多数掲載しています</div>

        <Separator />

        <div className="text-sm text-muted-foreground">月給 25 万円〜 / 完全週休二日制</div>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <div>正社員</div>
        <Separator orientation="vertical" className="h-4" />
        <div>那覇市</div>
        <Separator orientation="vertical" className="h-4" />
        <div>未経験歓迎</div>
      </div>
    </div>
  )
}

/**
 * 求人カードのメタ情報（勤務地・雇用形態・給与）を縦線で区切る
 */
function JobCardMetaPattern() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border">
      <div className="flex h-32 items-center justify-center bg-muted">
        <ImageIcon className="size-8 text-muted-foreground" />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <div className="flex size-4 shrink-0 items-center justify-center rounded bg-muted">
            <Building2Icon className="size-3 text-muted-foreground" />
          </div>
          <span className="truncate text-xs text-muted-foreground">株式会社アールエムシー</span>
        </div>

        <p className="text-sm font-medium">
          フロントエンドエンジニア｜【未経験歓迎・在宅可】自社サービスの UI 開発
        </p>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>那覇市</span>
          <Separator orientation="vertical" className="h-4" />
          <span>正社員</span>
          <Separator orientation="vertical" className="h-4" />
          <span>月給 25万円</span>
        </div>
      </div>
    </div>
  )
}

/**
 * 求人詳細のセクションを横線で区切る
 */
function JobDetailSectionsPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 rounded-lg border p-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium">仕事の内容</h3>
        <p className="text-sm text-muted-foreground">
          自社求人サービスのフロントエンド開発をお任せします。未経験の方も歓迎です。
        </p>
      </div>

      <Separator />

      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium">給与・待遇</h3>
        <p className="text-sm text-muted-foreground">月給 200,000〜300,000円（経験・能力による）</p>
      </div>

      <Separator />

      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium">勤務情報</h3>
        <p className="text-sm text-muted-foreground">9:00-18:00（休憩60分）</p>
      </div>
    </div>
  )
}

/**
 * 求人票の統計を高さ指定なしの縦線で等分する
 */
function JobStatsPattern() {
  return (
    <div className="flex w-full max-w-sm items-center rounded-lg border p-4">
      <div className="flex flex-1 flex-col items-center gap-0.5">
        <span className="text-lg font-semibold">1,240</span>
        <span className="text-xs text-muted-foreground">閲覧</span>
      </div>

      <Separator orientation="vertical" />

      <div className="flex flex-1 flex-col items-center gap-0.5">
        <span className="text-lg font-semibold">12</span>
        <span className="text-xs text-muted-foreground">応募</span>
      </div>

      <Separator orientation="vertical" />

      <div className="flex flex-1 flex-col items-center gap-0.5">
        <span className="text-lg font-semibold">34</span>
        <span className="text-xs text-muted-foreground">いいかも</span>
      </div>
    </div>
  )
}

export const separatorDoc: ComponentDoc = {
  name: "separator",
  title: "Separator",
  category: "レイアウト",
  purpose:
    "コンテンツのまとまりを罫線で視覚的に区切るコンポーネント。jobantenna では求人詳細のセクション区切り（横）と、求人カードで勤務地・雇用形態・給与を1行に並べるメタ情報の区切り（縦）に使う。余白だけでは境界が曖昧になる場面で、情報のグループを明確にする。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "orientation 未指定なら横線で幅いっぱいに伸びる。vertical を指定すると縦線になり、テキストの並びに合わせて h-4 などで高さを揃える。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "job-card-meta",
      title: "求人カード",
      description:
        "求人カードのメタ情報（那覇市 / 正社員 / 月給 25万円）を縦線で区切る例。スラッシュや中黒より境界がはっきりし、項目の追加・削除にも崩れない。",
      previewHeight: 400,
      Demo: JobCardMetaPattern,
    },
    {
      id: "job-detail-sections",
      title: "求人詳細のセクション",
      description:
        "仕事の内容・給与・待遇・勤務情報といったセクションの間に横線を入れる例。見出しだけに頼らず、読み進める単位を明確にする。",
      previewHeight: null,
      Demo: JobDetailSectionsPattern,
    },
    {
      id: "job-stats",
      title: "求人票の統計",
      description:
        "閲覧・応募・いいかもの統計を縦線で3等分する例。縦線は高さを指定しないと self-stretch で親要素の高さいっぱいに伸びるため、ブロック同士の区切りにそのまま使える。",
      previewHeight: null,
      Demo: JobStatsPattern,
    },
  ],
}
