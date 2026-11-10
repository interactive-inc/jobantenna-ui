import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

function NotificationSettingsPattern() {
  return (
    <Card variant="outline" className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>メール通知</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="switch-notify-message">メッセージが届いた時</Label>
          <Switch id="switch-notify-message" defaultChecked />
        </div>
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="switch-notify-application">応募があった時</Label>
          <Switch id="switch-notify-application" />
        </div>
      </CardContent>
    </Card>
  )
}

export const switchDoc: ComponentDoc = {
  name: "switch",
  title: "Switch",
  category: "フォーム",
  purpose:
    "切り替えた時点で反映する設定に使います。有効になっているスイッチは墨色で示します。",
  patterns: [
    {
      id: "notification-settings",
      title: "メール通知",
      description: "設定名とスイッチを一行にまとめ、スイッチを右端に揃えます。",
      showControls: false,
      previewHeight: null,
      Demo: NotificationSettingsPattern,
    },
  ],
  usage: {
    recommended: [
      "切り替えた設定をその場で保存し、保存の結果をトーストで伝える。",
      "切り替える設定の名前をラベルにする。",
    ],
    avoid: [
      "保存ボタンでまとめて確定する設定に使う。その場合はチェックボックスを使う。",
      "有効になっているスイッチを黄色で示す。",
    ],
  },
}
