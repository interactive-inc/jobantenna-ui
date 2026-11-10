import { Check, CircleAlert } from "lucide-react"

/** 保存できる状態と、この画面で最後に一時保存した時刻を表示する。 */
export function FormSaveStatus(props: { requiredCount: number | null; lastSavedAt: Date | null }) {
  const missingFields = props.requiredCount != null && props.requiredCount > 0

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
      {missingFields && (
        <span className="flex items-center gap-2 text-base font-bold text-(--status-attention-text)">
          <CircleAlert className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
          必須があと{props.requiredCount}つあります
        </span>
      )}
      {props.requiredCount === 0 && (
        <span className="flex items-center gap-2 text-base font-bold text-success">
          <Check className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
          必須はすべて入っています
        </span>
      )}
      {props.lastSavedAt && (
        <span className="text-sm text-muted-foreground">
          {props.lastSavedAt.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" })}
          に一時保存しました
        </span>
      )}
    </div>
  )
}
