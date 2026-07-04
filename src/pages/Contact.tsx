import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { company } from '../data/site'

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20'

type InfoLine = { label: string; href?: string }
const info: { icon: JSX.Element; title: string; lines: InfoLine[] }[] = [
  {
    icon: <Mail size={22} />,
    title: 'Email Id',
    lines: company.emails.map((e) => ({ label: e, href: `mailto:${e}` })),
  },
  {
    icon: <Phone size={22} />,
    title: 'Contact No.',
    lines: company.phones.map((p) => ({ label: p.label, href: p.href })),
  },
  {
    icon: <MapPin size={22} />,
    title: 'Location',
    lines: [{ label: `${company.address.line1} ${company.address.line2}` }],
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
        bg="/images/page-header-bg.jpg"
      />

      <section className="relative -mt-px">
        <iframe
          title="Six Star Impex location"
          src={company.mapEmbed}
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {info.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="flex h-full items-start gap-4 rounded-3xl bg-white p-7 shadow-soft ring-1 ring-black/5">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white">
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{c.title}</h4>
                    <div className="mt-1 space-y-0.5 text-sm text-muted">
                      {c.lines.map((l) =>
                        l.href ? (
                          <a key={l.label} href={l.href} className="block break-all transition hover:text-brand">
                            {l.label}
                          </a>
                        ) : (
                          <p key={l.label}>{l.label}</p>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <img
                src="/images/contact-img.jpg"
                alt="Get in touch with Six Star Impex"
                className="w-full rounded-3xl shadow-card"
              />
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="text-3xl font-extrabold md:text-4xl">Get In Touch</h2>
              <p className="mt-3 text-muted">
                Have a coating requirement or a question? Send us a message and our team will respond
                promptly.
              </p>

              {sent ? (
                <div className="mt-6 flex items-center gap-4 rounded-2xl bg-brand/5 p-6 ring-1 ring-brand/20">
                  <CheckCircle2 className="text-brand" size={32} />
                  <div>
                    <h4 className="font-bold">Message sent!</h4>
                    <p className="text-sm text-muted">Thank you for reaching out — we'll be in touch soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                  <input type="text" name="name" placeholder="Your Name" required className={inputClass} />
                  <input type="email" name="email" placeholder="Your E-mail" required className={inputClass} />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className={`${inputClass} sm:col-span-2`}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className={`${inputClass} resize-none sm:col-span-2`}
                  />
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-primary">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
