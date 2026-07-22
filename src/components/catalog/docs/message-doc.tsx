import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"
import { Building2, User } from "lucide-react"

/**
 * 応募お礼から面接日程の確定までの企業とのやり取り
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <MessageGroup>
        <Message>
          <MessageAvatar>
            <Avatar>
              <AvatarFallback>担</AvatarFallback>
            </Avatar>
          </MessageAvatar>

          <MessageContent>
            <MessageHeader>株式会社サンプル 採用担当</MessageHeader>

            <BubbleGroup>
              <Bubble variant="muted">
                <BubbleContent>
                  ご応募ありがとうございます。那覇市の正社員求人「フロントエンドエンジニア」の書類選考を開始しました。
                </BubbleContent>
              </Bubble>

              <Bubble variant="muted">
                <BubbleContent>面接の希望日時を教えていただけますか？</BubbleContent>
              </Bubble>
            </BubbleGroup>

            <MessageFooter>10:02</MessageFooter>
          </MessageContent>
        </Message>

        <Message align="end">
          <MessageContent>
            <BubbleGroup>
              <Bubble align="end">
                <BubbleContent>
                  ありがとうございます。来週の火曜 14 時以降でお願いします。
                </BubbleContent>
              </Bubble>
            </BubbleGroup>

            <MessageFooter>10:05・既読</MessageFooter>
          </MessageContent>
        </Message>

        <Message>
          <MessageAvatar>
            <Avatar>
              <AvatarFallback>担</AvatarFallback>
            </Avatar>
          </MessageAvatar>

          <MessageContent>
            <BubbleGroup>
              <Bubble variant="muted">
                <BubbleContent>
                  承知しました。7/14 (火) 14:00 に面接をご案内します。
                  給与や勤務条件のご質問もお気軽にどうぞ。
                </BubbleContent>
              </Bubble>
            </BubbleGroup>

            <MessageFooter>10:06</MessageFooter>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  )
}

/**
 * 企業がスレッド内で別の求人カードを共有する
 */
function JobSharePattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <MessageGroup>
        <Message align="end">
          <MessageContent>
            <BubbleGroup>
              <Bubble align="end">
                <BubbleContent>
                  他の職種も検討したいのですが、おすすめの求人はありますか？
                </BubbleContent>
              </Bubble>
            </BubbleGroup>

            <MessageFooter>14:20・既読</MessageFooter>
          </MessageContent>
        </Message>

        <Message>
          <MessageAvatar>
            <Avatar>
              <AvatarFallback>
                <Building2 className="size-4" />
              </AvatarFallback>
            </Avatar>
          </MessageAvatar>

          <MessageContent>
            <MessageHeader>株式会社アールエムシー 採用担当</MessageHeader>

            <BubbleGroup>
              <Bubble variant="muted">
                <BubbleContent>こちらはいかがでしょうか。Web履歴書OKの求人です！</BubbleContent>
              </Bubble>

              <Bubble variant="outline">
                <BubbleContent render={<button type="button" />}>
                  <div className="flex items-center gap-2">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-(--radius-inner) bg-muted">
                      <Building2 className="size-4 text-muted-foreground" />
                    </div>

                    <div className="flex min-w-0 flex-col">
                      <span className="text-sm font-medium">営業・企画営業（法人向け）</span>
                      <span className="text-xs text-muted-foreground">
                        株式会社アールエムシー・浦添市・正社員・月給 200,000〜300,000円
                      </span>
                    </div>
                  </div>
                </BubbleContent>
              </Bubble>
            </BubbleGroup>

            <MessageFooter>14:23</MessageFooter>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  )
}

/**
 * 管理画面から見た応募者スレッド。候補者が左、企業担当者が右
 */
function CompanyViewPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Bubble variant="ghost" className="self-center">
        <BubbleContent className="text-xs text-muted-foreground">7月8日</BubbleContent>
      </Bubble>

      <MessageGroup>
        <Message>
          <MessageAvatar>
            <Avatar>
              <AvatarFallback>
                <User className="size-4" />
              </AvatarFallback>
            </Avatar>
          </MessageAvatar>

          <MessageContent>
            <MessageHeader>比嘉 直樹（28歳・男性）</MessageHeader>

            <BubbleGroup>
              <Bubble variant="muted">
                <BubbleContent>
                  調理スタッフの求人に応募いたしました。前職では 3
                  年ほど調理場を担当していました。よろしくお願いいたします。
                </BubbleContent>
              </Bubble>
            </BubbleGroup>

            <MessageFooter>9:41</MessageFooter>
          </MessageContent>
        </Message>

        <Message align="end">
          <MessageContent>
            <BubbleGroup>
              <Bubble align="end">
                <BubbleContent>
                  ご応募ありがとうございます。常磐合同産業株式会社 人事部の
                  山田太郎です。Web履歴書を確認のうえ、選考結果をご連絡します。
                </BubbleContent>
              </Bubble>

              <Bubble align="end">
                <BubbleContent>面接は書類選考の通過後、店舗にて実施予定です。</BubbleContent>
              </Bubble>
            </BubbleGroup>

            <MessageFooter>11:15・既読</MessageFooter>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  )
}

export const messageDoc: ComponentDoc = {
  name: "message",
  title: "Message",
  category: "チャット",
  purpose:
    "チャットの1発言を、アバター・送信者名・吹き出し・時刻までまとめてレイアウトするコンポーネントです。align で左右を切り替え、連続する発言は MessageGroup で束ねます。ジョブアンテナでは企業と求職者のメッセージスレッドや、管理画面の応募者メッセージ画面に使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "応募お礼から面接案内までのスレッドです。相手は MessageAvatar と MessageHeader を付けて左に、自分は align=end で右に置き、MessageFooter に時刻と既読を出します。",
      previewHeight: 480,
      Demo: BasicPattern,
    },
    {
      id: "job-share",
      title: "求人カード共有",
      description:
        "企業がスレッド内で別の求人カードを送る例です。テキストの吹き出しと outline の求人カードを同じ BubbleGroup にまとめ、1つの発言として扱います。",
      previewHeight: 400,
      Demo: JobSharePattern,
    },
    {
      id: "company-view",
      title: "企業側スレッド",
      description:
        "管理画面の応募者メッセージです。候補者を左、企業担当者を右に配置し、ghost の吹き出しを日付区切りとして挟みます。",
      previewHeight: 480,
      Demo: CompanyViewPattern,
    },
  ],
}
