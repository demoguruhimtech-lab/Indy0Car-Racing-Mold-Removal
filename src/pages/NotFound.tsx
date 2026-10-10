import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PhoneCTA from '@/components/PhoneCTA';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Indy Car Racing Mold Removal Experts"
        description="The page you are looking for does not exist. Please visit our homepage or call 463-234-9933."
        canonicalPath="/404"
      />
      <section className="min-h-[60vh] flex items-center bg-navy-50">
        <div className="container-page text-center">
          <div className="max-w-xl mx-auto">
            <div className="text-teal-600 font-display font-bold text-7xl mb-4">404</div>
            <h1 className="heading-2 text-navy-900 mb-4">Page Not Found</h1>
            <p className="text-navy-600 text-lg mb-8 leading-relaxed">
              The page you are looking for may have been moved or does not exist. Please
              return to the homepage or explore our services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-navy-900 hover:bg-navy-800 transition-all duration-300"
              >
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-8">
              <PhoneCTA variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
