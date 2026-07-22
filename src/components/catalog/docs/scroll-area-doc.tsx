import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Building2Icon, ImageIcon, MapPinIcon } from "lucide-react"

const latestJobPostings = [
  {
    title: "ホールスタッフ",
    company: "琉球ダイニング 首里店",
    location: "那覇市",
    salary: "月給 21万円〜",
  },
  {
    title: "Webエンジニア",
    company: "オキナワテック株式会社",
    location: "宜野湾市",
    salary: "月給 35万円〜",
  },
  {
    title: "介護スタッフ",
    company: "ゆいまーる介護センター",
    location: "浦添市",
    salary: "月給 23万円〜",
  },
  {
    title: "経理事務",
    company: "沖縄物流サービス",
    location: "豊見城市",
    salary: "月給 20万円〜",
  },
  {
    title: "調理師",
    company: "海風ホテルリゾート",
    location: "恩納村",
    salary: "月給 25万円〜",
  },
  {
    title: "保育士",
    company: "ひまわり保育園",
    location: "沖縄市",
    salary: "月給 22万円〜",
  },
  {
    title: "営業スタッフ",
    company: "アンテナ広告社",
    location: "那覇市",
    salary: "月給 28万円〜",
  },
  {
    title: "ドライバー",
    company: "美ら島運輸",
    location: "うるま市",
    salary: "月給 24万円〜",
  },
]

const searchConditionTags = [
  "正社員",
  "那覇市",
  "未経験歓迎",
  "土日休み",
  "リモート可",
  "賞与あり",
  "車通勤OK",
  "残業なし",
  "資格取得支援",
  "時短勤務",
]

const applicationTermsParagraphs = [
  "第1条（目的） 本規約は、ジョブアンテナ（以下「本サービス」）を通じた求人応募に関する条件を定めるものです。会員は本規約に同意の上、応募を行うものとします。",
  "第2条（応募情報の提供） 応募すると、氏名・Web履歴書などのプロフィール情報が応募先企業に公開されます。公開を望まない情報は、応募前にWeb履歴書から削除してください。",
  "第3条（応募の取り消し） 応募完了後の取り消しは、応募先企業へのメッセージにより行うものとします。選考開始後の取り消しについては、企業の判断に従うものとします。",
  "第4条（禁止事項） 虚偽の経歴の記載、同一求人への重複応募、その他本サービスの運営を妨げる行為を禁止します。違反が確認された場合、応募の無効化や会員資格の停止を行うことがあります。",
  "第5条（選考結果） 選考結果の通知時期および内容は応募先企業に委ねられます。本サービスは選考の結果について一切の責任を負いません。",
]

const recommendedJobPostings = [
  {
    title: "フロントエンドエンジニア",
    company: "株式会社サンプル",
    location: "那覇市",
    salary: "月給 200,000〜300,000円",
  },
  {
    title: "営業・企画営業(法人向け)",
    company: "常磐合同産業株式会社",
    location: "浦添市",
    salary: "月給 25万円",
  },
  {
    title: "調理スタッフ",
    company: "株式会社アールエムシー",
    location: "那覇市",
    salary: "月給 22万円〜",
  },
  {
    title: "Webデザイナー",
    company: "オキナワテック株式会社",
    location: "宜野湾市",
    salary: "月給 28万円〜",
  },
]

/**
 * 高さを固定した領域で新着求人リストを縦スクロールする基本形
 */
function BasicPattern() {
  return (
    <ScrollArea className="h-64 w-full max-w-md rounded-md border">
      <div className="p-4">
        <p className="text-sm font-medium">新着求人</p>

        {latestJobPostings.map((job) => (
          <div key={job.title}>
            <Separator className="my-2" />
            <div className="flex flex-col gap-1 text-sm">
              <span className="font-medium">{job.title}</span>
              <span className="text-muted-foreground">
                {job.company}・{job.location}・{job.salary}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

/**
 * 検索条件タグを折り返さず1行に並べて横スクロールする
 */
function SearchTagsPattern() {
  return (
    <ScrollArea className="w-full max-w-md rounded-md border">
      <div className="flex w-max gap-2 p-4">
        {searchConditionTags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

/**
 * 応募確認画面の規約文。全文を読める縦スクロール領域と応募ボタンの組み合わせ
 */
function ApplicationTermsPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <p className="text-sm font-medium">
        応募する求人を確認の上、「応募を完了する」を押してください。
      </p>

      <ScrollArea className="h-48 w-full rounded-md border">
        <div className="flex flex-col gap-2 p-4">
          <p className="text-sm font-medium">応募規約</p>

          {applicationTermsParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-xs leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </ScrollArea>

      <div className="flex flex-col gap-2">
        <p className="text-xs text-muted-foreground">※応募すると氏名が企業に公開されます。</p>
        <Button className="w-full">応募を完了する</Button>
      </div>
    </div>
  )
}

/**
 * おすすめ求人カードを横に並べてスワイプ感覚で流し見できるカルーセル風リスト
 */
function JobCardRowPattern() {
  return (
    <ScrollArea className="w-full max-w-md">
      <div className="flex w-max gap-2 p-1">
        {recommendedJobPostings.map((job) => (
          <div key={job.title} className="w-48 shrink-0 overflow-hidden rounded-lg border">
            <div className="flex h-24 items-center justify-center bg-muted">
              <ImageIcon className="size-8 text-muted-foreground" />
            </div>
            <div className="flex flex-col gap-1 p-2">
              <div className="flex items-center gap-1">
                <Building2Icon className="size-3 shrink-0 text-muted-foreground" />
                <span className="truncate text-xs text-muted-foreground">{job.company}</span>
              </div>
              <p className="truncate text-sm font-medium">{job.title}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPinIcon className="size-3 shrink-0" />
                <span className="truncate">
                  {job.location} / {job.salary}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export const scrollAreaDoc: ComponentDoc = {
  name: "scroll-area",
  title: "Scroll Area",
  category: "レイアウト",
  purpose:
    "固定サイズの領域に収まらないコンテンツを、OS 標準より控えめなスクロールバー付きでスクロールさせるコンポーネントです。ジョブアンテナでは求人リストや応募規約文の縦スクロール、検索条件タグや求人カードの横スクロールに使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "高さを h-64 に固定し、あふれた新着求人リストを縦スクロールで読ませる基本形です。デフォルトで縦の ScrollBar が表示されます。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "search-tags",
      title: "検索条件タグ",
      description:
        'こだわり条件などのタグを w-max で折り返さず並べ、ScrollBar に orientation="horizontal" を渡して横スクロールにします。検索画面のタグ一覧向けです。',
      previewHeight: null,
      Demo: SearchTagsPattern,
    },
    {
      id: "application-terms",
      title: "応募規約",
      description:
        "応募確認画面で規約文をコンパクトな枠に収める例です。長文をスクロールで全文確認させ、注意書きと応募ボタンは領域の外に固定します。",
      previewHeight: 480,
      Demo: ApplicationTermsPattern,
    },
    {
      id: "job-card-row",
      title: "求人カードの横並び",
      description:
        "おすすめ求人カードを横一列に並べてスクロールさせる例です。トップページの「あなたへのおすすめ」のような流し見導線に使います。",
      previewHeight: null,
      Demo: JobCardRowPattern,
    },
  ],
}
