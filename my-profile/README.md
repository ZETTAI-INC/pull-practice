# 📇 my-profile — Stage 1〜5 完成形プロジェクト

これは **CLAUDE研修 Stage 4 で作る「自己紹介ページ」の完成形コード**です。

⭐ **このコードは「お手本」です。あなたが作ったものと比べて、違いを楽しんでください。**

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
    ├── App.tsx               … ⭐ 自己紹介ページ本体（Card で表示）
    ├── index.css             … 色の定義（CSS変数）
    ├── components/ui/
    │   └── card.tsx          … shadcn/ui の Card コンポーネント
    └── lib/
        └── utils.ts          … cn() ヘルパー（クラス名を合成する）
```

---

## ⭐ まず開くべきファイル

**`src/App.tsx`** だけは開いてください。**ここに自己紹介ページの中身**が書かれています。

| 注目ポイント | どこに書いてある |
|---|---|
| Card をどう使っているか | `<Card>` `<CardHeader>` `<CardContent>` のネスト |
| 色をどう指定しているか | `bg-blue-50` `text-blue-700` などの Tailwind クラス |
| アイコンをどう使っているか | `lucide-react` から `User` `Briefcase` などを import |
| 自己紹介の項目 | 名前・役割・好きなこと・今学んでいること（4項目） |

---

## 🔍 自分のコードと比べてみよう

このファイルを Claude Code に開かせて、こう聞いてみてください:

> 私の `my-profile/src/App.tsx` と、`pull-practice/my-profile/src/App.tsx` を見比べて、3つだけ違いを教えて。

⭐ AI が「色の使い方」「Card の構造」「アイコンの有無」など、あなたが気づきにくい違いを言葉で教えてくれます。

---

> 💡 **「ちゃんと作れていなかった…」と落ち込まなくて大丈夫。** Stage 4 で完璧に作れる必要はありません。**「Card という部品をAIに頼んで動かした」体験が一番大事**です。
