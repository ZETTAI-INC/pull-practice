import { useEffect, useRef } from 'react'
import {
  Award,
  Briefcase,
  CheckCircle2,
  Download,
  ExternalLink,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
  Sparkles,
  Target,
  Wrench,
} from 'lucide-react'
import {
  profile,
  summary,
  workHistory,
  education,
  skills,
  languages,
  certifications,
  strengths,
  projects,
} from '@/data/profile'

export default function App() {
  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 md:px-10 md:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <Sidebar />
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <Reveal>
      <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
        <ProfileCard />
        <ContactCard />
        <SkillsCard />
        <LanguagesCard />
        <CertificationsCard />
      </aside>
    </Reveal>
  )
}

function Main() {
  return (
    <div className="space-y-6">
      <SummarySection />
      <WorkHistorySection />
      <ProjectsSection />
      <EducationSection />
      <StrengthsSection />
    </div>
  )
}

function ProfileCard() {
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 print-shadow-none">
      {/* ネイビーグラデ帯 */}
      <div className="relative h-16 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative px-6 pb-6 pt-0 text-center">
        {/* アバター - 帯から飛び出す */}
        <div className="-mt-12 mb-4 inline-flex">
          <div className="gradient-avatar flex h-24 w-24 items-center justify-center rounded-full text-3xl font-bold tracking-tight text-white">
            {profile.initials}
          </div>
        </div>

        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          {profile.nameEn}
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-display text-slate-900">
          {profile.nameJa}
        </h1>
        <p className="mt-3 text-[13px] font-medium leading-relaxed text-slate-600">
          {profile.headline}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
          <span className="status-pulse relative inline-block h-2 w-2 rounded-full bg-emerald-500" />
          {profile.availableFrom}
        </div>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            希望職種
          </p>
          <p className="mt-1.5 text-sm font-semibold text-slate-800">{profile.desiredRole}</p>
        </div>
      </div>
    </section>
  )
}

function ContactCard() {
  return (
    <section className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-slate-200 print-shadow-none">
      <SidebarHeading icon={<Mail className="h-4 w-4 text-slate-700" />} en="Contact">
        連絡先
      </SidebarHeading>
      <ul className="space-y-3 text-sm">
        <li className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
          <span className="text-slate-700">{profile.location}</span>
        </li>
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-start gap-2.5 text-slate-700 transition-colors hover:text-slate-900"
          >
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-slate-700" />
            <span className="break-all">{profile.email}</span>
          </a>
        </li>
        <li className="flex items-start gap-2.5">
          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
          <span className="text-slate-700">{profile.phone}</span>
        </li>
        <li>
          <a
            href={profile.linkedinUrl}
            className="group flex items-start gap-2.5 text-slate-700 transition-colors hover:text-slate-900"
          >
            <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-slate-700" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href={profile.portfolioUrl}
            className="group flex items-start gap-2.5 text-slate-700 transition-colors hover:text-slate-900"
          >
            <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-slate-700" />
            <span>ポートフォリオ</span>
          </a>
        </li>
      </ul>

      <div className="mt-6 flex flex-col gap-2 no-print">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:shadow-md active:scale-[0.98]"
        >
          <Mail className="h-4 w-4" />
          連絡する
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
        >
          <Printer className="h-4 w-4" />
          印刷 / PDF
        </button>
        <a
          href={profile.linkedinUrl}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
        >
          <Download className="h-4 w-4" />
          履歴書 PDF
        </a>
      </div>
    </section>
  )
}

function SkillsCard() {
  return (
    <section className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-slate-200 print-shadow-none">
      <SidebarHeading icon={<Sparkles className="h-4 w-4 text-slate-700" />} en="Skills">
        スキル
      </SidebarHeading>
      <div className="space-y-5">
        {skills.map((g) => (
          <div key={g.category}>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              {g.category}
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function LanguagesCard() {
  return (
    <section className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-slate-200 print-shadow-none">
      <SidebarHeading icon={<Languages className="h-4 w-4 text-slate-700" />} en="Languages">
        語学
      </SidebarHeading>
      <ul className="space-y-3">
        {languages.map((l) => (
          <li key={l.name} className="flex items-baseline justify-between gap-3 text-sm">
            <p className="font-semibold text-slate-900">{l.name}</p>
            <p className="text-right text-xs text-slate-600">{l.level}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function CertificationsCard() {
  return (
    <section className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-slate-200 print-shadow-none">
      <SidebarHeading icon={<Award className="h-4 w-4 text-slate-700" />} en="Certifications">
        資格
      </SidebarHeading>
      <ul className="space-y-3">
        {certifications.map((c) => (
          <li key={c.name} className="flex items-start gap-3 text-sm">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-semibold leading-snug text-slate-900">{c.name}</p>
                <span className="shrink-0 font-mono text-[11px] font-medium text-slate-500">
                  {c.year}
                </span>
              </div>
              {c.issuer && (
                <p className="mt-0.5 text-[11px] text-slate-500">{c.issuer}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function SummarySection() {
  return (
    <SectionCard>
      <SectionHeading
        num="01"
        icon={<Target className="h-5 w-5 text-slate-700" />}
        en="Summary"
      >
        自己 PR / 職務要約
      </SectionHeading>
      <div className="space-y-3 text-[15px] leading-relaxed text-slate-700">
        {summary.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </SectionCard>
  )
}

function WorkHistorySection() {
  return (
    <SectionCard>
      <SectionHeading
        num="02"
        icon={<Briefcase className="h-5 w-5 text-slate-700" />}
        en="Experience"
      >
        職務経歴
      </SectionHeading>
      <ol className="space-y-8">
        {workHistory.map((entry, i) => (
          <li
            key={i}
            className="group relative border-l-2 border-slate-100 pl-6 transition-all hover:border-slate-300"
          >
            <div
              className={
                'absolute -left-[7px] top-1.5 h-3 w-3 rounded-full ring-4 ring-white transition-all ' +
                (i === 0 ? 'bg-emerald-500' : 'bg-slate-900 group-hover:bg-slate-700')
              }
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-base font-bold tracking-display text-slate-900">
                {entry.title}
                <span className="mx-2 text-slate-300">/</span>
                <span className="font-semibold text-slate-700">{entry.company}</span>
              </h3>
              <p className="text-xs font-mono font-semibold text-slate-500">{entry.period}</p>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {entry.industry}
              {entry.employmentType && (
                <>
                  <span className="mx-1.5 text-slate-300">·</span>
                  {entry.employmentType}
                </>
              )}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{entry.summary}</p>

            <div className="mt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                担当業務
              </p>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                {entry.responsibilities.map((r, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                成果・実績
              </p>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                {entry.achievements.map((a, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </SectionCard>
  )
}

function ProjectsSection() {
  return (
    <SectionCard>
      <SectionHeading
        num="03"
        icon={<Wrench className="h-5 w-5 text-slate-700" />}
        en="Projects"
      >
        個人プロジェクト / 内製ツール
      </SectionHeading>
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <li
            key={i}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
          >
            {/* 抽象パターンサムネ */}
            <div className="project-thumb relative flex h-24 items-end p-4">
              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 font-mono text-xs font-bold text-slate-700 shadow-sm">
                P{i + 1}
              </div>
              <h3 className="text-base font-bold tracking-display text-slate-900">{p.title}</h3>
            </div>

            <div className="p-4">
              <p className="text-sm leading-relaxed text-slate-700">{p.context}</p>
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                <CheckCircle2 className="h-3 w-3" />
                {p.outcome}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-700"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </SectionCard>
  )
}

function EducationSection() {
  return (
    <SectionCard>
      <SectionHeading
        num="04"
        icon={<GraduationCap className="h-5 w-5 text-slate-700" />}
        en="Education"
      >
        学歴
      </SectionHeading>
      <ul className="space-y-4">
        {education.map((e, i) => (
          <li key={i} className="relative border-l-2 border-slate-100 pl-6">
            <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-slate-900 ring-4 ring-white" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-base font-bold tracking-display text-slate-900">
                {e.school}
              </h3>
              <p className="text-xs font-mono font-semibold text-slate-500">{e.period}</p>
            </div>
            <p className="mt-0.5 text-sm text-slate-700">{e.department}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.detail}</p>
          </li>
        ))}
      </ul>
    </SectionCard>
  )
}

function StrengthsSection() {
  return (
    <SectionCard>
      <SectionHeading
        num="05"
        icon={<Sparkles className="h-5 w-5 text-slate-700" />}
        en="Strengths"
      >
        強み
      </SectionHeading>
      <ol className="space-y-3">
        {strengths.map((s, i) => (
          <li
            key={i}
            className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white px-5 py-4 transition-all hover:border-slate-300 hover:shadow-sm"
          >
            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 font-mono text-xs font-bold text-white">
              0{i + 1}
            </span>
            <span className="text-sm leading-relaxed text-slate-700">{s}</span>
          </li>
        ))}
      </ol>
    </SectionCard>
  )
}

function Footer() {
  return (
    <footer className="mt-10 pt-2 text-center text-xs text-slate-400">
      <p>
        © {new Date().getFullYear()} {profile.nameJa}. このページは Stage 5 練習用サンプルです。
      </p>
    </footer>
  )
}

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <section className="rounded-2xl bg-white px-6 py-7 shadow-sm ring-1 ring-slate-200 md:px-9 md:py-8 print-shadow-none">
        {children}
      </section>
    </Reveal>
  )
}

function SidebarHeading({
  icon,
  en,
  children,
}: {
  icon: React.ReactNode
  en: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
      <div className="flex items-center gap-2">
        {icon}
        <h2 className="text-sm font-bold tracking-tight text-slate-900">{children}</h2>
      </div>
      <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {en}
      </span>
    </div>
  )
}

function SectionHeading({
  num,
  icon,
  en,
  children,
}: {
  num: string
  icon: React.ReactNode
  en: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
      <div className="flex items-center gap-3">
        <span className="section-num-badge">{num}</span>
        <div className="flex items-center gap-2.5">
          {icon}
          <h2 className="text-lg font-bold tracking-display text-slate-900">{children}</h2>
        </div>
      </div>
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {en}
      </span>
    </div>
  )
}

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible')
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          obs.unobserve(node)
        }
      },
      { threshold: 0.05 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  )
}
