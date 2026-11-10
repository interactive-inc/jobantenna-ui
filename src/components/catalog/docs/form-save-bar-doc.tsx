import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { FormSaveBar } from "@/components/ui/form-save-bar"
import { FormSaveStatus } from "@/components/ui/form-save-status"

function SaveBarExample() {
  return (
    <div className="w-full">
      <FormSaveBar
        status={
          <FormSaveStatus
            requiredCount={0}
            lastSavedAt={new Date(2026, 10, 9, 14, 32)}
          />
        }
      >
        <Button type="button" variant="secondary">
          一時保存
        </Button>
        <Button type="button">
          確認して公開する
        </Button>
      </FormSaveBar>
    </div>
  )
}

export const formSaveBarDoc: ComponentDoc = {
  name: "form-save-bar",
  title: "保存バー",
  category: "オーバーレイ",
  purpose:
    "入力画面の下に浮かせ、必須項目の残り、確認できた保存時刻、保存や公開の操作をまとめます。",
  patterns: [
    {
      id: "ready",
      title: "求人票を編集する",
      description: "広い画面では左に入力状況と保存時刻、右に一時保存と公開の操作を置きます。狭い画面では入力状況を上、操作を下に並べます。",
      previewHeight: 220,
      showControls: false,
      Demo: SaveBarExample,
    },
  ],
  usage: {
    recommended: [
      "必須項目が残っている場合は件数を示し、一時保存はできるようにする。",
      "求人票と会社ページでは、必須項目が揃うまで公開確認を無効にする。入力が揃ったら確認を経て公開する。",
      "一時保存の時刻は、保存の成功を確認したときに更新する。",
      "広い画面でフォームより幅の広い保存バーを使う場合は、フォームと保存バーの中心を揃える。狭い画面では同じ本文幅に収める。",
      "下部ナビゲーションがある場合は、その上に操作を置く。",
    ],
    avoid: [
      "主操作をページヘッダーにも重ねて置く。",
      "画面の下端に貼り付ける。本文の上に余白を取って浮かせる。",
    ],
  },
}
