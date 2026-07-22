import { createFileRoute } from "@tanstack/react-router"
import type { CSSProperties } from "react"
import { BellDotIcon, CircleCheckIcon, InfoIcon, SendIcon, StickyNoteIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ColorSwatch } from "@/components/catalog/color-swatch"
import { PrinciplePageHeader } from "@/components/catalog/principle-page-header"

export const Route = createFileRoute("/_catalog/principles/color")({
  component: ColorPage,
})

type SwatchEntry = {
  name: string
  light: string
  dark: string
  usage: string
}

const brandTokens: ReadonlyArray<SwatchEntry> = [
  {
    name: "job-antenna-black",
    light: "#2A2E3D",
    dark: "#2A2E3D",
    usage: "ブランドの骨格。foreground と primary-foreground の基準",
  },
  {
    name: "job-antenna-yellow",
    light: "#FFC306",
    dark: "#FFC306",
    usage: "ブランドの光。brand と主要アクションの primary に対応",
  },
]

const shadcnTokens: ReadonlyArray<SwatchEntry> = [
  {
    name: "background",
    light: "#FFFFFF",
    dark: "#2A2E3D",
    usage: "ページ全体の地。ダークはブランド Black をそのまま使う",
  },
  {
    name: "foreground",
    light: "#2A2E3D",
    dark: "#ECEFF1",
    usage: "見出し・本文。Blue Gray と組み合わせて階層を作る",
  },
  {
    name: "card / popover",
    light: "#FFFFFF",
    dark: "#37474F",
    usage: "カードと浮き面。ダークでは background より一段明るい",
  },
  {
    name: "primary",
    light: "#FFC306",
    dark: "#FFC306",
    usage: "主要CTA・選択状態。文字は primary-foreground の Black",
  },
  {
    name: "secondary",
    light: "#FEFAF4",
    dark: "#455A64",
    usage: "軽い代替アクション。ライトは white-yellow を使う",
  },
  {
    name: "muted / accent",
    light: "#ECEFF1",
    dark: "#37474F",
    usage: "補助面・非活性・ホバー。Blue Gray で静かな階層を作る",
  },
  {
    name: "border / input",
    light: "#CFD8DC",
    dark: "#546E7A",
    usage: "枠線と入力の境界。面より一段強い Blue Gray",
  },
  {
    name: "ring",
    light: "#2A2E3D",
    dark: "#FFC306",
    usage: "キーボードフォーカス。背景と3:1以上になるブランド色を選ぶ",
  },
]

const jobAntennaSampleStyle: CSSProperties = {
  "--background": "#ffffff",
  "--foreground": "#2a2e3d",
  "--card": "#ffffff",
  "--card-foreground": "#2a2e3d",
  "--popover": "#ffffff",
  "--popover-foreground": "#2a2e3d",
  "--primary": "#ffc306",
  "--primary-foreground": "#2a2e3d",
  "--secondary": "#fefaf4",
  "--secondary-foreground": "#2a2e3d",
  "--muted": "#eceff1",
  "--muted-foreground": "#546e7a",
  "--accent": "#eceff1",
  "--accent-foreground": "#2a2e3d",
  "--destructive": "#b71c1c",
  "--border": "#cfd8dc",
  "--input": "#cfd8dc",
  "--ring": "#2a2e3d",
  "--link": "#0d47a1",
  "--signal": "#5d39fe",
  "--signal-muted": "color-mix(in oklch, #5d39fe 12%, white)",
  "--info": "#0d47a1",
  "--info-muted": "#bbdefb",
  "--success": "#004d40",
  "--success-muted": "#b2dfdb",
  "--warning": "#f9a406",
  "--warning-foreground": "#2a2e3d",
  "--warning-muted": "#fefaf4",
}

/**
 * ジョブアンテナの実パレットを shadcn の意味トークンへ接続する配色原則
 */
function ColorPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-12 px-4 py-12 md:px-8">
      <PrinciplePageHeader
        title="配色"
        lead="ジョブアンテナの実パレットを色名のままUIへ直書きせず、shadcnの意味トークンへ割り当てて使う。ブランドのYellowとBlackを核に、Blue Grayで面と境界を作り、彩度のある色は状態の意味にだけ固定する。"
      />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">ブランドの核</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          YellowとBlackはライト・ダークで変えない固定値。Yellowを面、Blackを文字に使うことで、ブランドらしさと読みやすさを同時に保つ。
        </p>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {brandTokens.map((token) => (
            <ColorSwatch key={token.name} {...token} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">shadcnの基本トークン</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          コンポーネントは元の色名ではなく、primary・muted・borderのような役割を参照する。テーマ切り替えは値だけを変え、役割は変えない。
        </p>
        <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
          {shadcnTokens.map((token) => (
            <ColorSwatch key={token.name} {...token} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">主要アクションだけが光る</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          primaryは1画面に原則1つ。副次アクションはsecondary・outline・ghostへ落とし、Yellowの面を増やしすぎない。
        </p>
        <div
          style={jobAntennaSampleStyle}
          className="flex flex-wrap items-center gap-2 rounded-2xl bg-background p-4 text-foreground"
        >
          <Button>応募する</Button>
          <Button variant="secondary">保存</Button>
          <Button variant="outline">詳細を見る</Button>
          <Button variant="ghost">キャンセル</Button>
          <Button variant="link" className="text-link">
            募集要項を確認
          </Button>
          <Button disabled>応募済み</Button>
        </div>
        <p className="text-xs text-muted-foreground">
          テキストリンクは低コントラストのYellowを避け、Blueのlinkトークンを使う。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">状態色は意味に固定する</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          色だけに頼らず、アイコンとラベルを併記する。淡い色を面、濃い色を文字に分けることで、状態バッジもコントラストを保つ。
        </p>
        <div
          style={jobAntennaSampleStyle}
          className="flex flex-col gap-2 rounded-2xl bg-background p-4 text-foreground"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-56 shrink-0 text-sm text-muted-foreground">相手からの事実</span>
            <Badge className="border-info/30 bg-info-muted text-info">
              <InfoIcon data-icon="inline-start" aria-hidden="true" />
              応募あり
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-56 shrink-0 text-sm text-muted-foreground">
              こちらから送ったシグナル
            </span>
            <Badge className="border-signal/30 bg-signal-muted text-signal">
              <SendIcon data-icon="inline-start" aria-hidden="true" />
              送信済み
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-56 shrink-0 text-sm text-muted-foreground">
              相手から届いたシグナル
            </span>
            <Badge className="border-success/30 bg-success-muted text-success">
              <CircleCheckIcon data-icon="inline-start" aria-hidden="true" />
              受信あり
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-56 shrink-0 text-sm text-muted-foreground">内部向けのメモ</span>
            <Badge className="border-warning/40 bg-warning-muted text-warning-foreground">
              <StickyNoteIcon data-icon="inline-start" aria-hidden="true" />
              メモあり
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-56 shrink-0 text-sm text-muted-foreground">未読・要対応</span>
            <Badge variant="destructive">
              <BellDotIcon data-icon="inline-start" aria-hidden="true" />
              未読 3
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-56 shrink-0 text-sm text-muted-foreground">
              公開状態（彩度を使わない）
            </span>
            <Badge>公開中</Badge>
            <Badge variant="outline">停止中</Badge>
            <Badge variant="secondary">下書き</Badge>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">チャートはBlue Grayで組む</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          系列はBlue
          Grayの明度差で区別し、状態色との意味衝突を避ける。強調したい1系列だけprimaryを使ってよい。
        </p>
        <div className="flex items-end gap-2 rounded-2xl border p-4">
          <div className="h-16 w-8 rounded-lg bg-blue-gray1" />
          <div className="h-12 w-8 rounded-lg bg-blue-gray3" />
          <div className="h-20 w-8 rounded-lg bg-blue-gray5" />
          <div className="h-8 w-8 rounded-lg bg-blue-gray7" />
          <div className="h-14 w-8 rounded-lg bg-blue-gray10" />
          <div className="h-24 w-8 rounded-lg bg-job-antenna-yellow" />
          <span className="ml-2 text-xs text-muted-foreground">Blue Gray 5段階 + 強調1色</span>
        </div>
      </section>
    </div>
  )
}
