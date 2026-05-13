import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  BookOpen,
  Briefcase,
  CircleDot,
  GraduationCap,
  Github,
  Globe,
  MapPin,
  Mail,
  Sparkles,
  Twitter,
} from 'lucide-react'
import {
  profile,
  links,
  about,
  timeline,
  works,
  skills,
  learning,
  education,
  certifications,
} from '@/data/profile'

const iconByName = { Globe, Github, Twitter, BookOpen } as const

export default function App() {
  return (
    <div className="min-h-screen bg-muted/40">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr] lg:gap-8">
          <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
            <ProfileCard />
            <ContactCard />
            <SkillsCard />
          </aside>
          <div className="space-y-6">
            <AboutCard />
            <TimelineCard />
            <WorksCard />
            <LearningCard />
            <EducationCard />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
            {profile.initials}
          </div>
          <span className="text-sm font-semibold tracking-wide text-foreground">
            {profile.nameEn} <span className="text-muted-foreground">/ {profile.nameJa}</span>
          </span>
        </div>
        {profile.available && (
          <Badge variant="success" className="gap-1">
            <CircleDot className="h-3 w-3" /> Open to opportunities
          </Badge>
        )}
      </div>
    </header>
  )
}

function ProfileCard() {
  return (
    <Card className="overflow-hidden">
      <div className="h-20 bg-gradient-to-br from-blue-500 to-indigo-600" />
      <div className="-mt-10 flex flex-col items-center px-6 pb-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-blue-100 text-2xl font-bold text-blue-700 shadow-sm">
          {profile.initials}
        </div>
        <h1 className="mt-3 text-xl font-bold tracking-tight text-foreground">
          {profile.nameJa}
        </h1>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {profile.nameEn}
        </p>
        <p className="mt-3 text-sm font-medium text-blue-700">{profile.role}</p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{profile.tagline}</p>
        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" /> {profile.location}
        </div>
      </div>
    </Card>
  )
}

function ContactCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Contact
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2.5 rounded-md p-2 transition-colors hover:bg-muted"
        >
          <Mail className="h-4 w-4 text-blue-600" />
          <span className="break-all">{profile.email}</span>
        </a>
        {links.map((link) => {
          const Icon = iconByName[link.icon]
          return (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2.5 rounded-md p-2 transition-colors hover:bg-muted"
            >
              <Icon className="h-4 w-4 text-blue-600" />
              <span>{link.label}</span>
            </a>
          )
        })}
      </CardContent>
    </Card>
  )
}

function SkillsCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((group) => (
          <div key={group.category}>
            <div className="mb-2 text-xs font-medium text-muted-foreground">{group.category}</div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

function AboutCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-blue-600" />
          <CardTitle className="text-base">About</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line text-sm leading-relaxed text-foreground">{about}</p>
      </CardContent>
    </Card>
  )
}

function TimelineCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-blue-600" />
          <CardTitle className="text-base">Career Timeline</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ol className="relative space-y-6 border-l border-border pl-6">
          {timeline.map((entry, i) => (
            <li key={i} className="relative">
              <span
                className={
                  'absolute -left-[1.85rem] mt-1.5 flex h-3 w-3 items-center justify-center rounded-full ring-4 ring-background ' +
                  (entry.current ? 'bg-blue-600' : 'bg-border')
                }
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-xs font-medium text-muted-foreground">{entry.period ?? entry.year}</span>
                {entry.current && <Badge variant="default">Now</Badge>}
              </div>
              <h3 className="mt-1 text-sm font-semibold text-foreground">{entry.title}</h3>
              {entry.org && <p className="text-xs text-muted-foreground">{entry.org}</p>}
              <p className="mt-1 text-sm leading-relaxed text-foreground/80">{entry.detail}</p>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}

function WorksCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-blue-600" />
          <CardTitle className="text-base">Selected Work</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {works.map((work) => (
            <div
              key={work.title}
              className="group flex flex-col rounded-lg border bg-card p-4 transition-all hover:border-blue-300 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{work.emoji}</span>
                <Badge variant="success">{work.impact}</Badge>
              </div>
              <h3 className="mt-2 text-sm font-semibold text-foreground">{work.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{work.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {work.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function LearningCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-blue-600" />
          <CardTitle className="text-base">Now Learning</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {learning.map((item) => (
            <div key={item.name}>
              <div className="flex items-baseline justify-between">
                <div className="text-sm font-medium text-foreground">{item.name}</div>
                <div className="text-xs text-muted-foreground">{item.level}%</div>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                  style={{ width: `${item.level}%` }}
                />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{item.note}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function EducationCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-blue-600" />
          <CardTitle className="text-base">Education & Certifications</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div>
          <div className="text-xs text-muted-foreground">{education.period}</div>
          <div className="mt-0.5 font-semibold text-foreground">{education.school}</div>
          <p className="mt-1 text-sm text-foreground/80">{education.detail}</p>
        </div>
        <div>
          <div className="mb-2 text-xs font-medium text-muted-foreground">Certifications</div>
          <div className="flex flex-wrap gap-1.5">
            {certifications.map((cert) => (
              <Badge key={cert} variant="outline">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function Footer() {
  return (
    <footer className="mt-12 border-t pt-6 text-center text-xs text-muted-foreground">
      Built with React + TypeScript + Tailwind CSS + shadcn/ui &middot; Claude Code 研修 Stage 1〜5 完成形
    </footer>
  )
}
