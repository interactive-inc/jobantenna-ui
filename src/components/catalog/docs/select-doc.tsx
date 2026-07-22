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

const employmentItems = {
  fulltime: "正社員",
  contract: "契約社員",
  parttime: "アルバイト・パート",
  dispatch: "派遣社員",
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
          <SelectTrigger>
            <SelectValue placeholder="勤務地を選択" />
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
        <span className="text-sm font-medium">雇用形態（初期値あり）</span>

        <Select items={employmentItems} defaultValue="fulltime">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fulltime">正社員</SelectItem>
            <SelectItem value="contract">契約社員</SelectItem>
            <SelectItem value="parttime">アルバイト・パート</SelectItem>
            <SelectItem value="dispatch">派遣社員</SelectItem>
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

      <p className="text-xs text-muted-foreground">
        選択肢が収まらない場合はリスト内がスクロールします
      </p>
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

export const selectDoc: ComponentDoc = {
  name: "select",
  title: "Select",
  category: "フォーム",
  purpose:
    "決まった選択肢の中から1つを選ばせるドロップダウン入力。選択肢が数個〜十数個で一覧して選べる場面に向く。ジョブアンテナでは検索条件の勤務地・雇用形態・希望年収や、求人一覧の並び替えに使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "プレースホルダありと初期値ありの単一選択。Select の items に値とラベルの対応を渡し、SelectValue が選択中のラベルを表示する。",
      previewHeight: 400,
      Demo: BasicPattern,
    },
    {
      id: "desired-salary",
      title: "希望年収",
      description:
        "検索条件の希望年収を150万円〜1000万円から選ぶ例。選択肢が多くてもリスト内がスクロールし、スクロールボタンで上下に送れる。",
      previewHeight: 480,
      Demo: DesiredSalaryPattern,
    },
    {
      id: "sort-order",
      title: "並び替え",
      description:
        '求人一覧のヘッダーで新着順・おすすめ順を切り替える例。size="sm" のトリガーを件数表示と並べ、defaultValue で初期の並び順を決める。',
      previewHeight: null,
      Demo: SortOrderPattern,
    },
    {
      id: "salary-group",
      title: "給与グループ",
      description:
        "月給と時給のように性質の違う選択肢を SelectGroup と SelectLabel で区切り、SelectSeparator で境界を示す例。",
      previewHeight: 400,
      Demo: SalaryGroupPattern,
    },
  ],
}
