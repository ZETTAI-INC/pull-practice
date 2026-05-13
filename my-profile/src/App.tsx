import { useEffect, useRef } from 'react'
import {
  Award,
  Briefcase,
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
      <div className="h-2 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
      <div className="px-6 py-7 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 text-3xl font-bold tracking-tight text-white shadow-sm">
          {profile.initials}
        </div>
        <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {profile.nameEn}
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
          {profile.nameJa}
        </h1>
        <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
          {profile.headline}
        </p>

        <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
          <Sparkles className="h-3 w-3" />
          {profile.availableFrom}
        </div>

        <p className="mt-3 text-[11px] text-slate-500">
          希望職種
          <br />
          <span className="text-sm font-medium text-slate-800">{profile.desiredRole}</span>
        </p>
      </div>
    </section>
  )
}

function ContactCard() {
  return (
    <section className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-slate-200 print-shadow-none">
      <SectionHeading icon={<Mail className="h-4 w-4 text-slate-700" />} en="Contact" small>
        連絡先
      </SectionHeading>
      <ul className="space-y-2.5 text-sm">
        <li className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
          <span className="text-slate-700">{profile.location}</span>
        </li>
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-start gap-2.5 text-slate-700 hover:text-slate-900"
          >
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
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
            className="flex items-start gap-2.5 text-slate-700 hover:text-slate-900"
          >
            <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href={profile.portfolioUrl}
            className="flex items-start gap-2.5 text-slate-700 hover:text-slate-900"
          >
            <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <span>ポートフォリオ</span>
          </a>
        </li>
      </ul>

      <div className="mt-5 flex flex-col gap-2 no-print">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          <Mail className="h-4 w-4" />
          連絡する
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
        >
          <Printer className="h-4 w-4" />
          印刷 / PDF
        </button>
        <a
          href={profile.linkedinUrl}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
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
      <SectionHeading icon={<Sparkles className="h-4 w-4 text-slate-700" />} en="Skills" small>
        スキル
      </SectionHeading>
      <div className="space-y-5">
        {skills.map((g) => (
          <div key={g.category}>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              {g.category}
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700"
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
      <SectionHeading icon={<Languages className="h-4 w-4 text-slate-700" />} en="Languages" small>
        語学
      </SectionHeading>
      <ul className="space-y-2.5">
        {languages.map((l) => (
          <li key={l.name} className="text-sm">
            <p className="font-semibold text-slate-900">{l.name}</p>
            <p className="mt-0.5 text-xs text-slate-600">{l.level}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function CertificationsCard() {
  return (
    <section className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-slate-200 print-shadow-none">
      <SectionHeading icon={<Award className="h-4 w-4 text-slate-700" />} en="Certifications" small>
        資格
      </SectionHeading>
      <ul className="space-y-3">
        {certifications.map((c) => (
          <li key={c.name} className="text-sm">
            <div className="flex items-baseline justify-between gap-2">
              <p className="font-semibold text-slate-900">{c.name}</p>
              <span className="shrink-0 font-mono text-xs text-slate-500">{c.year}</span>
            </div>
            {c.issuer && <p className="mt-0.5 text-xs text-slate-500">{c.issuer}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}

function SummarySection() {
  return (
    <SectionCard>
      <SectionHeading icon={<Target className="h-5 w-5 text-slate-700" />} en="Summary">
        自己 PR / 職務要約
      </SectionHeading>
      <div className="space-y-3 text-[15px] leading-7 text-slate-700">
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
      <SectionHeading icon={<Briefcase className="h-5 w-5 text-slate-700" />} en="Experience">
        職務経歴
      </SectionHeading>
      <ol className="space-y-7">
        {workHistory.map((entry, i) => (
          <li key={i} className="relative border-l-2 border-slate-100 pl-5">
            <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-slate-900 ring-4 ring-white" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-base font-bold text-slate-900">
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
            <p className="mt-3 text-[15px] leading-7 text-slate-700">{entry.summary}</p>

            <div className="mt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                担当業務
              </p>
              <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
                {entry.responsibilities.map((r, j) => (
                  <li key={j}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="mt-3">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                成果・実績
              </p>
              <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
                {entry.achievements.map((a, j) => (
                  <li key={j}>{a}</li>
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
      <SectionHeading icon={<Wrench className="h-5 w-5 text-slate-700" />} en="Projects">
        個人プロジェクト / 内製ツール
      </SectionHeading>
      <ul className="space-y-5">
        {projects.map((p, i) => (
          <li key={i} className="border-l-2 border-slate-200 pl-4">
            <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
            <p className="mt-1.5 text-sm leading-7 text-slate-700">{p.context}</p>
            <p className="mt-2 text-sm">
              <span className="font-semibold text-slate-900">成果:</span>{' '}
              <span className="text-slate-700">{p.outcome}</span>
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700"
                >
                  {t}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </SectionCard>
  )
}

function EducationSection() {
  return (
    <SectionCard>
      <SectionHeading icon={<GraduationCap className="h-5 w-5 text-slate-700" />} en="Education">
        学歴
      </SectionHeading>
      <ul className="space-y-4">
        {education.map((e, i) => (
          <li key={i} className="relative border-l-2 border-slate-100 pl-5">
            <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-slate-900 ring-4 ring-white" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-base font-bold text-slate-900">{e.school}</h3>
              <p className="text-xs font-mono font-semibold text-slate-500">{e.period}</p>
            </div>
            <p className="mt-0.5 text-sm text-slate-700">{e.department}</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">{e.detail}</p>
          </li>
        ))}
      </ul>
    </SectionCard>
  )
}

function StrengthsSection() {
  return (
    <SectionCard>
      <SectionHeading icon={<Sparkles className="h-5 w-5 text-slate-700" />} en="Strengths">
        強み
      </SectionHeading>
      <ol className="space-y-3">
        {strengths.map((s, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm leading-7 text-slate-700"
          >
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 font-mono text-[10px] font-bold text-white">
              {i + 1}
            </span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
    </SectionCard>
  )
}

function Footer() {
  return (
    <footer className="mt-8 pt-2 text-center text-xs text-slate-400">
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

function SectionHeading({
  icon,
  en,
  children,
  small,
}: {
  icon: React.ReactNode
  en: string
  children: React.ReactNode
  small?: boolean
}) {
  return (
    <div
      className={
        'flex items-center justify-between border-b border-slate-200 pb-3 ' +
        (small ? 'mb-4' : 'mb-5')
      }
    >
      <div className="flex items-center gap-2.5">
        {icon}
        <h2
          className={
            'font-bold tracking-tight text-slate-900 ' + (small ? 'text-sm' : 'text-lg')
          }
        >
          {children}
        </h2>
      </div>
      <span
        className={
          'font-mono font-semibold uppercase tracking-[0.18em] text-slate-400 ' +
          (small ? 'text-[9px]' : 'text-[10px]')
        }
      >
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
