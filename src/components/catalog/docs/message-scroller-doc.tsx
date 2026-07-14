import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { ArrowDownIcon, Building2, SendIcon } from "lucide-react"

const applicationChatMessages = [
  {
    id: 1,
    from: "company",
    text: "この度は「ホールスタッフ（正社員）」へのご応募ありがとうございます。",
  },
  {
    id: 2,
    from: "applicant",
    text: "はじめまして。求人を拝見してご連絡しました。よろしくお願いいたします。",
  },
  {
    id: 3,
    from: "company",
    text: "勤務地は那覇市おもろまちの本店になります。ご都合いかがでしょうか。",
  },
  {
    id: 4,
    from: "applicant",
    text: "那覇市内であれば問題ありません。通勤も30分ほどです。",
  },
  {
    id: 5,
    from: "company",
    text: "給与は月給22万円〜、賞与年2回です。面接のご希望日を教えてください。",
  },
  { id: 6, from: "applicant", text: "来週の火曜か水曜の午後ですと伺えます。" },
  {
    id: 7,
    from: "company",
    text: "では火曜14時に本店へお越しください。履歴書をご持参ください。",
  },
  {
    id: 8,
    from: "applicant",
    text: "承知しました。当日はよろしくお願いいたします。",
  },
]

const readMessages = [
  {
    id: 1,
    from: "company",
    text: "「調理スタッフ（正社員）」へのご応募ありがとうございます。書類選考を進めております。",
  },
  {
    id: 2,
    from: "applicant",
    text: "ありがとうございます。結果をお待ちしております。",
  },
  {
    id: 3,
    from: "company",
    text: "書類選考を通過されました。面接日程のご希望をお聞かせください。",
  },
  {
    id: 4,
    from: "applicant",
    text: "今週の金曜 15 時以降でしたら伺えます。",
  },
  {
    id: 5,
    from: "company",
    text: "では金曜 16 時に浦添市の本社へお越しください。",
  },
  {
    id: 6,
    from: "applicant",
    text: "承知しました。よろしくお願いいたします。",
  },
]

const unreadMessages = [
  {
    id: 7,
    from: "company",
    text: "先日の面接ありがとうございました。選考結果のご連絡です。",
  },
  {
    id: 8,
    from: "company",
    text: "ぜひ採用させていただきたく、内定のご連絡を差し上げます。",
  },
  {
    id: 9,
    from: "company",
    text: "入社日のご相談をしたいので、ご都合の良い日をお知らせください。",
  },
]

const scoutMessages = [
  {
    id: 1,
    from: "company",
    text: "はじめまして。Web履歴書を拝見してご連絡しました。ぜひ一度お話ししませんか？",
  },
  {
    id: 2,
    from: "applicant",
    text: "ありがとうございます。ぜひお願いします。",
  },
  { id: 3, from: "company", text: "現在募集中の求人はこちらです。" },
]

const scoutFollowUpMessages = [
  { id: 4, from: "applicant", text: "拝見しました。応募を検討します！" },
  {
    id: 5,
    from: "company",
    text: "ご不明な点があればお気軽にご質問ください。",
  },
]

/**
 * 応募チャットの履歴を固定高で表示し、最下部へ自動スクロールする基本形
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <MessageScrollerProvider>
        <MessageScroller className="h-64 rounded-lg border">
          <MessageScrollerViewport className="p-4">
            <MessageScrollerContent className="gap-4">
              {applicationChatMessages.map((message) => (
                <MessageScrollerItem
                  key={message.id}
                  className={
                    message.from === "applicant" ? "flex justify-end" : "flex justify-start"
                  }
                >
                  <div
                    className={
                      message.from === "applicant"
                        ? "max-w-[85%] rounded-lg bg-primary p-2 text-sm text-primary-foreground"
                        : "max-w-[85%] rounded-lg bg-muted p-2 text-sm"
                    }
                  >
                    {message.text}
                  </div>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>

          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  )
}

/**
 * 未読の先頭にアンカーし、開いた位置から上下どちらへも移動できる履歴表示
 */
function UnreadAnchorPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <MessageScrollerProvider defaultScrollPosition="last-anchor">
        <MessageScroller className="h-80 rounded-lg border">
          <MessageScrollerViewport className="p-4">
            <MessageScrollerContent className="gap-4">
              {readMessages.map((message) => (
                <MessageScrollerItem
                  key={message.id}
                  className={
                    message.from === "applicant" ? "flex justify-end" : "flex justify-start"
                  }
                >
                  <div
                    className={
                      message.from === "applicant"
                        ? "max-w-[85%] rounded-lg bg-primary p-2 text-sm text-primary-foreground"
                        : "max-w-[85%] rounded-lg bg-muted p-2 text-sm"
                    }
                  >
                    {message.text}
                  </div>
                </MessageScrollerItem>
              ))}

              <MessageScrollerItem scrollAnchor>
                <div className="flex items-center gap-2 text-xs text-destructive">
                  <div className="h-px flex-1 bg-destructive/30" />
                  ここから未読
                  <div className="h-px flex-1 bg-destructive/30" />
                </div>
              </MessageScrollerItem>

              {unreadMessages.map((message) => (
                <MessageScrollerItem key={message.id} className="flex justify-start">
                  <div className="max-w-[85%] rounded-lg bg-muted p-2 text-sm">{message.text}</div>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>

          <MessageScrollerButton direction="start" />
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  )
}

/**
 * ヘッダー・入力欄と組み合わせた企業とのメッセージ画面レイアウト
 */
function ChatScreenPattern() {
  return (
    <div className="flex h-96 w-full max-w-md flex-col overflow-hidden rounded-lg border">
      <div className="flex items-center gap-2 border-b p-4">
        <Avatar>
          <AvatarFallback>
            <Building2 className="size-4" />
          </AvatarFallback>
        </Avatar>

        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium">株式会社サンプル</span>
          <span className="truncate text-xs text-muted-foreground">採用担当 金城</span>
        </div>
      </div>

      <MessageScrollerProvider>
        <MessageScroller className="min-h-0 flex-1">
          <MessageScrollerViewport className="p-4">
            <MessageScrollerContent className="gap-4">
              {scoutMessages.map((message) => (
                <MessageScrollerItem
                  key={message.id}
                  className={
                    message.from === "applicant" ? "flex justify-end" : "flex justify-start"
                  }
                >
                  <div
                    className={
                      message.from === "applicant"
                        ? "max-w-[85%] rounded-lg bg-primary p-2 text-sm text-primary-foreground"
                        : "max-w-[85%] rounded-lg bg-muted p-2 text-sm"
                    }
                  >
                    {message.text}
                  </div>
                </MessageScrollerItem>
              ))}

              <MessageScrollerItem className="flex justify-start">
                <div className="flex max-w-[85%] items-center gap-2 rounded-lg border p-2">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <Building2 className="size-4 text-muted-foreground" />
                  </div>

                  <div className="flex min-w-0 flex-col">
                    <span className="text-sm font-medium">フロントエンドエンジニア</span>
                    <span className="text-xs text-muted-foreground">
                      那覇市・正社員・月給 25万円
                    </span>
                  </div>
                </div>
              </MessageScrollerItem>

              {scoutFollowUpMessages.map((message) => (
                <MessageScrollerItem
                  key={message.id}
                  className={
                    message.from === "applicant" ? "flex justify-end" : "flex justify-start"
                  }
                >
                  <div
                    className={
                      message.from === "applicant"
                        ? "max-w-[85%] rounded-lg bg-primary p-2 text-sm text-primary-foreground"
                        : "max-w-[85%] rounded-lg bg-muted p-2 text-sm"
                    }
                  >
                    {message.text}
                  </div>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>

          <MessageScrollerButton size="sm">
            <ArrowDownIcon />
            新着メッセージ
          </MessageScrollerButton>
        </MessageScroller>
      </MessageScrollerProvider>

      <div className="flex items-center gap-2 border-t p-2">
        <Input placeholder="メッセージを入力" />

        <Button size="icon">
          <SendIcon />
          <span className="sr-only">送信</span>
        </Button>
      </div>
    </div>
  )
}

export const messageScrollerDoc: ComponentDoc = {
  name: "message-scroller",
  title: "Message Scroller",
  category: "チャット",
  purpose:
    "メッセージ履歴を固定高のスクロール領域に表示し、新着時の自動スクロールと最下部へ戻るボタンを提供するコンポーネント。defaultScrollPosition や scrollAnchor で開いたときの表示位置も制御できる。jobantenna では企業と求職者のメッセージ画面で、やり取りの履歴表示に使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "応募チャットの履歴を固定高で表示し、開いたとき最下部に自動スクロールする基本形。上へスクロールすると最下部へ戻るボタンが現れる。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "unread-anchor",
      title: "未読から表示",
      description:
        'defaultScrollPosition="last-anchor" と scrollAnchor で、開いたとき未読の区切りから表示する。direction="start" のボタンで履歴の先頭にも戻れる。',
      previewHeight: 400,
      Demo: UnreadAnchorPattern,
    },
    {
      id: "chat-screen",
      title: "メッセージ画面",
      description:
        "ヘッダーと入力欄を組み合わせたメッセージ画面のレイアウト。求人カードの共有を挟み、スクロールボタンにテキストを入れて新着への誘導を明確にする。",
      previewHeight: 480,
      Demo: ChatScreenPattern,
    },
  ],
}
