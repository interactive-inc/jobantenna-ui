import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  BanknoteIcon,
  BellIcon,
  BriefcaseIcon,
  Building2Icon,
  ClockIcon,
  FootprintsIcon,
  HeartIcon,
  ImageIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react"

/**
 * Sheet を右・左・下の各方向から開く基本デモ
 */
function BasicPattern() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>右から開く</SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>求人の詳細条件</SheetTitle>
            <SheetDescription>雇用形態やエリアを指定して求人を絞り込めます</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-2 px-4 text-sm">
            <p>雇用形態: 正社員</p>
            <p>勤務地: 沖縄県那覇市</p>
            <p>給与: 月給 25万円以上</p>
          </div>
          <SheetFooter>
            <Button>この条件で検索</Button>
            <SheetClose render={<Button variant="outline" />}>閉じる</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>左から開く</SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>メニュー</SheetTitle>
            <SheetDescription>ジョブアンテナの各ページへ移動</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-2 px-4 text-sm">
            <p>求人を探す</p>
            <p>応募履歴</p>
            <p>お気に入り</p>
            <p>プロフィール設定</p>
          </div>
        </SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>下から開く</SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>この求人に応募しますか？</SheetTitle>
            <SheetDescription>株式会社サンプル / 営業職（那覇市・正社員）</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button>応募する</Button>
            <SheetClose render={<Button variant="ghost" />}>あとで</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

/**
 * 求人一覧から遷移せずに詳細を確認できる右側クイックビュー
 */
function JobQuickViewPattern() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>求人の詳細を見る</SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <div className="flex items-center gap-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <Building2Icon className="size-4" />
            </div>
            <span className="text-xs text-muted-foreground">株式会社サンプル</span>
          </div>
          <SheetTitle>フロントエンドエンジニア</SheetTitle>
          <SheetDescription>【未経験歓迎・在宅可】自社求人サービスの UI 開発</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 overflow-y-auto px-4">
          <div className="flex aspect-video items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <ImageIcon className="size-8" />
          </div>
          <div className="flex flex-wrap gap-1">
            <Badge variant="secondary">新卒採用</Badge>
            <Badge variant="outline">Web履歴書OK</Badge>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPinIcon className="size-4 text-muted-foreground" />
              <span>那覇市</span>
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="size-4 text-muted-foreground" />
              <span>正社員</span>
            </div>
            <div className="flex items-center gap-2">
              <BanknoteIcon className="size-4 text-muted-foreground" />
              <span>月給 200,000〜300,000円</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="size-4 text-muted-foreground" />
              <span className="text-muted-foreground">最終更新: 本日</span>
            </div>
          </div>
        </div>
        <SheetFooter>
          <Button>応募する</Button>
          <Button variant="outline">
            <HeartIcon />
            いいかも！
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

/**
 * いいかもやあしあとの新着をまとめて確認する左側の通知一覧
 */
function NotificationsPattern() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <BellIcon />
        通知
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>通知</SheetTitle>
          <SheetDescription>いいかもやあしあとの新着をまとめて確認できます</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 overflow-y-auto px-4">
          <div className="flex items-start gap-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <HeartIcon className="size-4" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm">株式会社サンプルから「で〜じいいかも！」が届きました</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">1時間前</span>
                <Badge variant="destructive">未読</Badge>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <MailIcon className="size-4" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm">株式会社アールエムシーからメッセージが届きました</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">本日</span>
                <Badge variant="destructive">未読</Badge>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <FootprintsIcon className="size-4" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm">
                常磐合同産業株式会社があなたのWeb履歴書にあしあとを残しました
              </p>
              <span className="text-xs text-muted-foreground">3日前</span>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>閉じる</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export const sheetDoc: ComponentDoc = {
  name: "sheet",
  title: "Sheet",
  category: "オーバーレイ",
  purpose:
    "画面の端からスライドして現れるパネルで、いまのページを離れずに補足的な内容を表示する。Dialog より縦に長い情報やリストを載せるのに向く。ジョブアンテナでは求人一覧からのクイックビュー、通知一覧、モバイルの絞り込み条件などに使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "side プロパティで右・左・下の開く方向を切り替える最小構成。Header・Footer・Close の組み合わせ方もあわせて確認できる。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "job-quick-view",
      title: "求人クイックビュー",
      description:
        "求人一覧のカードから遷移せずに詳細を右側パネルで確認する。メイン画像・勤務地・給与などのサマリーを載せ、フッターに応募といいかも！を固定する。",
      previewHeight: 560,
      Demo: JobQuickViewPattern,
    },
    {
      id: "notifications",
      title: "通知一覧",
      description:
        "ヘッダーのベルアイコンから開く左側の通知パネル。いいかも・メッセージ・あしあとを時系列に並べ、未読には destructive バッジを付ける。",
      previewHeight: 520,
      Demo: NotificationsPattern,
    },
  ],
}
