import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Toggle } from "@/components/ui/toggle"
import {
  BellIcon,
  BookmarkIcon,
  Building2Icon,
  HeartIcon,
  ImageIcon,
  MapPinIcon,
  StarIcon,
} from "lucide-react"

/**
 * variant と size の各バリアント、pressed / disabled の状態一覧
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle defaultPressed>
          <HeartIcon data-icon="inline-start" />
          気になる
        </Toggle>
        <Toggle variant="outline">
          <BookmarkIcon data-icon="inline-start" />
          キープ
        </Toggle>
        <Toggle variant="outline">
          <BellIcon data-icon="inline-start" />
          新着通知
        </Toggle>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Toggle size="sm" variant="outline">
          正社員
        </Toggle>
        <Toggle size="default" variant="outline" defaultPressed>
          那覇市
        </Toggle>
        <Toggle size="lg" variant="outline">
          月給25万円以上
        </Toggle>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Toggle disabled>
          <HeartIcon data-icon="inline-start" />
          気になる
        </Toggle>
        <Toggle variant="outline" disabled>
          募集終了
        </Toggle>
      </div>
    </div>
  )
}

/**
 * 求人カードのお気に入り。星アイコンだけのトグルで気になる求人を保存する
 */
function FavoritePattern() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border">
      <div className="relative flex h-32 items-center justify-center bg-muted">
        <ImageIcon className="size-8 text-muted-foreground" />
        <Toggle
          variant="outline"
          size="sm"
          defaultPressed
          aria-label="お気に入りに追加"
          className="absolute top-2 right-2 bg-background"
        >
          <StarIcon className="group-aria-pressed/toggle:fill-current" />
        </Toggle>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <div className="flex size-4 shrink-0 items-center justify-center rounded bg-muted">
            <Building2Icon className="size-3 text-muted-foreground" />
          </div>
          <span className="truncate text-xs text-muted-foreground">株式会社サンプル</span>
        </div>
        <p className="text-sm font-medium">フロントエンドエンジニア｜自社サービスの UI 開発</p>
        <p className="text-xs text-muted-foreground">那覇市 / 正社員 / 月給 200,000〜300,000円</p>
      </div>
    </div>
  )
}

/**
 * 検索条件のこだわりフィルタ。各トグルを独立させて複数条件を絞り込む
 */
function FilterPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 rounded-lg border p-4">
      <span className="text-sm font-medium">こだわり条件</span>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">雇用形態</span>
        <div className="flex flex-wrap gap-2">
          <Toggle variant="outline" size="sm" defaultPressed>
            正社員
          </Toggle>
          <Toggle variant="outline" size="sm">
            契約社員
          </Toggle>
          <Toggle variant="outline" size="sm">
            派遣社員
          </Toggle>
          <Toggle variant="outline" size="sm">
            アルバイト
          </Toggle>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">勤務地</span>
        <div className="flex flex-wrap gap-2">
          <Toggle variant="outline" size="sm" defaultPressed>
            <MapPinIcon data-icon="inline-start" />
            那覇市
          </Toggle>
          <Toggle variant="outline" size="sm">
            <MapPinIcon data-icon="inline-start" />
            浦添市
          </Toggle>
          <Toggle variant="outline" size="sm">
            <MapPinIcon data-icon="inline-start" />
            宜野湾市
          </Toggle>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">こだわり</span>
        <div className="flex flex-wrap gap-2">
          <Toggle variant="outline" size="sm">
            未経験歓迎
          </Toggle>
          <Toggle variant="outline" size="sm" defaultPressed>
            Web履歴書OK
          </Toggle>
          <Toggle variant="outline" size="sm">
            土日休み
          </Toggle>
          <Toggle variant="outline" size="sm">
            在宅可
          </Toggle>
        </div>
      </div>
    </div>
  )
}

export const toggleDoc: ComponentDoc = {
  name: "toggle",
  title: "Toggle",
  category: "アクション",
  purpose:
    "オンとオフの二値を1つのボタンで切り替えるコンポーネント。@base-ui/react ベースで defaultPressed による非制御利用に対応し、押下状態は aria-pressed の背景色で示す。ジョブアンテナでは求人カードのお気に入り（星）、検索条件のこだわりフィルタなど、その場で状態が反映される単体トグルに使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "default / outline の2バリアントと sm / default / lg の3サイズ。defaultPressed で初期押下、disabled で無効化する。data-icon 属性でアイコンの余白を調整できる。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "favorite",
      title: "お気に入り",
      description:
        "求人カードの右上に星アイコンだけのトグルを重ねる例。押下すると星が塗りつぶされる。テキストがないので aria-label で名前を補う。",
      previewHeight: 400,
      Demo: FavoritePattern,
    },
    {
      id: "filter",
      title: "こだわりフィルタ",
      description:
        "検索条件で雇用形態・勤務地・こだわりを絞り込む例。各トグルを独立させることで複数条件を同時に選べる。選択中は背景色で強調される。",
      previewHeight: null,
      Demo: FilterPattern,
    },
  ],
}
