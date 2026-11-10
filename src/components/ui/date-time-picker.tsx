import { format, isValid } from "date-fns"
import { ja } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import { useId, useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTitle, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

type Props = {
  id: string
  value: string | null
  onChange: (value: string | null) => void
  invalid?: boolean
  describedBy?: string
}

const dateFormat = "yyyy年M月d日 HH:mm"
const localMinuteFormat = "yyyy-MM-dd'T'HH:mm"

export function DateTimePicker(props: Props) {
  const timeId = useId()
  const selected = props.value ? new Date(props.value) : undefined
  const value = selected && isValid(selected) ? selected : undefined
  const openState = useState(false)
  const dateState = useState<Date>()
  const timeState = useState("")
  const draftDate = dateState[0]
  const draftTime = timeState[0]
  const localValue =
    draftDate && draftTime ? `${format(draftDate, "yyyy-MM-dd")}T${draftTime}` : null
  const draft = localValue ? new Date(localValue) : null
  const validDraft = draft && isValid(draft) && format(draft, localMinuteFormat) === localValue

  return (
    <Popover
      open={openState[0]}
      onOpenChange={(open) => {
        if (open) {
          dateState[1](value)
          timeState[1](value ? format(value, "HH:mm") : "")
        }
        openState[1](open)
      }}
    >
      <PopoverTrigger
        id={props.id}
        aria-invalid={props.invalid}
        aria-describedby={props.describedBy}
        render={
          <Button
            type="button"
            variant="secondary"
            className={cn(
              "w-full min-w-0 justify-start px-3 text-sm font-normal sm:w-60",
              !value && "text-muted-foreground",
            )}
          />
        }
      >
        <CalendarIcon aria-hidden />
        {value ? format(value, dateFormat) : "日付を選ぶ"}
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="max-h-(--available-height) max-w-[calc(100vw-var(--spacing)*4)] gap-3 overflow-y-auto p-2 sm:p-4"
      >
        <PopoverTitle className="sr-only">日付と時刻を選ぶ</PopoverTitle>
        <Calendar
          mode="single"
          selected={draftDate}
          defaultMonth={draftDate}
          onSelect={dateState[1]}
          locale={ja}
          className="mx-auto p-0 [--cell-size:--spacing(7)] sm:[--cell-size:--spacing(8)]"
        />
        <label htmlFor={timeId} className="grid gap-1">
          時刻
          <Input
            id={timeId}
            type="time"
            value={draftTime}
            onChange={(event) => timeState[1](event.target.value)}
          />
        </label>
        <div className="flex flex-wrap justify-end gap-2">
          {value && (
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => {
                props.onChange(null)
                openState[1](false)
              }}
            >
              日時を消す
            </Button>
          )}
          <Button
            type="button"
            size="sm"
            disabled={!validDraft}
            onClick={() => {
              if (!validDraft) return
              props.onChange(
                value && format(value, localMinuteFormat) === localValue
                  ? props.value
                  : draft.toISOString(),
              )
              openState[1](false)
            }}
          >
            日時を確定
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
