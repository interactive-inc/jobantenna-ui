---
version: alpha
name: ジョブアンテナ UI
description: 製品から独立した規範デザインシステム
colors:
  background: "oklch(1 0 0)"
  foreground: "oklch(0.145 0 0)"
  brand: "oklch(0.852 0.199 91.936)"
  brandForeground: "oklch(0.421 0.095 57.708)"
  card: "oklch(1 0 0)"
  cardForeground: "oklch(0.145 0 0)"
  popover: "oklch(1 0 0)"
  popoverForeground: "oklch(0.145 0 0)"
  primary: "oklch(0.852 0.199 91.936)"
  primaryForeground: "oklch(0.421 0.095 57.708)"
  secondary: "oklch(0.967 0.001 286.375)"
  secondaryForeground: "oklch(0.21 0.006 285.885)"
  muted: "oklch(0.97 0 0)"
  mutedForeground: "oklch(0.556 0 0)"
  accent: "oklch(0.97 0 0)"
  accentForeground: "oklch(0.205 0 0)"
  destructive: "oklch(0.577 0.245 27.325)"
  border: "oklch(0.922 0 0)"
  input: "oklch(0.922 0 0)"
  ring: "oklch(0.708 0 0)"
  sidebar: "oklch(0.985 0 0)"
  sidebarForeground: "oklch(0.145 0 0)"
  sidebarPrimary: "oklch(0.681 0.162 75.834)"
  sidebarPrimaryForeground: "oklch(0.987 0.026 102.212)"
  sidebarAccent: "oklch(0.97 0 0)"
  sidebarAccentForeground: "oklch(0.205 0 0)"
  sidebarBorder: "oklch(0.922 0 0)"
  sidebarRing: "oklch(0.708 0 0)"
typography:
  heading-xl:
    fontFamily: Noto Sans JP Variable
    fontSize: 1.5rem
    fontWeight: 700
  heading-md:
    fontFamily: Noto Sans JP Variable
    fontSize: 1.125rem
    fontWeight: 600
  body-md:
    fontFamily: Noto Sans JP Variable
    fontSize: 1rem
    lineHeight: 1.5
  body-sm:
    fontFamily: Noto Sans JP Variable
    fontSize: 0.875rem
    lineHeight: 1.5
  label-xs:
    fontFamily: Noto Sans JP Variable
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 6px
  md: 8px
  lg: 10px
  xl: 14px
  2xl: 18px
  3xl: 22px
  4xl: 26px
spacing:
  sm: 2px
  md: 4px
  lg: 8px
  xl: 16px
components:
  logo:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.brandForeground}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primaryForeground}"
    rounded: "{rounded.4xl}"
    padding: "{spacing.lg}"
    typography: "{typography.body-sm}"
    height: 36px
  button-destructive:
    textColor: "{colors.destructive}"
    rounded: "{rounded.4xl}"
  badge:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondaryForeground}"
    rounded: "{rounded.3xl}"
    typography: "{typography.label-xs}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.cardForeground}"
    rounded: "{rounded.4xl}"
    padding: "{spacing.xl}"
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.3xl}"
    height: 36px
  popover:
    backgroundColor: "{colors.popover}"
    textColor: "{colors.popoverForeground}"
    rounded: "{rounded.3xl}"
  menu-item:
    rounded: "{rounded.2xl}"
    padding: "{spacing.lg}"
    typography: "{typography.body-sm}"
  empty-state:
    textColor: "{colors.mutedForeground}"
    padding: "{spacing.xl}"
  sidebar:
    backgroundColor: "{colors.sidebar}"
    textColor: "{colors.sidebarForeground}"
    width: 256px
---

## Overview

転職・求人サービスのための、製品から独立した規範デザインシステム。

コンセプトは3つ。(1) スマホの片手で完結する — 設計は常にモバイルファースト。1カラム、主要アクションは親指が届く下側、タップ領域は最小 36px。(2) 重い決断を軽い一歩に分解する — 応募のような重い行動の隣に必ず軽い行動(保存・気になる)を併置し、空状態と完了画面では次の一歩を1つ示す。(3) モダンでポップに、でもポップ過ぎない — ポップさは形と一色のアクセントと励ますことばの3つだけで出し、土台はグレースケールの落ち着きで真剣さを支える。

造形の原則は基本原則(近接・整列・反復・対比)の上に5つ。(1) アクセントはアンバー1色で、画面の主要な次のアクションだけが光る。(2) 彩度は状態の意味にだけ使い、装飾に使わない。(3) ピル形状のボタンと大きな角丸で親しみを作る。操作するものほど丸い。(4) 余白は 2/4/8/16px の4段階のリズムを守る。(5) 書体は Noto Sans JP の一書体運用で、階層はサイズとウェイトで作る。

文言はです・ます調。感嘆符は完了・祝福だけ(「完了しました！」)、注意は ※ 前置き、空状態は「現状+次の一歩」の2文と CTA、破壊的操作は「この操作は取り消せません。」を明記して確認を挟む。

## Colors

グレースケール基調に、単一のアンバー系アクセント。

- **Brand (`{colors.brand}`):** アイデンティティの固定色。ロゴや象徴的な演出専用で、テーマで変化しない。UI の状態表現には使わない。
- **Primary (`{colors.primary}`):** UI の主要アクション専用。1画面に原則1つ。ブランド由来だがテーマごとにコントラストを優先して調整される(brand と primary は別トークン)。
- **Secondary (`{colors.secondary}`):** 軽い代替アクション、サブボタン。
- **Muted / Accent (`{colors.muted}` / `{colors.accent}`):** 補助領域の背景と、ホバー・選択状態。
- **Destructive (`{colors.destructive}`):** 削除などの破壊的操作と、未読バッジ。唯一の警告色。
- **Border / Input / Ring:** 枠線、入力欄の境界、フォーカスリング。
- **Sidebar 系:** ナビゲーション専用トークン。背景は本体と同化させ、線でなく余白で区切る。

状態を伝える拡張色は意味を固定する: 青=相手からの事実(応募など)、紫=こちらから送ったシグナル、緑=相手から届いたシグナル、黄=内部メモ、赤=未読・破壊的操作。公開状態のような進行中の状態は彩度でなく 塗り=公開中 / outline=停止 / secondary=下書き のバッジで表す。チャートの系列は明度5段階のグレー(chart-1〜5)で区別し、彩度を持ち込まない。

## Typography

Noto Sans JP Variable の一書体運用。日本語の可読性を最優先し、ウェイトは 400(本文)・500(ラベル)・600〜700(見出し)を使う。`{typography.heading-xl}` がページタイトル、`{typography.body-sm}` が UI の基本サイズ、`{typography.label-xs}` がバッジやメタ情報。

## Layout

余白は `{spacing.sm}`(2px)・`{spacing.md}`(4px)・`{spacing.lg}`(8px)・`{spacing.xl}`(16px) の4値のみ。中間値(6px、12px など)を使いたくなったら階層設計を見直す。モバイルの1カラムから高密度なテーブル・カードグリッドまで、同じ4段階で組む。縦の間隔は margin でなく gap で作る。

## Shapes

角丸は大きいほうが主役。`{rounded.4xl}`(26px) がボタン(ピル形状)・カード・ダイアログ、`{rounded.3xl}`(22px) が入力欄・バッジ・ポップオーバー、`{rounded.2xl}`(18px) がメニュー項目・タブ、`{rounded.lg}`(10px、基準値) がツールチップなど最小の面。`{rounded.sm}` と `{rounded.md}` はスケール定義のみで現状未使用。

## Components

- **logo:** brand を使う唯一のコンポーネント。アイデンティティの表現専用。
- **button-primary:** 主要アクション。ピル形状、1画面に原則1つ。
- **button-destructive:** 破壊的操作。塗りでなく `{colors.destructive}` の文字色 + 薄い背景。
- **badge:** タグや状態表示。`{typography.label-xs}` の小さなピル。
- **card:** 一覧カード・統計カードの基盤。`{rounded.4xl}` + `{spacing.xl}`。
- **input:** フォーム入力。高さ 36px、フォーカスで `{colors.ring}` のリング。
- **popover:** 補足ヘルプや通知の浮き面。
- **menu-item:** ドロップダウン・セレクトの項目。`{rounded.2xl}`。
- **empty-state:** 空状態。「現状+次の一歩」の2文と CTA で構成する。
- **sidebar:** ナビゲーション。幅 256px、背景は本体と同化させ余白で区切る。

## Do's and Don'ts

- 余白は 2/4/8/16px の4値のみ。任意の px 値を直接書かない。
- primary は主要アクション専用。1画面に primary ボタンを並べない。
- brand はロゴ・象徴的な演出専用。UI のボタン・リンク・状態表現に brand を使わない。
- 彩度のある色は状態の意味にだけ。意味の割り当て(青=相手からの事実、紫=送信、緑=受信、黄=メモ、赤=未読/破壊)を崩さない。
- ダークテーマは `.dark` の対応トークンを使い、ライト用の値を流用しない。
