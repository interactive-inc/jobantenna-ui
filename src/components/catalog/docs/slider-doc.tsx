import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { SearchIcon } from "lucide-react"

/**
 * 単一値・範囲指定・disabled の基本形
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">通勤時間の上限</span>
          <span className="text-muted-foreground">30分以内</span>
        </div>

        <Slider defaultValue={30} min={0} max={90} step={5} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">希望月給（万円）</span>
          <span className="text-muted-foreground">20万〜35万</span>
        </div>

        <Slider defaultValue={[20, 35]} min={15} max={60} step={1} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">那覇市からの距離（km）</span>
          <span className="text-muted-foreground">受付終了</span>
        </div>

        <Slider defaultValue={10} min={0} max={50} disabled />
      </div>
    </div>
  )
}

/**
 * 検索条件パネルの希望年収レンジ。フッターに件数付き検索ボタンを置く
 */
function SalaryRangePattern() {
  return (
    <div className="w-full max-w-sm rounded-lg border">
      <div className="border-b p-4">
        <span className="text-sm font-medium">希望年収</span>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="text-center text-sm font-medium">300万円〜600万円</div>

        <Slider defaultValue={[300, 600]} min={150} max={1000} step={50} />

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>150万円</span>
          <span>1000万円</span>
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
 * 通勤時間の上限を単一値で指定する。粗い step と目盛りで選びやすくする
 */
function CommuteTimePattern() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 rounded-lg border p-4">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">通勤時間の上限</span>
        <span className="font-medium text-primary">45分以内</span>
      </div>

      <Slider defaultValue={45} min={0} max={90} step={15} />

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>0分</span>
        <span>45分</span>
        <span>90分</span>
      </div>

      <p className="text-xs text-muted-foreground">
        自宅から勤務地までの通勤時間で求人を絞り込みます。
      </p>
    </div>
  )
}

export const sliderDoc: ComponentDoc = {
  name: "slider",
  title: "Slider",
  category: "フォーム",
  purpose:
    "数値を軸上のつまみで直感的に選ぶためのフォームコントロール。@base-ui/react ベースで、defaultValue に数値を渡すと単一値、配列を渡すと範囲指定になる非制御利用に対応する。jobantenna では求人検索の希望年収・希望月給のレンジ指定や、通勤時間の上限指定に使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "単一値・範囲指定（配列の defaultValue）・disabled の各状態。ラベルと現在値をスライダーの上に並べて表示する。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "salary-range",
      title: "希望年収レンジ",
      description:
        "求人検索の希望年収を 150万円〜1000万円 の範囲で指定する例。選択中のレンジを中央に表示し、フッターに件数付きの検索ボタンとクリアを置く。",
      previewHeight: null,
      Demo: SalaryRangePattern,
    },
    {
      id: "commute-time",
      title: "通勤時間",
      description:
        "通勤時間の上限を単一値で指定する例。15分刻みの粗い step で選びやすくし、両端の目盛りと補足説明を添える。",
      previewHeight: null,
      Demo: CommuteTimePattern,
    },
  ],
}
