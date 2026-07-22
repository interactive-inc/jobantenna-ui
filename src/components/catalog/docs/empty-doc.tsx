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
import { BookmarkIcon, MessageCircleIcon, SearchIcon, UsersIcon } from "lucide-react"

/**
 * EmptyMedia・EmptyTitle・EmptyDescription・EmptyContent を組み合わせた基本形
 */
function BasicPattern() {
  return (
    <div className="w-full max-w-2xl">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <BookmarkIcon />
          </EmptyMedia>
          <EmptyTitle>保存した求人はまだありません</EmptyTitle>
          <EmptyDescription>
            気になる求人を保存すると、あとからまとめて比較・応募できます。
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="secondary">求人を探す</Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}

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
          <div className="flex flex-wrap justify-center gap-2">
            <Button>条件を変更する</Button>
            <Button variant="outline">すべてクリア</Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  )
}

/**
 * メッセージ一覧が空のときにプロフィール充実へ誘導する空状態
 */
function MessagesEmptyPattern() {
  return (
    <div className="w-full max-w-2xl">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <MessageCircleIcon />
          </EmptyMedia>
          <EmptyTitle>まだメッセージはありません</EmptyTitle>
          <EmptyDescription>
            まずはプロフィールを充実させて、企業からオファーをもらいましょう！
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-wrap justify-center gap-2">
            <Button>Web履歴書を編集する</Button>
            <Button variant="outline">求人を探す</Button>
          </div>
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
          <EmptyTitle>まだ応募はありません</EmptyTitle>
          <EmptyDescription>
            求人票を公開すると、応募した候補者がここに表示されます。いいかも！を送って候補者にアプローチすることもできます。
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-wrap justify-center gap-2">
            <Button>求人票を作成する</Button>
            <Button variant="outline">候補者リストを見る</Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  )
}

export const emptyDoc: ComponentDoc = {
  name: "empty",
  title: "Empty",
  category: "データ表示",
  purpose:
    "リストや検索結果にまだデータがないことを伝え、次の行動へ誘導するコンポーネントです。保存した求人・メッセージ・応募者リストが空のときや、検索結果ゼロのときに、理由の説明と CTA をセットで見せます。何も表示しないまま放置せず、ユーザーが次に何をすればよいかを示すために使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        'EmptyMedia（variant="icon"）・EmptyTitle・EmptyDescription を EmptyHeader にまとめ、EmptyContent に CTA を置いた基本形です。保存した求人など、一覧がまだ空のときに使います。',
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "search-empty",
      title: "検索結果ゼロ",
      description:
        "検索条件に一致する求人がなかったときの表示です。条件の緩め方を説明し、「条件を変更する」「すべてクリア」で再検索へ誘導します。",
      previewHeight: null,
      Demo: SearchEmptyPattern,
    },
    {
      id: "messages-empty",
      title: "メッセージ",
      description:
        "メッセージ一覧が空のときの表示です。ただ空を伝えるだけでなく、プロフィールの充実というオファーをもらうための行動へ誘導します。",
      previewHeight: null,
      Demo: MessagesEmptyPattern,
    },
    {
      id: "applicants-empty",
      title: "応募者リスト",
      description:
        "管理画面で応募者がまだいないときの表示です。求人票の作成・公開や、いいかも！でのアプローチなど企業側の次の一手を示します。",
      previewHeight: null,
      Demo: ApplicantsEmptyPattern,
    },
  ],
}
