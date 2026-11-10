import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"

export function FormSaveBar(props: { status: ReactNode; children: ReactNode }) {
  return (
    <div
      data-slot="form-save-bar"
      className="sticky bottom-[calc(var(--ja-form-save-footer-offset,0px)+var(--spacing)*2)] z-20"
    >
      <Card className="grid gap-2 rounded-(--radius-container) p-3 shadow-(--ja-shadow-floating) sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:pr-4 sm:pl-(--ja-layout-panel-gutter)">
        <div className="min-w-0 flex-1 text-sm" aria-live="polite">
          {props.status}
        </div>
        <div className="flex flex-wrap items-center justify-end gap-3">{props.children}</div>
      </Card>
    </div>
  )
}
