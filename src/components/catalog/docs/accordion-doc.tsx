import type { ComponentDoc } from "@/components/catalog/component-doc"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

/**
 * 求人応募のよくある質問を1つずつ開閉する FAQ
 */
function FaqPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Accordion defaultValue={["apply"]}>
        <AccordionItem value="apply">
          <AccordionTrigger>応募方法を教えてください</AccordionTrigger>
          <AccordionContent>
            <p>
              求人詳細ページの「応募する」ボタンから応募できます。会員登録が済んでいればプロフィール情報が自動で入力されます。
            </p>
            <p>応募後は企業からの連絡をお待ちください。通常3営業日以内に返信があります。</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="employment-type">
          <AccordionTrigger>正社員以外の求人もありますか</AccordionTrigger>
          <AccordionContent>
            <p>
              正社員のほか、契約社員・アルバイト・パートの求人も掲載しています。検索条件の「雇用形態」で絞り込みできます。
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="area">
          <AccordionTrigger>那覇市以外のエリアも探せますか</AccordionTrigger>
          <AccordionContent>
            <p>
              沖縄県全域の求人を掲載しています。那覇市・浦添市・宜野湾市など市町村ごとに検索できます。
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="salary">
          <AccordionTrigger>給与の交渉はできますか</AccordionTrigger>
          <AccordionContent>
            <p>
              面接時に希望給与を伝えることができます。求人票の給与欄には目安の金額が記載されています。
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

/**
 * 求人詳細の募集要項を複数同時に開ける折りたたみセクション
 */
function JobDetailPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Accordion multiple defaultValue={["job-description", "salary"]}>
        <AccordionItem value="job-description">
          <AccordionTrigger>仕事の内容</AccordionTrigger>
          <AccordionContent>
            <p>
              自社求人サービスのフロントエンドエンジニアとして、React / TypeScript
              を用いた画面実装を担当します。
            </p>
            <p>未経験歓迎・在宅可。入社後はチームリーダーがサポートします。</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="salary">
          <AccordionTrigger>給与・待遇</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex gap-4">
                <span className="w-20 shrink-0 text-muted-foreground">給与種別</span>
                <span>月給</span>
              </div>
              <div className="flex gap-4">
                <span className="w-20 shrink-0 text-muted-foreground">金額</span>
                <span>200,000〜350,000円</span>
              </div>
              <div className="flex gap-4">
                <span className="w-20 shrink-0 text-muted-foreground">待遇</span>
                <span>昇給年1回、賞与年2回、交通費支給</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="work-info">
          <AccordionTrigger>勤務情報</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex gap-4">
                <span className="w-20 shrink-0 text-muted-foreground">勤務地</span>
                <span>那覇市 ほか2件</span>
              </div>
              <div className="flex gap-4">
                <span className="w-20 shrink-0 text-muted-foreground">勤務時間</span>
                <span>9:00-18:00（休憩60分）</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="benefits">
          <AccordionTrigger>福利厚生・休日</AccordionTrigger>
          <AccordionContent>
            <p>週休2日制（土日祝）、社会保険完備、リモートワーク可、書籍購入補助あり。</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="selection-process">
          <AccordionTrigger>選考プロセス</AccordionTrigger>
          <AccordionContent>
            <p>書類選考 → 一次面接（オンライン可） → 最終面接 → 内定。</p>
            <p>応募から内定まで最短2週間です。</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export const accordionDoc: ComponentDoc = {
  name: "accordion",
  title: "Accordion",
  category: "レイアウト",
  purpose:
    "見出しをクリックして中身を開閉できる折りたたみリスト。情報量の多いページを見出しだけの一覧に圧縮し、読みたい項目だけ展開させたい場面で使う。jobantenna では応募方法などの FAQ や、求人詳細ページの募集要項セクションの折りたたみに使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "応募に関する FAQ。デフォルトでは同時に開けるのは1項目だけで、defaultValue で最初の質問を開いた状態にしている。",
      previewHeight: 400,
      Demo: FaqPattern,
    },
    {
      id: "job-detail",
      title: "求人詳細セクション",
      description:
        "multiple を付けて複数セクションを同時に開ける求人詳細の募集要項。給与や勤務情報をラベル+値の行で整理し、読み比べながら展開できる。",
      previewHeight: 560,
      Demo: JobDetailPattern,
    },
  ],
}
