// =============================================================================
// 山田 太郎 のプロフィールデータ
// このファイルだけ書き換えれば、自己紹介ページの中身が全部入れ替わります。
// =============================================================================

export const profile = {
  nameJa: '山田 太郎',
  nameEn: 'Taro',
  initials: 'TY',
  age: 30,
  role: 'マーケター',
  company: 'BtoB SaaSの会社',
  location: '東京',
  origin: '神奈川',
  email: 'hello@yamada.example.dev',
  available: true,
  greeting: 'はじめまして 👋',
}

export const headline =
  '平日は数字とにらめっこ、休日は娘と公園とコーヒーの人。'

export const heroPhotos = [
  {
    gradient: 'from-rose-300 via-amber-200 to-orange-300',
    caption: '休日の朝、ベランダで',
  },
  {
    gradient: 'from-sky-300 via-cyan-200 to-emerald-200',
    caption: '近所のコーヒー店にて',
  },
  {
    gradient: 'from-violet-300 via-fuchsia-200 to-rose-200',
    caption: '出張で訪れた福岡',
  },
  {
    gradient: 'from-amber-200 via-orange-200 to-rose-200',
    caption: '家族で公園',
  },
]

export const about = [
  'はじめまして、山田太郎です。',
  '都内のBtoB SaaS企業でマーケティングをしています。もとは法人営業で、3年前にマーケ部に異動しました。',
  '平日はリード獲得の数字を追う日々。休日は妻と1歳の娘と公園に行ったり、近所のコーヒー店を巡ったりしています。',
  'のんびり話せる方と、いつかコーヒー一杯ぶんの時間を過ごせたら嬉しいです。',
]

export type Interest = { emoji: string; label: string }

export const interests: Interest[] = [
  { emoji: '☕️', label: 'コーヒー' },
  { emoji: '📖', label: 'SF小説' },
  { emoji: '🎬', label: '映画館' },
  { emoji: '🐶', label: '犬と猫' },
  { emoji: '✈️', label: '旅行' },
  { emoji: '🥐', label: 'パン屋巡り' },
  { emoji: '🎨', label: '美術館' },
  { emoji: '⚽️', label: 'サッカー観戦' },
  { emoji: '🍳', label: '休日の朝ごはん作り' },
  { emoji: '🎧', label: 'Podcast' },
]

export type Fact = { emoji: string; label: string; value: string }

export const quickFacts: Fact[] = [
  { emoji: '💼', label: 'お仕事', value: 'マーケティング（BtoB SaaS）' },
  { emoji: '🏙', label: '住まい', value: '東京 / 23区内' },
  { emoji: '🌊', label: '出身', value: '神奈川' },
  { emoji: '👨‍👩‍👧', label: '家族', value: '妻と1歳の娘' },
  { emoji: '🎓', label: '学歴', value: 'サンプル大学（経済学部）' },
  { emoji: '🍻', label: 'お酒', value: 'たまに（ビール派）' },
  { emoji: '🚭', label: 'タバコ', value: '吸わない' },
  { emoji: '🏃', label: '運動', value: '週末にジョギング' },
  { emoji: '🗣', label: '言語', value: '日本語 / 英語は少しだけ' },
]

export type CurrentlyItem = {
  label: string
  icon: '🛠' | '📖' | '🎧' | '☕️' | '🎬'
  primary: string
  secondary: string
}

export const currently: CurrentlyItem[] = [
  {
    label: 'いま読んでる',
    icon: '📖',
    primary: '『プロジェクト・ヘイル・メアリー』アンディ・ウィアー',
    secondary: '通勤電車で読んでて、笑いをこらえるのが大変な日が多いです。',
  },
  {
    label: 'いま淹れてる',
    icon: '☕️',
    primary: 'エチオピア / イルガチェフ G1',
    secondary: '毎朝ハンドドリップ。雑味の出ない湯温を探っています。',
  },
  {
    label: 'いま作ってる',
    icon: '🛠',
    primary: '家族用の写真アルバム共有サイト',
    secondary: '祖父母にもLINEなしで見せたくて。妻のリクエストで進行中。',
  },
]

export const workSnapshot = {
  title: 'お仕事のこと',
  paragraphs: [
    '都内のBtoB SaaS企業で、インバウンドリード獲得を担当しています。MA運用・ウェビナー企画・展示会準備などが主な業務。',
    '新卒で営業3年、その後営業企画を2年、いまマーケ3年目。営業側のクセも分かるので、間に立つことが多いです。',
    '最近は、社内の小さな手作業を週末にコードで片付けるのが密かな楽しみです。',
  ],
}

export type Value = { emoji: string; text: string }

export const values: Value[] = [
  { emoji: '🌱', text: '焦らないこと。長く続けるためには、軽い助走が大事。' },
  { emoji: '🔧', text: '小さく作って試す。完璧より、まず動くものを。' },
  { emoji: '🙇', text: '丁寧に挨拶する。仕事もプライベートも、これが土台。' },
]

export const ctaSection = {
  eyebrow: 'メッセージ',
  heading: 'コーヒー一杯ぶんの距離感で',
  body: 'マーケや営業の現場の話、子育てのこと、コーヒー豆のこと、なんでも歓迎です。気軽にメッセージください。',
  buttonLabel: 'メッセージを送る',
}
