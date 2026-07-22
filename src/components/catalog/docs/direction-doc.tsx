import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DirectionProvider } from "@/components/ui/direction"
import { Slider } from "@/components/ui/slider"
import { ArrowLeftIcon, ArrowRightIcon, BuildingIcon } from "lucide-react"

/**
 * DirectionProvider による LTR / RTL の切り替え比較
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">LTR（デフォルト）</p>

        <DirectionProvider direction="ltr">
          <div dir="ltr" className="flex flex-col gap-2 rounded-md border p-4">
            <p className="text-sm">那覇市の正社員求人を探す。給与や勤務地で絞り込みできます。</p>

            <div className="flex items-center gap-2">
              <Button size="sm">応募する</Button>

              <Button size="sm" variant="outline">
                次へ
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
        </DirectionProvider>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">RTL（右から左）</p>

        <DirectionProvider direction="rtl">
          <div dir="rtl" className="flex flex-col gap-2 rounded-md border p-4">
            <p className="text-sm">那覇市の正社員求人を探す。給与や勤務地で絞り込みできます。</p>

            <div className="flex items-center gap-2">
              <Button size="sm">応募する</Button>

              <Button size="sm" variant="outline">
                次へ
                <ArrowLeftIcon />
              </Button>
            </div>
          </div>
        </DirectionProvider>
      </div>
    </div>
  )
}

/**
 * 希望年収スライダーの LTR / RTL 比較。RTL では塗りが右起点になり矢印キーの向きも反転する
 */
function SalarySliderPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">LTR — 希望年収 300〜600万円</p>

        <DirectionProvider direction="ltr">
          <div dir="ltr" className="flex flex-col gap-2 rounded-md border p-4">
            <div className="flex items-center justify-between text-sm">
              <span>150万円</span>
              <span>1000万円</span>
            </div>

            <Slider defaultValue={[300, 600]} min={150} max={1000} step={50} />
          </div>
        </DirectionProvider>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">RTL — 同じ値でも右が最小値になる</p>

        <DirectionProvider direction="rtl">
          <div dir="rtl" className="flex flex-col gap-2 rounded-md border p-4">
            <div className="flex items-center justify-between text-sm">
              <span>150万円</span>
              <span>1000万円</span>
            </div>

            <Slider defaultValue={[300, 600]} min={150} max={1000} step={50} />
          </div>
        </DirectionProvider>
      </div>
    </div>
  )
}

/**
 * 求人カードのミラー表示。RTL ではロゴ・バッジ・ボタンの並びが左右反転する
 */
function JobCardMirrorPattern() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">LTR</p>

        <DirectionProvider direction="ltr">
          <Card dir="ltr" className="gap-0 p-0">
            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-center gap-2">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-muted">
                  <BuildingIcon className="size-4 text-muted-foreground" />
                </div>
                <p className="truncate text-sm text-muted-foreground">株式会社サンプル</p>
              </div>

              <p className="font-semibold">フロントエンドエンジニア</p>

              <p className="text-sm text-muted-foreground">那覇市 / 正社員 / 月給 25万円</p>

              <div className="flex gap-1">
                <Badge variant="secondary">新卒採用</Badge>
                <Badge variant="outline">Web履歴書OK</Badge>
              </div>

              <Button size="sm">応募する</Button>
            </div>
          </Card>
        </DirectionProvider>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">RTL</p>

        <DirectionProvider direction="rtl">
          <Card dir="rtl" className="gap-0 p-0">
            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-center gap-2">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-muted">
                  <BuildingIcon className="size-4 text-muted-foreground" />
                </div>
                <p className="truncate text-sm text-muted-foreground">株式会社サンプル</p>
              </div>

              <p className="font-semibold">フロントエンドエンジニア</p>

              <p className="text-sm text-muted-foreground">那覇市 / 正社員 / 月給 25万円</p>

              <div className="flex gap-1">
                <Badge variant="secondary">新卒採用</Badge>
                <Badge variant="outline">Web履歴書OK</Badge>
              </div>

              <Button size="sm">応募する</Button>
            </div>
          </Card>
        </DirectionProvider>
      </div>
    </div>
  )
}

export const directionDoc: ComponentDoc = {
  name: "direction",
  title: "Direction",
  category: "レイアウト",
  purpose:
    "テキストの読み方向（LTR / RTL）をコンポーネントツリーに伝えるプロバイダです。Base UI 製コンポーネントのキーボード操作やスライダーの塗り方向が direction に追従します。ジョブアンテナでアラビア語などの RTL 言語対応を検証する際に、DOM の dir 属性と組み合わせて使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "DirectionProvider の direction に ltr / rtl を渡した比較です。CSS のレイアウトも反転させるため、ラップする要素に dir 属性も併せて指定します。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "salary-slider",
      title: "年収スライダー",
      description:
        "希望年収の範囲スライダーを LTR / RTL で比較します。RTL では塗りの起点が右になり、矢印キーによる増減方向も反転します。",
      previewHeight: null,
      Demo: SalarySliderPattern,
    },
    {
      id: "job-card-mirror",
      title: "求人カードのミラー",
      description:
        "同じ求人カードを LTR / RTL で並べたミラー表示です。ロゴ・企業名・バッジの並びが dir 属性で左右反転し、内部のフォーカス移動は DirectionProvider が追従します。",
      previewHeight: 400,
      Demo: JobCardMirrorPattern,
    },
  ],
}
