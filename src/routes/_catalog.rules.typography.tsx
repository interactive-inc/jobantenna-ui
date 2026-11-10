import { createFileRoute } from "@tanstack/react-router"

import { RulePageHeader } from "@/components/catalog/rule-page-header"

export const Route = createFileRoute("/_catalog/rules/typography")({
  component: TypographyPage,
})

const typeSamples = [
  {
    name: "大見出し",
    size: "32 / 44",
    className: "text-[length:calc(var(--spacing)*8)]/11 font-bold",
    example: "候補者と出会う",
  },
  {
    name: "数字",
    size: "28 / 36",
    className: "font-numeric text-[length:calc(var(--spacing)*7)]/9 font-semibold tabular-nums",
    example: "1,146",
  },
  {
    name: "段の見出し",
    size: "24 / 32",
    className: "text-2xl font-bold",
    example: "今日のやりとり",
  },
  { name: "名前（大）", size: "20 / 28", className: "text-xl font-bold", example: "島袋 剛さん" },
  { name: "名前", size: "18 / 26", className: "text-lg/6.5 font-bold", example: "比嘉 美咲さん" },
  { name: "本文", size: "16 / 24", className: "text-base", example: "メッセージが届いています。" },
  {
    name: "補足",
    size: "14 / 22",
    className: "text-sm/5.5 text-muted-foreground",
    example: "フロントスタッフに応募しました。",
  },
  { name: "日付・札", size: "12 / 16", className: "text-xs", example: "11月8日・応募あり" },
]

const voiceRules = [
  {
    rule: "地元の仕事に詳しい、気さくなプロとして書く",
    example: "求人票を公開すると、見てくれた人がここに出ます。",
  },
  { rule: "区分は名詞、操作は動詞", example: "候補者・選考・やりとり／応募を見る・返信する" },
  {
    rule: "ふだんは事実と次の行動を伝え、節目で温かさを出す",
    example: "初めての採用、おめでとうございます。",
  },
  { rule: "条件に合う理由を具体的に書く", example: "希望勤務地と求人の勤務地が合っています。" },
]

function TypographyPage() {
  return (
    <div className="mx-auto grid w-full max-w-4xl gap-12 px-6 py-12 md:px-10">
      <RulePageHeader
        title="文字"
        lead="日本語はLINE Seed JPのRegular 400とBold 700です。件数・金額・表・日時など数字だけのまとまりはInterを使います。文中の数字や単位はLINE Seed JPでそろえます。"
      />
      <section className="grid gap-4">
        <h2 className="text-xl font-bold">タイプスケール</h2>
        <dl className="ja-light-surface grid divide-y rounded-2xl bg-card px-6 text-foreground">
          {typeSamples.map((sample) => (
            <div
              key={sample.name}
              className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr] sm:items-baseline"
            >
              <dt className="text-sm text-muted-foreground">
                {sample.name} · {sample.size}
              </dt>
              <dd className={sample.className}>{sample.example}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="grid gap-4" aria-labelledby="font-weight">
        <h2 id="font-weight" className="text-xl font-bold">
          書体とウェイトの見本
        </h2>
        <div className="ja-light-surface grid gap-4 rounded-(--radius-container) bg-card p-4 text-foreground sm:p-6">
          <div className="grid gap-1">
            <p className="text-sm text-muted-foreground">LINE Seed JP Regular 400</p>
            <p className="font-normal">応募の状況を確認できます。</p>
          </div>
          <div className="grid gap-1">
            <p className="text-sm text-muted-foreground">LINE Seed JP Bold 700</p>
            <p className="font-bold">今日のやりとり</p>
          </div>
          <div className="grid gap-1">
            <p className="text-sm text-muted-foreground">Inter Semibold 600</p>
            <p className="font-numeric text-xl font-semibold tabular-nums">1,146</p>
          </div>
        </div>
      </section>
      <section className="grid gap-3" aria-labelledby="numeric-columns">
        <h2 id="numeric-columns" className="text-xl font-bold">
          一覧の数値と日付
        </h2>
        <p className="text-muted-foreground">
          件数などを表の同じ列で比較するときは、数字の幅を揃えて右寄せにします。
          数が多い場合は「1,146」のように桁を区切ります。
          会話の送信時刻は「9:41」のように表示し、日付が変わる位置に日付を添えます。
        </p>
      </section>
      <section className="grid gap-4">
        <h2 className="text-xl font-bold">トーンと文言</h2>
        <dl className="grid divide-y rounded-2xl border px-6">
          {voiceRules.map((voice) => (
            <div key={voice.rule} className="grid gap-2 py-4">
              <dt className="font-bold">{voice.rule}</dt>
              <dd className="text-sm text-muted-foreground">{voice.example}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  )
}
