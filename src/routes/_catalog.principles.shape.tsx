import { createFileRoute } from "@tanstack/react-router"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Kbd } from "@/components/ui/kbd"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { PrinciplePageHeader } from "@/components/catalog/principle-page-header"
import { sampleCanvasStyle } from "@/components/catalog/sample-canvas-style"
import { InfoIcon } from "lucide-react"

export const Route = createFileRoute("/_catalog/principles/shape")({
  component: ShapePage,
})

type RadiusPreviewProps = {
  varName: string
  label: string
}

/**
 * 角丸レベルの見本となる正方形
 */
function RadiusPreview(props: RadiusPreviewProps) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-1">
      <div
        className="size-16 border-2 border-foreground/30 bg-muted"
        style={{ borderRadius: `var(${props.varName})` }}
      />
      <code className="text-xs text-muted-foreground">{props.label}</code>
    </div>
  )
}

/**
 * 形。角丸スケールを実際の用途ごとに、使うコンポーネントと合わせて示す
 */
function ShapePage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-12 px-4 py-12 md:px-8">
      <PrinciplePageHeader
        title="形"
        lead="このシステムの印象の核はピル形状のボタンと大きな角丸。仕事探しという緊張する場面の心理的ハードルを、形で下げる。一般的な UI より角丸がふた回り大きいのは意図的で、「操作するものほど丸い」。スケールは以下の5段階と円形(rounded-full)だけで、12px や 20px のような中間の半径を発明しない。"
      />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">4xl(26px) — ボタン・カード・ダイアログ</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          いちばん大きい角丸が、いちばん触ってほしいものに付く。Button
          はピル形状になり、Card・Dialog・Drawer など画面の主役になる面もこの半径で揃える。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex flex-wrap items-center gap-4 rounded-2xl bg-background p-4 text-foreground"
        >
          <RadiusPreview varName="--radius-4xl" label="4xl" />
          <Button>応募する</Button>
          <Card size="sm" className="w-56">
            <CardContent>
              <span className="text-sm font-medium">ホールスタッフ</span>
              <p className="text-xs text-muted-foreground">那覇市 / 正社員</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">3xl(22px) — 入力欄・バッジ</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Input・Select などのフォーム部品、Badge、Toggle、Popover
          の外枠。ボタンよりわずかに浅くして、押すものと書くものを見分けられるようにする。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex flex-wrap items-center gap-4 rounded-2xl bg-background p-4 text-foreground"
        >
          <RadiusPreview varName="--radius-3xl" label="3xl" />
          <Input placeholder="職種名や仕事内容などを入力" className="w-56" />
          <Badge variant="secondary">正社員</Badge>
          <Badge>Web履歴書OK</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">2xl(18px) — メニュー項目・通知・複数行入力</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          使用箇所が最も多いレベル。Dropdown や Select の項目、Tabs、Textarea、Alert、Skeleton
          など、面の内側で繰り返される要素に付く。外枠(3xl〜4xl)より一段浅くすることで入れ子が自然に見える。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex flex-wrap items-start gap-4 rounded-2xl bg-background p-4 text-foreground"
        >
          <RadiusPreview varName="--radius-2xl" label="2xl" />
          <Alert className="w-72">
            <InfoIcon />
            <AlertTitle>応募が完了しました！</AlertTitle>
            <AlertDescription>企業からの返信をお待ちください。</AlertDescription>
          </Alert>
          <Textarea placeholder="応募メッセージを入力" className="w-56" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">xl(14px) — サイドバーのボタン・小さなタイル</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Sidebar のメニューボタン、Chart の凡例、Attachment
          のタイルなど、狭い領域で繰り返される小さめの面に付く。実物はこのカタログのサイドバーで確認できる(項目をホバーすると
          xl の角丸が見える)。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex flex-wrap items-center gap-4 rounded-2xl bg-background p-4 text-foreground"
        >
          <RadiusPreview varName="--radius-xl" label="xl" />
          <div className="flex w-56 items-center rounded-xl bg-muted px-2 py-1 text-sm">求人票</div>
          <span className="text-xs text-muted-foreground">← サイドバーのメニューボタンの形</span>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">lg(10px・基準値) — ツールチップ・キーボードキー</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          --radius の基準値。Tooltip や Kbd
          など、テキスト1行分の最小の面に付く。ここより小さい半径はスケールに存在しない。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex flex-wrap items-center gap-4 rounded-2xl bg-background p-4 text-foreground"
        >
          <RadiusPreview varName="--radius-lg" label="lg" />
          <div className="flex items-center gap-1">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </div>
          <div className="rounded-lg bg-foreground px-2 py-1 text-xs text-background">
            求人を保存
          </div>
          <span className="text-xs text-muted-foreground">← Tooltip の形</span>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">rounded-full — 円形・トラック形状</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Avatar、Switch、Slider、Progress、RadioGroup
          など、円とトラック(細長い丸)にはスケールでなく rounded-full を使う。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex flex-wrap items-center gap-4 rounded-2xl bg-background p-4 text-foreground"
        >
          <Avatar>
            <AvatarFallback>比</AvatarFallback>
          </Avatar>
          <Switch defaultChecked />
          <div className="h-2 w-40 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-2/3 rounded-full bg-primary" />
          </div>
        </div>
      </section>
    </div>
  )
}
