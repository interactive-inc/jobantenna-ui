import { EllipsisIcon } from "lucide-react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function JobListTablePattern() {
  return (
    <Table aria-label="求人票">
      <TableHeader variant="muted">
        <TableRow>
          <TableHead className="text-xs font-bold text-muted-foreground">求人票</TableHead>
          <TableHead className="text-xs font-bold text-muted-foreground">掲載状況</TableHead>
          <TableHead className="text-right text-xs font-bold text-muted-foreground">応募</TableHead>
          <TableHead>
            <span className="sr-only">操作</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <p className="max-w-44 truncate font-bold">海辺のホテルの調理スタッフ</p>
            <p className="text-xs text-muted-foreground">那覇市・正社員</p>
          </TableCell>
          <TableCell>
            <Badge variant="secondary" className="bg-success-muted text-success">掲載中</Badge>
          </TableCell>
          <TableCell className="text-right font-numeric">12</TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger
                aria-label="ほかの操作"
                render={<Button type="button" variant="ghost" size="icon" />}
              >
                <EllipsisIcon aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>複製する</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>公開を止める</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export const tableDoc: ComponentDoc = {
  name: "table",
  title: "Table",
  category: "データ表示",
  purpose: "求人票など、同じ項目を持つデータを行と列で比較するときに使います。",
  patterns: [
    {
      id: "job-list",
      title: "求人票の一覧",
      description: "見出し、求人名と補足、掲載状況、応募数、行の操作を一つの表に並べます。",
      showControls: false,
      previewHeight: 250,
      Demo: JobListTablePattern,
    },
  ],
  usage: {
    recommended: [
      "列見出しは淡い背景に小さめの太字で置く。件数などの数値は Inter で右揃えにする。",
      "長い求人名は一行で省略し、全文は詳細画面で読めるようにする。",
      "よく使う操作は直接押せるようにし、ほかの操作は行の右端の三点メニューにまとめる。",
    ],
    avoid: ["列と列の間に縦罫線を引く。区切りは行の間に入れる。"],
  },
}
