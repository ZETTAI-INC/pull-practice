import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, BookOpen, Github, Mail, Twitter } from 'lucide-react'
import {
  profile,
  navSections,
  links,
  about,
  timeline,
  projects,
  certifications,
  currently,
  techStack,
  ctaSection,
} from '@/data/profile'

const iconByName = { Github, Twitter, BookOpen, Mail } as const

export default function App() {
  useMouseSpotlight()
  return (
    <div className="relative">
      <div id="spotlight" aria-hidden className="spotlight" />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  )
}

function Sidebar() {
  const activeId = useActiveSection(navSections.map((s) => s.id))

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-50 sm:text-6xl">
          {profile.nameEn}
        </h1>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          {profile.nameJa}
        </p>
        <h2 className="mt-5 text-xl font-medium tracking-tight text-slate-200 sm:text-2xl">
          {profile.role}
        </h2>
        <p className="mt-5 max-w-sm text-base leading-7 text-slate-300">{profile.tagline}</p>

        {profile.available && (
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-widest text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities
          </p>
        )}

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-14 w-max">
            {navSections.map((section) => {
              const isActive = activeId === section.id
              return (
                <li key={section.id}>
                  <a
                    className="group flex items-center py-3"
                    href={`#${section.id}`}
                  >
                    <span
                      className={
                        'mr-4 inline-block h-px transition-all motion-reduce:transition-none ' +
                        (isActive
                          ? 'w-16 bg-emerald-300'
                          : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200')
                      }
                    />
                    <span
                      className={
                        'text-sm font-bold uppercase tracking-widest transition-colors ' +
                        (isActive
                          ? 'text-emerald-300'
                          : 'text-slate-400 group-hover:text-slate-100 group-focus-visible:text-slate-100')
                      }
                    >
                      {section.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-10 lg:mt-0">
        <ul className="flex items-center gap-5" aria-label="Social media">
          {links.map((link) => {
            const Icon = iconByName[link.icon]
            return (
              <li key={link.label}>
                <a
                  className="block text-slate-300 transition-colors hover:text-emerald-300"
                  href={link.href}
                  aria-label={link.label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              </li>
            )
          })}
        </ul>

        <p className="mt-5 text-sm text-slate-400">
          <span>{profile.location}</span>
          <span className="mx-2 text-slate-700">·</span>
          <a href={`mailto:${profile.email}`} className="hover:text-emerald-300">
            {profile.email}
          </a>
        </p>
      </div>
    </header>
  )
}

function Main() {
  return (
    <main id="content" className="pt-20 lg:w-1/2 lg:py-24">
      <Section id="about" number="01" label="About">
        <div className="space-y-5 text-lg leading-8 text-slate-200">
          {about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12">
          <SubHeading>Currently</SubHeading>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {currently.map((item) => (
              <li
                key={item.label}
                className="group rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition-colors hover:border-emerald-400/40 hover:bg-slate-900"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg" aria-hidden>
                    {item.icon}
                  </span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-emerald-300">
                    {item.label}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-100">{item.primary}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{item.secondary}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <SubHeading>Tech I work with</SubHeading>
          <ul className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-sm font-mono text-slate-200 transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-emerald-200"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="experience" number="02" label="Experience">
        <ol className="group/list -mx-2">
          {timeline.map((entry, i) => (
            <ExperienceItem key={i} entry={entry} />
          ))}
        </ol>
      </Section>

      <Section id="projects" number="03" label="Selected Projects">
        <ul className="group/list -mx-2">
          {projects.map((project, i) => (
            <ProjectItem key={i} project={project} />
          ))}
        </ul>
        <div className="mt-12">
          <SubHeading>Certifications</SubHeading>
          <ul className="mt-4 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="rounded-full border border-emerald-400/40 bg-emerald-400/15 px-3.5 py-1.5 text-sm font-medium leading-6 text-emerald-200"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaCallout />

      <footer className="mt-20 max-w-md pb-16 text-sm leading-relaxed text-slate-400">
        <p>
          Built with React + Tailwind. Inspired by{' '}
          <a
            href="https://v4.brittanychiang.com"
            className="font-medium text-slate-200 underline-offset-4 hover:text-emerald-300 hover:underline"
          >
            brittanychiang.com (v4)
          </a>
          . Coded with Claude Code, deployed by hand.
        </p>
      </footer>
    </main>
  )
}

function Section({
  id,
  number,
  label,
  children,
}: {
  id: string
  number: string
  label: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLElement | null>(null)
  useReveal(ref)
  return (
    <section
      id={id}
      ref={ref}
      aria-label={label}
      className="reveal mb-24 scroll-mt-16 md:mb-32 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-8 bg-slate-950/85 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <h2 className="section-heading">
          <span className="font-mono text-base text-emerald-300 md:text-lg">{number}.</span>
          <span>{label}</span>
        </h2>
      </div>
      {children}
    </section>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
      {children}
    </p>
  )
}

function ExperienceItem({ entry }: { entry: import('@/data/profile').TimelineEntry }) {
  return (
    <li className="mb-4">
      <div className="group relative grid gap-3 rounded-xl px-2 py-5 transition-all sm:grid-cols-8 sm:gap-6 sm:px-3 md:gap-4 lg:px-5 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute inset-0 z-0 hidden rounded-xl border border-transparent transition motion-reduce:transition-none lg:block lg:group-hover:border-slate-700 lg:group-hover:bg-slate-800/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <header className="z-10 mb-1 text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 sm:col-span-2">
          {entry.period}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="text-base font-semibold leading-snug text-slate-100">
            <span className="inline-flex flex-wrap items-baseline gap-x-2 leading-tight">
              <span>{entry.title}</span>
              <span className="text-emerald-300" aria-hidden>
                ·
              </span>
              <span className="text-slate-200">{entry.org}</span>
              {entry.current && (
                <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-widest text-emerald-300">
                  Now
                </span>
              )}
            </span>
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-slate-300">{entry.detail}</p>
          <ul className="mt-3 flex flex-wrap" aria-label="Related technologies">
            {entry.tags.map((tag) => (
              <li key={tag} className="mr-2 mt-2">
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-mono font-medium leading-5 text-emerald-200">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

function ProjectItem({ project }: { project: import('@/data/profile').Project }) {
  return (
    <li className="mb-4">
      <div className="group relative grid gap-4 rounded-xl px-2 py-5 transition-all sm:grid-cols-8 sm:gap-6 sm:px-3 md:gap-4 lg:px-5 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute inset-0 z-0 hidden rounded-xl border border-transparent transition motion-reduce:transition-none lg:block lg:group-hover:border-slate-700 lg:group-hover:bg-slate-800/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              className="inline-flex items-baseline text-base font-semibold leading-tight text-slate-100 transition-colors hover:text-emerald-300 focus-visible:text-emerald-300"
              href={project.href ?? '#'}
              aria-label={project.title}
            >
              <span>
                {project.title}{' '}
                <ArrowUpRight
                  className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                  aria-hidden
                />
              </span>
            </a>
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-slate-300">{project.desc}</p>
          <p className="mt-3 inline-block rounded-md bg-emerald-400/15 px-2 py-0.5 font-mono text-xs font-semibold text-emerald-200">
            {project.impact}
          </p>
          <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag} className="mr-2 mt-2">
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-mono font-medium leading-5 text-emerald-200">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="z-10 mt-1 hidden sm:order-1 sm:col-span-2 sm:block">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 transition group-hover:border-emerald-400/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,234,212,0.22),transparent_55%)]" />
            <div className="absolute bottom-2 right-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-300 group-hover:text-emerald-200">
              {project.tags[0] ?? 'demo'}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

function CtaCallout() {
  const ref = useRef<HTMLElement | null>(null)
  useReveal(ref)
  return (
    <section
      ref={ref}
      aria-label="Get in touch"
      className="reveal mt-24 overflow-hidden rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/10 via-slate-900/60 to-slate-900 p-8 md:p-10"
    >
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
        {ctaSection.eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
        {ctaSection.heading}
      </h2>
      <p className="mt-5 max-w-xl text-base leading-7 text-slate-200">{ctaSection.body}</p>
      <a
        href={`mailto:${profile.email}`}
        className="group mt-7 inline-flex items-center gap-2 rounded-lg border border-emerald-400/50 bg-emerald-400/15 px-5 py-3 text-base font-semibold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/25 hover:text-emerald-100"
      >
        <Mail className="h-5 w-5" />
        <span>{profile.email}</span>
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </a>
    </section>
  )
}

function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

function useReveal(ref: React.RefObject<HTMLElement | null>) {
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
      { threshold: 0.08 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [ref])
}

function useMouseSpotlight() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const handler = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
      })
    }
    window.addEventListener('mousemove', handler)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', handler)
    }
  }, [])
}
