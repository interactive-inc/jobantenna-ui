import { CircleAlertIcon, InfoIcon, TriangleAlertIcon } from "lucide-react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

function NoticeBanner() {
  return (
    <Alert className="max-w-xl">
      <InfoIcon aria-hidden="true" />
      <AlertTitle>メンテナンスのお知らせ</AlertTitle>
      <AlertDescription>11月20日（金）午前2時から午前4時まで利用できません。</AlertDescription>
    </Alert>
  )
}

function WarningBanner() {
  return (
    <Alert variant="warning" className="max-w-xl">
      <TriangleAlertIcon aria-hidden="true" />
      <AlertTitle>求人票の掲載期限が近づいています</AlertTitle>
      <AlertDescription>掲載を続ける場合は、期限までに求人票を更新してください。</AlertDescription>
    </Alert>
  )
}

function ErrorBanner() {
  return (
    <Alert variant="destructive" className="max-w-xl">
      <CircleAlertIcon aria-hidden="true" />
      <AlertTitle>応募者を読み込めませんでした</AlertTitle>
      <AlertDescription>通信環境を確かめて、もう一度読み込んでください。</AlertDescription>
      <AlertAction>
        <Button size="sm" variant="secondary">もう一度読み込む</Button>
      </AlertAction>
    </Alert>
  )
}

export const alertDoc: ComponentDoc = {
  name: "alert",
  title: "お知らせの帯（Alert）",
  category: "フィードバック",
  purpose: "注意やお知らせを、関係する画面や項目の近くに表示します。",
  patterns: [
    {
      id: "basic",
      title: "メンテナンスのお知らせ",
      description: "通常のお知らせは白地に枠線で示します。",
      previewHeight: null,
      showControls: false,
      Demo: NoticeBanner,
    },
    {
      id: "notice",
      title: "掲載期限の注意",
      description: "注意は淡い橙の面にまとめます。",
      previewHeight: null,
      showControls: false,
      Demo: WarningBanner,
    },
    {
      id: "destructive",
      title: "読み込みの失敗",
      description: "エラーは淡い赤の面で示し、直す操作があれば白いボタンを一つ置きます。",
      previewHeight: null,
      showControls: false,
      Demo: ErrorBanner,
    },
  ],
  usage: {
    recommended: [
      "見出しには何が起きているか、説明にはどうすればよいかを書く。",
      "色に加えて、アイコンと文言で内容を伝える。",
      "全体に関わる案内は全画面、求人票だけに関わる案内は求人票の一覧に表示する。",
      "掲示期間のある案内は、画面を開いたままでも開始時刻に表示し、終了時刻に取り下げる。",
    ],
    avoid: [
      "同じ場所に何本も帯を重ねる。",
      "保存や送信の結果を帯で表示する。一時的な結果はトーストを使う。",
    ],
  },
}
