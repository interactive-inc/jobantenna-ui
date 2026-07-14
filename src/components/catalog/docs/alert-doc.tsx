import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { CheckCircle2Icon, CircleAlertIcon, InfoIcon, MailWarningIcon } from "lucide-react"

/**
 * アイコン・タイトル・説明文を組み合わせた基本形
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>応募が完了しました！</AlertTitle>
        <AlertDescription>
          株式会社サンプル（那覇市）への応募を受け付けました。企業からの返信をお待ち下さい。
        </AlertDescription>
      </Alert>

      <Alert>
        <InfoIcon />
        <AlertTitle>新着求人が3件あります</AlertTitle>
        <AlertDescription>
          保存した条件「正社員・那覇市・月給25万円以上」に合う求人が追加されました。
        </AlertDescription>
      </Alert>
    </div>
  )
}

/**
 * AlertAction で行動を促すお知らせ
 */
function NoticePattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Alert>
        <MailWarningIcon />
        <AlertTitle>メールアドレスが未登録です</AlertTitle>
        <AlertDescription>
          登録すると、企業からのいいかも！やメッセージの通知を受け取れます。
        </AlertDescription>
        <AlertAction>
          <Button size="xs" variant="outline">
            登録する
          </Button>
        </AlertAction>
      </Alert>

      <Alert>
        <InfoIcon />
        <AlertTitle>Web履歴書が未完成です</AlertTitle>
        <AlertDescription>
          まずはプロフィールを充実させて、企業からオファーをもらいましょう！
        </AlertDescription>
        <AlertAction>
          <Button size="xs" variant="outline">
            入力する
          </Button>
        </AlertAction>
      </Alert>
    </div>
  )
}

/**
 * destructive バリアントによる警告表示
 */
function DestructivePattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Alert variant="destructive">
        <CircleAlertIcon />
        <AlertTitle>この求人は掲載を終了しました</AlertTitle>
        <AlertDescription>
          応募することはできません。似た条件の求人は「フロントエンドエンジニア・那覇市」で検索できます。
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <CircleAlertIcon />
        <AlertTitle>掲載期限が近づいています</AlertTitle>
        <AlertDescription>
          「【未経験歓迎・在宅可】調理スタッフ」は3日後に公開停止されます。継続する場合は求人票を更新してください。
        </AlertDescription>
        <AlertAction>
          <Button size="xs" variant="outline">
            更新する
          </Button>
        </AlertAction>
      </Alert>
    </div>
  )
}

export const alertDoc: ComponentDoc = {
  name: "alert",
  title: "Alert",
  category: "フィードバック",
  purpose:
    "ページ内に埋め込んで、ユーザーの操作を妨げずに状態や注意事項を伝えるコンポーネント。応募完了の確認、メールアドレス未登録の案内、掲載終了の警告など、閉じられずに残しておきたい通知に使う。一時的な通知にはトースト（sonner）、確認が必要な操作には AlertDialog を使い分ける。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "アイコン・AlertTitle・AlertDescription を並べた基本形。応募完了や新着求人など、状況を伝えるだけの通知に使う。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "notice",
      title: "お知らせ",
      description:
        "AlertAction にボタンを置いて次の行動を促すお知らせ。メールアドレス未登録や Web履歴書の入力促進など、ユーザーに対応してほしい案内に使う。",
      previewHeight: null,
      Demo: NoticePattern,
    },
    {
      id: "destructive",
      title: "掲載終了警告",
      description:
        'variant="destructive" で文字とアイコンを赤にした警告。掲載終了した求人の表示や、掲載期限切れが迫った求人票への注意喚起に使う。',
      previewHeight: null,
      Demo: DestructivePattern,
    },
  ],
}
