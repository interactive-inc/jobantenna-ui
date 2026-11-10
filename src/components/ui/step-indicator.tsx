import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export type Step = {
  key: string
  label: string
}

type Props = {
  steps: readonly Step[]
  currentStep: string
  completed?: boolean
}

export function StepIndicator(props: Props) {
  const currentIndex = props.steps.findIndex((step) => step.key === props.currentStep)

  return (
    <ol
      role="list"
      aria-label="手順"
      className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2 sm:gap-x-3"
    >
      {props.steps.map((step, index) => {
        const current = currentIndex === index
        const completed = props.completed || index < currentIndex

        return (
          <li
            key={step.key}
            aria-current={current ? "step" : undefined}
            className="flex min-w-0 items-center gap-1 sm:gap-2"
          >
            {index > 0 && <span aria-hidden className="h-px w-2 shrink-0 bg-border sm:w-6" />}
            <span
              aria-hidden
              className={cn(
                "grid size-6 shrink-0 place-items-center rounded-full bg-muted text-xs font-semibold text-muted-foreground",
                current && !completed && "bg-primary text-primary-foreground",
                completed && "bg-success text-background",
              )}
            >
              {completed ? <Check className="size-3.5" /> : index + 1}
            </span>
            <span
              className={cn(
                "wrap-anywhere text-xs text-muted-foreground sm:text-base",
                current && "font-bold text-foreground",
              )}
            >
              {step.label}
              {completed && <span className="sr-only">（完了）</span>}
            </span>
          </li>
        )
      })}
    </ol>
  )
}
