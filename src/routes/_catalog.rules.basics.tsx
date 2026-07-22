import { createFileRoute } from "@tanstack/react-router"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RulePageHeader } from "@/components/catalog/rule-page-header"
import { sampleCanvasStyle } from "@/components/catalog/sample-canvas-style"
import { BriefcaseIcon, Building2Icon, MapPinIcon } from "lucide-react"

export const Route = createFileRoute("/_catalog/rules/basics")({
  component: BasicsPage,
})

/**
 * 基本原則。近接・整列・反復・対比をコンポーネントの実例で示す
 */
function BasicsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16 md:px-10">
      <RulePageHeader
        title="基本原則"
        lead="近接・整列・反復・対比。どんな画面もこの4つの上に成り立つ。トークン(配色・形・余白・文字)はこの原則を実現するための道具で、迷ったときは必ずここに戻る。"
      />

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">近接 — 関係の近さは距離で表す</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          関連する情報は近くに、無関係な情報は遠くに置く。区切り線で分ける前に、まず余白の差でグループを作る。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex justify-center rounded-2xl bg-background p-4 text-foreground"
        >
          <Card size="sm" className="w-full max-w-sm">
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-0.5">
                <span className="font-medium">フロントエンドエンジニア</span>
                <span className="text-xs text-muted-foreground">株式会社サンプル</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-0.5">
                  <MapPinIcon className="size-3" />
                  那覇市
                </span>
                <span className="flex items-center gap-0.5">
                  <BriefcaseIcon className="size-3" />
                  正社員
                </span>
                <span className="flex items-center gap-0.5">
                  <Building2Icon className="size-3" />
                  月給 25万円
                </span>
              </div>
              <div className="flex gap-2">
                <Button size="sm">応募する</Button>
                <Button size="sm" variant="ghost">
                  詳細を見る
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          職種名と会社名は gap-0.5 でひとつの塊、メタ情報同士は gap-2、塊と塊の間は
          gap-4。アイコンとラベルも gap-0.5 で「1語」として読める。区切り線は1本も使っていない。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">整列 — 見えない線を1本に</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          テキストとフォームは左端の1本の線に揃える。中央揃えは空状態や完了画面などの独立した場面だけ。表の数値は右揃えで桁を比べられるようにする。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex justify-center rounded-2xl bg-background p-4 text-foreground"
        >
          <Card size="sm" className="w-full max-w-sm">
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="basics-name">氏名</Label>
                <Input id="basics-name" placeholder="山田 太郎" />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="basics-tel">電話番号</Label>
                <Input id="basics-tel" placeholder="090-1234-5678" />
              </div>
              <div>
                <Button>確認へ進む</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          ラベル・入力欄・ボタンが左端の同じ線から始まる。ラベルを入力欄の左に置く2カラム配置は、揃える線が増えるモバイルでは使わない。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">反復 — 同じ役割は同じ形</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          同じ種類の情報は同じ構造・同じ余白・同じ書式で繰り返す。1件目で覚えた読み方が全件に効くようにする。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex justify-center rounded-2xl bg-background p-4 text-foreground"
        >
          <div className="w-full max-w-sm space-y-2">
            <Item variant="outline">
              <ItemMedia variant="icon">
                <Building2Icon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>調理スタッフ</ItemTitle>
                <ItemDescription>那覇市 / 正社員</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Badge variant="secondary">NEW</Badge>
              </ItemActions>
            </Item>
            <Item variant="outline">
              <ItemMedia variant="icon">
                <Building2Icon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>営業・企画営業</ItemTitle>
                <ItemDescription>浦添市 / 正社員</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Badge variant="secondary">NEW</Badge>
              </ItemActions>
            </Item>
            <Item variant="outline">
              <ItemMedia variant="icon">
                <Building2Icon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Web デザイナー</ItemTitle>
                <ItemDescription>沖縄市 / 契約社員</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Badge variant="secondary">NEW</Badge>
              </ItemActions>
            </Item>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          3件とも同じ Item コンポーネント(メディア → 内容 →
          バッジ)の繰り返し。構造を1件ごとに工夫しない。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">対比 — 重要度の差をはっきりつける</h2>
        <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
          主役と脇役を曖昧にしない。サイズ・ウェイト・色の3つで差をつけ、迷ったら差を大きくする方に倒す。
        </p>
        <div
          style={sampleCanvasStyle}
          className="flex justify-center rounded-2xl bg-background p-4 text-foreground"
        >
          <Card size="sm" className="w-full max-w-sm">
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold">月給 25万円〜</span>
                <span className="text-xs text-muted-foreground">
                  賞与年2回 / 昇給あり / 残業月10時間以下
                </span>
              </div>
              <div className="flex gap-2">
                <Button>応募する</Button>
                <Button variant="ghost">保存</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          主情報は text-2xl の太字、補足は text-xs の muted。ボタンも primary と ghost
          で重みが対になる。中間の強さを増やすと対比は消える。
        </p>
      </section>
    </div>
  )
}
