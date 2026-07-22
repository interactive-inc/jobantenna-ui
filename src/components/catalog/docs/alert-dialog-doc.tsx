import type { ComponentDoc } from "@/components/catalog/component-doc"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { BellOffIcon, Trash2Icon } from "lucide-react"

/**
 * 求人票の削除確認。取り消せない操作をアイコンと destructive ボタンで警告する
 */
function DeleteJobPattern() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>求人を削除</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>求人を削除しますか？</AlertDialogTitle>
          <AlertDialogDescription>
            「【未経験歓迎・在宅可】フロントエンドエンジニア」を削除します。この操作は取り消せません。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <AlertDialogAction variant="destructive">削除する</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

/**
 * 企業フォロー解除の確認。sm サイズでボタンを2カラムに並べるコンパクト表示
 */
function UnfollowPattern() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>フォロー解除</AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <BellOffIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>この企業のフォローを解除しますか？</AlertDialogTitle>
          <AlertDialogDescription>
            「株式会社サンプル」のフォローを解除すると、新着求人のお知らせが届かなくなります。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <AlertDialogAction>解除する</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export const alertDialogDoc: ComponentDoc = {
  name: "alert-dialog",
  title: "Alert Dialog",
  category: "オーバーレイ",
  purpose:
    "取り消しづらい操作の前にユーザーへ明示的な確認を求めるモーダルダイアログ。通常の Dialog と違い、キャンセルか実行かの選択に応答が絞られる。ジョブアンテナでは求人の削除、応募の取り消し、企業フォローの解除といった確認に使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "管理画面の求人票削除の確認。AlertDialogMedia のアイコンと destructive アクションで、取り消せない操作であることを強調する。",
      previewHeight: null,
      Demo: DeleteJobPattern,
    },
    {
      id: "unfollow",
      title: "フォロー解除",
      description:
        '企業フォローを解除する前の確認。破壊的ではないが影響のある操作なので、size="sm" のコンパクトなダイアログで解除後の影響を伝える。',
      previewHeight: null,
      Demo: UnfollowPattern,
    },
  ],
}
