import { Phone, MapPin, ArrowRight, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import PhoneCTA from '@/components/PhoneCTA';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import { BUSINESS, IMAGES } from '@/data/business';
import { getLocalBusinessStructuredData } from '@/data/structuredData';

export default function Contact() {
  const structuredData = getLocalBusinessStructuredData();

  return (
    <>
      <SEO
        title="Contact Indy Car Racing Mold Removal Experts | Indianapolis, IN"
        description="Contact Indy Car Racing Mold Removal Experts at 463-234-9933. Located at 1302 N Main St, Indianapolis, IN 46224. Call us to discuss your mold-related concern."
        canonicalPath="/contact"
        structuredData={structuredData}
      />

      <PageHero
        eyebrow="Contact Us"
        title="Contact Indy Car Racing Mold Removal Experts"
        description="Call us at 463-234-9933 to discuss your mold-related concern. We are located in Indianapolis, Indiana, and we are here to help."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
        image={IMAGES.hero}
        imageAlt={IMAGES.heroAlt}
      />

      {/* Main Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <h2 className="heading-2 text-navy-900 mb-6">
                Get in Touch by Phone
              </h2>
              <p className="text-navy-600 text-lg leading-relaxed mb-8">
                We use phone calls as our contact method. If you have concerns about mold
                or moisture in your property, we encourage you to call us. We can discuss
                what you have noticed and help you understand the appropriate next steps.
              </p>

              {/* Phone Card */}
              <div className="bg-teal-50 rounded-2xl p-8 mb-6 border border-teal-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-navy-600 text-sm font-semibold">Call Us</div>
                    <a
                      href={BUSINESS.phoneLink}
                      className="text-teal-700 font-bold text-2xl hover:text-teal-800 transition-colors"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </div>
                <p className="text-navy-600 text-sm leading-relaxed mb-4">
                  When you call, it helps to describe where you have seen mold, any odors
                  you have noticed, any past water incidents, and how long you have been
                  aware of the issue.
                </p>
                <PhoneCTA size="lg" className="w-full sm:w-auto" />
              </div>

              {/* Address Card */}
              <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-navy-600 text-sm font-semibold mb-1">
                      Our Address
                    </div>
                    <div className="text-navy-900 font-medium leading-relaxed">
                      {BUSINESS.name}
                      <br />
                      {BUSINESS.address.street}
                      <br />
                      {BUSINESS.address.city}, {BUSINESS.address.state}{' '}
                      {BUSINESS.address.zip}
                      <br />
                      {BUSINESS.address.country}
                    </div>
                  </div>
                </div>
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="heading-3 text-navy-900 mb-4">Find Us on the Map</h2>
              <p className="text-navy-600 mb-6 leading-relaxed">
                We are located at {BUSINESS.address.street}, {BUSINESS.address.city},{' '}
                {BUSINESS.address.state} {BUSINESS.address.zip}. Use the map below to get
                directions to our location.
              </p>
              <GoogleMapEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* Call Instructions */}
      <section className="section-padding bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl" />

        <div className="container-page relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-teal-400 mb-4">
              <Clock className="h-5 w-5" />
              <span className="eyebrow">Call to Discuss Your Concern</span>
            </div>
            <h2 className="heading-2 text-white mb-4">
              Ready to Talk About Your Mold Concern?
            </h2>
            <p className="text-navy-200 text-lg mb-8 leading-relaxed">
              Calling is the best way to reach us. When you call, you will speak directly
              with our team about what you have noticed in your property. We can help you
              understand whether an assessment is appropriate and what the next steps may
              be.
            </p>
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-lg font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-xl shadow-teal-600/30 hover:shadow-2xl hover:-translate-y-0.5 text-xl"
            >
              <Phone className="h-6 w-6" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
