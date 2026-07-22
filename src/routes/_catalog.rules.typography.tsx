import { createFileRoute } from "@tanstack/react-router"

import { RulePageHeader } from "@/components/catalog/rule-page-header"
import { sampleCanvasStyle } from "@/components/catalog/sample-canvas-style"

export const Route = createFileRoute("/_catalog/rules/typography")({
  component: TypographyPage,
})

type TypeSample = {
  label: string
  className: string
  px: number
  usage: string
}

const typeSamples: ReadonlyArray<TypeSample> = [
  { label: "text-2xl", className: "text-2xl font-bold", px: 24, usage: "ページタイトル" },
  { label: "text-lg", className: "text-lg font-semibold", px: 18, usage: "セクション見出し" },
  { label: "text-base", className: "text-base", px: 16, usage: "本文(長文)" },
  {
    label: "text-sm",
    className: "text-sm",
    px: 14,
    usage: "UI の基本サイズ。ボタン・フォーム・説明文",
  },
  { label: "text-xs", className: "text-xs", px: 12, usage: "バッジ・メタ情報・補足" },
]

type VoiceRule = {
  rule: string
  example: string
}

const voiceRules: ReadonlyArray<VoiceRule> = [
  {
    rule: "です・ます調。感嘆符は完了・祝福の場面だけ",
    example: "応募が完了しました！",
  },
  {
    rule: "注意書きは ※ で前置きし、本文と分ける",
    example: "※応募すると氏名が企業に公開されます。",
  },
  {
    rule: "空状態は「現状」+「次の一歩」の2文と CTA で構成する",
    example: "まだメッセージはありません / まずはプロフィールを充実させましょう",
  },
  {
    rule: "破壊的操作は必ず確認を挟み、取り消せないことを明記する",
    example: "削除しますか？ この操作は取り消せません。",
  },
  {
    rule: "完了はトーストで短く伝える",
    example: "一時保存しました。",
  },
]

/**
 * 原則「文字とことば」。一書体のタイポグラフィとトーン&ボイス
 */
function TypographyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16 md:px-10">
      <RulePageHeader
        title="文字"
        lead="書体は Noto Sans JP Variable の一書体運用。日本語の可読性を最優先し、階層は書体でなくサイズとウェイトで作る。可変フォントなので font-weight は数値でそのまま指定できる。そして文字と同じくらい、ことばのトーンも UI の一部。"
      />

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">タイプスケール</h2>
        <div
          style={sampleCanvasStyle}
          className="flex flex-col gap-2 rounded-xl bg-background p-4 text-foreground"
        >
          {typeSamples.map((sample) => (
            <div key={sample.label} className="flex items-baseline gap-4">
              <code className="w-20 shrink-0 text-xs text-muted-foreground">{sample.label}</code>
              <span className="w-10 shrink-0 text-xs text-muted-foreground">{sample.px}px</span>
              <div className="flex min-w-0 flex-col">
                <span className={sample.className}>沖縄で働く、を面白く。</span>
                <span className="text-xs text-muted-foreground">{sample.usage}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          UI の基本は text-sm。text-xl と text-3xl
          以上は原則使わず、5段で完結させる。書体は増やさず、italic は日本語で崩れるため使わない。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">ウェイト</h2>
        <div
          style={sampleCanvasStyle}
          className="flex flex-col gap-1 rounded-xl bg-background p-4 text-foreground"
        >
          <span className="font-normal">Regular 400 — 本文と説明文</span>
          <span className="font-medium">Medium 500 — ラベル・ボタン・強調</span>
          <span className="font-semibold">Semibold 600 — セクション見出し</span>
          <span className="font-bold">Bold 700 — ページタイトル</span>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">トーン&ボイス</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          文言のルール。例文の型はそのまま流用してよい。
        </p>
        <div className="flex flex-col gap-4 rounded-xl border p-4">
          {voiceRules.map((voice) => (
            <div key={voice.rule} className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{voice.rule}</span>
              <span className="text-sm text-muted-foreground">例: {voice.example}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
