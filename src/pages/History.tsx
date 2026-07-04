import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SideNav from '../components/SideNav'
import CTABand from '../components/CTABand'
import { company } from '../data/site'
import Seo from '../components/Seo'
import { pageSeo } from '../data/seo'

const aboutLinks = [
  { label: 'History', to: '/history' },
  { label: 'Our Facility', to: '/facility' },
  { label: 'Certifications & Approvals', to: '/certifications' },
  { label: 'Our Management', to: '/management' },
]

const milestones = [
  {
    year: '2017',
    title: 'Founded in Greater Noida',
    text:
      'Six Star Impex Pvt. Ltd. is established as an affiliated entity of Crescent Techno Solutions, a well-known name in the field of surface finishing plants.',
  },
  {
    year: 'Growth',
    title: 'State-of-the-art Facility',
    text:
      'A 24,000 sq. ft state-of-the-art facility is commissioned to serve manufacturers across the north region of India.',
  },
  {
    year: 'Capability',
    title: 'Three Production Lines',
    text:
      'Two dedicated powder coating lines and one CED line come online, enabling reliable high-volume daily throughput including OEM overflow.',
  },
  {
    year: 'Today',
    title: 'Trusted by Leading OEMs',
    text:
      'Backed by 25+ years of surface-finishing experience, our certifications and quality system secure business from Automobile and White Goods OEMs.',
  },
]

export default function History() {
  return (
    <>
      <Seo {...pageSeo.history} />
      <PageHeader
        title="History"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us', to: '/about' }, { label: 'History' }]}
        bg="/images/history-bg.jpg"
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SideNav title="About Us" links={aboutLinks} />
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <span className="eyebrow">Our Journey</span>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Our History</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Established in {company.established}, {company.name} is an affiliated entity of{' '}
                {company.affiliate}. What began as a specialist surface-finishing venture has grown into a
                trusted production coating partner for reputable brands across India — combining decades of
                engineering know-how with a modern, high-volume facility.
              </p>
            </Reveal>

            <div className="relative mt-12 space-y-8 before:absolute before:left-[19px] before:top-2 before:h-full before:w-0.5 before:bg-brand/20">
              {milestones.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.1}>
                  <div className="relative flex gap-6">
                    <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white shadow-card">
                      {i + 1}
                    </div>
                    <div className="card flex-1 p-6">
                      <span className="text-sm font-bold uppercase tracking-widest text-brand">
                        {m.year}
                      </span>
                      <h3 className="mt-1 text-xl font-bold">{m.title}</h3>
                      <p className="mt-2 text-muted">{m.text}</p>
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
