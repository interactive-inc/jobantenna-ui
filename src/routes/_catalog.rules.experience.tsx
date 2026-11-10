import { createFileRoute } from "@tanstack/react-router"

import { RulePageHeader } from "@/components/catalog/rule-page-header"

export const Route = createFileRoute("/_catalog/rules/experience")({
  component: ScreenLanguagePage,
})

function ScreenLanguagePage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16 md:px-10">
      <RulePageHeader
        title="画面の言葉"
        lead="画面の区分には場所が分かる名詞を、ボタンには押すと何が起きるかが分かる動詞を使います。普段使う言葉で書きます。"
      />

      <section className="grid gap-3">
        <h2 className="text-xl font-bold">区分の名前</h2>
        <dl className="grid gap-3 text-sm">
          <div>
            <dt className="font-bold">ヘッダー</dt>
            <dd>ホーム／求人票／候補者／選考／やりとり／会社ページ</dd>
          </div>
          <div>
            <dt className="font-bold">ホームの切り替え</dt>
            <dd>今日／これから</dd>
          </div>
          <div>
            <dt className="font-bold">候補者の中</dt>
            <dd>候補者と出会う／いいかも／あしあと／フォロー／候補者リスト</dd>
          </div>
        </dl>
      </section>

      <section className="grid gap-3">
        <h2 className="text-xl font-bold">決めた言い方</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
          <li>
            求人に対して初めていいかもを送る操作は「いいかもを送る」と書きます。
            その求人で候補者から受け取ったいいかもに応える操作は、ボタンと確認画面の両方で「いいかもを返す」と書きます。
          </li>
          <li>候補者の操作は「応募を見る」「返信する」「いいかもを見る」のように書きます。</li>
          <li>ホームの見出しは「今日のやりとり」のように書き、件数は別に表示します。</li>
          <li>名前が公開される前は「女性（30歳）」のように表示します。</li>
          <li>数字は3桁ごとに区切ります。例は「2,384人」です。</li>
          <li>
            日付は時期に合わせて「今日 9:41」「昨日」「11月5日」「2025年11月5日」と書き分けます。
          </li>
        </ul>
      </section>

      <section className="grid gap-3">
        <h2 className="text-xl font-bold">使い方</h2>
        <dl className="grid gap-3 text-sm">
          <div>
            <dt className="font-bold">使う表現</dt>
            <dd>
              行き先には「候補者」、操作には「応募を見る」のように、場所と操作を具体的に書きます。
            </dd>
          </div>
          <div>
            <dt className="font-bold">避ける表現</dt>
            <dd>
              感嘆符や絵文字、操作の対象が伝わりにくい「確かめる」「書く」だけのボタン、「〜させていただきます」のような長い敬語は避けます。
            </dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
