import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { BUSINESS, IMAGES } from '@/data/business';
import { generalFaqs } from '@/data/faqs';
import { getFAQStructuredData } from '@/data/structuredData';

export default function FAQs() {
  const categories = Array.from(new Set(generalFaqs.map((f) => f.category)));
  const faqData = getFAQStructuredData(generalFaqs);

  return (
    <>
      <SEO
        title="FAQs About Mold Remediation | Indy Car Racing Mold Removal Experts"
        description="Frequently asked questions about mold remediation, inspection, moisture problems, and when to call a professional. Call 463-234-9933 for answers."
        canonicalPath="/faqs"
        structuredData={faqData}
      />

      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        description="Common questions about mold remediation, inspection, and our services. If you have a question that is not answered here, please call us."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'FAQs' }]}
        image={IMAGES.hero}
        imageAlt={IMAGES.heroAlt}
      />

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            {categories.map((category) => (
              <div key={category} className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="h-5 w-5 text-teal-600" />
                  <h2 className="font-display font-bold text-navy-900 text-2xl">
                    {category}
                  </h2>
                </div>
                <FAQAccordion
                  faqs={generalFaqs.filter((f) => f.category === category)}
                />
              </div>
            ))}

            {/* Still have questions */}
            <div className="bg-navy-50 rounded-2xl p-8 text-center mt-12 border border-navy-100">
              <h3 className="font-display font-bold text-navy-900 text-xl mb-2">
                Still Have Questions?
              </h3>
              <p className="text-navy-600 mb-6">
                If your question is not answered here, we encourage you to call us. We can
                discuss your specific situation and provide the information you need.
              </p>
              <a
                href={BUSINESS.phoneLink}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/20 hover:-translate-y-0.5"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS.phoneDisplay}
              </a>
            </div>

            {/* Link to services */}
            <div className="text-center mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
              >
                Explore Our Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
