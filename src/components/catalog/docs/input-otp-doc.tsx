import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { MailIcon, RotateCcwIcon } from "lucide-react"

/**
 * 桁数指定・区切りあり・disabled の組み合わせの基本形
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">認証コード（6桁）</p>

        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <p className="text-sm text-muted-foreground">
          登録したメールアドレスに届いた認証コードを入力してください
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">電話番号認証（区切りあり）</p>

        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>

          <InputOTPSeparator />

          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">無効状態（4桁）</p>

        <InputOTP maxLength={4} disabled>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  )
}

/**
 * 会員登録のメール認証。送信先の案内と再送ボタンをセットで置く本人確認フロー
 */
function EmailVerificationPattern() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 rounded-lg border p-4 text-center">
      <div className="flex size-8 items-center justify-center rounded-full bg-muted">
        <MailIcon className="size-4 text-muted-foreground" />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">本人確認コードの入力</p>

        <p className="text-sm text-muted-foreground">
          t***@example.com 宛に6桁の認証コードを送信しました
        </p>
      </div>

      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <Button className="w-full">認証する</Button>

      <Button variant="ghost" size="sm">
        コードを再送する
      </Button>
    </div>
  )
}

/**
 * 認証コードの照合失敗。aria-invalid でスロットを赤枠にし、再送の導線を添える
 */
function ErrorPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <p className="text-sm font-medium">認証コード</p>

      <InputOTP maxLength={6} defaultValue="000000">
        <InputOTPGroup>
          <InputOTPSlot index={0} aria-invalid="true" />
          <InputOTPSlot index={1} aria-invalid="true" />
          <InputOTPSlot index={2} aria-invalid="true" />
          <InputOTPSlot index={3} aria-invalid="true" />
          <InputOTPSlot index={4} aria-invalid="true" />
          <InputOTPSlot index={5} aria-invalid="true" />
        </InputOTPGroup>
      </InputOTP>

      <p className="text-sm text-destructive">
        認証コードが正しくありません。再度入力するか、コードを再送してください。
      </p>

      <div>
        <Button variant="outline" size="sm">
          <RotateCcwIcon data-icon="inline-start" />
          コードを再送する
        </Button>
      </div>
    </div>
  )
}

export const inputOtpDoc: ComponentDoc = {
  name: "input-otp",
  title: "Input OTP",
  category: "フォーム",
  purpose:
    "ワンタイムパスワード（認証コード）を1文字ずつのスロットで入力するフォームコントロール。input-otp ベースで maxLength による桁数指定、defaultValue による非制御利用、貼り付けや自動入力（one-time-code）に対応する。ジョブアンテナでは会員登録時のメール認証や電話番号認証など、本人確認コードの入力に使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "maxLength で桁数を決め、InputOTPSlot を index 順に並べる基本形。InputOTPSeparator でグループを区切る形と disabled 状態も示す。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "email-verification",
      title: "メール認証",
      description:
        "会員登録時の本人確認フロー。送信先メールアドレスの案内、認証コード入力、認証ボタン、再送の導線を1枚にまとめる。",
      previewHeight: null,
      Demo: EmailVerificationPattern,
    },
    {
      id: "error",
      title: "エラー状態",
      description:
        "コードの照合に失敗したときの表示。各スロットに aria-invalid を付けると赤枠になる。エラー文言と再送ボタンをセットで置く。",
      previewHeight: null,
      Demo: ErrorPattern,
    },
  ],
}
