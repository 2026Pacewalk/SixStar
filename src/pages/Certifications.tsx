import { ShieldCheck } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SideNav from '../components/SideNav'
import CTABand from '../components/CTABand'
import { certifications } from '../data/site'
import Seo from '../components/Seo'
import { pageSeo } from '../data/seo'

const aboutLinks = [
  { label: 'History', to: '/history' },
  { label: 'Our Facility', to: '/facility' },
  { label: 'Certifications & Approvals', to: '/certifications' },
  { label: 'Our Management', to: '/management' },
]

export default function Certifications() {
  return (
    <>
      <Seo {...pageSeo.certifications} />
      <PageHeader
        title="Certifications & Approvals"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us', to: '/about' },
          { label: 'Certifications & Approvals' },
        ]}
        bg="/images/approvals-bg.jpg"
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SideNav title="About Us" links={aboutLinks} />
          </div>
          <div className="lg:col-span-9">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <Reveal>
                <span className="eyebrow">Quality Assured</span>
                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Certifications & Approvals</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                  Six Star holds certifications and approvals which, coupled with our robust quality system,
                  have helped us secure business from Automobile and White Goods OEMs. Every process is
                  documented, monitored and audited to ensure consistent, repeatable results.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <img
                  src="/images/iso-certificate.jpg"
                  alt="ISO Certificate"
                  className="mx-auto w-full max-w-sm rounded-3xl shadow-card ring-1 ring-black/5"
                />
              </Reveal>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {certifications.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.1}>
                  <div className="flex h-full gap-4 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{c.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
