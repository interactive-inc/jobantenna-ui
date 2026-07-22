import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  CopyIcon,
  FileTextIcon,
  ImageIcon,
  MessageSquareIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react"

/**
 * ヘッダー・本文・フッター・キャプションを備えた基本の Table
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <Table>
        <TableCaption>直近の応募履歴</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>求人</TableHead>
            <TableHead>勤務地</TableHead>
            <TableHead>雇用形態</TableHead>
            <TableHead className="text-right">月給</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">ホールスタッフ</TableCell>
            <TableCell>那覇市</TableCell>
            <TableCell>正社員</TableCell>
            <TableCell className="text-right">220,000円</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Web エンジニア</TableCell>
            <TableCell>浦添市</TableCell>
            <TableCell>正社員</TableCell>
            <TableCell className="text-right">350,000円</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">受付事務</TableCell>
            <TableCell>宜野湾市</TableCell>
            <TableCell>契約社員</TableCell>
            <TableCell className="text-right">190,000円</TableCell>
          </TableRow>
          <TableRow data-state="selected">
            <TableCell className="font-medium">調理スタッフ</TableCell>
            <TableCell>沖縄市</TableCell>
            <TableCell>アルバイト</TableCell>
            <TableCell className="text-right">180,000円</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>応募件数</TableCell>
            <TableCell className="text-right">4件</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

/**
 * 進捗管理画面の応募者一覧。選考ステータスを Badge、操作をアイコンボタンで並べる
 */
function ApplicantTablePattern() {
  return (
    <div className="w-full max-w-3xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>応募日</TableHead>
            <TableHead>候補者</TableHead>
            <TableHead>応募求人</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead className="text-right">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-muted-foreground">07/09</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar size="sm">
                  <AvatarFallback>比</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium">比嘉 太郎</span>
                  <span className="text-xs text-muted-foreground">28歳・男性・前職: 営業</span>
                </div>
              </div>
            </TableCell>
            <TableCell>フロントエンドエンジニア</TableCell>
            <TableCell>
              <Badge variant="destructive">未選考</Badge>
            </TableCell>
            <TableCell>
              <div className="flex justify-end gap-1">
                <Button variant="ghost" size="icon-sm" aria-label="メッセージ">
                  <MessageSquareIcon />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="履歴書">
                  <FileTextIcon />
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">07/07</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar size="sm">
                  <AvatarFallback>金</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium">金城 花子</span>
                  <span className="text-xs text-muted-foreground">25歳・女性・前職: 販売</span>
                </div>
              </div>
            </TableCell>
            <TableCell>営業・企画営業（法人向け）</TableCell>
            <TableCell>
              <Badge variant="secondary">連絡済</Badge>
            </TableCell>
            <TableCell>
              <div className="flex justify-end gap-1">
                <Button variant="ghost" size="icon-sm" aria-label="メッセージ">
                  <MessageSquareIcon />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="履歴書">
                  <FileTextIcon />
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">07/05</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar size="sm">
                  <AvatarFallback>大</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium">大城 健</span>
                  <span className="text-xs text-muted-foreground">
                    30歳・男性・前職: エンジニア
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>フロントエンドエンジニア</TableCell>
            <TableCell>
              <Badge>採用</Badge>
            </TableCell>
            <TableCell>
              <div className="flex justify-end gap-1">
                <Button variant="ghost" size="icon-sm" aria-label="メッセージ">
                  <MessageSquareIcon />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="履歴書">
                  <FileTextIcon />
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">07/02</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar size="sm">
                  <AvatarFallback>島</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium">島袋 美咲</span>
                  <span className="text-xs text-muted-foreground">26歳・女性・前職: 事務</span>
                </div>
              </div>
            </TableCell>
            <TableCell>調理スタッフ</TableCell>
            <TableCell>
              <Badge variant="outline">不採用</Badge>
            </TableCell>
            <TableCell>
              <div className="flex justify-end gap-1">
                <Button variant="ghost" size="icon-sm" aria-label="メッセージ">
                  <MessageSquareIcon />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="履歴書">
                  <FileTextIcon />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

/**
 * 求人票一覧。サムネと公開状態 Badge、閲覧・応募数の統計、編集・複製・削除の操作を並べる
 */
function JobListTablePattern() {
  return (
    <div className="w-full max-w-3xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>求人票</TableHead>
            <TableHead>状態</TableHead>
            <TableHead className="text-right">閲覧</TableHead>
            <TableHead className="text-right">応募</TableHead>
            <TableHead className="text-right">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-2">
                <span className="flex size-9 shrink-0 items-center justify-center rounded bg-muted">
                  <ImageIcon className="size-4 text-muted-foreground" />
                </span>
                <div className="flex flex-col">
                  <span className="font-medium">フロントエンドエンジニア</span>
                  <span className="text-xs text-muted-foreground">
                    那覇市 ほか2件 / 正社員 / 月給 25万円
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge>掲載中</Badge>
            </TableCell>
            <TableCell className="text-right tabular-nums">1,240</TableCell>
            <TableCell className="text-right tabular-nums">12</TableCell>
            <TableCell>
              <div className="flex justify-end gap-1">
                <Button variant="ghost" size="icon-sm" aria-label="編集">
                  <PencilIcon />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="複製">
                  <CopyIcon />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="削除">
                  <Trash2Icon />
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-2">
                <span className="flex size-9 shrink-0 items-center justify-center rounded bg-muted">
                  <ImageIcon className="size-4 text-muted-foreground" />
                </span>
                <div className="flex flex-col">
                  <span className="font-medium">営業・企画営業（法人向け）</span>
                  <span className="text-xs text-muted-foreground">
                    浦添市 / 正社員 / 月給 28万円
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="outline">公開停止</Badge>
            </TableCell>
            <TableCell className="text-right tabular-nums">860</TableCell>
            <TableCell className="text-right tabular-nums">4</TableCell>
            <TableCell>
              <div className="flex justify-end gap-1">
                <Button variant="ghost" size="icon-sm" aria-label="編集">
                  <PencilIcon />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="複製">
                  <CopyIcon />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="削除">
                  <Trash2Icon />
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-2">
                <span className="flex size-9 shrink-0 items-center justify-center rounded bg-muted">
                  <ImageIcon className="size-4 text-muted-foreground" />
                </span>
                <div className="flex flex-col">
                  <span className="font-medium">調理スタッフ</span>
                  <span className="text-xs text-muted-foreground">
                    沖縄市 / アルバイト / 時給 1,100円
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="outline">Indeed連携</Badge>
            </TableCell>
            <TableCell className="text-right tabular-nums">2,015</TableCell>
            <TableCell className="text-right tabular-nums">31</TableCell>
            <TableCell>
              <div className="flex justify-end gap-1">
                <Button variant="ghost" size="icon-sm" aria-label="編集">
                  <PencilIcon />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="複製">
                  <CopyIcon />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="削除">
                  <Trash2Icon />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export const tableDoc: ComponentDoc = {
  name: "table",
  title: "Table",
  category: "データ表示",
  purpose:
    "行と列で構造化されたデータを一覧表示するコンポーネント。ジョブアンテナでは管理画面の応募者進捗テーブルや求人票一覧など、多数のレコードを比較しながら操作する画面の中核になる。ステータスは Badge、行ごとの操作はアイコンボタンとして各セルに埋め込む。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        'TableHeader / TableBody / TableFooter / TableCaption を組み合わせた基本構成。行に data-state="selected" を付けると選択状態の背景色になり、数値列は text-right で右揃えにする。',
      previewHeight: 400,
      Demo: BasicPattern,
    },
    {
      id: "applicant-management",
      title: "応募者管理",
      description:
        "進捗管理画面の応募者テーブル。候補者セルにアバターとプロフィール、ステータスセルに選考状況の Badge、操作セルにメッセージ・履歴書のアイコンボタンを収める。",
      previewHeight: 400,
      Demo: ApplicantTablePattern,
    },
    {
      id: "job-list",
      title: "求人一覧",
      description:
        "求人票一覧テーブル。サムネ付きのタイトル行に公開状態の Badge（掲載中=塗り、公開停止・Indeed連携=outline）と閲覧・応募の統計、編集・複製・削除の操作を並べる。",
      previewHeight: 400,
      Demo: JobListTablePattern,
    },
  ],
}
