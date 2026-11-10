import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer relative inline-flex h-(--switch-height) w-(--switch-width) shrink-0 items-center rounded-full p-(--switch-inset) transition-colors outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:ring-2 aria-invalid:ring-destructive data-checked:bg-primary data-unchecked:bg-input data-disabled:cursor-not-allowed data-disabled:opacity-50",
        size === "sm"
          ? "[--switch-height:calc(var(--spacing)*4)] [--switch-inset:calc(var(--spacing)/2)] [--switch-thumb:calc(var(--spacing)*3)] [--switch-width:calc(var(--spacing)*7)]"
          : "[--switch-height:calc(var(--spacing)*6)] [--switch-inset:var(--spacing)] [--switch-thumb:calc(var(--spacing)*4)] [--switch-width:var(--ja-control-height)]",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block size-(--switch-thumb) rounded-full bg-background shadow-sm transition-transform data-checked:translate-x-[calc(var(--switch-width)-var(--switch-thumb)-2*var(--switch-inset))] dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
