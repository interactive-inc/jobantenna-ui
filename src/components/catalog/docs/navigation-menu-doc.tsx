import type { ComponentDoc } from "@/components/catalog/component-doc"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  BriefcaseIcon,
  Building2Icon,
  BuildingIcon,
  ClipboardListIcon,
  FileTextIcon,
  FootprintsIcon,
  HeartIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  MessageSquareIcon,
  NewspaperIcon,
  SendIcon,
  SparklesIcon,
  StarIcon,
  ThumbsUpIcon,
  TrophyIcon,
} from "lucide-react"

/**
 * トリガーで開くパネルと単独リンクを組み合わせたグローバルナビゲーション
 */
function BasicPattern() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>求人を探す</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-64 gap-1">
              <NavigationMenuLink href="#">
                <BriefcaseIcon />
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">職種から探す</span>
                  <span className="text-muted-foreground text-xs">営業・事務・エンジニアなど</span>
                </div>
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <MapPinIcon />
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">エリアから探す</span>
                  <span className="text-muted-foreground text-xs">
                    那覇市・浦添市・宜野湾市など
                  </span>
                </div>
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <BuildingIcon />
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">企業から探す</span>
                  <span className="text-muted-foreground text-xs">
                    注目企業の求人をまとめてチェック
                  </span>
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>雇用形態</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-48 gap-1">
              <NavigationMenuLink href="#">正社員</NavigationMenuLink>
              <NavigationMenuLink href="#">契約社員</NavigationMenuLink>
              <NavigationMenuLink href="#">アルバイト・パート</NavigationMenuLink>
              <NavigationMenuLink href="#">派遣社員</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="h-9 px-4 py-2">
            <NewspaperIcon />
            お仕事コラム
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

/**
 * 「求人を探す」「会社を探す」の2カラムメガメニュー
 */
function MegaMenuPattern() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>求人を探す</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-96 grid-cols-2 gap-2">
              <NavigationMenuLink href="#" className="row-span-3 flex-col items-start">
                <div className="flex aspect-video w-full items-center justify-center rounded-(--radius-inner) bg-muted">
                  <TrophyIcon className="size-6 text-muted-foreground" />
                </div>
                <span className="font-medium">求人ランキング</span>
                <span className="text-muted-foreground text-xs">
                  アンテナレベル上位の人気求人 TOP10
                </span>
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <SparklesIcon />
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">新着求人</span>
                  <span className="text-muted-foreground text-xs">本日更新の求人 32 件</span>
                </div>
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <ThumbsUpIcon />
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">おすすめ求人</span>
                  <span className="text-muted-foreground text-xs">Web履歴書をもとにご提案</span>
                </div>
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <BriefcaseIcon />
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">職種から探す</span>
                  <span className="text-muted-foreground text-xs">営業・事務・エンジニアなど</span>
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>会社を探す</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-64 gap-1">
              <NavigationMenuLink href="#">
                <Building2Icon />
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">業種から探す</span>
                  <span className="text-muted-foreground text-xs">
                    ソフトウェア・情報処理、インターネット関連など
                  </span>
                </div>
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <StarIcon />
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">フォロー中の会社</span>
                  <span className="text-muted-foreground text-xs">
                    フォローした会社の新着求人をチェック
                  </span>
                </div>
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <FootprintsIcon />
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">あしあと</span>
                  <span className="text-muted-foreground text-xs">あなたのWeb履歴書を見た会社</span>
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

/**
 * 採用管理画面のヘッダーナビ。未読件数を Badge で示す
 */
function AdminHeaderPattern() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="h-9 px-4 py-2">
            <LayoutDashboardIcon />
            ダッシュボード
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="h-9 px-4 py-2">
            <FileTextIcon />
            求人票
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>候補者</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-56 gap-1">
              <NavigationMenuLink href="#">
                <ClipboardListIcon />
                候補者リスト
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <SendIcon />
                送ったいいかも
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <HeartIcon />
                もらったいいかも
                <Badge className="ml-auto">3</Badge>
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <FootprintsIcon />
                あしあと
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <StarIcon />
                フォロー
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>応募者</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-56 gap-1">
              <NavigationMenuLink href="#">
                <ClipboardListIcon />
                進捗管理
                <Badge variant="secondary" className="ml-auto">
                  未選考 8
                </Badge>
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <MessageSquareIcon />
                メッセージ
                <Badge variant="destructive" className="ml-auto">
                  5
                </Badge>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export const navigationMenuDoc: ComponentDoc = {
  name: "navigation-menu",
  title: "Navigation Menu",
  category: "ナビゲーション",
  purpose:
    "サイトヘッダーに置くグローバルナビゲーションです。トリガーにホバー・クリックするとパネルが開き、リンクを階層で整理して見せられます。ジョブアンテナでは求職者向けサイトの「求人を探す」「会社を探す」メガメニューや、採用管理画面のヘッダーナビに使います。",
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "トリガーで開くパネルと単独リンクを組み合わせた基本形です。アイコン+説明文つきのリンクで探し方の入口をまとめ、パネル不要の項目は NavigationMenuLink を直接置きます。",
      previewHeight: null,
      Demo: BasicPattern,
    },
    {
      id: "mega-menu",
      title: "メガメニュー",
      description:
        "「求人を探す(新着・おすすめ・ランキング)」「会社を探す」の2カラムメガメニューです。row-span の特集リンクに bg-muted のプレースホルダ画像を置き、通常リンクと並べて入口を一望できるようにします。",
      previewHeight: 400,
      Demo: MegaMenuPattern,
    },
    {
      id: "admin-header",
      title: "採用管理ヘッダー",
      description:
        "採用管理画面のヘッダーナビです。単独リンクとドロップダウンを混在させ、もらったいいかもや未読メッセージの件数は ml-auto の Badge で右端に表示します。",
      previewHeight: 360,
      Demo: AdminHeaderPattern,
    },
  ],
}
