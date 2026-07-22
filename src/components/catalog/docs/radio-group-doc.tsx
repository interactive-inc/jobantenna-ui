import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { SearchIcon, UserIcon } from "lucide-react"

/**
 * 雇用形態の単一選択。disabled 項目を含むグループの例も並べる
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">雇用形態</p>

        <RadioGroup defaultValue="full-time">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="full-time" id="radio-basic-full-time" />
            <Label htmlFor="radio-basic-full-time">正社員</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="contract" id="radio-basic-contract" />
            <Label htmlFor="radio-basic-contract">契約社員</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="part-time" id="radio-basic-part-time" />
            <Label htmlFor="radio-basic-part-time">アルバイト・パート</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="temporary" id="radio-basic-temporary" />
            <Label htmlFor="radio-basic-temporary">派遣社員</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">応募方法（受付終了の選択肢あり）</p>

        <RadioGroup defaultValue="web">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="web" id="radio-basic-apply-web" />
            <Label htmlFor="radio-basic-apply-web">Web 応募</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="phone" id="radio-basic-apply-phone" disabled />
            <Label htmlFor="radio-basic-apply-phone">電話応募（受付終了）</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

/**
 * 求人フォームの給与種別をカード型で選ぶ。選択中のカードを枠線と背景で強調する
 */
function SalaryTypeCardPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <p className="text-sm font-medium">給与種別</p>

      <RadioGroup defaultValue="monthly" className="gap-2">
        <Label className="items-start gap-2 rounded-lg border p-4 has-data-checked:border-primary has-data-checked:bg-primary/5">
          <RadioGroupItem value="monthly" className="mt-0.5" />

          <span className="flex flex-col gap-1">
            <span>月給</span>
            <span className="text-xs font-normal text-muted-foreground">
              月額で支給する。例: 200,000〜350,000円
            </span>
          </span>
        </Label>

        <Label className="items-start gap-2 rounded-lg border p-4 has-data-checked:border-primary has-data-checked:bg-primary/5">
          <RadioGroupItem value="daily" className="mt-0.5" />

          <span className="flex flex-col gap-1">
            <span>日給</span>
            <span className="text-xs font-normal text-muted-foreground">
              勤務日ごとに支給する。例: 10,000円
            </span>
          </span>
        </Label>

        <Label className="items-start gap-2 rounded-lg border p-4 has-data-checked:border-primary has-data-checked:bg-primary/5">
          <RadioGroupItem value="hourly" className="mt-0.5" />

          <span className="flex flex-col gap-1">
            <span>時給</span>
            <span className="text-xs font-normal text-muted-foreground">
              勤務時間ごとに支給する。例: 1,200円
            </span>
          </span>
        </Label>
      </RadioGroup>
    </div>
  )
}

/**
 * 求人検索の雇用形態フィルタ。件数付きの選択肢と検索ボタンをパネルにまとめる
 */
function EmploymentFilterPattern() {
  return (
    <div className="w-full max-w-sm rounded-lg border">
      <div className="border-b p-4">
        <span className="text-sm font-medium">雇用形態</span>
      </div>

      <RadioGroup defaultValue="all" className="gap-2 p-4">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="all" id="radio-filter-all" />
          <Label htmlFor="radio-filter-all" className="flex-1">
            すべて
          </Label>
          <span className="text-xs text-muted-foreground">512</span>
        </div>

        <div className="flex items-center gap-2">
          <RadioGroupItem value="full-time" id="radio-filter-full-time" />
          <Label htmlFor="radio-filter-full-time" className="flex-1">
            正社員
          </Label>
          <span className="text-xs text-muted-foreground">328</span>
        </div>

        <div className="flex items-center gap-2">
          <RadioGroupItem value="contract" id="radio-filter-contract" />
          <Label htmlFor="radio-filter-contract" className="flex-1">
            契約社員
          </Label>
          <span className="text-xs text-muted-foreground">64</span>
        </div>

        <div className="flex items-center gap-2">
          <RadioGroupItem value="part-time" id="radio-filter-part-time" />
          <Label htmlFor="radio-filter-part-time" className="flex-1">
            アルバイト・パート
          </Label>
          <span className="text-xs text-muted-foreground">96</span>
        </div>

        <div className="flex items-center gap-2">
          <RadioGroupItem value="temporary" id="radio-filter-temporary" />
          <Label htmlFor="radio-filter-temporary" className="flex-1">
            派遣社員
          </Label>
          <span className="text-xs text-muted-foreground">24</span>
        </div>
      </RadioGroup>

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
 * 管理画面の応募者詳細で選考ステータスを付け替える。候補者情報の下に選択肢を横並びで置く
 */
function ApplicantStatusPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 rounded-lg border p-4">
      <div className="flex items-center gap-2">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
          <UserIcon className="size-4 text-muted-foreground" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">比嘉 太郎</span>
          <span className="truncate text-xs text-muted-foreground">
            28歳・男性・前職: 営業 / フロントエンドエンジニアに応募
          </span>
        </div>

        <Badge variant="destructive">未選考</Badge>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">選考ステータス</p>

        <RadioGroup defaultValue="unscreened" className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="unscreened" id="radio-status-unscreened" />
            <Label htmlFor="radio-status-unscreened">未選考</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="on-hold" id="radio-status-on-hold" />
            <Label htmlFor="radio-status-on-hold">保留中</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="contacted" id="radio-status-contacted" />
            <Label htmlFor="radio-status-contacted">連絡済</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="hired" id="radio-status-hired" />
            <Label htmlFor="radio-status-hired">採用</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="rejected" id="radio-status-rejected" />
            <Label htmlFor="radio-status-rejected">不採用</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm">
          キャンセル
        </Button>

        <Button size="sm">ステータスを更新</Button>
      </div>
    </div>
  )
}

export const radioGroupDoc: ComponentDoc = {
  name: "radio-group",
  title: "Radio Group",
  category: "フォーム",
  purpose:
    "複数の選択肢からちょうど1つを選ばせるためのフォームコントロールです。@base-ui/react ベースで defaultValue による非制御利用に対応し、選択肢が2〜5個程度で全体を一覧させたい場面に向きます。ジョブアンテナでは雇用形態や給与種別の単一選択、検索条件の絞り込み、応募者の選考ステータス更新に使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "雇用形態（正社員・契約社員・アルバイト・パート・派遣社員）から1つを選ぶ基本形です。RadioGroupItem に disabled を付けると受付終了などの選べない選択肢を表現できます。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "salary-type-card",
      title: "給与種別のカード選択",
      description:
        "求人フォームの給与・待遇セクションで給与種別（月給・日給・時給）を選ぶ例です。Label でカード全体を包み、has-data-checked で選択中のカードを強調します。補足説明を添えたい選択肢に向きます。",
      previewHeight: null,
      Demo: SalaryTypeCardPattern,
    },
    {
      id: "employment-filter",
      title: "検索条件の雇用形態",
      description:
        "求人検索パネルで雇用形態を単一選択で絞り込む例です。「すべて」を先頭に置き、各選択肢の右に該当件数、フッターに件数付きの検索ボタンとクリアを置きます。",
      previewHeight: null,
      Demo: EmploymentFilterPattern,
    },
    {
      id: "applicant-status",
      title: "応募ステータスの更新",
      description:
        "管理画面の応募者詳細で選考ステータス（未選考・保留中・連絡済・採用・不採用）を付け替える例です。状態は排他なのでラジオで選び、更新ボタンで確定します。",
      previewHeight: null,
      Demo: ApplicantStatusPattern,
    },
  ],
}
