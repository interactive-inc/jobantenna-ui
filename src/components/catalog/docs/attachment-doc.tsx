import type { ComponentDoc } from "@/components/catalog/component-doc"
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/components/ui/attachment"
import { Spinner } from "@/components/ui/spinner"
import {
  DownloadIcon,
  FileTextIcon,
  ImageIcon,
  RotateCcwIcon,
  UploadIcon,
  XIcon,
} from "lucide-react"

/**
 * 完了状態の添付ファイルを default / sm / xs の3サイズで表示
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Attachment state="done">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>

        <AttachmentContent>
          <AttachmentTitle>履歴書_田中太郎.pdf</AttachmentTitle>
          <AttachmentDescription>PDF ・ 248KB</AttachmentDescription>
        </AttachmentContent>

        <AttachmentActions>
          <AttachmentAction aria-label="削除">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>

      <Attachment state="done" size="sm">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>

        <AttachmentContent>
          <AttachmentTitle>職務経歴書_田中太郎.pdf</AttachmentTitle>
          <AttachmentDescription>PDF ・ 120KB</AttachmentDescription>
        </AttachmentContent>

        <AttachmentActions>
          <AttachmentAction aria-label="削除">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>

      <Attachment state="done" size="xs">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>

        <AttachmentContent>
          <AttachmentTitle>資格証明書.pdf</AttachmentTitle>
        </AttachmentContent>
      </Attachment>
    </div>
  )
}

/**
 * 履歴書 PDF のアップロード状態(idle / uploading / error / done)の遷移
 */
function UploadStatesPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Attachment state="idle">
        <AttachmentMedia>
          <UploadIcon />
        </AttachmentMedia>

        <AttachmentContent>
          <AttachmentTitle>履歴書を添付</AttachmentTitle>
          <AttachmentDescription>PDF ・ 5MB まで</AttachmentDescription>
        </AttachmentContent>

        <AttachmentTrigger aria-label="履歴書を添付" />
      </Attachment>

      <Attachment state="uploading">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>

        <AttachmentContent>
          <AttachmentTitle>履歴書_田中太郎.pdf</AttachmentTitle>
          <AttachmentDescription>アップロード中…</AttachmentDescription>
        </AttachmentContent>
      </Attachment>

      <Attachment state="error">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>

        <AttachmentContent>
          <AttachmentTitle>履歴書_田中太郎.pdf</AttachmentTitle>
          <AttachmentDescription>アップロードに失敗しました</AttachmentDescription>
        </AttachmentContent>

        <AttachmentActions>
          <AttachmentAction aria-label="再試行">
            <RotateCcwIcon />
          </AttachmentAction>

          <AttachmentAction aria-label="削除">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>

      <Attachment state="done">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>

        <AttachmentContent>
          <AttachmentTitle>履歴書_田中太郎.pdf</AttachmentTitle>
          <AttachmentDescription>PDF ・ 248KB</AttachmentDescription>
        </AttachmentContent>

        <AttachmentActions>
          <AttachmentAction aria-label="削除">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  )
}

/**
 * AttachmentGroup で職場写真を横スクロールのサムネイル一覧として表示
 */
function PhotoGroupPattern() {
  return (
    <AttachmentGroup className="w-full max-w-md">
      <Attachment orientation="vertical">
        <AttachmentMedia>
          <ImageIcon />
        </AttachmentMedia>

        <AttachmentContent>
          <AttachmentTitle>那覇市オフィス.jpg</AttachmentTitle>
          <AttachmentDescription>1.2MB</AttachmentDescription>
        </AttachmentContent>

        <AttachmentActions>
          <AttachmentAction aria-label="削除">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>

      <Attachment orientation="vertical">
        <AttachmentMedia>
          <ImageIcon />
        </AttachmentMedia>

        <AttachmentContent>
          <AttachmentTitle>職場の様子.jpg</AttachmentTitle>
          <AttachmentDescription>2.4MB</AttachmentDescription>
        </AttachmentContent>

        <AttachmentActions>
          <AttachmentAction aria-label="削除">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>

      <Attachment orientation="vertical">
        <AttachmentMedia>
          <ImageIcon />
        </AttachmentMedia>

        <AttachmentContent>
          <AttachmentTitle>社員インタビュー.jpg</AttachmentTitle>
          <AttachmentDescription>1.8MB</AttachmentDescription>
        </AttachmentContent>

        <AttachmentActions>
          <AttachmentAction aria-label="削除">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>

      <Attachment orientation="vertical">
        <AttachmentMedia>
          <ImageIcon />
        </AttachmentMedia>

        <AttachmentContent>
          <AttachmentTitle>店舗外観.jpg</AttachmentTitle>
          <AttachmentDescription>2.1MB</AttachmentDescription>
        </AttachmentContent>

        <AttachmentActions>
          <AttachmentAction aria-label="削除">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </AttachmentGroup>
  )
}

/**
 * メッセージで受け取った書類。AttachmentTrigger で全体をクリック可能にする
 */
function MessageFilePattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Attachment state="done" size="sm">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>

        <AttachmentContent>
          <AttachmentTitle>面接のご案内.pdf</AttachmentTitle>
          <AttachmentDescription>株式会社サンプル ・ 96KB</AttachmentDescription>
        </AttachmentContent>

        <AttachmentActions>
          <AttachmentAction aria-label="ダウンロード">
            <DownloadIcon />
          </AttachmentAction>
        </AttachmentActions>

        <AttachmentTrigger aria-label="面接のご案内.pdf を開く" />
      </Attachment>

      <Attachment state="done" size="sm">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>

        <AttachmentContent>
          <AttachmentTitle>雇用条件通知書.pdf</AttachmentTitle>
          <AttachmentDescription>常磐合同産業株式会社 ・ 152KB</AttachmentDescription>
        </AttachmentContent>

        <AttachmentActions>
          <AttachmentAction aria-label="ダウンロード">
            <DownloadIcon />
          </AttachmentAction>
        </AttachmentActions>

        <AttachmentTrigger aria-label="雇用条件通知書.pdf を開く" />
      </Attachment>
    </div>
  )
}

export const attachmentDoc: ComponentDoc = {
  name: "attachment",
  title: "Attachment",
  category: "チャット",
  purpose:
    "チャットやフォームに添付されたファイルを、名前・サイズ・状態つきのカードで表示するコンポーネント。idle / uploading / error / done の状態表示と横スクロールの AttachmentGroup を備える。jobantenna では応募時の履歴書 PDF のアップロードや、企業とのメッセージでやり取りする書類・職場写真の表示に使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "ファイル名とサイズを表示する基本形。default / sm / xs の3サイズがあり、削除ボタンを AttachmentActions に置く。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "upload-states",
      title: "アップロード状態",
      description:
        "履歴書 PDF のアップロードの状態遷移。idle は破線枠の添付ボタン、uploading はスピナー、error は再試行と削除、done で完了になる。",
      previewHeight: null,
      Demo: UploadStatesPattern,
    },
    {
      id: "photo-group",
      title: "写真グループ",
      description:
        "求人票に載せる職場写真を AttachmentGroup で横スクロール表示する。orientation を vertical にするとサムネイル型になり、削除ボタンは右上に重なる。",
      previewHeight: null,
      Demo: PhotoGroupPattern,
    },
    {
      id: "message-file",
      title: "メッセージ添付",
      description:
        "企業とのメッセージで受け取った書類。AttachmentTrigger でカード全体をクリックして開けるようにし、ダウンロードボタンを併置する。",
      previewHeight: null,
      Demo: MessageFilePattern,
    },
  ],
}
