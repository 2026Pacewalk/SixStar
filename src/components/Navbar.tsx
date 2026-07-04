import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import {
  ChevronDown,
  Home,
  Building2,
  Users,
  PaintBucket,
  PhoneCall,
  ArrowRight,
  Mail,
  MapPin,
} from 'lucide-react'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { nav, company } from '../data/site'
import { useQuote } from '../context/QuoteContext'

const menuIcons: Record<string, JSX.Element> = {
  Home: <Home size={19} />,
  'About Us': <Building2 size={19} />,
  Customers: <Users size={19} />,
  Services: <PaintBucket size={19} />,
  'Contact Us': <PhoneCall size={19} />,
}

const socialIcons: Record<string, JSX.Element> = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
}

/* Animated hamburger ↔ X */
function BurgerButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      className="relative grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-white shadow-card xl:hidden"
    >
      <span className="relative block h-4 w-5">
        <motion.span
          className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white"
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-white"
          animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-white"
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </span>
    </button>
  )
}

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 26 } },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const { openQuote } = useQuote()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenGroup(null)
  }, [location.pathname])

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-100 bg-white/95 py-2 shadow-soft backdrop-blur'
          : 'bg-gradient-to-b from-black/35 to-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0">
          <img
            src={scrolled ? '/images/logo.svg' : '/images/logo-light.svg'}
            alt="Six Star Impex"
            className={`transition-all duration-300 ${scrolled ? 'h-11' : 'h-14'}`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              {item.to ? (
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${
                      isActive
                        ? scrolled
                          ? 'text-brand'
                          : 'text-brand-light'
                        : scrolled
                          ? 'text-ink hover:text-brand'
                          : 'text-white/90 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown size={15} className="mt-0.5 transition group-hover:rotate-180" />
                  )}
                </NavLink>
              ) : (
                <button
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${
                    scrolled ? 'text-ink hover:text-brand' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown size={15} className="mt-0.5 transition group-hover:rotate-180" />
                  )}
                </button>
              )}

              {item.children && (
                <div className="invisible absolute left-0 top-full w-60 translate-y-2 rounded-2xl bg-white p-2 opacity-0 shadow-card ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <NavLink
                      key={c.to}
                      to={c.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                          isActive ? 'bg-brand/10 text-brand' : 'text-muted hover:bg-slate-50 hover:text-brand'
                        }`
                      }
                    >
                      {c.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button onClick={openQuote} className="btn-primary ml-3 !py-2.5">
            Request A Quote
          </button>
        </nav>

        {/* Mobile toggle */}
        <BurgerButton open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-[100dvh] w-[88%] max-w-sm flex-col overflow-hidden rounded-l-[28px] bg-white shadow-2xl xl:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={{ left: 0, right: 0.4 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 90) setMobileOpen(false)
              }}
            >
              {/* Gradient header */}
              <div className="relative overflow-hidden bg-brand-gradient px-6 pb-8 pt-6 text-white">
                <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-12 -left-6 h-28 w-28 rounded-full bg-white/10" />
                <div className="relative flex items-center justify-between">
                  <div className="rounded-2xl bg-white px-4 py-2.5 shadow-lg ring-1 ring-white/50">
                    <img src="/images/logo.svg" alt="Six Star Impex" className="h-10" />
                  </div>
                  <span className="grid h-9 w-16 place-items-center rounded-full bg-white/15 text-[10px] font-semibold uppercase tracking-wider">
                    Menu
                  </span>
                </div>
                <p className="relative mt-4 text-sm font-medium text-white/85">
                  Where Quality Meets Coating Expertise
                </p>
                <span className="relative mt-2 block h-1 w-10 rounded-full bg-white/40" />
              </div>

              {/* Nav items */}
              <motion.ul
                className="flex-1 space-y-1.5 overflow-y-auto px-4 py-6"
                variants={listVariants}
                initial="hidden"
                animate="show"
              >
                {nav.map((item) => {
                  const isGroupOpen = openGroup === item.label
                  return (
                    <motion.li key={item.label} variants={itemVariants}>
                      <div className="flex items-center gap-1">
                        {item.to ? (
                          <NavLink
                            to={item.to}
                            end={item.to === '/'}
                            className={({ isActive }) =>
                              `group flex flex-1 items-center gap-3 rounded-2xl px-3 py-3 text-[15px] font-semibold transition ${
                                isActive
                                  ? 'bg-brand-gradient text-white shadow-card'
                                  : 'text-ink hover:bg-slate-50'
                              }`
                            }
                          >
                            {({ isActive }) => (
                              <>
                                <span
                                  className={`grid h-9 w-9 place-items-center rounded-xl transition ${
                                    isActive ? 'bg-white/20 text-white' : 'bg-brand/10 text-brand'
                                  }`}
                                >
                                  {menuIcons[item.label]}
                                </span>
                                {item.label}
                              </>
                            )}
                          </NavLink>
                        ) : (
                          <button
                            onClick={() => setOpenGroup(isGroupOpen ? null : item.label)}
                            className="group flex flex-1 items-center gap-3 rounded-2xl px-3 py-3 text-[15px] font-semibold text-ink transition hover:bg-slate-50"
                          >
                            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand/10 text-brand">
                              {menuIcons[item.label]}
                            </span>
                            {item.label}
                          </button>
                        )}

                        {item.children && (
                          <button
                            onClick={() => setOpenGroup(isGroupOpen ? null : item.label)}
                            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-muted transition hover:bg-slate-100"
                            aria-label={`Toggle ${item.label} submenu`}
                          >
                            <motion.span animate={{ rotate: isGroupOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                              <ChevronDown size={18} />
                            </motion.span>
                          </button>
                        )}
                      </div>

                      <AnimatePresence initial={false}>
                        {item.children && isGroupOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden pl-6"
                          >
                            <div className="mt-1 space-y-0.5 border-l-2 border-brand/15 pl-4">
                              {item.children.map((c) => (
                                <NavLink
                                  key={c.to}
                                  to={c.to}
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                                      isActive ? 'text-brand' : 'text-muted hover:text-brand'
                                    }`
                                  }
                                >
                                  {({ isActive }) => (
                                    <>
                                      <span
                                        className={`h-1.5 w-1.5 rounded-full transition ${
                                          isActive ? 'bg-brand-gradient' : 'bg-slate-300'
                                        }`}
                                      />
                                      {c.label}
                                    </>
                                  )}
                                </NavLink>
                              ))}
                            </div>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  )
                })}
              </motion.ul>

              {/* Footer */}
              <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-5">
                <button
                  onClick={() => {
                    setMobileOpen(false)
                    openQuote()
                  }}
                  className="btn-primary w-full"
                >
                  Request A Quote <ArrowRight size={17} />
                </button>

                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  <a
                    href={company.phones[0].href}
                    className="flex items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-sm font-semibold text-ink shadow-soft ring-1 ring-black/5 transition hover:text-brand"
                  >
                    <PhoneCall size={16} className="text-brand" /> Call
                  </a>
                  <a
                    href={company.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-95"
                  >
                    <FaWhatsapp className="text-base" /> WhatsApp
                  </a>
                </div>

                <div className="mt-4 space-y-1.5 text-xs text-muted">
                  <a href={`mailto:${company.emails[0]}`} className="flex items-center gap-2 hover:text-brand">
                    <Mail size={14} className="text-brand" /> {company.emails[0]}
                  </a>
                  <p className="flex items-start gap-2">
                    <MapPin size={14} className="mt-0.5 shrink-0 text-brand" />
                    {company.address.line1} {company.address.line2}
                  </p>
                </div>

                <div className="mt-4 flex justify-center gap-3">
                  {company.socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      aria-label={s.name}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand shadow-soft ring-1 ring-black/5 transition hover:bg-brand-gradient hover:text-white"
                    >
                      {socialIcons[s.name]}
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
