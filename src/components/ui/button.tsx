import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const standardSize =
  "h-(--ja-control-height) gap-2 px-(--ja-control-inline) text-base font-bold"

const secondaryStyle =
  "border-input bg-background text-foreground [&:hover:not(:disabled)]:bg-(--page) aria-expanded:bg-(--page) dark:[&:hover:not(:disabled)]:bg-muted dark:aria-expanded:bg-muted disabled:border-transparent disabled:bg-muted disabled:text-(--ja-button-disabled-text) disabled:opacity-100"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-(--radius-outer) border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:[outline-color:var(--ja-button-focus)] active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground [&:hover:not(:disabled)]:bg-(--ja-button-primary-hover) disabled:bg-muted disabled:text-(--ja-button-disabled-text) disabled:opacity-100",
        outline: secondaryStyle,
        secondary: secondaryStyle,
        ghost:
          "[&:hover:not(:disabled)]:bg-muted aria-expanded:bg-muted disabled:text-(--ja-button-disabled-text) disabled:opacity-100",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        interest:
          "bg-(--action-interest-surface,var(--brand)) text-(--action-interest-text,var(--foreground)) [&:hover:not(:disabled)]:bg-(--ja-button-interest-hover) disabled:bg-muted disabled:text-(--ja-button-disabled-text) disabled:opacity-100",
        link: "text-(--link,var(--primary)) font-bold underline-offset-4 hover:underline",
      },
      size: {
        default: standardSize,
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-(--ja-control-compact-height) gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: standardSize,
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
      shape: { pill: "rounded-full" },
    },
    compoundVariants: [{ variant: "ghost", size: ["default", "lg"], className: "px-3" }],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant = "default",
  size = "default",
  shape,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, shape, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
