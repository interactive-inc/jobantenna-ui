import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Building2Icon } from "lucide-react"

/**
 * 保存した求人を削除する前の確認ダイアログ
 */
function BasicPattern() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>保存した求人を削除</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>保存した求人を削除しますか？</DialogTitle>
          <DialogDescription>
            「調理スタッフ / 那覇市久茂地」をキープリストから削除します。この操作は取り消せません。
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>キャンセル</DialogClose>
          <DialogClose render={<Button variant="destructive" />}>削除する</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/**
 * 応募前に求人内容と氏名公開の注意を確認させるダイアログ
 */
function ApplyConfirmPattern() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>応募する</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>応募内容の確認</DialogTitle>
          <DialogDescription>
            応募する求人を確認の上、「応募を完了する」を押してください。
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 rounded-xl bg-muted p-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-background text-muted-foreground">
              <Building2Icon className="size-5" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-foreground">フロントエンドエンジニア</span>
              <span className="text-xs text-muted-foreground">株式会社サンプル</span>
              <span className="text-xs text-muted-foreground">
                那覇市 / 正社員 / 月給 200,000〜300,000円
              </span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">※応募すると氏名が企業に公開されます。</p>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>キャンセル</DialogClose>
          <DialogClose render={<Button />}>応募を完了する</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/**
 * 管理画面でメッセージテンプレートを作成するフォームダイアログ
 */
function MessageTemplatePattern() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>テンプレートを作成</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>メッセージテンプレートを作成</DialogTitle>
          <DialogDescription>
            応募者への返信によく使う文面をテンプレートとして保存します。
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="dialog-template-name">テンプレート名</Label>
            <Input id="dialog-template-name" defaultValue="書類選考通過のご連絡" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="dialog-template-body">本文</Label>
            <Textarea
              id="dialog-template-body"
              rows={4}
              placeholder="このたびはご応募いただきありがとうございます。書類選考の結果…"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>キャンセル</DialogClose>
          <DialogClose render={<Button />}>保存する</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export const dialogDoc: ComponentDoc = {
  name: "dialog",
  title: "Dialog",
  category: "オーバーレイ",
  purpose:
    "画面の操作を一時的に遮って、確認やフォーム入力に集中してもらうためのモーダルダイアログ。ページ遷移せずにその場で完結させたい短いやり取りに向く。jobantenna では求人への応募確認、保存した求人の削除確認、管理画面でのテンプレート作成などに使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "Trigger・Header・Footer を組み合わせた最小構成。キープリストから求人を外す確認のように、キャンセルと実行の二択を提示する場面で使う。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "apply-confirm",
      title: "応募確認",
      description:
        "応募ボタンを押した直後に、応募先の求人サマリーと氏名公開の注意書きを確認させる。本文に bg-muted の求人カードを挟み、誤応募を防ぐ。",
      previewHeight: 480,
      Demo: ApplyConfirmPattern,
    },
    {
      id: "message-template",
      title: "メッセージテンプレート",
      description:
        "管理画面でテンプレートを新規作成するフォームダイアログ。Input と Textarea を本文に置き、保存かキャンセルで閉じる。",
      previewHeight: 560,
      Demo: MessageTemplatePattern,
    },
  ],
}
