import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BriefcaseIcon, Building2Icon, HeartIcon, ImageIcon, MapPinIcon } from "lucide-react"

/**
 * Tabs の default / line バリアントと縦方向レイアウト
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Tabs defaultValue="jobs">
        <TabsList>
          <TabsTrigger value="jobs">求人情報</TabsTrigger>
          <TabsTrigger value="company">企業情報</TabsTrigger>
          <TabsTrigger value="access">アクセス</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs">那覇市の正社員求人。月給 25 万円〜、賞与年 2 回。</TabsContent>

        <TabsContent value="company">株式会社ジョブアンテナ沖縄。従業員数 120 名。</TabsContent>

        <TabsContent value="access">
          沖縄県那覇市久茂地 1-1-1。ゆいレール県庁前駅から徒歩 3 分。
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="fulltime">
        <TabsList variant="line">
          <TabsTrigger value="fulltime">
            <BriefcaseIcon />
            正社員
          </TabsTrigger>

          <TabsTrigger value="contract">
            <Building2Icon />
            契約社員
          </TabsTrigger>

          <TabsTrigger value="parttime" disabled>
            アルバイト
          </TabsTrigger>
        </TabsList>

        <TabsContent value="fulltime">
          正社員の求人 1,234 件。未経験歓迎・転勤なしの求人が人気です。
        </TabsContent>

        <TabsContent value="contract">
          契約社員の求人 456 件。正社員登用ありの求人も多数あります。
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="naha" orientation="vertical">
        <TabsList>
          <TabsTrigger value="naha">
            <MapPinIcon />
            那覇市
          </TabsTrigger>

          <TabsTrigger value="ginowan">
            <MapPinIcon />
            宜野湾市
          </TabsTrigger>

          <TabsTrigger value="okinawa">
            <MapPinIcon />
            沖縄市
          </TabsTrigger>
        </TabsList>

        <TabsContent value="naha">
          那覇市の求人 2,345 件。事務・販売・IT エンジニアが中心です。
        </TabsContent>

        <TabsContent value="ginowan">
          宜野湾市の求人 678 件。観光・ホテル業の募集が増えています。
        </TabsContent>

        <TabsContent value="okinawa">
          沖縄市の求人 890 件。製造・物流の正社員募集が豊富です。
        </TabsContent>
      </Tabs>
    </div>
  )
}

/**
 * 企業ページのセクション切り替え。掲載求人だけ件数を添える
 */
function CompanyPagePattern() {
  return (
    <Tabs defaultValue="top" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="top">会社TOP</TabsTrigger>
        <TabsTrigger value="about">私たちについて</TabsTrigger>
        <TabsTrigger value="jobs">
          掲載求人
          <span className="text-muted-foreground">12</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="top">
        <div className="flex flex-col gap-2">
          <div className="flex h-32 items-center justify-center rounded-lg bg-muted">
            <ImageIcon className="size-8 text-muted-foreground" />
          </div>
          <p className="font-medium">株式会社サンプル</p>
          <p className="text-muted-foreground">
            沖縄県内で自社サービスを開発する IT 企業。フルリモート可・フレックス勤務。
          </p>
        </div>
      </TabsContent>

      <TabsContent value="about">
        <p className="text-muted-foreground">
          「沖縄の働くを、もっと自由に」をミッションに、県内企業の採用 DX を支援しています。従業員
          120 名、平均年齢 32 歳。
        </p>
      </TabsContent>

      <TabsContent value="jobs">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1 rounded-lg border p-2">
            <p className="text-sm font-medium">フロントエンドエンジニア</p>
            <p className="text-xs text-muted-foreground">那覇市 / 正社員 / 月給 25万円</p>
          </div>

          <div className="flex flex-col gap-1 rounded-lg border p-2">
            <p className="text-sm font-medium">営業・企画営業（法人向け）</p>
            <p className="text-xs text-muted-foreground">浦添市 / 正社員 / 月給 22万円</p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

/**
 * いいかも一覧の もらった / 送った 切り替え。片側は空状態を見せる
 */
function LikedListPattern() {
  return (
    <Tabs defaultValue="received" className="w-full max-w-md">
      <TabsList variant="line">
        <TabsTrigger value="received">
          もらった
          <Badge variant="secondary">3</Badge>
        </TabsTrigger>

        <TabsTrigger value="sent">
          送った
          <Badge variant="secondary">8</Badge>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="received">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 rounded-lg border p-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded bg-muted">
              <Building2Icon className="size-4 text-muted-foreground" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-sm font-medium">株式会社サンプル</span>
              <span className="truncate text-xs text-muted-foreground">
                フロントエンドエンジニア
              </span>
            </div>
            <Badge className="gap-1">
              <HeartIcon />
              で〜じ
            </Badge>
          </div>

          <div className="flex items-center gap-2 rounded-lg border p-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded bg-muted">
              <Building2Icon className="size-4 text-muted-foreground" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-sm font-medium">常磐合同産業株式会社</span>
              <span className="truncate text-xs text-muted-foreground">
                営業・企画営業（法人向け）
              </span>
            </div>
            <Badge variant="secondary" className="gap-1">
              <HeartIcon />
              いいかも
            </Badge>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="sent">
        <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
          <HeartIcon className="size-8 text-muted-foreground" />
          <p className="text-sm font-medium">まだメッセージはありません</p>
          <p className="text-xs text-muted-foreground">
            まずはプロフィールを充実させて、企業からオファーをもらいましょう！
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}

/**
 * 求人票一覧の掲載ステータス絞り込み。すべてのタブに件数を添える
 */
function JobStatusPattern() {
  return (
    <Tabs defaultValue="all" className="w-full max-w-xl">
      <TabsList variant="line">
        <TabsTrigger value="all">
          すべて
          <Badge variant="secondary">18</Badge>
        </TabsTrigger>

        <TabsTrigger value="published">
          掲載中
          <Badge variant="secondary">12</Badge>
        </TabsTrigger>

        <TabsTrigger value="editing">
          編集中
          <Badge variant="secondary">2</Badge>
        </TabsTrigger>

        <TabsTrigger value="draft">
          下書き
          <Badge variant="secondary">2</Badge>
        </TabsTrigger>

        <TabsTrigger value="stopped">
          公開停止
          <Badge variant="secondary">2</Badge>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="all">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 rounded-lg border p-2">
            <div className="flex size-10 shrink-0 items-center justify-center rounded bg-muted">
              <ImageIcon className="size-4 text-muted-foreground" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <div className="flex items-center gap-1">
                <Badge>掲載中</Badge>
                <span className="truncate text-sm font-medium">フロントエンドエンジニア</span>
              </div>
              <span className="truncate text-xs text-muted-foreground">
                那覇市 ほか2件 / 正社員 / 月給 25万円
              </span>
            </div>
            <span className="shrink-0 text-xs text-muted-foreground">閲覧 1,240 / 応募 12</span>
          </div>

          <div className="flex items-center gap-2 rounded-lg border p-2">
            <div className="flex size-10 shrink-0 items-center justify-center rounded bg-muted">
              <ImageIcon className="size-4 text-muted-foreground" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <div className="flex items-center gap-1">
                <Badge variant="outline">公開停止</Badge>
                <span className="truncate text-sm font-medium">調理スタッフ</span>
              </div>
              <span className="truncate text-xs text-muted-foreground">
                那覇市 / 正社員 / 月給 22万円
              </span>
            </div>
            <span className="shrink-0 text-xs text-muted-foreground">閲覧 320 / 応募 3</span>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="published">
        <p className="text-muted-foreground">掲載中の求人 12 件を表示します。</p>
      </TabsContent>

      <TabsContent value="editing">
        <p className="text-muted-foreground">編集中の求人 2 件を表示します。</p>
      </TabsContent>

      <TabsContent value="draft">
        <p className="text-muted-foreground">下書きの求人 2 件を表示します。</p>
      </TabsContent>

      <TabsContent value="stopped">
        <p className="text-muted-foreground">公開停止の求人 2 件を表示します。</p>
      </TabsContent>
    </Tabs>
  )
}

export const tabsDoc: ComponentDoc = {
  name: "tabs",
  title: "Tabs",
  category: "ナビゲーション",
  purpose:
    "同じ画面内で複数のセクションを切り替えて表示するコンポーネント。jobantenna では企業ページ（会社TOP／私たちについて／掲載求人）のセクション切り替えや、いいかも一覧の もらった／送った、求人票一覧の掲載ステータス絞り込みに使う。TabsList の variant（default／line）と orientation で見た目を切り替えられる。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        'default / line の2バリアントと横・縦（orientation="vertical"）レイアウト。defaultValue で初期タブを決める非制御コンポーネント。disabled で個別のタブを無効化できる。',
      previewHeight: 420,
      Demo: BasicPattern,
    },
    {
      id: "company-page",
      title: "企業ページ",
      description:
        "企業ページのセクション切り替え。掲載求人タブにだけ件数を muted 色の数字で添え、タブごとに異なる内容の面を表示する。",
      previewHeight: 400,
      Demo: CompanyPagePattern,
    },
    {
      id: "liked-list",
      title: "いいかも一覧",
      description:
        "もらった／送った の2択。line バリアントに Badge で件数を添える。片側は「まだメッセージはありません」の空状態を見せて実運用の見え方を確認する。",
      previewHeight: 400,
      Demo: LikedListPattern,
    },
    {
      id: "job-status",
      title: "求人票ステータス",
      description:
        "求人票一覧を掲載ステータス（すべて／掲載中／編集中／下書き／公開停止）で絞り込む例。全タブに件数 Badge を付ける密なケース。タブが多いので container に広めの幅を与える。",
      previewHeight: 400,
      Demo: JobStatusPattern,
    },
  ],
}
