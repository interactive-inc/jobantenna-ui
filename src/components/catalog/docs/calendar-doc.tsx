import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Calendar } from "@/components/ui/calendar"

const interviewMonth = new Date(2026, 6, 1)

const unavailableInterviewDates = [
  new Date(2026, 6, 14),
  new Date(2026, 6, 15),
  new Date(2026, 6, 21),
]

const hireableStartMonth = new Date(2026, 0, 1)

const hireableEndMonth = new Date(2027, 11, 1)

/**
 * mode="single" の非制御カレンダーで面接希望日を選択する
 */
function BasicPattern() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">面接希望日</p>
      <Calendar mode="single" defaultMonth={interviewMonth} className="rounded-md border" />
    </div>
  )
}

/**
 * captionLayout="dropdown" で年月をドロップダウンから指定する
 */
function DropdownPattern() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">入社可能日</p>
      <Calendar
        mode="single"
        captionLayout="dropdown"
        defaultMonth={interviewMonth}
        startMonth={hireableStartMonth}
        endMonth={hireableEndMonth}
        className="rounded-md border"
      />
    </div>
  )
}

/**
 * disabled で企業側の面接不可日と土日をグレーアウトする
 */
function DisabledDatesPattern() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">面接希望日（土日・面接不可日を除く）</p>
      <Calendar
        mode="single"
        defaultMonth={interviewMonth}
        disabled={[...unavailableInterviewDates, { dayOfWeek: [0, 6] }]}
        className="rounded-md border"
      />
      <p className="text-xs text-muted-foreground">※ 企業の面接不可日と土日は選択できません</p>
    </div>
  )
}

export const calendarDoc: ComponentDoc = {
  name: "calendar",
  title: "Calendar",
  category: "フォーム",
  purpose:
    "月表示のグリッドから日付を選択するコンポーネント。react-day-picker ベースで、単一選択・年月ドロップダウン・日付の無効化に対応する。ジョブアンテナでは応募後の面接希望日の選択や、入社可能日の指定に使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        'mode="single" の非制御カレンダー。面接希望日を1日だけ選ぶ最小構成で、defaultMonth で初期表示月を固定する。',
      previewHeight: 440,
      Demo: BasicPattern,
    },
    {
      id: "dropdown",
      title: "年月ドロップダウン",
      description:
        'captionLayout="dropdown" で年と月をドロップダウンから直接指定する。入社可能日など数か月先の日付を選ぶ場面で、月送りボタンの連打を避けられる。',
      previewHeight: 440,
      Demo: DropdownPattern,
    },
    {
      id: "disabled-dates",
      title: "選択不可日",
      description:
        "disabled に日付の配列と曜日マッチャーを渡してグレーアウトする。企業側の面接不可日や休業日を候補から外すときに使う。",
      previewHeight: 480,
      Demo: DisabledDatesPattern,
    },
  ],
}
