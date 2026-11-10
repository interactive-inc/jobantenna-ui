import type { ComponentDoc } from "@/components/catalog/component-doc"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

function SegmentedView() {
  return (
    <ToggleGroup aria-label="やりとりの時期" variant="segmented" defaultValue={["today"]}>
      <ToggleGroupItem value="today">今日</ToggleGroupItem>
      <ToggleGroupItem value="upcoming">これから</ToggleGroupItem>
    </ToggleGroup>
  )
}

function SegmentedOnMuted() {
  return (
    <div className="rounded-(--radius-container) bg-muted p-2 sm:p-4">
      <ToggleGroup aria-label="評価" variant="segmented" tone="surface" defaultValue={["b"]}>
        <ToggleGroupItem value="unrated">まだ</ToggleGroupItem>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

export const toggleGroupDoc: ComponentDoc = {
  name: "toggle-group",
  title: "セグメントコントロール",
  category: "アクション",
  purpose:
    "同じ一覧の見え方や、一つの項目の値をその場で切り替えるときに使います。",
  patterns: [
    {
      id: "segmented",
      title: "同じ一覧の表示を切り替える",
      description:
        "丸いくぼみの中で、選んだ項目だけを白く表示します。別の一覧へ切り替えるときはタブを使います。",
      previewHeight: 100,
      showControls: false,
      Demo: SegmentedView,
    },
    {
      id: "segmented-on-muted",
      title: "淡い面の上に置く",
      description:
        "背景と輪郭を区別できるように、白い面を使います。選択中の項目は濃い文字と太字で示します。",
      previewHeight: 120,
      fullBleed: true,
      showControls: false,
      Demo: SegmentedOnMuted,
    },
  ],
  usage: {
    recommended: ["選んだ項目だけを白い面にし、短い名前で違いを示す。"],
    avoid: ["別の一覧に切り替える操作に使う。その場合はタブを使う。"],
  },
}
