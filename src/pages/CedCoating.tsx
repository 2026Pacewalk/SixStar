import ServiceLayout from '../components/ServiceLayout'
import { cedAdvantages } from '../data/site'

export default function CedCoating() {
  return (
    <ServiceLayout
      title="CED Coating"
      bg="/images/ced-coating-bg.jpg"
      heroImage="/images/ced-coating-1.jpg"
      intro={[
        'Cathode Electro Deposition is an advanced coating technique used in the automotive and metal equipment industries. It employs water-based paint for flawless, clean and accurate object coating.',
        'The coating provides exceptional chemical resistance, mechanical durability and environmental friendliness. We use state-of-the-art machinery and top-quality materials for unparalleled rust resistance in our products.',
      ]}
      advantages={cedAdvantages}
      gallery={['/images/ced-coating-2.png', '/images/ced-coating-3.png']}
      galleryTinted
    />
  )
}
