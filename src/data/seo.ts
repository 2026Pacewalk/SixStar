// Centralized on-page SEO metadata + structured data (JSON-LD) for Six Star Impex.

export const SITE_URL = 'https://sixstarimpex.com'
export const ORG_NAME = 'Six Star Impex Pvt. Ltd.'
export const DEFAULT_IMAGE = `${SITE_URL}/images/coating-expertise.jpg`
export const LOGO = `${SITE_URL}/images/logo.svg`

const GEO = { lat: 28.533627, lng: 77.455215 }
const PHONE = '+91-9971535937'
const EMAIL = 'anik@crescenttechno.com'
const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Plot-14E, MUP-2 Ecotech-3',
  addressLocality: 'Greater Noida',
  addressRegion: 'Uttar Pradesh',
  postalCode: '201306',
  addressCountry: 'IN',
}

// --- Global / site-wide structured data (also embedded statically in index.html) ---

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: ORG_NAME,
  url: SITE_URL,
  logo: LOGO,
  description:
    'Six Star Impex Pvt. Ltd. provides CED coating and powder coating services to leading Indian brands and their supplier networks.',
  foundingDate: '2017',
  email: EMAIL,
  telephone: PHONE,
  address: ADDRESS,
  areaServed: 'IN',
  sameAs: [] as string[],
}

export const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#localbusiness`,
  name: ORG_NAME,
  image: DEFAULT_IMAGE,
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  priceRange: '₹₹',
  address: ADDRESS,
  geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
  areaServed: [
    { '@type': 'Place', name: 'Greater Noida' },
    { '@type': 'Place', name: 'Noida' },
    { '@type': 'Place', name: 'Delhi NCR' },
    { '@type': 'Country', name: 'India' },
  ],
  knowsAbout: ['CED Coating', 'Powder Coating', 'Cathode Electro Deposition', 'Surface Finishing'],
}

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: ORG_NAME,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
}

// --- Builders ---

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  }
}

export function serviceLd(opts: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
  }
}

// --- Homepage FAQ (visible accordion + FAQPage rich-result schema) ---

export const homeFaqs = [
  {
    q: 'What is CED coating?',
    a: 'CED (Cathode Electro Deposition) coating is an advanced, water-based electro-deposition process used mainly for automotive and metal parts. It delivers even coverage on complex shapes and exceptional resistance to rust and corrosion.',
  },
  {
    q: 'What is the difference between CED coating and powder coating?',
    a: 'CED coating is a water-based dip process that gives outstanding corrosion protection and reaches recessed areas, making it ideal as a primer or single-coat for automotive parts. Powder coating is a dry, electrostatically applied finish available in a wide range of colours and textures. Six Star Impex offers both.',
  },
  {
    q: 'Where is Six Star Impex located?',
    a: 'Six Star Impex operates a 24,000 sq.ft coating facility at Plot-14E, MUP-2 Ecotech-3, Greater Noida, Uttar Pradesh 201306, serving manufacturers across Delhi NCR and North India.',
  },
  {
    q: 'Can Six Star Impex handle high-volume production orders?',
    a: 'Yes. With three production lines — two powder coating lines and one CED line — Six Star Impex handles high volumes daily, including OEM overflow, backed by 25+ years of surface-finishing experience.',
  },
  {
    q: 'How do I request a coating quote?',
    a: 'Click “Request A Quote” on any page, call +91 99715 35937, or message us on WhatsApp with your part details, volumes and timelines. Our team responds quickly with a customized coating solution.',
  },
]

export const faqPageLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

// --- Per-page metadata ---

export type PageMeta = {
  title: string
  description: string
  path: string
  image?: string
  imageWidth?: number
  imageHeight?: number
  robots?: string
  jsonLd?: unknown
}

const bc = (extra: { name: string; path: string }[]) =>
  breadcrumbLd([{ name: 'Home', path: '/' }, ...extra])

export const pageSeo = {
  home: {
    title: 'CED & Powder Coating Services in India | Six Star Impex',
    description:
      'Six Star Impex offers CED coating and powder coating services to top Indian brands from a 24,000 sq.ft plant in Greater Noida. High-volume, OEM-approved quality. Request a quote.',
    path: '/',
    image: '/images/coating-expertise.jpg',
    imageWidth: 2000,
    imageHeight: 1333,
    jsonLd: faqPageLd,
  },
  about: {
    title: 'About Us | Six Star Impex – Industrial Coating Experts',
    description:
      'Established in 2017 and affiliated with Crescent Techno Solutions, Six Star Impex is a trusted CED & powder coating partner for reputable brands across India. 25+ years of expertise.',
    path: '/about',
    image: '/images/about-us-bg.jpg',
    jsonLd: bc([{ name: 'About Us', path: '/about' }]),
  },
  history: {
    title: 'Our History | Six Star Impex Pvt. Ltd.',
    description:
      'The journey of Six Star Impex — from a 2017 surface-finishing venture affiliated with Crescent Techno Solutions to a trusted high-volume coating partner for Indian OEMs.',
    path: '/history',
    image: '/images/history-bg.jpg',
    jsonLd: bc([
      { name: 'About Us', path: '/about' },
      { name: 'History', path: '/history' },
    ]),
  },
  facility: {
    title: 'Our Facility | 24,000 sq.ft Coating Plant, Greater Noida',
    description:
      'Tour the Six Star Impex facility: a 24,000 sq.ft state-of-the-art coating plant in Greater Noida with two powder lines and one CED line for reliable high-volume output.',
    path: '/facility',
    image: '/images/facility-bg.jpg',
    jsonLd: bc([
      { name: 'About Us', path: '/about' },
      { name: 'Our Facility', path: '/facility' },
    ]),
  },
  certifications: {
    title: 'Certifications & Approvals | Six Star Impex',
    description:
      'Six Star Impex holds quality certifications and Automobile & White Goods OEM approvals, backed by a documented, audited quality management system.',
    path: '/certifications',
    image: '/images/approvals-bg.jpg',
    jsonLd: bc([
      { name: 'About Us', path: '/about' },
      { name: 'Certifications & Approvals', path: '/certifications' },
    ]),
  },
  management: {
    title: 'Our Management | Six Star Impex Pvt. Ltd.',
    description:
      'Meet the management team behind Six Star Impex — directors Yogesh Rustagi and Ankit Rustagi, whose experience drives the company’s growth and quality standards.',
    path: '/management',
    image: '/images/management-bg.jpg',
    jsonLd: bc([
      { name: 'About Us', path: '/about' },
      { name: 'Our Management', path: '/management' },
    ]),
  },
  customers: {
    title: 'Our Customers | Trusted by Leading Indian Brands',
    description:
      'Parts coated by Six Star Impex are used by some of the world’s most trusted brands and their supplier networks across the automobile and white-goods industries.',
    path: '/customers',
    image: '/images/customers-bg.jpg',
    jsonLd: bc([{ name: 'Customers', path: '/customers' }]),
  },
  ced: {
    title: 'CED Coating Services in Greater Noida | Six Star Impex',
    description:
      'Cathode Electro Deposition (CED) coating for automotive & metal parts — superior rust resistance, even coverage and eco-friendly water-based paint. Request a quote today.',
    path: '/ced-coating',
    image: '/images/ced-coating-1.jpg',
    jsonLd: [
      bc([{ name: 'CED Coating', path: '/ced-coating' }]),
      serviceLd({
        name: 'CED Coating',
        description:
          'Cathode Electro Deposition (CED) coating services offering exceptional corrosion resistance, mechanical durability and environmentally friendly water-based finishing.',
        path: '/ced-coating',
      }),
    ],
  },
  powder: {
    title: 'Powder Coating Services in Greater Noida | Six Star Impex',
    description:
      'Durable, high-quality powder coating across a wide range of colours and textures. Two dedicated lines for high-volume automotive, white-goods and industrial parts.',
    path: '/powder-coating',
    image: '/images/powder-coating.jpg',
    jsonLd: [
      bc([{ name: 'Powder Coating', path: '/powder-coating' }]),
      serviceLd({
        name: 'Powder Coating',
        description:
          'High-volume powder coating services delivering tough, durable finishes in a wide range of colours, gloss levels and textures for automotive and industrial parts.',
        path: '/powder-coating',
      }),
    ],
  },
  contact: {
    title: 'Contact Us | Six Star Impex – Greater Noida Coating Plant',
    description:
      'Get in touch with Six Star Impex in Greater Noida for CED and powder coating. Call +91 99715 35937, WhatsApp us, or send an enquiry for a fast, customized quote.',
    path: '/contact',
    image: '/images/contact-img.jpg',
    jsonLd: bc([{ name: 'Contact Us', path: '/contact' }]),
  },
  notFound: {
    title: 'Page Not Found | Six Star Impex Pvt. Ltd.',
    description: 'The page you are looking for could not be found.',
    path: '/404',
    robots: 'noindex, follow',
  },
} satisfies Record<string, PageMeta>
