import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; to?: string }

export default function PageHeader({
  title,
  crumbs,
  bg = '/images/page-header-bg.jpg',
}: {
  title: string
  crumbs: Crumb[]
  bg?: string
}) {
  return (
    <section
      className="relative flex min-h-[340px] items-center justify-center overflow-hidden pt-24"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/75 to-brand/50" />
      <div className="container relative z-10 text-center text-white">
        <h1 className="text-4xl font-extrabold text-white drop-shadow md:text-5xl">{title}</h1>
        <nav className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-slate-200">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              {c.to ? (
                <Link to={c.to} className="transition hover:text-brand-light">
                  {c.label}
                </Link>
              ) : (
                <span className="text-brand-light">{c.label}</span>
              )}
              {i < crumbs.length - 1 && <ChevronRight size={15} className="text-slate-400" />}
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}
