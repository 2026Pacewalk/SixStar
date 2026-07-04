import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SideNav from '../components/SideNav'
import CTABand from '../components/CTABand'
import { management } from '../data/site'
import Seo from '../components/Seo'
import { pageSeo } from '../data/seo'

const aboutLinks = [
  { label: 'History', to: '/history' },
  { label: 'Our Facility', to: '/facility' },
  { label: 'Certifications & Approvals', to: '/certifications' },
  { label: 'Our Management', to: '/management' },
]

export default function Management() {
  return (
    <>
      <Seo {...pageSeo.management} />
      <PageHeader
        title="Our Management"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us', to: '/about' },
          { label: 'Our Management' },
        ]}
        bg="/images/management-bg.jpg"
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SideNav title="About Us" links={aboutLinks} />
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <span className="eyebrow">Leadership</span>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Our Management</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Under the guidance of a seasoned and determined management team, Six Star Impex Pvt. Ltd. has
                thrived, proving to be an invaluable asset to the organization. With unwavering dedication,
                these adept professionals continually strive to reach new heights, fortifying the very core on
                which Six Star Impex stands, aspiring to achieve unparalleled success.
              </p>
            </Reveal>

            <div className="mt-12 grid max-w-2xl gap-8 sm:grid-cols-2">
              {management.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.12}>
                  <div className="group overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-black/5 transition hover:-translate-y-1.5 hover:shadow-card">
                    <div className="h-72 overflow-hidden">
                      <img
                        src={m.photo}
                        alt={m.name}
                        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-brand">{m.name}</h3>
                      <p className="mt-1 text-sm font-medium uppercase tracking-widest text-muted">
                        {m.role}
                      </p>
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
