import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Building2Icon, MailIcon, SearchIcon, UserIcon } from "lucide-react"

/**
 * チェック状態と disabled の組み合わせ、name / value を付けた複数選択の基本形
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label>
          <Checkbox />
          利用規約に同意する
        </Label>

        <Label>
          <Checkbox defaultChecked />
          新着求人のメール通知を受け取る
        </Label>

        <Label>
          <Checkbox disabled />
          スカウトを受け取る（会員登録後に設定可）
        </Label>

        <Label>
          <Checkbox defaultChecked disabled />
          応募済みの求人を非表示にする
        </Label>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">希望する雇用形態</p>

        <div className="flex flex-wrap items-center gap-4">
          <Label>
            <Checkbox name="employment" value="fulltime" defaultChecked />
            正社員
          </Label>

          <Label>
            <Checkbox name="employment" value="contract" />
            契約社員
          </Label>

          <Label>
            <Checkbox name="employment" value="parttime" />
            アルバイト・パート
          </Label>
        </div>
      </div>
    </div>
  )
}

/**
 * 求人検索のこだわり条件。「すべて」で一括選択し、フッターに件数付き検索ボタンを置く
 */
function FilterConditionsPattern() {
  return (
    <div className="w-full max-w-sm rounded-lg border">
      <div className="flex items-center justify-between border-b p-4">
        <span className="text-sm font-medium">こだわり条件</span>

        <Label className="font-normal text-muted-foreground">
          <Checkbox />
          すべて
        </Label>
      </div>

      <div className="grid grid-cols-2 gap-2 p-4">
        <Label>
          <Checkbox name="conditions" value="inexperienced" defaultChecked />
          未経験OK
        </Label>

        <Label>
          <Checkbox name="conditions" value="remote" defaultChecked />
          リモート可
        </Label>

        <Label>
          <Checkbox name="conditions" value="near-station" defaultChecked />
          駅近
        </Label>

        <Label>
          <Checkbox name="conditions" value="weekends-off" />
          土日休み
        </Label>

        <Label>
          <Checkbox name="conditions" value="car-commute" />
          車通勤OK
        </Label>

        <Label>
          <Checkbox name="conditions" value="two-days-off" />
          週休2日
        </Label>

        <Label>
          <Checkbox name="conditions" value="bonus" />
          賞与あり
        </Label>

        <Label>
          <Checkbox name="conditions" value="free-dress" />
          服装自由
        </Label>
      </div>

      <div className="flex items-center justify-between border-t p-4">
        <Button variant="ghost" size="sm">
          すべてクリア
        </Button>

        <Button size="sm">
          <SearchIcon data-icon="inline-start" />
          128件 検索する
        </Button>
      </div>
    </div>
  )
}

/**
 * 応募確認の同意チェック。同意しないと進めない操作の直前に置く
 */
function ApplyConsentPattern() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-lg border p-4">
      <p className="text-sm">応募する求人を確認の上、「応募を完了する」を押してください。</p>

      <div className="flex items-center gap-2 rounded-md bg-muted p-2">
        <div className="flex size-8 shrink-0 items-center justify-center rounded bg-background">
          <Building2Icon className="size-4 text-muted-foreground" />
        </div>

        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium">フロントエンドエンジニア</span>
          <span className="truncate text-xs text-muted-foreground">
            株式会社サンプル / 那覇市 / 正社員
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label>
          <Checkbox />
          利用規約と個人情報の取り扱いに同意する
        </Label>

        <p className="text-xs text-muted-foreground">※応募すると氏名が企業に公開されます。</p>
      </div>

      <Button className="w-full">応募を完了する</Button>
    </div>
  )
}

/**
 * 応募者リストの行選択。ヘッダーのチェックで全選択し、選択件数と一括操作を表示する
 */
function CandidateBulkSelectPattern() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border">
      <div className="flex items-center gap-2 border-b bg-muted/50 p-2">
        <Checkbox defaultChecked />

        <span className="flex-1 text-sm text-muted-foreground">2件選択中</span>

        <Button variant="outline" size="xs">
          <MailIcon data-icon="inline-start" />
          メッセージを送る
        </Button>
      </div>

      <div className="flex items-center gap-2 p-2">
        <Checkbox defaultChecked />

        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
          <UserIcon className="size-4 text-muted-foreground" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">比嘉 太郎</span>
          <span className="truncate text-xs text-muted-foreground">28歳・男性・前職: 営業</span>
        </div>

        <Badge variant="destructive">未選考</Badge>
      </div>

      <div className="flex items-center gap-2 border-t p-2">
        <Checkbox defaultChecked />

        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
          <UserIcon className="size-4 text-muted-foreground" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">金城 花子</span>
          <span className="truncate text-xs text-muted-foreground">25歳・女性・前職: 販売</span>
        </div>

        <Badge variant="secondary">保留中</Badge>
      </div>

      <div className="flex items-center gap-2 border-t p-2">
        <Checkbox />

        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
          <UserIcon className="size-4 text-muted-foreground" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">大城 健</span>
          <span className="truncate text-xs text-muted-foreground">
            30歳・男性・前職: エンジニア
          </span>
        </div>

        <Badge variant="outline">連絡済</Badge>
      </div>
    </div>
  )
}

export const checkboxDoc: ComponentDoc = {
  name: "checkbox",
  title: "Checkbox",
  category: "フォーム",
  purpose:
    "複数の選択肢から任意の数を選ぶ、またはオン・オフを切り替えるためのフォームコントロールです。@base-ui/react ベースで defaultChecked による非制御利用と name / value でのフォーム送信に対応します。ジョブアンテナではこだわり条件や勤務地の複数選択、応募時の同意確認、応募者リストの一括選択に使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "未チェック・チェック済み・disabled の各状態と、name / value を付けてフォーム送信する複数選択です。Label で包むとテキストのクリックでも切り替わります。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "filter-conditions",
      title: "こだわり条件",
      description:
        "求人検索でこだわり条件（未経験OK、リモート可、駅近など）を複数選択する例です。先頭の「すべて」で一括選択・解除し、フッターに件数付きの検索ボタンとクリアを置きます。",
      previewHeight: null,
      Demo: FilterConditionsPattern,
    },
    {
      id: "apply-consent",
      title: "応募の同意確認",
      description:
        "応募確認画面で利用規約への同意を取る例です。同意しないと進めない操作では、実行ボタンの直前にチェックボックスと注意書きを置きます。",
      previewHeight: null,
      Demo: ApplyConsentPattern,
    },
    {
      id: "candidate-bulk-select",
      title: "応募者の一括選択",
      description:
        "管理画面の応募者リストで行を選択する例です。ヘッダーのチェックで全選択し、選択件数と一括操作ボタンを表示します。",
      previewHeight: null,
      Demo: CandidateBulkSelectPattern,
    },
  ],
}
