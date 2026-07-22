import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import { FileTextIcon, MessageSquareIcon, UserIcon } from "lucide-react"

/**
 * 横分割2ペインの最小構成。defaultSize と minSize はパーセント文字列で指定する
 */
function BasicPattern() {
  return (
    <div className="w-full max-w-2xl">
      <ResizablePanelGroup className="h-48 rounded-md border">
        <ResizablePanel defaultSize="35%" minSize="20%">
          <div className="flex h-full flex-col gap-2 p-4">
            <span className="text-sm font-medium">求人一覧</span>
            <span className="text-sm text-muted-foreground">那覇市の正社員求人 24件</span>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize="65%" minSize="30%">
          <div className="flex h-full flex-col gap-2 p-4">
            <span className="text-sm font-medium">求人詳細</span>
            <span className="text-sm text-muted-foreground">
              ホールスタッフ / 月給 22万円〜 / 那覇市久茂地
            </span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

/**
 * orientation="vertical" による縦分割
 */
function VerticalPattern() {
  return (
    <div className="w-full max-w-2xl">
      <ResizablePanelGroup orientation="vertical" className="h-64 rounded-md border">
        <ResizablePanel defaultSize="40%" minSize="25%">
          <div className="flex h-full flex-col gap-2 p-4">
            <span className="text-sm font-medium">仕事内容</span>
            <span className="text-sm text-muted-foreground">
              接客・配膳・レジ対応をお任せします
            </span>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize="60%" minSize="25%">
          <div className="flex h-full flex-col gap-2 p-4">
            <span className="text-sm font-medium">応募条件</span>
            <span className="text-sm text-muted-foreground">未経験歓迎 / 学歴不問 / 週休2日制</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

/**
 * 管理画面の応募者リスト+詳細を固定高の2ペインで並べる
 */
function ApplicantListDetailPattern() {
  const applicants = [
    { name: "比嘉 直樹", profile: "28歳・男性・前職 営業", status: "未選考", isSelected: true },
    { name: "金城 美咲", profile: "31歳・女性・前職 販売", status: "保留中", isSelected: false },
    { name: "大城 健", profile: "25歳・男性・前職 調理", status: "連絡済", isSelected: false },
  ]

  return (
    <div className="w-full max-w-2xl">
      <ResizablePanelGroup className="h-96 rounded-md border">
        <ResizablePanel defaultSize="40%" minSize="25%">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-2 p-4">
              <span className="text-sm font-medium">応募者</span>
              <span className="text-sm text-muted-foreground">3件</span>
            </div>

            <Separator />

            <div className="flex flex-col overflow-auto">
              {applicants.map((applicant) => (
                <div
                  key={applicant.name}
                  className={
                    applicant.isSelected
                      ? "flex items-center gap-2 bg-accent px-4 py-2"
                      : "flex items-center gap-2 px-4 py-2"
                  }
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
                    <UserIcon className="size-4 text-muted-foreground" />
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-medium">{applicant.name}</span>
                    <span className="truncate text-xs text-muted-foreground">
                      {applicant.profile}
                    </span>
                  </div>
                  <Badge variant="secondary" className="ml-auto shrink-0">
                    {applicant.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize="60%" minSize="35%">
          <div className="flex h-full flex-col gap-4 overflow-auto p-4">
            <div className="flex items-center gap-2">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
                <UserIcon className="size-4 text-muted-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">比嘉 直樹</span>
                <span className="text-xs text-muted-foreground">28歳・男性・前職 営業</span>
              </div>
              <Badge className="ml-auto">未選考</Badge>
            </div>

            <Separator />

            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">応募求人</span>
                <span>営業・企画営業（法人向け）</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">企業</span>
                <span>株式会社サンプル</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">応募日</span>
                <span>本日</span>
              </div>
            </div>

            <div className="mt-auto flex gap-2">
              <Button size="sm" className="flex-1">
                <MessageSquareIcon />
                メッセージ
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                <FileTextIcon />
                履歴書
              </Button>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export const resizableDoc: ComponentDoc = {
  name: "resizable",
  title: "Resizable",
  category: "レイアウト",
  purpose:
    "ハンドルをドラッグして隣り合うペインの幅や高さを調整できる分割レイアウトです。一覧と詳細を同時に見せつつ、ユーザーが自分の作業に合わせて配分を変えられる画面で使います。ジョブアンテナでは管理画面の応募者進捗管理やメッセージ画面など、一覧+詳細の2ペイン構成に使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "横分割2ペインの最小構成です。defaultSize / minSize はパーセント文字列（数値はピクセル扱い）で指定し、withHandle でつまみを表示します。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "vertical",
      title: "縦分割",
      description:
        'ResizablePanelGroup に orientation="vertical" を指定した上下分割です。仕事内容と応募条件のように、長さの読めない2つのテキスト領域を配分調整したいときに使います。',
      previewHeight: null,
      Demo: VerticalPattern,
    },
    {
      id: "applicant-list-detail",
      title: "応募者一覧+詳細",
      description:
        "管理画面の進捗管理を想定した固定高の2ペインです。左に応募者リスト、右に選択中の候補者詳細を置き、リストの情報量に応じて境界をドラッグで調整できます。",
      previewHeight: 480,
      Demo: ApplicantListDetailPattern,
    },
  ],
}
