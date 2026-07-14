import type { ComponentDoc } from "@/components/catalog/component-doc"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { GridIcon, LayoutListIcon, ListIcon, MapPinIcon } from "lucide-react"

/**
 * 単一選択・複数選択・outline・spacing 0 の基本バリアント一覧
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">雇用形態（単一選択）</p>

        <ToggleGroup defaultValue={["fulltime"]}>
          <ToggleGroupItem value="fulltime">正社員</ToggleGroupItem>
          <ToggleGroupItem value="contract">契約社員</ToggleGroupItem>
          <ToggleGroupItem value="parttime">アルバイト</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">勤務地（複数選択・outline）</p>

        <ToggleGroup multiple variant="outline" defaultValue={["naha", "ginowan"]}>
          <ToggleGroupItem value="naha">那覇市</ToggleGroupItem>
          <ToggleGroupItem value="ginowan">宜野湾市</ToggleGroupItem>
          <ToggleGroupItem value="okinawa">沖縄市</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">表示切替（spacing 0・sm）</p>

        <ToggleGroup variant="outline" size="sm" spacing={0} defaultValue={["list"]}>
          <ToggleGroupItem value="list" aria-label="リスト表示">
            <ListIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="grid" aria-label="グリッド表示">
            <GridIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="map" aria-label="地図表示">
            <MapPinIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}

/**
 * 検索結果の表示形式をカード/リスト/地図で切り替えるツールバー
 */
function ViewSwitchPattern() {
  return (
    <div className="flex w-full max-w-md items-center justify-between gap-2 rounded-lg border p-2">
      <span className="text-sm text-muted-foreground">128件の求人</span>

      <ToggleGroup variant="outline" size="sm" spacing={0} defaultValue={["card"]}>
        <ToggleGroupItem value="card" aria-label="カード表示">
          <LayoutListIcon />
          カード
        </ToggleGroupItem>
        <ToggleGroupItem value="list" aria-label="リスト表示">
          <ListIcon />
          リスト
        </ToggleGroupItem>
        <ToggleGroupItem value="map" aria-label="地図表示">
          <MapPinIcon />
          地図
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

/**
 * 検索条件で雇用形態を複数選択するフィルタ
 */
function EmploymentTypePattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <p className="text-sm font-medium">雇用形態</p>

      <ToggleGroup
        multiple
        variant="outline"
        defaultValue={["fulltime", "dispatch"]}
        className="flex-wrap"
      >
        <ToggleGroupItem value="fulltime">正社員</ToggleGroupItem>
        <ToggleGroupItem value="contract">契約社員</ToggleGroupItem>
        <ToggleGroupItem value="dispatch">派遣社員</ToggleGroupItem>
        <ToggleGroupItem value="parttime">アルバイト</ToggleGroupItem>
        <ToggleGroupItem value="newgrad">新卒採用</ToggleGroupItem>
      </ToggleGroup>

      <p className="text-xs text-muted-foreground">複数選択できます</p>
    </div>
  )
}

/**
 * 求人フォームで給与種別を単一選択するセグメント
 */
function SalaryTypePattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <p className="text-sm font-medium">給与種別</p>

      <ToggleGroup variant="outline" spacing={0} defaultValue={["monthly"]}>
        <ToggleGroupItem value="monthly">月給</ToggleGroupItem>
        <ToggleGroupItem value="daily">日給</ToggleGroupItem>
        <ToggleGroupItem value="hourly">時給</ToggleGroupItem>
        <ToggleGroupItem value="annual">年俸</ToggleGroupItem>
      </ToggleGroup>

      <p className="text-xs text-muted-foreground">例: 月給 200,000〜350,000円</p>
    </div>
  )
}

export const toggleGroupDoc: ComponentDoc = {
  name: "toggle-group",
  title: "Toggle Group",
  category: "アクション",
  purpose:
    "複数のトグルボタンを1つのグループにまとめ、排他的な単一選択（multiple なし）または複数選択（multiple）を切り替えられるコンポーネントです。jobantenna では検索結果のカード/リスト/地図の表示切替、検索条件での雇用形態の複数選択、求人フォームの給与種別の選択に使います。value / defaultValue は配列で扱い、spacing={0} で角丸を共有したセグメント表示になります。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "単一選択（default）、複数選択（multiple・outline）、アイコンのみの表示切替（spacing 0・sm）という3構成です。defaultValue に配列を渡して非制御で初期選択を決めます。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "view-switch",
      title: "表示切替",
      description:
        "検索結果の表示形式を切り替えるツールバーです。spacing={0} でボタンを連結したセグメント表示にし、単一選択で常にどれか1つが選ばれた状態を保ちます。",
      previewHeight: null,
      Demo: ViewSwitchPattern,
    },
    {
      id: "employment-type",
      title: "雇用形態",
      description:
        "検索条件で雇用形態を絞り込むフィルタです。multiple で複数選択にし、flex-wrap で項目が増えても折り返して並びます。",
      previewHeight: null,
      Demo: EmploymentTypePattern,
    },
    {
      id: "salary-type",
      title: "給与種別",
      description:
        "求人フォームで給与種別を1つ選ぶセグメントです。排他的な単一選択なので multiple を付けず、spacing={0} でまとまりを表します。",
      previewHeight: null,
      Demo: SalaryTypePattern,
    },
  ],
}
