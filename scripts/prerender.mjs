// Post-build prerender: loads each route from the built SPA in headless Chrome,
// waits for the <Seo> tags + content to render, then writes a static
// dist/<route>/index.html so no-JS social crawlers get correct meta/OG tags.
import { createServer } from 'node:http'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import sirv from 'sirv'
import puppeteer from 'puppeteer-core'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = resolve(__dirname, '..', 'dist')
const PORT = 5399

const CHROME =
  process.env.CHROME_PATH ||
  'C:/Program Files/Google/Chrome/Application/chrome.exe'

// All client routes to prerender (must match src/App.tsx <Routes>)
const ROUTES = [
  '/',
  '/about',
  '/history',
  '/facility',
  '/certifications',
  '/management',
  '/customers',
  '/ced-coating',
  '/powder-coating',
  '/contact',
]

// Static server with SPA fallback so every route serves the app shell.
function startServer() {
  const serve = sirv(DIST, { single: true, dev: true })
  return new Promise((res) => {
    const server = createServer((req, rsp) => serve(req, rsp))
    server.listen(PORT, () => res(server))
  })
}

function writeRoute(route, html) {
  const clean =
    route === '/'
      ? resolve(DIST, 'index.html')
      : resolve(DIST, '.' + route, 'index.html')
  mkdirSync(dirname(clean), { recursive: true })
  writeFileSync(clean, html, 'utf8')
  return clean
}

const run = async () => {
  const server = await startServer()
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  let ok = 0
  for (const route of ROUTES) {
    const page = await browser.newPage()
    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      })
      // Wait until <Seo> has applied a real title + description + canonical.
      await page.waitForFunction(
        () =>
          document.title &&
          document.querySelector('meta[name="description"]')?.content &&
          document.querySelector('link[rel="canonical"]') &&
          document.getElementById('root')?.childElementCount > 0,
        { timeout: 15000 },
      )
      const html = '<!doctype html>\n' + (await page.evaluate(() => document.documentElement.outerHTML))
      const file = writeRoute(route, html)
      const title = await page.title()
      console.log(`  ✓ ${route.padEnd(16)} → ${file.replace(DIST, 'dist')}  [${title.slice(0, 45)}]`)
      ok++
    } catch (e) {
      console.log(`  ✗ ${route}  FAILED: ${e.message}`)
    } finally {
      await page.close()
    }
  }

  await browser.close()
  server.close()
  console.log(`\nPrerendered ${ok}/${ROUTES.length} routes.`)
  if (ok < ROUTES.length) process.exit(1)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
