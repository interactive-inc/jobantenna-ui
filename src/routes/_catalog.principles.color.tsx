import { createFileRoute } from "@tanstack/react-router"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ColorSwatch } from "@/components/catalog/color-swatch"
import { PrinciplePageHeader } from "@/components/catalog/principle-page-header"
import { sampleCanvasStyle } from "@/components/catalog/sample-canvas-style"

export const Route = createFileRoute("/_catalog/principles/color")({
  component: ColorPage,
})

type SwatchEntry = {
  name: string
  light: string
  dark: string
  usage: string
}

const brandTokens: ReadonlyArray<SwatchEntry> = [
  {
    name: "brand",
    light: "oklch(0.852 0.199 91.936)",
    dark: "oklch(0.852 0.199 91.936)",
    usage: "アイデンティティの色。ロゴや象徴的な場面。テーマで変化しない固定値",
  },
  {
    name: "primary",
    light: "oklch(0.852 0.199 91.936)",
    dark: "oklch(0.795 0.184 86.047)",
    usage: "UI の主要アクション。テーマごとにコントラストを満たすよう調整される",
  },
  {
    name: "primary-foreground",
    light: "oklch(0.421 0.095 57.708)",
    dark: "oklch(0.421 0.095 57.708)",
    usage: "primary の上に載せる文字色",
  },
]

const baseTokens: ReadonlyArray<SwatchEntry> = [
  {
    name: "background / foreground",
    light: "oklch(1 0 0)",
    dark: "oklch(0.145 0 0)",
    usage: "画面の地と基本の文字色",
  },
  {
    name: "card / popover",
    light: "oklch(1 0 0)",
    dark: "oklch(0.205 0 0)",
    usage: "カードと浮き面。ダークでは一段明るくして奥行きを出す",
  },
  {
    name: "muted",
    light: "oklch(0.97 0 0)",
    dark: "oklch(0.269 0 0)",
    usage: "補助領域の背景と非活性。muted-foreground が補助テキスト",
  },
  {
    name: "secondary",
    light: "oklch(0.967 0.001 286.375)",
    dark: "oklch(0.274 0.006 286.033)",
    usage: "副次アクションのボタン背景",
  },
  {
    name: "border / input",
    light: "oklch(0.922 0 0)",
    dark: "oklch(1 0 0 / 10%)",
    usage: "枠線と入力欄の境界。ダークでは白の透過で表現",
  },
  {
    name: "ring",
    light: "oklch(0.708 0 0)",
    dark: "oklch(0.556 0 0)",
    usage: "フォーカスリング",
  },
]

/**
 * 配色。一色のアクセント、ブランドとプライマリの分離、状態の色の固定対応
 */
function ColorPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-12 px-4 py-12 md:px-8">
      <PrinciplePageHeader
        title="配色"
        lead="原則は2つ。画面はグレースケールで組みアクセントはアンバー1色だけ、そして彩度のある色は装飾でなく状態の意味に固定して割り当てる。ユーザーは「光っている場所」と「色の意味」だけを覚えればいい。"
      />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">ブランドとプライマリは別物</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          brand はアイデンティティを示す固定色で、ロゴや象徴的な演出にだけ使う。primary は UI
          の主要アクション用の色で、テーマごとに可読性(コントラスト)を優先して調整される。ブランドカラーが見やすい色とは限らないので、UI
          が参照するのは常に primary。
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {brandTokens.map((token) => (
            <ColorSwatch key={token.name} {...token} />
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          見本は左がライト、右がダークテーマの実値。brand は両テーマで同じ値、primary
          はダークでわずかに沈めてコントラストを確保している。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">主要アクションだけが光る</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          primary のボタンは1画面に原則1つ。重要度は色でなくバリアントで段階づける。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex flex-wrap items-center gap-2 rounded-2xl bg-background p-4 text-foreground"
        >
          <Button>応募する</Button>
          <Button variant="secondary">保存</Button>
          <Button variant="outline">詳細を見る</Button>
          <Button variant="ghost">キャンセル</Button>
          <Button disabled>応募済み</Button>
        </div>
        <p className="text-xs text-muted-foreground">
          この列で primary
          は「応募する」だけ。同じ画面に主役を2つ置きたくなったら、画面を分けるか一方を副次に落とす。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">グレーの土台</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          アクセントが1色で成立するのは、残り全てが無彩色だから。土台のトークンは明度だけで階層を作る。
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {baseTokens.map((token) => (
            <ColorSwatch key={token.name} {...token} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">状態の色 — 意味に固定する</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          彩度のある色は状態の意味に固定して割り当て、全プロダクトで同じ対応を使う。青=相手からの事実、紫=こちらから送ったシグナル、緑=相手から届いたシグナル、黄=内部メモ、赤=未読・要対応・破壊的操作。色だけに頼らず、必ずラベルを併記する。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex flex-col gap-2 rounded-xl bg-background p-4 text-foreground"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-56 shrink-0 text-sm text-muted-foreground">相手からの事実</span>
            <Badge className="border-blue-200 bg-blue-50 text-blue-700">応募あり</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-56 shrink-0 text-sm text-muted-foreground">
              こちらから送ったシグナル
            </span>
            <Badge className="border-purple-200 bg-purple-50 text-purple-700">送信済み</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-56 shrink-0 text-sm text-muted-foreground">
              相手から届いたシグナル
            </span>
            <Badge className="border-green-200 bg-green-50 text-green-700">受信あり</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-56 shrink-0 text-sm text-muted-foreground">内部向けのメモ</span>
            <Badge className="border-yellow-200 bg-yellow-50 text-yellow-700">メモあり</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-56 shrink-0 text-sm text-muted-foreground">未読・要対応</span>
            <Badge variant="destructive">未読 3</Badge>
            <Badge variant="destructive">99+</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-56 shrink-0 text-sm text-muted-foreground">
              公開状態(彩度を使わない)
            </span>
            <Badge>公開中</Badge>
            <Badge variant="outline">停止中</Badge>
            <Badge variant="secondary">下書き</Badge>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">destructive — 唯一の警告色</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          赤は「取り返しがつかない」の合図。破壊的操作のボタンは塗りつぶしでなく、赤い文字と薄い赤背景で段階を保つ。実行前には必ず確認を挟み、「この操作は取り消せません。」を明記する。
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <ColorSwatch
            name="destructive"
            light="oklch(0.577 0.245 27.325)"
            dark="oklch(0.704 0.191 22.216)"
            usage="破壊的操作・未読・エラー。ダークでは明度を上げて視認性を保つ"
          />
        </div>
        <div
          style={sampleCanvasStyle}
          className="flex flex-wrap items-center gap-2 rounded-2xl bg-background p-4 text-foreground"
        >
          <Button variant="destructive">削除</Button>
          <Button variant="outline">キャンセル</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">チャートは無彩色</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          グラフの系列は明度5段階のグレー(chart-1〜5)で区別する。チャートに彩度を持ち込むと状態色と意味が衝突するため、強調したい1系列がある場合のみ
          primary を使ってよい。
        </p>
        <div className="flex items-end gap-2 rounded-2xl border p-4">
          <div className="h-16 w-8 rounded-lg" style={{ background: "oklch(0.87 0 0)" }} />
          <div className="h-12 w-8 rounded-lg" style={{ background: "oklch(0.556 0 0)" }} />
          <div className="h-20 w-8 rounded-lg" style={{ background: "oklch(0.439 0 0)" }} />
          <div className="h-8 w-8 rounded-lg" style={{ background: "oklch(0.371 0 0)" }} />
          <div className="h-14 w-8 rounded-lg" style={{ background: "oklch(0.269 0 0)" }} />
          <span className="ml-2 text-xs text-muted-foreground">
            chart-1 〜 chart-5(両テーマ共通)
          </span>
        </div>
      </section>
    </div>
  )
}
