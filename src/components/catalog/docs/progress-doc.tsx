import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { CheckCircle2Icon } from "lucide-react"

/**
 * ラベルと値表示を組み合わせた基本形
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Progress value={25}>
        <ProgressLabel>プロフィール入力</ProgressLabel>
        <ProgressValue />
      </Progress>

      <Progress value={60}>
        <ProgressLabel>応募書類の準備</ProgressLabel>
        <ProgressValue />
      </Progress>

      <Progress value={100}>
        <ProgressLabel>会員登録</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  )
}

/**
 * プロフィール入力率を段階別に表示するカード
 */
function ProfileCompletionPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Card>
        <CardContent className="flex flex-col gap-2">
          <Progress value={30}>
            <ProgressLabel>プロフィール入力率</ProgressLabel>
            <ProgressValue />
          </Progress>
          <p className="text-sm text-muted-foreground">
            まずはプロフィールを充実させて、企業からオファーをもらいましょう！
          </p>
          <Button size="sm" className="self-start">
            プロフィールを入力する
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col gap-2">
          <Progress value={70}>
            <ProgressLabel>プロフィール入力率</ProgressLabel>
            <ProgressValue />
          </Progress>
          <p className="text-sm text-muted-foreground">
            あと少し！職歴とスキルを追加すると入力率が上がります。
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col gap-2">
          <Progress value={100}>
            <ProgressLabel>プロフィール入力率</ProgressLabel>
            <ProgressValue />
          </Progress>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <CheckCircle2Icon className="size-4 shrink-0" />
            プロフィールが完成しました！企業からのいいかも！が届きやすくなります。
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

/**
 * max 指定による件数ベースのステップ進捗
 */
function StepsPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Progress value={3} max={5}>
          <ProgressLabel>選考ステップ（3 / 5）</ProgressLabel>
          <ProgressValue />
        </Progress>
        <p className="text-sm text-muted-foreground">現在：一次面接の日程調整中</p>
      </div>

      <div className="flex flex-col gap-1">
        <Progress value={4} max={8}>
          <ProgressLabel>求人票の入力（4 / 8 セクション）</ProgressLabel>
          <ProgressValue />
        </Progress>
        <p className="text-sm text-muted-foreground">次のセクション：勤務情報</p>
      </div>
    </div>
  )
}

export const progressDoc: ComponentDoc = {
  name: "progress",
  title: "Progress",
  category: "フィードバック",
  purpose:
    "タスクの完了度合いをバーで可視化するコンポーネントです。プロフィール入力率や選考ステップの進み具合など、ゴールまでの残りを示して次の行動を促す場面で使います。Track と Indicator は Progress が自動で描画するため、ProgressLabel と ProgressValue を children に置くだけで使えます。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "ProgressLabel と ProgressValue を children に置いた基本形です。value を渡すだけでバーが描画され、値は百分率で自動表示されます。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "profile-completion",
      title: "プロフィール入力率",
      description:
        "マイページに置くプロフィール入力率カードです。30%・70%・100% の段階に応じて案内文言とアクションを切り替え、Web履歴書の完成を後押しします。",
      previewHeight: 560,
      Demo: ProfileCompletionPattern,
    },
    {
      id: "steps",
      title: "ステップ進捗",
      description:
        "max を指定して件数ベースの進捗を割合に変換する形です。選考ステップや求人票の入力セクションなど、全体の工程数が決まっているフローの現在地表示に使います。",
      previewHeight: null,
      Demo: StepsPattern,
    },
  ],
}
