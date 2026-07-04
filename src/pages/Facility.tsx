import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SideNav from '../components/SideNav'
import CTABand from '../components/CTABand'
import { facilityImages, company } from '../data/site'

const aboutLinks = [
  { label: 'History', to: '/history' },
  { label: 'Our Facility', to: '/facility' },
  { label: 'Certifications & Approvals', to: '/certifications' },
  { label: 'Our Management', to: '/management' },
]

const highlights = [
  ['24,000 sq. ft', 'State-of-the-art facility'],
  ['3 Lines', '2 Powder + 1 CED'],
  ['North India', 'Serving manufacturers region-wide'],
  ['High Volume', 'Daily OEM overflow capacity'],
]

export default function Facility() {
  const [active, setActive] = useState<number | null>(null)

  const close = () => setActive(null)
  const move = (dir: number) =>
    setActive((i) => (i === null ? i : (i + dir + facilityImages.length) % facilityImages.length))

  return (
    <>
      <PageHeader
        title="Our Facility"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us', to: '/about' }, { label: 'Our Facility' }]}
        bg="/images/facility-bg.jpg"
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SideNav title="About Us" links={aboutLinks} />
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <span className="eyebrow">Infrastructure</span>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Our Facility</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Six Star serves manufacturers throughout the north region of India from a{' '}
                {company.facilitySize} state-of-the-art facility located in {company.location}. Our plant is
                engineered for consistent quality and high-volume output, with two powder coating lines and a
                dedicated CED line running daily.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {highlights.map(([v, l], i) => (
                <Reveal key={l} delay={i * 0.08}>
                  <div className="rounded-2xl bg-slate-50 p-5 text-center ring-1 ring-black/5">
                    <div className="text-xl font-extrabold text-brand">{v}</div>
                    <div className="mt-1 text-xs text-muted">{l}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {facilityImages.map((src, i) => (
                <Reveal key={src} delay={(i % 3) * 0.1}>
                  <button
                    onClick={() => setActive(i)}
                    className="group relative block h-56 w-full overflow-hidden rounded-2xl shadow-soft"
                  >
                    <img
                      src={src}
                      alt={`Six Star facility ${i + 1}`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-brand-navy/0 text-white opacity-0 transition group-hover:bg-brand-navy/50 group-hover:opacity-100">
                      <Maximize2 size={26} />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button className="absolute right-5 top-5 text-white/80 hover:text-white" onClick={close} aria-label="Close">
              <X size={30} />
            </button>
            <button
              className="absolute left-4 text-white/80 hover:text-white md:left-10"
              onClick={(e) => { e.stopPropagation(); move(-1) }}
              aria-label="Previous"
            >
              <ChevronLeft size={40} />
            </button>
            <motion.img
              key={active}
              src={facilityImages[active]}
              alt="Facility"
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 text-white/80 hover:text-white md:right-10"
              onClick={(e) => { e.stopPropagation(); move(1) }}
              aria-label="Next"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABand />
    </>
  )
}
