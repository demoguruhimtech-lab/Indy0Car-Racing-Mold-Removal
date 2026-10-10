import { Link } from 'react-router-dom';
import {
  Phone,
  Search,
  ClipboardList,
  Wrench,
  Droplets,
  Shield,
  ArrowRight,
  Eye,
  Home as HomeIcon,
  Building2,
  Layers,
  CheckCircle2,
  MapPin,
  HelpCircle,
  PhoneCall,
} from 'lucide-react';
import SEO from '@/components/SEO';
import PhoneCTA from '@/components/PhoneCTA';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import FAQAccordion from '@/components/FAQAccordion';
import { BUSINESS, IMAGES } from '@/data/business';
import { services } from '@/data/services';
import { remediationProcess } from '@/data/process';
import { generalFaqs } from '@/data/faqs';
import { getLocalBusinessStructuredData, getFAQStructuredData } from '@/data/structuredData';

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const homepageFaqs = generalFaqs.slice(0, 5);
  const structuredData = getLocalBusinessStructuredData();
  const faqStructuredData = getFAQStructuredData(homepageFaqs);

  return (
    <>
      <SEO
        title="Indy Car Racing Mold Removal Experts | Professional Mold Remediation in Indianapolis"
        description="Professional mold removal and remediation services in Indianapolis, IN. We assess visible mold and moisture-related problems. Call 463-234-9933."
        canonicalPath="/"
        structuredData={[structuredData, faqStructuredData]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt={IMAGES.heroAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/40" />
        </div>

        <div className="container-page relative py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600/20 border border-teal-500/30 backdrop-blur-sm mb-6 animate-fade-in">
              <MapPin className="h-4 w-4 text-teal-400" />
              <span className="text-teal-200 text-sm font-medium">
                Serving Indianapolis, Indiana
              </span>
            </div>

            <h1 className="heading-1 text-white mb-6 animate-fade-in-up">
              Professional Mold Removal & Remediation in Indianapolis
            </h1>

            <p className="text-navy-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl animate-fade-in-up">
              Mold and moisture problems can affect any property. Our team provides
              professional mold assessment and remediation to help Indianapolis property
              owners address visible mold and moisture-related concerns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <PhoneCTA variant="primary" size="lg" />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white border-2 border-navy-600 hover:border-teal-500 hover:text-teal-400 transition-all duration-300 text-lg"
              >
                Explore Our Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="eyebrow mb-3">About Our Business</p>
              <h2 className="heading-2 text-navy-900 mb-6">
                Indianapolis Mold Remediation You Can Rely On
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Indy Car Racing Mold Removal Experts is a locally based mold inspection
                  and remediation business located in Indianapolis, Indiana. We focus on
                  helping property owners understand and address mold and moisture-related
                  concerns through professional assessment and remediation services.
                </p>
                <p>
                  Mold can develop when moisture is present in building materials and
                  indoor environments. Our approach begins with understanding what you have
                  observed, followed by a professional assessment of the affected areas. We
                  communicate clearly about our findings and the recommended scope of work.
                </p>
                <p>
                  Whether you have noticed visible mold, a persistent musty odor, or are
                  concerned after a leak or water event, we encourage you to call and
                  discuss the situation with us.
                </p>
              </div>
              <div className="mt-8">
                <PhoneCTA />
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.inspection}
                  alt={IMAGES.inspectionAlt}
                  loading="lazy"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-teal-600/10 rounded-2xl -z-10 hidden md:block" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-navy-900/5 rounded-full -z-10 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Our Services</p>
            <h2 className="heading-2 text-navy-900 mb-4">
              Featured Mold Inspection & Remediation Services
            </h2>
            <p className="text-navy-600 text-lg">
              We offer a range of mold-related services to help Indianapolis property
              owners address their specific concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
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

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Residential Mold Remediation */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.inspectorWindow}
                  alt={IMAGES.inspectorWindowAlt}
                  loading="lazy"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-teal-600 mb-3">
                <HomeIcon className="h-5 w-5" />
                <span className="eyebrow">Residential</span>
              </div>
              <h2 className="heading-2 text-navy-900 mb-6">
                Residential Mold Remediation
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Homes in Indianapolis can be affected by mold and moisture in many
                  areas, from basements and bathrooms to kitchens, laundry rooms, and
                  areas near plumbing. Our residential mold remediation services focus on
                  identifying visible mold, understanding the moisture conditions
                  contributing to it, and performing appropriate remediation work.
                </p>
                <p>
                  We assess each property individually, taking into account the specific
                  areas of concern and the conditions we observe. Our goal is to provide
                  clear information and a practical approach to addressing mold in your
                  home.
                </p>
              </div>
              <div className="mt-6 space-y-2">
                {[
                  'Basements and crawl spaces',
                  'Bathrooms and kitchens',
                  'Laundry and utility areas',
                  'Areas near plumbing or windows',
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-navy-700">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/services/residential-mold-assessment"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
                >
                  Explore Residential Mold Assessment
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Mold Remediation */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-teal-600 mb-3">
                <Building2 className="h-5 w-5" />
                <span className="eyebrow">Commercial</span>
              </div>
              <h2 className="heading-2 text-navy-900 mb-6">
                Commercial Mold Remediation
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Commercial properties, including offices, retail spaces, and other
                  business premises, can also experience mold and moisture issues. We
                  provide mold assessment and remediation services for commercial
                  properties in Indianapolis, working with property owners and managers to
                  address concerns.
                </p>
                <p>
                  Whether the issue was reported by employees, tenants, or noticed during
                  maintenance, we can assess the situation and discuss the appropriate
                  remediation approach.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/services/commercial-mold-remediation"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
                >
                  Understand Commercial Mold Remediation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.commercialSpace}
                  alt={IMAGES.commercialSpaceAlt}
                  loading="lazy"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basement Mold */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.cornerInspection}
                  alt={IMAGES.cornerInspectionAlt}
                  loading="lazy"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-teal-600 mb-3">
                <Layers className="h-5 w-5" />
                <span className="eyebrow">Basement Concerns</span>
              </div>
              <h2 className="heading-2 text-navy-900 mb-6">
                Basement Mold & Moisture-Related Problems
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Basements are one of the most common areas where mold develops in
                  Indianapolis properties. Their below-ground location, higher humidity,
                  and susceptibility to water seepage create conditions where mold can
                  thrive. If you have noticed a musty smell, visible mold, or water stains
                  in your basement, a professional inspection can help you understand the
                  situation.
                </p>
                <p>
                  We examine basement walls, floors, corners, and areas around plumbing
                  and foundations to identify visible mold and moisture conditions.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/services/basement-mold-inspection"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
                >
                  Explore Basement Mold Inspection
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mold-Affected Drywall */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-teal-600 mb-3">
                <Wrench className="h-5 w-5" />
                <span className="eyebrow">Drywall Concerns</span>
              </div>
              <h2 className="heading-2 text-navy-900 mb-6">
                Mold-Affected Drywall & Restoration Needs
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Drywall is particularly susceptible to mold when exposed to moisture. If
                  you have noticed discoloration, soft spots, peeling paint, or a musty
                  odor emanating from walls, mold may be present on or within the drywall.
                  We assess drywall surfaces for signs of mold and moisture damage and
                  discuss the appropriate approach.
                </p>
                <p>
                  Our assessment can help you understand the extent of the concern and
                  what remediation steps may be appropriate.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/services/mold-affected-drywall-assessment"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
                >
                  Understand Drywall Assessment
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.wallDamage}
                  alt={IMAGES.wallDamageAlt}
                  loading="lazy"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remediation Process */}
      <section className="section-padding bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl" />

        <div className="container-page relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-teal-400 mb-3">Our Process</p>
            <h2 className="heading-2 text-white mb-4">
              A Clear Remediation Process
            </h2>
            <p className="text-navy-200 text-lg">
              Our typical workflow follows a structured approach. The actual process
              depends on the property conditions and the specific situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {remediationProcess.map((step, index) => {
              const icons = [
                <PhoneCall key="1" className="h-7 w-7" />,
                <Search key="2" className="h-7 w-7" />,
                <ClipboardList key="3" className="h-7 w-7" />,
                <Wrench key="4" className="h-7 w-7" />,
                <Droplets key="5" className="h-7 w-7" />,
              ];
              return (
                <div
                  key={step.number}
                  className="relative group"
                >
                  <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 border border-navy-700 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="w-12 h-12 rounded-xl bg-teal-600/20 flex items-center justify-center text-teal-400 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                      {icons[index]}
                    </div>
                    <div className="text-teal-400 text-xs font-bold mb-2">
                      STEP {step.number}
                    </div>
                    <h3 className="font-display font-bold text-white mb-2 text-lg">
                      {step.title}
                    </h3>
                    <p className="text-navy-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-navy-400 text-sm max-w-2xl mx-auto mb-6">
              The specific approach depends on the property and the confirmed services
              involved. We do not guarantee complete prevention of future mold growth.
            </p>
            <PhoneCTA variant="primary" />
          </div>
        </div>
      </section>

      {/* Why Moisture Assessment Matters */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.peelingWall}
                  alt={IMAGES.peelingWallAlt}
                  loading="lazy"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-teal-600 mb-3">
                <Droplets className="h-5 w-5" />
                <span className="eyebrow">Moisture Matters</span>
              </div>
              <h2 className="heading-2 text-navy-900 mb-6">
                Why Proper Moisture Assessment Matters
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Moisture is a primary condition that allows mold to develop and grow. Without
                  understanding the moisture conditions in a property, addressing visible mold
                  alone may not resolve the underlying issue. Mold can return if moisture
                  persists in building materials and indoor environments.
                </p>
                <p>
                  A proper moisture assessment helps identify areas where moisture may be
                  present, even if it is not immediately visible. This includes examining
                  areas around plumbing, windows, foundations, and spaces where condensation
                  or humidity may be contributing to mold development.
                </p>
                <p>
                  Understanding moisture is an important part of any mold remediation process.
                  We discuss our findings with you and explain why addressing moisture is
                  relevant to the mold concerns in your property.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/services/moisture-problem-assessment"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
                >
                  Explore Moisture Problem Assessment
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Why Choose Us</p>
            <h2 className="heading-2 text-navy-900 mb-4">
              A Professional Approach to Mold Remediation
            </h2>
            <p className="text-navy-600 text-lg">
              We focus on clear communication, thorough assessment, and practical
              remediation tailored to your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone className="h-6 w-6" />,
                title: 'Clear Communication',
                description:
                  'We explain what we observe and discuss the recommended scope of work in a way that helps you make informed decisions.',
              },
              {
                icon: <Eye className="h-6 w-6" />,
                title: 'Attention to the Affected Area',
                description:
                  'We focus on the specific areas of concern and examine surrounding spaces that may also be affected.',
              },
              {
                icon: <Droplets className="h-6 w-6" />,
                title: 'Practical Moisture Assessment',
                description:
                  'We look for moisture conditions that may be contributing to mold and discuss their relevance to the situation.',
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: 'Professional Approach',
                description:
                  'We use appropriate methods and equipment, and we tailor our remediation approach to the conditions observed.',
              },
              {
                icon: <ClipboardList className="h-6 w-6" />,
                title: 'Clear Explanations',
                description:
                  'We provide clear descriptions of the proposed work so you understand what to expect throughout the process.',
              },
              {
                icon: <HomeIcon className="h-6 w-6" />,
                title: 'Respect for Your Property',
                description:
                  'We work with care and respect for your property, focusing on the areas that need attention.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card p-6"
              >
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

      {/* Reviews Section - linking to Google reviews */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow mb-3">Customer Feedback</p>
            <h2 className="heading-2 text-navy-900 mb-4">
              Reviews from Our Customers
            </h2>
            <p className="text-navy-600 text-lg">
              We encourage you to read genuine reviews from our customers on our Google
              Business listing.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-navy-50 rounded-2xl p-8 text-center border border-navy-100">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                <MapPin className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-display font-bold text-navy-900 text-xl mb-2">
                Read Reviews on Google
              </h3>
              <p className="text-navy-600 mb-6">
                Authentic customer reviews are available on our Google Business profile.
                We invite you to read what our customers have shared about their
                experience with us.
              </p>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/20 hover:-translate-y-0.5"
              >
                View Our Google Reviews
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Service Areas</p>
            <h2 className="heading-2 text-navy-900 mb-4">
              Verified Service Areas Around Indianapolis
            </h2>
            <p className="text-navy-600 text-lg">
              We are based in Indianapolis, Indiana, and serve the local area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={IMAGES.indianapolisSkyline}
                alt={IMAGES.indianapolisSkylineAlt}
                loading="lazy"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div>
              <h3 className="font-display font-bold text-navy-900 text-2xl mb-4">
                Indianapolis, Indiana
              </h3>
              <p className="text-navy-600 leading-relaxed mb-6">
                As a locally based business, we understand the conditions that
                Indianapolis properties face throughout the year. From humid summers to wet
                springs, we are familiar with the moisture and mold concerns common in the
                area.
              </p>
              <Link
                to="/service-areas/indianapolis-in"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 transition-all duration-300"
              >
                Explore Indianapolis Service Area
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-teal-600 mb-3">
              <HelpCircle className="h-5 w-5" />
              <span className="eyebrow">FAQs</span>
            </div>
            <h2 className="heading-2 text-navy-900 mb-4">
              Helpful FAQs
            </h2>
            <p className="text-navy-600 text-lg">
              Common questions about mold remediation and our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={homepageFaqs} />

            <div className="text-center mt-8">
              <Link
                to="/faqs"
                className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
              >
                View All FAQs
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />

      {/* Contact + Map */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow mb-3">Contact Us</p>
              <h2 className="heading-2 text-navy-900 mb-6">
                Contact Indy Car Racing Mold Removal Experts
              </h2>
              <p className="text-navy-600 leading-relaxed mb-8">
                If you have concerns about mold or moisture in your property, we encourage
                you to call us. We can discuss what you have noticed and help you
                understand the appropriate next steps.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 text-sm">Phone</div>
                    <a
                      href={BUSINESS.phoneLink}
                      className="text-teal-600 font-bold text-lg hover:text-teal-700 transition-colors"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 text-sm">Address</div>
                    <div className="text-navy-600">
                      {BUSINESS.address.street}
                      <br />
                      {BUSINESS.address.city}, {BUSINESS.address.state}{' '}
                      {BUSINESS.address.zip}
                    </div>
                  </div>
                </div>
              </div>

              <PhoneCTA size="lg" />
            </div>

            <div>
              <GoogleMapEmbed />
              <div className="mt-4 text-center">
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
