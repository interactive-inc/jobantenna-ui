import { useState } from "react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { DateTimePicker } from "@/components/ui/date-time-picker"
import { Label } from "@/components/ui/label"

function PublicationSchedule() {
  const [start, setStart] = useState<string | null>(new Date(2026, 10, 20, 10).toISOString())
  const [end, setEnd] = useState<string | null>(null)

  return (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-2">
        <Label htmlFor="publication-start">公開開始日時</Label>
        <DateTimePicker id="publication-start" value={start} onChange={setStart} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="publication-end">公開終了日時</Label>
        <DateTimePicker id="publication-end" value={end} onChange={setEnd} />
      </div>
    </div>
  )
}

export const calendarDoc: ComponentDoc = {
  name: "calendar",
  title: "日付ピッカー（Calendar）",
  category: "フォーム",
  purpose: "公開予約など、日付と時刻を指定する場面に使います。入力欄を押すとカレンダーが開きます。",
  patterns: [
    {
      id: "date-time",
      title: "公開日時の指定",
      description: "日付と時刻を選び、「日時を確定」を押すと入力欄に反映されます。",
      showControls: false,
      previewHeight: 520,
      Demo: PublicationSchedule,
    },
  ],
  usage: {
    recommended: [
      "日付と時刻は「2026年11月20日 10:00」の形式で表示する。",
      "曜日が必要な箇所では「11月20日（金）」のように日付の後ろへ添える。",
    ],
    avoid: ["同じ画面の中で、年月日の表記とスラッシュ区切りの日付を混在させる。"],
  },
}
