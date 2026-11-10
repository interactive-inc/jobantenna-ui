import { useState } from "react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const sourceJobs = ["ホテルの調理スタッフ", "フロントスタッフ"]

function ChooseSourceJob() {
  const [selectedJob, setSelectedJob] = useState<string>()

  return (
    <Dialog>
      <div className="grid justify-items-start gap-2">
        <DialogTrigger render={<Button type="button" variant="secondary" />}>
          求人を選ぶ
        </DialogTrigger>
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {selectedJob}
        </p>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>元にする求人を選ぶ</DialogTitle>
          <DialogDescription>
            選んだ求人はそのまま残り、新しい求人の入力を始めます。
          </DialogDescription>
        </DialogHeader>
        <ul className="grid gap-2">
          {sourceJobs.map((job) => (
            <li key={job}>
              <DialogClose
                render={<Button type="button" variant="secondary" className="w-full justify-start" />}
                onClick={() => setSelectedJob(job)}
              >
                {job}
              </DialogClose>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  )
}

export const dialogDoc: ComponentDoc = {
  name: "dialog",
  title: "ダイアログ（Dialog）",
  category: "オーバーレイ",
  purpose: "元の画面の上で、短い入力や選択を済ませたいときに使います。",
  patterns: [
    {
      id: "basic",
      title: "元にする求人を選ぶ",
      description: "見出しに選ぶ対象を書き、選んだ後に何が起きるかを本文で伝えます。",
      previewHeight: 360,
      showControls: false,
      Demo: ChooseSourceJob,
    },
  ],
  usage: {
    recommended: [
      "元の画面を残したまま、一つの用件を扱う。",
      "編集中の見え方を確かめるときは、表示する範囲を伝え、閉じたあとも未保存の入力を保つ。",
      "保存に失敗したときはダイアログ内に理由を表示し、入力を残す。",
      "閉じたら、ダイアログを開いたボタンにキーボードの操作位置を戻す。",
    ],
    avoid: [
      "入力項目の多い編集を一つのダイアログに詰め込む。",
      "取り消せない操作の影響を確認する場面で使う。その場合は確認ダイアログを使う。",
    ],
  },
}
