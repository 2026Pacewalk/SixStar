import { NavLink } from 'react-router-dom'
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import PageHeader from './PageHeader'
import Reveal from './Reveal'
import { QuoteForm } from './QuoteForm'
import { useQuote } from '../context/QuoteContext'
import { company } from '../data/site'

const serviceLinks = [
  { label: 'CED Coating', to: '/ced-coating' },
  { label: 'Powder Coating', to: '/powder-coating' },
]

export type ServiceLayoutProps = {
  title: string
  bg: string
  intro: string[]
  heroImage: string
  advantages: string[]
  gallery: string[]
  galleryTinted?: boolean
}

export default function ServiceLayout({
  title,
  bg,
  intro,
  heroImage,
  advantages,
  gallery,
  galleryTinted = false,
}: ServiceLayoutProps) {
  const { openQuote } = useQuote()

  return (
    <>
      <PageHeader
        title={title}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }, { label: title }]}
        bg={bg}
      />

      {/* Service switcher */}
      <div className="border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className="container flex flex-wrap items-center justify-center gap-3 py-5">
          <span className="mr-1 hidden text-sm font-semibold uppercase tracking-widest text-muted sm:inline">
            Our Services:
          </span>
          {serviceLinks.map((s) => (
            <NavLink
              key={s.to}
              to={s.to}
              className={({ isActive }) =>
                `rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-brand-gradient text-white shadow-card'
                    : 'bg-slate-100 text-ink hover:bg-slate-200'
                }`
              }
            >
              {s.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Service</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">{title}</h2>
            <div className="mt-5 space-y-4">
              {intro.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={openQuote} className="btn-primary">
                Request A Quote <ArrowRight size={18} />
              </button>
              <a href={company.phones[0].href} className="btn-outline">
                Call an Expert
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-28 w-28 rounded-3xl bg-brand/10" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-3xl bg-brand-light/20" />
              <img
                src={heroImage}
                alt={title}
                className="relative w-full rounded-3xl object-cover shadow-card"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Advantages */}
      <section className="section bg-slate-50">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">Why Choose It</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Advantages of {title}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal key={a} delay={(i % 3) * 0.1}>
                <div className="flex h-full items-start gap-4 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-card">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                    <Check size={20} strokeWidth={3} />
                  </span>
                  <p className="leading-relaxed text-muted">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">
                <Sparkles size={15} /> Finish Samples
              </span>
              <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Quality You Can See</h2>
            </Reveal>
            <div
              className={`mt-12 grid gap-6 ${
                gallery.length >= 4 ? 'grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2'
              }`}
            >
              {gallery.map((src, i) => (
                <Reveal key={src} delay={(i % 4) * 0.08}>
                  <div
                    className={`grid place-items-center overflow-hidden rounded-3xl p-6 shadow-soft ring-1 ring-black/5 transition hover:-translate-y-1.5 hover:shadow-card ${
                      galleryTinted ? 'bg-gradient-to-br from-slate-50 to-brand/5' : 'bg-white'
                    }`}
                  >
                    <img src={src} alt={`${title} sample ${i + 1}`} className="max-h-56 w-auto object-contain" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote CTA */}
      <section className="relative overflow-hidden bg-brand-navy py-16 md:py-20">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="text-white">
            <span className="eyebrow !text-brand-light before:!bg-brand-light">Get Started</span>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
              Request a quote for {title}
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate-300">
              Tell us about your parts, volumes and timelines. Our team will get back to you with a
              customized coating solution built around your requirements.
            </p>
            <ul className="mt-6 space-y-3">
              {['High-volume daily capacity', 'OEM-approved quality system', 'Fast, responsive support'].map(
                (li) => (
                  <li key={li} className="flex items-center gap-3 text-slate-200">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-gradient text-white">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    {li}
                  </li>
                ),
              )}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-white p-7 shadow-2xl md:p-8">
              <h3 className="mb-5 text-xl font-bold text-brand">Request A Quote</h3>
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
