import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { SearchIcon, UserIcon } from "lucide-react"

/**
 * サイズと disabled の各状態、NativeSelectOptGroup によるグループ化
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">雇用形態</span>

        <NativeSelect defaultValue="fulltime" className="w-full">
          <NativeSelectOption value="fulltime">正社員</NativeSelectOption>
          <NativeSelectOption value="contract">契約社員</NativeSelectOption>
          <NativeSelectOption value="parttime">アルバイト・パート</NativeSelectOption>
          <NativeSelectOption value="dispatch">派遣社員</NativeSelectOption>
        </NativeSelect>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">勤務地（エリア別・size sm）</span>

        <NativeSelect size="sm" defaultValue="naha" className="w-full">
          <NativeSelectOptGroup label="沖縄本島南部">
            <NativeSelectOption value="naha">那覇市</NativeSelectOption>
            <NativeSelectOption value="urasoe">浦添市</NativeSelectOption>
            <NativeSelectOption value="tomigusuku">豊見城市</NativeSelectOption>
          </NativeSelectOptGroup>
          <NativeSelectOptGroup label="沖縄本島中部">
            <NativeSelectOption value="okinawa">沖縄市</NativeSelectOption>
            <NativeSelectOption value="ginowan">宜野湾市</NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">給与（無効状態）</span>

        <NativeSelect disabled defaultValue="200" className="w-full">
          <NativeSelectOption value="200">月給20万円以上</NativeSelectOption>
          <NativeSelectOption value="250">月給25万円以上</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  )
}

/**
 * 求人検索の希望年収。「特に指定しない」を先頭に置いた金額の単一選択
 */
function DesiredSalaryPattern() {
  return (
    <div className="w-full max-w-sm rounded-lg border">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">職種</span>

          <NativeSelect defaultValue="all" className="w-full">
            <NativeSelectOption value="all">すべての職種</NativeSelectOption>
            <NativeSelectOption value="frontend">フロントエンドエンジニア</NativeSelectOption>
            <NativeSelectOption value="sales">営業・企画営業（法人向け）</NativeSelectOption>
            <NativeSelectOption value="cook">調理スタッフ</NativeSelectOption>
          </NativeSelect>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">希望年収</span>

          <NativeSelect defaultValue="none" className="w-full">
            <NativeSelectOption value="none">特に指定しない</NativeSelectOption>
            <NativeSelectOption value="150">150万円以上</NativeSelectOption>
            <NativeSelectOption value="200">200万円以上</NativeSelectOption>
            <NativeSelectOption value="250">250万円以上</NativeSelectOption>
            <NativeSelectOption value="300">300万円以上</NativeSelectOption>
            <NativeSelectOption value="350">350万円以上</NativeSelectOption>
            <NativeSelectOption value="400">400万円以上</NativeSelectOption>
            <NativeSelectOption value="500">500万円以上</NativeSelectOption>
            <NativeSelectOption value="600">600万円以上</NativeSelectOption>
            <NativeSelectOption value="800">800万円以上</NativeSelectOption>
            <NativeSelectOption value="1000">1000万円以上</NativeSelectOption>
          </NativeSelect>
        </div>
      </div>

      <div className="flex items-center justify-between border-t p-4">
        <Button variant="ghost" size="sm">
          すべてクリア
        </Button>

        <Button size="sm">
          <SearchIcon data-icon="inline-start" />
          128件 検索する
        </Button>
      </div>
    </div>
  )
}

/**
 * 求人フォームの給与・待遇セクション。給与種別のセレクトと下限・上限の入力を組み合わせる
 */
function SalaryFormPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 rounded-lg border p-4">
      <span className="text-sm font-medium">給与・待遇</span>

      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">給与種別</span>

        <NativeSelect defaultValue="monthly" className="w-full">
          <NativeSelectOption value="monthly">月給</NativeSelectOption>
          <NativeSelectOption value="hourly">時給</NativeSelectOption>
          <NativeSelectOption value="daily">日給</NativeSelectOption>
          <NativeSelectOption value="annual">年俸</NativeSelectOption>
        </NativeSelect>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground">下限（円）</span>
          <Input type="number" defaultValue="200000" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground">上限（円）</span>
          <Input type="number" defaultValue="350000" />
        </div>
      </div>
    </div>
  )
}

/**
 * 応募者リストの行内でステータスを切り替える。size="sm" で行の高さに収める
 */
function ApplicantStatusPattern() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border">
      <div className="flex items-center gap-2 p-2">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
          <UserIcon className="size-4 text-muted-foreground" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">比嘉 太郎</span>
          <span className="truncate text-xs text-muted-foreground">28歳・男性・前職: 営業</span>
        </div>

        <NativeSelect size="sm" defaultValue="unscreened">
          <NativeSelectOption value="unscreened">未選考</NativeSelectOption>
          <NativeSelectOption value="pending">保留中</NativeSelectOption>
          <NativeSelectOption value="contacted">連絡済</NativeSelectOption>
          <NativeSelectOption value="hired">採用</NativeSelectOption>
          <NativeSelectOption value="rejected">不採用</NativeSelectOption>
        </NativeSelect>
      </div>

      <div className="flex items-center gap-2 border-t p-2">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
          <UserIcon className="size-4 text-muted-foreground" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">金城 花子</span>
          <span className="truncate text-xs text-muted-foreground">25歳・女性・前職: 販売</span>
        </div>

        <NativeSelect size="sm" defaultValue="pending">
          <NativeSelectOption value="unscreened">未選考</NativeSelectOption>
          <NativeSelectOption value="pending">保留中</NativeSelectOption>
          <NativeSelectOption value="contacted">連絡済</NativeSelectOption>
          <NativeSelectOption value="hired">採用</NativeSelectOption>
          <NativeSelectOption value="rejected">不採用</NativeSelectOption>
        </NativeSelect>
      </div>

      <div className="flex items-center gap-2 border-t p-2">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
          <UserIcon className="size-4 text-muted-foreground" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">大城 健</span>
          <span className="truncate text-xs text-muted-foreground">
            30歳・男性・前職: エンジニア
          </span>
        </div>

        <NativeSelect size="sm" defaultValue="contacted">
          <NativeSelectOption value="unscreened">未選考</NativeSelectOption>
          <NativeSelectOption value="pending">保留中</NativeSelectOption>
          <NativeSelectOption value="contacted">連絡済</NativeSelectOption>
          <NativeSelectOption value="hired">採用</NativeSelectOption>
          <NativeSelectOption value="rejected">不採用</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  )
}

export const nativeSelectDoc: ComponentDoc = {
  name: "native-select",
  title: "Native Select",
  category: "フォーム",
  purpose:
    "ブラウザ標準の select 要素をそのままスタイリングしたフォームコントロールです。OS ネイティブのドロップダウンを使うためモバイルでも軽快に動作し、選択肢が多い単一選択に向きます。ジョブアンテナでは希望年収や勤務地などの検索条件、給与種別の入力、応募ステータスの切り替えに使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "default と sm の2サイズ、disabled 状態、NativeSelectOptGroup によるエリア別のグループ化です。defaultValue で非制御のまま初期値を与えます。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "desired-salary",
      title: "希望年収",
      description:
        "求人検索の希望年収を選ぶ例です。「特に指定しない」を先頭に置き、150万円〜1000万円の長い選択肢はネイティブのドロップダウンに任せます。",
      previewHeight: null,
      Demo: DesiredSalaryPattern,
    },
    {
      id: "salary-form",
      title: "給与・待遇フォーム",
      description:
        "管理画面の求人フォームで給与種別（月給・時給・日給・年俸）を選ぶ例です。下限・上限の金額入力と組み合わせてひとつのセクションにまとめます。",
      previewHeight: null,
      Demo: SalaryFormPattern,
    },
    {
      id: "applicant-status",
      title: "応募ステータス",
      description:
        '応募者リストの行内で選考ステータス（未選考・保留中・連絡済・採用・不採用）を切り替える例です。size="sm" にすると行の高さに収まります。',
      previewHeight: null,
      Demo: ApplicantStatusPattern,
    },
  ],
}
