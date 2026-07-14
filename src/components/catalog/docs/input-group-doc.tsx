import type { ComponentDoc } from "@/components/catalog/component-doc"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Building2Icon, MapPinIcon, SearchIcon, SendIcon, XIcon } from "lucide-react"

/**
 * アイコン・ボタン・テキストの各アドオンを inline に配置した基本形
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="職種名や仕事内容などを入力" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <MapPinIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="勤務地を入力" defaultValue="那覇市" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">検索</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>月給</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="200000" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>円以上</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

/**
 * 求人検索のキーワード入力。入力値があるときだけクリアボタンを表示する
 */
function SearchPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="職種名や仕事内容などを入力"
          defaultValue="フロントエンドエンジニア"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="キーワードをクリア">
            <XIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="職種名や仕事内容などを入力" />
      </InputGroup>
    </div>
  )
}

/**
 * 希望年収の下限・上限を単位「万円」付きで入力する範囲指定
 */
function SalaryPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <p className="text-sm font-medium">希望年収</p>

      <div className="flex items-center gap-2">
        <InputGroup>
          <InputGroupInput type="number" placeholder="150" defaultValue="300" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>万円</InputGroupText>
          </InputGroupAddon>
        </InputGroup>

        <span className="text-sm text-muted-foreground">〜</span>

        <InputGroup>
          <InputGroupInput type="number" placeholder="1000" defaultValue="500" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>万円</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  )
}

/**
 * 企業へのメッセージ入力。宛先を block-start、文字数と送信を block-end に置く
 */
function MessagePattern() {
  return (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText>
            <Building2Icon />
            株式会社サンプル 採用担当
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="メッセージを入力" rows={4} />
        <InputGroupAddon align="block-end">
          <InputGroupText>500文字まで</InputGroupText>
          <InputGroupButton variant="default" className="ml-auto">
            <SendIcon />
            送信
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export const inputGroupDoc: ComponentDoc = {
  name: "input-group",
  title: "Input Group",
  category: "フォーム",
  purpose:
    "入力欄の前後にアイコン・単位テキスト・ボタンなどのアドオンを組み合わせて、ひとつの入力部品として見せるコンポーネントです。InputGroupAddon の align で inline（左右）と block（上下）の配置を切り替えられます。jobantenna では求人検索のキーワード入力、希望年収の単位付き入力、企業へのメッセージ入力に使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "アイコン・ボタン・テキストの各アドオンを inline-start / inline-end に配置した基本の3構成です。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "search",
      title: "求人検索",
      description:
        "検索ボックスです。inline-start に検索アイコンを固定し、入力値があるときだけ inline-end にクリアボタンを表示します。",
      previewHeight: null,
      Demo: SearchPattern,
    },
    {
      id: "salary",
      title: "希望年収",
      description:
        "検索条件の希望年収入力です。InputGroupText で単位「万円」を inline-end に添え、下限と上限を並べて範囲を指定します。",
      previewHeight: null,
      Demo: SalaryPattern,
    },
    {
      id: "message",
      title: "メッセージ入力",
      description:
        "企業とのメッセージ送信フォームです。InputGroupTextarea に block-start の宛先、block-end の文字数上限と送信ボタンを組み合わせます。",
      previewHeight: null,
      Demo: MessagePattern,
    },
  ],
}
