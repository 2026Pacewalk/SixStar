import { NavLink } from 'react-router-dom'

export default function SideNav({
  title,
  links,
}: {
  title: string
  links: { label: string; to: string }[]
}) {
  return (
    <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-black/5">
      <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">{title}</h4>
      <ul className="space-y-1">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-brand-gradient text-white shadow-card'
                    : 'text-ink hover:bg-white hover:text-brand'
                }`
              }
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
