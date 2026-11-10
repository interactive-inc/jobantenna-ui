import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { SearchIcon, UsersIcon } from "lucide-react"

/**
 * 検索条件に一致する求人がなかったときの空状態
 */
function SearchEmptyPattern() {
  return (
    <div className="w-full max-w-2xl">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <SearchIcon />
          </EmptyMedia>
          <EmptyTitle>検索結果が見つかりません</EmptyTitle>
          <EmptyDescription>
            「那覇市 正社員
            事務」に一致する求人はありませんでした。キーワードを減らすか、勤務地や雇用形態を広げて再検索してください。
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>条件を変更する</Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}

/**
 * 管理画面の応募者リストがまだ空のときの空状態
 */
function ApplicantsEmptyPattern() {
  return (
    <div className="w-full max-w-2xl">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <UsersIcon />
          </EmptyMedia>
          <EmptyTitle>応募はまだありません</EmptyTitle>
          <EmptyDescription>
            公開した求人に応募が届くと、ここに表示されます。
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>求人票を作る</Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}

export const emptyDoc: ComponentDoc = {
  name: "empty",
  title: "Empty",
  category: "データ表示",
  purpose: "読み込みが終わり、表示できる項目がないときに使います。",
  patterns: [
    {
      id: "search-empty",
      title: "検索結果がないとき",
      description: "条件に一致しなかったことを伝え、次に変更できる条件を示します。",
      previewHeight: null,
      showControls: false,
      Demo: SearchEmptyPattern,
    },
    {
      id: "applicants-empty",
      title: "応募がまだないとき",
      description: "応募が表示される条件と、最初にできる操作を案内します。",
      previewHeight: null,
      showControls: false,
      Demo: ApplicantsEmptyPattern,
    },
  ],
  usage: {
    recommended: [
      "見出しには何がないのかを書き、補足は一、二文にする。",
      "次の操作がある場合は、一つに絞って案内する。",
    ],
    avoid: [
      "読み込み中や取得に失敗した画面を空として表示する。",
      "未返信がゼロになった場面で、初めからデータがないときと同じ案内を出す。",
    ],
  },
}
