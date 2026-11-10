import { cn } from "@/lib/utils"
import { Loader2Icon } from "lucide-react"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      data-slot="spinner"
      role="status"
      aria-label="読み込み中"
      strokeWidth={1.75}
      className={cn("size-4 shrink-0 text-muted-foreground motion-safe:animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
