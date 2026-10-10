import { Link } from 'react-router-dom';
import { ArrowRight, Shield, MapPin, Phone, Eye, Droplets, ClipboardList, Home } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import PhoneCTA from '@/components/PhoneCTA';
import { BUSINESS, IMAGES } from '@/data/business';
import { getLocalBusinessStructuredData } from '@/data/structuredData';

export default function About() {
  const structuredData = getLocalBusinessStructuredData();

  return (
    <>
      <SEO
        title="About Indy Car Racing Mold Removal Experts | Indianapolis, IN"
        description="Learn about Indy Car Racing Mold Removal Experts, a locally based mold inspection and remediation business in Indianapolis, Indiana. Call 463-234-9933."
        canonicalPath="/about"
        structuredData={structuredData}
      />

      <PageHero
        eyebrow="About Us"
        title="About Indy Car Racing Mold Removal Experts"
        description="A locally based mold inspection and remediation business serving Indianapolis, Indiana. We focus on helping property owners understand and address mold and moisture-related concerns."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
        image={IMAGES.clipboard}
        imageAlt={IMAGES.clipboardAlt}
      />

      {/* Main About Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.inspection}
                  alt={IMAGES.inspectionAlt}
                  loading="lazy"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-teal-600/10 rounded-2xl -z-10 hidden md:block" />
            </div>

            <div>
              <p className="eyebrow mb-3">Our Business</p>
              <h2 className="heading-2 text-navy-900 mb-6">
                A Focused Approach to Mold Remediation
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Indy Car Racing Mold Removal Experts is a mold inspection and remediation
                  business located in Indianapolis, Indiana. We are based at {BUSINESS.address.street}{' '}
                  and serve the local Indianapolis area.
                </p>
                <p>
                  Our focus is on helping property owners address mold and moisture-related
                  concerns through professional assessment and remediation. We begin by
                  listening to what you have observed, then assess the affected areas to
                  understand the conditions present. Based on our findings, we discuss the
                  recommended scope of work and perform remediation tailored to the
                  situation.
                </p>
                <p>
                  We believe that clear communication is essential. We explain what we
                  find, describe the work we recommend, and answer your questions so you
                  can make informed decisions about your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Our Approach</p>
            <h2 className="heading-2 text-navy-900 mb-4">
              How We Work with Property Owners
            </h2>
            <p className="text-navy-600 text-lg">
              Our approach is based on understanding your concerns, assessing the property,
              and communicating clearly about what we find.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone className="h-6 w-6" />,
                title: 'Start with a Call',
                description:
                  'Every engagement begins with a phone call. You describe what you have noticed, and we listen carefully to understand the situation.',
              },
              {
                icon: <Eye className="h-6 w-6" />,
                title: 'Thorough Assessment',
                description:
                  'We examine the areas of concern and look for visible mold and moisture conditions that may be contributing to the problem.',
              },
              {
                icon: <ClipboardList className="h-6 w-6" />,
                title: 'Clear Recommendations',
                description:
                  'We explain what we found and describe the remediation work we recommend, so you understand what is involved.',
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: 'Professional Remediation',
                description:
                  'We perform the work using appropriate methods and equipment, tailored to the specific conditions of your property.',
              },
              {
                icon: <Droplets className="h-6 w-6" />,
                title: 'Moisture Awareness',
                description:
                  'We discuss the moisture conditions that contributed to the mold and explain why addressing them is important.',
              },
              {
                icon: <Home className="h-6 w-6" />,
                title: 'Respect for Your Property',
                description:
                  'We work with care and respect for your property throughout the assessment and remediation process.',
              },
            ].map((item, index) => (
              <div key={index} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-navy-900 mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do and Don't Do */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-teal-50 rounded-2xl p-8">
              <h3 className="font-display font-bold text-navy-900 text-xl mb-4">
                What We Focus On
              </h3>
              <ul className="space-y-3">
                {[
                  'Mold inspection and assessment',
                  'Mold removal and remediation',
                  'Moisture problem assessment',
                  'Residential and commercial properties',
                  'Basement mold concerns',
                  'Post-leak mold assessment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-navy-700">
                    <span className="text-teal-600 font-bold mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-50 rounded-2xl p-8">
              <h3 className="font-display font-bold text-navy-900 text-xl mb-4">
                What We Do Not Provide
              </h3>
              <ul className="space-y-3">
                {[
                  'Mold testing or laboratory analysis',
                  'Water damage restoration',
                  'Reconstruction or building repair',
                  'Guarantees of future mold prevention',
                  'Health or medical diagnoses',
                  'Lead generation or third-party referrals',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-navy-600">
                    <span className="text-navy-400 font-bold mt-0.5">&#10007;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-navy-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 text-teal-600 mb-3">
                    <MapPin className="h-5 w-5" />
                    <span className="eyebrow">Our Address</span>
                  </div>
                  <div className="text-navy-700 text-lg leading-relaxed">
                    <div className="font-display font-bold text-navy-900 mb-1">
                      {BUSINESS.name}
                    </div>
                    {BUSINESS.address.street}
                    <br />
                    {BUSINESS.address.city}, {BUSINESS.address.state}{' '}
                    {BUSINESS.address.zip}
                    <br />
                    {BUSINESS.address.country}
                  </div>
                  <a
                    href={BUSINESS.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    Get Directions
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-teal-600 mb-3">
                    <Phone className="h-5 w-5" />
                    <span className="eyebrow">Contact by Phone</span>
                  </div>
                  <a
                    href={BUSINESS.phoneLink}
                    className="text-teal-600 font-bold text-2xl hover:text-teal-700 transition-colors block mb-4"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                  <p className="text-navy-600 text-sm leading-relaxed mb-4">
                    We use phone calls as our primary contact method. Call us to discuss
                    your mold-related concern and we will help you understand the
                    appropriate next steps.
                  </p>
                  <PhoneCTA />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Learn More About Our Services?"
        description="Explore our full range of mold inspection and remediation services, or call us to discuss your specific concern."
      />
    </>
  );
}
