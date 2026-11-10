import { UserRoundIcon } from "lucide-react"
import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
} from "@/components/ui/message"

function InterviewConversation() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <p className="text-center text-xs text-muted-foreground">11月20日（金）</p>
      <MessageGroup>
        <Message>
          <MessageAvatar>
            <Avatar>
              <AvatarFallback>
                <UserRoundIcon className="size-4" aria-hidden="true" />
              </AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <Bubble variant="outline">
              <BubbleContent>面接は来週の火曜日でしたら伺えます。</BubbleContent>
            </Bubble>
            <MessageFooter>
              <span className="font-numeric">9:41</span>
            </MessageFooter>
          </MessageContent>
        </Message>
        <Message align="end">
          <MessageContent>
            <Bubble align="end" variant="secondary">
              <BubbleContent>ありがとうございます。火曜日の14時はいかがでしょうか。</BubbleContent>
            </Bubble>
            <MessageFooter>
              <span className="font-numeric">11:15</span>
            </MessageFooter>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  )
}

export const messageDoc: ComponentDoc = {
  name: "message",
  title: "メッセージ（Message）",
  category: "チャット",
  purpose: "相手から届いた文と、自分が送った文を、時間順に読めるように表示します。",
  patterns: [
    {
      id: "basic",
      title: "面接の日程を調整する",
      description: "相手は左に白地と枠線、自分は右に淡い面で表示します。",
      previewHeight: null,
      showControls: false,
      Demo: InterviewConversation,
    },
  ],
  usage: {
    recommended: [
      "古いメッセージから上に並べ、日付が変わる位置に日付を表示する。",
      "時刻は吹き出しの下に置く。送信者や既読情報を取得できる場合は同じ場所に添える。",
      "長い文章やURLは、狭い画面でも吹き出しの中で折り返す。",
    ],
    avoid: ["既読を確認できないメッセージに既読と表示する。"],
  },
}
