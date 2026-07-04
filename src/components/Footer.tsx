import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { MapPin, Phone, Mail } from 'lucide-react'
import { company } from '../data/site'

const socialIcon: Record<string, JSX.Element> = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="container grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:pr-6">
          <img src="/images/logo-light.svg" alt="Six Star Impex" className="h-14" />
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            We specialize in offering CED Coating and Powder Coating services to India's most trusted
            brands and their supplier networks.
          </p>
          <div className="mt-5 flex gap-3">
            {company.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-brand-gradient"
              >
                {socialIcon[s.name]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Customers', '/customers'],
              ['Contact Us', '/contact'],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-slate-400 transition hover:text-brand-light">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-white">Services</h3>
          <ul className="space-y-3 text-sm">
            {[
              ['CED Coating', '/ced-coating'],
              ['Powder Coating', '/powder-coating'],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-slate-400 transition hover:text-brand-light">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-white">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-light" />
              <span className="text-slate-400">
                {company.address.line1}
                <br />
                {company.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-brand-light" />
              <a href={company.phones[0].href} className="text-slate-400 transition hover:text-brand-light">
                {company.phones[0].label}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-brand-light" />
              <a
                href={`mailto:${company.emails[0]}`}
                className="break-all text-slate-400 transition hover:text-brand-light"
              >
                {company.emails[0]}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-center text-sm text-slate-400 md:flex-row md:text-left">
          <p>
            &copy; {new Date().getFullYear()} {company.name} All Rights Reserved.
          </p>
          <p>
            Designed By{' '}
            <a
              href="https://pacewalk.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white transition hover:text-brand-light"
            >
              PACEWALK
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
