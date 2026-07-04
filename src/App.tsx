import { Route, Routes } from 'react-router-dom'
import { QuoteProvider } from './context/QuoteContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'
import FloatingButtons from './components/FloatingButtons'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import History from './pages/History'
import Facility from './pages/Facility'
import Certifications from './pages/Certifications'
import Management from './pages/Management'
import Customers from './pages/Customers'
import CedCoating from './pages/CedCoating'
import PowderCoating from './pages/PowderCoating'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <QuoteProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/management" element={<Management />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/ced-coating" element={<CedCoating />} />
          <Route path="/powder-coating" element={<PowderCoating />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
      <QuoteModal />
    </QuoteProvider>
  )
}
