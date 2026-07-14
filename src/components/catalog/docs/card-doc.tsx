import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  BanknoteIcon,
  BookmarkIcon,
  BriefcaseIcon,
  Building2Icon,
  FileTextIcon,
  HeartIcon,
  ImageIcon,
  MapPinIcon,
  MessageSquareIcon,
  UsersIcon,
} from "lucide-react"

/**
 * Card の基本構成と size バリアント
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>ホールスタッフ（正社員）</CardTitle>
          <CardDescription>株式会社ジョブアンテナ食堂 / 那覇市</CardDescription>
          <CardAction>
            <Button variant="ghost" size="icon" aria-label="保存する">
              <BookmarkIcon />
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-2">
            <p>月給 22万円〜28万円 / 賞与年2回 / 未経験歓迎</p>
            <p className="flex items-center gap-1 text-muted-foreground">
              <MapPinIcon className="size-4" />
              沖縄県那覇市久茂地 モノレール県庁前駅 徒歩5分
            </p>
          </div>
        </CardContent>

        <CardFooter className="gap-2">
          <Button>応募する</Button>
          <Button variant="outline">詳細を見る</Button>
        </CardFooter>
      </Card>

      <Card size="sm">
        <CardHeader>
          <CardTitle>Web デザイナー（契約社員）</CardTitle>
          <CardDescription>浦添市 / 月給 25万円〜</CardDescription>
        </CardHeader>

        <CardContent>
          <p>size="sm" のコンパクトなカード。求人一覧の密度が高い画面向け。</p>
        </CardContent>
      </Card>
    </div>
  )
}

/**
 * 求人一覧の標準（MEDIUM）サイズの求人カード
 */
function JobCardMediumPattern() {
  return (
    <Card className="w-full max-w-sm pt-0">
      <div className="flex h-36 items-center justify-center bg-muted">
        <ImageIcon className="size-8 text-muted-foreground" />
      </div>

      <CardHeader>
        <CardDescription className="flex items-center gap-2 text-xs">
          <span className="flex size-5 shrink-0 items-center justify-center rounded bg-muted">
            <Building2Icon className="size-3" />
          </span>
          株式会社サンプル
        </CardDescription>
        <CardTitle>フロントエンドエンジニア</CardTitle>
        <CardDescription>
          【未経験歓迎・在宅可】自社サービスの UI をつくる仲間を募集
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm" aria-label="いいかも！">
            <HeartIcon />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPinIcon className="size-3" />
            那覇市
          </span>
          <span className="flex items-center gap-1">
            <BriefcaseIcon className="size-3" />
            正社員
          </span>
          <span className="flex items-center gap-1">
            <BanknoteIcon className="size-3" />
            月給 25万円
          </span>
        </div>

        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary">新卒採用</Badge>
          <Badge variant="secondary">Web履歴書OK</Badge>
          <Badge variant="outline">本日更新</Badge>
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        <Button className="flex-1">応募する</Button>
        <Button variant="outline">詳細を見る</Button>
      </CardFooter>
    </Card>
  )
}

/**
 * 職種名・タイトル・企業名のみの SMALL 求人カード
 */
function JobCardSmallPattern() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Card size="sm">
        <CardHeader>
          <CardDescription className="text-xs">フロントエンドエンジニア</CardDescription>
          <CardTitle className="text-sm">【未経験歓迎・在宅可】自社サービスの UI 開発</CardTitle>
          <CardDescription className="text-xs">株式会社サンプル</CardDescription>
        </CardHeader>
      </Card>

      <Card size="sm">
        <CardHeader>
          <CardDescription className="text-xs">営業・企画営業（法人向け）</CardDescription>
          <CardTitle className="text-sm">県内企業の採用を支える提案営業／賞与年2回</CardTitle>
          <CardDescription className="text-xs">常磐合同産業株式会社</CardDescription>
        </CardHeader>
      </Card>

      <Card size="sm">
        <CardHeader>
          <CardDescription className="text-xs">調理スタッフ</CardDescription>
          <CardTitle className="text-sm">まかない付き！県庁前の食堂で調理スタッフ募集</CardTitle>
          <CardDescription className="text-xs">株式会社アールエムシー</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

/**
 * 管理画面ダッシュボードの KPI 統計カード
 */
function StatsCardPattern() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-4">
      <Card size="sm">
        <CardHeader>
          <CardDescription>公開中の求人数</CardDescription>
          <CardTitle className="text-2xl">12</CardTitle>
          <CardAction>
            <FileTextIcon className="size-4 text-muted-foreground" />
          </CardAction>
        </CardHeader>

        <CardContent>
          <p className="text-xs text-muted-foreground">停止 2 件</p>
        </CardContent>
      </Card>

      <Card size="sm">
        <CardHeader>
          <CardDescription>応募数（累計）</CardDescription>
          <CardTitle className="text-2xl">128</CardTitle>
          <CardAction>
            <UsersIcon className="size-4 text-muted-foreground" />
          </CardAction>
        </CardHeader>

        <CardContent>
          <p className="text-xs text-muted-foreground">未選考 8 件</p>
        </CardContent>
      </Card>

      <Card size="sm">
        <CardHeader>
          <CardDescription>未読メッセージ</CardDescription>
          <CardTitle className="text-2xl">5</CardTitle>
          <CardAction>
            <MessageSquareIcon className="size-4 text-muted-foreground" />
          </CardAction>
        </CardHeader>

        <CardContent>
          <p className="text-xs text-muted-foreground">今週の返信率 92%</p>
        </CardContent>
      </Card>

      <Card size="sm">
        <CardHeader>
          <CardDescription>もらったいいかも</CardDescription>
          <CardTitle className="text-2xl">34</CardTitle>
          <CardAction>
            <HeartIcon className="size-4 text-muted-foreground" />
          </CardAction>
        </CardHeader>

        <CardContent>
          <p className="text-xs text-muted-foreground">で〜じ 3 件含む</p>
        </CardContent>
      </Card>
    </div>
  )
}

export const cardDoc: ComponentDoc = {
  name: "card",
  title: "Card",
  category: "データ表示",
  purpose:
    "関連する情報をひとまとまりの面として区切って表示するコンテナコンポーネント。jobantenna では求人一覧の求人カードや管理画面ダッシュボードの KPI カードなど、情報のかたまりを並べる画面の基本要素になる。size プロパティ（default / sm）で余白の密度を切り替えられる。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        'CardHeader / CardTitle / CardDescription / CardAction / CardContent / CardFooter を組み合わせた基本構成。size="sm" にすると余白が詰まり、一覧向けのコンパクトなカードになる。',
      previewHeight: 480,
      Demo: BasicPattern,
    },
    {
      id: "job-card-medium",
      title: "求人カード（MEDIUM）",
      description:
        "求人一覧の標準サイズ。メイン画像・企業名・職種名・キャッチタイトル・勤務条件・タグ・応募ボタンまでを1枚に収める。画像を上端まで広げるため Card に pt-0 を指定する。",
      previewHeight: 560,
      Demo: JobCardMediumPattern,
    },
    {
      id: "job-card-small",
      title: "求人カード（SMALL）",
      description:
        "職種名・タイトル・企業名のみの最小構成。関連求人やランキングなど、限られたスペースに多数並べる場面で使う。",
      previewHeight: 400,
      Demo: JobCardSmallPattern,
    },
    {
      id: "stats-card",
      title: "統計カード",
      description:
        "管理画面ダッシュボードの KPI カード。CardAction に指標のアイコン、CardContent に内訳の補足を置き、グリッドで並べる。",
      previewHeight: null,
      Demo: StatsCardPattern,
    },
  ],
}
