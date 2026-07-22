import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

/**
 * ラベル・入力・説明文を縦に並べる基本形と、エラー表示・横並びチェックボックス
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-basic-name">氏名</FieldLabel>
          <Input id="field-basic-name" placeholder="金城 太郎" />
          <FieldDescription>履歴書と同じ表記で入力してください</FieldDescription>
        </Field>

        <Field data-invalid="true">
          <FieldLabel htmlFor="field-basic-email">メールアドレス</FieldLabel>
          <Input id="field-basic-email" aria-invalid defaultValue="taro@example" />
          <FieldError errors={[{ message: "メールアドレスの形式が正しくありません" }]} />
        </Field>

        <Field orientation="horizontal">
          <Checkbox id="field-basic-mail" defaultChecked />
          <FieldContent>
            <FieldTitle>
              <FieldLabel htmlFor="field-basic-mail">新着求人メールを受け取る</FieldLabel>
            </FieldTitle>
            <FieldDescription>給与や勤務地の条件に合う求人をお知らせします</FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  )
}

/**
 * 応募プロフィールフォーム。FieldSet と FieldSeparator でセクションを区切る
 */
function ApplicantProfilePattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <FieldSet>
        <FieldLegend>基本情報</FieldLegend>
        <FieldDescription>※応募すると氏名が企業に公開されます。</FieldDescription>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-profile-name">氏名</FieldLabel>
            <Input id="field-profile-name" placeholder="金城 太郎" />
            <FieldDescription>履歴書と同じ表記で入力してください</FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="field-profile-tel">電話番号</FieldLabel>
            <Input id="field-profile-tel" type="tel" placeholder="098-000-0000" />
            <FieldDescription>日中つながりやすい番号を入力してください</FieldDescription>
          </Field>

          <FieldSeparator>自己PR</FieldSeparator>

          <Field>
            <FieldLabel htmlFor="field-profile-pr">自己PR</FieldLabel>
            <Textarea
              id="field-profile-pr"
              placeholder="接客経験3年。正社員として長く働きたいです"
            />
            <FieldDescription>
              400文字以内。充実させると企業からオファーをもらいやすくなります
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>

      <Button className="w-full">プロフィールを保存する</Button>
    </div>
  )
}

/**
 * 通知設定。orientation="horizontal" で説明つきの項目とスイッチを横並びにする
 */
function NotificationSettingsPattern() {
  return (
    <div className="w-full max-w-md rounded-lg border p-4">
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="field-notify-jobs">新着求人メール</FieldLabel>
            <FieldDescription>保存した検索条件に合う求人をお知らせします</FieldDescription>
          </FieldContent>
          <Switch id="field-notify-jobs" defaultChecked />
        </Field>

        <FieldSeparator />

        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="field-notify-iikamo">いいかも！の通知</FieldLabel>
            <FieldDescription>企業からいいかも！をもらったときに通知します</FieldDescription>
          </FieldContent>
          <Switch id="field-notify-iikamo" defaultChecked />
        </Field>

        <FieldSeparator />

        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="field-notify-ashiato">あしあとの通知</FieldLabel>
            <FieldDescription>Web履歴書を見た企業をお知らせします</FieldDescription>
          </FieldContent>
          <Switch id="field-notify-ashiato" />
        </Field>
      </FieldGroup>
    </div>
  )
}

/**
 * 求人票フォームの給与・待遇セクション。下限と上限を2カラムで並べる
 */
function SalarySectionPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <FieldSet>
        <FieldLegend>給与・待遇</FieldLegend>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-salary-type">給与種別</FieldLabel>
            <NativeSelect id="field-salary-type" defaultValue="monthly" className="w-full">
              <NativeSelectOption value="monthly">月給</NativeSelectOption>
              <NativeSelectOption value="hourly">時給</NativeSelectOption>
              <NativeSelectOption value="annual">年俸</NativeSelectOption>
            </NativeSelect>
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="field-salary-min">下限（円）</FieldLabel>
              <Input id="field-salary-min" type="number" defaultValue="200000" />
            </Field>

            <Field>
              <FieldLabel htmlFor="field-salary-max">上限（円）</FieldLabel>
              <Input id="field-salary-max" type="number" defaultValue="350000" />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="field-salary-benefits">待遇・福利厚生</FieldLabel>
            <Textarea
              id="field-salary-benefits"
              placeholder="賞与年2回、交通費支給、社会保険完備"
            />
            <FieldDescription>求人票にはこの内容がそのまま表示されます</FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}

export const fieldDoc: ComponentDoc = {
  name: "field",
  title: "Field",
  category: "フォーム",
  purpose:
    "ラベル・入力・説明文・エラーをひとまとまりにして、フォームのレイアウトを統一するためのコンポーネント群です。FieldSet / FieldLegend / FieldSeparator でセクションを区切り、orientation で縦・横・レスポンシブの並びを切り替えます。ジョブアンテナでは応募プロフィールや求人票フォーム、通知設定などフォーム全般の骨組みに使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        'FieldLabel・Input・FieldDescription を縦に並べる基本形です。data-invalid と FieldError でエラーを表示し、orientation="horizontal" でチェックボックスと説明文を横に並べます。',
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "applicant-profile",
      title: "応募プロフィール",
      description:
        "求職者の応募プロフィールフォームです。FieldSet + FieldLegend で基本情報（氏名、電話番号）をまとめ、FieldSeparator で自己PRセクションを区切ります。",
      previewHeight: 640,
      Demo: ApplicantProfilePattern,
    },
    {
      id: "notification-settings",
      title: "通知設定",
      description:
        "設定画面向けの横並びレイアウトです。FieldContent にラベルと説明を入れ、右端にスイッチを置きます。項目間は FieldSeparator で区切ります。",
      previewHeight: null,
      Demo: NotificationSettingsPattern,
    },
    {
      id: "salary-section",
      title: "求人票の給与・待遇",
      description:
        "管理画面の求人票フォームのセクション例です。給与種別のセレクトと下限・上限の2カラム入力を FieldGroup 内に組み合わせます。",
      previewHeight: 480,
      Demo: SalarySectionPattern,
    },
  ],
}
