import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20'

export function QuoteForm({ onDone }: { onDone?: () => void }) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
    if (onDone) setTimeout(onDone, 2200)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 className="text-brand" size={48} />
        <h4 className="text-xl font-bold">Thank you!</h4>
        <p className="max-w-xs text-sm text-muted">
          Your request has been received. Our team will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <input type="text" name="name" placeholder="Your Name" required className={inputClass} />
      <input type="text" name="company" placeholder="Company Name" required className={inputClass} />
      <input
        type="tel"
        name="mobile"
        placeholder="Phone No."
        pattern="[0-9]{10}"
        required
        className={inputClass}
      />
      <input type="email" name="email" placeholder="Email Id" required className={inputClass} />
      <textarea
        name="message"
        placeholder="Your Requirement"
        required
        rows={3}
        className={`${inputClass} col-span-2 resize-none`}
      />
      <div className="col-span-2 flex justify-center">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Send Request
        </button>
      </div>
    </form>
  )
}
