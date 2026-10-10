import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';

export default function CTASection({
  title = 'Ready to Address Your Mold Concern?',
  description = 'Call us today to discuss what you have noticed. We can assess the situation and help you understand the appropriate next steps.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700" />
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl" />

      <div className="container-page relative py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-4">{title}</h2>
          <p className="text-navy-200 text-lg mb-8 leading-relaxed">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-xl shadow-teal-600/30 hover:shadow-2xl hover:-translate-y-0.5 text-lg"
            >
              <Phone className="h-5 w-5" />
              {BUSINESS.phoneDisplay}
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white border-2 border-navy-600 hover:border-teal-500 hover:text-teal-400 transition-all duration-300"
            >
              Explore Our Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
