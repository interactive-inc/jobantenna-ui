import type { ComponentDoc } from "@/components/catalog/component-doc"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"

const cities = [
  "那覇市",
  "浦添市",
  "宜野湾市",
  "沖縄市",
  "うるま市",
  "名護市",
  "糸満市",
  "宮古島市",
  "石垣市",
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

const employmentTypes = ["正社員", "契約社員", "パート・アルバイト", "派遣社員", "業務委託"]

/**
 * 入力で候補を絞り込みながら1件選ぶ単一選択の基本形
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <span className="text-sm font-medium">勤務地</span>

      <Combobox items={cities}>
        <ComboboxInput placeholder="市区町村を検索" showClear />
        <ComboboxContent>
          <ComboboxEmpty>該当する勤務地がありません</ComboboxEmpty>
          <ComboboxList>
            {(city: string) => (
              <ComboboxItem key={city} value={city}>
                {city}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}

/**
 * 勤務地をエリアごとにグループ化して選ぶ検索条件向けの例
 */
function WorkLocationPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <span className="text-sm font-medium">勤務地（エリア別）</span>

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

      <p className="text-xs text-muted-foreground">
        検索キーワードはグループを横断して絞り込まれます
      </p>
    </div>
  )
}

/**
 * 雇用形態を複数選択してチップで表示する例
 */
function EmploymentTypeChipsPattern() {
  const chipsAnchor = useComboboxAnchor()

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <span className="text-sm font-medium">雇用形態（複数選択）</span>

      <Combobox items={employmentTypes} multiple defaultValue={["正社員"]}>
        <ComboboxChips ref={chipsAnchor}>
          <ComboboxValue>
            {(selectedTypes: string[]) => (
              <>
                {selectedTypes.map((selectedType) => (
                  <ComboboxChip key={selectedType}>{selectedType}</ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="雇用形態を追加" />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={chipsAnchor}>
          <ComboboxEmpty>該当する雇用形態がありません</ComboboxEmpty>
          <ComboboxList>
            {(employmentType: string) => (
              <ComboboxItem key={employmentType} value={employmentType}>
                {employmentType}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>

      <p className="text-xs text-muted-foreground">チップの × で個別に解除できます</p>
    </div>
  )
}

export const comboboxDoc: ComponentDoc = {
  name: "combobox",
  title: "Combobox",
  category: "フォーム",
  purpose:
    "テキスト入力で候補を絞り込みながら選択できる入力コンポーネント。選択肢が多く Select では探しにくい場面で使う。ジョブアンテナでは検索条件の勤務地（那覇市、浦添市など）や職種の選択、雇用形態の複数選択に使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "入力で候補を絞り込みながら1件選ぶ単一選択の基本形。ComboboxInput の showClear で選択を解除するボタンを表示する。",
      previewHeight: 400,
      Demo: BasicPattern,
    },
    {
      id: "work-location",
      title: "勤務地選択",
      description:
        "勤務地を本島南部・中部・北部・離島のエリアごとにグループ化して選ぶ例。ComboboxGroup と ComboboxLabel で区切り、ComboboxCollection でグループ内の候補を描画する。",
      previewHeight: 480,
      Demo: WorkLocationPattern,
    },
    {
      id: "employment-type-chips",
      title: "雇用形態チップ",
      description:
        "雇用形態を複数選択してチップで表示する例。multiple と ComboboxChips を組み合わせ、useComboboxAnchor でポップアップをチップ欄全体にアンカーする。",
      previewHeight: 400,
      Demo: EmploymentTypeChipsPattern,
    },
  ],
}
