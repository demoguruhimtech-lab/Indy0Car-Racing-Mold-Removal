import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: { label: string; path?: string }[];
  image: string;
  imageAlt: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="container-page pt-6">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-navy-300">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {item.path ? (
                <Link to={item.path} className="hover:text-teal-400 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="h-4 w-4 text-navy-400" />
              )}
            </li>
          ))}
        </ol>
      </nav>

      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/80 to-navy-900/40" />
        </div>

        <div className="container-page relative py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-teal-400 mb-3">{eyebrow}</p>
            <h1 className="heading-1 text-white mb-4">{title}</h1>
            <p className="text-navy-200 text-lg md:text-xl leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
