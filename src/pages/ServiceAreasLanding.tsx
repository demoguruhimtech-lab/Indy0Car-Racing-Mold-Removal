import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { BUSINESS, IMAGES } from '@/data/business';
import { locations } from '@/data/locations';
import { getLocalBusinessStructuredData } from '@/data/structuredData';

export default function ServiceAreasLanding() {
  const structuredData = getLocalBusinessStructuredData();

  return (
    <>
      <SEO
        title="Service Areas in Indianapolis, IN | Indy Car Racing Mold Removal Experts"
        description="We serve Indianapolis, Indiana and the surrounding area. Learn about our verified service areas and how we can help with your mold concerns. Call 463-234-9933."
        canonicalPath="/service-areas"
        structuredData={structuredData}
      />

      <PageHero
        eyebrow="Service Areas"
        title="Mold Remediation Service Areas"
        description="Indy Car Racing Mold Removal Experts is based in Indianapolis, Indiana. We serve the local area with professional mold assessment and remediation services."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Service Areas' }]}
        image={IMAGES.indianapolisSkyline}
        imageAlt={IMAGES.indianapolisSkylineAlt}
      />

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-navy-900 mb-4">
              Where We Provide Service
            </h2>
            <p className="text-navy-600 text-lg">
              We serve the greater Indianapolis metropolitan area, including the following
              communities in central Indiana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {locations.map((location) => (
              <div key={location.slug} className="card overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={location.heroImage}
                    alt={location.heroImageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <MapPin className="h-5 w-5 text-teal-400" />
                    <span className="font-display font-bold text-lg">
                      {location.city}, {location.state}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-navy-600 text-sm leading-relaxed mb-4">
                    {location.intro.slice(0, 160)}...
                  </p>
                  <Link
                    to={`/service-areas/${location.slug}`}
                    className="inline-flex items-center gap-1 text-teal-600 font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Explore {location.city} Service Area
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-12 bg-navy-50 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-navy-900 text-xl mb-2">
              Not Sure If We Serve Your Area?
            </h3>
            <p className="text-navy-600 mb-6">
              Call us and let us know your location. We can confirm whether we are able to
              assist with your mold-related concern.
            </p>
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/20 hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Phone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
