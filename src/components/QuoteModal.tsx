import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useQuote } from '../context/QuoteContext'
import { QuoteForm } from './QuoteForm'

export default function QuoteModal() {
  const { open, closeQuote } = useQuote()
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/70 p-4 py-10 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuote}
        >
          <motion.div
            className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={closeQuote}
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-slate-100 hover:text-ink"
            >
              <X size={20} />
            </button>
            <h3 className="text-center text-2xl font-extrabold text-brand">Request a Quote</h3>
            <p className="mt-1 text-center text-sm text-muted">
              Please complete the form below to request a quote.
            </p>
            <div className="mt-6">
              <QuoteForm onDone={closeQuote} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
