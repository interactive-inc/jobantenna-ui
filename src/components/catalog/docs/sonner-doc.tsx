import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

/**
 * 通常・成功・情報・警告・エラーの5種類のトースト
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Toaster />

      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={() => toast("求人を保存しました")}>通常</Button>
        <Button
          variant="secondary"
          onClick={() =>
            toast.success("応募が完了しました！", {
              description: "企業からの返信をお待ち下さい。",
            })
          }
        >
          成功
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            toast.info("新着求人があります", { description: "那覇市の正社員求人 3件" })
          }
        >
          情報
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.warning("Web履歴書が未完成です", {
              description: "応募前にプロフィールを完成させてください。",
            })
          }
        >
          警告
        </Button>
        <Button
          variant="destructive"
          onClick={() =>
            toast.error("応募に失敗しました", {
              description: "時間をおいて再度お試しください。",
            })
          }
        >
          エラー
        </Button>
      </div>
    </div>
  )
}

/**
 * 求職者側の応募・いいかも！操作に対する通知
 */
function ApplyPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Toaster />

      <div className="flex flex-wrap items-center gap-2">
        <Button
          onClick={() =>
            toast.success("応募が完了しました！", {
              description:
                "株式会社サンプル（那覇市）に応募しました。企業からの返信をお待ち下さい。",
            })
          }
        >
          応募する
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            toast("いいかも！を送りました", {
              description: "お互いにいいかも！になるとメッセージを送れます。",
            })
          }
        >
          いいかも！
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.success("お互いにいいかも！", {
              description: "常磐合同産業株式会社とマッチしました。",
              action: {
                label: "メッセージ",
                onClick: () => toast("メッセージ画面を開きます"),
              },
            })
          }
        >
          マッチ通知
        </Button>
      </div>
    </div>
  )
}

/**
 * 管理画面の保存・更新・削除操作に対する通知
 */
function AdminPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Toaster />

      <div className="flex flex-wrap items-center gap-2">
        <Button variant="outline" onClick={() => toast("一時保存しました。")}>
          一時保存
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            toast.success("ステータスを更新しました。", {
              description: "山田太郎さんを「連絡済」に変更しました。",
              action: {
                label: "元に戻す",
                onClick: () => toast("「未選考」に戻しました。"),
              },
            })
          }
        >
          ステータス更新
        </Button>
        <Button
          variant="destructive"
          onClick={() =>
            toast("求人を削除しました。", {
              description: "【未経験歓迎・在宅可】フロントエンドエンジニア",
              action: {
                label: "元に戻す",
                onClick: () => toast.success("求人を復元しました。"),
              },
            })
          }
        >
          削除
        </Button>
      </div>
    </div>
  )
}

export const sonnerDoc: ComponentDoc = {
  name: "sonner",
  title: "Sonner",
  category: "フィードバック",
  purpose:
    "操作の結果を画面の隅に一時的に表示するトースト通知コンポーネント。Toaster を1つ配置し、イベントハンドラから toast() 関数を呼んで発火する。ジョブアンテナでは応募完了やいいかも！送信の確認、管理画面での保存・削除の結果通知など、ユーザーの操作を妨げずに伝えたいフィードバックに使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "通常・成功・情報・警告・エラーの5種類を発火する基本形。toast() / toast.success() などメソッドで種類を切り替え、description で補足文を添える。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "apply-flow",
      title: "応募・いいかも！",
      description:
        "求職者の応募やいいかも！送信に対する確認通知。マッチ成立時は action でメッセージ画面への導線をトースト内に置く。",
      previewHeight: null,
      Demo: ApplyPattern,
    },
    {
      id: "admin-actions",
      title: "管理画面の操作",
      description:
        "一時保存・ステータス更新・削除など管理画面の操作結果の通知。取り消せる操作には action の「元に戻す」を添えて誤操作から復帰できるようにする。",
      previewHeight: null,
      Demo: AdminPattern,
    },
  ],
}
