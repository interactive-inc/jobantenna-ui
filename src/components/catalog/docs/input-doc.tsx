import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SearchIcon } from "lucide-react"

/**
 * Input の基本形。text / email / number を Label と組み合わせる
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="input-doc-keyword">キーワード</Label>
        <Input
          id="input-doc-keyword"
          type="text"
          placeholder="職種名や仕事内容などを入力"
          defaultValue="フロントエンドエンジニア"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="input-doc-email">メールアドレス</Label>
        <Input id="input-doc-email" type="email" placeholder="taro@example.com" />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="input-doc-salary">希望年収（万円）</Label>
        <Input id="input-doc-salary" type="number" placeholder="300" />
      </div>
    </div>
  )
}

/**
 * 求人検索の検索条件パネル。キーワード入力と件数付き検索ボタン
 */
function KeywordSearchPattern() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border">
      <div className="flex flex-col gap-2 p-4">
        <Label htmlFor="input-doc-search-keyword">キーワード</Label>
        <Input
          id="input-doc-search-keyword"
          type="search"
          placeholder="職種名や仕事内容などを入力"
          defaultValue="調理スタッフ 那覇市"
        />
      </div>

      <div className="flex items-center justify-between border-t p-4">
        <Button variant="ghost">すべてクリア</Button>
        <Button>
          <SearchIcon data-icon="inline-start" />
          128件 検索する
        </Button>
      </div>
    </div>
  )
}

/**
 * 無効状態と入力エラー。応募済みは disabled、形式エラーは aria-invalid で示す
 */
function DisabledInvalidPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="input-doc-disabled">応募済みの求人</Label>
        <Input
          id="input-doc-disabled"
          type="text"
          defaultValue="株式会社サンプル 営業・企画営業（法人向け）"
          disabled
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="input-doc-invalid">メールアドレス</Label>
        <Input id="input-doc-invalid" type="email" defaultValue="taro@example" aria-invalid />
        <p className="text-sm text-destructive">メールアドレスの形式が正しくありません</p>
      </div>
    </div>
  )
}

export const inputDoc: ComponentDoc = {
  name: "input",
  title: "Input",
  category: "フォーム",
  purpose:
    "1行のテキストを入力するフォームコンポーネントです。ジョブアンテナでは求人のキーワード検索、Web履歴書のメールアドレスや希望年収の入力、求人フォームの各項目に使います。type 属性でテキスト・メール・数値などの入力形式を切り替えます。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "Label と組み合わせた基本形です。type に text / email / number を指定して入力形式を切り替えます。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "keyword-search",
      title: "キーワード検索",
      description:
        "求人検索の検索条件パネルの例です。type=search のキーワード入力に、ヒット件数付きの検索ボタンとクリアボタンをフッターとして添えます。",
      previewHeight: null,
      Demo: KeywordSearchPattern,
    },
    {
      id: "disabled-invalid",
      title: "無効・エラー状態",
      description:
        "応募済みなど編集できない値は disabled で薄く表示し、バリデーションエラーは aria-invalid とエラーメッセージで示します。",
      previewHeight: null,
      Demo: DisabledInvalidPattern,
    },
  ],
}
