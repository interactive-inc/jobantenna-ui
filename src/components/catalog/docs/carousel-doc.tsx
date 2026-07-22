import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Building2Icon, ImageIcon, MapPinIcon } from "lucide-react"

/**
 * おすすめ求人カードを1枚ずつスライド表示するカルーセル
 */
function RecommendedJobsPattern() {
  const jobs = [
    {
      company: "株式会社サンプル",
      title: "フロントエンドエンジニア",
      catchTitle: "自社サービスの UI をつくる仲間を募集",
      conditions: "那覇市 / 正社員 / 月給 25万円",
      updatedAt: "本日",
      isApplied: false,
    },
    {
      company: "常磐合同産業株式会社",
      title: "営業・企画営業（法人向け）",
      catchTitle: "【未経験歓迎・在宅可】提案型の法人営業",
      conditions: "浦添市 / 正社員 / 月給 200,000〜300,000円",
      updatedAt: "3日前",
      isApplied: true,
    },
    {
      company: "株式会社アールエムシー",
      title: "調理スタッフ",
      catchTitle: "地元食材を活かしたメニューづくり",
      conditions: "沖縄市 / 派遣社員 / 月給 21万円〜",
      updatedAt: "本日",
      isApplied: false,
    },
  ]

  return (
    <Carousel className="mx-auto w-full max-w-xs">
      <CarouselContent>
        {jobs.map((job) => (
          <CarouselItem key={job.title}>
            <Card className="gap-0 p-0" size="sm">
              <div className="flex h-32 items-center justify-center bg-muted">
                <ImageIcon className="size-8 text-muted-foreground" />
              </div>

              <div className="flex flex-col gap-2 p-4">
                <div className="flex items-center gap-2">
                  <div className="flex size-4 shrink-0 items-center justify-center rounded bg-muted">
                    <Building2Icon className="size-3 text-muted-foreground" />
                  </div>
                  <span className="truncate text-xs text-muted-foreground">{job.company}</span>
                </div>

                <p className="text-sm font-medium">{job.title}</p>

                <p className="truncate text-xs text-muted-foreground">{job.catchTitle}</p>

                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPinIcon className="size-3 shrink-0" />
                  {job.conditions}
                </p>

                <div className="flex items-center justify-between gap-1">
                  <div className="flex gap-1">
                    <Badge variant="secondary">新卒採用</Badge>
                    <Badge variant="outline">Web履歴書OK</Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">{job.updatedAt}</span>
                </div>

                <Button size="sm" className="w-full" disabled={job.isApplied}>
                  {job.isApplied ? "応募済み" : "応募する"}
                </Button>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

/**
 * basis-1/3 で3枚並べて横スクロールする小型求人カード
 */
function MultiSlidePattern() {
  const jobs = [
    { title: "フロントエンドエンジニア", company: "株式会社サンプル" },
    { title: "営業・企画営業（法人向け）", company: "常磐合同産業株式会社" },
    { title: "調理スタッフ", company: "株式会社アールエムシー" },
    { title: "保育士", company: "ひまわり保育園" },
    { title: "経理事務", company: "美ら海商事" },
    { title: "施工管理", company: "南国建設" },
  ]

  return (
    <Carousel className="mx-auto w-full max-w-sm" opts={{ align: "start" }}>
      <CarouselContent>
        {jobs.map((job) => (
          <CarouselItem key={job.title} className="basis-1/3">
            <div className="overflow-hidden rounded-md border">
              <div className="flex h-16 items-center justify-center bg-muted">
                <ImageIcon className="size-4 text-muted-foreground" />
              </div>

              <div className="flex flex-col gap-0.5 p-2">
                <p className="truncate text-xs font-medium">{job.title}</p>
                <p className="truncate text-xs text-muted-foreground">{job.company}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export const carouselDoc: ComponentDoc = {
  name: "carousel",
  title: "Carousel",
  category: "レイアウト",
  purpose:
    "限られた横幅で複数のコンテンツを順送りに見せるスライド表示コンポーネントです。ジョブアンテナではトップページのおすすめ求人や、職種・エリアから探す回遊導線を横並びで見せる場面で使います。前後ボタン・矢印キー・ドラッグ操作でスライドを送れます。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "おすすめ求人カードを1枚ずつ送る基本形です。CarouselContent に CarouselItem を並べ、CarouselPrevious / CarouselNext で前後に移動します。応募済みの求人はボタンを disabled にします。",
      previewHeight: 480,
      Demo: RecommendedJobsPattern,
    },
    {
      id: "multi-slide",
      title: "複数枚表示",
      description:
        "CarouselItem に basis-1/3 を指定して3枚ずつ見せる例です。opts の align を start にして先頭揃えでスクロールし、小型の求人カードを一覧的に見せたいときに使います。",
      previewHeight: null,
      Demo: MultiSlidePattern,
    },
  ],
}
