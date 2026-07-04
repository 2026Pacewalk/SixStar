import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CTABand from '../components/CTABand'
import { aboutCards, company } from '../data/site'

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '24,000', label: 'Sq. Ft Facility' },
  { value: '3', label: 'Production Lines' },
  { value: '12+', label: 'Trusted Brands' },
]

export default function About() {
  return (
    <>
      <PageHeader title="About Us" crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} bg="/images/about-us-bg.jpg" />

      <section className="section">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">About Us</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">{company.name}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Established in {company.established}, Six Star Impex is an affiliated entity of{' '}
              {company.affiliate}, a well-known name in the field of surface finishing plants. From our
              state-of-the-art {company.facilitySize} facility in {company.location}, we deliver customized
              CED and powder coating solutions to India's most trusted brands and their supplier networks.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="flex h-full flex-col justify-between rounded-3xl bg-white p-7 shadow-soft ring-1 ring-black/5 transition hover:-translate-y-1.5 hover:shadow-card">
                  <div>
                    <h3 className="text-xl font-bold">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{c.text}</p>
                  </div>
                  <Link
                    to={c.to}
                    className="mt-6 grid h-11 w-11 place-items-center rounded-full bg-brand-gradient text-white transition hover:scale-110"
                    aria-label={`Read about ${c.title}`}
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16">
        <div className="container grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <div className="bg-brand-gradient bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-300">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
