import { createFileRoute } from "@tanstack/react-router"

import { RadiusComparisons } from "@/components/catalog/radius-comparisons"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { RulePageHeader } from "@/components/catalog/rule-page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const Route = createFileRoute("/_catalog/rules/shape")({
  component: ShapePage,
})

function ShapePage() {
  return (
    <div className="mx-auto grid w-full max-w-4xl gap-12 px-6 py-12 md:px-10">
      <RulePageHeader
        title="角丸と重なり"
        lead="カード・操作部品・状態表示に使う角丸と、罫線・影の基準です。"
      />
      <section className="grid gap-4" aria-labelledby="radius-tokens">
        <h2 id="radius-tokens" className="text-xl font-bold">
          角丸のトークンと実寸の見本
        </h2>
        <dl className="grid divide-y border-y text-sm">
          <div className="grid gap-1 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <dt>
              <code>--radius-container</code>
            </dt>
            <dd className="text-muted-foreground">16px。カードや画面の区画に使います。</dd>
          </div>
          <div className="grid gap-1 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <dt>
              <code>--radius-outer</code>
            </dt>
            <dd className="text-muted-foreground">8px。ボタンや入力欄の外枠に使います。</dd>
          </div>
          <div className="grid gap-1 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <dt>
              <code>--radius-inner</code>
            </dt>
            <dd className="text-muted-foreground">8px。外枠の中に並ぶ項目に使います。</dd>
          </div>
          <div className="grid gap-1 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <dt>
              <code>rounded-full</code>
            </dt>
            <dd className="text-muted-foreground">
              円形の顔写真、状態の札、ピル型の切り替え、区分内メニューのホバー面に使います。
            </dd>
          </div>
        </dl>
        <div className="ja-light-surface grid items-start gap-4 rounded-2xl bg-page p-6 text-foreground sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>入れ物 · 16px</CardTitle>
            </CardHeader>
            <CardContent>一覧、カード、白い箱を同じ半径にします。</CardContent>
          </Card>
          <div className="grid justify-items-start gap-4">
            <Button>押して開く · 8px</Button>
            <Badge variant="information">状態の札 · まん丸</Badge>
            <Tabs defaultValue="today">
              <TabsList variant="pill" aria-label="表示の切り替え">
                <TabsTrigger value="today">今日</TabsTrigger>
                <TabsTrigger value="upcoming">これから</TabsTrigger>
              </TabsList>
              <TabsContent value="today">今日のやりとりを表示します。</TabsContent>
              <TabsContent value="upcoming">今後の予定を表示します。</TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="grid gap-4" aria-labelledby="card-surfaces">
        <h2 id="card-surfaces" className="text-xl font-bold">
          カードの面と線
        </h2>
        <p className="text-muted-foreground">
          本文は白い面に、補足は淡い面にまとめます。どちらも背景色の差で区切ります。
          同じ背景に重ねる入力欄など、境界を見せたい箇所には枠線を使います。
          項目のまとまりは余白で分け、表には行を読むための罫線を残します。
        </p>
        <div className="ja-light-surface grid gap-4 rounded-(--radius-container) bg-page p-4 sm:grid-cols-3 sm:p-6">
          <Card variant="surface">
            <CardHeader>
              <CardTitle>会社紹介</CardTitle>
            </CardHeader>
            <CardContent>沖縄で地域の食材を使った飲食店を運営しています。</CardContent>
          </Card>
          <Card variant="muted">
            <CardHeader>
              <CardTitle>勤務条件の補足</CardTitle>
            </CardHeader>
            <CardContent>入社日は相談できます。</CardContent>
          </Card>
          <Card variant="outline">
            <CardHeader>
              <CardTitle>連絡事項</CardTitle>
            </CardHeader>
            <CardContent>平日の午後にご連絡ください。</CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-4" aria-labelledby="tab-radius">
        <h2 id="tab-radius" className="text-xl font-bold">
          タブの外枠と項目
        </h2>
        <p className="text-muted-foreground">
          通常のタブは外枠に <code>--radius-outer</code>、内側の項目に <code>--radius-inner</code>{" "}
          を使います。ピル型のタブは円形のルールを使います。
        </p>
        <div className="ja-light-surface rounded-(--radius-container) bg-page p-4 text-foreground sm:p-6">
          <Tabs defaultValue="recommended">
            <TabsList aria-label="求人の表示">
              <TabsTrigger value="recommended">おすすめ</TabsTrigger>
              <TabsTrigger value="new">新着</TabsTrigger>
            </TabsList>
            <TabsContent value="recommended">条件に合う求人を表示します。</TabsContent>
            <TabsContent value="new">新着の求人を表示します。</TabsContent>
          </Tabs>
        </div>
      </section>

      <RadiusComparisons />

      <section className="grid gap-4" aria-labelledby="round-examples">
        <h2 id="round-examples" className="text-xl font-bold">
          円形とピル型
        </h2>
        <div className="ja-light-surface flex flex-wrap items-center gap-4 rounded-(--radius-container) bg-page p-4 text-foreground">
          <Avatar>
            <AvatarFallback>比</AvatarFallback>
          </Avatar>
          <Switch defaultChecked aria-label="メール通知" />
          <Badge variant="information">応募あり</Badge>
        </div>
      </section>
      <section className="grid gap-3">
        <h2 className="text-xl font-bold">影と罫線</h2>
        <p className="text-muted-foreground">
          通常のカードや箱は、面の色と余白で区切ります。ホームのやりとりにはカード用の影を使い、メニューやパネルなど画面に重なるものには浮かせるための影を使います。
        </p>
        <p className="text-muted-foreground">
          罫線は行と行の間に1px入れ、最後の行の下には引きません。列の見出しは面の色で分けます。入力欄の枠には一段濃い線を使います。
        </p>
      </section>
    </div>
  )
}
