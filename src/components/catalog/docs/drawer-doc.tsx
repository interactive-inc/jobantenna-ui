import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2Icon, ImageIcon, SlidersHorizontalIcon } from "lucide-react"

const occupations = [
  "接客・販売",
  "調理・キッチン",
  "一般事務",
  "ITエンジニア",
  "介護スタッフ",
  "保育士",
  "ドライバー",
  "軽作業・倉庫",
]

type AreaGroup = {
  value: string
  items: ReadonlyArray<string>
}

const areaGroups: ReadonlyArray<AreaGroup> = [
  { value: "本島南部", items: ["那覇市", "糸満市", "豊見城市", "南城市"] },
  { value: "本島中部", items: ["浦添市", "宜野湾市", "沖縄市", "うるま市"] },
  { value: "本島北部", items: ["名護市", "本部町", "今帰仁村"] },
  { value: "離島", items: ["宮古島市", "石垣市", "久米島町"] },
]

/**
 * 下から出る最小構成のドロワー。スワイプハンドル付き
 */
function BasicPattern() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>求人の詳細を見る</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>カフェスタッフ（正社員）</DrawerTitle>
          <DrawerDescription>那覇市牧志 / 月給 20万円〜25万円 / 未経験歓迎</DrawerDescription>
        </DrawerHeader>

        <div className="p-4 text-sm text-muted-foreground">
          国際通り沿いの人気カフェで、接客・ドリンク作りを担当します。研修制度があるため未経験の方も安心してスタートできます。
        </div>

        <DrawerFooter>
          <Button>この求人に応募する</Button>
          <DrawerClose render={<Button variant="outline" />}>閉じる</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

/**
 * 下から出る絞り込み検索ドロワー。フッターに件数付き検索ボタンを固定する
 */
function FilterSearchPattern() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        <SlidersHorizontalIcon />
        絞り込み
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>絞り込み検索</DrawerTitle>
          <DrawerDescription>条件を指定して求人を絞り込めます</DrawerDescription>
        </DrawerHeader>

        <div className="flex min-h-0 flex-col gap-4 overflow-y-auto p-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="filter-keyword">キーワード</Label>
            <Input id="filter-keyword" placeholder="職種名や仕事内容などを入力" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">雇用形態</span>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="filter-fulltime" defaultChecked />
                <Label htmlFor="filter-fulltime">正社員</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="filter-dispatch" />
                <Label htmlFor="filter-dispatch">派遣社員</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="filter-parttime" />
                <Label htmlFor="filter-parttime">アルバイト</Label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">勤務地</span>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="filter-naha" defaultChecked />
                <Label htmlFor="filter-naha">那覇市</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="filter-urasoe" />
                <Label htmlFor="filter-urasoe">浦添市</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="filter-ginowan" />
                <Label htmlFor="filter-ginowan">宜野湾市</Label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">こだわり条件</span>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="filter-web-resume" />
                <Label htmlFor="filter-web-resume">Web履歴書OK</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="filter-inexperienced" />
                <Label htmlFor="filter-inexperienced">未経験歓迎</Label>
              </div>
            </div>
          </div>
        </div>

        <DrawerFooter>
          <Button>128件 検索する</Button>
          <DrawerClose render={<Button variant="secondary" />}>すべてクリア</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

/**
 * 右から出る求人詳細ドロワー。一覧の文脈を保ったまま詳細を確認して応募できる
 */
function JobDetailPattern() {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>求人詳細を見る</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>フロントエンドエンジニア</DrawerTitle>
          <DrawerDescription>【未経験歓迎・在宅可】自社求人サービスの画面開発</DrawerDescription>
        </DrawerHeader>

        <div className="flex min-h-0 flex-col gap-4 overflow-y-auto p-4">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-md bg-muted">
              <Building2Icon className="size-4 text-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">株式会社サンプル</span>
          </div>

          <div className="flex h-32 shrink-0 items-center justify-center rounded-md bg-muted">
            <ImageIcon className="size-8 text-muted-foreground" />
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge>新卒採用</Badge>
            <Badge variant="secondary">Web履歴書OK</Badge>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">勤務地</span>
              <span>那覇市</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">雇用形態</span>
              <span>正社員</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">給与</span>
              <span>月給 200,000〜300,000円</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">最終更新</span>
              <span>本日</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            React / TypeScript
            を用いた自社求人サービスの画面実装を担当します。デザイナーと連携しながら UI
            コンポーネントの設計・開発を進めます。
          </p>
        </div>

        <DrawerFooter>
          <Button>応募する</Button>
          <DrawerClose render={<Button variant="outline" />}>閉じる</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

/**
 * ドロワーの上に Dialog を重ねて開くパターン。フッターの応募ボタンから応募確認ダイアログを開く
 */
function ApplyConfirmInDrawerPattern() {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>求人詳細を見る</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>フロントエンドエンジニア</DrawerTitle>
          <DrawerDescription>【未経験歓迎・在宅可】自社求人サービスの画面開発</DrawerDescription>
        </DrawerHeader>

        <div className="flex min-h-0 flex-col gap-4 overflow-y-auto p-4">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-md bg-muted">
              <Building2Icon className="size-4 text-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">株式会社サンプル</span>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">勤務地</span>
              <span>那覇市</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">雇用形態</span>
              <span>正社員</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">給与</span>
              <span>月給 200,000〜300,000円</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            React / TypeScript
            を用いた自社求人サービスの画面実装を担当します。デザイナーと連携しながら UI
            コンポーネントの設計・開発を進めます。
          </p>
        </div>

        <DrawerFooter>
          <Dialog>
            <DialogTrigger render={<Button />}>応募する</DialogTrigger>
            {/* ネストされたダイアログの Backdrop は Base UI がデフォルトで描画しないため forceRender で強制する */}
            <DialogPortal>
              <DialogOverlay forceRender />
            </DialogPortal>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>応募内容の確認</DialogTitle>
                <DialogDescription>
                  応募する求人を確認の上、「応募を完了する」を押してください。
                </DialogDescription>
              </DialogHeader>
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
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>キャンセル</DialogClose>
                <DialogClose render={<Button />}>応募を完了する</DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <DrawerClose render={<Button variant="outline" />}>閉じる</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

/**
 * 下から出る希望条件の登録フォーム。Combobox の候補リストはドロワーの上に重なって表示される
 */
function DesiredConditionsFormPattern() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>希望条件を編集</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>希望条件の登録</DrawerTitle>
          <DrawerDescription>条件に合う新着求人をお知らせします</DrawerDescription>
        </DrawerHeader>

        <div className="flex min-h-0 flex-col gap-4 overflow-y-auto p-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">職種</span>
            <Combobox items={occupations}>
              <ComboboxInput placeholder="職種を検索" showClear />
              <ComboboxContent>
                <ComboboxEmpty>該当する職種がありません</ComboboxEmpty>
                <ComboboxList>
                  {(occupation: string) => (
                    <ComboboxItem key={occupation} value={occupation}>
                      {occupation}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">勤務地</span>
            <Combobox items={areaGroups}>
              <ComboboxInput placeholder="市区町村を検索" showClear />
              <ComboboxContent>
                <ComboboxEmpty>該当する勤務地がありません</ComboboxEmpty>
                <ComboboxList>
                  {(areaGroup: AreaGroup) => (
                    <ComboboxGroup key={areaGroup.value} items={areaGroup.items}>
                      <ComboboxLabel>{areaGroup.value}</ComboboxLabel>
                      <ComboboxCollection>
                        {(city: string) => (
                          <ComboboxItem key={city} value={city}>
                            {city}
                          </ComboboxItem>
                        )}
                      </ComboboxCollection>
                    </ComboboxGroup>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="desired-salary">希望給与（月給）</Label>
            <Input id="desired-salary" placeholder="例: 200,000円以上" />
          </div>
        </div>

        <DrawerFooter>
          <Button>保存する</Button>
          <DrawerClose render={<Button variant="outline" />}>キャンセル</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export const drawerDoc: ComponentDoc = {
  name: "drawer",
  title: "Drawer",
  category: "オーバーレイ",
  purpose:
    "画面の端からスライドインするパネルです。Dialog より多い情報量や操作を、元の画面の文脈を保ったまま重ねて表示したい場面で使います。ジョブアンテナでは求人一覧の絞り込み検索や、一覧から開く求人詳細のプレビューに使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "下からスライドインする最小構成です。showSwipeHandle でスワイプハンドルを表示し、モバイルではドラッグでも閉じられます。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "filter-search",
      title: "絞り込み検索",
      description:
        "求人一覧の絞り込み条件を下からのドロワーにまとめます。条件リストはスクロールさせ、件数付きの検索ボタンとクリアを DrawerFooter に固定します。",
      previewHeight: 560,
      Demo: FilterSearchPattern,
    },
    {
      id: "job-detail",
      title: "求人詳細",
      description:
        'swipeDirection="right" で右からスライドインする求人詳細です。一覧に戻りやすい形で勤務地・給与などの概要を確認し、そのまま応募に進めます。',
      previewHeight: 480,
      Demo: JobDetailPattern,
    },
    {
      id: "dialog-in-drawer",
      title: "ドロワー内ダイアログ",
      description:
        "求人詳細ドロワーの「応募する」から応募確認 Dialog を重ねて開きます。Dialog はドロワーの上にレイヤーされ、閉じたあともドロワーは開いたままです。ネストされた Dialog の Backdrop は Base UI がデフォルトで描画しないため、DialogOverlay の forceRender で表示しています。",
      previewHeight: 480,
      Demo: ApplyConfirmInDrawerPattern,
    },
    {
      id: "form-in-drawer",
      title: "ドロワー内フォーム",
      description:
        "マイページの希望条件編集を下からのドロワーで行います。職種と勤務地は Combobox で検索しながら選べ、候補リストはドロワーの上に重なって表示されます。保存ボタンは DrawerFooter に固定します。",
      previewHeight: 560,
      Demo: DesiredConditionsFormPattern,
    },
  ],
}
