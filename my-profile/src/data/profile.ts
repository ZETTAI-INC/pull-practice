// =============================================================================
// 山田 太郎 のプロフィールデータ
// このファイルだけ書き換えれば、自己紹介ページの中身が全部入れ替わります。
// =============================================================================

export const profile = {
  nameJa: '山田 太郎',
  nameEn: 'Taro Yamada',
  initials: 'TY',
  role: 'Marketer building with AI.',
  tagline:
    'BtoB SaaS のマーケティングと、Claude Code を使った社内ツールの自作を行ったり来たりしています。「AI に頼める人」を社内に増やす活動も。',
  location: 'Tokyo, Japan',
  email: 'hello@yamada.example.dev',
  available: true,
}

export const navSections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
] as const

export const links = [
  { label: 'GitHub', href: 'https://github.com/yamada-taro', icon: 'Github' as const },
  { label: 'X (Twitter)', href: 'https://x.com/yamada_taro', icon: 'Twitter' as const },
  { label: 'note', href: 'https://note.com/yamada_taro', icon: 'BookOpen' as const },
  { label: 'Email', href: 'mailto:hello@yamada.example.dev', icon: 'Mail' as const },
]

export const about = [
  `BtoB SaaS 企業でマーケティングを担当している山田太郎です。新卒で営業職、2023年からマーケティング部に異動して、インバウンドマーケと営業企画を兼任しています。`,
  `2024年からは Claude Code を中心とした AI ツールを業務に取り入れて、データ集計・資料作成・社内 Q&A の自動化を進めています。月60時間以上の工数を生み出すのが、最近の楽しみです。`,
  `「コードが書けないマーケターでも、AI に頼めば業務アプリは作れる」をモットーに、社内へバイブコーディング文化を広めています。`,
]

export type TimelineEntry = {
  year: string
  period: string
  title: string
  org: string
  orgUrl?: string
  detail: string
  tags: string[]
  current?: boolean
}

export const timeline: TimelineEntry[] = [
  {
    year: '2023',
    period: '2023 — Present',
    title: 'Marketing Lead',
    org: 'Sample SaaS Inc.',
    orgUrl: '#',
    detail:
      'BtoB SaaS のインバウンドマーケティングを統括。MA運用、コンテンツ企画、営業企画を兼任。Claude Code を使った社内ツール開発で、月60時間以上の工数削減を実現。',
    tags: ['Marketing', 'Claude Code', 'Supabase', 'Notion API'],
    current: true,
  },
  {
    year: '2021',
    period: '2021 — 2023',
    title: 'Sales / Sales Ops',
    org: 'Sample SaaS Inc.',
    detail:
      '新規顧客60社を担当し、営業表彰を受賞。営業企画として KPI 設計とダッシュボード運用を担当した。',
    tags: ['Sales', 'KPI Design', 'Salesforce'],
  },
  {
    year: '2018',
    period: '2018 — 2021',
    title: 'Sales Representative',
    org: 'Sample SaaS Inc.',
    detail:
      '新卒入社。SaaS の法人向け提案を担当。3年目に年間目標 120% 達成。',
    tags: ['Sales', 'BtoB'],
  },
  {
    year: '2014',
    period: '2014 — 2018',
    title: 'B.A. in Business Administration',
    org: 'Sample University',
    detail:
      'マーケティング論ゼミ所属。卒業論文「BtoB SaaS の導入意思決定プロセス」。',
    tags: ['Marketing', 'Research'],
  },
]

export type Project = {
  title: string
  desc: string
  tags: string[]
  impact: string
  href?: string
}

export const projects: Project[] = [
  {
    title: 'Sales KPI Dashboard',
    desc: '営業チームの数値を毎週 Excel で手集計していたところを、Supabase と Claude Code で自動取り込み&可視化。営業会議の準備時間がほぼゼロに。',
    tags: ['React', 'Tailwind', 'Supabase', 'Claude Code'],
    impact: '−20h / month',
    href: '#',
  },
  {
    title: 'Attendance × Slack Bot',
    desc: '勤怠管理 SaaS と Slack を Supabase Edge Functions で連携。打刻忘れを本人に DM し、月末の未提出者を自動リマインド。',
    tags: ['Edge Functions', 'Slack API', 'TypeScript'],
    impact: '−15h / month',
    href: '#',
  },
  {
    title: 'Internal Q&A Bot',
    desc: '社内マニュアル200ページをベクトル検索 → Claude API で回答生成。新入社員からの繰り返し質問が 9 割消えた。',
    tags: ['Claude API', 'Embeddings', 'Supabase'],
    impact: '−25h / month',
    href: '#',
  },
]

export const certifications = ['ITパスポート', '日商簿記2級', 'Google Analytics 認定資格']
