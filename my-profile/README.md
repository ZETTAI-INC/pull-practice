# 📇 my-profile — Stage 1〜5 完成形プロジェクト

これは **CLAUDE研修 Stage 4 で作る「自己紹介ページ」の完成形コード**です。

⭐ **このコードは「お手本」です。** あなたが作ったものと比べて、違いを楽しんでください。

職務経歴書スタイルの本格的なポートフォリオページ構成になっていて、**Stage 1〜5 の延長線でここまで作れる** ── という到達点を見せるためのものです。

---

## ⚠️ 大事なこと

**このプロジェクトを動かす必要はありません。**

`npm install` も `npm run dev` もしなくてOK。**ファイルを開いて読むだけ**で、Stage 5 はクリアできます。

なぜなら、このリポジトリの目的は「pull の体験」と「完成形コードを読むこと」だから。動かさなくても、コードを読めば「あ、自分のと同じ書き方だ」「ここは違うな」が分かります。

---

## 🗂 ファイル構成

```
my-profile/
├── package.json              … 使うライブラリの一覧
├── vite.config.ts            … Vite の設定
├── tsconfig.json             … TypeScript の設定
├── tailwind.config.js        … Tailwind CSS の設定
├── postcss.config.js         … PostCSS の設定（Tailwind を動かすのに必要）
├── index.html                … ブラウザが最初に読むHTML
├── .gitignore                … GitHub に上げないファイル一覧（★ .env を守る）
└── src/
    ├── main.tsx              … プログラムの入り口
    ├── ⭐ App.tsx             … ページ全体の組み立て役（職務経歴書のレイアウト）
    ├── index.css             … 色の定義（CSS変数）
    ├── data/
    │   └── ⭐ profile.ts      … 山田太郎のプロフィール・経歴・スキル・作品データ
    ├── components/ui/
    │   ├── card.tsx          … Card 部品（shadcn/ui スタイル）
    │   └── badge.tsx         … Badge 部品（タグや成果指標の表示用）
    └── lib/
        └── utils.ts          … cn() ヘルパー（クラス名を合成する）
```

---

## ⭐ まず開くべき2つのファイル

| 開く順 | ファイル | 何が見える |
|---|---|---|
| 1️⃣ | **`src/data/profile.ts`** | 名前・経歴・スキル・作品データの構造 |
| 2️⃣ | **`src/App.tsx`** | データを画面に並べる組み立て役（左サイドバー + 右メインの2カラム） |

⭐ **データとUIを分離するのがプロのコツ。** `profile.ts` を書き換えるだけで、あなた自身のページに早変わりします。

---

## 🎨 完成形ページに含まれているもの

| セクション | 中身 |
|---|---|
| **Header 帯** | アバター + 氏名英日 + "Open to opportunities" バッジ |
| **左 ProfileCard** | グラデーション帯 + 円形アバター + 名前 + キャッチコピー + 所在地 |
| **左 ContactCard** | メール + Website + GitHub + X + note の連絡先一覧 |
| **左 SkillsCard** | Frontend / Backend / AI / Soft Skills の4カテゴリ × Badge |
| **右 AboutCard** | 自己紹介文（3行） |
| **右 TimelineCard** | 経歴年表（縦の線にドット） + 現職に "Now" バッジ |
| **右 WorksCard** | 作品3つを横並びカード（タイトル + 成果指標 + 技術タグ） |
| **右 LearningCard** | 学習中スキル4つにグラデーションのプログレスバー |
| **右 EducationCard** | 学歴 + 資格 Badge |
| **Footer** | 使用技術スタック |

---

## 🔍 自分のコードと比べてみよう

ハンドブックの [`handbook/03-自分のと見比べてみよう.md`](../handbook/03-自分のと見比べてみよう.md) に詳しい比較プロンプトがあります。

一番おすすめ:

> `pull-practice/my-profile/src/data/profile.ts` の構造をそのまま使って、私のプロフィールに書き換えた profile.ts を作って。

⭐ これで **あなた自身の職務経歴書ページ**が完成します。

---

> 💡 **「ちゃんと作れていなかった…」と落ち込まなくて大丈夫。** Stage 4 で目指していたのは「Card という部品をAIに頼んで動かす」ところ。**それが達成できていれば合格**。ここにあるのは Stage 5 まで全部終えた先のゴールイメージです。
