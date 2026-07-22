import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "@/components/ui/bubble"
import { Building2 } from "lucide-react"

/**
 * 相手は muted で左、自分は default で右に並べる基本のやり取り
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>
            こんにちは。那覇市の販売スタッフ（正社員）の求人を拝見しました。応募を検討しています。
          </BubbleContent>
        </Bubble>

        <Bubble align="end">
          <BubbleContent>
            お問い合わせありがとうございます。ジョブアンテナ採用担当の金城です。ぜひご応募ください！
          </BubbleContent>
          <BubbleReactions>👍</BubbleReactions>
        </Bubble>

        <Bubble variant="muted">
          <BubbleContent>給与は月給25万円〜との記載でしたが、賞与はありますか？</BubbleContent>
        </Bubble>

        <Bubble variant="tinted" align="end">
          <BubbleContent>
            はい、賞与は年2回（計3ヶ月分）です。詳細は面接でご説明します。
          </BubbleContent>
        </Bubble>

        <Bubble variant="ghost" className="self-center">
          <BubbleContent className="text-xs text-muted-foreground">
            応募が完了しました
          </BubbleContent>
        </Bubble>
      </BubbleGroup>
    </div>
  )
}

/**
 * 応募お礼から面接日程の確定までの企業と求職者のやり取り
 */
function InterviewSchedulePattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Bubble variant="ghost" className="self-center">
        <BubbleContent className="text-xs text-muted-foreground">
          応募が完了しました！ 企業からの返信をお待ち下さい。
        </BubbleContent>
      </Bubble>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Avatar size="sm">
            <AvatarFallback>
              <Building2 className="size-4" />
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">
            株式会社サンプル 採用担当 山田・7月8日 10:24
          </span>
        </div>

        <BubbleGroup>
          <Bubble variant="muted">
            <BubbleContent>
              この度はフロントエンドエンジニアの求人にご応募いただきありがとうございます。Web履歴書を拝見し、ぜひ一度面接でお話ししたいと考えております。
            </BubbleContent>
          </Bubble>

          <Bubble variant="muted">
            <BubbleContent>
              つきましては、7月14日（火）または16日（木）の 14:00〜17:00 でご都合いかがでしょうか。
            </BubbleContent>
          </Bubble>
        </BubbleGroup>
      </div>

      <div className="flex flex-col gap-1">
        <span className="self-end text-xs text-muted-foreground">7月8日 12:03</span>

        <Bubble align="end">
          <BubbleContent>
            ご連絡ありがとうございます。7月16日（木）15:00 からでお願いできますでしょうか。
          </BubbleContent>
          <BubbleReactions>👍</BubbleReactions>
        </Bubble>
      </div>

      <Bubble variant="tinted">
        <BubbleContent>
          承知しました。7月16日（木）15:00
          に那覇市の本社オフィスへお越しください。当日お会いできるのを楽しみにしております。
        </BubbleContent>
      </Bubble>
    </div>
  )
}

/**
 * BubbleReactions の side / align による四隅の配置
 */
function ReactionsPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2 py-2">
      <BubbleGroup className="gap-4">
        <Bubble variant="muted">
          <BubbleContent>面接の候補日をお送りしました。ご確認ください。</BubbleContent>
          <BubbleReactions>👍</BubbleReactions>
        </Bubble>

        <Bubble align="end">
          <BubbleContent>ありがとうございます。確認いたします！</BubbleContent>
          <BubbleReactions side="bottom" align="start">
            ❤️ <span className="text-xs">2</span>
          </BubbleReactions>
        </Bubble>

        <Bubble variant="tinted">
          <BubbleContent>内定おめでとうございます！</BubbleContent>
          <BubbleReactions side="top" align="end">
            🎉
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>
    </div>
  )
}

/**
 * render prop で BubbleContent をボタンにし、メッセージ内で求人を共有する
 */
function JobSharePattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>他にもおすすめの求人はありますか？</BubbleContent>
        </Bubble>

        <Bubble align="end">
          <BubbleContent>こちらはいかがでしょうか。Web履歴書OKの求人です！</BubbleContent>
        </Bubble>

        <Bubble variant="outline" align="end">
          <BubbleContent render={<button type="button" />}>
            <div className="flex items-center gap-2">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-(--radius-inner) bg-muted">
                <Building2 className="size-4 text-muted-foreground" />
              </div>

              <div className="flex min-w-0 flex-col">
                <span className="text-sm font-medium">フロントエンドエンジニア</span>
                <span className="text-xs text-muted-foreground">
                  株式会社サンプル・那覇市・正社員・月給 25万円
                </span>
              </div>
            </div>
          </BubbleContent>
        </Bubble>
      </BubbleGroup>
    </div>
  )
}

export const bubbleDoc: ComponentDoc = {
  name: "bubble",
  title: "Bubble",
  category: "チャット",
  purpose:
    "チャットのメッセージを吹き出しで表示するコンポーネント。variant で送信者ごとの色分け、align で左右の配置を切り替え、BubbleReactions で絵文字リアクションを重ねられる。ジョブアンテナでは企業と求職者のメッセージ画面で、応募お礼や面接日程調整のやり取りに使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "相手のメッセージを muted で左に、自分のメッセージを default で右に並べる基本形。ghost はシステムメッセージ、tinted は強調したい返信に使う。",
      previewHeight: 400,
      Demo: BasicPattern,
    },
    {
      id: "interview-schedule",
      title: "面接日程調整",
      description:
        "応募お礼から面接日程の確定までの流れ。送信者名と時刻を添え、連続するメッセージは BubbleGroup でまとめる。",
      previewHeight: 560,
      Demo: InterviewSchedulePattern,
    },
    {
      id: "reactions",
      title: "リアクション",
      description:
        "BubbleReactions を side / align で四隅に配置する。既読や共感を絵文字で軽く返すときに使う。",
      previewHeight: null,
      Demo: ReactionsPattern,
    },
    {
      id: "job-share",
      title: "求人カード共有",
      description:
        "render prop で吹き出し全体をボタンにし、メッセージ内で求人を共有する。タップで求人詳細へ誘導する場面で使う。",
      previewHeight: null,
      Demo: JobSharePattern,
    },
  ],
}
