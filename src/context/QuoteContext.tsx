import { createContext, useContext, useState, type ReactNode } from 'react'

type QuoteContextType = {
  open: boolean
  openQuote: () => void
  closeQuote: () => void
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined)

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <QuoteContext.Provider
      value={{ open, openQuote: () => setOpen(true), closeQuote: () => setOpen(false) }}
    >
      {children}
    </QuoteContext.Provider>
  )
}

export function useQuote() {
  const ctx = useContext(QuoteContext)
  if (!ctx) throw new Error('useQuote must be used within QuoteProvider')
  return ctx
}
