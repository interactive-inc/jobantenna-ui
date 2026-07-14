type Props = {
  name: string
  light: string
  dark: string
  usage: string
}

/**
 * ライト・ダーク両テーマの実値を並べた色見本1件分の行(左: ライト、右: ダーク)
 */
export function ColorSwatch(props: Props) {
  return (
    <div className="flex items-center gap-4 rounded-xl border p-2">
      <div className="flex shrink-0 items-center gap-1">
        <div className="size-9 rounded-lg ring-1 ring-border" style={{ background: props.light }} />
        <div className="size-9 rounded-lg ring-1 ring-border" style={{ background: props.dark }} />
      </div>
      <div className="flex min-w-0 flex-col">
        <code className="text-xs font-medium">{props.name}</code>
        <span className="truncate text-xs text-muted-foreground">{props.usage}</span>
      </div>
    </div>
  )
}
