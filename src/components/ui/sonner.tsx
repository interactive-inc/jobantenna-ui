"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--ja-ink)",
          "--normal-text": "var(--ja-paper)",
          "--normal-border": "var(--ja-ink)",
          "--border-radius": "var(--radius-outer)",
        } as React.CSSProperties
      }
      toastOptions={{
        closeButtonAriaLabel: "通知を閉じる",
        style: {
          paddingBlock: "calc(var(--spacing) * 4)",
          paddingInline: "calc(var(--spacing) * 6)",
        },
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
