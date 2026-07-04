import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { pageSeo } from '../data/seo'

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center pt-24 text-center">
      <Seo {...pageSeo.notFound} />
      <div className="container">
        <div className="bg-brand-gradient bg-clip-text text-8xl font-extrabold text-transparent">404</div>
        <h1 className="mt-4 text-3xl font-bold">Page Not Found</h1>
        <p className="mt-3 text-muted">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
