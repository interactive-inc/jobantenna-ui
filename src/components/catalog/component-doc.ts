import type { ComponentType } from "react"

export type CatalogCategory =
  | "アクション"
  | "フォーム"
  | "データ表示"
  | "ナビゲーション"
  | "オーバーレイ"
  | "フィードバック"
  | "チャット"
  | "レイアウト"

export type ComponentPattern = {
  id: string
  title: string
  description: string
  previewHeight: number | null
  fullBleed?: boolean
  showControls?: boolean
  details?: readonly { label: string; description: string }[]
  Demo: ComponentType
}

export type ComponentDoc = {
  name: string
  title: string
  category: CatalogCategory
  purpose: string
  patterns: ReadonlyArray<ComponentPattern>
  usage?: {
    recommended: readonly string[]
    avoid: readonly string[]
  }
}
