import type { ComponentDoc } from "@/components/catalog/component-doc"
import { PeriodDelta } from "@/components/ui/period-delta"

function Directions() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-numeric text-sm">
      <PeriodDelta value={6} />
      <PeriodDelta value={0} />
      <PeriodDelta value={-3} />
    </div>
  )
}

export const periodDeltaDoc: ComponentDoc = {
  name: "period-delta",
  title: "増減",
  category: "データ表示",
  purpose: "前の期間との差を、符号と色で示します。",
  patterns: [
    {
      id: "directions",
      title: "増加・変化なし・減少",
      description:
        "増加は緑の「+」、変化なしは補足色の「±」、減少は橙の「−」で表示します。比較期間は見出しなどでまとめて示します。",
      previewHeight: 120,
      showControls: false,
      Demo: Directions,
    },
  ],
  usage: {
    recommended: [
      "比較する期間を見出しに添える。月次なら「今月」と「先月比」を区別する。",
      "両方の期間を確認できた場合に差を表示する。先月分を確認できない場合は「先月の数字はまだありません」と伝える。",
      "利用開始直後の案内を出す場合は、対象の指標が比較する両期間で0だと確認できてから切り替える。集計が途中なら、取得済みの数字を残す。",
    ],
    avoid: ["比較できないときに「±0」と表示する。±0は比較できた結果、差がなかったときに使う。"],
  },
}
