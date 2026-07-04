import { Link } from 'react-router-dom'
import { useQuote } from '../context/QuoteContext'
import Reveal from './Reveal'

export default function CTABand() {
  const { openQuote } = useQuote()
  return (
    <section className="relative overflow-hidden bg-brand-gradient">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'url(/images/funfact-1-bg.jpg)', backgroundSize: 'cover', mixBlendMode: 'overlay' }}
      />
      <div className="container relative z-10 flex flex-col items-center gap-6 py-14 text-center text-white md:flex-row md:justify-between md:text-left">
        <Reveal>
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            Ready to elevate your surface finishing?
          </h2>
          <p className="mt-2 max-w-xl text-white/90">
            Get a customized coating solution built around your volumes, timelines and quality standards.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="flex shrink-0 flex-wrap justify-center gap-3">
          <button onClick={openQuote} className="btn bg-white text-brand hover:-translate-y-0.5 hover:shadow-lg">
            Request A Quote
          </button>
          <Link to="/contact" className="btn-ghost-white">
            Contact Us
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
