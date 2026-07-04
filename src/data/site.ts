export const company = {
  name: 'Six Star Impex Pvt. Ltd.',
  shortName: 'Six Star Impex',
  tagline: 'Where Quality Meets Coating Expertise',
  established: '2017',
  affiliate: 'Crescent Techno Solutions',
  facilitySize: '24,000 sq. ft',
  location: 'Greater Noida, UP',
  experienceYears: '25+',
  productionLines: '3 production lines (2 powder, 1 CED)',
  whatsapp: 'https://wa.link/ybt18y',
  emails: ['anik@crescenttechno.com', 'ankit@crescenttechno.com'],
  phones: [
    { label: '+91 99715 35937', href: 'tel:+919971535937' },
    { label: '+91 99100 08435', href: 'tel:+919910008435' },
  ],
  address: {
    line1: 'Plot-14E, MUP-2 Ecotech-3,',
    line2: 'Greater Noida-201306',
  },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.2026931599244!2d77.45521507549718!3d28.533626675718953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMyJzAxLjEiTiA3N8KwMjcnMjguMCJF!5e0!3m2!1sen!2sin!4v1691469412604!5m2!1sen!2sin',
  socials: [
    { name: 'facebook', href: '#' },
    { name: 'twitter', href: '#' },
    { name: 'instagram', href: '#' },
  ],
}

export type NavItem = {
  label: string
  to?: string
  children?: { label: string; to: string }[]
}

export const nav: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about',
    children: [
      { label: 'History', to: '/history' },
      { label: 'Our Facility', to: '/facility' },
      { label: 'Certifications & Approvals', to: '/certifications' },
      { label: 'Our Management', to: '/management' },
    ],
  },
  { label: 'Customers', to: '/customers' },
  {
    label: 'Services',
    children: [
      { label: 'CED Coating', to: '/ced-coating' },
      { label: 'Powder Coating', to: '/powder-coating' },
    ],
  },
  { label: 'Contact Us', to: '/contact' },
]

export const heroSlides = [
  {
    kicker: 'Where Quality Meets',
    title: 'Coating Expertise',
    image: '/images/coating-expertise.jpg',
  },
  {
    kicker: 'Your Production Partner for',
    title: 'High-Volume Work',
    image: '/images/high-volume-work.jpg',
  },
  {
    kicker: 'Your Production Partner for',
    title: 'High-Quality Requirements',
    video: '/images/quality-requirements.mp4',
  },
]

export const whyPoints = [
  {
    title: 'Our Industry Experience',
    text: 'We have a rich experience of more than 25 years in offering surface finishing solutions.',
  },
  {
    title: 'Custom Production Partnerships',
    text: 'Tailor-made solutions crafted around each of our customers.',
  },
  {
    title: 'High Volume Capability',
    text: '3 production areas: 2 powder lines, 1 CED line. Handling high volumes daily, including OEM overflow.',
  },
  {
    title: 'Our People',
    text: 'Our dedicated team is committed to achieving customer satisfaction above all else.',
  },
]

export const services = [
  {
    num: '01',
    title: 'CED Coating Services',
    image: '/images/ced-coating.jpg',
    to: '/ced-coating',
    excerpt:
      'Cathode Electro Deposition delivers flawless, corrosion-resistant, environmentally friendly coating for automotive and metal equipment.',
  },
  {
    num: '02',
    title: 'Powder Coating Services',
    image: '/images/powder-coating.jpg',
    to: '/powder-coating',
    excerpt:
      'Durable, high-quality powder-coated finishes across a wide palette of colours and textures for high-volume production.',
  },
  {
    num: '03',
    title: 'Liquid Paint & Putty',
    image: '/images/liquid-paint-putty.jpg',
    to: '/contact',
    excerpt:
      'Value-added liquid paint and putty finishing to complete your surface-finishing requirements.',
  },
]

export const clients = Array.from({ length: 12 }, (_, i) => `/images/client-${i + 1}.jpg`)

export const aboutCards = [
  {
    title: 'Our History',
    text:
      'Established in 2017, the company is an affiliated entity of Crescent Techno Solutions, a well-known name in the field of surface finishing plants.',
    to: '/history',
  },
  {
    title: 'Our Facility',
    text:
      'Six Star serves manufacturers throughout the north region of India from a 24,000 sq. ft state-of-the-art facility located in Greater Noida, UP.',
    to: '/facility',
  },
  {
    title: 'Certifications & Approvals',
    text:
      'Six Star holds certifications and approvals which, coupled with our quality system, helped us secure business from Automobile & White Goods OEMs.',
    to: '/certifications',
  },
  {
    title: 'Our Management',
    text:
      'Six Star benefits from a skilled and determined management board with extensive experience, which has been instrumental in its success.',
    to: '/management',
  },
]

export const management = [
  { name: 'Yogesh Rustagi', role: 'Director', photo: '/images/yogesh-rustagi.jpg' },
  { name: 'Ankit Rustagi', role: 'Director', photo: '/images/ankit-rustagi.jpg' },
]

export const facilityImages = Array.from({ length: 6 }, (_, i) => `/images/facility-${i + 1}.jpg`)

export const cedAdvantages = [
  'Long-lasting protection against rust and corrosion, even in challenging environments.',
  'Even coverage on complex shapes and inaccessible areas, resulting in a smooth finish.',
  'Water-based coatings contain fewer harmful VOCs, aligning with environmental regulations.',
  'Forms robust bonds with the substrate, reducing the risk of chipping or peeling over time.',
  'Shields objects from chemical exposure and potential damage.',
  'Minimises overspray and waste, leading to cost savings and process efficiency.',
  'Offers resistance against abrasion and wear, extending the lifespan of coated products.',
]

export const powderAdvantages = [
  'Tough, durable finish that resists chipping, scratching, fading and wear.',
  'Environmentally friendly — virtually no solvents or harmful VOCs released.',
  'Wide range of colours, gloss levels and textured finishes available.',
  'Uniform coverage with excellent edge coverage and consistent thickness.',
  'Fast curing enables high-volume throughput across our two powder lines.',
  'Excellent value for money with minimal overspray and material waste.',
]

export const certifications = [
  {
    title: 'ISO Certified Quality System',
    text:
      'Our quality management system is built to international standards, ensuring consistent, repeatable results on every batch.',
  },
  {
    title: 'Automobile OEM Approvals',
    text:
      'Approved as a coating partner by leading automobile OEMs and their tier suppliers across India.',
  },
  {
    title: 'White Goods OEM Approvals',
    text:
      'Trusted by white-goods manufacturers for durable, aesthetically flawless finished components.',
  },
  {
    title: 'Environmental Compliance',
    text:
      'Water-based CED and low-VOC powder processes that align with modern environmental regulations.',
  },
]
