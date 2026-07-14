import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { AntennaIcon, BriefcaseIcon, Building2Icon, MapPinIcon, UserIcon } from "lucide-react"

/**
 * 企業名リンクにホバーすると企業の概要を表示する最小構成
 */
function BasicPattern() {
  return (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link" />}>株式会社ジョブアンテナ</HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Building2Icon className="size-4 text-muted-foreground" />
            <span className="font-semibold">株式会社ジョブアンテナ</span>
          </div>
          <p className="text-muted-foreground">
            沖縄の仕事探しをもっと身近に。県内最大級の求人情報を掲載しています。
          </p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPinIcon className="size-4" />
            <span>沖縄県那覇市久茂地 1-1-1</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

/**
 * 求人詳細の企業名からロゴ・業種・所在地・アンテナレベルをプレビューする
 */
function CompanyPreviewPattern() {
  return (
    <p className="text-sm text-muted-foreground">
      この求人は
      <HoverCard>
        <HoverCardTrigger render={<Button variant="link" className="px-1" />}>
          常磐合同産業株式会社
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <Building2Icon className="size-5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-foreground">常磐合同産業株式会社</span>
                <span className="text-xs text-muted-foreground">ソフトウェア・情報処理</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPinIcon className="size-4" />
                <span>沖縄県浦添市城間 2-3-4</span>
              </div>
              <div className="flex items-center gap-2">
                <AntennaIcon className="size-4" />
                <span>アンテナレベル 78</span>
              </div>
            </div>
            <Button size="sm" variant="outline">
              フォローする
            </Button>
          </div>
        </HoverCardContent>
      </HoverCard>
      が募集しています。
    </p>
  )
}

/**
 * 管理画面の応募者テーブルで候補者名からプロフィールをプレビューする
 */
function CandidatePreviewPattern() {
  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <span>7/8 応募</span>
      <HoverCard>
        <HoverCardTrigger render={<Button variant="link" />}>比嘉 太郎</HoverCardTrigger>
        <HoverCardContent>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <UserIcon className="size-5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold">比嘉 太郎</span>
                <span className="text-xs text-muted-foreground">
                  28歳・男性・前職: 調理スタッフ
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BriefcaseIcon className="size-4" />
              <span>応募求人: フロントエンドエンジニア</span>
            </div>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary">Web履歴書OK</Badge>
              <Badge variant="outline">いいかもをもらっています</Badge>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <Badge variant="secondary">未選考</Badge>
    </div>
  )
}

export const hoverCardDoc: ComponentDoc = {
  name: "hover-card",
  title: "Hover Card",
  category: "オーバーレイ",
  purpose:
    "リンクやテキストにホバーしたとき、遷移せずに参照先のプレビューを浮かせて見せるカード。クリックする前に相手の概要を確認できるので、一覧を離れたくない場面に向く。jobantenna では求人カードの企業名から企業プレビューを、管理画面の応募者テーブルから候補者プロフィールを覗く用途に使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "Trigger と Content だけの最小構成。企業名リンクにホバーすると社名・紹介文・所在地の簡単なプレビューが開く。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "company-preview",
      title: "企業プレビュー",
      description:
        "求人詳細の文中に置いた企業名から、ロゴ・業種・所在地・アンテナレベルとフォローボタンをまとめた企業カードを表示する。ページを離れずに企業をチェックしてもらう場面向け。",
      previewHeight: 400,
      Demo: CompanyPreviewPattern,
    },
    {
      id: "candidate-preview",
      title: "候補者プレビュー",
      description:
        "管理画面の応募者テーブルで候補者名にホバーすると、アバター・年齢・前職・応募求人・ステータスバッジを確認できる。行を開かずに候補者を素早く見比べたいときに使う。",
      previewHeight: 400,
      Demo: CandidatePreviewPattern,
    },
  ],
}
