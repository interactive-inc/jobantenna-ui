type Props = {
  name: string
  light: string
  dark: string
  usage: string
}

/**
 * ライト・ダーク両テーマの実値と用途をまとめた色見本
 */
export function ColorSwatch(props: Props) {
  return (
    <div className="grid overflow-hidden rounded-2xl border bg-card text-card-foreground sm:grid-cols-[18rem_1fr]">
      <div className="grid min-h-24 grid-cols-2">
        <div
          className="flex items-end p-2 ring-1 ring-black/10 ring-inset"
          style={{ background: props.light }}
        >
          <span className="rounded-md bg-black/55 px-1.5 py-0.5 text-xs font-semibold text-white">
            LIGHT
          </span>
        </div>
        <div
          className="flex items-end p-2 ring-1 ring-white/15 ring-inset"
          style={{ background: props.dark }}
        >
          <span className="rounded-md bg-black/55 px-1.5 py-0.5 text-xs font-semibold text-white">
            DARK
          </span>
        </div>
      </div>
      <div className="flex min-w-0 flex-col justify-center gap-1.5 p-4">
        <code className="text-base font-semibold text-foreground">{props.name}</code>
        <span className="text-sm leading-relaxed text-muted-foreground">{props.usage}</span>
        <span className="font-mono text-sm text-muted-foreground">
          {props.light} / {props.dark}
        </span>
      </div>
    </div>
  )
}
