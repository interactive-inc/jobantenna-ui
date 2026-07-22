import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { Switch } from "@/components/ui/switch"
import {
  BanIcon,
  BellIcon,
  BookmarkIcon,
  BriefcaseIcon,
  BuildingIcon,
  ChevronRightIcon,
  FileTextIcon,
  FootprintsIcon,
  HeartIcon,
  ImageIcon,
  MapPinIcon,
} from "lucide-react"

/**
 * Item のバリアント（outline / muted）と ItemGroup を組み合わせた基本形
 */
function BasicPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <BriefcaseIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>ホールスタッフ</ItemTitle>
          <ItemDescription>那覇市・正社員・月給22万円〜</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">応募する</Button>
        </ItemActions>
      </Item>
      <Item variant="muted">
        <ItemMedia variant="icon">
          <BuildingIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>
            事務スタッフ
            <Badge variant="secondary">急募</Badge>
          </ItemTitle>
          <ItemDescription>浦添市・契約社員・時給1,200円</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            保存
          </Button>
        </ItemActions>
      </Item>
      <ItemGroup className="rounded-(--radius-outer) border">
        <Item size="sm">
          <ItemMedia variant="icon">
            <MapPinIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>調理補助</ItemTitle>
            <ItemDescription>宜野湾市・アルバイト</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator className="my-0" />
        <Item size="sm">
          <ItemMedia variant="icon">
            <MapPinIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>販売スタッフ</ItemTitle>
            <ItemDescription>沖縄市・パート</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  )
}

/**
 * render プロップで各行をリンク化した設定メニューのリスト
 */
function SettingsMenuPattern() {
  return (
    <ItemGroup className="w-full max-w-md rounded-(--radius-outer) border">
      <Item size="sm" render={<a href="#settings-notification" />}>
        <ItemMedia variant="icon">
          <BellIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>通知設定</ItemTitle>
          <ItemDescription>受け取る通知の種類を変更します</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4 text-muted-foreground" />
        </ItemActions>
      </Item>
      <ItemSeparator className="my-0" />
      <Item size="sm" render={<a href="#settings-resume" />}>
        <ItemMedia variant="icon">
          <FileTextIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Web履歴書</ItemTitle>
          <ItemDescription>入力率 80%・あと2項目で完成です</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4 text-muted-foreground" />
        </ItemActions>
      </Item>
      <ItemSeparator className="my-0" />
      <Item size="sm" render={<a href="#settings-saved-search" />}>
        <ItemMedia variant="icon">
          <BookmarkIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>
            保存した検索条件
            <Badge variant="secondary">5件</Badge>
          </ItemTitle>
          <ItemDescription>新着求人をメールでお知らせします</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4 text-muted-foreground" />
        </ItemActions>
      </Item>
      <ItemSeparator className="my-0" />
      <Item size="sm" render={<a href="#settings-blocked" />}>
        <ItemMedia variant="icon">
          <BanIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>ブロック企業</ItemTitle>
          <ItemDescription>3社をブロック中・履歴書を非公開にします</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4 text-muted-foreground" />
        </ItemActions>
      </Item>
    </ItemGroup>
  )
}

/**
 * ItemActions に Switch を置いた通知のオン・オフ設定リスト
 */
function NotificationSettingsPattern() {
  return (
    <ItemGroup className="w-full max-w-md rounded-(--radius-outer) border">
      <Item>
        <ItemMedia variant="icon">
          <BellIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>新着求人のお知らせ</ItemTitle>
          <ItemDescription>保存した検索条件に一致する求人を毎朝お知らせします</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Switch defaultChecked aria-label="新着求人のお知らせ" />
        </ItemActions>
      </Item>
      <ItemSeparator className="my-0" />
      <Item>
        <ItemMedia variant="icon">
          <HeartIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>いいかも！の通知</ItemTitle>
          <ItemDescription>企業からいいかも！が届いたらすぐに通知します</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Switch defaultChecked aria-label="いいかも！の通知" />
        </ItemActions>
      </Item>
      <ItemSeparator className="my-0" />
      <Item>
        <ItemMedia variant="icon">
          <FootprintsIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>あしあとの通知</ItemTitle>
          <ItemDescription>Web履歴書を閲覧した企業をお知らせします</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Switch aria-label="あしあとの通知" />
        </ItemActions>
      </Item>
    </ItemGroup>
  )
}

/**
 * ItemHeader と ItemFooter を使った求人カード。応募済みは disabled で表現
 */
function JobCardPattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item variant="outline">
        <ItemHeader>
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-(--radius-inner) bg-muted">
              <BuildingIcon className="size-4 text-muted-foreground" />
            </div>
            <span className="text-xs text-muted-foreground">株式会社サンプル</span>
          </div>
          <span className="text-xs text-muted-foreground">本日更新</span>
        </ItemHeader>
        <ItemMedia variant="image">
          <div className="flex size-full items-center justify-center bg-muted">
            <ImageIcon className="size-4 text-muted-foreground" />
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>フロントエンドエンジニア</ItemTitle>
          <ItemDescription>那覇市・正社員・月給 250,000〜350,000円</ItemDescription>
        </ItemContent>
        <ItemFooter>
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline">新卒採用</Badge>
            <Badge variant="outline">Web履歴書OK</Badge>
          </div>
          <Button size="sm">応募する</Button>
        </ItemFooter>
      </Item>
      <Item variant="outline">
        <ItemHeader>
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-(--radius-inner) bg-muted">
              <BuildingIcon className="size-4 text-muted-foreground" />
            </div>
            <span className="text-xs text-muted-foreground">常磐合同産業株式会社</span>
          </div>
          <span className="text-xs text-muted-foreground">3日前</span>
        </ItemHeader>
        <ItemMedia variant="image">
          <div className="flex size-full items-center justify-center bg-muted">
            <ImageIcon className="size-4 text-muted-foreground" />
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>営業・企画営業（法人向け）</ItemTitle>
          <ItemDescription>浦添市・正社員・月給 25万円</ItemDescription>
        </ItemContent>
        <ItemFooter>
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline">Web履歴書OK</Badge>
          </div>
          <Button size="sm" disabled>
            応募済み
          </Button>
        </ItemFooter>
      </Item>
    </div>
  )
}

export const itemDoc: ComponentDoc = {
  name: "item",
  title: "Item",
  category: "データ表示",
  purpose:
    "アイコン・タイトル・説明・アクションを1行にまとめて並べるリスト行コンポーネント。ItemGroup と ItemSeparator で境界線付きのリストを組み立てられる。求人リストの行、マイページの設定メニュー、通知のオン・オフ設定など、同じ形の行を縦に積む場面で使う。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        'ItemMedia（variant="icon"）・ItemContent・ItemActions を並べた基本形。variant は outline / muted、size は sm を切り替えられ、複数行は ItemGroup と ItemSeparator でまとめる。',
      previewHeight: 400,
      Demo: BasicPattern,
    },
    {
      id: "settings-menu",
      title: "設定メニュー",
      description:
        "render プロップに a 要素を渡して各行をリンク化した設定メニュー。通知設定やブロック企業などマイページの遷移先一覧に使い、件数は Badge、遷移できることは ChevronRight で示す。",
      previewHeight: 400,
      Demo: SettingsMenuPattern,
    },
    {
      id: "notification-settings",
      title: "通知設定",
      description:
        "ItemActions に Switch を置いたオン・オフ設定のリスト。新着求人やいいかも！など通知の種類ごとに1行を割り当て、説明文で通知のタイミングを補足する。",
      previewHeight: 400,
      Demo: NotificationSettingsPattern,
    },
    {
      id: "job-card",
      title: "求人カード",
      description:
        "ItemHeader に企業名と更新日、ItemFooter にバッジと応募ボタンを置いた求人カード。応募済みの求人はボタンを disabled にして二重応募を防ぐ。",
      previewHeight: 560,
      Demo: JobCardPattern,
    },
  ],
}
