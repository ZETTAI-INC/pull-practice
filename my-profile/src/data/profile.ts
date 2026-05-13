// =============================================================================
// 山田 太郎 のプロフィールデータ
// このファイルだけ書き換えれば、自己紹介ページの中身が全部入れ替わります。
// =============================================================================

export const profile = {
  nameJa: '山田 太郎',
  nameEn: 'Yamada Taro',
  initials: 'YT',
  role: 'マーケター × AI使い',
  tagline: 'AIを業務に取り入れて、月60時間を生み出すマーケター',
  location: '東京都',
  email: 'hello@yamada.example.dev',
  available: true,
}

export const links = [
  { label: 'Website', href: 'https://yamada.example.dev', icon: 'Globe' as const },
  { label: 'GitHub', href: 'https://github.com/yamada-taro', icon: 'Github' as const },
  { label: 'X', href: 'https://x.com/yamada_taro', icon: 'Twitter' as const },
  { label: 'note', href: 'https://note.com/yamada_taro', icon: 'BookOpen' as const },
]

export const about = `30代・BtoB SaaS企業のマーケティング担当。新卒で営業職、4年目に営業企画、2023年からマーケティング部に異動。
2024年からは Claude Code を中心としたAIツールを業務に取り入れ、データ集計・資料作成・社内Q&A対応の自動化に取り組む。月60時間以上の工数削減を実現。
「コードが書けないマーケターでも、AIに頼めば業務アプリは作れる」をモットーに、社内へバイブコーディング文化を広めている。`

export type TimelineEntry = {
  year: string
  period?: string
  title: string
  org?: string
  detail: string
  current?: boolean
}

export const timeline: TimelineEntry[] = [
  {
    year: '2024',
    period: '2024 ─ 現在',
    title: 'Claude Code 研修受講中',
    org: 'リスキリング・プログラム',
    detail: 'AI時代の業務アプリ開発を学ぶバイブコーディング研修に参加。Stage 5 まで進行中。',
    current: true,
  },
  {
    year: '2023',
    period: '2023 ─ 現在',
    title: 'マーケティング担当',
    org: '株式会社サンプルテック',
    detail: 'BtoB SaaSのインバウンドマーケティングを担当。MA運用、コンテンツ企画、営業企画を兼任。',
  },
  {
    year: '2021',
    period: '2021 ─ 2023',
    title: '法人営業 / 営業企画',
    org: '株式会社サンプルテック',
    detail: '新規顧客60社を担当。営業表彰受賞。営業企画を兼任し、KPI設計とダッシュボード運用も担当。',
  },
  {
    year: '2018',
    period: '2018 ─ 2021',
    title: '法人営業',
    org: '株式会社サンプルテック',
    detail: '新卒入社。SaaSの法人向け提案を担当。3年目に年間目標120%達成。',
  },
]

export type Work = {
  title: string
  desc: string
  tags: string[]
  impact: string
  emoji: string
}

export const works: Work[] = [
  {
    title: '営業KPIダッシュボード',
    desc: '毎週Excelで手集計していた営業数値を、SupabaseとClaude Codeで自動取り込み&可視化。営業会議の準備時間がほぼゼロに。',
    tags: ['Supabase', 'React', 'Tailwind'],
    impact: '月 20h 削減',
    emoji: '📊',
  },
  {
    title: '勤怠Slack連携Bot',
    desc: '勤怠管理SaaSとSlackを Supabase Edge Functions で連携。打刻忘れを本人にDM、月末の未提出者を自動リマインド。',
    tags: ['Edge Functions', 'Slack API'],
    impact: '月 15h 削減',
    emoji: '⏰',
  },
  {
    title: '社内Q&A Bot',
    desc: '社内マニュアル200ページをベクトル検索→Claude APIで回答生成。新入社員からの繰り返し質問が9割消えた。',
    tags: ['Claude API', 'Embeddings'],
    impact: '月 25h 削減',
    emoji: '💬',
  },
]

export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite'] },
  { category: 'Backend', items: ['Supabase', 'PostgreSQL', 'Edge Functions'] },
  { category: 'AI', items: ['Claude Code', 'Claude API', 'プロンプト設計'] },
  { category: 'Soft Skills', items: ['言語化', 'KPI設計', 'チーム巻き込み'] },
]

export type LearningItem = {
  name: string
  level: number
  note: string
}

export const learning: LearningItem[] = [
  { name: 'React', level: 65, note: 'Stage 6 で再強化中' },
  { name: 'Tailwind CSS', level: 80, note: 'もう手に馴染んだ' },
  { name: 'Supabase', level: 40, note: 'Stage 14 から本格学習予定' },
  { name: 'TypeScript', level: 55, note: '型エラーは Claude にお任せ' },
]

export const education = {
  school: 'サンプル大学 経済学部 経営学科',
  period: '2014 ─ 2018',
  detail: 'マーケティング論ゼミ所属。卒業論文「BtoB SaaSの導入意思決定プロセス」。',
}

export const certifications = ['ITパスポート', '日商簿記2級', 'Google Analytics 認定資格']
