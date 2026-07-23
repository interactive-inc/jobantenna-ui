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
  outer: 8px
  inner: 4px
spacing:
  dense:
    sm: 2px
    md: 4px
    lg: 8px
    xl: 16px
  loose:
    sm: 32px
    md: 48px
    lg: 64px
components:
  logo:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.brandForeground}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primaryForeground}"
    rounded: "{rounded.outer}"
    padding: "{spacing.dense.lg}"
    typography: "{typography.body-sm}"
    height: 36px
  button-destructive:
    textColor: "{colors.destructive}"
    rounded: "{rounded.outer}"
  badge:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondaryForeground}"
    rounded: full
    typography: "{typography.label-xs}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.cardForeground}"
    rounded: "{rounded.outer}"
    padding: "{spacing.dense.xl}"
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.outer}"
    height: 36px
  popover:
    backgroundColor: "{colors.popover}"
    textColor: "{colors.popoverForeground}"
    rounded: "{rounded.outer}"
    padding: "{spacing.dense.xl}"
  menu-item:
    rounded: "{rounded.inner}"
    padding: "{spacing.dense.lg}"
    typography: "{typography.body-sm}"
  empty-state:
    textColor: "{colors.mutedForeground}"
    rounded: "{rounded.outer}"
    padding: "{spacing.loose.md}"
  sidebar:
    backgroundColor: "{colors.sidebar}"
    textColor: "{colors.sidebarForeground}"
    width: 256px
---

## Overview

転職・求人サービスのための、製品から独立した規範デザインシステム。

コンセプトは3つ。(1) スマホの片手で完結する — 設計は常にモバイルファースト。1カラム、主要アクションは親指が届く下側、タップ領域は最小 36px。(2) 重い決断を軽い一歩に分解する — 応募のような重い行動の隣に必ず軽い行動(保存・気になる)を併置し、空状態と完了画面では次の一歩を1つ示す。(3) モダンでポップに、でもポップ過ぎない — ポップさは形と一色のアクセントと励ますことばの3つだけで出し、土台はグレースケールの落ち着きで真剣さを支える。

造形の原則は基本原則(近接・整列・反復・対比)の上に5つ。(1) アクセントはアンバー1色で、画面の主要な次のアクションだけが光る。(2) 彩度は状態の意味にだけ使い、装飾に使わない。(3) 角丸は面(`{rounded.outer}`)と項目(`{rounded.inner}`)の2値だけで決め、用途ごとに半径を発明しない。円・ピルは `rounded-full` の別枠。(4) 余白はカードの中の密な4段階(2/4/8/16px)と、面と面の間の大きい3段階(32/48/64px)の2層で組む。(5) 書体は Noto Sans JP の一書体運用で、階層はサイズとウェイトで作る。

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

余白には2つの層がある。要素どうしの近さを作る密な間隔が `{spacing.dense.sm}`(2px)・`{spacing.dense.md}`(4px)・`{spacing.dense.lg}`(8px)・`{spacing.dense.xl}`(16px)、面と面を区切る大きい余白が `{spacing.loose.sm}`(32px)・`{spacing.loose.md}`(48px)・`{spacing.loose.lg}`(64px)。中間値(6px、12px など)を使いたくなったら階層設計を見直す。

密な間隔はカードの中、要素どうしの近さに使う。大きい余白はカードの中では使わず、面と面の間、または中身が少ない面の内側にだけ使う。モバイルの1カラムから高密度なテーブル・カードグリッドまで、同じ2層で組む。縦の間隔は margin でなく gap / space-y で作る。

## Shapes

角丸は `{rounded.outer}`(8px) と `{rounded.inner}`(4px) の2つの意味トークンだけで決める。独立した面(Button・Card・Input・Popover など、それ自体で完結する要素)には outer、面の中で繰り返される項目(メニュー項目・TabsTrigger など)には inner。用途ごとに半径を発明しない。outer / inner は Tailwind 標準デフォルトの `rounded-lg` / `rounded-sm` にそのまま固定していて、値を独自に計算しない。

面を入れ子にするときは目安として `outer = inner + p-1` を意識する。現在の値ではこの関係が成立していて、面に outer・その中の項目に inner・間を p-1 空けると外側と内側の曲線が同心になるが、これは固定スケール値の組み合わせがたまたま一致しているだけで、恒常的に保証された関係ではない。

Badge・Avatar・Switch・Slider など円とトラック(細長い丸)形状には `rounded-full` を使う。これは2トークンの外にある別枠の指定で、面の大小のグラデーションではない。

## Components

- **logo:** brand を使う唯一のコンポーネント。アイデンティティの表現専用。
- **button-primary:** 主要アクション。`{rounded.outer}` の面、1画面に原則1つ。
- **button-destructive:** 破壊的操作。塗りでなく `{colors.destructive}` の文字色 + 薄い背景。
- **badge:** タグや状態表示。`{typography.label-xs}` の `rounded-full` ピル。
- **card:** 一覧カード・統計カードの基盤。`{rounded.outer}` + `{spacing.dense.xl}`。
- **input:** フォーム入力。`{rounded.outer}` の面、高さ 36px、フォーカスで `{colors.ring}` のリング。
- **popover:** 補足ヘルプや通知の浮き面。`{rounded.outer}` + `{spacing.dense.xl}`。
- **menu-item:** ドロップダウン・セレクトの項目。面の中の反復項目なので `{rounded.inner}`。
- **empty-state:** 空状態。`{rounded.outer}` の面、`{spacing.loose.md}` の内側パディングで「現状+次の一歩」の2文と CTA を包む。
- **sidebar:** ナビゲーション。幅 256px、背景は本体と同化させ余白で区切る。項目は面の中の反復項目なので `{rounded.inner}`。

## Do's and Don'ts

- 余白は密な4値(2/4/8/16px)と大きい3値(32/48/64px)の計7値のみ。任意の px 値を直接書かない。
- 角丸は `{rounded.outer}` と `{rounded.inner}` の2値のみ。中間の半径を個別に選ばない。円・ピルは `rounded-full` を使う。
- primary は主要アクション専用。1画面に primary ボタンを並べない。
- brand はロゴ・象徴的な演出専用。UI のボタン・リンク・状態表現に brand を使わない。
- 彩度のある色は状態の意味にだけ。意味の割り当て(青=相手からの事実、紫=送信、緑=受信、黄=メモ、赤=未読/破壊)を崩さない。
- ダークテーマは `.dark` の対応トークンを使い、ライト用の値を流用しない。
