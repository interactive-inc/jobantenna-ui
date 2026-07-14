import { createFileRoute } from "@tanstack/react-router"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PrinciplePageHeader } from "@/components/catalog/principle-page-header"
import { sampleCanvasStyle } from "@/components/catalog/sample-canvas-style"

export const Route = createFileRoute("/_catalog/principles/spacing")({
  component: SpacingPage,
})

type SpacingToken = {
  name: string
  px: number
  tailwind: string
  usage: string
}

const spacingTokens: ReadonlyArray<SpacingToken> = [
  {
    name: "sm",
    px: 2,
    tailwind: "gap-0.5 / p-0.5",
    usage: "アイコンとラベルの間など、要素内の最小のすき間",
  },
  {
    name: "md",
    px: 4,
    tailwind: "gap-1 / p-1",
    usage: "密なリスト項目内のギャップ、バッジの並び",
  },
  {
    name: "lg",
    px: 8,
    tailwind: "gap-2 / p-2",
    usage: "コンポーネント内部の標準パディング、ボタンの並び",
  },
  {
    name: "xl",
    px: 16,
    tailwind: "gap-4 / p-4",
    usage: "セクション間、カードの内側と外側の余白",
  },
]

/**
 * 原則「余白は4段階のリズム」。スケールと実例
 */
function SpacingPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-12 px-4 py-12 md:px-8">
      <PrinciplePageHeader
        title="余白"
        lead="余白は 2 / 4 / 8 / 16px の4値だけを使う。情報密度が高い画面でも、この4段階を守ることでリズムが崩れない。6px や 12px のような中間値が欲しくなったら、それは値の問題ではなく階層設計の見直しが必要なサイン。"
      />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">スケール</h2>
        <div className="flex flex-col gap-2 rounded-xl border p-4">
          {spacingTokens.map((token) => (
            <div key={token.name} className="flex items-center gap-4">
              <code className="w-8 shrink-0 text-xs font-medium">{token.name}</code>
              <span className="w-10 shrink-0 text-xs text-muted-foreground">{token.px}px</span>
              <div className="h-4 shrink-0 bg-primary" style={{ width: token.px * 8 }} />
              <div className="flex min-w-0 flex-col">
                <code className="text-xs">{token.tailwind}</code>
                <span className="truncate text-xs text-muted-foreground">{token.usage}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Tailwind では *-0.5 / *-1 / *-2 / *-4
          がこの4値に対応する。それ以外の余白ユーティリティ(*-1.5、*-3 など)は使わない。縦の間隔は
          margin でなく gap / space-y で作る。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">実例 — 4値でカードを組む</h2>
        <div
          style={sampleCanvasStyle}
          className="flex justify-center rounded-2xl bg-background p-4 text-foreground"
        >
          <div className="flex w-full max-w-sm flex-col gap-2 rounded-4xl border bg-card p-4 text-card-foreground">
            <div className="flex items-center gap-1">
              <Badge variant="secondary">正社員</Badge>
              <Badge variant="secondary">未経験OK</Badge>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-medium">フロントエンドエンジニア</span>
              <span className="text-xs text-muted-foreground">株式会社サンプル / 那覇市</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm">応募する</Button>
              <Button size="sm" variant="outline">
                詳細を見る
              </Button>
            </div>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          カードの内側が p-4(16px)、セクションのまとまりが gap-2(8px)、バッジの並びが
          gap-1(4px)、タイトルと補足の間が
          gap-0.5(2px)。大きな区切りほど大きな余白、という対応が4段で完結する。
        </p>
      </section>
    </div>
  )
}
