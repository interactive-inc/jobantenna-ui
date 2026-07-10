---
version: alpha
name: Job Antenna UI
description: shadcn base-luma スタイル、neutral ベースカラー、Noto Sans JP を採用した管理画面向けデザインシステム
colors:
  background: "oklch(1 0 0)"
  foreground: "oklch(0.145 0 0)"
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
  body-md:
    fontFamily: Noto Sans JP Variable
    fontSize: 1rem
    lineHeight: 1.5
  label-sm:
    fontFamily: Noto Sans JP Variable
    fontSize: 0.875rem
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
---

## Overview

shadcn/ui の `base-luma` スタイルをベースに、neutral のグレースケールへ単一のアンバー系アクセントカラー(`{colors.primary}`)を差し込んだ管理画面向けシステム。ライト/ダークの両テーマを oklch で定義し、コンポーネントは `@base-ui/react` のプリミティブ上に構築する。

## Colors

ニュートラルなグレースケールを基調に、`primary` のアンバーを唯一のアクセントとして使う。

- **Primary (`{colors.primary}`):** 主要な CTA・選択状態・ハイライトに使う唯一のアクセントカラー。
- **Secondary (`{colors.secondary}`):** サブアクションやセカンダリボタンの背景。
- **Muted (`{colors.muted}`):** 補助テキストや非活性領域の背景。
- **Accent (`{colors.accent}`):** ホバー・フォーカスなどのインタラクション時の背景。
- **Destructive (`{colors.destructive}`):** 削除など破壊的操作の警告色。
- **Border / Input / Ring (`{colors.border}` / `{colors.input}` / `{colors.ring}`):** 枠線、入力欄の境界、フォーカスリング。
- **Sidebar 系:** サイドバー専用のトークンセットを独立して持ち、本体の配色から少し明度を変えて奥行きを出す。

## Typography

日本語表示を前提に Noto Sans JP Variable を全体の基準フォントとする。可変フォントのため太さの指定は `font-weight` の数値でそのまま制御できる。

## Layout

余白は `{spacing.sm}` (2px) を最小単位とした 2, 4, 8, 16px の4段階スケールで統一する。

- **sm (2px):** アイコンとラベルの間など最小のすき間。
- **md (4px):** 密なリスト項目内のギャップ。
- **lg (8px):** コンポーネント内部のデフォルトパディング。
- **xl (16px):** セクション間やカードの外側余白。

余白は必ずこの4値のいずれかを使い、中間値(例: 6px, 12px)は使わない。

## Shapes

角丸は `--radius: 0.625rem` (10px) を基準に、用途に応じて 6px 〜 26px のスケールを使い分ける。小さい要素ほど小さい半径、コンテナやポップアップなど大きい面ほど大きい半径を割り当てる。

- **sm (6px):** チェックボックスなど最小要素。
- **md (8px):** 入力欄、ボタン。
- **lg (10px):** 標準コンポーネント(基準値)。
- **xl (14px):** カード、サイドバーグループ。
- **2xl / 3xl (18px / 22px):** ダイアログ、メニュー、コマンドパレットの内側要素。
- **4xl (26px):** ポップオーバーやコマンドパレットの外枠。

## Components

- **button:** `{colors.primary}` 背景、`{rounded.lg}` の角丸、`{spacing.lg}` の内側パディング。
- **card:** `{colors.card}` 背景、`{rounded.xl}` の角丸、`{spacing.xl}` の外側余白。
- **input:** `{colors.input}` の境界線、`{rounded.md}` の角丸、フォーカス時に `{colors.ring}` のリング。
- **sidebar:** `{colors.sidebar}` 背景、独立したアクセント/ボーダートークンで本体と区別。

## Do's and Don'ts

- 余白は 2 / 4 / 8 / 16px の4値のみを使う。任意の px 値を直接指定しない。
- アクセントカラーは `{colors.primary}` の一色運用とし、新たな彩度の高い色を追加しない。
- ダークテーマは `.dark` スコープの対応トークンをそのまま使い、ライト用の値を流用しない。
