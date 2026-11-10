import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"

function InterestMark() {
  return (
    <span data-icon="inline-start" className="relative size-4 shrink-0" aria-hidden="true">
      <img src="/brand/icons/interest-thumb.svg" alt="" className="absolute top-[20.833%] left-0" />
      <img src="/brand/icons/interest-waves.svg" alt="" className="absolute top-[4.167%] left-[54.167%]" />
    </span>
  )
}

function ButtonKinds() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button type="button">保存する</Button>
      <Button type="button" variant="secondary">
        キャンセル
      </Button>
      <Button type="button" variant="interest">
        <InterestMark />
        いいかもを送る
      </Button>
      <Button type="button" variant="ghost">
        項目を追加する
      </Button>
    </div>
  )
}

function ButtonsWithIcons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button type="button" variant="ghost">
        <img src="/brand/icons/add.svg" alt="" data-icon="inline-start" />
        行を足す
      </Button>
      <Button type="button" variant="secondary">
        <img src="/brand/icons/add.svg" alt="" data-icon="inline-start" />
        求人票を作る
      </Button>
      <Button type="button" variant="interest">
        <InterestMark />
        いいかもを送る
      </Button>
    </div>
  )
}

export const buttonDoc: ComponentDoc = {
  name: "button",
  title: "ボタン",
  category: "アクション",
  purpose:
    "保存、送信、追加など、押すと操作が起きる場面に使います。標準の高さは40px、左右の余白は24px、角丸は8pxです。線なしの左右の余白は12pxです。文字は本文の太字に揃えます。",
  patterns: [
    {
      id: "basic",
      title: "種類",
      description: "",
      details: [
        { label: "墨", description: "画面で最も進めてほしい主操作に、一つだけ使います。" },
        {
          label: "白",
          description: "副操作とキャンセルに使います。ボタン型のリンクも白で揃えます。",
        },
        { label: "黄", description: "いいかもを送る操作に使います。" },
        { label: "線なし", description: "行を足す、項目を開くなどの補助操作に使います。" },
      ],
      showControls: false,
      previewHeight: 140,
      Demo: ButtonKinds,
    },
    {
      id: "with-icon",
      title: "アイコン付き",
      description:
        "操作を見分けやすくするアイコンを、ラベルの左に一つ添えます。行を足すときは線なし、求人票を作るときは白、いいかもを送るときは黄を使います。",
      showControls: false,
      previewHeight: 140,
      Demo: ButtonsWithIcons,
    },
  ],
  usage: {
    recommended: [
      "画面で最も進めてほしい操作に墨を使い、同じ画面に一つだけ置く。",
      "入力する、作る、変更するなどの副操作とキャンセルには白を使う。行や写真を足す操作には線なしと＋を使う。",
      "「保存する」「いいかもを送る」のように、押すと起きることをラベルに書く。",
      "必須項目が不足している間は主操作のボタンを押せない状態にし、すぐそばに不足項目を示す。",
      "対象を切り替えられる画面では、選んだ対象の履歴で完了表示を切り替える。完了した操作は状態の文言と日時で示し、追加でできる操作は別に置く。",
      "移動だけの導線はテキストリンクを使う。ボタン型のリンクとして置く場合は白に揃える。",
    ],
    avoid: [
      "いいかも以外の操作を黄で示す。",
      "エラー表示に使う赤を、通常の操作ボタンに使う。",
      "操作名を省いてアイコンだけで意味を伝える。その他の操作はメニューにまとめる。",
    ],
  },
}
