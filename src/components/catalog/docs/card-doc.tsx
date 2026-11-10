import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function CardSurfaces() {
  return (
    <div className="grid w-full gap-3 sm:grid-cols-3">
      <Card variant="outline">
        <CardHeader>
          <CardTitle>社内メモ</CardTitle>
        </CardHeader>
      </Card>
      <Card variant="surface">
        <CardHeader>
          <CardTitle>うちとの関わり</CardTitle>
        </CardHeader>
      </Card>
      <Card variant="muted">
        <CardHeader>
          <CardTitle>社内だけ</CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}

function RaisedCard() {
  return (
    <Card variant="surface" elevation="raised" className="w-full max-w-xs">
      <CardContent className="grid gap-2">
        <time className="text-xs text-muted-foreground">今日 9:41</time>
        <p className="font-bold">島袋さん</p>
        <Badge variant="information" className="w-fit">応募あり</Badge>
        <p className="text-sm text-muted-foreground">調理スタッフ</p>
      </CardContent>
    </Card>
  )
}

export const cardDoc: ComponentDoc = {
  name: "card",
  title: "Card",
  category: "データ表示",
  purpose:
    "求人の概要や候補者のプロフィールなど、関連する情報をひとつの面にまとめます。情報の役割に合わせて面の色や境界を選びます。",
  patterns: [
    {
      id: "surfaces",
      title: "カードの面",
      description: "",
      details: [
        {
          label: "枠線あり",
          description: "社内メモの編集欄や会社紹介カードのように、一つの項目の範囲を罫線で示すときに outline を使います。",
        },
        {
          label: "白い面",
          description: "候補者との関わりやプロフィールなど、本文をまとめる面には surface を使います。外側に罫線を付けず、背景色の差で区切ります。",
        },
        {
          label: "淡い面",
          description: "候補者詳細で社内向けの情報を分けるときは muted を使います。境界は面の色で示します。",
        },
      ],
      showControls: false,
      previewHeight: null,
      Demo: CardSurfaces,
    },
    {
      id: "basic",
      title: "ホームのやりとり",
      description:
        "時刻、候補者、状態、求人の順に並べます。状態のバッジは一つに絞り、カード全体から該当する画面へ進めるようにします。",
      showControls: false,
      previewHeight: 190,
      Demo: RaisedCard,
    },
  ],
  usage: {
    recommended: [
      "カードの角丸には入れ物のトークンを使う。標準は16px。",
      "関連する情報を一つの面にまとめ、まとまり同士は余白で分ける。",
      "線で区切る場合は、行と行の間に標準の罫線を入れる。",
      "紹介の要約カードを3列で並べる場合は、本文を2行まで表示する。1列では3行まで読めるようにする。",
    ],
    avoid: [
      "本文をまとめる白いカードに外枠線や影を加える。",
      "ホームのやりとり用の影を、ほかの通常のカードに付ける。",
      "最後の行の下に罫線を引く。",
    ],
  },
}
