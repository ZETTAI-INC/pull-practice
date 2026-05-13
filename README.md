# 📦 pull-practice — Stage 5 練習用リポジトリ

このリポジトリは **CLAUDE研修 Stage 5「GitHubに保存して取り出してみる」** の練習用です。

---

## 🎯 このリポジトリの目的

「自分のパソコンに新しいファイルが降ってくる」── **`git pull` の正体を目で見て体験する**ためのリポジトリです。

---

## 📂 収録されているもの（main 最新版）

```
pull-practice/
├── 📝 README.md                      … このファイル
├── 📭 AFTER-PULL.md                  … pull 後の道案内
├── 📁 my-profile/                    … Stage 1〜5 完成形プロジェクト一式
│   ├── 📄 package.json
│   ├── 📄 vite.config.ts
│   ├── 📄 tsconfig.json
│   ├── 📄 tailwind.config.js
│   ├── 📄 postcss.config.js
│   ├── 📄 index.html
│   ├── 🛡 .gitignore                 … ⭐ .env を守る見本
│   ├── 📄 README.md                  … プロジェクトの読み方
│   └── 📁 src/
│       ├── 🚀 main.tsx
│       ├── ⭐ App.tsx                 … ページ全体の組み立て役（職務経歴書レイアウト）
│       ├── 🎨 index.css
│       ├── 📁 data/
│       │   └── ⭐ profile.ts         … 山田太郎の経歴・スキル・作品データ
│       ├── 📁 components/ui/
│       │   ├── card.tsx              … Card 部品
│       │   └── badge.tsx             … Badge 部品（タグ・成果指標表示用）
│       └── 📁 lib/utils.ts
└── 📁 handbook/                      … あなたのためのハンドブック7冊
    ├── 📘 00-はじめに.md
    ├── 🎒 01-ここまでの旅の振り返り.md
    ├── 🔍 02-完成形プロジェクトの読み方.md
    ├── 🪞 03-自分のと見比べてみよう.md
    ├── 💬 04-プロンプトの型10選.md
    ├── 📘 05-用語ミニ辞典.md
    └── 🗺 06-Stage6以降の道のり.md
```

---

## 🚀 まず開くファイル

| 状況 | 開くべきファイル |
|---|---|
| ✅ pull した直後 | [`AFTER-PULL.md`](./AFTER-PULL.md) |
| 📚 ハンドブックを読みたい | [`handbook/00-はじめに.md`](./handbook/00-はじめに.md) |
| 🪞 完成形コードと自分のを見比べたい | [`handbook/03-自分のと見比べてみよう.md`](./handbook/03-自分のと見比べてみよう.md) |
| 🗺 Stage 6 以降が気になる | [`handbook/06-Stage6以降の道のり.md`](./handbook/06-Stage6以降の道のり.md) |

---

## 💡 動かす必要はありません

**`my-profile/` を npm install / npm run dev しなくてOK** です。

⭐ **ファイルを開いて読むだけ**で十分意味があります。詳しくは [`my-profile/README.md`](./my-profile/README.md) を参照。

---

## 🙌 Stage 5 まで来てくれてありがとう

ここまで来られたこと自体がすごい。あと一歩で Stage 5 クリアです 🎉

提出忘れていませんか？
- ✅ GitHub保存スクショ（`my-profile` のファイル一覧、.env が見えない状態）
- ✅ pull後スクショ（`my-profile/` と `handbook/` が増えた状態）
- ✅ 自分の GitHub リポジトリ URL（`https://github.com/{ユーザー名}/my-profile`）
- ✅ 操作メモ 120文字以上

提出画面に戻って、4つ揃えて「提出する」ボタンを押してください。
