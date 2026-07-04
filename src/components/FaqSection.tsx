import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { homeFaqs } from '../data/seo'
import Reveal from './Reveal'

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section bg-slate-50">
      <div className="container max-w-3xl">
        <Reveal className="text-center">
          <span className="eyebrow justify-center">FAQ</span>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted">
            Everything you need to know about our CED and powder coating services.
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {homeFaqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 0.06}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/5">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-base font-bold md:text-lg">{f.q}</h3>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${
                        isOpen ? 'rotate-45 bg-brand-gradient text-white' : 'bg-brand/10 text-brand'
                      }`}
                    >
                      <Plus size={18} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
