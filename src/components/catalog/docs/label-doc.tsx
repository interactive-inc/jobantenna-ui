import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

/**
 * htmlFor での紐付けと、Checkbox を後続に置いた peer-disabled の減光
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="label-basic-keyword">キーワード</Label>
        <Input id="label-basic-keyword" placeholder="職種名や仕事内容などを入力" />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="label-basic-email">メールアドレス</Label>
        <Input id="label-basic-email" type="email" placeholder="taro@example.com" />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="label-basic-fulltime" defaultChecked />
        <Label htmlFor="label-basic-fulltime">正社員のみ表示</Label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="label-basic-remote" disabled />
        <Label htmlFor="label-basic-remote">リモート可（準備中）</Label>
      </div>
    </div>
  )
}

/**
 * Web履歴書の入力フォーム。必須・任意を Badge でラベル横に示す
 */
function RequiredMarkPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="label-required-name">
          氏名
          <Badge variant="destructive">必須</Badge>
        </Label>
        <Input id="label-required-name" placeholder="比嘉 太郎" required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="label-required-email">
          メールアドレス
          <Badge variant="destructive">必須</Badge>
        </Label>
        <Input id="label-required-email" type="email" placeholder="taro@example.com" required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="label-required-pr">
          自己PR
          <Badge variant="secondary">任意</Badge>
        </Label>
        <Textarea
          id="label-required-pr"
          placeholder="前職の経験やアピールポイントを入力してください"
        />
      </div>
    </div>
  )
}

/**
 * 管理画面の求人フォーム「給与・待遇」。ラベル+補足テキストで入力欄を説明する
 */
function SalaryFormPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 rounded-lg border p-4">
      <span className="text-sm font-semibold">給与・待遇</span>

      <div className="flex flex-col gap-2">
        <Label htmlFor="label-salary-type">
          給与種別
          <Badge variant="destructive">必須</Badge>
        </Label>

        <NativeSelect id="label-salary-type" defaultValue="monthly">
          <NativeSelectOption value="monthly">月給</NativeSelectOption>
          <NativeSelectOption value="hourly">時給</NativeSelectOption>
          <NativeSelectOption value="annual">年俸</NativeSelectOption>
        </NativeSelect>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="label-salary-min">下限</Label>
          <Input id="label-salary-min" type="number" defaultValue={200000} placeholder="200000" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="label-salary-max">上限</Label>
          <Input id="label-salary-max" type="number" defaultValue={350000} placeholder="350000" />
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        求人票には「月給 200,000〜350,000円」のように表示されます。
      </p>
    </div>
  )
}

/**
 * 通知設定。ラベルと説明文を左、Switch を右に置く横並びレイアウト
 */
function NotificationSettingsPattern() {
  return (
    <div className="flex w-full max-w-md flex-col rounded-lg border">
      <div className="flex items-center gap-4 p-4">
        <div className="flex flex-1 flex-col gap-1">
          <Label htmlFor="label-notify-jobs">新着求人のメール通知</Label>
          <p className="text-xs text-muted-foreground">
            保存した検索条件に合う求人をお知らせします
          </p>
        </div>

        <Switch id="label-notify-jobs" defaultChecked />
      </div>

      <div className="flex items-center gap-4 border-t p-4">
        <div className="flex flex-1 flex-col gap-1">
          <Label htmlFor="label-notify-iikamo">いいかも！の通知</Label>
          <p className="text-xs text-muted-foreground">
            企業からいいかも！が届いたらお知らせします
          </p>
        </div>

        <Switch id="label-notify-iikamo" defaultChecked />
      </div>

      <div className="flex items-center gap-4 border-t p-4">
        <div className="flex flex-1 flex-col gap-1">
          <Label htmlFor="label-notify-footprints" className="opacity-50">
            あしあとの通知（準備中）
          </Label>
          <p className="text-xs text-muted-foreground">プロフィールを見た企業をお知らせします</p>
        </div>

        <Switch id="label-notify-footprints" disabled />
      </div>
    </div>
  )
}

export const labelDoc: ComponentDoc = {
  name: "label",
  title: "Label",
  category: "フォーム",
  purpose:
    "入力欄やチェックボックスなどのフォーム部品に名前を付け、htmlFor で紐付けるためのコンポーネント。紐付けるとラベルのクリックで対象へフォーカスや切り替えができ、disabled な部品に合わせて自動で減光する。jobantenna では検索条件やWeb履歴書、管理画面の求人フォームの項目名として使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "htmlFor と id で Input や Checkbox に紐付ける基本形。disabled な Checkbox の直後に置くと peer-disabled でラベルも薄くなる。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "required-mark",
      title: "必須マーク",
      description:
        "Web履歴書フォームで必須・任意を示す例。Label は flex レイアウトなので、テキストの横に Badge を置くだけで揃う。",
      previewHeight: null,
      Demo: RequiredMarkPattern,
    },
    {
      id: "salary-form",
      title: "求人フォーム",
      description:
        "管理画面の求人フォーム「給与・待遇」セクション。セレクトや数値入力にラベルを紐付け、表示イメージの補足テキストを添える。",
      previewHeight: 400,
      Demo: SalaryFormPattern,
    },
    {
      id: "notification-settings",
      title: "通知設定",
      description:
        "ラベルと説明文を左、Switch を右に置く設定画面のレイアウト。ラベルのクリックでもオン・オフが切り替わる。",
      previewHeight: null,
      Demo: NotificationSettingsPattern,
    },
  ],
}
