import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Building2Icon, ChevronDownIcon, ChevronsUpDownIcon, ImageIcon } from "lucide-react"

/**
 * デフォルト閉とデフォルト開（defaultOpen）の2つの開閉パターン
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Collapsible className="flex flex-col gap-2 rounded-md border p-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium">那覇市の正社員求人（12件）</span>
          <CollapsibleTrigger
            render={
              <Button variant="ghost" size="icon">
                <ChevronsUpDownIcon />
                <span className="sr-only">開閉</span>
              </Button>
            }
          />
        </div>

        <CollapsibleContent className="flex flex-col gap-2">
          <div className="rounded-md border px-4 py-2 text-sm">事務スタッフ / 月給 22 万円〜</div>
          <div className="rounded-md border px-4 py-2 text-sm">販売スタッフ / 月給 20 万円〜</div>
          <div className="rounded-md border px-4 py-2 text-sm">調理スタッフ / 月給 23 万円〜</div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen className="flex flex-col gap-2 rounded-md border p-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium">応募時の注意事項</span>
          <CollapsibleTrigger
            render={
              <Button variant="ghost" size="icon">
                <ChevronsUpDownIcon />
                <span className="sr-only">開閉</span>
              </Button>
            }
          />
        </div>

        <CollapsibleContent className="flex flex-col gap-2 text-sm text-muted-foreground">
          <p>応募後のキャンセルはマイページから行えます。</p>
          <p>面接日程は企業からの連絡をお待ちください。</p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

/**
 * 検索パネルの詳細条件（雇用形態・こだわり条件）をまとめて開閉する
 */
function SearchFilterPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 rounded-md border p-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="search-keyword">キーワード</Label>
        <Input id="search-keyword" placeholder="職種名や仕事内容などを入力" />
      </div>

      <Collapsible defaultOpen className="flex flex-col gap-2">
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="sm" className="justify-between">
              詳細条件
              <ChevronsUpDownIcon />
            </Button>
          }
        />

        <CollapsibleContent className="flex flex-col gap-4 px-2">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">雇用形態</span>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="employment-fulltime" defaultChecked />
                <Label htmlFor="employment-fulltime">正社員</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="employment-contract" />
                <Label htmlFor="employment-contract">契約社員</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="employment-dispatch" />
                <Label htmlFor="employment-dispatch">派遣社員</Label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">こだわり条件</span>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="preference-resume" defaultChecked />
                <Label htmlFor="preference-resume">Web履歴書OK</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="preference-inexperienced" />
                <Label htmlFor="preference-inexperienced">未経験歓迎</Label>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      <div className="flex items-center justify-between gap-2">
        <Button variant="ghost" size="sm">
          すべてクリア
        </Button>
        <Button>128件 検索する</Button>
      </div>
    </div>
  )
}

/**
 * LARGE 求人カードの仕事内容を「詳しく見る」で展開する
 */
function JobCardPattern() {
  return (
    <div className="w-full max-w-md">
      <Collapsible className="flex flex-col gap-4 rounded-md border p-4">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-md bg-muted">
            <Building2Icon className="size-4 text-muted-foreground" />
          </div>
          <span className="text-sm text-muted-foreground">株式会社サンプル</span>
        </div>

        <div className="flex h-32 items-center justify-center rounded-md bg-muted">
          <ImageIcon className="size-8 text-muted-foreground" />
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-medium">フロントエンドエンジニア</span>
          <span className="text-sm text-muted-foreground">
            【未経験歓迎・在宅可】自社求人サービスの画面開発
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span>那覇市</span>
          <span>正社員</span>
          <span>月給 200,000〜300,000円</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge>新卒採用</Badge>
          <Badge variant="secondary">Web履歴書OK</Badge>
        </div>

        <CollapsibleContent className="flex flex-col gap-2 text-sm text-muted-foreground">
          <p>React / TypeScript を用いた自社求人サービスの画面実装を担当します。</p>
          <p>
            デザイナーと連携しながら UI
            コンポーネントの設計・開発を進めます。リモートワーク可、フレックスタイム制です。
          </p>
        </CollapsibleContent>

        <CollapsibleTrigger
          render={
            <Button variant="outline" className="w-full">
              詳しく見る
              <ChevronDownIcon className="transition-transform group-aria-expanded/button:rotate-180" />
            </Button>
          }
        />
      </Collapsible>
    </div>
  )
}

export const collapsibleDoc: ComponentDoc = {
  name: "collapsible",
  title: "Collapsible",
  category: "レイアウト",
  purpose:
    "1つの領域をトリガーで開閉するシンプルな折りたたみ。Accordion と違い単独のセクションを対象に、補足情報や詳細条件を必要なときだけ表示したい場面で使う。jobantenna では検索パネルの詳細条件や、求人カードの仕事内容の展開に使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "見出し+開閉ボタンの最小構成。上はデフォルト閉、下は defaultOpen で最初から開いた状態にしている。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "search-filter",
      title: "検索条件",
      description:
        "キーワード欄は常時表示し、雇用形態やこだわり条件などの詳細条件を Collapsible にまとめた検索パネル。条件が多くても初期表示をコンパクトに保てる。",
      previewHeight: 560,
      Demo: SearchFilterPattern,
    },
    {
      id: "job-card",
      title: "求人カード",
      description:
        "LARGE サイズの求人カードで、仕事内容を「詳しく見る」ボタンで展開する。一覧ではカードを短く保ち、興味を持った求人だけその場で詳細を読める。",
      previewHeight: 560,
      Demo: JobCardPattern,
    },
  ],
}
