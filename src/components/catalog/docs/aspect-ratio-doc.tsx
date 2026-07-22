import type { ComponentDoc } from "@/components/catalog/component-doc"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BuildingIcon, ImageIcon } from "lucide-react"

/**
 * 代表的な比率(16:9 / 4:3 / 1:1)のプレースホルダ一覧
 */
function RatioListPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">16 / 9 — 求人メイン画像</p>

        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg border bg-muted">
          <div className="flex h-full w-full flex-col items-center justify-center gap-2">
            <ImageIcon className="size-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">那覇市のカフェスタッフ募集（正社員）</p>
          </div>
        </AspectRatio>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-1 flex-col gap-2">
          <p className="text-sm text-muted-foreground">4 / 3 — 職場の様子</p>

          <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg border bg-muted">
            <div className="flex h-full w-full items-center justify-center">
              <BuildingIcon className="size-8 text-muted-foreground" />
            </div>
          </AspectRatio>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <p className="text-sm text-muted-foreground">1 / 1 — 企業ロゴ</p>

          <AspectRatio ratio={1} className="overflow-hidden rounded-lg border bg-muted">
            <div className="flex h-full w-full items-center justify-center">
              <BuildingIcon className="size-8 text-muted-foreground" />
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  )
}

/**
 * 16:9 のメイン画像と 1:1 の企業ロゴを組み合わせた求人カード
 */
function JobCardPattern() {
  return (
    <Card className="w-full max-w-sm gap-0 overflow-hidden p-0">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <div className="flex h-full w-full items-center justify-center">
          <ImageIcon className="size-8 text-muted-foreground" />
        </div>
      </AspectRatio>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 shrink-0">
            <AspectRatio ratio={1} className="overflow-hidden rounded-md border bg-muted">
              <div className="flex h-full w-full items-center justify-center">
                <BuildingIcon className="size-4 text-muted-foreground" />
              </div>
            </AspectRatio>
          </div>

          <p className="truncate text-sm text-muted-foreground">株式会社サンプル</p>
        </div>

        <p className="font-semibold">フロントエンドエンジニア</p>

        <p className="text-sm text-muted-foreground">那覇市 / 正社員 / 月給 250,000〜350,000円</p>

        <div className="flex gap-1">
          <Badge variant="secondary">新卒採用</Badge>

          <Badge variant="outline">Web履歴書OK</Badge>
        </div>

        <Button className="w-full">応募する</Button>
      </div>
    </Card>
  )
}

const followedCompanyNames = ["株式会社サンプル", "常磐合同産業株式会社", "株式会社アールエムシー"]

/**
 * フォロー中の企業ロゴを 1:1 で揃えたグリッド
 */
function CompanyLogoGridPattern() {
  return (
    <div className="grid w-full max-w-md grid-cols-3 gap-4">
      {followedCompanyNames.map((companyName) => (
        <div key={companyName} className="flex flex-col gap-1">
          <AspectRatio ratio={1} className="overflow-hidden rounded-lg border bg-muted">
            <div className="flex h-full w-full items-center justify-center">
              <BuildingIcon className="size-8 text-muted-foreground" />
            </div>
          </AspectRatio>

          <p className="truncate text-center text-xs text-muted-foreground">{companyName}</p>
        </div>
      ))}
    </div>
  )
}

export const aspectRatioDoc: ComponentDoc = {
  name: "aspect-ratio",
  title: "Aspect Ratio",
  category: "データ表示",
  purpose:
    "画像やメディア領域の縦横比を固定して表示するためのコンポーネントです。画像の読み込み前後でレイアウトが崩れないよう、枠のサイズを比率で確保します。ジョブアンテナでは求人メイン画像(16:9)や企業ロゴ(1:1)のプレースホルダに使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "ratio に数値(16 / 9 など)を渡すと、幅に応じて高さが自動で決まります。よく使う 16:9 / 4:3 / 1:1 の比較です。",
      previewHeight: 560,
      Demo: RatioListPattern,
    },
    {
      id: "job-card",
      title: "求人カード",
      description:
        "求人カードの上部にメイン画像(16:9)、企業名の横にロゴ(1:1)を配置した例です。画像未設定でも比率が保たれるためカードの高さが揃います。",
      previewHeight: 480,
      Demo: JobCardPattern,
    },
    {
      id: "company-logo-grid",
      title: "企業ロゴ一覧",
      description:
        "フォロー中の企業一覧など、サイズの異なるロゴを 1:1 で統一してグリッドに並べる例です。",
      previewHeight: null,
      Demo: CompanyLogoGridPattern,
    },
  ],
}
