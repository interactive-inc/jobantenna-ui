import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BanIcon, BookmarkIcon, InfoIcon, Share2Icon } from "lucide-react"

/**
 * Trigger と Content だけの最小構成に、表示位置の4方向を並べた例
 */
function BasicPattern() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-2">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">上</Button>} />
          <TooltipContent side="top">正社員・那覇市</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">下</Button>} />
          <TooltipContent side="bottom">月給 25 万円〜</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">左</Button>} />
          <TooltipContent side="left">本日 更新</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">右</Button>} />
          <TooltipContent side="right">Web履歴書OK</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

/**
 * ラベルを持たないアイコンボタンに操作名を補う例（保存・共有・ブロック）
 */
function IconButtonPattern() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="ghost" size="icon">
                <BookmarkIcon />
              </Button>
            }
          />
          <TooltipContent>気になる求人を保存</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="ghost" size="icon">
                <Share2Icon />
              </Button>
            }
          />
          <TooltipContent>この求人を共有</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="ghost" size="icon">
                <BanIcon />
              </Button>
            }
          />
          <TooltipContent>この企業をブロック</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

/**
 * 操作できない要素や省略した数値の理由を、遷移せずに補足する例
 */
function AnnotationPattern() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-4">
        <Tooltip defaultOpen>
          <TooltipTrigger
            render={
              <Button variant="secondary" disabled>
                応募済み
              </Button>
            }
          />
          <TooltipContent side="bottom">2026/07/08 に応募が完了しています</TooltipContent>
        </Tooltip>

        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium">月給 250,000円</span>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon-xs">
                  <InfoIcon />
                </Button>
              }
            />
            <TooltipContent>固定残業代 20 時間分（35,000円）を含みます</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  )
}

export const tooltipDoc: ComponentDoc = {
  name: "tooltip",
  title: "Tooltip",
  category: "オーバーレイ",
  purpose:
    "要素にホバー・フォーカスしたときだけ、短い補足テキストを浮かせて見せる小さなオーバーレイです。画面を狭くせずに操作名や注釈を添えられるので、ラベルを持たないアイコンボタンや、省略した数値の説明に向きます。jobantenna では求人カードの保存・共有ボタンや、給与に含む固定残業代の補足などに使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "Trigger と Content だけの最小構成。TooltipContent の side で top / bottom / left / right の4方向に表示位置を切り替えられる。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "icon-button",
      title: "アイコンボタン",
      description:
        "文字ラベルを持たないアイコンボタンに操作名を補う例。保存・共有・ブロックのように、アイコンだけでは意味が伝わりにくいボタンへ添える。",
      previewHeight: null,
      Demo: IconButtonPattern,
    },
    {
      id: "annotation",
      title: "注釈",
      description:
        "応募済みで無効化したボタンの理由や、給与に含む固定残業代など、遷移せず補足したい情報を添える例。左のツールチップは defaultOpen で開いた状態を示している。",
      previewHeight: 360,
      Demo: AnnotationPattern,
    },
  ],
}
