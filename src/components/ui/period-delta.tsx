export function PeriodDelta({ value }: { value: number }) {
  const sign = value > 0 ? "+" : value < 0 ? "−" : "±"
  const tone = value > 0 ? "text-success" : value < 0 ? "text-warning" : "text-muted-foreground"

  return (
    <span data-slot="period-delta" className={tone}>
      {sign}
      {Math.abs(value).toLocaleString("ja-JP")}
    </span>
  )
}
