import { Link } from 'react-router-dom';
import { Shield, Phone, MapPin } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/data/business';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      {/* CTA Bar */}
      <div className="border-b border-navy-800">
        <div className="container-page py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold text-white">
              Concerned About Mold in Your Property?
            </h3>
            <p className="text-navy-300 mt-2">
              Call us today to discuss what you have noticed. We are here to help.
            </p>
          </div>
          <a
            href={BUSINESS.phoneLink}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/30 hover:shadow-xl hover:-translate-y-0.5 text-lg"
          >
            <Phone className="h-5 w-5" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center">
                <Shield className="h-6 w-6 text-teal-500" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-white text-sm">
                  Indy Car Racing
                </div>
                <div className="text-teal-400 font-semibold text-xs">
                  Mold Removal Experts
                </div>
              </div>
            </Link>
            <p className="text-sm text-navy-400 leading-relaxed">
              Professional mold inspection, assessment, and remediation services based in
              Indianapolis, Indiana.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-navy-400 hover:text-teal-400 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-teal-400 font-semibold hover:text-teal-300 transition-colors"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-navy-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={BUSINESS.phoneLink}
                  className="flex items-center gap-2 text-teal-400 font-semibold hover:text-teal-300 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-navy-400">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-teal-500" />
                <span>
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                  <br />
                  {BUSINESS.address.country}
                </span>
              </li>
              <li>
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition-colors"
                >
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-navy-500">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-navy-600">
            {BUSINESS.address.city}, {BUSINESS.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
