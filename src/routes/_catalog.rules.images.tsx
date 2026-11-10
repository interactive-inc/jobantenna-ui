import { createFileRoute } from "@tanstack/react-router"
import { ImagePlusIcon } from "lucide-react"

import { RulePageHeader } from "@/components/catalog/rule-page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const Route = createFileRoute("/_catalog/rules/images")({
  component: ImagesPage,
})

/**
 * object-fit の違いを見せるためのデモ画像。被写体（円）の切れ方で挙動がわかる
 */
const demoImageSource =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e4e4e7'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23fbbf24'/%3E%3Crect y='170' width='300' height='30' fill='%23a1a1aa'/%3E%3C/svg%3E"

type AltRule = {
  rule: string
  example: string
}

const altRules: ReadonlyArray<AltRule> = [
  {
    rule: "情報を持つ画像は、見えなくても伝わる説明を alt に書きます",
    example: 'alt="国際通り沿いのカフェ店内。カウンター席とテラス席がある"',
  },
  {
    rule: "隣にテキストがある装飾画像・アイコン画像は alt を空にします",
    example: 'alt=""（スクリーンリーダーが読み飛ばす）',
  },
  {
    rule: "企業ロゴは企業名を alt にします。「ロゴ」という言葉は不要です",
    example: 'alt="株式会社サンプル"',
  },
]

type LoadingRule = {
  rule: string
  example: string
}

const loadingRules: ReadonlyArray<LoadingRule> = [
  {
    rule: 'ファーストビューの外にある画像は loading="lazy" で遅延読み込みします',
    example: "求人一覧の2枚目以降のカード画像、フッター周辺の画像",
  },
  {
    rule: "LCP 候補（最初に見える大きな画像）は遅延させず、優先度を上げます",
    example: 'ヒーロー画像に loading="eager" + fetchpriority="high"',
  },
  {
    rule: "サムネイルに原寸画像を使いません。表示サイズに合わせた画像を配信します",
    example: "一覧カードは幅 2x 分（約 800px）で十分",
  },
]

/**
 * 原則「画像」。alt・サイズ予約・トリミング・読み込み・プレースホルダーのルール
 */
function ImagesPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16 md:px-10">
      <RulePageHeader
        title="画像"
        lead="求人写真や会社ロゴを使うときは、代替テキスト、表示する領域、画像の切り抜き方を決めます。"
      />

      <section className="grid gap-4">
        <h2 className="text-xl font-semibold tracking-tight">パートナーズのロゴ</h2>
        <p className="text-muted-foreground">
          管理画面とログインでは、それぞれの場所に対応する原本のSVGを使います。
        </p>
        <Card>
          <CardHeader>
            <CardTitle>管理画面</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            <span className="w-fit rounded-lg bg-white p-2">
              <img src="/brand/partners-mark.svg" alt="ジョブアンテナのAマーク" />
            </span>
            <p className="text-sm text-muted-foreground">ヘッダーの左端にAマークを置きます。</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ログイン</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            <span className="w-fit max-w-full rounded-lg bg-white p-2">
              <img
                src="/brand/partners-wordmark.svg"
                alt="ジョブアンテナ for PARTNERS"
                className="h-auto max-w-full"
              />
            </span>
            <p className="text-sm text-muted-foreground">地域名のない共通のフルロゴを置きます。</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4" aria-labelledby="image-upload">
        <h2 id="image-upload" className="text-xl font-semibold tracking-tight">
          画像の登録
        </h2>
        <p className="text-muted-foreground">
          点線の枠から画像を1枚選びます。枠にドラッグ＆ドロップしても選べます。
          画像の目安寸法は項目名の近くに置き、枠の中に「JPG・PNG」「5MBまで」と表示します。
          選んだ画像は掲載先と同じ比率で表示し、切り抜かれる範囲を確かめられるようにします。
          登録済みの画像の右下に「差し替える」と「消す」を並べます。
        </p>
        <dl className="grid gap-2 text-sm">
          <div className="flex flex-wrap justify-between gap-2">
            <dt>求人の表紙</dt>
            <dd className="font-numeric">980 × 400</dd>
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <dt>会社ページの表紙の写真</dt>
            <dd className="font-numeric">980 × 320</dd>
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <dt>会社ロゴ</dt>
            <dd className="font-numeric">150 × 150</dd>
          </div>
        </dl>
        <p className="text-muted-foreground">
          会社ページの編集では、横長の表紙の写真を上に置き、その下に正方形の会社ロゴを置きます。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">alt テキスト</h2>
        <div className="flex flex-col gap-4 rounded-xl border p-4">
          {altRules.map((alt) => (
            <div key={alt.rule} className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{alt.rule}</span>
              <span className="text-sm text-muted-foreground">
                例: <code className="text-xs">{alt.example}</code>
              </span>
            </div>
          ))}
        </div>
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          alt
          は「画像が表示されなかったとき、その場所に書いてあってほしい文章」です。ファイル名や「画像」という言葉をそのまま入れません。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">サイズの予約（CLS 防止）</h2>
        <div className="ja-light-surface flex flex-col gap-4 rounded-xl bg-background p-4 text-foreground">
          <div className="flex flex-col gap-1">
            <div className="aspect-video w-full max-w-xs overflow-hidden rounded-md">
              <img
                src={demoImageSource}
                alt=""
                className="size-full object-cover"
                width={300}
                height={200}
              />
            </div>
            <code className="text-xs text-muted-foreground">
              aspect-video + width/height 属性で読み込み前から領域を確保
            </code>
          </div>
        </div>
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          width / height 属性か aspect-ratio
          のどちらかを指定し、画像の読み込みで下のコンテンツが動かないようにします。
          比率は上の「画像の登録」のように掲載先に合わせます。コンポーネントで管理する場合は AspectRatio
          を使います。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">トリミング</h2>
        <div className="ja-light-surface flex flex-wrap gap-6 rounded-xl bg-background p-4 text-foreground">
          <div className="flex flex-col gap-1">
            <div className="size-32 overflow-hidden rounded-md border">
              <img src={demoImageSource} alt="" className="size-full object-cover" />
            </div>
            <code className="text-xs text-muted-foreground">object-cover — 求人写真</code>
          </div>
          <div className="flex flex-col gap-1">
            <div className="size-32 overflow-hidden rounded-md border">
              <img src={demoImageSource} alt="" className="size-full object-contain" />
            </div>
            <code className="text-xs text-muted-foreground">object-contain — 企業ロゴ</code>
          </div>
        </div>
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          求人写真は枠を埋めることを優先して object-cover
          でトリミングします。企業ロゴは欠けると意味が変わるため object-contain
          で全体を表示します。img を直接変形させる width/height の指定ミス（縦横比の崩れ）は NG
          です。
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">読み込み</h2>
        <div className="flex flex-col gap-4 rounded-xl border p-4">
          {loadingRules.map((loading) => (
            <div key={loading.rule} className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{loading.rule}</span>
              <span className="text-sm text-muted-foreground">例: {loading.example}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4">
        <h2 className="text-xl font-semibold tracking-tight">求人票一覧の写真</h2>
        <p className="text-muted-foreground">
          写真枠は4:3です。PCの標準は120×90pxで、1280px以上の画面で対象が20件を超えると
          96×72pxに縮めます。コンパクト表示では職種名を残し、別に表示しているキャッチを省略します。
        </p>
        <figure className="grid gap-3">
          <figcaption className="text-sm text-muted-foreground">
            写真が未登録の場合も、読み込めない場合も、写真と同じ枠にアイコンを置きます。
          </figcaption>
          <div className="ja-light-surface rounded-(--radius-container) bg-background p-4">
            <span className="grid aspect-4/3 w-20 place-items-center rounded-(--radius-outer) bg-muted text-muted-foreground lg:w-24 xl:w-30">
              <ImagePlusIcon className="size-5" strokeWidth={1.75} aria-hidden />
            </span>
          </div>
        </figure>
      </section>
    </div>
  )
}
