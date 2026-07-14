import { createFileRoute } from "@tanstack/react-router"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PrinciplePageHeader } from "@/components/catalog/principle-page-header"
import { sampleCanvasStyle } from "@/components/catalog/sample-canvas-style"

export const Route = createFileRoute("/_catalog/")({
  component: ConceptPage,
})

/**
 * コンセプト。ターゲットと製品カテゴリに根ざした、すべての判断の土台になる原則
 */
function ConceptPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-12 px-4 py-12 md:px-8">
      <PrinciplePageHeader
        title="コンセプト"
        lead="転職・求人サービスのためのデザインシステム。仕事を探す人と人を探す企業という、人生と経営に関わる真剣な場面を扱う。だからこそ緊張をほぐす親しみと、信頼に足る落ち着きを両立させる。以下の6つが、配色や余白より上位にある判断基準。"
      />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">1. スマホの片手で完結する</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
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
        <p className="text-xs leading-relaxed text-muted-foreground">
          主要アクションは画面下部に固定。スクロールしても迷子にならない。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">2. 重い決断を、軽い一歩に分解する</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
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
        <p className="text-xs leading-relaxed text-muted-foreground">
          重い行動(primary)の隣に必ず軽い行動がある。空状態は「現状+次の一歩+CTA」の3点セット。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">3. モダンでポップに。でもポップ過ぎない</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
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

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">4. 信頼は細部でつくる</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          個人情報と生活のかかった選択を預かる。何が誰に公開されるかは行動の前に明示する。取り返しのつかない操作は必ず確認を挟む。不安への答え(ブロックできる、知られない)は説明の奥ではなく、行動のすぐそばに置く。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex flex-col gap-2 rounded-2xl bg-background p-4 text-sm text-foreground"
        >
          <span>この求人に応募しますか？</span>
          <span className="text-xs text-muted-foreground">
            ※応募すると氏名が企業に公開されます。
          </span>
          <div className="flex gap-2">
            <Button size="sm">応募を完了する</Button>
            <Button size="sm" variant="ghost">
              キャンセル
            </Button>
          </div>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">
          公開範囲の注意はボタンの直前に。読んだ上で押せる配置が信頼になる。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">5. 地域の言葉で話す</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          全国一律のサービス語ではなく、その土地の地名・言葉・文脈で話しかける。地域で言い換えられる文言は最初から差し替え可能に設計し、方言や土地の表現を「飾り」でなく本文で使う。親しみは装飾ではなく、ことばから生まれる。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">6. 両側で同じ言語</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          仕事を探す人と、人を探す企業。立場は違っても同じトークン・同じコンポーネントで作る。探す側の画面は余裕と励ましに、企業の管理画面は密度と効率に振る。同じ言語の振れ幅で応えることで、どちらの画面もひとつのサービスとして通じ合う。
        </p>
      </section>
    </div>
  )
}
