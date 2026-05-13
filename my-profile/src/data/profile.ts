// =============================================================================
// 山田 太郎 のプロフィールデータ
// このファイルだけ書き換えれば、自己紹介ページの中身が全部入れ替わります。
// =============================================================================

export const profile = {
  nameJa: '山田 太郎',
  nameEn: 'Taro Yamada',
  initials: 'YT',
  headline: 'BtoB SaaS マーケティング / 営業 × マーケ × 内製ツール',
  desiredRole: 'マーケティングマネージャー / プロダクトマーケティング',
  location: '東京都',
  email: 'taro.yamada@example.jp',
  phone: '+81 90-XXXX-XXXX',
  availableFrom: '面談はいつでも可能（応相談）',
  linkedinUrl: 'https://www.linkedin.com/in/taro-yamada-example',
  portfolioUrl: 'https://yamada.example.dev',
}

export const summary = [
  'BtoB SaaS 企業で営業 3 年、営業企画 2 年を経て、現在はマーケティング担当として 3 年目です。',
  'インバウンドリード獲得を中心に、MA 運用・ウェビナー企画・展示会オペレーションを担当。営業現場の温度感とマーケティング施策の両方の言語が分かることが強みです。',
  '直近 1 年は、社内の手作業を Claude Code などのツールで内製化することで、マーケ・営業チームの工数削減にも取り組んでいます。',
]

export type WorkHistoryEntry = {
  company: string
  industry: string
  period: string
  title: string
  employmentType?: string
  summary: string
  responsibilities: string[]
  achievements: string[]
}

export const workHistory: WorkHistoryEntry[] = [
  {
    company: 'Sample SaaS 株式会社',
    industry: 'BtoB SaaS / クラウドサービス（従業員 約 350 名）',
    period: '2023 年 4 月 - 現在',
    title: 'マーケティンググループ / マーケティング担当',
    employmentType: '正社員',
    summary:
      '中堅企業向け SaaS のインバウンドマーケティング・営業企画と連携した商談化施策を担当。',
    responsibilities: [
      'インバウンドリード獲得（オウンドメディア / 広告運用 / メルマガ）',
      'HubSpot を中心とした MA 運用とリードナーチャリング設計',
      'ウェビナー企画・運営（月 1 〜 2 回、年間延べ参加者 約 3,000 名）',
      '展示会の出展企画・現場運営・フォローアップ設計',
      '営業部門との週次連携会議の運営',
    ],
    achievements: [
      'インバウンド経由の商談化数を前年比 140% に改善（2023 年下期実績）',
      '展示会フォローアップの内製ツールを構築し、リードフォロー完了率を 60% → 95% へ',
      '部門横断のリード受け渡しルールを策定、営業との認識齟齬による失注を月 5 件→ 1 件に削減',
    ],
  },
  {
    company: 'Sample SaaS 株式会社',
    industry: '同上',
    period: '2021 年 4 月 - 2023 年 3 月',
    title: '営業企画 / フィールドセールス',
    employmentType: '正社員',
    summary:
      '法人営業を継続しつつ、営業企画として KPI 設計・SFA 運用ルールの整備を担当。',
    responsibilities: [
      '中堅企業向けの法人提案（年間担当 約 60 社）',
      'Salesforce の運用ルール策定と社内研修',
      '営業会議用 KPI ダッシュボードの設計・運用',
      '商談データの集計・分析、経営会議向け資料の作成',
    ],
    achievements: [
      '営業 KPI ダッシュボードを構築し、週次の手集計工数を月 20 時間削減',
      '個人営業成績 部門 5 名中 1 位（2022 年上期）',
    ],
  },
  {
    company: 'Sample SaaS 株式会社',
    industry: '同上',
    period: '2018 年 4 月 - 2021 年 3 月',
    title: 'フィールドセールス（新卒）',
    employmentType: '正社員',
    summary: '新卒入社、法人営業として中堅製造業の DX 担当者向けに SaaS の提案を担当。',
    responsibilities: [
      'インサイドセールスから引き継いだ商談の提案・クロージング',
      '導入後のオンボーディング支援、カスタマーサクセスとの連携',
    ],
    achievements: [
      '入社 3 年目に年間目標 120% 達成、社内表彰を受賞',
      '新人研修のメンター（2 年連続、各 2 名担当）',
    ],
  },
]

export type EducationEntry = {
  school: string
  department: string
  period: string
  detail: string
}

export const education: EducationEntry[] = [
  {
    school: 'サンプル大学',
    department: '経済学部 経営学科',
    period: '2014 年 4 月 - 2018 年 3 月',
    detail:
      'マーケティング論ゼミ所属。卒業論文「BtoB SaaS の導入意思決定プロセス ─ 企業 10 社へのインタビューより」。',
  },
]

export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'マーケティング',
    items: [
      'MA 運用（HubSpot）',
      'ウェビナー企画・運営',
      '展示会オペレーション',
      'コンテンツ企画 / 編集',
      'Google Analytics 4',
      '広告運用（基礎）',
    ],
  },
  {
    category: '営業・企画',
    items: [
      '法人営業（BtoB / 中堅企業）',
      '営業企画 / KPI 設計',
      'Salesforce 運用設計',
      '提案書・経営会議資料作成',
    ],
  },
  {
    category: 'デジタル / 内製ツール',
    items: [
      'SQL（基本 SELECT・JOIN）',
      'TypeScript / React（学習中）',
      'Google Apps Script',
      'Notion API',
      'Claude Code（業務自動化）',
    ],
  },
  {
    category: 'ソフトスキル',
    items: [
      '営業 × マーケの橋渡し',
      'プロジェクトマネジメント',
      'ステークホルダーコミュニケーション',
    ],
  },
]

export type LanguageEntry = { name: string; level: string }

export const languages: LanguageEntry[] = [
  { name: '日本語', level: 'ネイティブ' },
  { name: '英語', level: 'TOEIC 750 点 / 業務メール対応可' },
]

export type Certification = { name: string; issuer?: string; year: number }

export const certifications: Certification[] = [
  { name: '日商簿記検定 2 級', issuer: '日本商工会議所', year: 2017 },
  { name: 'Google Analytics 個人認定資格 (GAIQ)', issuer: 'Google', year: 2022 },
  { name: 'TOEIC L&R 750 点', issuer: 'IIBC', year: 2023 },
]

export const strengths = [
  '営業 3 年・営業企画 2 年・マーケ 3 年の経験から、両者の言語と温度感を理解した連携設計ができる',
  '展示会・ウェビナーなど現場オペレーションの段取りと当日推進',
  '社内の手作業を内製ツールで自動化し、運用に乗せるまでを 1 人で完結できる',
]

export type Project = {
  title: string
  context: string
  tags: string[]
  outcome: string
}

export const projects: Project[] = [
  {
    title: '展示会フォローアップ・チェックリスト',
    context:
      '展示会で名刺交換した相手への翌日メール送付の漏れが課題だったため、Google フォーム入力から ToDo を当日中に自動生成する仕組みを内製。',
    tags: ['Google Apps Script', 'Notion API'],
    outcome: 'フォロー完了率 60% → 95%、現在も営業チームで運用中',
  },
  {
    title: 'ウェビナー集客振り返りダッシュボード',
    context:
      'Salesforce とフォーム集客データを毎週手集計していたため、Supabase + Claude Code で取り込み・可視化を自動化。',
    tags: ['Supabase', 'React', 'Tailwind CSS'],
    outcome: '集計工数 月 8 時間 → 30 分、ウェビナーの ROI 議論が定例化',
  },
]
