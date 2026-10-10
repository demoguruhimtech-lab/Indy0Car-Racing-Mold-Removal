import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import PhoneCTA from '@/components/PhoneCTA';
import { BUSINESS, IMAGES } from '@/data/business';
import { services } from '@/data/services';
import { getLocalBusinessStructuredData } from '@/data/structuredData';

export default function ServicesLanding() {
  const structuredData = getLocalBusinessStructuredData();

  return (
    <>
      <SEO
        title="Mold Remediation Services in Indianapolis | Indy Car Racing Mold Removal Experts"
        description="Explore our full range of mold inspection, assessment, and remediation services in Indianapolis, IN. Call 463-234-9933 to discuss your concern."
        canonicalPath="/services"
        structuredData={structuredData}
      />

      <PageHero
        eyebrow="Our Services"
        title="Mold Inspection & Remediation Services"
        description="We offer professional mold assessment and remediation services for residential and commercial properties in Indianapolis. Explore our services below to learn more about how we can help."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Services' }]}
        image={IMAGES.hero}
        imageAlt={IMAGES.heroAlt}
      />

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-navy-900 mb-4">
              Complete Mold Remediation Services
            </h2>
            <p className="text-navy-600 text-lg">
              Each service is tailored to the specific conditions of your property. Click
              on a service to learn more about the process and what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.shortTitle}
                description={service.intro.slice(0, 130) + '...'}
                slug={service.slug}
                ctaLabel={`Explore ${service.shortTitle}`}
                image={service.heroImage}
                imageAlt={service.heroImageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-navy-900 mb-4">
              How We Approach Each Service
            </h2>
            <p className="text-navy-600 text-lg">
              Regardless of the specific service, our approach follows a consistent
              pattern: discuss, assess, plan, perform, and address moisture.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-navy-100">
              <h3 className="font-display font-bold text-navy-900 mb-2">
                Discussion First
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                Every engagement starts with a phone call. You describe what you have
                noticed, and we prepare to assess the situation based on your description.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-navy-100">
              <h3 className="font-display font-bold text-navy-900 mb-2">
                Property Assessment
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                We examine the areas of concern for visible mold and moisture conditions.
                The assessment informs the recommended scope of work.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-navy-100">
              <h3 className="font-display font-bold text-navy-900 mb-2">
                Clear Recommendations
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                We explain what we found and describe the remediation work we recommend,
                so you can make informed decisions about your property.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-navy-100">
              <h3 className="font-display font-bold text-navy-900 mb-2">
                Professional Remediation
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                We perform the remediation work using appropriate methods and equipment,
                tailored to the conditions observed during the assessment.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <PhoneCTA size="lg" />
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        description="Call us and describe what you have noticed. We can help you understand which service may be appropriate for your situation."
      />
    </>
  );
}
