import { createFileRoute } from "@tanstack/react-router"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RulePageHeader } from "@/components/catalog/rule-page-header"
import { sampleCanvasStyle } from "@/components/catalog/sample-canvas-style"

export const Route = createFileRoute("/_catalog/rules/principles")({
  component: PrinciplesPage,
})

/**
 * 原則。ターゲットと製品カテゴリに根ざした、すべての判断の土台になる3原則
 */
function PrinciplesPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16 md:px-10">
      <RulePageHeader
        title="原則"
        lead="スマホの片手で完結し、重い決断を軽い一歩に分解し、モダンでポップに(でもポップ過ぎない)。転職・求人サービスのすべての判断は、この3つの上に成り立つ。"
      />

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">1. スマホの片手で完結する</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          仕事を探す人は、通勤中や休憩中にスマホで探して、そのまま応募まで終える。設計は常にモバイルファースト。1カラムで縦に流し、主要アクションは親指が届く下側に、タップ領域は最小
          36px を確保する。デスクトップは「広いモバイル」ではなく、一覧と詳細を並べる密度で応える。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex justify-center rounded-2xl bg-background p-4 text-foreground"
        >
          <div className="flex h-64 w-40 flex-col justify-between rounded-2xl border bg-card p-2 text-card-foreground">
            <div className="flex flex-col gap-1">
              <div className="h-2 w-3/4 rounded-lg bg-muted" />
              <div className="h-2 w-1/2 rounded-lg bg-muted" />
              <div className="mt-2 h-12 rounded-xl bg-muted" />
              <div className="h-12 rounded-xl bg-muted" />
            </div>
            <Button size="sm" className="w-full">
              応募する
            </Button>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          主要アクションは画面下部に固定。スクロールしても迷子にならない。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">2. 重い決断を、軽い一歩に分解する</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          転職は重い決断。いきなり「応募」だけを迫ると、ユーザーは何もせずに離脱する。保存・フォロー・気になるを伝える、のような軽いアクションを必ず併置し、段階的に関係を深められるようにする。空状態や完了画面では、必ず次の一歩を1つ提示する。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex flex-col gap-4 rounded-2xl bg-background p-4 text-foreground"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Button>応募する</Button>
            <Button variant="secondary">気になる</Button>
            <Button variant="ghost">保存</Button>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-2xl bg-muted/50 p-4 text-center">
            <span className="text-sm font-medium">まだ保存した求人はありません</span>
            <span className="text-xs text-muted-foreground">
              気になる求人を保存して、あとで見返しましょう
            </span>
            <Button size="sm" variant="outline">
              求人を探す
            </Button>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          重い行動(primary)の隣に必ず軽い行動がある。空状態は「現状+次の一歩+CTA」の3点セット。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">
          3. モダンでポップに。でもポップ過ぎない
        </h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          仕事と収入という真剣なテーマを、堅苦しくせずに扱う。ポップさを出すのは「形」(ピル形状・大きな角丸)と「一色のアクセント」と「励ますことば」の3つだけ。色数を増やす・装飾やアニメーションを盛る・絵文字を多用する、ではポップさを出さない。土台は常にグレースケールの落ち着きで、真剣さを支える。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex flex-wrap items-center gap-4 rounded-2xl bg-background p-4 text-foreground"
        >
          <Button>1分で会員登録</Button>
          <Badge variant="secondary">未経験OK</Badge>
          <span className="text-sm">応募が完了しました！</span>
          <span className="text-xs text-muted-foreground">← ポップさはこの3つの道具で出す</span>
        </div>
      </section>
    </div>
  )
}
