import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import {
  BriefcaseIcon,
  Building2Icon,
  CalendarIcon,
  ClockIcon,
  FileTextIcon,
  ImageIcon,
  JapaneseYenIcon,
  MapPinIcon,
} from "lucide-react"

/**
 * Marker の3バリアント。default はアイコン付きメタ情報行、separator は左右罫線、border は下罫線
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Marker>
          <MarkerIcon>
            <MapPinIcon />
          </MarkerIcon>
          <MarkerContent>沖縄県那覇市おもろまち</MarkerContent>
        </Marker>
        <Marker>
          <MarkerIcon>
            <BriefcaseIcon />
          </MarkerIcon>
          <MarkerContent>正社員（試用期間3ヶ月）</MarkerContent>
        </Marker>
        <Marker>
          <MarkerIcon>
            <JapaneseYenIcon />
          </MarkerIcon>
          <MarkerContent>月給 25万円〜35万円</MarkerContent>
        </Marker>
      </div>

      <Marker variant="separator">
        <MarkerContent>ここから先週の新着求人</MarkerContent>
      </Marker>

      <Marker variant="border">
        <MarkerIcon>
          <CalendarIcon />
        </MarkerIcon>
        <MarkerContent>応募締切: 2026年7月31日</MarkerContent>
      </Marker>
    </div>
  )
}

/**
 * 求人カードの勤務地・雇用形態・給与を Marker で縦に並べる
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
          営業・企画営業（法人向け）｜地元企業の採用を支える仕事
        </p>

        <div className="flex flex-col gap-1">
          <Marker>
            <MarkerIcon>
              <MapPinIcon />
            </MarkerIcon>
            <MarkerContent>那覇市 ほか2件</MarkerContent>
          </Marker>
          <Marker>
            <MarkerIcon>
              <BriefcaseIcon />
            </MarkerIcon>
            <MarkerContent>正社員</MarkerContent>
          </Marker>
          <Marker>
            <MarkerIcon>
              <JapaneseYenIcon />
            </MarkerIcon>
            <MarkerContent>月給 200,000〜300,000円</MarkerContent>
          </Marker>
          <Marker>
            <MarkerIcon>
              <ClockIcon />
            </MarkerIcon>
            <MarkerContent>最終更新: 3日前</MarkerContent>
          </Marker>
        </div>
      </div>
    </div>
  )
}

/**
 * メッセージ一覧の日付区切りと未読境界。separator バリアントを色で強調する例
 */
function MessageSeparatorPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Marker variant="separator">
        <MarkerContent>7月8日</MarkerContent>
      </Marker>

      <div className="self-start rounded-lg bg-muted px-4 py-2 text-sm">
        書類を拝見しました。ぜひ一度お話しさせてください。
      </div>

      <div className="self-end rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground">
        ありがとうございます。ぜひお願いします。
      </div>

      <Marker
        variant="separator"
        className="text-destructive before:bg-destructive after:bg-destructive"
      >
        <MarkerContent>ここから未読</MarkerContent>
      </Marker>

      <div className="self-start rounded-lg bg-muted px-4 py-2 text-sm">
        来週の面接日程について、ご都合いかがでしょうか？
      </div>
    </div>
  )
}

/**
 * 求人詳細のセクション見出し。border バリアントを文字色の上書きで見出し化する
 */
function SectionHeadingPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Marker variant="border" className="font-medium text-foreground">
          <MarkerIcon>
            <FileTextIcon />
          </MarkerIcon>
          <MarkerContent>仕事の内容</MarkerContent>
        </Marker>
        <p className="text-sm text-muted-foreground">
          自社求人サービスのフロントエンド開発を担当します。未経験の方も歓迎です。
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Marker variant="border" className="font-medium text-foreground">
          <MarkerIcon>
            <JapaneseYenIcon />
          </MarkerIcon>
          <MarkerContent>給与・待遇</MarkerContent>
        </Marker>
        <p className="text-sm text-muted-foreground">
          月給 200,000〜350,000円（経験・能力を考慮のうえ決定）
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Marker variant="border" className="font-medium text-foreground">
          <MarkerIcon>
            <ClockIcon />
          </MarkerIcon>
          <MarkerContent>勤務情報</MarkerContent>
        </Marker>
        <p className="text-sm text-muted-foreground">9:00-18:00（休憩60分）・完全週休2日制</p>
      </div>
    </div>
  )
}

export const markerDoc: ComponentDoc = {
  name: "marker",
  title: "Marker",
  category: "データ表示",
  purpose:
    "アイコンと短いテキストを1行にまとめて示すメタ情報コンポーネント。default はラベル行、separator は左右罫線付きの区切り、border は下罫線付きの見出しとして使い分ける。ジョブアンテナでは求人カードの勤務地・雇用形態・給与の表示や、メッセージ一覧の日付区切りに使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "default / separator / border の3バリアント。MarkerIcon にアイコン、MarkerContent にテキストを入れる。separator は中央のテキストの左右に罫線が伸びる。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "job-card-meta",
      title: "求人カードのメタ情報",
      description:
        "求人カードで勤務地・雇用形態・給与・最終更新を縦に並べる例。アイコン幅が揃うため、行数が変わっても視線が縦にまっすぐ通る。",
      previewHeight: 400,
      Demo: JobCardMetaPattern,
    },
    {
      id: "message-separator",
      title: "メッセージの区切り",
      description:
        "メッセージ一覧に separator バリアントで日付と未読の境界を挿入する例。未読境界は className で文字色と罫線色を destructive に上書きして注意を引く。",
      previewHeight: null,
      Demo: MessageSeparatorPattern,
    },
    {
      id: "section-heading",
      title: "セクション見出し",
      description:
        "求人詳細ページで border バリアントをセクション見出しに使う例。既定の muted な文字色を text-foreground と font-medium に上書きして本文と階層をつける。",
      previewHeight: null,
      Demo: SectionHeadingPattern,
    },
  ],
}
