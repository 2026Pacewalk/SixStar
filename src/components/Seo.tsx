import { useEffect } from 'react'
import { SITE_URL, DEFAULT_IMAGE, ORG_NAME, type PageMeta } from '../data/seo'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setOrRemoveMeta(property: string, content?: number) {
  const existing = document.head.querySelector(`meta[property="${property}"]`)
  if (content == null) {
    existing?.remove()
    return
  }
  if (existing) {
    existing.setAttribute('content', String(content))
  } else {
    const el = document.createElement('meta')
    el.setAttribute('property', property)
    el.setAttribute('content', String(content))
    document.head.appendChild(el)
  }
}

const PAGE_LD_ID = 'page-jsonld'

export default function Seo({
  title,
  description,
  path,
  image,
  imageWidth,
  imageHeight,
  robots,
  jsonLd,
}: PageMeta) {
  const url = `${SITE_URL}${path === '/' ? '/' : path}`
  const img = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : DEFAULT_IMAGE
  const ldStr = jsonLd ? JSON.stringify(jsonLd) : ''

  useEffect(() => {
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', robots ?? 'index, follow')
    upsertLink('canonical', url)

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:image', img)
    upsertMeta('property', 'og:image:secure_url', img)
    upsertMeta('property', 'og:image:type', img.endsWith('.png') ? 'image/png' : 'image/jpeg')
    upsertMeta('property', 'og:image:alt', title)
    setOrRemoveMeta('og:image:width', imageWidth)
    setOrRemoveMeta('og:image:height', imageHeight)
    upsertMeta('property', 'og:site_name', ORG_NAME)
    upsertMeta('property', 'og:locale', 'en_IN')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', img)

    let script = document.getElementById(PAGE_LD_ID) as HTMLScriptElement | null
    if (ldStr) {
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = PAGE_LD_ID
        document.head.appendChild(script)
      }
      script.textContent = ldStr
    } else if (script) {
      script.remove()
    }
  }, [title, description, url, img, imageWidth, imageHeight, robots, ldStr])

  return null
}
