import { createFileRoute } from "@tanstack/react-router"

import { SpacingExamples } from "@/components/catalog/spacing-examples"
import { RulePageHeader } from "@/components/catalog/rule-page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const Route = createFileRoute("/_catalog/rules/spacing")({
  component: SpacingPage,
})

const steps = [
  { px: 4, token: "gap-1", use: "アイコンと文字、まとまりの中" },
  { px: 8, token: "gap-2", use: "見出しと補足、札の内側" },
  { px: 12, token: "gap-3", use: "小さな部品の並び" },
  { px: 16, token: "gap-4", use: "関連する要素、一覧の行の上下" },
  { px: 24, token: "gap-6", use: "役割が変わるところ、カードの左右" },
  { px: 32, token: "gap-8", use: "カードの上下、知らせの下" },
  { px: 48, token: "gap-12", use: "段と段の間、広い画面の本文枠の四辺" },
]

function SpacingPage() {
  return (
    <div className="mx-auto grid w-full max-w-4xl gap-12 px-6 py-12 md:px-10">
      <RulePageHeader
        title="余白とレイアウト"
        lead="余白は4pxの倍数を7段で使います。情報が近いものは間隔を詰め、役割が変わるところは余白を広げます。"
      />
      <dl className="grid divide-y border-y">
        {steps.map((step) => (
          <div
            key={step.px}
            className="grid grid-cols-[5rem_3rem_minmax(0,1fr)] items-center gap-2 py-3 sm:gap-4"
          >
            <dt>
              <code className="text-sm">{step.token}</code>
            </dt>
            <dd className="font-numeric text-sm">{step.px}px</dd>
            <dd className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span
                aria-hidden="true"
                className="h-3 rounded-full bg-primary"
                style={{ width: step.px }}
              />
              {step.use}
            </dd>
          </div>
        ))}
      </dl>
      <section className="grid gap-4">
        <h2 className="text-xl font-bold">画面の幅で配置を変える</h2>
        <p className="text-muted-foreground">
          一覧・詳細・フォームの本文枠は、上下左右に同じ <code>--ja-layout-page-inset</code>{" "}
          を使います。640px未満では16px、640px以上では32px、1280px以上では48pxです。
          本文枠の最大幅はフォームや進捗ボードの用途に合わせます。
        </p>
        <p className="text-muted-foreground">
          候補者詳細のように本文と補助欄を並べる詳細画面では、640px以上で四辺に{" "}
          <code>--ja-layout-panel-gutter</code>
          （24px）を使えます。640px未満では標準の余白を使います。
          固定サイドバーのある画面では、本文に関わるお知らせの帯を本文と同じ左端に置きます。
        </p>
        <p className="text-muted-foreground">
          一覧や概要から編集画面に入る場合は、見出しの上に戻り先の名前を含むリンクを置きます。複数の上位階層を示す必要がある場合は、パンくずを使います。
        </p>
        <p className="text-muted-foreground">
          一覧の絞り込み欄を横に並べるときは、高さに <code>--ja-control-height</code>{" "}
          を使い、枠線と上端を揃えます。狭い画面では同じ幅で縦に並べます。
        </p>
        <p className="text-muted-foreground">
          あしあととフォローの求人選択欄は、広い画面で幅260px、狭い画面で本文枠いっぱいに広げます。
          あしあとでは選んだ求人で一覧を絞り、フォローでは一覧を保ったまま選んだ求人との一致点を表示します。
        </p>
        <p className="text-muted-foreground">
          一覧ページでは、見出しの横に全体の件数を置き、一覧の中には絞り込み後の件数を表示します。
          総件数の取得中は見出しだけを表示し、取得結果が0件なら「0」を表示します。
        </p>
        <p className="text-muted-foreground">
          候補者一覧の氏名は詳細へのリンクにし、2行まで表示します。省略された氏名の全文は詳細画面で確認できます。
          行全体から詳細を開ける場合も、チェックボックスやボタンはそれぞれの操作だけを行います。
          応募者一覧の行にはプロフィールを開く操作を置き、同じ応募の会話が確認できた行に「メッセージを書く」を添えます。
        </p>
        <p className="text-muted-foreground">
          件数の下の検索条件は1行にまとめます。条件は「・」でつなぎ、幅に収まらない条件は末尾に「ほか2件」のように表示します。
          1つの条件で複数の値を選んだ場合は「那覇市ほか2か所」のように、先頭の値と残りの数を示します。
          すべての条件は、絞り込みを開いて確認できます。
        </p>
        <p className="text-muted-foreground">
          見出しと補足を含むこのカード例では上下32px、左右24px、見出しと補足の間は8pxです。
          共通カードの標準余白は16px、小サイズは12pxです。
        </p>
        <div className="ja-light-surface rounded-2xl bg-page p-6 text-foreground">
          <Card variant="surface">
            <CardHeader className="px-6 pt-8 pb-2">
              <CardTitle>会社紹介</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pt-0 pb-8">
              一緒に働く人や、仕事の進め方を紹介します。
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="grid gap-4">
        <h2 className="text-xl font-bold">候補者詳細の本文と社内欄</h2>
        <p className="text-muted-foreground">
          1280px以上では本文と社内欄を19対8の幅で並べ、狭い画面では本文の下に社内欄を置きます。
          間隔は <code>--ja-layout-profile-column-gap</code>（24px）です。
        </p>
        <p className="text-muted-foreground">
          白い本文カードの左右には <code>--ja-layout-profile-paper-inset</code>{" "}
          を使い、画面幅に応じて16px、24px、40pxに広げます。区画の上下には{" "}
          <code>--ja-layout-profile-paper-section-inset</code> を使い、640px未満で16px、
          640px以上で32pxです。社内欄の内側は640px未満で16px、640px以上で24pxとし、
          見出しと内容の間は <code>--ja-layout-profile-internal-gap</code>（20px）です。
        </p>
        <p className="text-muted-foreground">
          2列表示では社内欄をヘッダーの下に留め、画面の高さに収まらない内容は欄の中でスクロールします。
        </p>
        <div className="ja-light-surface grid items-start gap-(--ja-layout-profile-column-gap) rounded-(--radius-container) bg-page p-(--ja-layout-panel-gutter) text-foreground xl:grid-cols-(--ja-layout-profile-columns)">
          <Card variant="surface" className="min-w-0">
            <CardContent className="grid gap-2 px-(--ja-layout-profile-paper-inset) py-(--ja-layout-profile-paper-section-inset)">
              <CardTitle>職務経歴</CardTitle>
              <p>接客と売り場づくりを担当</p>
            </CardContent>
          </Card>
          <Card
            variant="muted"
            className="min-w-0 gap-(--ja-layout-profile-internal-gap) p-(--ja-layout-field-gap) sm:p-(--ja-layout-panel-gutter)"
          >
            <CardHeader className="p-0">
              <CardTitle>社内だけ</CardTitle>
            </CardHeader>
            <CardContent className="p-0">面談で希望の働き方を聞く</CardContent>
          </Card>
        </div>
      </section>
      <section className="grid gap-2">
        <h2 className="text-xl font-bold">詳細の長い一覧</h2>
        <p className="text-muted-foreground">
          職歴は新しい3件を開いた状態で表示し、それより古い職歴は個別に開ける行にします。
          見出しの横から古い職歴をまとめて開閉できます。
        </p>
        <p className="text-muted-foreground">
          希望勤務地は最初の3か所と残りの件数を表示し、「すべて見る」で登録順に展開します。
          求人の条件と一致する勤務地は、展開した後も「合う」と表示します。
        </p>
        <p className="text-muted-foreground">
          希望条件や資格・語学・学歴では、登録済みの情報を行に並べます。
          未登録の項目名は、各欄の末尾に「本人がまだ書いていない項目」としてまとめます。
        </p>
        <p className="text-muted-foreground">
          求人ごとの関わりは、1件なら求人名の下に閲覧・いいかも・応募を並べ、複数件なら表で比較できるようにします。
          取得が完了して0件と分かったときは「まだ関わりはありません」と表示します。
        </p>
      </section>
      <section className="grid gap-3" aria-labelledby="page-surface">
        <h2 id="page-surface" className="text-xl font-bold">
          ページの外枠と本文の余白
        </h2>
        <p className="text-muted-foreground">
          候補者検索結果・いいかも・フォローでは、灰色の面を画面の右端まで伸ばし、左の角丸を残します。
          見出しや一覧は面の内側に置き、四辺に同じ標準の余白を取ります。
          候補者詳細も同じ外枠を使い、その内側はコンパクトな余白で本文と社内欄を配置します。
        </p>
        <figure className="grid gap-3">
          <figcaption className="text-sm text-muted-foreground">
            グレーの面は右端まで伸ばし、左側だけ角を丸めます。面の内側は、画面幅に応じて四辺に同じ余白を取ります。
          </figcaption>
          <div className="ja-light-surface rounded-s-(--radius-container) bg-page p-(--ja-layout-page-inset) text-foreground">
            <Card variant="surface">
              <CardHeader>
                <CardTitle>掲載中の求人</CardTitle>
              </CardHeader>
              <CardContent>ホールスタッフ</CardContent>
            </Card>
          </div>
        </figure>
        <p className="text-muted-foreground">
          1280px以上のホームは、会社の状況と本文を別々にスクロールします。
          本文は上下48px、左右64pxです。会話と印刷は、それぞれの用途に合わせた枠を使います。
        </p>
      </section>
      <section className="grid gap-3" aria-labelledby="fixed-navigation">
        <h2 id="fixed-navigation" className="text-xl font-bold">
          固定ヘッダーとナビゲーション
        </h2>
        <p className="text-muted-foreground">
          ヘッダーは画面の上に固定し、下端を一本の罫線で区切ります。
          本文が下を通るときは、ヘッダーの背景を透かしてぼかし、メニューを読みやすく保ちます。
        </p>
        <p className="text-muted-foreground">
          縦のサイドバーは画面の上端まで伸ばし、項目の始まりをヘッダーの高さに合わせて下げます。
          サイドバーと本文は別々にスクロールできるようにし、重なる場所ではヘッダーを前に表示します。
        </p>
        <p className="text-muted-foreground">
          スマートフォンで下部ナビゲーションを固定するときは、本文の末尾や保存バーが隠れないよう、
          ナビゲーションの高さと端末の安全領域を含めた余白を確保します。
        </p>
      </section>
      <SpacingExamples />
      <section className="grid gap-2">
        <h2 className="text-xl font-bold">設定カードの行</h2>
        <p className="text-muted-foreground">
          カードの見出しと各行は、左右に同じ <code>--ja-layout-panel-gutter</code>{" "}
          を使います。表示値と操作の間は <code>--ja-layout-field-gap</code> を使い、
          行が折り返しても操作は右端に揃えます。
        </p>
      </section>
      <section className="grid gap-2">
        <h2 className="text-xl font-bold">FAQの質問と回答</h2>
        <p className="text-muted-foreground">
          質問と回答は左右に同じ <code>--ja-layout-panel-gutter</code>{" "}
          を使い、文字の始まりを揃えます。 質問の行全体から回答を開閉できます。
        </p>
      </section>
      <section className="grid gap-2">
        <h2 className="text-xl font-bold">長いフォームの目次</h2>
        <p className="text-muted-foreground">
          目次の項目から入力欄へ移動できるようにします。幅が十分ある画面では本文の横に固定し、狭い画面では本文の上に置きます。入力状況を添える場合は、入力済み・未入力・取得中・取得できない状態を文言で区別します。
          保存帯には必須項目の残りと保存操作をまとめ、保存時刻は保存を確認できたときに表示します。
          幅が十分ある画面では状態を左、操作を右に並べます。狭い画面では上下に分け、下部ナビと重ならないようにします。
        </p>
      </section>
      <section className="grid gap-2">
        <h2 className="text-xl font-bold">公開前のプレビュー</h2>
        <p className="text-muted-foreground">
          公開前の確認項目はプレビューの横に置き、狭い画面ではプレビューの下に並べます。
          確認欄の内側には <code>--ja-layout-panel-gutter</code> を使います。
        </p>
        <p className="text-muted-foreground">
          公開中の内容と未公開の内容を区別し、確認項目は表示中のデータから判定します。
          入力済みと未入力は、アイコンと文言の両方で伝えます。
        </p>
      </section>
      <section className="grid gap-4" aria-labelledby="panel-spacing">
        <div className="grid gap-2">
          <h2 id="panel-spacing" className="text-xl font-bold">
            検索条件パネル
          </h2>
          <p className="text-muted-foreground">
            見出しと操作は固定し、項目だけをスクロールします。PCは右、スマホは下から開きます。
            スマホでは操作の下に端末の安全領域を確保します。
          </p>
          <p className="text-muted-foreground">
            よく使う条件は、スマホでは項目の先頭にフィルターチップを縦に並べます。
            チップと詳細欄で同じ条件を選べる場合は、どちらを操作しても選択状態を揃えます。
            選んだ条件は下部の検索ボタンで適用します。
          </p>
        </div>
        <dl className="grid divide-y border-y">
          <div className="grid gap-1 py-4">
            <dt className="font-bold">パネルの左右</dt>
            <dd className="text-sm text-muted-foreground">
              <code>--ja-layout-panel-gutter</code>（24px）
            </dd>
          </div>
          <div className="grid gap-1 py-4">
            <dt className="font-bold">項目と項目</dt>
            <dd className="text-sm text-muted-foreground">
              <code>--ja-layout-field-gap</code>（16px）
            </dd>
          </div>
          <div className="grid gap-1 py-4">
            <dt className="font-bold">項目のまとまり</dt>
            <dd className="text-sm text-muted-foreground">
              <code>--ja-layout-section-gap</code>（24px）を境界線の前後に取る
            </dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
