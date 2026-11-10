import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty"

export function SpacingExamples() {
  return (
    <section className="grid gap-6" aria-labelledby="spacing-examples">
      <h2 id="spacing-examples" className="text-xl font-bold">
        余白の実装例
      </h2>
      <figure className="grid gap-3">
        <figcaption className="grid gap-1">
          <h3 className="font-semibold">求人カードの内側と要素間</h3>
          <p className="text-sm text-muted-foreground">
            求人名と会社名は4px、札と操作の横並びは8px、カードの内側とまとまりの間は16pxです。
          </p>
        </figcaption>
        <div className="ja-light-surface rounded-(--radius-container) bg-page p-4 text-foreground">
          <div className="grid max-w-sm gap-4 rounded-(--radius-container) border bg-card p-4">
            <div className="grid gap-2">
              <div className="grid gap-1">
                <p className="font-bold">フロントスタッフ</p>
                <p className="text-sm text-muted-foreground">コーラルリゾート</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">名護市</Badge>
                <Badge variant="secondary">正社員</Badge>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">応募する</Button>
              <a
                href="https://jobantenna.jp/"
                className={buttonVariants({ variant: "secondary", size: "sm" })}
              >
                求人を探す
              </a>
            </div>
          </div>
        </div>
      </figure>

      <figure className="grid gap-3">
        <figcaption className="grid gap-1">
          <h3 className="font-semibold">会話の発言と独立した区画</h3>
          <p className="text-sm text-muted-foreground">
            発言同士は16px、別の区画へ移る箇所は48pxを基準にします。
          </p>
        </figcaption>
        <div className="ja-light-surface grid gap-12 rounded-(--radius-container) bg-page p-4 text-foreground sm:p-6">
          <div className="grid gap-4" aria-label="会話の間隔の見本">
            <Bubble variant="outline">
              <BubbleContent>面接の希望日時を教えてください。</BubbleContent>
            </Bubble>
            <Bubble variant="secondary" align="end">
              <BubbleContent>火曜日の午後を希望します。</BubbleContent>
            </Bubble>
          </div>
          <Empty className="rounded-(--radius-container) border bg-card">
            <EmptyHeader>
              <EmptyTitle>保存した条件はありません</EmptyTitle>
              <EmptyDescription>条件を保存すると、ここに表示されます。</EmptyDescription>
            </EmptyHeader>
          </Empty>
        </div>
      </figure>
    </section>
  )
}
