import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides, whyPoints, services, clients, company } from '../data/site'
import { useQuote } from '../context/QuoteContext'
import Reveal from '../components/Reveal'
import CTABand from '../components/CTABand'
import Seo from '../components/Seo'
import { pageSeo } from '../data/seo'

function Hero() {
  const [index, setIndex] = useState(0)
  const { openQuote } = useQuote()

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6000)
    return () => clearInterval(t)
  }, [])

  const slide = heroSlides[index]
  const go = (dir: number) =>
    setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length)

  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-brand-navy">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          {slide.video ? (
            <video autoPlay muted loop playsInline className="h-full w-full object-cover">
              <source src={slide.video} type="video/mp4" />
            </video>
          ) : (
            <div
              className="h-full w-full"
              style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/50 to-brand-navy/80" />

      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-lg font-medium tracking-wide text-brand-light md:text-xl">
              {slide.kicker}
            </p>
            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
              {slide.title}
            </h1>
            <button onClick={openQuote} className="btn-primary mt-8 px-9 py-4 text-base">
              Request A Quote <ArrowRight size={18} />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/40 text-white backdrop-blur transition hover:bg-white hover:text-brand"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/40 text-white backdrop-blur transition hover:bg-white hover:text-brand"
      >
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-brand-light' : 'w-2.5 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

function WhatWeOffer() {
  return (
    <section className="section">
      <div className="container grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-brand/10" />
            <img
              src="/images/about-1.png"
              alt="Coating expertise at Six Star Impex"
              className="relative w-full rounded-3xl object-cover shadow-card"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-7">
          <span className="eyebrow">What We Offer</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-snug md:text-4xl">
            A trusted partner in industrial coating solutions for reputable brands across India.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            We offer CED Coating and Powder Coating services to top Indian brands and suppliers. Unlike
            typical job shops, we provide customized solutions with value-added services and superior
            quality. With 3 production lines, we can handle high-volume orders daily. Our dedicated team
            ensures individual requirements are met. Let's connect!
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Let's Talk <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function WhySixStar() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20">
      <div
        className="absolute inset-0 opacity-25"
        style={{ backgroundImage: 'url(/images/funfact-1-bg.jpg)', backgroundSize: 'cover' }}
      />
      <div className="container relative z-10 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <span className="eyebrow !text-brand-light before:!bg-brand-light">Why Six Star</span>
          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">Why Six Star</h2>
          <p className="mt-5 leading-relaxed text-slate-300">
            We understand that coating is a vital yet essential cost element — representing 10% of our
            customers' expenses while being 100% of what the customer observes. The appearance of parts is
            of utmost importance, and we prioritise delivering aesthetically pleasing, efficiently produced
            items. We've built our business to be the ideal production paint partner for global brands and
            their suppliers.
          </p>
          <Link to="/about" className="btn-ghost-white mt-7">
            Know More <ArrowRight size={18} />
          </Link>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {whyPoints.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="h-full overflow-hidden rounded-2xl bg-white shadow-card">
                <h5
                  className={`px-5 py-4 text-base font-bold text-white ${
                    i % 2 === 0 ? 'bg-brand' : 'bg-brand-light'
                  }`}
                >
                  {p.title}
                </h5>
                <p className="p-5 text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const { openQuote } = useQuote()
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">What We Do</span>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
            We Are Dedicated To Serve You All Time.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-black/5 transition hover:-translate-y-1.5 hover:shadow-card">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <span className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-brand-gradient text-lg font-bold text-white shadow-lg">
                    {s.num}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.excerpt}</p>
                  <Link
                    to={s.to}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition group-hover:gap-3"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-lg font-medium">
          Interested in our services?{' '}
          <button onClick={openQuote} className="font-bold text-brand underline-offset-4 hover:underline">
            Request A Quote
          </button>{' '}
          now.
        </p>
      </div>
    </section>
  )
}

function Brands() {
  const loop = [...clients, ...clients]
  return (
    <section className="section overflow-hidden">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-bold md:text-3xl">
            Parts coated by Six Star Impex are used by some of the{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              world's most trusted brands
            </span>
          </h3>
        </Reveal>
      </div>
      <div className="relative mt-12 flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-6">
          {loop.map((src, i) => (
            <div
              key={i}
              className="grid h-28 w-44 shrink-0 place-items-center rounded-2xl border border-slate-100 bg-white p-5 shadow-soft"
            >
              <img src={src} alt="Client brand" className="max-h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Seo {...pageSeo.home} />
      <Hero />
      <WhatWeOffer />
      <WhySixStar />
      <Services />
      <Brands />
      <CTABand />
    </>
  )
}
