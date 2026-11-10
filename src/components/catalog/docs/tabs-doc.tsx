import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function JobStatusPattern() {
  return (
    <Tabs defaultValue="published" className="w-full max-w-md">
      <TabsList variant="line" aria-label="求人票の掲載状況">
        <TabsTrigger value="published">
          掲載中 <span className="font-numeric text-muted-foreground">2</span>
        </TabsTrigger>
        <TabsTrigger value="draft">
          下書き <span className="font-numeric text-muted-foreground">1</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="published">
        <ul className="divide-y">
          <li className="py-3">調理スタッフ</li>
          <li className="py-3">フロントスタッフ</li>
        </ul>
      </TabsContent>
      <TabsContent value="draft">
        <ul>
          <li className="py-3">ホールスタッフ</li>
        </ul>
      </TabsContent>
    </Tabs>
  )
}

export const tabsDoc: ComponentDoc = {
  name: "tabs",
  title: "Tabs",
  category: "ナビゲーション",
  purpose: "一覧を種類で分けて見せるときに使います。現在のタブは太字と黄色の下線で示します。",
  patterns: [
    {
      id: "job-status",
      title: "求人票の掲載状況",
      description: "掲載中と下書きを切り替えます。件数は項目名の横に表示します。",
      showControls: false,
      previewHeight: null,
      Demo: JobStatusPattern,
    },
  ],
  usage: {
    recommended: [
      "タブの下に罫線を一本引き、タブ同士の間は24px空ける。",
      "件数は灰色の Inter で表示する。新着の有無だけを示す場合は青い丸を使う。",
    ],
    avoid: [
      "タブを切り替えるたびに一覧の項目名や列を変える。",
      "同じ一覧の見え方だけを変える操作に使う。その場合はセグメントを使う。",
    ],
  },
}
