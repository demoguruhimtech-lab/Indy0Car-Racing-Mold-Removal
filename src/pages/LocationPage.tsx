import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import PhoneCTA from '@/components/PhoneCTA';
import { getLocation } from '@/data/locations';
import { BUSINESS } from '@/data/business';
import { getLocalBusinessStructuredData, getFAQStructuredData } from '@/data/structuredData';

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? getLocation(slug) : undefined;

  if (!location) {
    return <Navigate to="/service-areas" replace />;
  }

  const localBusinessData = getLocalBusinessStructuredData();
  const faqData = getFAQStructuredData(location.faqs);

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        canonicalPath={`/service-areas/${location.slug}`}
        ogImage={location.heroImage}
        structuredData={[localBusinessData, faqData]}
      />

      <PageHero
        eyebrow={`${location.city}, ${location.state}`}
        title={location.h1}
        description={location.metaDescription}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Service Areas', path: '/service-areas' },
          { label: `${location.city}, ${location.state}` },
        ]}
        image={location.heroImage}
        imageAlt={location.heroImageAlt}
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-3 text-navy-900 mb-6">
                About Our {location.city} Services
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed text-lg">
                <p>{location.intro}</p>
                <p>{location.localContext}</p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-navy-900 rounded-2xl p-8 sticky top-28">
                <h3 className="font-display font-bold text-white text-xl mb-3">
                  Serving {location.city}, {location.state}
                </h3>
                <p className="text-navy-300 text-sm mb-6 leading-relaxed">
                  Call us to discuss your mold-related concern. We can confirm whether we
                  serve your specific location.
                </p>
                <a
                  href={BUSINESS.phoneLink}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-lg font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/30"
                >
                  <Phone className="h-5 w-5" />
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Concerns */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={location.image2}
                alt={location.image2Alt}
                loading="lazy"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="heading-3 text-navy-900 mb-6">
                Common Mold Concerns in {location.city}
              </h2>
              <div className="space-y-3">
                {location.commonConcerns.map((concern, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{concern}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-3 text-navy-900 mb-4">
              Mold Removal & Remediation in {location.city}
            </h2>
            <p className="text-navy-600 text-lg leading-relaxed mb-8">
              Our primary service in {location.city} is professional mold assessment and
              remediation. We evaluate visible mold and moisture conditions, and we perform
              remediation work tailored to the specific situation in your property.
            </p>
            <Link
              to="/services/mold-remediation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 transition-all duration-300"
            >
              Explore Mold Remediation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Info Bar */}
      <section className="bg-navy-900 py-12">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-teal-400 mb-2">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold text-sm uppercase tracking-wider">Our Location</span>
              </div>
              <div className="text-white text-lg">
                <div className="font-display font-bold">{BUSINESS.name}</div>
                <div className="text-navy-300 mt-1">
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                </div>
              </div>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-teal-400 font-semibold hover:text-teal-300 transition-colors"
              >
                Get Directions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="text-center md:text-right">
              <PhoneCTA size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="heading-3 text-navy-900 mb-4">
              {location.city} Area FAQs
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={location.faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
