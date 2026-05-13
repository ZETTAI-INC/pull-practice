import { useEffect, useRef, useState } from 'react'
import { Heart, MapPin, MessageCircle, Send, Sparkles } from 'lucide-react'
import {
  profile,
  headline,
  heroPhotos,
  about,
  interests,
  quickFacts,
  currently,
  workSnapshot,
  values,
  ctaSection,
} from '@/data/profile'

export default function App() {
  return (
    <div className="min-h-screen px-4 pb-16 pt-8 sm:px-6">
      <div className="mx-auto w-full max-w-md space-y-4">
        <Hero />
        <AboutCard />
        <InterestsCard />
        <QuickFactsCard />
        <CurrentlyCard />
        <WorkCard />
        <ValuesCard />
        <CtaCard />
        <FooterNote />
      </div>
    </div>
  )
}

function Hero() {
  const [index, setIndex] = useState(0)
  const photo = heroPhotos[index]

  return (
    <Reveal>
      <section className="relative overflow-hidden rounded-3xl bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_40px_rgba(244,114,182,0.18)]">
        <div className="relative aspect-[3/4] w-full">
          <div className={`absolute inset-0 bg-gradient-to-br ${photo.gradient}`} />

          {/* イニシャル（ダミーの "写真" 的なアバター） */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-extrabold text-white/85 drop-shadow-lg" style={{ fontSize: '128px' }}>
              {profile.initials}
            </span>
          </div>

          {/* タップ用のオーバーレイ */}
          <button
            type="button"
            aria-label="前の写真"
            onClick={() => setIndex((i) => (i - 1 + heroPhotos.length) % heroPhotos.length)}
            className="absolute left-0 top-0 h-full w-1/3"
          />
          <button
            type="button"
            aria-label="次の写真"
            onClick={() => setIndex((i) => (i + 1) % heroPhotos.length)}
            className="absolute right-0 top-0 h-full w-1/3"
          />

          {/* 上部の写真スイッチドット */}
          <div className="absolute inset-x-3 top-3 flex gap-1">
            {heroPhotos.map((_, i) => (
              <div
                key={i}
                className={
                  'h-1 flex-1 rounded-full transition-colors ' +
                  (i === index ? 'bg-white' : 'bg-white/40')
                }
              />
            ))}
          </div>

          {/* 認証バッジ */}
          {profile.available && (
            <div className="absolute right-3 top-6 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-rose-500 shadow">
              <Sparkles className="h-3 w-3 fill-rose-400 text-rose-400" />
              認証済み
            </div>
          )}

          {/* 下部のグラデと名前 */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 pt-16 text-white">
            <h1 className="flex items-baseline gap-2 text-3xl font-bold drop-shadow">
              <span>{profile.nameJa.split(' ')[1] ?? profile.nameJa}</span>
              <span className="text-2xl font-semibold opacity-90">{profile.age}</span>
            </h1>
            <p className="mt-2 flex items-center gap-1 text-sm">
              <MapPin className="h-4 w-4" />
              <span>{profile.location}</span>
              <span className="mx-2 text-white/40">·</span>
              <span>{profile.role}</span>
            </p>
            <p className="mt-2 text-xs text-white/80">📷 {photo.caption}</p>
          </div>
        </div>

        {/* ヘッドラインバー */}
        <div className="bg-white px-5 py-4">
          <p className="text-sm font-medium leading-relaxed text-slate-800">"{headline}"</p>
        </div>
      </section>
    </Reveal>
  )
}

function AboutCard() {
  return (
    <Reveal>
      <section className="card">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">{profile.greeting}</h2>
        <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-700">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </Reveal>
  )
}

function InterestsCard() {
  return (
    <Reveal>
      <section className="card">
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
          <h2 className="text-base font-bold text-slate-900">好きなこと</h2>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {interests.map((i) => (
            <li
              key={i.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3.5 py-1.5 text-sm font-medium text-rose-700 ring-1 ring-rose-200"
            >
              <span aria-hidden>{i.emoji}</span>
              <span>{i.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  )
}

function QuickFactsCard() {
  return (
    <Reveal>
      <section className="card">
        <h2 className="text-base font-bold text-slate-900">基本情報</h2>
        <dl className="mt-3 divide-y divide-slate-100">
          {quickFacts.map((f) => (
            <div key={f.label} className="flex items-center gap-3 py-2.5 text-sm">
              <span className="text-lg" aria-hidden>
                {f.emoji}
              </span>
              <dt className="w-20 shrink-0 text-slate-500">{f.label}</dt>
              <dd className="flex-1 font-medium text-slate-800">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </Reveal>
  )
}

function CurrentlyCard() {
  return (
    <Reveal>
      <section className="card">
        <p className="card-section-label">最近のわたし</p>
        <ul className="mt-4 space-y-4">
          {currently.map((c) => (
            <li key={c.label} className="flex gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                {c.icon}
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  {c.label}
                </p>
                <p className="mt-0.5 font-semibold text-slate-900">{c.primary}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{c.secondary}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  )
}

function WorkCard() {
  return (
    <Reveal>
      <section className="card">
        <p className="card-section-label">{workSnapshot.title}</p>
        <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-700">
          {workSnapshot.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </Reveal>
  )
}

function ValuesCard() {
  return (
    <Reveal>
      <section className="card">
        <p className="card-section-label">大事にしていること</p>
        <ul className="mt-4 space-y-3">
          {values.map((v) => (
            <li
              key={v.text}
              className="flex items-start gap-3 rounded-2xl bg-rose-50/60 px-4 py-3 text-sm leading-relaxed text-slate-700 ring-1 ring-rose-100"
            >
              <span className="text-xl leading-none">{v.emoji}</span>
              <span>{v.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  )
}

function CtaCard() {
  return (
    <Reveal>
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-rose-400 via-rose-500 to-orange-400 p-6 text-white shadow-[0_20px_40px_rgba(244,63,94,0.25)]">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
          {ctaSection.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-bold leading-tight">{ctaSection.heading}</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/90">{ctaSection.body}</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-base font-bold text-rose-600 shadow-lg shadow-rose-700/20 transition active:scale-95"
        >
          <MessageCircle className="h-5 w-5 fill-rose-500 text-rose-500" />
          {ctaSection.buttonLabel}
          <Send className="h-4 w-4" />
        </a>
      </section>
    </Reveal>
  )
}

function FooterNote() {
  return (
    <p className="px-4 pt-4 text-center text-[11px] text-slate-400">
      ※ このページは Stage 5 の練習用サンプルです。実在の人物ではありません。
    </p>
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
      { threshold: 0.08 }
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
