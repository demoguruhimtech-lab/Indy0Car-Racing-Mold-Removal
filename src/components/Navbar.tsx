import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Shield } from 'lucide-react';
import { NAV_LINKS, BUSINESS } from '@/data/business';

interface NavLink {
  label: string;
  path: string;
  dropdown?: { label: string; path: string }[];
}

const typedNavLinks: NavLink[] = NAV_LINKS as unknown as NavLink[];
import PhoneCTA from './PhoneCTA';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy-950 text-navy-100 text-sm hidden md:block">
        <div className="container-page flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-teal-400" />
            <span>{BUSINESS.address.full}</span>
          </div>
          <a
            href={BUSINESS.phoneLink}
            className="flex items-center gap-2 font-semibold text-teal-400 hover:text-teal-300 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-lg shadow-navy-900/5' : 'shadow-sm'
        }`}
      >
        <nav className="container-page">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center group-hover:bg-navy-800 transition-colors">
                <Shield className="h-6 w-6 text-teal-500" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-navy-900 text-sm md:text-base">
                  Indy Car Racing
                </div>
                <div className="text-teal-600 font-semibold text-xs">
                  Mold Removal Experts
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {typedNavLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => link.dropdown && handleDropdownEnter(link.label)}
                  onMouseLeave={link.dropdown ? handleDropdownLeave : undefined}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-1 ${
                      isActive(link.path)
                        ? 'text-teal-700 bg-teal-50'
                        : 'text-navy-700 hover:text-teal-700 hover:bg-navy-50'
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown className="h-4 w-4 opacity-60" />
                    )}
                  </Link>

                  {link.dropdown && openDropdown === link.label && (
                    <div className="absolute left-0 top-full pt-2 w-64 animate-slide-down">
                      <div className="bg-white rounded-xl shadow-xl border border-navy-100 py-2 overflow-hidden">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop phone CTA */}
            <div className="hidden lg:block">
              <PhoneCTA size="sm" />
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-navy-900 hover:bg-navy-50 rounded-lg transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-navy-100 bg-white animate-slide-down max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="container-page py-4 space-y-1">
              {typedNavLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive(link.path)
                        ? 'text-teal-700 bg-teal-50'
                        : 'text-navy-700 hover:bg-navy-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-navy-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <PhoneCTA size="md" className="w-full" />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function MapPin({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
