// =============================================================================
// 山田 太郎 のプロフィールデータ
// このファイルだけ書き換えれば、自己紹介ページの中身が全部入れ替わります。
// =============================================================================

export const profile = {
  nameJa: '山田 太郎',
  nameEn: 'Taro Yamada',
  initials: 'TY',
  role: 'BtoB SaaS でマーケティングをやっています',
  tagline:
    '平日はインバウンドの数字を追いかけて、週末は家族と散歩したり、気になった社内の不便さを小さな道具にしてみたり。',
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
  `BtoB SaaS の会社でマーケティングを担当しています。
  普段はリード獲得の数字を追ったり、営業さんと「次のキャンペーン何しよう」と相談したり、地味な手作業の改善案を書きためたり。`,
  `もとは法人営業で、3年前にマーケ部に異動しました。営業現場のクセも分かるし、マーケ側の言い分も分かるので、間に立つ役回りが多いです。`,
  `休みの日は妻と娘とよく公園に行きます。
  最近は近所のサードウェーブ系コーヒー店を巡るのが趣味で、フィルター用の豆を月に2、3袋買ってしまうのが悩み。`,
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
    title: 'Marketing',
    org: 'Sample SaaS Inc.',
    orgUrl: '#',
    detail:
      'インバウンドリード獲得を中心に、MA運用・ウェビナー企画・展示会準備まで。今期は商談化率の改善が一番の宿題。',
    tags: ['BtoB Marketing', 'MA', 'Webinar', 'Event'],
    current: true,
  },
  {
    year: '2021',
    period: '2021 — 2023',
    title: 'Sales / Sales Ops',
    org: 'Sample SaaS Inc.',
    detail:
      '法人営業に加えて、KPIダッシュボードの整備とSalesforceの運用ルール作りを担当。営業のメモを構造化する沼にハマる。',
    tags: ['Sales', 'Salesforce', 'KPI'],
  },
  {
    year: '2018',
    period: '2018 — 2021',
    title: 'Sales Representative',
    org: 'Sample SaaS Inc.',
    detail:
      '新卒入社。中堅製造業の DX 担当者を相手に、SaaSの法人提案。3年目に表彰されたのが密かな自慢。',
    tags: ['BtoB Sales'],
  },
  {
    year: '2014',
    period: '2014 — 2018',
    title: 'B.A. in Business Administration',
    org: 'Sample University',
    detail:
      'マーケティング論ゼミ。卒論はBtoB SaaSの導入意思決定をテーマに、企業10社にインタビューした。',
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
    title: '展示会フォローアップ・チェックリスト',
    desc: '展示会で名刺交換した相手への翌日メール送付が抜けがちだったので、Googleフォーム入力→当日中にToDo自動生成する仕組みを内製。営業から「便利」と直接言われた最初の成功体験。',
    tags: ['GAS', 'Notion API', 'Form'],
    impact: 'チームで利用中',
    href: '#',
  },
  {
    title: '読書記録 mini-site',
    desc: '読み終わった本を月ごとに並べる個人サイト。誰にも見せていないけど、ChatGPTに本のあらすじを書かせて貼っていたら、自分の趣味の偏りが見えて面白かった。',
    tags: ['Astro', 'MDX'],
    impact: '個人 / 公開予定',
    href: '#',
  },
  {
    title: 'ウェビナー集客の振り返りダッシュボード',
    desc: 'Salesforceとフォームの集客データを毎週手集計していたのを、SupabaseとClaude Codeに頼んで自動化。月曜の朝会の準備が楽になった。',
    tags: ['Supabase', 'React', 'Tailwind'],
    impact: '社内ツール',
    href: '#',
  },
]

export type CurrentlyItem = {
  label: string
  icon: '🛠' | '📖' | '🎧' | '☕️'
  primary: string
  secondary: string
}

export const currently: CurrentlyItem[] = [
  {
    label: 'Building',
    icon: '🛠',
    primary: '家族用の写真アルバム共有サイト',
    secondary: '祖父母にもLINEなしで見せたくて。妻のリクエストで進行中。',
  },
  {
    label: 'Reading',
    icon: '📖',
    primary: '『プロジェクト・ヘイル・メアリー』アンディ・ウィアー',
    secondary: '今年読んで一番ハマった本。電車で笑いをこらえるのが大変。',
  },
  {
    label: 'Brewing',
    icon: '☕️',
    primary: 'エチオピア / イルガチェフ G1',
    secondary: 'ハンドドリップで毎朝1杯。雑味が出ない湯温を探している。',
  },
]

export const certifications = ['日商簿記2級', 'Google Analytics 認定資格']

export const techStack = [
  'TypeScript',
  'React',
  'Tailwind CSS',
  'Astro',
  'Supabase',
  'PostgreSQL',
  'Google Apps Script',
  'Notion API',
  'Salesforce',
  'Figma',
  'Claude Code',
]

export const ctaSection = {
  eyebrow: "Let's talk",
  heading: '気軽に声をかけてください',
  body:
    'マーケや営業の現場で「これ手作業つらいな」と思うやつ、雑談ベースでも歓迎です。同業の人とも、社内の不便を片付けたい人とも、コーヒー一杯ぶんくらいの距離感で話せたら嬉しいです。',
}
