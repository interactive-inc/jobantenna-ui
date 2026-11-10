import type { ComponentDoc } from "@/components/catalog/component-doc"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const areaItems = {
  naha: "那覇市",
  urasoe: "浦添市",
  ginowan: "宜野湾市",
  okinawa: "沖縄市",
  nago: "名護市",
}

const desiredSalaryItems = {
  "150": "150万円以上",
  "200": "200万円以上",
  "250": "250万円以上",
  "300": "300万円以上",
  "350": "350万円以上",
  "400": "400万円以上",
  "500": "500万円以上",
  "600": "600万円以上",
  "700": "700万円以上",
  "800": "800万円以上",
  "900": "900万円以上",
  "1000": "1000万円以上",
}

const sortOrderItems = {
  recommended: "おすすめ順",
  newest: "新着順",
  salary: "給与が高い順",
}

const salaryGroupItems = {
  m200: "月給 20万円以上",
  m250: "月給 25万円以上",
  m300: "月給 30万円以上",
  h1000: "時給 1,000円以上",
  h1200: "時給 1,200円以上",
}

/**
 * プレースホルダあり・初期値ありの単一選択の基本形
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">勤務地</span>

        <Select items={areaItems}>
          <SelectTrigger aria-label="勤務地">
            <SelectValue placeholder="指定しない" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="naha">那覇市</SelectItem>
            <SelectItem value="urasoe">浦添市</SelectItem>
            <SelectItem value="ginowan">宜野湾市</SelectItem>
            <SelectItem value="okinawa">沖縄市</SelectItem>
            <SelectItem value="nago">名護市</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">希望勤務地</span>

        <Select items={areaItems} defaultValue="naha">
          <SelectTrigger aria-label="希望勤務地">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="naha">那覇市</SelectItem>
            <SelectItem value="urasoe">浦添市</SelectItem>
            <SelectItem value="ginowan">宜野湾市</SelectItem>
            <SelectItem value="okinawa">沖縄市</SelectItem>
            <SelectItem value="nago">名護市</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

/**
 * 検索条件の希望年収を150万円〜1000万円から選ぶ例
 */
function DesiredSalaryPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <span className="text-sm font-medium">希望年収</span>

      <Select items={desiredSalaryItems}>
        <SelectTrigger>
          <SelectValue placeholder="希望年収を選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="150">150万円以上</SelectItem>
          <SelectItem value="200">200万円以上</SelectItem>
          <SelectItem value="250">250万円以上</SelectItem>
          <SelectItem value="300">300万円以上</SelectItem>
          <SelectItem value="350">350万円以上</SelectItem>
          <SelectItem value="400">400万円以上</SelectItem>
          <SelectItem value="500">500万円以上</SelectItem>
          <SelectItem value="600">600万円以上</SelectItem>
          <SelectItem value="700">700万円以上</SelectItem>
          <SelectItem value="800">800万円以上</SelectItem>
          <SelectItem value="900">900万円以上</SelectItem>
          <SelectItem value="1000">1000万円以上</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

/**
 * 検索結果ヘッダーで並び替え順を切り替える sm サイズの例
 */
function SortOrderPattern() {
  return (
    <div className="flex w-full max-w-md items-center justify-between gap-2">
      <span className="text-sm text-muted-foreground">128件の求人</span>

      <Select items={sortOrderItems} defaultValue="recommended">
        <SelectTrigger size="sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="recommended">おすすめ順</SelectItem>
          <SelectItem value="newest">新着順</SelectItem>
          <SelectItem value="salary">給与が高い順</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

/**
 * 給与の選択肢を月給と時給にグループ分けした例
 */
function SalaryGroupPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <span className="text-sm font-medium">給与</span>

      <Select items={salaryGroupItems}>
        <SelectTrigger>
          <SelectValue placeholder="給与を選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>月給</SelectLabel>
            <SelectItem value="m200">月給 20万円以上</SelectItem>
            <SelectItem value="m250">月給 25万円以上</SelectItem>
            <SelectItem value="m300">月給 30万円以上</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>時給</SelectLabel>
            <SelectItem value="h1000">時給 1,000円以上</SelectItem>
            <SelectItem value="h1200">時給 1,200円以上</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

const jobItems = {
  front: "海の見えるリゾートホテルのフロントスタッフ｜宿泊予約と観光案内も担当",
  kitchen: "レストランの調理スタッフ",
}

function JobPattern() {
  return (
    <Select items={jobItems} defaultValue="front">
      <SelectTrigger aria-label="求人" className="w-full min-w-0 max-w-90">
        <SelectValue className="min-w-0">
          {(value) => {
            const label = jobItems[value as keyof typeof jobItems]
            return (
              <span className="truncate" title={label}>
                {label}
              </span>
            )
          }}
        </SelectValue>
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false} className="max-w-(--available-width)">
        <SelectItem value="front" wrapText>
          {jobItems.front}
        </SelectItem>
        <SelectItem value="kitchen" wrapText>
          {jobItems.kitchen}
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export const selectDoc: ComponentDoc = {
  name: "select",
  title: "Select",
  category: "フォーム",
  purpose:
    "決まった選択肢から一つを選ぶ入力欄です。標準は高さ40px、角丸8pxの白地に枠線を付けます。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "任意の条件は、選択されていないときに「指定しない」と表示します。選んだ値は一行で表示し、長い場合は末尾を省略します。",
      previewHeight: 400,
      Demo: BasicPattern,
    },
    {
      id: "job",
      title: "長い選択肢",
      description:
        "選択済みの求人名は一行に収めます。メニューを開くと長い求人名も折り返して全文を読めます。",
      previewHeight: 260,
      Demo: JobPattern,
    },
    {
      id: "desired-salary",
      title: "希望年収",
      description:
        "検索条件の希望年収を150万円〜1000万円から選ぶ例です。選択肢が多くてもリスト内がスクロールし、スクロールボタンで上下に送れます。",
      previewHeight: 480,
      Demo: DesiredSalaryPattern,
    },
    {
      id: "sort-order",
      title: "並び替え",
      description: "件数の横に並べ、現在の並び順を表示します。",
      previewHeight: null,
      Demo: SortOrderPattern,
    },
    {
      id: "salary-group",
      title: "給与グループ",
      description: "月給と時給のように意味が異なる選択肢は、見出しと区切り線で分けます。",
      previewHeight: 400,
      Demo: SalaryGroupPattern,
    },
  ],
  usage: {
    recommended: [
      "選択肢が5つ以上あるときに使う。",
      "幅は置く場所に合わせる。狭いパネルでは横幅いっぱいに広げる。",
    ],
    avoid: [
      "選択した値を二行に折り返す。",
      "4つ以下の選択肢を並べて見せられる場面で使う。その場合はラジオボタンにする。",
    ],
  },
}
