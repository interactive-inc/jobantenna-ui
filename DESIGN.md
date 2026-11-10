---
version: alpha
name: ジョブアンテナ UI
description: 製品から独立した規範デザインシステム
colors:
  background: "oklch(1 0 0)"
  foreground: "oklch(0.145 0 0)"
  brand: "#ffc306"
  brandForeground: "#262f37"
  card: "oklch(1 0 0)"
  cardForeground: "oklch(0.145 0 0)"
  popover: "oklch(1 0 0)"
  popoverForeground: "oklch(0.145 0 0)"
  primary: "#262f37"
  primaryForeground: "#ffffff"
  secondary: "#eef1f4"
  secondaryForeground: "#262f37"
  interest: "#ffc306"
  interestForeground: "#262f37"
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
    fontFamily: LINE Seed JP
    fontSize: 2rem
    lineHeight: 1.375
    fontWeight: 700
  heading-md:
    fontFamily: LINE Seed JP
    fontSize: 1.5rem
    lineHeight: 1.3333
    fontWeight: 700
  body-md:
    fontFamily: LINE Seed JP
    fontSize: 1rem
    lineHeight: 1.5
    fontWeight: 400
  body-sm:
    fontFamily: LINE Seed JP
    fontSize: 0.875rem
    lineHeight: 1.5714
    fontWeight: 400
  label-xs:
    fontFamily: LINE Seed JP
    fontSize: 0.75rem
    lineHeight: 1.3333
    fontWeight: 700
  number-md:
    fontFamily: Inter
    fontSize: 1.75rem
    lineHeight: 1.2857
    fontWeight: 600
rounded:
  container: 16px
  outer: 8px
  inner: 8px
spacing:
  dense:
    sm: 4px
    md: 8px
    lg: 12px
    xl: 16px
  loose:
    sm: 24px
    md: 32px
    lg: 48px
components:
  logo:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.brandForeground}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primaryForeground}"
    rounded: "{rounded.outer}"
    padding: "{spacing.dense.md}"
    typography: "{typography.body-sm}"
    height: 40px
  button-secondary:
    backgroundColor: "{colors.primaryForeground}"
    textColor: "{colors.primary}"
    borderColor: "{colors.input}"
    rounded: "{rounded.outer}"
    height: 40px
  button-interest:
    backgroundColor: "{colors.interest}"
    textColor: "{colors.interestForeground}"
    rounded: "{rounded.outer}"
    height: 40px
  badge:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondaryForeground}"
    rounded: full
    typography: "{typography.label-xs}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.cardForeground}"
    rounded: "{rounded.container}"
    padding: "{spacing.dense.xl}"
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.outer}"
    height: 40px
  popover:
    backgroundColor: "{colors.popover}"
    textColor: "{colors.popoverForeground}"
    rounded: "{rounded.outer}"
    padding: "{spacing.dense.xl}"
  menu-item:
    rounded: "{rounded.inner}"
    padding: "{spacing.dense.md}"
    typography: "{typography.body-sm}"
  empty-state:
    textColor: "{colors.mutedForeground}"
    rounded: "{rounded.outer}"
    padding: "{spacing.loose.lg}"
  sidebar:
    backgroundColor: "{colors.sidebar}"
    textColor: "{colors.sidebarForeground}"
    width: 256px
---

## Overview

転職・求人サービスのための、製品から独立した規範デザインシステム。

スマートフォンでは読む順番に合わせて縦に並べる。操作を下に固定する場合は、本文や下部ナビゲーションに重ねない。広い画面では、一覧と詳細など見比べたい内容を並べる。応募の検討を続けられるよう、必要な場面では保存やフォローを用意する。普段は事実と次の操作を短く伝え、節目は温かい言葉で伝える。

造形の原則は基本原則(近接・整列・反復・対比)の上に5つ。(1) 黄色のアクセントはロゴ・現在地・いいかもに使う。(2) 彩度は状態の意味にだけ使い、装飾に使わない。(3) 角丸はカードと画面の区画、操作部品の外枠、その中に並ぶ項目の役割で選ぶ。(4) 余白は部品内と画面全体の階層に合わせて選ぶ。(5) 日本語と数値のまとまりで書体を使い分け、文字の階層はサイズと太さで表す。

文言はです・ます調。操作ラベルには「保存する」「公開を止める」のように動詞を使う。空の表示では何がないかを伝え、次の操作がある場合は一つ案内する。取り消せない操作は、何が変わるかを示してから確認する。

## Colors

グレースケール基調に、単一のアンバー系アクセント。

- **Brand (`{colors.brand}`):** テーマで変化しない固定色。ロゴとナビゲーションの現在地に使う。
- **Primary (`{colors.primary}`):** UI の主要アクション専用。1画面に原則1つ。明るい面では墨色を使う。
- **Secondary (`{colors.secondary}`):** 副操作、キャンセル、ボタン型のリンク。
- **Interest:** いいかもの送信に使う黄色のボタン。
- **Muted / Accent (`{colors.muted}` / `{colors.accent}`):** 補助領域の背景と、ホバー・選択状態。
- **Destructive (`{colors.destructive}`):** 失敗や入力エラーの色。削除などの確定ボタンは Primary を使う。
- **Border / Input / Ring:** 枠線、入力欄の境界、フォーカスリング。
- **Sidebar 系:** ナビゲーション専用トークン。背景は本体と同化させ、線でなく余白で区切る。

状態は淡い地と濃い文字を組み合わせ、文言でも伝える。応募と新着は青、両思いと受信したいいかもは黄、掲載中と条件の一致は緑、公開停止は灰、要確認と未入力の必須項目は橙、失敗は赤を使う。候補者との関係は選んだ求人について一つだけ表示し、応募、両思い、受信したいいかもの順で優先する。チャートの系列は chart-1〜5 の明度差と凡例で区別する。

## Typography

日本語は LINE Seed JP の Regular（400）と Bold（700）を使う。ページタイトルは `{typography.heading-xl}`、本文は `{typography.body-md}`、補足は `{typography.body-sm}`。件数・金額・日時など数字だけのまとまりには Inter を使い、文中の数字と単位は LINE Seed JP で揃える。表で比較する数値は等幅数字を使って右揃えにする。

## Layout

余白は4・8・12・16・24・32・48pxを使う。関連する項目の間隔は詰め、役割が切り替わる面の間隔は広げる。縦の間隔は `gap` や `space-y` で作る。

一覧・詳細・フォームの本文枠は、四辺に `--ja-layout-page-inset` を使う。640px未満は16px、640px以上は32px、1280px以上は48px。本文と補助欄を並べる詳細画面では、640px以上で四辺に `--ja-layout-panel-gutter`（24px）を使える。独立したスクロール領域を持つ画面や印刷は用途別の枠を使う。

サイドバー横の本文面を画面の右端まで伸ばす場合は、右端の外側の余白と角丸を外す。面の内側では本文の四辺に同じ余白を取る。 候補者詳細の概要・本文・社内欄はカード内側の左右を揃え、640px未満は16px、640px以上は24pxにする。 1280px以上のホームは会社の状況と本文を別々にスクロールし、本文は上下48px、左右64pxを取る。

## Shapes

一覧カードの補助操作はカードの下段にまとめる。スマホでは高さ48pxの操作領域に、アイコンと短いラベルを並べる。完了状態では押せないことをラベルと表示で伝える。

カードと画面の区画には `--radius-container`（16px）、ボタンや入力欄の外枠には `--radius-outer`（8px）、外枠の中に並ぶ項目には `--radius-inner`（8px）を使う。外枠と項目には用途に応じた名前を使う。丸い写真、状態の札、ピル型の切り替え、区分内メニューのホバー面には `rounded-full` を使う。

## Images

求人写真・企業ロゴなどの img は、代替テキスト・領域の予約・トリミング方針の3点を決めてから置く。情報を持つ画像は内容を alt に書き、装飾画像は alt を空にする。width / height か aspect-ratio で読み込み前に領域を確保し(SSG 配信のため CLS が目立つ)、求人写真は掲載先の比率を使い、object-cover で表示する。企業ロゴは object-contain で全体を表示する。ファーストビュー外は loading="lazy"、LCP 候補は eager + fetchpriority="high" にする。求人票一覧の写真は4:3。1280px以上では標準120×90px、対象が20件を超える場合は96×72pxにする。画像が未登録の場合と読み込みに失敗した場合は、写真と同じ枠にアイコンを置く。

## Accessibility

環境や身体条件によらず同じ情報にたどり着けることを、後付けでなく最初から守る。アイコンだけのボタンは aria-label か sr-only テキストで名前を付け、フォームは Label と input の id を必ず紐付ける。本文のコントラストは WCAG AA(4.5:1)を満たし、ブランドの黄色に白文字を載せない(黄色の上は墨色の文字を使う)。focus-visible のフォーカスリングを消さず、Esc や矢印キーの挙動は Base UI に任せて独自実装しない。状態は色だけで伝えずテキストを併記する。モーションは装飾にとどめ、自動再生と無限ループを避け、prefers-reduced-motion を尊重する。

## Components

- **logo:** ロゴには brand を使う。
- **button-primary:** 主要アクション。`{rounded.outer}` の面、1画面に原則1つ。
- **button-secondary:** 副操作とキャンセル、ボタン型のリンクに使う。移動だけの導線は青いテキストリンクにする。
- **button-ghost:** 行の追加などの補助操作に使う。
- **alert-dialog:** 白いキャンセルと墨色の確定ボタンを並べ、確定ボタンには「削除する」のように操作を書く。
- **badge:** タグや状態表示。`{typography.label-xs}` の `rounded-full` ピル。
- **card:** 本文と補足は罫線のない白い面と淡い面で分ける。入力欄など境界が必要な箇所には枠線を使う。
- **input:** フォーム入力。`{rounded.outer}` の面、高さ 40px、フォーカスで `{colors.ring}` のリング。
- **popover:** 補足ヘルプや通知の浮き面。`{rounded.outer}` + `{spacing.dense.xl}`。
- **menu-item:** ドロップダウン・セレクトの項目。面の中の反復項目なので `{rounded.inner}`。
- **empty-state:** 空状態。`{rounded.outer}` の面、`{spacing.loose.md}` の内側パディングで「現状+次の一歩」の2文と CTA を包む。
- **sidebar:** 区分内のナビゲーション。現在地は黄色の印と太字で示す。縦に固定する場合は本文と別にスクロールできるようにする。

## Do's and Don'ts

- 余白は共通の7段階と用途別のトークンを使う。任意の px 値を直接書かない。
- 角丸は用途別のトークンから選ぶ。円・ピルは `rounded-full` を使う。
- primary は主要アクション専用。1画面に primary ボタンを並べない。
- brand はロゴとナビゲーションの現在地に使う。いいかものボタンには Interest を使う。
- 状態の色は用途を揃え、短い文言を添える。
- ダークテーマは `.dark` の対応トークンを使い、ライト用の値を流用しない。
- 薄い色の背景は透過で作らない。バッジをアイコンに重ねても下が透けないよう、不透明の色(color-mix)で塗る。
- ソーシャルログインなど他社ブランドの要素は各社の公式アセットとガイドラインを優先し、テーマトークンで塗り替えない。
- 更新時期などのメタ情報はバッジにせず、テキストで添える。バッジは属性や状態を短く伝えるときに使う。
- ナビゲーションの新着は青で示す。対応すると減る件数は白文字の丸い札にし、99を超えるときは「99+」と表示する。新着の有無だけを伝える場合は点を使う。
