import { cn } from "@/lib/utils"

const comparisons = [
  {
    label: "カードの外側は16px",
    detail: "カードとその中の操作部品には、役割に応じてそれぞれのトークンを使います。",
    incorrectOuter: "rounded-(--radius-outer)",
    incorrectInner: "rounded-(--radius-inner)",
    incorrectValues: "外側8px / 内側8px",
    padding: "p-2",
  },
  {
    label: "余白を広げても角丸は同じ",
    detail: "カード内の余白を広げる場合も、外側の角丸は16pxです。",
    incorrectOuter: "rounded-3xl",
    incorrectInner: "rounded-(--radius-inner)",
    incorrectValues: "外側24px / 内側8px",
    padding: "p-3",
  },
  {
    label: "大きな区画にも同じ角丸を使う",
    detail: "小さなカードと大きな区画で、外側の角丸を16pxに揃えます。",
    incorrectOuter: "rounded-4xl",
    incorrectInner: "rounded-(--radius-inner)",
    incorrectValues: "外側32px / 内側8px",
    padding: "p-2",
  },
  {
    label: "カード内の操作部品は8px",
    detail: "内側の操作部品には操作用のトークンを使います。",
    incorrectOuter: "rounded-(--radius-container)",
    incorrectInner: "rounded-(--radius-container)",
    incorrectValues: "外側16px / 内側16px",
    padding: "p-2",
  },
] as const

export function RadiusComparisons() {
  return (
    <section className="grid gap-4" aria-labelledby="nested-radius">
      <h2 id="nested-radius" className="text-xl font-bold">
        入れ子の角丸を比較する
      </h2>
      <p className="text-muted-foreground">
        角の曲線を比較しやすいように、見本は2.5倍に拡大しています。
      </p>
      {comparisons.map((comparison) => (
        <figure key={comparison.label} className="grid gap-3 border-t pt-4">
          <figcaption className="grid gap-1">
            <h3 className="font-semibold">{comparison.label}</h3>
            <p className="text-sm text-muted-foreground">{comparison.detail}</p>
          </figcaption>
          <div className="ja-light-surface grid grid-cols-2 gap-3 rounded-(--radius-container) bg-page p-3 text-foreground sm:gap-4 sm:p-4">
            <div className="grid min-w-0 gap-2">
              <p className="text-sm font-semibold">基準外</p>
              <div
                className="relative h-24 overflow-hidden rounded-(--radius-outer) border bg-card"
                aria-hidden
              >
                <div
                  className={cn(
                    "absolute top-3 left-3 size-20 origin-top-left scale-[2.5] bg-muted ring-1 ring-border",
                    comparison.incorrectOuter,
                    comparison.padding,
                  )}
                >
                  <div
                    className={cn("size-full bg-card ring-1 ring-input", comparison.incorrectInner)}
                  />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{comparison.incorrectValues}</p>
            </div>
            <div className="grid min-w-0 gap-2">
              <p className="text-sm font-semibold">基準</p>
              <div
                className="relative h-24 overflow-hidden rounded-(--radius-outer) border bg-card"
                aria-hidden
              >
                <div
                  className={cn(
                    "absolute top-3 left-3 size-20 origin-top-left scale-[2.5] rounded-(--radius-container) bg-muted ring-1 ring-border",
                    comparison.padding,
                  )}
                >
                  <div className="size-full rounded-(--radius-inner) bg-card ring-1 ring-input" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">外側16px / 内側8px</p>
            </div>
          </div>
        </figure>
      ))}
    </section>
  )
}
