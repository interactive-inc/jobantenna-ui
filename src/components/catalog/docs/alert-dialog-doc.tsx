import type { ComponentDoc } from "@/components/catalog/component-doc"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

function DeleteJobPattern() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="secondary" />}>
        求人を削除する
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>求人を削除しますか？</AlertDialogTitle>
          <AlertDialogDescription>
            「【未経験歓迎・在宅可】フロントエンドエンジニア」を削除します。この操作は取り消せません。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <AlertDialogAction>削除する</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export const alertDialogDoc: ComponentDoc = {
  name: "alert-dialog",
  title: "確認ダイアログ（Alert Dialog）",
  category: "オーバーレイ",
  purpose: "取り消せない操作など、実行する前に影響を確かめてもらう場面に使います。",
  patterns: [
    {
      id: "basic",
      title: "求人票の削除",
      description: "対象の求人と、削除すると元に戻せないことを表示します。",
      showControls: false,
      previewHeight: null,
      Demo: DeleteJobPattern,
    },
  ],
  usage: {
    recommended: [
      "見出しを「〜しますか？」とし、本文には実行後に変わることと残るものを書く。",
      "白のキャンセルと墨色の確定ボタンを並べる。確定ボタンには「削除する」のように実行内容を書く。",
      "開いた直後はキャンセルにフォーカスする。キャンセルすると対象を残したまま元の画面へ戻る。",
    ],
    avoid: [
      "確定ボタンを「OK」だけにする。",
      "削除の確定ボタンを赤くする。赤はエラー表示に使う。",
      "すぐ元に戻せる操作のたびに確認する。その場合はトーストに「取り消す」を添える。",
    ],
  },
}
