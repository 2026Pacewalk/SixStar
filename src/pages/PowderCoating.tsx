import ServiceLayout from '../components/ServiceLayout'
import { powderAdvantages } from '../data/site'
import Seo from '../components/Seo'
import { pageSeo } from '../data/seo'

export default function PowderCoating() {
  return (
    <>
      <Seo {...pageSeo.powder} />
      <ServiceLayout
      title="Powder Coating"
      bg="/images/powder-coating-bg.jpg"
      heroImage="/images/powder-coating.jpg"
      intro={[
        'Powder coating is a dry finishing process in which finely ground particles of pigment and resin are electrostatically applied to a surface and then cured under heat to form a tough, durable and attractive finish. It is one of the most reliable and cost-effective ways to achieve a high-quality, long-lasting coating.',
        'With two dedicated powder lines, Six Star delivers consistent, high-volume output across a wide range of colours, gloss levels and textured finishes — ideal for automotive components, white goods and industrial parts.',
      ]}
      advantages={powderAdvantages}
      gallery={['/images/powder-1.png', '/images/powder-2.png', '/images/powder-3.png', '/images/powder-4.png']}
      galleryTinted
      />
    </>
  )
}
