import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import ServicesLanding from '@/pages/ServicesLanding';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ServiceAreasLanding from '@/pages/ServiceAreasLanding';
import LocationPage from '@/pages/LocationPage';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import FAQs from '@/pages/FAQs';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesLanding />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/service-areas" element={<ServiceAreasLanding />} />
            <Route path="/service-areas/:slug" element={<LocationPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
