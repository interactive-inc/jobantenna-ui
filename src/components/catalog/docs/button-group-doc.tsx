import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"
import {
  ArrowUpDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  MapPinIcon,
  SearchIcon,
} from "lucide-react"

/**
 * 横並び・ラベル付き・縦並びの基本的なボタングループ
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline">応募する</Button>
        <Button variant="outline">保存</Button>
        <Button variant="outline">共有</Button>
      </ButtonGroup>

      <ButtonGroup>
        <ButtonGroupText>
          <MapPinIcon />
          那覇市
        </ButtonGroupText>
        <Button variant="outline">
          <SearchIcon />
          求人を探す
        </Button>
      </ButtonGroup>

      <ButtonGroup orientation="vertical" className="w-40">
        <Button variant="outline">正社員</Button>
        <Button variant="outline">契約社員</Button>
        <Button variant="outline">アルバイト</Button>
      </ButtonGroup>
    </div>
  )
}

/**
 * 検索結果の並び替えを切り替えるボタングループ
 */
function SortPattern() {
  return (
    <ButtonGroup>
      <ButtonGroupText>
        <ArrowUpDownIcon />
        並び替え
      </ButtonGroupText>
      <Button variant="secondary">おすすめ</Button>
      <Button variant="outline">新着</Button>
      <Button variant="outline">給与が高い順</Button>
    </ButtonGroup>
  )
}

/**
 * 検索結果のページ送りを表すボタングループ
 */
function PaginationPattern() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="icon" disabled aria-label="前のページ">
        <ChevronLeftIcon />
      </Button>
      <Button variant="secondary" size="icon" aria-current="page">
        1
      </Button>
      <Button variant="outline" size="icon">
        2
      </Button>
      <Button variant="outline" size="icon">
        3
      </Button>
      <ButtonGroupText>…</ButtonGroupText>
      <Button variant="outline" size="icon">
        12
      </Button>
      <Button variant="outline" size="icon" aria-label="次のページ">
        <ChevronRightIcon />
      </Button>
    </ButtonGroup>
  )
}

/**
 * 求人カードの応募といいかも！をまとめたスプリットボタン
 */
function JobCardActionsPattern() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button>応募する</Button>
        <ButtonGroupSeparator />
        <Button size="icon" aria-label="いいかも！を送る">
          <HeartIcon />
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button disabled>応募済み</Button>
        <ButtonGroupSeparator />
        <Button size="icon" disabled aria-label="いいかも！送信済み">
          <HeartIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}

export const buttonGroupDoc: ComponentDoc = {
  name: "button-group",
  title: "Button Group",
  category: "アクション",
  purpose:
    "関連する複数のボタンを角丸を共有するひとかたまりにまとめ、操作の関係性を視覚的に示すコンポーネントです。jobantenna では検索結果の並び替え（新着/おすすめ）やページ送り、求人カードの応募＋いいかも！のようなスプリットボタンに使います。ButtonGroupText でラベルを、ButtonGroupSeparator で区切り線を差し込めます。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        'outline ボタンの横並び、ButtonGroupText によるラベル付き、orientation="vertical" の縦並びという基本の3構成です。',
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "sort",
      title: "並び替え",
      description:
        "検索結果の並び替え切り替えです。選択中の項目を secondary、それ以外を outline にして現在の並び順を示します。",
      previewHeight: null,
      Demo: SortPattern,
    },
    {
      id: "pagination",
      title: "ページ送り",
      description:
        "検索結果のページ送りです。現在ページを secondary + aria-current で示し、省略は ButtonGroupText、端では前後ボタンを disabled にします。",
      previewHeight: null,
      Demo: PaginationPattern,
    },
    {
      id: "job-card-actions",
      title: "求人カードの操作",
      description:
        "応募するといいかも！を ButtonGroupSeparator で仕切ったスプリットボタンです。応募後は両方 disabled にして応募済みを表します。",
      previewHeight: null,
      Demo: JobCardActionsPattern,
    },
  ],
}
