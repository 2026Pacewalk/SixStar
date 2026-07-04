import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CTABand from '../components/CTABand'
import { clients } from '../data/site'

export default function Customers() {
  return (
    <>
      <PageHeader
        title="Customers"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Customers' }]}
        bg="/images/customers-bg.jpg"
      />
      <section className="section">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">Our Customers</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Trusted by the world's most respected brands
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Parts coated by Six Star Impex are used by some of the world's most trusted brands and their
              supplier networks. Our commitment to quality, consistency and high-volume reliability has made
              us a preferred production coating partner across the automobile and white-goods industries.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((src, i) => (
              <Reveal key={src} delay={(i % 4) * 0.08}>
                <div className="grid h-32 place-items-center rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                  <img src={src} alt={`Client ${i + 1}`} className="max-h-20 w-auto object-contain" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
